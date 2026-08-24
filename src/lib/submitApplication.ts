// src/lib/submitApplication.ts
//
// Shared submit path for the two talent forms (Join Your Hive and
// Join The Royal Swarm). Files go into the PRIVATE 'applicants' bucket
// (the admin portal reads them through short-lived signed URLs), and the
// row lands in the unified `applicants` table that feeds the portal's
// Bee-cruitment page. Anon may only INSERT — it can never read rows or
// files back (see BeeWork_Admin/scripts/recruitment.sql).

import { supabase } from './supabaseClient'

export interface ApplicationForm {
  fullName: string
  email: string
  phone: string
  address: string
  university: string
  dob: string
  hasCar: 'yes' | 'no'
  hasExperience: 'yes' | 'no'
  photo: File | null
  resume: File | null
}

const BUCKET = 'applicants'

async function uploadPrivate(prefix: 'photos' | 'resumes', file: File): Promise<string> {
  const safeName = file.name.replace(/[^\w.-]+/g, '_').slice(-60)
  const path = `${prefix}/${crypto.randomUUID()}_${safeName}`
  const { error } = await supabase.storage.from(BUCKET).upload(path, file, { upsert: false })
  if (error) throw error
  return path
}

export async function submitApplication(
  form: ApplicationForm,
  source: 'bee' | 'royal_swarm',
): Promise<void> {
  const photo_path = form.photo ? await uploadPrivate('photos', form.photo) : null
  const resume_path = form.resume ? await uploadPrivate('resumes', form.resume) : null

  const { error } = await supabase.from('applicants').insert({
    full_name: form.fullName,
    email: form.email,
    phone: form.phone,
    address: form.address,
    university: form.university,
    date_of_birth: form.dob,
    has_car: form.hasCar === 'yes',
    has_experience: form.hasExperience === 'yes',
    photo_path,
    resume_path,
    source,
  })
  if (error) throw error
}
