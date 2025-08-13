"use client";

import Footer from "@/app/components/Footer";
import Navbar from "../../components/Navbar";
import { LinkToMail } from "../../components/LinkToMail";

export default function MarketIntelligence() {
  return (
    <>
      <Navbar />
      <main className="font-sans bg-white text-[#2c1c0f]">
        {/* Hero Section */}
        <section 
          className="relative h-[70vh] bg-cover bg-center bg-[url('/Market-Intelligence.png')]"
        >
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative z-10 h-full flex items-end px-8 md:px-16 py-16">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">Market Intelligence</h1>
              <LinkToMail href="mailto:marketintelligence@ezconadvisory.com">
                Book Service
              </LinkToMail>
            </div>
          </div>
        </section>

        {/* Service Description */}
        <section className="max-w-4xl mx-auto py-16 px-8">
          <p className="text-gray-700 text-base leading-relaxed">
            Are your customers complaining about sudden change of your services or some behaviours of your 
            employees? Do you have hunch that your employees are selling your trades information to your 
            competitors? Maybe you have noticed a drop in your profits or running at a loss, if any of the 
            aforesaid listed is applicable then we have a conversation about these services brands protection, 
            mystery shopping, competitive intelligence and market surveys. Our approach and findings are 
            reliable, accurate and relative to the prevailing market trends of goods and services, focusses on 
            qualitative and quantitative cutting across healthcare, agriculture, financial, information technology 
            and construction.
          </p>
        </section>

        {/* Footer */}
        <Footer />
      </main>
    </>
  );
}