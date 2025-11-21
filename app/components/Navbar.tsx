"use client";
import { useState } from "react";
import Link from "next/link";

const services = [
  { name: "i-Verify", href: "/services/i-verify" },
  { name: "Invest Africa", href: "/services/investAfrica" },
  { name: "Market Intelligence", href: "/services/marketintelligence" },
  // { name: "Tour Afric", href: "/services/tourAfric" },
  // { name: "WorknPay", href: "/services/worknpay" },
  // { name: "Fraud detection and protection", href: "/services/training" },
  { name: "Leadership Development", href: "/services/leadership-development" },
  // { name: "Cyber Security", href: "/services/cyberSecurity" },
  // { name: "Health Overseas", href: "/services/health-overseas" },
];

export default function Navbar() {
  const [dropdown, setDropdown] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-sm relative z-20 sticky top-0">
      <div className="flex justify-between items-center px-6 py-5">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link href="/">
            <img src="/logo.png" width={50} height={50} alt="Ezcon Logo" className="h-6" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6 text-xs md:text-sm text-gray-800 items-center">
          <li>
            <Link href="/about-us" className="hover:underline">About Us</Link>
          </li>
          <li>
            <Link href="/contact-us" className="hover:underline">Contact Us</Link>
          </li>
          <li className="relative group">
            <div
              onMouseEnter={() => setDropdown(true)}
              onMouseLeave={() => setDropdown(false)}
              className="inline-block"
            >
              <button className="hover:underline flex items-center gap-1 focus:outline-none">
                Services
                <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
                </svg>
              </button>
              {dropdown && (
                <div 
                 className="absolute left-0 mt-0 w-48 bg-white border border-gray-200 rounded shadow-lg z-30">
                  <ul className="py-1">
                    {services.map((service) => (
                      <li key={service.href}>
                        <Link
                          href={service.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-100 hover:text-orange-900"
                          onClick={() => setDropdown(false)}
                        >
                          {service.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </li>
        </ul>

        {/* Desktop CTA Button */}
        <Link
          href="/contact-us" 
          className="hidden md:block bg-orange-900 hover:bg-orange-800 text-white text-xs px-4 py-2 rounded-full transition"
        >
          Start Your Consultation
        </Link>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenu(!mobileMenu)}
          className="md:hidden flex flex-col justify-center items-center w-6 h-6 focus:outline-none"
          aria-label="Toggle mobile menu"
        >
          <span className={`block w-5 h-0.5 bg-gray-800 transition-all duration-300 ${mobileMenu ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block w-5 h-0.5 bg-gray-800 transition-all duration-300 mt-1 ${mobileMenu ? 'opacity-0' : ''}`}></span>
          <span className={`block w-5 h-0.5 bg-gray-800 transition-all duration-300 mt-1 ${mobileMenu ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-6 py-4 space-y-4">
            <Link 
              href="/about-us" 
              className="font-sans block text-gray-800 hover:text-orange-900 transition-colors"
              onClick={() => setMobileMenu(false)}
            >
              About
            </Link>
            <Link 
              href="/contact-us" 
              className="font-sans block text-gray-800 hover:text-orange-900 transition-colors"
              onClick={() => setMobileMenu(false)}
            >
              Contact Us
            </Link>
            
            {/* Mobile Services Dropdown */}
            <div>
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="font-sans flex items-center justify-between w-full text-left text-gray-800 hover:text-orange-900 transition-colors focus:outline-none"
              >
                Services
                <svg 
                  className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
                </svg>
              </button>
              
              {mobileServicesOpen && (
                <div className="mt-2 ml-4 space-y-2">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block text-sm text-gray-600 hover:text-orange-900 transition-colors py-1"
                      onClick={() => {
                        setMobileMenu(false);
                        setMobileServicesOpen(false);
                      }}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile CTA Button */}
            <a 
              href="#" 
              className="block w-full text-center bg-orange-900 hover:bg-orange-800 text-white text-sm px-4 py-2 rounded-full transition mt-4"
              onClick={() => setMobileMenu(false)}
            >
              Start Your Consultation
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
