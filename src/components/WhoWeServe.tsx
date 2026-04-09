// src/components/WhoWeServe.tsx
import React from 'react'
import {
  Calendar,
  Megaphone,
  Search,
  Building2,
  ShoppingCart,
  Heart,
} from 'lucide-react'
import {
  PageHero,
  PageSection,
  SectionHeading,
  FeatureCard,
  CTASection,
} from './ui/page-primitives'

const clientTypes = [
  {
    icon: Calendar,
    title: 'Event Organizers',
    description: 'From corporate conferences to cultural festivals.',
    services: ['Event staffing', 'Setup crews', 'Ushers & greeters'],
  },
  {
    icon: Megaphone,
    title: 'Marketing & Activation Agencies',
    description: 'Brand promotion and experiential marketing.',
    services: ['Promoters & ambassadors', 'Sampling teams', 'Brand surveys'],
  },
  {
    icon: Search,
    title: 'Retail & Mystery Shopping',
    description: 'On-floor service audits and customer-experience reporting.',
    services: ['Mystery shopping', 'Surveys & feedback', 'Floor staff'],
  },
  {
    icon: Building2,
    title: 'Hospitality & F&B',
    description: 'Baristas, waitstaff, and greeters for your venue.',
    services: ['Barista staff', 'Event catering', 'Guest ushers'],
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce & Sampling',
    description: 'Product distribution and brand awareness campaigns.',
    services: ['Door-to-door sampling', 'Online surveys', 'Promo events'],
  },
  {
    icon: Heart,
    title: 'Community & NGOs',
    description: 'Volunteers and part-time coordinators for social causes.',
    services: ['Volunteer staffing', 'Fundraising support', 'Event teams'],
  },
]

export default function WhoWeServe() {
  return (
    <>
      <PageHero
        eyebrow="Our Clients"
        title={
          <>
            Who We <span className="text-gold-gradient">Serve</span>
          </>
        }
        subtitle="We partner with a variety of clients—from event organizers to NGOs—providing tailored staffing solutions that elevate your operations."
      />

      <PageSection id="who-we-serve">
        <SectionHeading
          eyebrow="Industries"
          title={
            <>
              Built for any <span className="text-gold-gradient">brief.</span>
            </>
          }
          subtitle="Different industries, one shared standard of trained, reliable, brand-ready talent."
        />

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {clientTypes.map(({ icon, title, description, services }, idx) => (
            <FeatureCard
              key={title}
              icon={icon}
              title={title}
              description={description}
              index={idx}
            >
              <ul className="mt-4 space-y-1.5">
                {services.map((svc) => (
                  <li
                    key={svc}
                    className="flex items-center gap-2 text-xs text-white/55"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-gold/70" />
                    {svc}
                  </li>
                ))}
              </ul>
            </FeatureCard>
          ))}
        </div>
      </PageSection>

      <CTASection />
    </>
  )
}
