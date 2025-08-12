"use client";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import servicesData from "../services.json";
import Link from "next/link";

export default function Home() {
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const services = servicesData.services;
  
  // Trigger animations on mount
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  // Function to get current 3 services to display
  const getCurrentServices = () => {
    const endIndex = currentServiceIndex + 3;
    return services.slice(currentServiceIndex, endIndex);
  };
  
  // Function to go to previous services
  const goToPrevious = () => {
    if (currentServiceIndex > 0) {
      setCurrentServiceIndex(currentServiceIndex - 3);
    }
  };
  
  // Function to go to next services
  const goToNext = () => {
    if (currentServiceIndex + 3 < services.length) {
      setCurrentServiceIndex(currentServiceIndex + 3);
    }
  };
  
  // Function to create brief description from full description
  const createBriefDescription = (description: string) => {
    // Take first sentence or first 120 characters, whichever is shorter
    const firstSentence = description.split('.')[0] + '.';
    return firstSentence.length > 120 ? description.substring(0, 120) + '...' : firstSentence;
  };
  return (
    <>
      <Navbar />
      <main className="font-sans bg-white text-[#2c1c0f]">
        {/* Hero Section */}
        <section
          className="relative h-[500px] flex items-center justify-start bg-cover bg-center bg-[url('/Hero_img.png')] overflow-hidden"
        >
          <div className="absolute inset-0 bg-black/20"></div>
          <div className={`relative z-10 text-white px-8 md:px-16 max-w-3xl transform transition-all duration-1000 ease-out ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}>
            <h1 className={`text-4xl md:text-6xl font-bold mb-4 leading-tight transform transition-all duration-1200 ease-out delay-300 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
              Your Global Gateway<br />
              to Opportunities
            </h1>
            <p className={`text-lg md:text-xl mb-6 opacity-90 transform transition-all duration-1000 ease-out delay-500 ${
              isVisible ? 'translate-y-0 opacity-90' : 'translate-y-6 opacity-0'
            }`}>
              Explore Our Services
            </p>
            <Link href="/contact-us" className={`bg-[#d4621a] hover:bg-[#b8541a] text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            } delay-700`}>
              Get Started
            </Link>
          </div>
        </section>

        {/* About Us Section */}
        <section className="max-w-7xl mx-auto py-16 px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className={`transform transition-all duration-1000 ease-out ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
            } delay-200`}>
              <h2 className={`text-3xl font-bold mb-6 text-[#2c1c0f] transform transition-all duration-800 ease-out ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
              } delay-400`}>About Us</h2>
              <p className={`text-gray-700 text-base leading-relaxed mb-6 transform transition-all duration-800 ease-out ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              } delay-600`}>
                Since 2012, Ezcon Africa has been at the vanguard of Africa's relationship with the world. We are trusted advisors, partners, and facilitators for institutions and individuals seeking to navigate Africa's complex business landscape. Our deep local roots and global perspective set us apart.
              </p>
              <Link href="/about-us" className={`text-[#d4621a] font-semibold hover:underline transition-all duration-300 hover:translate-x-2 inline-block transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              } delay-800`}>
                Read more →
              </Link>
            </div>
            <div className={`grid grid-cols-2 gap-4 transform transition-all duration-1000 ease-out ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
            } delay-400`}>
              <div className={`aspect-square bg-gradient-to-br from-[#d4621a]/20 to-[#d4621a]/40 rounded-2xl flex items-center justify-center hover:scale-105 transition-all duration-300 hover:shadow-lg transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
              } delay-600`}>
                <div className="aspect-square bg-[#d4621a]/30 flex items-center justify-center overflow-hidden">
                  <img src="/Rectangle 2.png" alt="City view" className="w-full h-full object-cover transition-transform duration-300 hover:scale-110" />
                </div>
              </div>
              <div className={`aspect-square bg-gradient-to-br from-[#f4a261]/20 to-[#f4a261]/40 rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 hover:shadow-lg transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
              } delay-800`}>
                <img src="/img.png" alt="City view" className="w-full h-full object-cover transition-transform duration-300 hover:scale-110" />
              </div>
            </div>
          </div>
        </section>

        {/* Core Services Section */}
        <section className="bg-[#fcf8f5] py-16 px-8">
          <div className="max-w-7xl mx-auto">
            <div className={`flex items-center justify-between mb-12 transform transition-all duration-800 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            } delay-300`}>
              <h3 className="text-3xl font-bold text-[#2c1c0f]">Our Core Services</h3>
              <div className="flex space-x-2">
                <button 
                  onClick={goToPrevious}
                  disabled={currentServiceIndex === 0}
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-md ${
                    currentServiceIndex === 0 
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                      : 'bg-[#d4621a] text-white hover:bg-[#b8541a]'
                  }`}
                >
                  <svg className="w-5 h-5 transition-transform duration-200 hover:-translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/>
                  </svg>
                </button>
                <button 
                  onClick={goToNext}
                  disabled={currentServiceIndex + 3 >= services.length}
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-md ${
                    currentServiceIndex + 3 >= services.length 
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                      : 'bg-[#d4621a] text-white hover:bg-[#b8541a]'
                  }`}
                >
                  <svg className="w-5 h-5 transition-transform duration-200 hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                  </svg>
                </button>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {getCurrentServices().map((service, index) => (
                <div 
                  key={service.name} 
                  className={`bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:scale-105 transition-all duration-500 ease-out hover:-translate-y-2 group transform ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}
                  style={{ 
                    transitionDelay: `${500 + index * 150}ms`,
                    animationDelay: `${500 + index * 150}ms`
                  }}
                >
                  <div className="text-[#d4621a] font-bold text-4xl mb-4 transition-all duration-300 group-hover:scale-110">
                    {String(currentServiceIndex + index + 1).padStart(2, '0')}
                  </div>
                  <h4 className="text-xl font-semibold mb-4 text-[#2c1c0f] transition-colors duration-300 group-hover:text-[#d4621a]">
                    {service.name}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 transition-colors duration-300 group-hover:text-gray-700">
                    {createBriefDescription(service.description)}
                  </p>
                  <Link 
                    href={service.url} 
                    className="text-[#d4621a] font-semibold hover:underline text-sm transition-all duration-300 hover:translate-x-2 inline-flex items-center group-hover:text-[#b8541a]"
                  >
                    Learn more 
                    <svg className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                    </svg>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Numbers/Stats Section */}
        <section className="bg-[#8b4513] text-white py-16 px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-12">Our Numbers. Proven Success.</h3>
            <div className="grid md:grid-cols-3 gap-12">
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-4">$50M+</div>
                <p className="text-base opacity-90">Value of deals facilitated across Africa, demonstrating our impact and reach in the market.</p>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-4">13 Yrs</div>
                <p className="text-base opacity-90">Years of experience in African markets, building deep expertise and lasting relationships.</p>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-4">120+</div>
                <p className="text-base opacity-90">Clients, partners, and projects delivered successfully across diverse sectors and regions.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Institutions Section */}
        <section
          className="relative h-[400px] flex items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: "url('/Hero_img.png')" }}
        >
          <div className="absolute inset-0 bg-[#2c1c0f]/70"></div>
          <div className="relative z-10 text-center text-white px-8 max-w-4xl">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Serving Institutions, Enterprises & Individuals
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Comprehensive solutions for institutions, enterprises, and individuals seeking Africa's opportunities.
            </p>
            <button className="bg-white text-[#d4621a] font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors">
              Contact Us
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gradient-to-b from-[#8b4513] to-[#654321] text-white py-12 px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div className="md:col-span-2">
                <div className="font-bold text-2xl mb-4">Ezcon Africa</div>
                <p className="text-lg mb-4 opacity-90">Your Global Gateway to Opportunities</p>
                <p className="text-sm opacity-75">
                  Connecting Africa with the world through strategic partnerships, investment opportunities, and comprehensive business solutions.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="#about" className="hover:underline opacity-90 hover:opacity-100">About Us</a></li>
                  <li><a href="#services" className="hover:underline opacity-90 hover:opacity-100">Our Services</a></li>
                  <li><a href="#contact" className="hover:underline opacity-90 hover:opacity-100">Contact</a></li>
                  <li><a href="#" className="hover:underline opacity-90 hover:opacity-100">Privacy Policy</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-4">Connect With Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="border-t border-white/20 pt-8 text-center">
              <p className="text-sm opacity-75">
                © {new Date().getFullYear()} Ezcon Africa. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}

