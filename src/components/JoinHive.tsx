// src/components/JoinHive.tsx

import React, { useState } from 'react';
import { User, Calendar, FileText, ChevronRight } from 'lucide-react';
import { supabase } from '../lib/supabaseClient';

const JoinHive: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState<{
    fullName: string;
    email: string;
    phone: string;
    address: string;
    startDate: string;
    availability: string;
    resume: File | null;
  }>({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    startDate: '',
    availability: '',
    resume: null,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    setFormData(prev => ({
      ...prev,
      resume: file,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase
        .from('join_hive_requests')
        .insert({
          full_name:    formData.fullName,
          email:        formData.email,
          phone_number: formData.phone,
          address:      formData.address,
          start_date:   formData.startDate,
          availability: formData.availability,
          resume_url:   formData.resume?.name ?? null,
        });

      if (error) throw error;

      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setIsExpanded(false);
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          address: '',
          startDate: '',
          availability: '',
          resume: null,
        });
      }, 3000);

    } catch (err: any) {
      console.error('Error inserting join_hive_requests row:', err);
      alert('Sorry, something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // common section classes to apply background image
  const bgSection =
    'relative py-20 bg-[url(\'/assets/background3.png\')] bg-cover bg-center bg-fixed';

  // — Submitted Confirmation —
  if (isSubmitted) {
    return (
      <section id="join-hive" className={bgSection}>
        <div className="container text-center">
          <div className="bg-white/90 p-12 rounded-lg shadow-2xl animate-pulse">
            <div
              className="w-24 h-24 bg-honey rounded-full mx-auto mb-6 flex items-center justify-center"
              style={{
                clipPath:
                  'polygon(25% 0%,75% 0%,100% 50%,75% 100%,25% 100%,0% 50%)',
              }}
            >
              <User className="w-12 h-12 text-bee-black" />
            </div>
            <h3 className="text-3xl font-bold text-bee-black mb-4">
              Thank you for joining our hive.
            </h3>
            <p className="text-xl text-gray-600">
              Our sweetest bees are buzzing toward you and will connect immediately!
            </p>
          </div>
        </div>
      </section>
    );
  }

  // — Teaser (collapsed) —
  if (!isExpanded) {
    return (
      <section id="join-hive" className={bgSection}>
        <div className="container text-center">
          <h2 className="text-4xl font-bold text-bee-black mb-6">
            Join Your Hive
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Start your journey with Jordan’s leading student recruitment platform
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: User,
                title: 'Personal & Contact',
                desc: 'Share your basic information and contact details',
              },
              {
                icon: Calendar,
                title: 'Select Start Date',
                desc: 'Let us know your availability and when you can start',
              },
              {
                icon: FileText,
                title: 'Qualifications & Experience',
                desc: 'Upload your resume and showcase your skills',
              },
            ].map(({ icon: Icon, title, desc }, i) => (
              <div
                key={i}
                className="text-center group cursor-pointer transform hover:scale-105 transition-all duration-300"
              >
                <div
                  className="w-20 h-20 bg-bee-red rounded-full mx-auto mb-4 flex items-center justify-center group-hover:bg-honey transition-colors duration-300"
                  style={{
                    clipPath:
                      'polygon(25% 0%,75% 0%,100% 50%,75% 100%,25% 100%,0% 50%)',
                  }}
                >
                  <Icon className="w-10 h-10 text-offwhite" />
                </div>
                <h3 className="text-xl font-semibold text-bee-black mb-2">
                  {title}
                </h3>
                <p className="text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
          <button
            onClick={() => setIsExpanded(true)}
            className="inline-flex items-center px-8 py-4 bg-bee-red text-offwhite font-semibold rounded-full hover:bg-honey-dark transition-all duration-300 transform hover:scale-105"
          >
            Join Your Hive!
            <ChevronRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </section>
    );
  }

  // — Expanded Form —
  return (
    <section id="join-hive" className={bgSection}>
      <div className="container mx-auto max-w-4xl">
        <div className="bg-white/90 rounded-lg shadow-2xl p-8">
          <h2 className="text-3xl font-bold text-bee-black mb-8 text-center">
            Join Your Hive
          </h2>
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal & Contact */}
            <div className="border-l-4 border-bee-red pl-6">
              <h3 className="text-xl font-semibold text-bee-black mb-4 flex items-center">
                <User className="w-6 h-6 mr-2 text-bee-red" />
                Personal &amp; Contact
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {/* ... inputs unchanged */}
              </div>
            </div>

            {/* Start Date & Availability */}
            <div className="border-l-4 border-honey-dark pl-6">
              <h3 className="text-xl font-semibold text-bee-black mb-4 flex items-center">
                <Calendar className="w-6 h-6 mr-2 text-honey-dark" />
                Select Start Date &amp; Availability
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {/* ... inputs unchanged */}
              </div>
            </div>

            {/* Qualifications & Experience */}
            <div className="border-l-4 border-honey-dark pl-6">
              <h3 className="text-xl font-semibold text-bee-black mb-4 flex items-center">
                <FileText className="w-6 h-6 mr-2 text-honey-dark" />
                Qualifications &amp; Experience
              </h3>
              <div className="space-y-4">
                {/* ... upload unchanged */}
              </div>
            </div>

            <div className="text-center">
              <button
                type="submit"
                disabled={loading}
                className={`px-8 py-3 font-semibold rounded-full transition ${
                  loading
                    ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
                    : 'bg-bee-red text-offwhite hover:bg-honey'
                }`}
              >
                {loading ? 'Submitting…' : 'Join Your Hive'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default JoinHive;
