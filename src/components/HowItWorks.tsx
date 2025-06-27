import {
  MessageCircle,
  Settings,
  Users,
  UserCheck,
  BookOpen,
  Play,
  CreditCard,
} from 'lucide-react';

const steps = [
  { icon: MessageCircle, title: 'Client Inquiry', description: 'Receive requirements from companies.' },
  { icon: Settings, title: 'Forward to BUZZOPS', description: 'Briefing shared internally; “We’re building a Hive for you!”' },
  { icon: Users, title: 'Beecruitment', description: 'Filter candidates & first interview with Hive Council.' },
  { icon: UserCheck, title: 'Second Interview', description: 'Management team conducts the final interview.' },
  { icon: Users, title: 'Hive Assignment', description: 'Bees grouped into a “Hive Cell” for your project.' },
  { icon: BookOpen, title: 'On-board & Rules', description: 'Operations team explains rules & best practices.' },
  { icon: Play, title: 'Shift Execution', description: 'Bees carry out their shifts, reporting to The Grid Hive.' },
  { icon: CreditCard, title: 'Weekly Payments', description: 'Processed every weekend for seamless ops.' },
];

const iconBgColors = ['bg-honey', 'bg-bee-red', 'bg-honey-dark'];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="
        relative
         py-20
         bg-[url('/assets/background3.png')]
         bg-cover
         bg-center
         bg-fixed
       "

    >
      {/* —— Overlay removed here —— */}

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="text-center text-bee-black mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold">How It Works</h2>
          <p className="mt-4 text-lg sm:text-xl max-w-2xl mx-auto">
            From inquiry to execution, our streamlined 8-step Hive System delivers trained talent in 24–48 hours.
          </p>
        </div>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const circleBg = iconBgColors[idx % iconBgColors.length];
            return (
              <div
                key={idx}
                className="bg-white/90 border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition p-6 flex flex-col"
              >
                <div className={`${circleBg} w-12 h-12 rounded-full flex items-center justify-center mb-4`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-bee-black mb-2">{step.title}</h3>
                <p className="text-bee-black/80 flex-grow mb-4">{step.description}</p>
                <span className="text-sm text-gray-500">Step {idx + 1}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
