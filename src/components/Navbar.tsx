// src/components/Navbar.tsx

import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/logo.png';

const navItems: { label: string; to: string }[] = [
  { label: 'Home', to: '/' },
  { label: 'How It Works', to: '/how-it-works' },
  { label: 'Who We Serve', to: '/who-we-serve' },
  { label: 'About Us', to: '/about-us' },
  { label: 'Contact', to: '/contact' },
];

export const Navbar: React.FC = () => {
  const location = useLocation();
  const [active, setActive] = useState(location.pathname);

  useEffect(() => {
    setActive(location.pathname);
  }, [location.pathname]);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo + Brand */}
        <div className="flex items-center space-x-3">
          <img
            src={logo}
            alt="Plan B Logo"
            className="h-10 w-10 object-contain"
          />
          <div>
            <h1 className="text-xl font-bold">Plan B</h1>
            <p className="text-sm text-gray-500">Amman</p>
          </div>
        </div>

        {/* Nav Links */}
        <ul className="flex space-x-4">
          {navItems.map(({ label, to }) => {
            const isActive = active === to;
            return (
              <li key={to}>
                <Link
                  to={to}
                  className={`
                    uppercase text-sm font-medium
                    px-4 py-2 rounded-full
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
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
