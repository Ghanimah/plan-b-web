// src/components/Footer.tsx
import React from 'react'
import {
  Building2,
  Users,
  Phone,
  Mail,
  MapPin,
  Instagram,
  Linkedin,
} from 'lucide-react'

const Footer: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-bee-black text-offwhite py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div
                className="w-12 h-12 bg-honey rounded-full flex items-center justify-center mr-4"
                style={{
                  clipPath:
                    'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
                }}
              >
                <Users className="w-6 h-6 text-bee-black" />
              </div>
              <h3 className="text-2xl font-bold">Plan B</h3>
            </div>

            <p className="text-offwhite/70 mb-6 leading-relaxed max-w-md">
              Jordan's leading student recruitment platform connecting businesses
              with trained, reliable talent. We build hives. We gain trust.
            </p>

            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/plnb.jo"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-bee-black rounded-full flex items-center justify-center hover:bg-honey hover:text-bee-black transition-colors duration-300"
                style={{
                  clipPath:
                    'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
                }}
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/plbee"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-bee-black rounded-full flex items-center justify-center hover:bg-honey hover:text-bee-black transition-colors duration-300"
                style={{
                  clipPath:
                    'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
                }}
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-honey">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('build-hive')}
                  className="text-offwhite/70 hover:text-honey-dark transition-colors duration-300 hover:underline"
                >
                  Build Your Hive
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('join-hive')}
                  className="text-offwhite/70 hover:text-honey-dark transition-colors duration-300 hover:underline"
                >
                  Join Your Hive
                </button>
              </li>
              <li>
                <a
                  href="#"
                  className="text-offwhite/70 hover:text-honey-dark transition-colors duration-300 hover:underline"
                >
                  FAQs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-offwhite/70 hover:text-honey-dark transition-colors duration-300 hover:underline"
                >
                  Terms &amp; Privacy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-honey">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-honey-dark mt-1 flex-shrink-0" />
                <div>
                  <p className="text-offwhite/70">Plan B Headquarters</p>
                  <p className="text-offwhite/70">Amman, Jordan</p>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-honey-dark flex-shrink-0" />
                <a
                  href="tel:+962792233340"
                  className="text-offwhite/70 hover:text-honey-dark transition-colors duration-300"
                >
                  +962792233340
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-honey-dark flex-shrink-0" />
                <a
                  href="mailto:thebeekeeper@planb.jo"
                  className="text-offwhite/70 hover:text-honey-dark transition-colors duration-300"
                >
                  thebeekeeper@plbee.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="border-t border-gray-800 pt-12 mb-12">
          <div className="bg-gradient-to-r from-honey to-honey-dark rounded-2xl p-6 sm:p-8 text-center">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-bee-black mb-4">
              Ready to Experience the Hive Difference?
            </h3>
            <p className="text-base sm:text-lg md:text-xl text-bee-black mb-6 max-w-2xl mx-auto">
              Join the hundreds of businesses and students who trust Plan B for
              reliable, flexible workforce solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollToSection('build-hive')}
                className="flex items-center justify-center bg-bee-red text-offwhite px-6 py-3 rounded-lg font-semibold hover:bg-bee-black transition-colors duration-300 w-full sm:w-auto"
              >
                <Building2 className="w-5 h-5 mr-2" />
                Build Your Hive
              </button>
              <button
                onClick={() => scrollToSection('join-hive')}
                className="flex items-center justify-center bg-offwhite text-bee-black px-6 py-3 rounded-lg font-semibold hover:bg-offwhite/90 transition-colors duration-300 w-full sm:w-auto"
              >
                <Users className="w-5 h-5 mr-2" />
                Join Your Hive
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="text-offwhite/70 mb-4 md:mb-0">
            © {new Date().getFullYear()} Plan B. All rights reserved. Made with
            ❤️ in Jordan.
          </p>
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-offwhite/70">
            <span>Active in Amman</span>
            <span>Aqaba</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer