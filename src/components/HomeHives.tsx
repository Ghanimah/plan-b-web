// src/components/HomeHives.tsx
import React, { useEffect, useState } from 'react'
import { Building2, User } from 'lucide-react'
import { Link } from 'react-router-dom'

import background3 from '../assets/background3.png'
import background6 from '../assets/background6.png'

const teasers = [
  {
    icon: Building2,
    title: 'Build Your Hive',
    subtitle: 'Tell us about your event and staffing needs',
    to: '/build-hive',
    bgColor: 'bg-honey-dark',
  },
  {
    icon: User,
    title: 'Join Your Hive',
    subtitle: `Start your journey with Jordan's leading recruitment platform`,
    to: '/join-hive',
    bgColor: 'bg-honey',
  },
  {
    icon: User,
    title: 'Join The Royal Swarm',
    subtitle: `Start your journey with Jordan's leading recruitment platform`,
    to: '/join-royal-swarm',
    bgColor: 'bg-honey',
  },
]

const HomeHives: React.FC = () => {
  // swap bg on mobile vs desktop
  const [bgImage, setBgImage] = useState(background3)

  useEffect(() => {
    function updateBg() {
      setBgImage(window.innerWidth < 640 ? background6 : background3)
    }
    updateBg()
    window.addEventListener('resize', updateBg)
    return () => window.removeEventListener('resize', updateBg)
  }, [])

  const wrapperClasses =
    'relative py-16 sm:py-20 min-h-screen bg-cover bg-center'

  return (
    <section
      id="home-hives"
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
        <div className="relative z-10 grid grid-cols-1 gap-6 lg:gap-8">
          {teasers.map(({ icon: Icon, title, subtitle, to, bgColor }) => (
            <Link
              key={title}
              to={to}
              className="
                group flex flex-col items-center text-center 
                p-6 sm:p-8 mx-4 sm:mx-0
                bg-white/30 backdrop-blur-md border border-white/20
                rounded-2xl shadow-2xl
                transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl
              "
            >
              <div
                className={`
                  ${bgColor} w-12 h-12 sm:w-14 sm:h-14 rounded-full
                  flex items-center justify-center mb-4
                  group-hover:scale-110 transition-transform duration-300
                `}
                style={{
                  clipPath:
                    'polygon(25% 0%,75% 0%,100% 50%,75% 100%,25% 100%,0% 50%)',
                }}
              >
                <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-offwhite" />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-bee-black mb-2">
                {title}
              </h3>
              <p className="text-bee-black/70 mb-4 sm:mb-6 text-sm sm:text-base">
                {subtitle}
              </p>
              <span
                className="
                  inline-flex items-center px-4 py-2 sm:px-6 sm:py-3
                  bg-bee-red text-offwhite font-semibold
                  rounded-full shadow-lg
                  hover:scale-105 transition-transform duration-300
                "
              >
                {title} →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HomeHives
