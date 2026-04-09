// src/components/BuildHive.tsx
import React, { useState } from 'react'
import {
  Building2,
  Calendar,
  ShoppingCart,
  ArrowLeft,
  Hexagon,
  CheckCircle2,
} from 'lucide-react'
import { supabase } from '../lib/supabaseClient'

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

const BuildHivePage: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <section className="relative min-h-screen overflow-hidden bg-hive-night pt-28 pb-20">
    <div className="pointer-events-none absolute inset-0 bg-honeycomb opacity-30" />
    <div className="pointer-events-none absolute -top-32 left-1/4 h-80 w-80 rounded-full bg-gold/10 blur-[120px]" />
    <div className="pointer-events-none absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-gold-dark/15 blur-[120px]" />
    <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
  </section>
)

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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    const { error: sbError } = await supabase.from('build_hive_requests').insert({
      company_name: form.companyName,
      primary_contact: form.primaryContact,
      phone_number: form.phoneNumber,
      billing_address: form.billingAddress,
      event_name: form.eventName,
      event_type: form.eventType,
      expected_attendance: form.expectedAttendance,
      event_objectives: form.eventObjectives,
      required_roles: form.requiredRoles,
      total_headcount: form.totalHeadcount,
      schedule_details: form.scheduleDetails,
    })
    setLoading(false)
    if (sbError) {
      console.error('Supabase insert error:', sbError)
      setError(sbError.message)
    } else {
      setSubmitted(true)
    }
  }

  if (submitted) {
    return (
      <BuildHivePage>
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
            Request received!
          </h3>
          <p className="mt-3 text-white/60">
            A beekeeper will be in touch within 24–48 hours to start building your hive.
          </p>
        </div>
      </BuildHivePage>
    )
  }

  return (
    <BuildHivePage>
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
            For Teams
          </div>
          <h1 className="mt-6 text-4xl font-bold text-white sm:text-5xl">
            Build Your <span className="text-gold-gradient">Hive</span>
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-white/60">
            Tell us about your event and staffing needs — we'll deploy a trained
            crew within 24–48 hours.
          </p>
        </div>

        {error && (
          <div className="mt-8 rounded-2xl border border-red-500/40 bg-red-500/10 p-4 text-sm text-red-200">
            Error submitting form: {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="mt-10 space-y-6">
          {/* Company & Contact */}
          <div className="panel-hive p-6 sm:p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold/15 ring-1 ring-gold/30">
                <Building2 className="h-5 w-5 text-gold" />
              </div>
              <h3 className="text-xl font-semibold text-white sm:text-2xl">
                Company & Contact
              </h3>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <input
                type="text"
                name="companyName"
                value={form.companyName}
                onChange={handleChange}
                placeholder="Company Name"
                required
                className="input-hive"
              />
              <input
                type="text"
                name="primaryContact"
                value={form.primaryContact}
                onChange={handleChange}
                placeholder="Primary Contact"
                required
                className="input-hive"
              />
              <input
                type="tel"
                name="phoneNumber"
                value={form.phoneNumber}
                onChange={handleChange}
                placeholder="Phone Number"
                required
                className="input-hive"
              />
              <input
                type="text"
                name="billingAddress"
                value={form.billingAddress}
                onChange={handleChange}
                placeholder="Billing Address"
                required
                className="input-hive"
              />
            </div>
          </div>

          {/* Event Overview */}
          <div className="panel-hive p-6 sm:p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold/15 ring-1 ring-gold/30">
                <Calendar className="h-5 w-5 text-gold" />
              </div>
              <h3 className="text-xl font-semibold text-white sm:text-2xl">
                Event Overview
              </h3>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <input
                type="text"
                name="eventName"
                value={form.eventName}
                onChange={handleChange}
                placeholder="Event Name"
                required
                className="input-hive"
              />
              <select
                name="eventType"
                value={form.eventType}
                onChange={handleChange}
                required
                className="input-hive"
              >
                <option value="" className="bg-hive-night">
                  Select Event Type
                </option>
                <option className="bg-hive-night">Conference</option>
                <option className="bg-hive-night">Festival</option>
                <option className="bg-hive-night">Activation</option>
              </select>
              <input
                type="text"
                name="expectedAttendance"
                value={form.expectedAttendance}
                onChange={handleChange}
                placeholder="Expected Attendance"
                required
                className="input-hive"
              />
              <textarea
                name="eventObjectives"
                value={form.eventObjectives}
                onChange={handleChange}
                placeholder="Event Objectives"
                rows={3}
                required
                className="input-hive"
              />
            </div>
          </div>

          {/* Staffing Requirements */}
          <div className="panel-hive p-6 sm:p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold/15 ring-1 ring-gold/30">
                <ShoppingCart className="h-5 w-5 text-gold" />
              </div>
              <h3 className="text-xl font-semibold text-white sm:text-2xl">
                Staffing Requirements
              </h3>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <input
                type="text"
                name="requiredRoles"
                value={form.requiredRoles}
                onChange={handleChange}
                placeholder="Required Roles"
                required
                className="input-hive"
              />
              <input
                type="text"
                name="totalHeadcount"
                value={form.totalHeadcount}
                onChange={handleChange}
                placeholder="Total Headcount"
                required
                className="input-hive"
              />
            </div>
            <textarea
              name="scheduleDetails"
              value={form.scheduleDetails}
              onChange={handleChange}
              placeholder="Schedule Details"
              rows={3}
              required
              className="input-hive mt-4"
            />
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
              {loading ? 'Submitting…' : 'Submit Build Request'}
            </button>
          </div>
        </form>
      </div>
    </BuildHivePage>
  )
}

export default BuildHive
