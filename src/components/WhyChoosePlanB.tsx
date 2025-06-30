// src/components/WhyChoosePlanB.tsx
import React from 'react'
import background3 from '../assets/background3.png'

const features = [
  {
    title: 'Targeted Talent',
    desc: 'Connect with students who match your brand’s values and needs.',
  },
  {
    title: 'Rapid Deployment',
    desc: 'Onboard and launch campaigns in days, not weeks.',
  },
  {
    title: 'Scalable Support',
    desc: 'Scale your team seamlessly as your campaign grows.',
  },
]

export const WhyChoosePlanB: React.FC = () => {
  const wrapperClasses = 'relative py-20 min-h-screen bg-cover bg-center bg-fixed'
  const wrapperStyle = { backgroundImage: `url(${background3})` }

  return (
    <section
      id="why-choose-planb"
      className={wrapperClasses}
      style={wrapperStyle}
    >
      <div className="relative container mx-auto text-bee-black">
        <h2 className="text-4xl font-bold text-center mb-12 underline decoration-bee-red decoration-4">
          Why Choose Plan B?
        </h2>

        <div className="grid gap-8 md:grid-cols-3 px-4 md:px-0">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="
                group relative p-8
                bg-white/30 backdrop-blur-md border border-white/20
                rounded-2xl shadow-2xl
                transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl
              "
            >
              {/* colored sidebar */}
              <div
                className={`
                  absolute left-0 top-1/2 -translate-y-1/2 w-1 h-16
                  ${i === 0
                    ? 'bg-emerald-500'
                    : i === 1
                    ? 'bg-cyan-500'
                    : 'bg-fuchsia-500'}
                  rounded-full
                `}
              />

              <h3 className="text-2xl font-semibold mb-4 group-hover:text-bee-red">
                {f.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">{f.desc}</p>

              <span
                className="
                  absolute bottom-4 right-4 text-bee-red opacity-0
                  group-hover:opacity-100 transition-opacity duration-300
                  font-bold
                "
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
