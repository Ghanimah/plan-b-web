// src/components/WhyTheBee.tsx
import React, { useEffect, useState } from 'react'
import { Users, Target, Heart, Zap } from 'lucide-react'
import background3 from '../assets/background3.png'
import background6 from '../assets/background6.png'

interface HiveValue {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  detail: string
  color: 'bg-honey' | 'bg-honey-dark' | 'bg-bee-red'
}

const hiveValues: HiveValue[] = [
  {
    icon: Users,
    title: 'Teamwork',
    description: 'Bees thrive together',
    detail:
      'Just like bees in nature, our success comes from a unified team. Every member contributes to the collective goal.',
    color: 'bg-honey',
  },
  {
    icon: Target,
    title: 'Discipline',
    description: 'Every Bee knows their job',
    detail:
      'Structure and clear roles ensure efficiency. Each Bee understands their responsibilities and executes with precision.',
    color: 'bg-honey-dark',
  },
  {
    icon: Heart,
    title: 'Loyalty',
    description: 'Devoted to their Hive',
    detail:
      'Our commitment runs deep. We build lasting relationships with our clients and create a sense of belonging for every team member.',
    color: 'bg-bee-red',
  },
  {
    icon: Zap,
    title: 'Adaptability',
    description: 'Roles shift as needs evolve',
    detail:
      'Quick to learn and flexible to change, our Bees adapt to new challenges and keep operations smooth.',
    color: 'bg-honey',
  },
]

export const WhyTheBee: React.FC = () => {
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
      id="why-the-bee"
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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12 text-bee-black">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Why The Bee?</h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          Our values mirror the natural wisdom of the hive—where individual strengths create collective success.
        </p>
      </div>

      {/* Values Grid */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {hiveValues.map((val, idx) => (
          <div
            key={idx}
            className="
              relative flex flex-col p-4 sm:p-6
              bg-white/30 backdrop-blur-md border border-white/20
              rounded-2xl shadow-lg transition-transform duration-300
              hover:-translate-y-1 hover:shadow-xl
            "
          >
            {/* Icon */}
            <div className="relative mx-auto mb-4">
              <div
                className={`
                  w-16 h-16 sm:w-20 sm:h-20 ${val.color}
                  flex items-center justify-center
                  rounded-full transition-transform duration-300
                `}
                style={{
                  clipPath:
                    'polygon(25% 0%,75% 0%,100% 50%,75% 100%,25% 100%,0% 50%)',
                }}
              >
                <val.icon className="w-8 h-8 sm:w-10 sm:h-10 text-offwhite" />
              </div>
            </div>

            {/* Title & Descriptions */}
            <h3 className="text-lg sm:text-xl font-semibold text-bee-black mb-2 text-center">
              {val.title}
            </h3>
            <p className="text-sm sm:text-base text-gray-700 mb-3 text-center">
              {val.description}
            </p>
            <p className="text-xs sm:text-sm text-gray-600 text-center">
              {val.detail}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default WhyTheBee
