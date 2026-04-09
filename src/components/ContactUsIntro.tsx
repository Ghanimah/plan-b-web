// src/components/ContactUsIntro.tsx
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Hexagon } from 'lucide-react'
import {
  PageHero,
  PageSection,
  GoldButton,
} from './ui/page-primitives'

const ContactUsIntro: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value })

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`New message from ${form.name || 'PLBee visitor'}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:thegridhive@plbee.com?subject=${subject}&body=${body}`
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'thegridhive@plbee.com',
      href: 'mailto:thegridhive@plbee.com',
    },
    {
      icon: Phone,
      label: 'Call us',
      value: '+962792233340',
      href: 'tel:+962792233340',
    },
    {
      icon: MapPin,
      label: 'Headquarters',
      value: 'Amman, Jordan',
      href: '#',
    },
  ]

  const inputCls =
    'w-full rounded-xl border border-hive-border bg-hive-night/60 px-4 py-3 text-sm text-white placeholder-white/30 backdrop-blur transition-all duration-300 focus:border-gold/60 focus:bg-hive-night focus:outline-none focus:ring-2 focus:ring-gold/20'

  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title={
          <>
            Let’s Talk <span className="text-gold-gradient">More</span>
          </>
        }
        subtitle="Whether you’ve got questions, need a custom staffing solution, or just want to brainstorm your next campaign — we’re here for you."
      />

      <PageSection id="contact-us">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="relative overflow-hidden rounded-3xl border border-hive-border bg-hive-card/50 p-7 backdrop-blur sm:p-10">
              <div className="pointer-events-none absolute inset-0 bg-honeycomb-dense opacity-10" />
              <Hexagon className="pointer-events-none absolute -bottom-6 -right-6 h-28 w-28 text-gold/5" />

              <div className="relative">
                <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                  <Hexagon className="h-3.5 w-3.5 fill-gold text-gold" />
                  Send a Message
                </div>
                <h3 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
                  Brief the council.
                </h3>
                <p className="mt-2 text-sm text-white/55">
                  Our Hive Council mobilizes top student talent within 24–48 hours.
                </p>

                <form onSubmit={onSubmit} className="mt-8 space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-white/50"
                    >
                      Your Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={onChange}
                      required
                      placeholder="Jane Bee"
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-white/50"
                    >
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={onChange}
                      required
                      placeholder="you@brand.com"
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-white/50"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={onChange}
                      required
                      rows={5}
                      placeholder="Tell us about your project, event, or campaign…"
                      className={inputCls + ' resize-none'}
                    />
                  </div>

                  <GoldButton type="submit" className="w-full sm:w-auto">
                    <Send className="h-4 w-4" /> Send to the Hive
                  </GoldButton>
                </form>
              </div>
            </div>
          </motion.div>

          {/* Contact info cards */}
          <div className="space-y-5 lg:col-span-2">
            {contactInfo.map(({ icon: Icon, label, value, href }, i) => (
              <motion.a
                key={label}
                href={href}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                className="group relative block overflow-hidden rounded-3xl border border-hive-border bg-hive-card/50 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-glow"
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-gold/0 via-gold/0 to-gold/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative flex items-center gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gold/10 ring-1 ring-gold/30 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <Icon className="h-5 w-5 text-gold" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold/80">
                      {label}
                    </div>
                    <div className="mt-1 truncate text-base font-semibold text-white">
                      {value}
                    </div>
                  </div>
                </div>
                <Hexagon className="pointer-events-none absolute -bottom-3 -right-3 h-16 w-16 text-gold/5 transition-colors duration-300 group-hover:text-gold/15" />
              </motion.a>
            ))}

            {/* Hours / response card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative overflow-hidden rounded-3xl border border-gold/30 bg-gradient-to-br from-gold/10 via-hive-card/40 to-hive-card/40 p-6 backdrop-blur"
            >
              <div className="pointer-events-none absolute inset-0 bg-honeycomb-dense opacity-15" />
              <div className="relative">
                <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold">
                  Response Time
                </div>
                <p className="mt-2 text-lg font-semibold text-white">
                  We reply within <span className="text-gold-gradient">24 hours</span>.
                </p>
                <p className="mt-1 text-xs text-white/55">
                  Urgent? Mention “URGENT” in your subject line and we’ll fast-track it.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </PageSection>
    </>
  )
}

export default ContactUsIntro
