// src/components/HomeHives.tsx
import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Hexagon,
  Users,
  Building2,
  ArrowRight,
  MousePointerClick,
  ClipboardList,
  Sparkles,
} from 'lucide-react'

const steps = [
  {
    icon: MousePointerClick,
    title: 'Choose your path',
    desc: 'Join the hive as talent or build a hive as a team lead. Pick the flow that fits you.',
  },
  {
    icon: ClipboardList,
    title: 'Fill in your details',
    desc: 'A quick form tells us who you are and what you need — no friction, no fluff.',
  },
  {
    icon: Sparkles,
    title: 'Get matched fast',
    desc: 'Our council matches and deploys trained bees in 24–48 hours. Let the honey flow.',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: 'easeOut' },
  }),
}

const HomeHives: React.FC = () => {
  return (
    <section id="home-hives" className="relative overflow-hidden bg-hive-night py-24 sm:py-32">
      {/* Ambient glows */}
      <div className="pointer-events-none absolute -top-32 left-1/4 h-80 w-80 rounded-full bg-gold/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-gold-dark/15 blur-[120px]" />
      <div className="pointer-events-none absolute inset-0 bg-honeycomb opacity-30" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-gold"
          >
            <Hexagon className="h-3.5 w-3.5 fill-gold text-gold" />
            How It Works
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-3xl font-bold text-white sm:text-4xl md:text-5xl"
          >
            Three steps to <span className="text-gold-gradient">your hive</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base text-white/60 md:text-lg"
          >
            Whether you're joining the swarm or building one, the path is the same —
            simple, fast, and made for movement.
          </motion.p>
        </div>

        {/* Steps grid */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {steps.map((s, i) => {
            const Icon = s.icon
            return (
              <motion.div
                key={s.title}
                custom={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-80px' }}
                variants={fadeUp}
                className="group relative overflow-hidden rounded-3xl border border-hive-border bg-hive-card/50 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-glow sm:p-8"
              >
                {/* Corner hex number */}
                <div className="absolute -right-4 -top-4 opacity-10 transition-opacity duration-300 group-hover:opacity-20">
                  <div className="font-display text-8xl font-black text-gold">
                    0{i + 1}
                  </div>
                </div>

                <div className="relative flex h-14 w-14 items-center justify-center">
                  <div className="absolute inset-0 rounded-2xl bg-gold/10" />
                  <div className="absolute inset-0 rounded-2xl border border-gold/30" />
                  <Icon className="relative h-6 w-6 text-gold" />
                </div>

                <h3 className="relative mt-6 text-xl font-semibold text-white sm:text-2xl">
                  {s.title}
                </h3>
                <p className="relative mt-3 text-sm leading-relaxed text-white/60 sm:text-base">
                  {s.desc}
                </p>

                <div className="relative mt-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gold/80">
                  Step {i + 1}
                  <div className="h-px flex-1 bg-gradient-to-r from-gold/40 to-transparent" />
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Final CTA panel */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mt-24 overflow-hidden rounded-3xl border border-gold/30 bg-gradient-to-br from-hive-dark via-hive-card to-hive-dark p-8 shadow-glow sm:p-12 md:p-16"
        >
          <div className="pointer-events-none absolute inset-0 bg-honeycomb-dense opacity-40" />
          <div className="pointer-events-none absolute -top-32 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-gold/20 blur-3xl" />

          <div className="relative mx-auto max-w-3xl text-center">
            <h3 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
              Ready to find <span className="text-gold-gradient">your hive?</span>
            </h3>
            <p className="mx-auto mt-4 max-w-xl text-base text-white/65 md:text-lg">
              Join a swarm of trusted bees, or spin up a crew of your own. The honey
              waits on the other side.
            </p>

            <div className="mt-10 flex flex-col items-stretch justify-center gap-4 sm:flex-row">
              <Link
                to="/join-hive"
                className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gold-gradient px-7 py-4 text-base font-semibold text-hive-night shadow-honey transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-glow-lg"
              >
                <Users className="h-5 w-5" />
                Join Your Hive
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                to="/build-hive"
                className="group relative inline-flex items-center justify-center gap-2 rounded-full border-2 border-gold/60 bg-hive-night/60 px-7 py-4 text-base font-semibold text-gold backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-gold hover:bg-hive-night hover:shadow-glow"
              >
                <Building2 className="h-5 w-5" />
                Build Your Hive
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HomeHives
