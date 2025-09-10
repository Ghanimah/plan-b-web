// src/components/WhyChoosePlanB.tsx
import React, { useEffect, useState } from 'react'
import background3 from '../assets/background3.png'
import background6 from '../assets/background6.png'

const features = [
  { title: 'Targeted Talent', desc: 'Connect with students who match your brand’s values and needs.' },
  { title: 'Rapid Deployment', desc: 'Onboard and launch campaigns in days, not weeks.' },
  { title: 'Scalable Support', desc: 'Scale your team seamlessly as your campaign grows.' },
]

export const WhyChoosePlanB: React.FC = () => {
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
      id="why-choose-planb"
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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-bee-black">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 underline decoration-bee-red decoration-4">
          Why Choose Plan B?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="
                group relative p-6 sm:p-8
                bg-white/30 backdrop-blur-md border border-white/20
                rounded-2xl shadow-lg
                transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl
              "
            >
              <div
                className={`
                  absolute left-0 top-1/2 -translate-y-1/2 w-1 h-12 sm:h-16
                  ${i === 0 ? 'bg-emerald-500' : i === 1 ? 'bg-cyan-500' : 'bg-fuchsia-500'}
                  rounded-full
                `}
              />
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 group-hover:text-bee-red">
                {f.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                {f.desc}
              </p>
              <span
                className="absolute bottom-4 right-4 text-bee-red opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-bold text-sm"
              >
                → Learn more
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChoosePlanB
