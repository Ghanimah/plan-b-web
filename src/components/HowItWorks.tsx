// src/components/HowItWorks.tsx
import React from 'react'

const steps = [
  { icon: '💬', title: 'Client Inquiry',      description: 'Receive requirements from companies.',                                   step: 'Step 1' },
  { icon: '⚙️', title: 'Forward to BUZZOPS',  description: `Briefing shared internally; “We’re building a Hive for you!”`,          step: 'Step 2' },
  { icon: '🐝', title: 'Beecruitment',        description: 'Filter candidates & first interview with Hive Council.',                   step: 'Step 3' },
  { icon: '👤', title: 'Second Interview',    description: 'Management team conducts the final interview.',                            step: 'Step 4' },
  { icon: '🗂️', title: 'Hive Assignment',     description: 'Bees grouped into a “Hive Cell” for your project.',                        step: 'Step 5' },
  { icon: '📖', title: 'On-board & Rules',    description: 'Operations team explains rules & best practices.',                          step: 'Step 6' },
  { icon: '▶️', title: 'Shift Execution',     description: 'Bees carry out their shifts, reporting to The Grid Hive.',                  step: 'Step 7' },
  { icon: '💳', title: 'Weekly Payments',     description: 'Processed every weekend for seamless ops.',                                 step: 'Step 8' },
]

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative py-16 bg-fixed bg-center bg-cover"
      style={{ backgroundImage: "url('/assets/background3.png')" }}
    >
      {/* Header */}
      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center text-bee-black">
        <h2 className="text-4xl font-bold">How It Works</h2>
        <p className="mt-4 text-lg">
          From inquiry to execution, our streamlined 8-step Hive System delivers trained talent in 24–48 hours.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative z-10 mt-16">
        {/* Spine */}
        <div className="absolute left-1/2 top-0 h-full w-1 bg-black/20 -translate-x-1/2"></div>

        {/* Steps */}
        <div className="space-y-20">
          {steps.map((s, i) => {
            const left = i % 2 === 0
            return (
              <div
                key={i}
                className={`relative flex w-full ${left ? 'justify-start' : 'justify-end'} px-4`}
              >
                {/* Number */}
                <div className="absolute left-1/2 top-0 flex -translate-x-1/2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-400 text-white font-bold">
                    {i + 1}
                  </div>
                </div>

                {/* Glass card */}
                <div
                  className={`
                    mt-6 w-full max-w-md
                    rounded-2xl
                    bg-white/30 backdrop-blur-md
                    border border-white/20
                    p-6 shadow-lg
                    ${left ? 'mr-auto text-left' : 'ml-auto text-left'}
                  `}
                >
                  <div className="mb-4 text-3xl">{s.icon}</div>
                  <h3 className="text-2xl font-semibold">{s.title}</h3>
                  <p className="mt-2 text-gray-800">{s.description}</p>
                  <span className="mt-4 block text-sm text-gray-700">{s.step}</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
