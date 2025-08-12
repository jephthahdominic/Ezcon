import Footer from "@/app/components/Footer";
import Navbar from "../../components/Navbar";

export default function WorkNPay() {
  return (
    <>
      <Navbar />
      <main className="font-sans bg-white text-[#2c1c0f]">
        {/* Hero Section */}
        <section 
          className="relative h-[70vh] bg-cover bg-center bg-[url('/workNpay.png')]"
        >
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative z-10 h-full flex items-end px-8 md:px-16 py-16">
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">WorknPay</h1>
              <button className="bg-white text-[#8b4513] font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors flex items-center gap-2">
                Book Service
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          </div>
        </section>

        {/* Service Description */}
        <section className="max-w-4xl mx-auto py-16 px-8">
          <p className="text-gray-700 text-base leading-relaxed mb-8">
            WorknPay covers the full employee lifecycle, from sourcing and screening to placement and 
            compensation guidance. We manage job listings, coordinate interviews, and handle candidate 
            shortlisting, ensuring each role is filled with the right fit. Our services also include onboarding 
            support and compliance with local or international labor regulations. Whether you're staffing up for 
            a short-term project or building a permanent team, we make sure your hiring process is efficient, 
            strategic, and aligned with your business needs.
          </p>
        </section>

        {/* Footer */}
        <Footer />
      </main>
    </>
  );
}