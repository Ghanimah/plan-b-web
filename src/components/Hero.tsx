import React, { useEffect, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { Link } from 'react-router-dom'

const Hero: React.FC = () => {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  return (
    <section
      id="hero"
      className="
        relative h-screen overflow-hidden bg-black
        bg-[url('/assets/honeycomb-pattern.png')] bg-cover bg-center
      "
    >
      {/* Headline */}
      <div
        className={`
          absolute
          inset-x-0
          ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}
          top-20 sm:top-32
          px-4 sm:px-12 lg:px-24
          transform transition-all duration-700
          text-center sm:text-left
        `}
      >
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-snug">
          We Build Hives.
          <br />
          <span className="inline-block sm:ml-8">We Gain Trust.</span>
        </h1>
      </div>

      {/* React-Router Links */}
      <div
        className={`
          absolute left-1/2 top-[60%] -translate-x-1/2
          flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6
          w-full px-4 sm:w-auto sm:px-0
          transform transition-opacity duration-700
          ${mounted ? 'opacity-100' : 'opacity-0'}
        `}
      >
        <Link
          to="/build-hive"
          className="
            px-6 py-3 sm:px-8 sm:py-3
            bg-yellow-400 text-black font-semibold rounded-full
            transform transition duration-500 ease-out
            hover:-translate-y-1 hover:shadow-lg
            text-center w-full sm:w-auto
          "
        >
          Build Your Hive
        </Link>
        <Link
          to="/join-hive"
          className="
            px-6 py-3 sm:px-8 sm:py-3
            bg-transparent border-2 border-yellow-400 text-yellow-400 font-semibold rounded-full
            transform transition duration-500 ease-out
            hover:bg-yellow-400 hover:text-black hover:shadow-lg
            text-center w-full sm:w-auto
          "
        >
          Join Your Hive
        </Link>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 inset-x-0 flex justify-center z-10 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white" />
      </div>
    </section>
  )
}

export default Hero