"use client";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import servicesData from "../services.json";
import Link from "next/link";
import Footer from "./components/Footer";

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
      <main className="bg-white text-[#2c1c0f]">
        {/* Hero Section */}
        <section
          className="relative h-[500px] flex items-center justify-start bg-cover bg-center bg-[url('/Hero_img.png')] overflow-hidden"
        >
          <div className="absolute inset-0 bg-black/20"></div>
          <div className={`relative z-10 text-white px-8 md:px-16 max-w-3xl transform transition-all duration-1000 ease-out ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}>
            <h1 className={`text-4xl md:text-5xl font-bold mb-4 leading-tight transform transition-all duration-1200 ease-out delay-300 ${
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
            <Link href="#services" className={`bg-[#d4621a] hover:bg-[#b8541a] text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg transform ${
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
                  Established in 2012 as AMOAH IDEA CONSULT and rebranded in 2021 as eZcon Advisory Limited, we've grown into a trusted partner with a global presence across Africa, Asia, South America, and Europe. Specializing in corporate background checks, business intelligence, and verification services, we serve insurance companies, healthcare institutions, legal firms, and government agencies with innovative solutions tailored to market demands.
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
                <img src="/Img.png" alt="City view" className="w-full h-full object-cover transition-transform duration-300 hover:scale-110" />
              </div>
            </div>
          </div>
        </section>

        {/* Core Services Section */}
        <section className="bg-[#fcf8f5] py-16 px-8" id="services">
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
            <div className="max-w-6xl mx-auto grid md:grid-cols-3 divide-x-1 divide-gray-200 gap-12 text-center">
              <div>
                <div className="text-5xl md:text-5xl font-bold mb-4">$50M+</div>
                <p className="opacity-90 font-medium">Capital Growth</p>
              </div>
              <div>
                <div className="text-5xl md:text-5xl font-bold mb-4">13 Yrs</div>
                <p className="opacity-90 font-medium">Of Experience</p>
              </div>
              <div>
                <div className="text-5xl md:text-5xl font-bold mb-4">120+</div>
                <p className="opacity-90 font-medium">Startup Clients</p>
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
              Comprehensive solutions for institutions, enterprises, and individuals seeking global opportunities.
            </p>
            <Link href="/contact-us" className="bg-white text-[#d4621a] font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors">
              Contact Us
            </Link>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </main>
    </>
  );
}

