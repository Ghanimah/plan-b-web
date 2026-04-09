// src/components/HowItWorks.tsx
import React from 'react'
import { motion } from 'framer-motion'
import {
  MessageSquare,
  Settings,
  Search,
  UserCheck,
  LayoutGrid,
  BookOpen,
  PlayCircle,
  CreditCard,
  Hexagon,
} from 'lucide-react'
import {
  PageHero,
  PageSection,
  SectionHeading,
  CTASection,
} from './ui/page-primitives'

const steps = [
  { icon: MessageSquare, title: 'Client Inquiry', description: 'Receive requirements from companies.', step: 'Step 1' },
  { icon: Settings, title: 'Forward to BUZZOPS', description: 'Briefing shared internally; “We’re building a Hive for you!”', step: 'Step 2' },
  { icon: Search, title: 'Beecruitment', description: 'Filter candidates & first interview with Hive Council.', step: 'Step 3' },
  { icon: UserCheck, title: 'Second Interview', description: 'Management team conducts the final interview.', step: 'Step 4' },
  { icon: LayoutGrid, title: 'Hive Assignment', description: 'Bees grouped into a “Hive Cell” for your project.', step: 'Step 5' },
  { icon: BookOpen, title: 'On-board & Rules', description: 'Operations team explains rules & best practices.', step: 'Step 6' },
  { icon: PlayCircle, title: 'Shift Execution', description: 'Bees carry out their shifts, reporting to The Grid Hive.', step: 'Step 7' },
  { icon: CreditCard, title: 'Weekly Payments', description: 'Processed every weekend for seamless ops.', step: 'Step 8' },
]

export default function HowItWorks() {
  return (
    <>
      <PageHero
        eyebrow="The Hive System"
        title={
          <>
            How It <span className="text-gold-gradient">Works</span>
          </>
        }
        subtitle="From inquiry to execution, our streamlined 8-step Hive System delivers trained talent in 24–48 hours."
      />

      <PageSection id="how-it-works">
        <SectionHeading
          eyebrow="The Process"
          title={
            <>
              Eight steps. <span className="text-gold-gradient">One hive.</span>
            </>
          }
          subtitle="A repeatable system built so every brief lands with the right bees, on time, every time."
        />

        <div className="relative mt-16">
          {/* Vertical spine */}
          <div className="pointer-events-none absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-gold/30 to-transparent md:left-1/2 md:block" />

          <div className="space-y-8 md:space-y-14">
            {steps.map((s, i) => {
              const Icon = s.icon
              const left = i % 2 === 0
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.55, delay: (i % 2) * 0.08 }}
                  className={`relative flex w-full md:items-center ${
                    left ? 'md:justify-start' : 'md:justify-end'
                  }`}
                >
                  {/* Center marker */}
                  <div className="pointer-events-none absolute left-1/2 top-7 hidden h-3 w-3 -translate-x-1/2 rounded-full bg-gold shadow-glow md:block" />

                  <div
                    className={`group relative w-full overflow-hidden rounded-3xl border border-hive-border bg-hive-card/50 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-glow sm:p-7 md:w-[46%] ${
                      left ? 'md:mr-auto' : 'md:ml-auto'
                    }`}
                  >
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-gold/0 via-gold/0 to-gold/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    <div className="relative flex items-start gap-5">
                      {/* Hex numbered badge */}
                      <div className="relative flex-shrink-0">
                        <div className="relative flex h-14 w-14 items-center justify-center rounded-xl bg-gold/10 ring-1 ring-gold/30 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                          <Icon className="h-5 w-5 text-gold" />
                        </div>
                        <div className="absolute -bottom-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full bg-gold-gradient text-xs font-bold text-hive-night shadow-honey">
                          {i + 1}
                        </div>
                      </div>

                      <div className="flex-1">
                        <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold/80">
                          {s.step}
                        </div>
                        <h3 className="mt-1 text-lg font-semibold text-white sm:text-xl">
                          {s.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-white/60">
                          {s.description}
                        </p>
                      </div>
                    </div>

                    <Hexagon className="pointer-events-none absolute -bottom-3 -right-3 h-16 w-16 text-gold/5 transition-colors duration-300 group-hover:text-gold/15" />
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </PageSection>

      <CTASection
        title={
          <>
            Ready to start your <span className="text-gold-gradient">hive?</span>
          </>
        }
        subtitle="Brief us once and we’ll mobilize a trained crew in 24–48 hours."
      />
    </>
  )
}
