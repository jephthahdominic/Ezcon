import Footer from "@/app/components/Footer";
import Navbar from "../../components/Navbar";

export default function TourAfric() {
  return (
    <>
      <Navbar />
      <main className="font-sans bg-white text-[#2c1c0f]">
        {/* Hero Section */}
        <section 
          className="relative h-[70vh] bg-cover bg-center bg-[url('/tourAfric.png')]"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-orange-900/60 via-orange-800/40 to-transparent"></div>
          <div className="relative z-10 h-full flex items-end px-8 md:px-16 py-16">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-semibold text-white mb-6">TourAfric</h1>
              <a href="mailto:tourafric@ezconadvisory.com" className="bg-white text-[#8b4513] font-normal px-8 py-3 rounded-full hover:bg-gray-100 transition-colors flex items-center gap-2">
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
            From catching the sunrise in Tanzania, taking photos with dolphins, running with zebra and 
            elephants in Kenya, or visit the sands in Cairo in Egypt, exploring the ancient museums, then flying 
            to South Africa frozen at sight of wild tigers, lions and our of course our cousins monkeys to ending 
            with castles and forts built by the Europeans trading for centuries at Cape Coast in Ghana. Tourafric 
            gives you the package of flight booking, guided tour and hotel accommodation. This ensures safety 
            and value for money.
          </p>
        </section>

        {/* Tourism Cards */}
        <section className="max-w-6xl mx-auto px-8 pb-16">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden">
              <img src="/kenya.png" alt="African Safari" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden">
              <img src="/malaysia.png" alt="Coastal Tourism" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden">
              <img src="/egypt.png" alt="Historical Sites" className="w-full h-full object-cover" />
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </main>
    </>
  );
}