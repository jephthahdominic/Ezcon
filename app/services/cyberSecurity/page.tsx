import Navbar from "../../components/Navbar";

export default function CyberSecurity() {
  return (
    <>
      <Navbar />
      <main className="font-sans bg-white text-[#2c1c0f]">
        {/* Hero Section */}
        <section className="relative h-[400px] bg-gradient-to-br from-[#0a1929] via-[#1e293b] to-[#0f172a] bg-[url('/cyberSecurity.png')] overflow-hidden">          
          <div className="relative z-10 h-full flex items-center px-8 md:px-16">
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
        <footer className="bg-[#8b4513] text-white py-12 px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <div className="font-bold text-xl mb-4">Ezcon</div>
                <p className="text-sm mb-4 opacity-90">Your Global Gateway to Opportunities</p>
                <a href="#" className="text-orange-200 hover:underline text-sm">
                  More About Us →
                </a>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
                <div className="space-y-1 text-sm">
                  <p>Africa: +233 244 069784</p>
                  <p>Europe: +31 XXXXXXX</p>
                  <p>info@ezconadvisory.com</p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-4">Location</h4>
                <div className="space-y-1 text-sm">
                  <p>71 Kwame Nkrumah Avenue–Accra, Ghana</p>
                  <p>243 Koepelplein Haarlem-Netherlands</p>
                </div>
              </div>
            </div>
            
            <div className="border-t border-[#654321] pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="flex space-x-4">
                  <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.347-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm5.568 8.16c-.169 1.858-.896 3.463-2.001 4.568C14.363 13.832 12.758 14.56 10.9 14.728L10.9 18H9.1v-3.272c-1.858-.169-3.463-.896-4.568-2.001C3.428 11.637 2.7 10.032 2.532 8.174L6 8.174v1.8c.169.896.532 1.695 1.068 2.332.536.637 1.235 1.068 2.032 1.237V9.974H6V8.174h3.1V6.374c0-.896.363-1.695 1.068-2.332C10.805 3.405 11.504 2.974 12.4 2.974s1.595.431 2.232 1.068c.637.637 1.068 1.436 1.068 2.332v1.8H18.6v1.8h-3.1v3.569c.797-.169 1.496-.6 2.032-1.237.536-.637.899-1.436 1.068-2.332v-1.8L22.168 8.16z"/>
                    </svg>
                  </a>
                </div>
                
                <p className="text-sm opacity-75">
                  {new Date().getFullYear()} - Copyright All Rights Reserved
                </p>
                
                <div className="flex space-x-6 text-sm">
                  <a href="/" className="hover:underline">Home</a>
                  <a href="/about-us" className="hover:underline">About</a>
                  <a href="/services" className="hover:underline">Services</a>
                  <a href="/contact" className="hover:underline">Contact Us</a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}