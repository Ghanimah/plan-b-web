// src/components/WhatWeOffer.tsx
import React, { useState, useEffect } from 'react'
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
import bgHowItWorks from '../assets/background3.png'
import background6 from '../assets/background6.png'

export const WhatWeOffer: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'clients' | 'students'>('clients')

  const clientServices = [
    { icon: Megaphone, title: 'Brand Promoters & Ambassadors', description: 'Energetic teams to represent your brand at events and campaigns' },
    { icon: UserCheck, title: 'Ushers & Greeters', description: 'Professional welcoming staff for events and venues' },
    { icon: Coffee, title: 'Barista / Retail Floor Staff', description: 'Trained service staff for retail and hospitality needs' },
    { icon: UsersIcon, title: 'Seasonal Campaign Staffing', description: 'Full teams for peak seasons and special campaigns' },
    { icon: FileText, title: 'Data Entry & Office Assistants', description: 'Reliable support for administrative and data tasks' },
    { icon: SearchIcon, title: 'Mystery Shoppers & Surveyors', description: 'Professional research and evaluation services' },
    { icon: Wrench, title: 'Event Setup Teams', description: 'Organized crews for event preparation and breakdown' },
    { icon: Briefcase, title: 'Fully Custom "Project Hives"', description: 'Tailored teams for your unique business requirements' },
  ]

  const studentBenefits = [
    { icon: UsersIcon, title: 'Flexible, Part-Time Roles', description: 'Work around your studies with flexible scheduling options' },
    { icon: Award, title: 'Meaningful Impact & Career Exposure', description: 'Gain real-world experience while making a difference' },
    { icon: DollarSign, title: 'Competitive Weekly Pay', description: 'Reliable income processed every weekend' },
    { icon: GraduationCap, title: 'Structured Onboarding & Training', description: 'Professional development and skill-building programs' },
    { icon: UsersIcon, title: 'Hive-Level Rewards & Leadership Paths', description: 'Advance within the system and lead your own Hive' },
    { icon: Globe, title: 'Community & Networking', description: 'Connect with peers and build lasting professional relationships' },
  ]

  const cardBase =
    'relative flex flex-col p-4 sm:p-6 rounded-2xl bg-white/30 backdrop-blur-md border border-white/20 shadow-lg transition-transform duration-300 hover:-translate-y-1'

  // responsive background: desktop = bgHowItWorks, mobile (<640px) = background6
  const [bgImage, setBgImage] = useState(bgHowItWorks)
  useEffect(() => {
    function updateBg() {
      setBgImage(window.innerWidth < 640 ? background6 : bgHowItWorks)
    }
    updateBg()
    window.addEventListener('resize', updateBg)
    return () => window.removeEventListener('resize', updateBg)
  }, [])

  const wrapperClasses = 'relative py-16 sm:py-20 min-h-screen bg-cover bg-center'

  return (
    <section
      id="what-we-offer"
      className={wrapperClasses}
      style={{
        backgroundColor: '#000',
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundAttachment: 'scroll',
      }}
    >
      {/* Header */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-bee-black mb-4">
          What We Offer
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          Comprehensive solutions for businesses and meaningful opportunities for students
        </p>
      </div>

      {/* Tabs */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex justify-center">
          <div className="bg-white/50 backdrop-blur-sm rounded-full p-2 inline-flex">
            <button
              onClick={() => setActiveTab('clients')}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold transition ${
                activeTab === 'clients'
                  ? 'bg-honey text-bee-black'
                  : 'text-bee-black/70'
              }`}
            >
              For Clients
            </button>
            <button
              onClick={() => setActiveTab('students')}
              className={`ml-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold transition ${
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
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12">
          {clientServices.map((s) => (
            <div key={s.title} className={cardBase}>
              <div
                className="w-12 h-12 sm:w-16 sm:h-16 bg-honey-dark rounded-full flex items-center justify-center mb-4 mx-auto"
                style={{
                  clipPath:
                    'polygon(25% 0%,75% 0%,100% 50%,75% 100%,25% 100%,0% 50%)',
                }}
              >
                <s.icon className="w-6 h-6 sm:w-8 sm:h-8 text-offwhite" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-bee-black mb-2 text-center">
                {s.title}
              </h3>
              <p className="text-sm sm:text-base text-bee-black/70 text-center">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Students Grid */}
      {activeTab === 'students' && (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {studentBenefits.map((b) => (
            <div key={b.title} className={cardBase}>
              <div
                className="w-12 h-12 sm:w-16 sm:h-16 bg-bee-red rounded-full flex items-center justify-center mb-4 mx-auto"
                style={{
                  clipPath:
                    'polygon(25% 0%,75% 0%,100% 50%,75% 100%,25% 100%,0% 50%)',
                }}
              >
                <b.icon className="w-6 h-6 sm:w-8 sm:h-8 text-offwhite" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-bee-black mb-2 text-center">
                {b.title}
              </h3>
              <p className="text-sm sm:text-base text-bee-black/70 text-center">
                {b.description}
              </p>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}

export default WhatWeOffer
