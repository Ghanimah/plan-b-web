import React, { useState } from 'react';
import { Building2, Calendar, Users, ChevronRight } from 'lucide-react';

const BuildHive: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    phone: '',
    address: '',
    eventName: '',
    eventType: '',
    attendance: '',
    objectives: '',
    roles: '',
    headcount: '',
    schedule: ''
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setIsExpanded(false);
      setFormData({
        companyName: '',
        contactName: '',
        phone: '',
        address: '',
        eventName: '',
        eventType: '',
        attendance: '',
        objectives: '',
        roles: '',
        headcount: '',
        schedule: ''
      });
    }, 3000);
  };

  // — Confirmation screen
  if (isSubmitted) {
    return (
      <section id="build-hive" className="py-20">
        <div className="container text-center max-w-4xl">
          <div className="bg-white/90 p-12 rounded-lg shadow-2xl animate-pulse">
            <div
              className="w-24 h-24 bg-honey rounded-full mx-auto mb-6 flex items-center justify-center"
              style={{
                clipPath:
                  'polygon(25% 0%,75% 0%,100% 50%,75% 100%,25% 100%,0% 50%)'
              }}
            >
              <Building2 className="w-12 h-12 text-bee-black" />
            </div>
            <h3 className="text-3xl font-bold text-bee-black mb-4">
              Build Your Hive… and let our Bees do the rest!
            </h3>
            <p className="text-xl text-gray-600">
              We'll buzz back to you in no time.
            </p>
          </div>
        </div>
      </section>
    );
  }

  // — Collapsed “three-step” teaser
  if (!isExpanded) {
    return (
      <section id="build-hive" className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-bee-black mb-6">
              Build Your Hive
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Connect with our trained student talent in three simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[ 
              {
                icon: Building2,
                title: 'Company Details',
                desc: 'Tell us about your company and contact information'
              },
              {
                icon: Calendar,
                title: 'Event Overview',
                desc: 'Share your event details and objectives'
              },
              {
                icon: Users,
                title: 'Roles & Headcount',
                desc: 'Specify the roles and number of students you need'
              }
            ].map(({ icon: Icon, title, desc }, i) => (
              <div
                key={i}
                className="text-center group cursor-pointer transform hover:scale-105 transition-all duration-300"
              >
                <div
                  className="w-20 h-20 bg-honey rounded-full mx-auto mb-4 flex items-center justify-center group-hover:bg-honey-dark transition-colors duration-300"
                  style={{
                    clipPath:
                      'polygon(25% 0%,75% 0%,100% 50%,75% 100%,25% 100%,0% 50%)'
                  }}
                >
                  <Icon className="w-10 h-10 text-bee-black" />
                </div>
                <h3 className="text-xl font-semibold text-bee-black mb-2">
                  {title}
                </h3>
                <p className="text-gray-600">{desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => setIsExpanded(true)}
              className="inline-flex items-center px-8 py-4 bg-bee-red text-offwhite font-semibold rounded-full hover:bg-honey-dark transition-all duration-300 transform hover:scale-105"
            >
              Build Your Hive Now!
              <ChevronRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </section>
    );
  }

  // — Expanded form
  return (
    <section id="build-hive" className="py-20">
      <div className="container max-w-4xl">
        <div className="bg-white/90 rounded-lg shadow-2xl p-8">
          <h2 className="text-3xl font-bold text-bee-black mb-8 text-center">
            Build Your Hive
          </h2>
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Company & Contact Details */}
            <div className="border-l-4 border-honey pl-6">
              <h3 className="text-xl font-semibold text-bee-black mb-4 flex items-center">
                <Building2 className="w-6 h-6 mr-2 text-honey" />
                Company & Contact Details
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="Company Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-bee-red focus:border-transparent"
                  required
                />
                <input
                  type="text"
                  name="contactName"
                  value={formData.contactName}
                  onChange={handleChange}
                  placeholder="Primary Contact"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-bee-red focus:border-transparent"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-bee-red focus:border-transparent"
                  required
                />
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Billing Address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-bee-red focus:border-transparent"
                  required
                />
              </div>
            </div>

            {/* Event Overview */}
            <div className="border-l-4 border-honey-dark pl-6">
              <h3 className="text-xl font-semibold text-bee-black mb-4 flex items-center">
                <Calendar className="w-6 h-6 mr-2 text-honey-dark" />
                Event Overview
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="eventName"
                  value={formData.eventName}
                  onChange={handleChange}
                  placeholder="Event Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-bee-red focus:border-transparent"
                  required
                />
                <select
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-bee-red focus:border-transparent"
                  required
                >
                  <option value="">Select Event Type</option>
                  <option value="brand-promotion">Brand Promotion</option>
                  <option value="event-staffing">Event Staffing</option>
                  <option value="mystery-shopping">Mystery Shopping</option>
                  <option value="data-entry">Data Entry</option>
                  <option value="retail-support">Retail Support</option>
                  <option value="other">Other</option>
                </select>
                <input
                  type="number"
                  name="attendance"
                  value={formData.attendance}
                  onChange={handleChange}
                  placeholder="Expected Attendance"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-bee-red focus:border-transparent"
                />
                <textarea
                  name="objectives"
                  value={formData.objectives}
                  onChange={handleChange}
                  placeholder="Event Objectives"
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-bee-red focus:border-transparent"
                />
              </div>
            </div>

            {/* Staffing Requirements */}
            <div className="border-l-4 border-bee-red pl-6">
              <h3 className="text-xl font-semibold text-bee-black mb-4 flex items-center">
                <Users className="w-6 h-6 mr-2 text-bee-red" />
                Staffing Requirements
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="roles"
                  value={formData.roles}
                  onChange={handleChange}
                  placeholder="Required Roles"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-bee-red focus:border-transparent"
                  required
                />
                <input
                  type="number"
                  name="headcount"
                  value={formData.headcount}
                  onChange={handleChange}
                  placeholder="Total Headcount"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-bee-red focus:border-transparent"
                  required
                />
                <textarea
                  name="schedule"
                  value={formData.schedule}
                  onChange={handleChange}
                  placeholder="Schedule Details"
                  rows={2}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-bee-red focus:border-transparent"
                />
              </div>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="px-8 py-3 bg-bee-red text-offwhite font-semibold rounded-full hover:bg-honey-dark hover:text-bee-black transition-all duration-300"
              >
                Build Your Hive
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BuildHive;
