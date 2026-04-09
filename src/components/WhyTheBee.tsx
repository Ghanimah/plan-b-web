// src/components/WhyTheBee.tsx
import React from 'react'
import { motion } from 'framer-motion'
import { Users, Target, Heart, Zap, Hexagon } from 'lucide-react'
import {
  PageSection,
  SectionHeading,
  FeatureCard,
  CTASection,
} from './ui/page-primitives'

interface HiveValue {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  detail: string
}

const hiveValues: HiveValue[] = [
  {
    icon: Users,
    title: 'Teamwork',
    description: 'Bees thrive together.',
    detail:
      'Just like bees in nature, our success comes from a unified team. Every member contributes to the collective goal.',
  },
  {
    icon: Target,
    title: 'Discipline',
    description: 'Every Bee knows their job.',
    detail:
      'Structure and clear roles ensure efficiency. Each Bee understands their responsibilities and executes with precision.',
  },
  {
    icon: Heart,
    title: 'Loyalty',
    description: 'Devoted to their Hive.',
    detail:
      'Our commitment runs deep. We build lasting relationships with our clients and create a sense of belonging for every team member.',
  },
  {
    icon: Zap,
    title: 'Adaptability',
    description: 'Roles shift as needs evolve.',
    detail:
      'Quick to learn and flexible to change, our Bees adapt to new challenges and keep operations smooth.',
  },
]

export const WhyTheBee: React.FC = () => {
  return (
    <>
      <PageSection id="why-the-bee">
        <SectionHeading
          eyebrow="Our Values"
          title={
            <>
              Why <span className="text-gold-gradient">The Bee?</span>
            </>
          }
          subtitle="Our values mirror the natural wisdom of the hive — where individual strengths create collective success."
        />

        {/* Mission card with gold left border */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-14 max-w-4xl"
        >
          <div className="relative overflow-hidden rounded-3xl border border-hive-border bg-hive-card/50 p-8 backdrop-blur sm:p-10">
            <div className="absolute inset-y-0 left-0 w-1.5 bg-gold-gradient" />
            <div className="pointer-events-none absolute inset-0 bg-honeycomb-dense opacity-10" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                <Hexagon className="h-3.5 w-3.5 fill-gold text-gold" />
                Our Mission
              </div>
              <p className="mt-4 text-xl font-medium leading-relaxed text-white/85 sm:text-2xl">
                We build hives — tight, trained, trustworthy crews that move
                like a colony. Honey only flows where the colony is strong, and
                the strongest colonies share the same four values.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Values grid */}
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {hiveValues.map((val, idx) => (
            <FeatureCard
              key={val.title}
              icon={val.icon}
              title={val.title}
              description={val.description}
              index={idx}
            >
              <p className="mt-3 text-xs leading-relaxed text-white/45">
                {val.detail}
              </p>
            </FeatureCard>
          ))}
        </div>
      </PageSection>

      <CTASection />
    </>
  )
}

export default WhyTheBee
