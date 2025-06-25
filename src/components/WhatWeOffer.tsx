import React, { useState } from 'react';
import {
  Megaphone,
  UserCheck,
  Coffee,
  Users as UsersIcon,
  FileText,
  Search as SearchIcon,
  Wrench,
  Briefcase,
  GraduationCap,
  DollarSign,
  Award,
  Globe,
} from 'lucide-react';

export const WhatWeOffer: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'clients' | 'students'>('clients');

  const clientServices = [
    {
      icon: Megaphone,
      title: 'Brand Promoters & Ambassadors',
      description: 'Energetic teams to represent your brand at events and campaigns',
    },
    {
      icon: UserCheck,
      title: 'Ushers & Greeters',
      description: 'Professional welcoming staff for events and venues',
    },
    {
      icon: Coffee,
      title: 'Barista / Retail Floor Staff',
      description: 'Trained service staff for retail and hospitality needs',
    },
    {
      icon: UsersIcon,
      title: 'Seasonal Campaign Staffing',
      description: 'Full teams for peak seasons and special campaigns',
    },
    {
      icon: FileText,
      title: 'Data Entry & Office Assistants',
      description: 'Reliable support for administrative and data tasks',
    },
    {
      icon: SearchIcon,
      title: 'Mystery Shoppers & Surveyors',
      description: 'Professional research and evaluation services',
    },
    {
      icon: Wrench,
      title: 'Event Setup Teams',
      description: 'Organized crews for event preparation and breakdown',
    },
    {
      icon: Briefcase,
      title: 'Fully Custom "Project Hives"',
      description: 'Tailored teams for your unique business requirements',
    },
  ];

  const studentBenefits = [
    {
      icon: UsersIcon,
      title: 'Flexible, Part-Time Roles',
      description: 'Work around your studies with flexible scheduling options',
    },
    {
      icon: Award,
      title: 'Meaningful Impact & Career Exposure',
      description: 'Gain real-world experience while making a difference',
    },
    {
      icon: DollarSign,
      title: 'Competitive Weekly Pay',
      description: 'Reliable income processed every weekend',
    },
    {
      icon: GraduationCap,
      title: 'Structured Onboarding & Training',
      description: 'Professional development and skill-building programs',
    },
    {
      icon: UsersIcon,
      title: 'Hive-Level Rewards & Leadership Paths',
      description: 'Advance within the system and lead your own Hive',
    },
    {
      icon: Globe,
      title: 'Community & Networking',
      description: 'Connect with peers and build lasting professional relationships',
    },
  ];

  return (
    <section id="what-we-offer" className="container py-20">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-bee-black mb-6">What We Offer</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Comprehensive solutions for businesses and meaningful opportunities for students
        </p>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-full p-2 shadow-lg inline-flex">
            <button
              onClick={() => setActiveTab('clients')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === 'clients'
                  ? 'bg-honey text-bee-black'
                  : 'text-bee-black'
              }`}
            >
              For Clients
            </button>
            <button
              onClick={() => setActiveTab('students')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === 'students'
                  ? 'bg-honey text-bee-black'
                  : 'text-bee-black'
              }`}
            >
              For Students
            </button>
          </div>
        </div>
      </div>

      {/* Clients Grid */}
      {activeTab === 'clients' && (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {clientServices.map((service) => (
            <div
              key={service.title}
              className="bg-white/90 rounded-lg p-8 shadow-lg group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div
                className="w-16 h-16 bg-honey-dark rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-honey transition-colors duration-300"
                style={{
                  clipPath:
                    'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
                }}
              >
                <service.icon className="w-8 h-8 text-offwhite" />
              </div>
              <h3 className="text-lg font-bold text-bee-black mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      )}

      {/* Students Grid */}
      {activeTab === 'students' && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {studentBenefits.map((benefit) => (
            <div
              key={benefit.title}
              className="bg-white/90 rounded-lg p-8 shadow-lg group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div
                className="w-16 h-16 bg-bee-red rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-honey transition-colors duration-300"
                style={{
                  clipPath:
                    'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
                }}
              >
                <benefit.icon className="w-8 h-8 text-offwhite" />
              </div>
              <h3 className="text-xl font-bold text-bee-black mb-4 text-center">
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-center">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Call to Action */}
      <div className="text-center mt-16">
        <div className="bg-gradient-to-r from-honey to-honey-dark rounded-2xl p-8 inline-block">
          <h3 className="text-2xl font-bold text-bee-black mb-4">
            Ready to{' '}
            {activeTab === 'clients'
              ? 'Build Your Hive'
              : 'Join Our Community'}
            ?
          </h3>
          <p className="text-lg text-bee-black mb-6">
            {activeTab === 'clients'
              ? "Get access to Jordan's most reliable student workforce"
              : 'Start your journey with flexible, meaningful work opportunities'}
          </p>
          <button
            onClick={() =>
              document
                .getElementById(
                  activeTab === 'clients' ? 'build-hive' : 'join-hive'
                )
                ?.scrollIntoView({ behavior: 'smooth' })
            }
            className="bg-bee-red text-offwhite px-8 py-4 rounded-lg font-semibold hover:bg-bee-black transition-colors duration-300 transform hover:scale-105"
          >
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
};
