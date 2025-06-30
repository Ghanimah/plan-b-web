// src/components/JoinHive.tsx
import React, { useState } from 'react'
import { User } from 'lucide-react'
import { supabase } from '../lib/supabaseClient'
import background3 from '../assets/background3.png'

interface JoinHiveProps {
  onBack: () => void
}

const JoinHive: React.FC<JoinHiveProps> = ({ onBack }) => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    startDate: '',
    availability: '',
    resume: null as File | null,
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, resume: e.target.files?.[0] ?? null }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const { error } = await supabase
        .from('join_hive_requests')
        .insert({
          full_name:    formData.fullName,
          email:        formData.email,
          phone_number: formData.phone,
          address:      formData.address,
          start_date:   formData.startDate,
          availability: formData.availability,
          resume_url:   formData.resume?.name ?? null,
        })
      if (error) throw error

      setIsSubmitted(true)
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          address: '',
          startDate: '',
          availability: '',
          resume: null,
        })
      }, 3000)
    } catch {
      alert('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  // common wrapper style
  const wrapperClasses =
    'scroll-mt-24 relative py-20 min-h-screen bg-cover bg-center'
  const wrapperStyle = {
    backgroundImage: `url(${background3})`,
  }

  if (isSubmitted) {
    return (
      <section
        id="join-hive"
        className={wrapperClasses}
        style={wrapperStyle}
      >
        <div className="container text-center mx-auto max-w-xl">
          <button onClick={onBack} className="mb-6 text-bee-red hover:underline">
            ← Back
          </button>
          <div
            className="
              bg-white/30 backdrop-blur-md border border-white/20
              rounded-2xl shadow-2xl animate-pulse p-12
            "
          >
            <div
              className="
                w-24 h-24 bg-honey rounded-full mx-auto mb-6
                flex items-center justify-center
              "
              style={{
                clipPath:
                  'polygon(25% 0%,75% 0%,100% 50%,75% 100%,25% 100%,0% 50%)',
              }}
            >
              <User className="w-12 h-12 text-bee-black" />
            </div>
            <h3 className="text-3xl font-bold mb-4">
              Thank you for joining our hive.
            </h3>
            <p className="text-xl text-gray-600">
              Our sweetest bees will connect with you shortly!
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section
      id="join-hive"
      className={wrapperClasses}
      style={wrapperStyle}
    >
      <div className="container mx-auto max-w-4xl">
        <button onClick={onBack} className="mb-6 text-bee-red hover:underline">
          ← Back
        </button>
        <div
          className="
            mx-auto bg-white/30 backdrop-blur-md border border-white/20
            rounded-2xl shadow-2xl p-8
          "
        >
          <h2 className="text-4xl font-bold text-bee-black mb-6 text-center">
            Join Your Hive
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Full Name"
                required
                className="px-4 py-3 border rounded focus:ring-2 focus:ring-honey"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
                className="px-4 py-3 border rounded focus:ring-2 focus:ring-honey"
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                required
                className="px-4 py-3 border rounded focus:ring-2 focus:ring-honey"
              />
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Address"
                required
                className="px-4 py-3 border rounded focus:ring-2 focus:ring-honey"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <label className="flex flex-col">
                <span className="mb-1">Available Start Date</span>
                <input
                  type="date"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleChange}
                  required
                  className="px-4 py-3 border rounded focus:ring-2 focus:ring-honey"
                />
              </label>
              <label className="flex flex-col">
                <span className="mb-1">Availability</span>
                <select
                  name="availability"
                  value={formData.availability}
                  onChange={handleChange}
                  required
                  className="px-4 py-3 border rounded focus:ring-2 focus:ring-honey"
                >
                  <option value="">Select Availability</option>
                  <option>Full-Time</option>
                  <option>Part-Time</option>
                  <option>Weekends</option>
                </select>
              </label>
            </div>

            <label className="flex flex-col">
              <span className="mb-1">Upload Resume</span>
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                required
                className="px-4 py-2 border rounded focus:ring-2 focus:ring-honey"
              />
            </label>

            <div className="text-center">
              <button
                type="submit"
                disabled={loading}
                className={`px-8 py-3 rounded-full font-semibold transition ${
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
