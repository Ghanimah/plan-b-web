// src/components/WhatWeOffer.tsx
import React, { useState } from 'react'
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
import background3 from '../assets/background3.png'

export const WhatWeOffer: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'clients' | 'students'>('clients')

  const clientServices = [
    {
      icon: Megaphone,
      title: 'Brand Promoters & Ambassadors',
      description: 'Energetic teams to represent your brand at events and campaigns',
    },
    {
      icon: UserCheck,
      title: 'Ushers & Greeters',
      description: 'Professional welcoming staff for events and venues',
    },
    {
      icon: Coffee,
      title: 'Barista / Retail Floor Staff',
      description: 'Trained service staff for retail and hospitality needs',
    },
    {
      icon: UsersIcon,
      title: 'Seasonal Campaign Staffing',
      description: 'Full teams for peak seasons and special campaigns',
    },
    {
      icon: FileText,
      title: 'Data Entry & Office Assistants',
      description: 'Reliable support for administrative and data tasks',
    },
    {
      icon: SearchIcon,
      title: 'Mystery Shoppers & Surveyors',
      description: 'Professional research and evaluation services',
    },
    {
      icon: Wrench,
      title: 'Event Setup Teams',
      description: 'Organized crews for event preparation and breakdown',
    },
    {
      icon: Briefcase,
      title: 'Fully Custom "Project Hives"',
      description: 'Tailored teams for your unique business requirements',
    },
  ]

  const studentBenefits = [
    {
      icon: UsersIcon,
      title: 'Flexible, Part-Time Roles',
      description: 'Work around your studies with flexible scheduling options',
    },
    {
      icon: Award,
      title: 'Meaningful Impact & Career Exposure',
      description: 'Gain real-world experience while making a difference',
    },
    {
      icon: DollarSign,
      title: 'Competitive Weekly Pay',
      description: 'Reliable income processed every weekend',
    },
    {
      icon: GraduationCap,
      title: 'Structured Onboarding & Training',
      description: 'Professional development and skill-building programs',
    },
    {
      icon: UsersIcon,
      title: 'Hive-Level Rewards & Leadership Paths',
      description: 'Advance within the system and lead your own Hive',
    },
    {
      icon: Globe,
      title: 'Community & Networking',
      description: 'Connect with peers and build lasting professional relationships',
    },
  ]

  const cardBase =
    'relative flex flex-col p-6 rounded-2xl bg-white/30 backdrop-blur-md border border-white/20 shadow-lg transition-transform duration-300 hover:-translate-y-2'

  const wrapperClasses = 'relative py-20 min-h-screen bg-cover bg-center bg-fixed'
  const wrapperStyle = { backgroundImage: `url(${background3})` }

  return (
    <section
      id="what-we-offer"
      className={wrapperClasses}
      style={wrapperStyle}
    >
      {/* Header */}
      <div className="container mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold text-bee-black mb-6">What We Offer</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Comprehensive solutions for businesses and meaningful opportunities for students
        </p>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/50 backdrop-blur-sm rounded-full p-2 shadow-lg inline-flex">
            <button
              onClick={() => setActiveTab('clients')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === 'clients'
                  ? 'bg-honey text-bee-black'
                  : 'text-bee-black/70'
              }`}
            >
              For Clients
            </button>
            <button
              onClick={() => setActiveTab('students')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === 'students'
                  ? 'bg-honey text-bee-black'
                  : 'text-bee-black/70'
              }`}
            >
              For Students
            </button>
          </div>
        </div>
      </div>

      {/* Clients Grid */}
      {activeTab === 'clients' && (
        <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
          {clientServices.map((service) => (
            <div key={service.title} className={cardBase}>
              <div
                className="w-16 h-16 bg-honey-dark rounded-full flex items-center justify-center mb-6 mx-auto"
                style={{
                  clipPath:
                    'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
                }}
              >
                <service.icon className="w-8 h-8 text-offwhite" />
              </div>
              <h3 className="text-lg font-bold text-bee-black mb-3">{service.title}</h3>
              <p className="text-bee-black/70 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      )}

      {/* Students Grid */}
      {activeTab === 'students' && (
        <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {studentBenefits.map((benefit) => (
            <div key={benefit.title} className={cardBase}>
              <div
                className="w-16 h-16 bg-bee-red rounded-full flex items-center justify-center mb-6 mx-auto"
                style={{
                  clipPath:
                    'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
                }}
              >
                <benefit.icon className="w-8 h-8 text-offwhite" />
              </div>
              <h3 className="text-xl font-bold text-bee-black mb-4 text-center">
                {benefit.title}
              </h3>
              <p className="text-bee-black/70 text-center">{benefit.description}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
