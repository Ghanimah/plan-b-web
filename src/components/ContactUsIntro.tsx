// src/components/ContactUsIntro.tsx
import React from 'react';

const ContactUsIntro: React.FC = () => (
  <section
    id="contact-us"
    className="
      relative py-20
      bg-fixed bg-center bg-cover
      bg-[url('/assets/Background3.png')]
    "
  >
    {/* –– NO OVERLAY –– */}

    <div className="relative z-10 max-w-3xl mx-auto px-6">
      <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-10">
        <h2 className="text-3xl font-bold text-bee-black mb-4 text-center">
          Let’s Talk Hive
        </h2>
        <p className="text-lg text-bee-black/80 mb-6 leading-relaxed text-center">
          Whether you’ve got questions, need a custom staffing solution, or just want to brainstorm your next campaign—we’re here for you.  
          Our Hive Council mobilizes top student talent within 24–48 hours to deliver reliability, professionalism, and real impact.
        </p>
        <div className="text-center">
          <a
            href="mailto:thegridhive@plbee.com"
            className="inline-block px-8 py-3 bg-bee-red text-offwhite font-semibold rounded-full shadow hover:scale-105 transition"
          >
            Email Us: thegridhive@plbee.com
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default ContactUsIntro;
