// src/components/Hero.tsx
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
        bg-[url('../assets/honeycomb-pattern.png')]
        bg-cover bg-center
      "
    >
      {/* Headline */}
      <div
        className={`
          absolute inset-x-0 top-1/4
          px-4 sm:px-6 lg:px-8
          text-center
          transform transition-all duration-700
          ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}
        `}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
          We Build Hives.
          <br />
          <span className="inline-block ml-0 sm:ml-4">We Gain Trust.</span>
        </h1>
      </div>

      {/* Buttons */}
      <div
        className={`
          absolute inset-x-0 top-1/2
          flex flex-col sm:flex-row justify-center items-center
          space-y-4 sm:space-y-0 sm:space-x-6
          transform transition-opacity duration-700
          ${mounted ? 'opacity-100' : 'opacity-0'}
        `}
      >
        <Link
          to="/build-hive"
          className="
            px-6 py-3 sm:px-8 sm:py-4
            bg-yellow-400 text-black font-semibold rounded-full
            transform transition duration-500 ease-out
            hover:-translate-y-1 hover:shadow-lg
            w-full sm:w-auto text-center
          "
        >
          Build Your Hive
        </Link>
        <Link
          to="/join-hive"
          className="
            px-6 py-3 sm:px-8 sm:py-4
            bg-transparent border-2 border-yellow-400 text-yellow-400 font-semibold rounded-full
            transform transition duration-500 ease-out
            hover:bg-yellow-400 hover:text-black hover:shadow-lg
            w-full sm:w-auto text-center
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
