import React from 'react';
import { Users, Target, Heart, Zap } from 'lucide-react';

interface HiveValue {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  detail: string;
  color: 'bg-honey' | 'bg-honey-dark' | 'bg-bee-red';
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
];

export const WhyTheBee: React.FC = () => (
  <section id="why-the-bee" className="container py-16">
    {/* Header */}
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-bee-black mb-4">Why The Bee?</h2>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto">
        Our values mirror the natural wisdom of the hive—where individual
        strengths create collective success.
      </p>
    </div>

    {/* Values Grid */}
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {hiveValues.map((val, idx) => (
        <div
          key={idx}
          className="group relative bg-offwhite rounded-2xl p-6 transition-transform hover:-translate-y-2 hover:shadow-lg"
        >
          {/* Icon */}
          <div className="relative mx-auto mb-6">
            <div
              className={`w-20 h-20 ${val.color} flex items-center justify-center rounded-full group-hover:scale-110 transition-transform duration-300`}
              style={{
                clipPath:
                  'polygon(25% 0%,75% 0%,100% 50%,75% 100%,25% 100%,0% 50%)',
              }}
            >
              <val.icon className="w-10 h-10 text-offwhite" />
            </div>
          </div>

          {/* Title & Descriptions */}
          <h3 className="text-2xl font-semibold text-bee-black mb-2">
            {val.title}
          </h3>
          <p className="text-gray-700 mb-4">{val.description}</p>
          <p className="text-gray-600 text-sm">{val.detail}</p>
        </div>
      ))}
    </div>
  </section>
);
