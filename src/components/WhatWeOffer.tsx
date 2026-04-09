// src/components/WhatWeOffer.tsx
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Megaphone,
  UserCheck,
  Coffee,
  Users as UsersIcon,
  FileText,
  Search as SearchIcon,
  Wrench,
  Briefcase,
  GraduationCap,
  DollarSign,
  Award,
  Globe,
} from 'lucide-react'
import {
  PageHero,
  PageSection,
  SectionHeading,
  FeatureCard,
} from './ui/page-primitives'

export const WhatWeOffer: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'clients' | 'students'>('clients')

  const clientServices = [
    { icon: Megaphone, title: 'Brand Promoters & Ambassadors', description: 'Energetic teams to represent your brand at events and campaigns.' },
    { icon: UserCheck, title: 'Ushers & Greeters', description: 'Professional welcoming staff for events and venues.' },
    { icon: Coffee, title: 'Barista / Retail Floor Staff', description: 'Trained service staff for retail and hospitality needs.' },
    { icon: UsersIcon, title: 'Seasonal Campaign Staffing', description: 'Full teams for peak seasons and special campaigns.' },
    { icon: FileText, title: 'Data Entry & Office Assistants', description: 'Reliable support for administrative and data tasks.' },
    { icon: SearchIcon, title: 'Mystery Shoppers & Surveyors', description: 'Professional research and evaluation services.' },
    { icon: Wrench, title: 'Event Setup Teams', description: 'Organized crews for event preparation and breakdown.' },
    { icon: Briefcase, title: 'Fully Custom "Project Hives"', description: 'Tailored teams for your unique business requirements.' },
  ]

  const studentBenefits = [
    { icon: UsersIcon, title: 'Flexible, Part-Time Roles', description: 'Work around your studies with flexible scheduling options.' },
    { icon: Award, title: 'Meaningful Impact & Career Exposure', description: 'Gain real-world experience while making a difference.' },
    { icon: DollarSign, title: 'Competitive Weekly Pay', description: 'Reliable income processed every weekend.' },
    { icon: GraduationCap, title: 'Structured Onboarding & Training', description: 'Professional development and skill-building programs.' },
    { icon: UsersIcon, title: 'Hive-Level Rewards & Leadership Paths', description: 'Advance within the system and lead your own Hive.' },
    { icon: Globe, title: 'Community & Networking', description: 'Connect with peers and build lasting professional relationships.' },
  ]

  return (
    <>
      <PageHero
        eyebrow="About Plan B"
        title={
          <>
            One colony. <span className="text-gold-gradient">Two paths.</span>
          </>
        }
        subtitle="Comprehensive staffing solutions for businesses, and meaningful opportunities for the students who power them."
      />

      <PageSection id="what-we-offer">
        <SectionHeading
          eyebrow="What We Offer"
          title={
            <>
              Built for both sides of the <span className="text-gold-gradient">hive.</span>
            </>
          }
          subtitle="Switch between what we deliver to brands and what we deliver to the bees that power them."
        />

        {/* Tabs */}
        <div className="mt-10 flex justify-center">
          <div className="inline-flex rounded-full border border-hive-border bg-hive-card/60 p-1.5 backdrop-blur">
            {(['clients', 'students'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative rounded-full px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] transition-all duration-300 sm:px-7 sm:text-sm ${
                  activeTab === tab
                    ? 'bg-gold-gradient text-hive-night shadow-honey'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                {tab === 'clients' ? 'For Clients' : 'For Students'}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            {(activeTab === 'clients' ? clientServices : studentBenefits).map(
              (s, i) => (
                <FeatureCard
                  key={s.title}
                  icon={s.icon}
                  title={s.title}
                  description={s.description}
                  index={i}
                />
              )
            )}
          </motion.div>
        </AnimatePresence>
      </PageSection>
    </>
  )
}

export default WhatWeOffer
