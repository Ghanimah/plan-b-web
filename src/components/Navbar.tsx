import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ArrowRight } from 'lucide-react'
import logo from '../assets/logo.png'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'How It Works', to: '/how-it-works' },
  { label: 'Who We Serve', to: '/who-we-serve' },
  { label: 'About', to: '/about-us' },
  { label: 'Contact', to: '/contact' },
]

export const Navbar: React.FC = () => {
  const location = useLocation()
  const [active, setActive] = useState(location.pathname)
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => setActive(location.pathname), [location.pathname])
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menu on route change
  useEffect(() => setMenuOpen(false), [location.pathname])

  return (
    <nav
      className={`
        fixed top-0 left-0 z-50 w-full
        transition-all duration-300
        ${
          scrolled
            ? 'border-b border-hive-border/60 bg-hive-night/80 backdrop-blur-xl shadow-[0_8px_40px_-10px_rgba(0,0,0,0.6)]'
            : 'bg-transparent'
        }
      `}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo + brand */}
        <Link to="/" className="group flex items-center gap-3">
          <img src={logo} alt="Plan B logo" className="h-10 w-10 object-contain transition-transform duration-300 group-hover:scale-105" />
          <div className="leading-none">
            <div className="font-display text-xl font-bold tracking-tight text-white">
              Plan <span className="text-gold">B</span>
            </div>
            <div className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.2em] text-white/40">
              Your hive. Your way.
            </div>
          </div>
        </Link>

        {/* desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map(({ label, to }) => {
            const isActive = active === to
            return (
              <li key={to}>
                <Link
                  to={to}
                  className={`
                    rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200
                    ${
                      isActive
                        ? 'bg-gold/15 text-gold'
                        : 'text-white/70 hover:bg-white/5 hover:text-white'
                    }
                  `}
                >
                  {label}
                </Link>
              </li>
            )
          })}
        </ul>

        {/* desktop CTA */}
        <Link
          to="/build-hive"
          className="hidden items-center gap-2 rounded-full bg-gold-gradient px-5 py-2.5 text-sm font-semibold text-hive-night shadow-honey transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-glow md:inline-flex"
        >
          Get Started
          <ArrowRight className="h-4 w-4" />
        </Link>

        {/* mobile menu button */}
        <button
          className="rounded-lg p-2 text-white hover:bg-white/5 md:hidden"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* mobile menu */}
      {menuOpen && (
        <div className="absolute inset-x-0 top-full border-t border-hive-border/60 bg-hive-night/95 backdrop-blur-xl md:hidden">
          <ul className="flex flex-col gap-1 px-4 py-4">
            {navItems.map(({ label, to }) => {
              const isActive = active === to
              return (
                <li key={to}>
                  <Link
                    to={to}
                    onClick={() => setMenuOpen(false)}
                    className={`
                      block rounded-xl px-5 py-3 text-base font-medium transition-colors
                      ${
                        isActive
                          ? 'bg-gold/15 text-gold'
                          : 'text-white/80 hover:bg-white/5 hover:text-white'
                      }
                    `}
                  >
                    {label}
                  </Link>
                </li>
              )
            })}
            <li className="pt-2">
              <Link
                to="/build-hive"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center gap-2 rounded-xl bg-gold-gradient px-5 py-3 text-base font-semibold text-hive-night shadow-honey"
              >
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar
