// src/components/JoinHive.tsx
import React, { useState } from 'react'
import {
  User,
  ArrowLeft,
  Hexagon,
  CheckCircle2,
  Upload,
} from 'lucide-react'
import { supabase } from '../lib/supabaseClient'

interface JoinHiveProps {
  onBack: () => void
}

type FormData = {
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

const JoinHivePage: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <section className="relative min-h-screen overflow-hidden bg-hive-night pt-28 pb-20">
    <div className="pointer-events-none absolute inset-0 bg-honeycomb opacity-30" />
    <div className="pointer-events-none absolute -top-32 right-1/4 h-80 w-80 rounded-full bg-gold/10 blur-[120px]" />
    <div className="pointer-events-none absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-gold-dark/15 blur-[120px]" />
    <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
  </section>
)

const JoinHive: React.FC<JoinHiveProps> = ({ onBack }) => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    university: '',
    dob: '',
    hasCar: 'no',
    hasExperience: 'no',
    photo: null,
    resume: null,
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value as unknown as never }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target
    const file = e.target.files?.[0] ?? null
    setFormData((prev) => ({ ...prev, [name]: file as unknown as never }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      let photo_url: string | null = null
      if (formData.photo) {
        const path = `selfies/${Date.now()}_${formData.photo.name}`
        const { data: uploadPhoto, error: photoErr } = await supabase.storage
          .from('self-portrait')
          .upload(path, formData.photo, { upsert: false })
        if (photoErr) throw photoErr
        photo_url = supabase.storage
          .from('self-portrait')
          .getPublicUrl(uploadPhoto.path).data.publicUrl
      }

      let resume_url: string | null = null
      if (formData.resume) {
        const path = `resumes/${Date.now()}_${formData.resume.name}`
        const { data: uploadRes, error: resErr } = await supabase.storage
          .from('self-portrait')
          .upload(path, formData.resume, { upsert: false })
        if (resErr) throw resErr
        resume_url = supabase.storage
          .from('self-portrait')
          .getPublicUrl(uploadRes.path).data.publicUrl
      }

      const { error: insertErr } = await supabase
        .from('join_hive_requests')
        .insert({
          full_name: formData.fullName,
          email: formData.email,
          phone_number: formData.phone,
          address: formData.address,
          university: formData.university,
          date_of_birth: formData.dob,
          has_car: formData.hasCar,
          has_experience: formData.hasExperience,
          photo_url,
          resume_url,
        })
      if (insertErr) throw insertErr

      setIsSubmitted(true)
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          address: '',
          university: '',
          dob: '',
          hasCar: 'no',
          hasExperience: 'no',
          photo: null,
          resume: null,
        })
      }, 3000)
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : 'Unknown error'
      console.error('Submission error:', error)
      alert(`Submission failed:\n${message}`)
    } finally {
      setLoading(false)
    }
  }

  if (isSubmitted) {
    return (
      <JoinHivePage>
        <button
          onClick={onBack}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-hive-border bg-hive-card/50 px-4 py-2 text-sm text-white/70 backdrop-blur transition-colors hover:border-gold/60 hover:text-gold"
        >
          <ArrowLeft className="h-4 w-4" /> Back
        </button>
        <div className="mx-auto max-w-xl rounded-3xl border border-gold/30 bg-hive-card/60 p-10 text-center shadow-glow backdrop-blur">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gold/15 ring-1 ring-gold/40">
            <CheckCircle2 className="h-8 w-8 text-gold" />
          </div>
          <h3 className="mt-6 text-2xl font-bold text-white sm:text-3xl">
            Welcome to the hive!
          </h3>
          <p className="mt-3 text-white/60">
            Our sweetest bees will connect with you shortly.
          </p>
        </div>
      </JoinHivePage>
    )
  }

  return (
    <JoinHivePage>
      <button
        onClick={onBack}
        className="mb-8 inline-flex items-center gap-2 rounded-full border border-hive-border bg-hive-card/50 px-4 py-2 text-sm text-white/70 backdrop-blur transition-colors hover:border-gold/60 hover:text-gold"
      >
        <ArrowLeft className="h-4 w-4" /> Back
      </button>

      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-gold">
            <Hexagon className="h-3.5 w-3.5 fill-gold text-gold" />
            For Talent
          </div>
          <h1 className="mt-6 text-4xl font-bold text-white sm:text-5xl">
            Join Your <span className="text-gold-gradient">Hive</span>
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-white/60">
            Flexible roles, real experience, weekly pay. Tell us a bit about
            yourself — the hive is ready when you are.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-10 space-y-6">
          {/* Personal info */}
          <div className="panel-hive p-6 sm:p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold/15 ring-1 ring-gold/30">
                <User className="h-5 w-5 text-gold" />
              </div>
              <h3 className="text-xl font-semibold text-white sm:text-2xl">
                Your Info
              </h3>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Full Name"
                required
                className="input-hive"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
                className="input-hive"
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                required
                className="input-hive"
              />
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Address"
                required
                className="input-hive"
              />
            </div>

            <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
              <label className="flex flex-col">
                <span className="label-hive">Current University</span>
                <input
                  type="text"
                  name="university"
                  value={formData.university}
                  onChange={handleChange}
                  placeholder="e.g. University of Jordan"
                  required
                  className="input-hive"
                />
              </label>
              <label className="flex flex-col">
                <span className="label-hive">Date of Birth</span>
                <input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  required
                  className="input-hive"
                />
              </label>
            </div>
          </div>

          {/* Uploads */}
          <div className="panel-hive p-6 sm:p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold/15 ring-1 ring-gold/30">
                <Upload className="h-5 w-5 text-gold" />
              </div>
              <h3 className="text-xl font-semibold text-white sm:text-2xl">
                Documents
              </h3>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <label className="flex flex-col">
                <span className="label-hive">Self-portrait</span>
                <input
                  type="file"
                  name="photo"
                  accept="image/*"
                  onChange={handleFileChange}
                  required
                  className="input-hive file:mr-3 file:rounded-lg file:border-0 file:bg-gold/15 file:px-3 file:py-1.5 file:text-xs file:font-semibold file:text-gold"
                />
              </label>
              <label className="flex flex-col">
                <span className="label-hive">Resume (PDF / DOC)</span>
                <input
                  type="file"
                  name="resume"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="input-hive file:mr-3 file:rounded-lg file:border-0 file:bg-gold/15 file:px-3 file:py-1.5 file:text-xs file:font-semibold file:text-gold"
                />
              </label>
            </div>
          </div>

          {/* Quick questions */}
          <div className="panel-hive p-6 sm:p-8">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <label className="flex flex-col">
                <span className="label-hive">Do you have a car?</span>
                <select
                  name="hasCar"
                  value={formData.hasCar}
                  onChange={handleChange}
                  required
                  className="input-hive"
                >
                  <option value="yes" className="bg-hive-night">
                    Yes
                  </option>
                  <option value="no" className="bg-hive-night">
                    No
                  </option>
                </select>
              </label>
              <label className="flex flex-col">
                <span className="label-hive">Work experience?</span>
                <select
                  name="hasExperience"
                  value={formData.hasExperience}
                  onChange={handleChange}
                  required
                  className="input-hive"
                >
                  <option value="yes" className="bg-hive-night">
                    Yes
                  </option>
                  <option value="no" className="bg-hive-night">
                    No
                  </option>
                </select>
              </label>
            </div>
          </div>

          {/* Submit */}
          <div className="pt-2 text-center">
            <button
              type="submit"
              disabled={loading}
              className={`
                inline-flex w-full items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-semibold transition-all duration-300 md:w-auto
                ${
                  loading
                    ? 'cursor-not-allowed bg-white/10 text-white/50'
                    : 'bg-gold-gradient text-hive-night shadow-honey hover:-translate-y-0.5 hover:shadow-glow-lg'
                }
              `}
            >
              {loading ? 'Submitting…' : 'Submit Application'}
            </button>
          </div>
        </form>
      </div>
    </JoinHivePage>
  )
}

export default JoinHive
