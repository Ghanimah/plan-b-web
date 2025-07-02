// src/components/ContactUsIntro.tsx
import React from 'react'
import background3 from '../assets/background3.png'

const ContactUsIntro: React.FC = () => {
  const wrapperClasses = `
    relative flex justify-center items-start
    min-h-screen bg-fixed bg-center bg-cover
  `
  const wrapperStyle = { backgroundImage: `url(${background3})` }

  return (
    <section
      id="contact-us"
      className={wrapperClasses}
      style={wrapperStyle}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32">
        <div
          className="
            bg-white/30 backdrop-blur-md
            border border-white/20
            rounded-2xl shadow-2xl
            p-6 sm:p-10
            max-w-3xl mx-auto
          "
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-bee-black mb-4 text-center">
            Let’s Talk Hive
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-bee-black/80 mb-6 leading-relaxed text-center">
            Whether you’ve got questions, need a custom staffing solution, or just want to brainstorm your next campaign—we’re here for you.
            Our Hive Council mobilizes top student talent within 24–48 hours to deliver reliability, professionalism, and real impact.
          </p>
          <div className="text-center">
            <a
              href="mailto:thegridhive@plbee.com"
              className="
                inline-block w-full md:w-auto
                px-6 py-3
                bg-bee-red text-offwhite font-semibold
                rounded-full shadow-lg
                hover:scale-105 transition-transform duration-300
              "
            >
              Email Us: thegridhive@plbee.com
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactUsIntro
