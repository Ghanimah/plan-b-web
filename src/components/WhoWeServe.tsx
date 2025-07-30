// src/components/WhoWeServe.tsx
import React, { useEffect, useState } from 'react'
import {
  Calendar,
  Megaphone,
  Search,
  Building2,
  ShoppingCart,
  Heart,
} from 'lucide-react'
import background3 from '../assets/background3.png'
import background6 from '../assets/background6.png'

const clientTypes = [
  {
    icon: Calendar,
    title: 'Event Organizers',
    description: 'From corporate conferences to cultural festivals',
    services: ['Event staffing', 'Setup crews', 'Ushers & greeters'],
    color: 'bg-honey',
  },
  {
    icon: Megaphone,
    title: 'Marketing & Activation Agencies',
    description: 'Brand promotion and experiential marketing',
    services: ['Promoters & ambassadors', 'Sampling teams', 'Brand surveys'],
    color: 'bg-bee-red',
  },
  {
    icon: Search,
    title: 'Retail & Mystery Shopping',
    description: 'On-floor service audits and customer-experience reporting',
    services: ['Mystery shopping', 'Surveys & feedback', 'Floor staff'],
    color: 'bg-honey-dark',
  },
  {
    icon: Building2,
    title: 'Hospitality & F&B',
    description: 'Baristas, waitstaff, and greeters for your venue',
    services: ['Barista staff', 'Event catering', 'Guest ushers'],
    color: 'bg-honey',
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce & Sampling',
    description: 'Product distribution and brand awareness campaigns',
    services: ['Door-to-door sampling', 'Online surveys', 'Promo events'],
    color: 'bg-bee-red',
  },
  {
    icon: Heart,
    title: 'Community & NGOs',
    description: 'Volunteers and part-time coordinators for social causes',
    services: ['Volunteer staffing', 'Fundraising support', 'Event teams'],
    color: 'bg-honey-dark',
  },
]

export default function WhoWeServe() {
  // responsive background: desktop = background3, mobile (<640px) = background6
  const [bgImage, setBgImage] = useState(background3)

  useEffect(() => {
    function updateBg() {
      setBgImage(window.innerWidth < 640 ? background6 : background3)
    }
    updateBg()
    window.addEventListener('resize', updateBg)
    return () => window.removeEventListener('resize', updateBg)
  }, [])

  const wrapperClasses = 'relative py-16 sm:py-20 min-h-screen bg-cover bg-center'

  return (
    <section
      id="who-we-serve"
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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-bee-black mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Who We Serve
          </h2>
          <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
            We partner with a variety of clients—from event organizers to NGOs—providing tailored staffing solutions that elevate your operations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {clientTypes.map(({ icon: Icon, title, description, services, color }, idx) => (
            <div
              key={idx}
              className="
                relative flex flex-col p-4 sm:p-6
                bg-white/30 backdrop-blur-md border border-white/20
                rounded-2xl shadow-lg transition-transform duration-300
                hover:scale-105
              "
            >
              <div
                className={`${color} w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center mb-4 mx-auto`}
                style={{
                  clipPath:
                    'polygon(25% 0%,75% 0%,100% 50%,75% 100%,25% 100%,0% 50%)',
                }}
              >
                <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-offwhite" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-bee-black mb-2 text-center">
                {title}
              </h3>
              <p className="text-sm sm:text-base text-bee-black/70 mb-4 text-center">
                {description}
              </p>
              <ul className="list-disc list-inside text-xs sm:text-sm text-bee-black/80 space-y-1">
                {services.map((svc, i) => (
                  <li key={i}>{svc}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
