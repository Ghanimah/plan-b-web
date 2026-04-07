// src/components/Footer.tsx
import React from 'react'
import { Link } from 'react-router-dom'
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Linkedin,
  Hexagon,
  ArrowUpRight,
} from 'lucide-react'

const navCols = [
  {
    title: 'Explore',
    links: [
      { label: 'Home', to: '/' },
      { label: 'How It Works', to: '/how-it-works' },
      { label: 'Who We Serve', to: '/who-we-serve' },
      { label: 'About', to: '/about-us' },
    ],
  },
  {
    title: 'Join the Hive',
    links: [
      { label: 'Build Your Hive', to: '/build-hive' },
      { label: 'Join Your Hive', to: '/join-hive' },
      { label: 'Join Royal Swarm', to: '/join-royal-swarm' },
      { label: 'Contact', to: '/contact' },
    ],
  },
]

const Footer: React.FC = () => {
  return (
    <footer className="relative overflow-hidden border-t border-hive-border bg-hive-night text-white">
      <div className="pointer-events-none absolute inset-0 bg-honeycomb opacity-25" />
      <div className="pointer-events-none absolute -bottom-40 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-gold/10 blur-[140px]" />

      <div className="container relative mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-5">
            <Link to="/" className="group flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold-gradient shadow-honey transition-transform duration-300 group-hover:rotate-12">
                <Hexagon className="h-5 w-5 fill-hive-night text-hive-night" />
              </div>
              <div className="leading-none">
                <div className="font-display text-2xl font-bold tracking-tight">
                  Plan <span className="text-gold">B</span>
                </div>
                <div className="mt-1 text-[10px] font-medium uppercase tracking-[0.2em] text-white/40">
                  Your hive. Your way.
                </div>
              </div>
            </Link>

            <p className="mt-6 max-w-md text-sm leading-relaxed text-white/60">
              Jordan's leading student recruitment platform connecting brands with
              trained, reliable talent. We build hives. We gain trust.
            </p>

            {/* Socials */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://www.instagram.com/plnb.jo"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="group flex h-10 w-10 items-center justify-center rounded-xl border border-hive-border bg-hive-card/50 text-white/70 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/60 hover:text-gold"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://www.linkedin.com/company/plbee"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="group flex h-10 w-10 items-center justify-center rounded-xl border border-hive-border bg-hive-card/50 text-white/70 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/60 hover:text-gold"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Nav columns */}
          {navCols.map((col) => (
            <div key={col.title} className="lg:col-span-2">
              <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                {col.title}
              </h4>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l.to}>
                    <Link
                      to={l.to}
                      className="group inline-flex items-center gap-1 text-sm text-white/65 transition-colors hover:text-white"
                    >
                      {l.label}
                      <ArrowUpRight className="h-3 w-3 opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-100" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
              Contact
            </h4>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex items-start gap-3 text-white/65">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold/80" />
                <span>Plan B HQ — Amman, Jordan</span>
              </li>
              <li className="flex items-center gap-3 text-white/65">
                <Phone className="h-4 w-4 flex-shrink-0 text-gold/80" />
                <a href="tel:+962792233340" className="hover:text-white">
                  +962 79 223 3340
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/65">
                <Mail className="h-4 w-4 flex-shrink-0 text-gold/80" />
                <a
                  href="mailto:thebeekeeper@plbee.com"
                  className="hover:text-white"
                >
                  thebeekeeper@plbee.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-hive-border pt-8 text-xs text-white/45 md:flex-row">
          <p>
            © {new Date().getFullYear()} Plan B. All rights reserved. Built with honey in Jordan.
          </p>
          <div className="flex items-center gap-5">
            <span>Active in Amman</span>
            <span className="h-1 w-1 rounded-full bg-white/30" />
            <span>Aqaba</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
