// src/components/BuildHive.tsx
import React, { useState } from 'react'
import { Building2, Calendar, ShoppingCart } from 'lucide-react'
import { supabase } from '../lib/supabaseClient'
import background3 from '../assets/background3.png'

interface BuildHiveProps {
  onBack: () => void
}

type FormState = {
  companyName: string
  primaryContact: string
  phoneNumber: string
  billingAddress: string
  eventName: string
  eventType: string
  expectedAttendance: string
  eventObjectives: string
  requiredRoles: string
  totalHeadcount: string
  scheduleDetails: string
}

const BuildHive: React.FC<BuildHiveProps> = ({ onBack }) => {
  const [form, setForm] = useState<FormState>({
    companyName: '',
    primaryContact: '',
    phoneNumber: '',
    billingAddress: '',
    eventName: '',
    eventType: '',
    expectedAttendance: '',
    eventObjectives: '',
    requiredRoles: '',
    totalHeadcount: '',
    scheduleDetails: '',
  })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    const { error: sbError } = await supabase
      .from('build_hive_requests')
      .insert({
        company_name:        form.companyName,
        primary_contact:     form.primaryContact,
        phone_number:        form.phoneNumber,
        billing_address:     form.billingAddress,
        event_name:          form.eventName,
        event_type:          form.eventType,
        expected_attendance: form.expectedAttendance,
        event_objectives:    form.eventObjectives,
        required_roles:      form.requiredRoles,
        total_headcount:     form.totalHeadcount,
        schedule_details:    form.scheduleDetails,
      })
    setLoading(false)
    if (sbError) {
      console.error('Supabase insert error:', sbError)
      setError(sbError.message)
    } else {
      setSubmitted(true)
    }
  }

  const wrapperClasses =
    'scroll-mt-24 relative py-16 min-h-screen bg-cover bg-center'
  const wrapperStyle = { backgroundImage: `url(${background3})` }

  if (submitted) {
    return (
      <section id="build-hive" className={wrapperClasses} style={wrapperStyle}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <button onClick={onBack} className="mb-6 text-bee-red hover:underline">
            ← Back
          </button>
          <div className="mx-auto max-w-xl bg-white/30 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl animate-pulse p-8 sm:p-12">
            <Building2 className="w-16 h-16 text-honey mx-auto mb-4" />
            <h3 className="text-2xl sm:text-3xl font-bold mb-2">
              Thanks for your request!
            </h3>
            <p className="text-base sm:text-lg text-gray-700">
              We’ll be in touch within 24–48 hours.
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="build-hive" className={wrapperClasses} style={wrapperStyle}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <button onClick={onBack} className="mb-6 text-bee-red hover:underline">
          ← Back
        </button>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6">
          Build Your Hive
        </h2>
        {error && (
          <div className="bg-red-100 text-red-800 p-4 rounded mb-6">
            Error submitting form: {error}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="bg-white/30 backdrop-blur-md border border-white/20 rounded-2xl p-6 sm:p-8 shadow-lg space-y-6">
            {/* Company & Contact */}
            <div className="border-l-4 border-honey pl-4">
              <h3 className="flex items-center text-xl sm:text-2xl font-semibold mb-4">
                <Building2 className="w-5 h-5 sm:w-6 sm:h-6 mr-2 text-honey" />
                Company & Contact
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="companyName"
                  value={form.companyName}
                  onChange={handleChange}
                  placeholder="Company Name"
                  required
                  className="w-full px-4 py-3 border rounded focus:ring-2 focus:ring-honey"
                />
                <input
                  type="text"
                  name="primaryContact"
                  value={form.primaryContact}
                  onChange={handleChange}
                  placeholder="Primary Contact"
                  required
                  className="w-full px-4 py-3 border rounded focus:ring-2 focus:ring-honey"
                />
                <input
                  type="tel"
                  name="phoneNumber"
                  value={form.phoneNumber}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  required
                  className="w-full px-4 py-3 border rounded focus:ring-2 focus:ring-honey"
                />
                <input
                  type="text"
                  name="billingAddress"
                  value={form.billingAddress}
                  onChange={handleChange}
                  placeholder="Billing Address"
                  required
                  className="w-full px-4 py-3 border rounded focus:ring-2 focus:ring-honey"
                />
              </div>
            </div>

            {/* Event Overview */}
            <div className="border-l-4 border-bee-red pl-4">
              <h3 className="flex items-center text-xl sm:text-2xl font-semibold mb-4">
                <Calendar className="w-5 h-5 sm:w-6 sm:h-6 mr-2 text-bee-red" />
                Event Overview
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="eventName"
                  value={form.eventName}
                  onChange={handleChange}
                  placeholder="Event Name"
                  required
                  className="w-full px-4 py-3 border rounded focus:ring-2 focus:ring-bee-red"
                />
                <select
                  name="eventType"
                  value={form.eventType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border rounded focus:ring-2 focus:ring-bee-red"
                >
                  <option value="">Select Event Type</option>
                  <option>Conference</option>
                  <option>Festival</option>
                  <option>Activation</option>
                </select>
                <input
                  type="text"
                  name="expectedAttendance"
                  value={form.expectedAttendance}
                  onChange={handleChange}
                  placeholder="Expected Attendance"
                  required
                  className="w-full px-4 py-3 border rounded focus:ring-2 focus:ring-bee-red"
                />
                <textarea
                  name="eventObjectives"
                  value={form.eventObjectives}
                  onChange={handleChange}
                  placeholder="Event Objectives"
                  rows={3}
                  required
                  className="w-full px-4 py-3 border rounded focus:ring-2 focus:ring-bee-red"
                />
              </div>
            </div>

            {/* Staffing Requirements */}
            <div className="border-l-4 border-honey-dark pl-4">
              <h3 className="flex items-center text-xl sm:text-2xl font-semibold mb-4">
                <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6 mr-2 text-honey-dark" />
                Staffing Requirements
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="requiredRoles"
                  value={form.requiredRoles}
                  onChange={handleChange}
                  placeholder="Required Roles"
                  required
                  className="w-full px-4 py-3 border rounded focus:ring-2 focus:ring-honey-dark"
                />
                <input
                  type="text"
                  name="totalHeadcount"
                  value={form.totalHeadcount}
                  onChange={handleChange}
                  placeholder="Total Headcount"
                  required
                  className="w-full px-4 py-3 border rounded focus:ring-2 focus:ring-honey-dark"
                />
              </div>
              <textarea
                name="scheduleDetails"
                value={form.scheduleDetails}
                onChange={handleChange}
                placeholder="Schedule Details"
                rows={3}
                required
                className="w-full mt-4 px-4 py-3 border rounded focus:ring-2 focus:ring-honey-dark"
              />
            </div>

            {/* Submit */}
            <div className="text-center">
              <button
                type="submit"
                disabled={loading}
                className={`
                  w-full md:w-auto
                  px-6 py-3 rounded-full font-semibold transition
                  ${loading
                    ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
                    : 'bg-bee-red text-offwhite hover:bg-honey'}
                `}
              >
                {loading ? 'Submitting…' : 'Submit Build Request'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}

export default BuildHive
