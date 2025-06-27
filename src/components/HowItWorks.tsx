const steps = [
  {
    icon: '💬',
    title: 'Client Inquiry',
    description: 'Receive requirements from companies.',
    step: 'Step 1',
    bg: 'bg-honey',
  },
  {
    icon: '⚙️',
    title: 'Forward to BUZZOPS',
    description: `Briefing shared internally; “We’re building a Hive for you!”`,
    step: 'Step 2',
    bg: 'bg-bee-red',
  },
  {
    icon: '🐝',
    title: 'Beecruitment',
    description: 'Filter candidates & first interview with Hive Council.',
    step: 'Step 3',
    bg: 'bg-honey',
  },
  {
    icon: '👤',
    title: 'Second Interview',
    description: 'Management team conducts the final interview.',
    step: 'Step 4',
    bg: 'bg-honey-dark',
  },
  {
    icon: '🗂️',
    title: 'Hive Assignment',
    description: 'Bees grouped into a “Hive Cell” for your project.',
    step: 'Step 5',
    bg: 'bg-bee-red',
  },
  {
    icon: '📖',
    title: 'On-board & Rules',
    description: 'Operations team explains rules & best practices.',
    step: 'Step 6',
    bg: 'bg-honey',
  },
  {
    icon: '▶️',
    title: 'Shift Execution',
    description: 'Bees carry out their shifts, reporting to The Grid Hive.',
    step: 'Step 7',
    bg: 'bg-honey-dark',
  },
  {
    icon: '💳',
    title: 'Weekly Payments',
    description: 'Processed every weekend for seamless ops.',
    step: 'Step 8',
    bg: 'bg-bee-red',
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative py-16 bg-fixed bg-center bg-cover"
      style={{ backgroundImage: "url('/assets/background3.png')" }}
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4 text-center text-bee-black">
        <h2 className="text-4xl font-bold">How It Works</h2>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          From inquiry to execution, our streamlined 8-step Hive System delivers trained talent in 24–48 hours.
        </p>
      </div>

      <div className="relative z-10 mt-12 grid gap-8 px-4 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map(({ icon, title, description, step, bg }, i) => (
          <div
            key={i}
            className={`bg-offwhite rounded-xl p-6 flex flex-col ${bg} text-bee-black shadow-lg`}
          >
            <div className="mb-4 text-3xl">{icon}</div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="flex-grow text-sm">{description}</p>
            <span className="mt-4 text-xs text-gray-600">{step}</span>
          </div>
        ))}
      </div>
    
    </section>
  );
}
