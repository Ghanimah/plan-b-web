// src/components/Hero.tsx
import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Hexagon, Users, Building2, ArrowRight } from 'lucide-react'
import { ContainerScroll } from './ui/container-scroll-animation'
import background3 from '../assets/background3.png'

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-hive-night"
    >
      {/* Ambient golden glow orbs */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[22rem] w-[22rem] sm:h-[40rem] sm:w-[40rem] rounded-full bg-gold/10 blur-[120px]" />
      <div className="pointer-events-none absolute top-1/3 -left-16 sm:-left-32 h-48 w-48 sm:h-72 sm:w-72 rounded-full bg-gold-dark/20 blur-[100px]" />
      <div className="pointer-events-none absolute top-1/2 -right-16 sm:-right-32 h-48 w-48 sm:h-80 sm:w-80 rounded-full bg-gold/15 blur-[100px]" />

      {/* Honeycomb pattern overlay */}
      <div className="pointer-events-none absolute inset-0 bg-honeycomb opacity-40" />

      <ContainerScroll
        titleComponent={
          <div className="pt-24 md:pt-0">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-gold"
            >
              <Hexagon className="h-3.5 w-3.5 fill-gold text-gold" />
              Where the hive gathers
            </motion.div>
            <h1 className="mt-6 text-3xl font-bold text-white sm:text-5xl md:text-7xl">
              Welcome to <span className="text-gold-gradient">Plan B</span>
            </h1>
            <p className="mt-4 text-lg font-medium text-white/70 md:text-2xl">
              Your Hive Starts Here
            </p>
          </div>
        }
      >
        {/* iPad content — live interactive CTA panel */}
        <div className="relative h-full w-full">
          {/* Background image */}
          <img src={background3} alt="" className="absolute inset-0 h-full w-full object-cover" />

          <div className="relative flex h-full w-full flex-col items-center justify-center p-4 pb-8 sm:p-6 sm:pb-14 md:p-12 md:pb-24">
            {/* Tiny window chrome (like a browser / app) */}
            <div className="absolute left-3 top-3 flex items-center gap-1.5 sm:left-4 sm:top-4 md:left-6 md:top-6">
              <span className="h-2 w-2 rounded-full bg-red-400/70 sm:h-2.5 sm:w-2.5" />
              <span className="h-2 w-2 rounded-full bg-yellow-400/70 sm:h-2.5 sm:w-2.5" />
              <span className="h-2 w-2 rounded-full bg-green-400/70 sm:h-2.5 sm:w-2.5" />
            </div>

            <h3 className="text-center text-base font-semibold text-white/90 sm:text-xl md:text-3xl">
              What would you like to do?
            </h3>
            <p className="mt-1 max-w-md text-center text-xs text-white/50 sm:mt-2 sm:text-sm md:text-base">
              Choose your path — find work or build a team of trained talent.
            </p>

            <div className="mt-4 flex w-full max-w-2xl flex-col items-stretch gap-3 sm:mt-8 sm:gap-4 md:mt-10 md:flex-row">
              {/* Join Your Hive */}
              <Link
                to="/join-hive"
                className="group relative flex-1 overflow-hidden rounded-xl sm:rounded-2xl bg-gold-gradient p-3 sm:p-5 md:p-6 text-left shadow-honey transition-transform duration-300 hover:-translate-y-1 hover:shadow-glow-lg"
              >
                <div className="absolute inset-0 bg-honeycomb-dense opacity-20" />
                <div className="relative flex items-start gap-3 sm:gap-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg sm:rounded-xl bg-hive-night/85 sm:h-11 sm:w-11 md:h-12 md:w-12">
                    <Users className="h-4 w-4 text-gold sm:h-5 sm:w-5 md:h-6 md:w-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="hidden sm:flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-hive-night/70">
                      For talent
                    </div>
                    <div className="text-sm font-bold text-hive-night sm:mt-1 sm:text-lg md:text-xl">
                      Join Your Hive
                    </div>
                    <p className="hidden sm:block mt-1 text-xs text-hive-night/75 md:text-sm">
                      Flexible roles, real experience, weekly pay.
                    </p>
                  </div>
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 text-hive-night transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </Link>

              {/* Build Your Hive */}
              <Link
                to="/build-hive"
                className="group relative flex-1 overflow-hidden rounded-xl sm:rounded-2xl border-2 border-gold/60 bg-hive-night/80 p-3 sm:p-5 md:p-6 text-left backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:bg-hive-night hover:shadow-glow"
              >
                <div className="absolute inset-0 bg-honeycomb-dense opacity-10" />
                <div className="relative flex items-start gap-3 sm:gap-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg sm:rounded-xl bg-gold/15 sm:h-11 sm:w-11 md:h-12 md:w-12">
                    <Building2 className="h-4 w-4 text-gold sm:h-5 sm:w-5 md:h-6 md:w-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="hidden sm:flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gold/80">
                      For teams
                    </div>
                    <div className="text-sm font-bold text-gold sm:mt-1 sm:text-lg md:text-xl">
                      Build Your Hive
                    </div>
                    <p className="hidden sm:block mt-1 text-xs text-white/60 md:text-sm">
                      Trained crews deployed in 24-48 hours.
                    </p>
                  </div>
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 text-gold transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </Link>
            </div>

            {/* Tiny badge row */}
            <div className="mt-8 hidden flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-white/40 md:flex">
              <span className="flex items-center gap-1.5">
                <Hexagon className="h-3 w-3 text-gold" /> Verified Profiles
              </span>
              <span className="flex items-center gap-1.5">
                <Hexagon className="h-3 w-3 text-gold" /> Smart Matching
              </span>
              <span className="flex items-center gap-1.5">
                <Hexagon className="h-3 w-3 text-gold" /> Weekly Payouts
              </span>
            </div>
          </div>
        </div>
      </ContainerScroll>
    </section>
  )
}

export default Hero
