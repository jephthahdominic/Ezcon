import Footer from "@/app/components/Footer";
import Navbar from "../../components/Navbar";

export default function CyberSecurity() {
  return (
    <>
      <Navbar />
      <main className="font-sans bg-white text-[#2c1c0f]">
        {/* Hero Section */}
        <section className="relative h-[70vh] bg-gradient-to-br from-[#0a1929] via-[#1e293b] to-[#0f172a] bg-[url('/cyberSecurity.png')] overflow-hidden"> 
          <div className="absolute inset-0 bg-black/40"></div>         
          <div className="relative z-10 h-full flex items-end center px-8 md:px-16 py-16">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Cybersecurity</h1>
              <button className="bg-white text-[#8b4513] font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors flex items-center gap-2">
                Book Service
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          </div>
        </section>

        {/* Service Description */}
        <section className="max-w-4xl mx-auto py-16 px-8">
          <p className="text-gray-700 text-base leading-relaxed mb-8">
          Our Cybersecurity service covers the full spectrum of digital risk management. We start with in-depth log and incident report analysis to detect vulnerabilities or breaches. Our team then recommends and implements 
          measures to strengthen your systems — including patching, access control, and configuration hardening. Whether it’s preventing future threats or responding to an active incident, we provide the tools, 
          intelligence, and hands-on support to secure your network and digital assets.
          </p>
        </section>

        {/* Footer */}
            
        <Footer />
      </main>
    </>
  );
}