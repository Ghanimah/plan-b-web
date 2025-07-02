// src/components/JoinHive.tsx
import React, { useState } from 'react'
import { User } from 'lucide-react'
import { supabase } from '../lib/supabaseClient'
import background3 from '../assets/background3.png'

interface JoinHiveProps { onBack: () => void }

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
    fullName: '', email: '', phone: '', address: '',
    university: '', dob: '', hasCar: 'no', hasExperience: 'no',
    photo: null, resume: null,
  })

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
      await supabase.from('join_hive_requests').insert({
        full_name:      formData.fullName,
        email:          formData.email,
        phone_number:   formData.phone,
        address:        formData.address,
        university:     formData.university,
        date_of_birth:  formData.dob,
        has_car:        formData.hasCar,
        has_experience: formData.hasExperience,
        photo_url:      formData.photo?.name ?? null,
        resume_url:     formData.resume?.name ?? null,
      })
      setIsSubmitted(true)
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({
          fullName: '', email: '', phone: '', address: '',
          university: '', dob: '', hasCar: 'no', hasExperience: 'no',
          photo: null, resume: null,
        })
      }, 3000)
    } catch {
      alert('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const wrapperClasses = 'scroll-mt-24 relative py-16 min-h-screen bg-cover bg-center'
  const wrapperStyle = { backgroundImage: `url(${background3})` }

  if (isSubmitted) {
    return (
      <section id="join-hive" className={wrapperClasses} style={wrapperStyle}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <button onClick={onBack} className="mb-6 text-bee-red hover:underline">
            ← Back
          </button>
          <div className="mx-auto max-w-xl bg-white/30 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg animate-pulse p-6 sm:p-8">
            <User className="w-12 h-12 text-bee-black mx-auto mb-4" />
            <h3 className="text-xl sm:text-2xl font-bold mb-2">Thank you for joining our hive.</h3>
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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <button onClick={onBack} className="mb-6 text-bee-red hover:underline">
          ← Back
        </button>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6">
          Join Your Hive
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* grid 1→2 cols */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {['fullName','email','phone','address'].map((field, i) => (
              <input
                key={i}
                type={field==='email'? 'email': field==='phone'? 'tel':'text'}
                name={field}
                value={(formData as any)[field]}
                onChange={handleChange}
                placeholder={field.replace(/([A-Z])/g,' $1').trim()}
                required
                className="w-full px-4 py-3 border rounded focus:ring-2 focus:ring-honey"
              />
            ))}
          </div>
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
              <span className="mb-1 text-sm sm:text-base">Upload Resume (optional)</span>
              <input
                type="file"
                name="resume"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-honey"
              />
            </label>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { name:'hasCar', label:'Do you have a car?' },
              { name:'hasExperience', label:'Work experience?' }
            ].map((opt,i) => (
              <label key={i} className="flex flex-col">
                <span className="mb-1 text-sm sm:text-base">{opt.label}</span>
                <select
                  name={opt.name}
                  value={(formData as any)[opt.name]}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border rounded focus:ring-2 focus:ring-honey"
                >
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </label>
            ))}
          </div>
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
    </section>
  )
}

export default JoinHive
