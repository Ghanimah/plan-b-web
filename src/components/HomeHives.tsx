import React from 'react'
import { Building2, User } from 'lucide-react'
import { Link } from 'react-router-dom'

const teasers = [
  {
    icon: Building2,
    title: 'Build Your Hive',
    subtitle: 'Tell us about your event and staffing needs',
    to: '/build-hive',
    bgColor: 'bg-honey-dark',
  },
  {
    icon: User,
    title: 'Join Your Hive',
    subtitle: `Start your journey with Jordan’s leading recruitment platform`,
    to: '/join-hive',
    bgColor: 'bg-honey',
  },
]

export default function HomeHives() {
  return (
    <section
      id="home-hives"
      className="
        relative py-20
        bg-[url('/assets/background3.png')]
        bg-cover bg-center bg-fixed
      "
    >
      <div className="relative z-10 mx-auto max-w-6xl px-4 grid gap-8 md:grid-cols-2">
        {teasers.map(({ icon: Icon, title, subtitle, to, bgColor }) => (
          <Link
            key={title}
            to={to}
            className="
              group flex flex-col items-center text-center p-8
              bg-white/30 backdrop-blur-md border border-white/20
              rounded-2xl shadow-2xl
              transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl
            "
          >
            <div
              className={`
                ${bgColor} w-12 h-12 rounded-full
                flex items-center justify-center mb-4
                group-hover:scale-110 transition-transform duration-300
              `}
              style={{
                clipPath:
                  'polygon(25% 0%,75% 0%,100% 50%,75% 100%,25% 100%,0% 50%)',
              }}
            >
              <Icon className="w-6 h-6 text-offwhite" />
            </div>
            <h3 className="text-2xl font-semibold text-bee-black mb-2">
              {title}
            </h3>
            <p className="text-bee-black/70 mb-6">{subtitle}</p>
            <span
              className="
                inline-flex items-center px-6 py-3
                bg-bee-red text-offwhite font-semibold
                rounded-full shadow-lg
                hover:scale-105 transition-transform duration-300
              "
            >
              {title} &rarr;
            </span>
          </Link>
        ))}
      </div>
    </section>
  )
}
