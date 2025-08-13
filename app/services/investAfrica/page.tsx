"use client";

import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "@/app/components/Footer";

export default function InvestAfrica() {
  return (
    <>
      <Navbar />
      <main className="font-sans bg-white text-[#2c1c0f]">
        {/* Hero Section */}
        <section 
          className="relative h-[70vh] bg-gradient-to-br from-[#0a2540] via-[#1e3a5f] to-[#2d5a87]  overflow-hidden bg-[url('/investAfricHero.png')] bg-cover bg-center"
        >
          {/* Background Elements */}
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative z-10 h-full flex items-end px-8 md:px-16 py-16">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-semibold text-white mb-3">Invest Africa</h1>
              <a href="mailto:investafric@ezconadvisory.com" className="bg-white text-[#8b4513] font-normal px-8 py-3 rounded-full hover:bg-gray-100 transition-colors flex items-center gap-2">
                Book Service
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Service Description */}
        <section className="max-w-4xl mx-auto py-16 px-8">
          <p className="text-gray-700 text-base leading-relaxed mb-8">
            Operating a mini shop in Nairobi in Kenya, venturing into oil company in Nigeria and engaging in 
            cocoa production in Ghana including divers opportunities in Africa. Our partnership with 
            Governments and companies across Africa, Asia and South America, starting with facilitation of business registration, 
            acquisition of permits and tax compliance. Providing assistance and supports ensuring your 
            investment is growing profitably.
          </p>
        </section>

        {/* Sector Cards */}
        <section className="max-w-6xl mx-auto px-8 pb-16">
          <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
            <div className="aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden">
              <Image src="/oil.png" width={500} height={500} alt="oil sector" className="w-full h-full object-cover" />
              <p></p>
            </div>
            <div className="aspect-[4/3] bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
              <Image src="/banking.png" width={500} height={500} alt="finance" className="object-cover w-full h-full" />
            </div>
            <div className="aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden">
              <Image src="/cocoa.png" width={500} height={500} alt="Agriculture sector" className="w-full h-full object-cover" />
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </main>
    </>
  );
}