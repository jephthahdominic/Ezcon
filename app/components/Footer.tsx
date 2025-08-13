export default function Footer(){
    return(
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
                  <p>Africa: +233 244 098 784</p>
                  <p>Europe: +31 XXXXXXX</p>
                  <p>info@ezconadvisory.com</p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-4">Location</h4>
                <div className="space-y-1 text-sm">
                  <p>71 Kwame Nkrumah Avenue-Accra, Ghana</p>
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
                </div>
                
                <p className="text-sm opacity-75">
                  {new Date().getFullYear()} - Copyright All Rights Reserved
                </p>
                
                <div className="flex space-x-6 text-sm">
                  <a href="/" className="hover:underline">Home</a>
                  <a href="/about-us" className="hover:underline">About</a>
                  <a href="/services" className="hover:underline">Services</a>
                  <a href="/contact-us" className="hover:underline">Contact Us</a>
                </div>
              </div>
            </div>
          </div>
        </footer>
    )
}