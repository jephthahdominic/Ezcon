import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function AboutUs() {
  return (
    <>
      <Navbar />
      <main className="font-sans bg-white text-[#2c1c0f]">
        {/* Hero Section */}
        <section 
          className="relative h-[400px] flex items-end bg-cover bg-center bg-[url('/aboutHero.png')]"
        >
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative z-10 text-white px-8 pb-12 max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold">About Ezcon</h1>
          </div>
        </section>

        {/* Company Story Section */}
        <section className="max-w-4xl mx-auto py-16 px-8">
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p className="text-base">
              Ezcon Advisory Limited, branded as “eZcon” has undergone different phases of restructure and branding since 
              its formation in 2012. From a small beginning but progressively and by dint of hard work, the company is 
              striving in West Africa with global network in East Africa, Central Africa, Asia, South America and Europe. 
              We have never stopped innovating and changing per the dynamics of the trends and market demand. Our business clients, 
              partners are our utmost treasured.
            </p>
            <p className="text-base">
              eZcon was registered as AMOAH IDEA CONSULT in the year 2012 and rebranded as the Watch Group Company Limited in 2017, 
              activities then were corporate and individual background checks, feasibility studies, business intelligence, insurance claims and verifications.
              Insurance companies, Third-Party Administrators, healthcare institutions, Group Medical, Real Estate Companies, 
              Tertiary Institutions, legal firms and the Government  agencies were some of the business partners in the industry.
              In 2021, we rebranded as eZcon advisory Limited (eZcon) with additional improved worldwide services.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-gray-50 py-16 px-8">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="text-5xl md:text-5xl font-bold text-[#2c1c0f] mb-4">$50M+</div>
              <p className="text-[#8b4513] font-medium">Capital Growth</p>
            </div>
            <div>
              <div className="text-5xl md:text-5xl font-bold text-[#2c1c0f] mb-4">13 Yrs</div>
              <p className="text-[#8b4513] font-medium">Of Experience</p>
            </div>
            <div>
              <div className="text-5xl md:text-5xl font-bold text-[#2c1c0f] mb-4">120+</div>
              <p className="text-[#8b4513] font-medium">Startup Clients</p>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-16 px-8">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="bg-[#8b4513] text-white rounded-2xl p-12 text-center">
              <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
              <p className="text-lg">To serve humanity with knowledge.</p>
            </div>
            <div className="bg-[#2c2c2c] text-white rounded-2xl p-12 text-center">
              <h3 className="text-2xl font-bold mb-6">Our Vision</h3>
              <p className="text-lg">Generationally focused rather than simply providing answers and solutions.</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </main>
    </>
  );
}