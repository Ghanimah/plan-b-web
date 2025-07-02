import bgHowItWorks from '../assets/background3.png'

const steps = [
  { icon: '💬', title: 'Client Inquiry', description: 'Receive requirements from companies.', step: 'Step 1' },
  { icon: '⚙️', title: 'Forward to BUZZOPS', description: `Briefing shared internally; “We’re building a Hive for you!”`, step: 'Step 2' },
  { icon: '🐝', title: 'Beecruitment', description: 'Filter candidates & first interview with Hive Council.', step: 'Step 3' },
  { icon: '👤', title: 'Second Interview', description: 'Management team conducts the final interview.', step: 'Step 4' },
  { icon: '🗂️', title: 'Hive Assignment', description: 'Bees grouped into a “Hive Cell” for your project.', step: 'Step 5' },
  { icon: '📖', title: 'On-board & Rules', description: 'Operations team explains rules & best practices.', step: 'Step 6' },
  { icon: '▶️', title: 'Shift Execution', description: 'Bees carry out their shifts, reporting to The Grid Hive.', step: 'Step 7' },
  { icon: '💳', title: 'Weekly Payments', description: 'Processed every weekend for seamless ops.', step: 'Step 8' },
]

export default function HowItWorks() {
  const wrapperClasses = 'relative py-16 sm:py-20 bg-cover bg-center bg-fixed'
  const wrapperStyle = {
    backgroundImage: `url(${bgHowItWorks})`,
  }

  return (
    <section id="how-it-works" className={wrapperClasses} style={wrapperStyle}>
      {/* Header */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-bee-black">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">How It Works</h2>
        <p className="mt-4 text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
          From inquiry to execution, our streamlined 8-step Hive System delivers trained talent in 24–48 hours.
        </p>
      </div>

      {/* Timeline */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-12 relative">
        {/* Spine */}
        <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-black/20 -translate-x-1/2"></div>

        {/* Steps */}
        <div className="space-y-12 md:space-y-20">
          {steps.map((s, i) => {
            const left = i % 2 === 0
            return (
              <div
                key={i}
                className={`
                  relative flex flex-col md:flex-row w-full
                  ${left ? 'md:justify-start' : 'md:justify-end'}
                  px-4
                `}
              >
                {/* Number */}
                <div className="absolute md:relative left-1/2 md:left-auto top-0 transform -translate-x-1/2 md:translate-x-0">
                  <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-yellow-400 text-white font-bold">
                    {i + 1}
                  </div>
                </div>

                {/* Card */}
                <div
                  className={`
                    mt-6 md:mt-0 w-full md:w-3/4 max-w-md
                    rounded-2xl
                    bg-white/30 backdrop-blur-md
                    border border-white/20
                    p-4 sm:p-6 md:p-8 shadow-lg
                    ${left ? 'md:ml-6 text-left' : 'md:mr-6 text-left'}
                  `}
                >
                  <div className="mb-3 text-2xl sm:text-3xl">{s.icon}</div>
                  <h3 className="text-xl sm:text-2xl font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm sm:text-base text-gray-800">{s.description}</p>
                  <span className="mt-4 block text-xs sm:text-sm text-gray-700">{s.step}</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
