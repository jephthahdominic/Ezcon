import Footer from "@/app/components/Footer";
import Navbar from "../../components/Navbar";

export default function Training() {
  return (
    <>
      <Navbar />
      <main className="font-sans bg-white text-[#2c1c0f]">
        {/* Hero Section */}
        <section className="relative h-[70vh] bg-gradient-to-br from-[#0a1929] via-[#1e293b] to-[#0f172a] bg-[url('/training.png')] bg-cover bg-[70%_50%] overflow-hidden"> 
          <div className="absolute inset-0 bg-black/40"></div>         
          <div className="relative z-10 h-full flex items-end px-8 md:px-16 py-16">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-semibold text-white mb-6 leading-normal">Training in Fraud Detection & Prevention</h1>
              <button className="bg-white text-[#8b4513] font-normal px-8 py-3 rounded-full hover:bg-gray-100 transition-colors flex items-center gap-2">
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
            Corporate organizations and individuals are trained and equipped with various tools and knowledge 
            to prevent, detect and prevent risk at workplace, the modules include legal principles and 
            requirements, communication skills, sources of Information, locating people and performing 
            background checks, evidence in court, competitive intelligence, fingerprinting and analysis, 
            conducting various sources of information, interviewing and truth verifications and reporting.
          </p>
        </section>

        {/* Footer */}
        <Footer />
      </main>
    </>
  );
}