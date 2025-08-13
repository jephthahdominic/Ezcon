import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Form } from "./Form";

export default function ContactUs() {
  return (
    <>
      <Navbar />
      <main className="font-sans bg-white text-[#2c1c0f]">
        {/* Hero Section */}
        <section className="relative h-[400px] bg-gradient-to-br from-[#8b4513] via-[#a0522d] to-[#8b4513] flex items-center">
          <div className="max-w-6xl mx-auto px-8 w-full">
            <div className="flex md:flex-row flex-col max-md:gap-4 justify-between md:items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">Contact Us</h1>
                <button className="bg-white text-[#8b4513] font-normal px-8 py-3 rounded-full hover:bg-gray-100 transition-colors flex items-center gap-2">
                  Get In Touch
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                  </svg>
                </button>
              </div>
              <div className="text-white text-left">
                <h3 className="text-xl font-semibold mb-2">Business Hours</h3>
                <p className="text-lg">Monday - Friday: 8:00am-5:00pm</p>
                <p className="text-lg">Saturday & Sunday - Closed</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form and Map Section */}
        <section className="max-w-6xl mx-auto py-16 px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div>
              <p className="text-gray-700 text-base mb-8">
                For general inquiries, please use the contact form below.
              </p>
              <Form />
            </div>

            {/* Map */}
            <div className="h-[400px] bg-gray-200 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.8267618239!2d-0.19684908523313!3d5.603717095063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9084b2b7a773%3A0x72f7d8b4b4b4b4b4!2sKwame%20Nkrumah%20Ave%2C%20Accra%2C%20Ghana!5e0!3m2!1sen!2sus!4v1635789012345!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ezcon Office Location"
              ></iframe>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </main>
    </>
  );
}