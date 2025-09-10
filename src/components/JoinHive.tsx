// src/components/JoinHive.tsx
import React, { useState, useEffect } from 'react'
import { User } from 'lucide-react'
import { supabase } from '../lib/supabaseClient'
import background3 from '../assets/background3.png'
import background6 from '../assets/background6.png'

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

  // responsive background: desktop = background3, mobile (<640px) = background6
  const [bgImage, setBgImage] = useState(background3)
  useEffect(() => {
    function updateBg() {
      setBgImage(window.innerWidth < 640 ? background6 : background3)
    }
    updateBg()
    window.addEventListener('resize', updateBg)
    return () => window.removeEventListener('resize', updateBg)
  }, [])

  const wrapperClasses =
    'scroll-mt-24 relative py-16 min-h-screen bg-cover bg-center'
  const wrapperStyle = {
    backgroundColor: '#000',
    backgroundImage: `url(${bgImage})`,
    backgroundRepeat: 'no-repeat' as const,
    backgroundSize: 'cover' as const,
    backgroundPosition: 'center center' as const,
    backgroundAttachment: 'scroll' as const,
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value as any }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target
    const file = e.target.files?.[0] ?? null
    setFormData(prev => ({ ...prev, [name]: file }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      let photo_url: string | null = null
      if (formData.photo) {
        const path = `selfies/${Date.now()}_${formData.photo.name}`
        const { data: uploadPhoto, error: photoErr } = await supabase
          .storage
          .from('self-portrait')
          .upload(path, formData.photo, { upsert: false })
        if (photoErr) throw photoErr
        photo_url = supabase
          .storage
          .from('self-portrait')
          .getPublicUrl(uploadPhoto.path)
          .data.publicUrl
      }

      let resume_url: string | null = null
      if (formData.resume) {
        const path = `resumes/${Date.now()}_${formData.resume.name}`
        const { data: uploadRes, error: resErr } = await supabase
          .storage
          .from('self-portrait')
          .upload(path, formData.resume, { upsert: false })
        if (resErr) throw resErr
        resume_url = supabase
          .storage
          .from('self-portrait')
          .getPublicUrl(uploadRes.path)
          .data.publicUrl
      }

      const { error: insertErr } = await supabase
        .from('join_hive_requests')
        .insert({
          full_name:      formData.fullName,
          email:          formData.email,
          phone_number:   formData.phone,
          address:        formData.address,
          university:     formData.university,
          date_of_birth:  formData.dob,
          has_car:        formData.hasCar,
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
    } catch (error: any) {
      console.error('Submission error:', error)
      alert(`Submission failed:\n${error.message}`)
    } finally {
      setLoading(false)
    }
  }

  if (isSubmitted) {
    return (
      <section id="join-hive" className={wrapperClasses} style={wrapperStyle}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <button onClick={onBack} className="mb-6 text-bee-red hover:underline">
            ← Back
          </button>
          <div className="mx-auto max-w-xl bg-white/30 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg animate-pulse p-6 sm:p-8">
            <User className="w-12 h-12 text-bee-black mx-auto mb-4" />
            <h3 className="text-xl sm:text-2xl font-bold mb-2">
              Thank you for joining our hive.
            </h3>
            <p className="text-base sm:text-lg text-gray-600">
              Our sweetest bees will connect with you shortly!
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="join-hive" className={wrapperClasses} style={wrapperStyle}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <button onClick={onBack} className="mb-6 text-bee-red hover:underline">
          ← Back
        </button>

        {/* Glass-blur card wrapper */}
        <div className="mx-auto max-w-3xl bg-white/30 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6">
            Join Your Hive
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Full Name"
                required
                className="w-full px-4 py-3 border rounded focus:ring-2 focus:ring-honey"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
                className="w-full px-4 py-3 border rounded focus:ring-2 focus:ring-honey"
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                required
                className="w-full px-4 py-3 border rounded focus:ring-2 focus:ring-honey"
              />
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Address"
                required
                className="w-full px-4 py-3 border rounded focus:ring-2 focus:ring-honey"
              />
            </div>

            {/* University & DOB */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="flex flex-col">
                <span className="mb-1 text-sm sm:text-base">Current University</span>
                <input
                  type="text"
                  name="university"
                  value={formData.university}
                  onChange={handleChange}
                  placeholder="e.g. University of Jordan"
                  required
                  className="w-full px-4 py-3 border rounded focus:ring-2 focus:ring-honey"
                />
              </label>
              <label className="flex flex-col">
                <span className="mb-1 text-sm sm:text-base">Date of Birth</span>
                <input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border rounded focus:ring-2 focus:ring-honey"
                />
              </label>
            </div>

            {/* Photo & Resume */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="flex flex-col">
                <span className="mb-1 text-sm sm:text-base">Insert a self-portrait</span>
                <input
                  type="file"
                  name="photo"
                  accept="image/*"
                  onChange={handleFileChange}
                  required
                  className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-honey"
                />
              </label>
              <label className="flex flex-col">
                <span className="mb-1 text-sm sm:text-base">Upload Resume</span>
                <input
                  type="file"
                  name="resume"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-honey"
                />
              </label>
            </div>

            {/* Car & Experience */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="flex flex-col">
                <span className="mb-1 text-sm sm:text-base">Do you have a car?</span>
                <select
                  name="hasCar"
                  value={formData.hasCar}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border rounded focus:ring-2 focus:ring-honey"
                >
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </label>
              <label className="flex flex-col">
                <span className="mb-1 text-sm sm:text-base">Work experience?</span>
                <select
                  name="hasExperience"
                  value={formData.hasExperience}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border rounded focus:ring-2 focus:ring-honey"
                >
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </label>
            </div>

            {/* Submit */}
            <div className="text-center">
              <button
                type="submit"
                disabled={loading}
                className={`w-full md:w-auto px-6 py-3 rounded-full font-semibold transition ${
                  loading
                    ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
                    : 'bg-bee-red text-offwhite hover:bg-honey'
                }`}
              >
                {loading ? 'Submitting…' : 'Submit Application'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default JoinHive
