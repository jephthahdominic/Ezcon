"use client";

import Footer from "@/app/components/Footer";
import Navbar from "../../components/Navbar";
import { LinkToMail } from "../../components/LinkToMail";

export default function IVerify() {
  return (
    <>
      <Navbar />
      <main className="font-sans bg-white text-[#2c1c0f]">
        {/* Hero Section */}
        <section 
          className="relative h-[70vh] bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] bg-[url('/i-verifyHero.png')] bg-cover bg-center overflow-hidden"
        >
          <div className="absolute inset-0 bg-black/40"></div>          
          <div className="relative z-10 h-full flex items-end px-8 md:px-16 py-16">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">i-Verify</h1>
              <LinkToMail href="mailto:iverify@ezconadvisory.com">
                Book Service
              </LinkToMail>
            </div>
          </div>
        </section>

        {/* Service Description */}
        <section className="max-w-4xl mx-auto py-16 px-8">
          <p className="text-gray-700 text-base leading-relaxed">
            i-verify covers a wide range of checks including employment history, academic qualifications, 
            personal documentation, criminal and civil records, financial solvency (including bankruptcy), and 
            even digital relationship fraud (romance scam assessments). We combine local fieldwork with 
            global data access to deliver accurate, timely, and discreet verification reports. Whether it's a 
            cross-border business partner or a potential hire, we leave no stone unturned.
          </p>
        </section>

        {/* Footer */}
        <Footer />
      </main>
    </>
  );
}