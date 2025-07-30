// src/components/ContactUsIntro.tsx
import React, { useEffect, useState } from 'react'
import background3 from '../assets/background3.png'
import background6 from '../assets/background6.png'

const ContactUsIntro: React.FC = () => {
  // responsive background: desktop = background3, mobile (<640px) = background6
  const [bgImage, setBgImage] = useState(background3)

  useEffect(() => {
    function updateBg() {
      setBgImage(window.innerWidth < 640 ? background6 : background3)
    }
    updateBg()
    window.addEventListener('resize', updateBg)
    return () => window.removeEventListener('resize', updateBg)
  }, [])

  const wrapperClasses = `
    relative flex justify-center items-start
    min-h-screen bg-cover bg-center
  `

  return (
    <section
      id="contact-us"
      className={wrapperClasses}
      style={{
        backgroundColor: '#000',
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundAttachment: 'scroll',
      }}
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
