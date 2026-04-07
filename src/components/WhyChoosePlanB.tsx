// src/components/WhyChoosePlanB.tsx
import React from 'react'
import { motion } from 'framer-motion'
import {
  Target,
  Zap,
  TrendingUp,
  ShieldCheck,
  Heart,
  Hexagon,
} from 'lucide-react'

const features = [
  {
    icon: Target,
    title: 'Smart Matching',
    desc: 'Our council connects brands with students whose values and skills actually fit.',
  },
  {
    icon: Zap,
    title: 'Rapid Deployment',
    desc: 'Onboard and launch trained crews in 24–48 hours — not weeks of back-and-forth.',
  },
  {
    icon: TrendingUp,
    title: 'Scalable Support',
    desc: 'Scale your hive seamlessly from a single activation to a national campaign.',
  },
  {
    icon: ShieldCheck,
    title: 'Verified Profiles',
    desc: 'Every bee passes through our vetting process before they ever meet your brand.',
  },
  {
    icon: Heart,
    title: 'Community Driven',
    desc: 'A tight network of students, mentors, and managers that actually look out for each other.',
  },
  {
    icon: Hexagon,
    title: 'Built on Trust',
    desc: 'We build hives. We gain trust. Honey only flows where the colony is strong.',
  },
]

export const WhyChoosePlanB: React.FC = () => {
  return (
    <section
      id="why-choose-planb"
      className="relative overflow-hidden bg-hive-night py-24 sm:py-32"
    >
      {/* Ambient backgrounds */}
      <div className="pointer-events-none absolute inset-0 bg-honeycomb opacity-30" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-gold/10 blur-[140px]" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-gold"
          >
            <Hexagon className="h-3.5 w-3.5 fill-gold text-gold" />
            Why Plan B
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-3xl font-bold text-white sm:text-4xl md:text-5xl"
          >
            Built for brands.{' '}
            <span className="text-gold-gradient">Loved by bees.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base text-white/60 md:text-lg"
          >
            We're not a faceless agency. We're a colony — and every placement is
            built on the same honey-thick thread of trust.
          </motion.p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => {
            const Icon = f.icon
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                className="group relative overflow-hidden rounded-3xl border border-hive-border bg-hive-card/50 p-7 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-glow"
              >
                {/* Warm gradient hover wash */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-gold/0 via-gold/0 to-gold/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative">
                  <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 ring-1 ring-gold/30 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <Icon className="h-5 w-5 text-gold" />
                  </div>

                  <h3 className="mt-5 text-lg font-semibold text-white sm:text-xl">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">
                    {f.desc}
                  </p>
                </div>

                {/* Subtle hex corner */}
                <Hexagon className="pointer-events-none absolute -bottom-3 -right-3 h-16 w-16 text-gold/5 transition-colors duration-300 group-hover:text-gold/15" />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default WhyChoosePlanB
