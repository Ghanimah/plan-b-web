import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'How It Works', to: '/how-it-works' },
  { label: 'Who We Serve', to: '/who-we-serve' },
  { label: 'About Us', to: '/about-us' },
  { label: 'Contact', to: '/contact' },
]

export const Navbar: React.FC = () => {
  const location = useLocation()
  const [active, setActive] = useState(location.pathname)
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => setActive(location.pathname), [location.pathname])
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`
        fixed w-full top-0 left-0 z-50
        transition-colors duration-300
        ${scrolled ? 'bg-black/70 backdrop-blur-md' : 'bg-transparent'}
      `}
    >
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3">
        {/* Logo + Brand */}
        <div className="flex items-center space-x-3">
          <img
            src="/assets/logo.png"
            alt="Plan B Logo"
            className="h-8 w-8 sm:h-10 sm:w-10 object-contain"
          />
          <div>
            <h1 className="text-lg sm:text-xl font-bold text-white">Plan B</h1>
            <p className="text-xs sm:text-sm text-gray-200">Amman</p>
          </div>
        </div>

        {/* desktop links */}
        <ul className="hidden md:flex space-x-4">
          {navItems.map(({ label, to }) => {
            const isActive = active === to
            return (
              <li key={to}>
                <Link
                  to={to}
                  className={`
                    uppercase text-xs sm:text-sm font-medium
                    px-3 sm:px-4 py-1 sm:py-2 rounded-full
                    transition-colors duration-200
                    ${
                      isActive
                        ? 'bg-yellow-100 text-yellow-700'
                        : 'bg-gray-100 text-gray-700 hover:bg-yellow-50 hover:text-yellow-600'
                    }
                  `}
                >
                  {label}
                </Link>
              </li>
            )
          })}
        </ul>

        {/* mobile menu button */}
        <button
          className="md:hidden text-offwhite p-2"
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* mobile menu */}
        {menuOpen && (
          <div className="absolute top-full inset-x-0 bg-black/90 backdrop-blur-md md:hidden max-h-[calc(100vh-80px)] overflow-y-auto">
            <ul className="flex flex-col space-y-2 px-4 py-4">
              {navItems.map(({ label, to }) => {
                const isActive = active === to
                return (
                  <li key={to}>
                    <Link
                      to={to}
                      onClick={() => setMenuOpen(false)}
                      className={`
                        block uppercase text-base font-medium
                        px-6 py-3 rounded-full
                        transition-colors duration-200
                        ${
                          isActive
                            ? 'bg-yellow-100 text-yellow-700'
                            : 'bg-gray-100 text-gray-700 hover:bg-yellow-50 hover:text-yellow-600'
                        }
                      `}
                    >
                      {label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar