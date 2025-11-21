"use client";

import { useEffect, useState } from "react";
import Footer from "@/app/components/Footer";
import Navbar from "../../components/Navbar";
import { LinkToMail } from "../../components/LinkToMail";

export default function LeadershipDevelopment() {

  const stats = [
    { value: 35, suffix: "+", label: "Years of Experience" },
    { value: 3, suffix: "", label: "Masterclass Programs" },
    { value: 5, suffix: "", label: "Days Per Program" },
    { value: 100, suffix: "%", label: "Practical Focus" },
  ];

  const programs = [
    {
      number: "01",
      title: "Delivering Results with Modern Project Execution",
      subtitle: "A 5-day practical masterclass in Agile project management",
      description:
        "Participants learn how to deliver successful projects using Agile methods, Scrum, sprint planning, prioritization, stakeholder engagement and modern collaboration techniques that increase speed, quality and accountability.",
    },
    {
      number: "02",
      title: "Leading for Strategic Success",
      subtitle: "A 5-day leadership masterclass on developing and executing winning leadership strategies",
      description:
        "This program focuses on the real capabilities leaders need to align teams, drive performance, communicate direction and lead people through change. Participants learn strategic leadership models, team effectiveness, decision-making, coaching and motivation.",
    },
    {
      number: "03",
      title: "Building a Winning Business Strategy",
      subtitle: "A 5-day strategy masterclass focused on designing and delivering real business strategies",
      description:
        "Participants learn the full end-to-end process of building a business strategy, including market analysis, customer insights, opportunity identification, competitive positioning, strategic priorities, execution planning and resource alignment.",
    },
  ];

  const coreOutcomes = [
    "Understand major business and economic trends",
    "Make stronger strategic and operational decisions",
    "Lead high-performing individuals and teams",
    "Navigate change and organizational complexity",
    "Translate strategy into practical action",
    "Identify and act on growth opportunities",
  ];

  const methodology = [
    "Focused expert input with real industry examples",
    "Small-group case work",
    "Interactive discussions",
    "Tools and templates managers can apply immediately",
    "Real cases from Béla's career (Cisco, SMEs, startups, universities)",
  ];

  const organizationalBenefits = [
    "Better, more confident decision-makers",
    "Clearer project and strategic planning",
    "Leaders who can manage change and complexity",
    "Increased project success rates",
    "Stronger alignment between strategy, leadership and execution",
  ];

  const personalBenefits = [
    "Practical frameworks for leadership, strategy or project delivery",
    "Enhanced ability to coach and develop teams",
    "Stronger confidence in decision-making",
    "Better communication and alignment skills",
    "Tools for identifying and delivering real business results",
  ];

  const [animatedStats, setAnimatedStats] = useState(stats.map(() => 0));

  useEffect(() => {
    const duration = 1200; // total animation time in ms
    const frameDuration = 1000 / 60; // ~60fps
    const totalFrames = Math.round(duration / frameDuration);

    const timers = stats.map((stat, index) => {
      let frame = 0;
      const counter = setInterval(() => {
        frame += 1;
        const progress = frame / totalFrames;
        const easeOutQuad = 1 - (1 - progress) * (1 - progress);
        const current = Math.round(stat.value * easeOutQuad);

        setAnimatedStats((prev) => {
          const next = [...prev];
          next[index] = current;
          return next;
        });

        if (frame === totalFrames) {
          clearInterval(counter);
        }
      }, frameDuration);

      return counter;
    });

    return () => {
      timers.forEach((timer) => clearInterval(timer));
    };
  }, []);

  return (
    <>
      <Navbar />
      <main className="font-sans bg-white text-[#2c1c0f]">
        {/* Hero Section */}
        <section className="bg-white">
          <div className="mx-auto px-6 md:px-10 py-14 md:py-20">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              {/* Left: Text */}
              <div className="space-y-5 animate-fade-in">
                <span className="inline-block text-xs md:text-sm font-semibold tracking-wide text-orange-700 bg-orange-50 px-3 py-1 rounded-full">
                  Leadership Development
                </span>

                <div className="space-y-3">
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                    Fuel your growth with bold leadership.
                  </h1>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    Unlock stronger performance with practical 5-day masterclasses in strategy, project execution
                    and leading high-performing teams.
                  </p>
                </div>

                <p className="text-xs md:text-sm italic text-gray-500">
                  “A leader is one who knows the way, goes the way, and shows the way” — John C. Maxwell
                </p>

                <div className="flex flex-wrap gap-4">
                  <LinkToMail href="mailto:leadership@ezconadvisory.com">
                    Book a Masterclass
                  </LinkToMail>
                  {/* <a
                    href="#programs"
                    className="px-4 py-2 rounded-full border border-gray-300 text-xs md:text-sm text-gray-800 hover:bg-gray-50 transition"
                  >
                    View program details
                  </a> */}
                </div>
              </div>

              {/* Right: Visual Card */}
              <div className="relative hidden md:block">
                <div className="relative bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden transition-transform duration-300 ease-out hover:-translate-y-2 hover:scale-[1.03] hover:rotate-1 hover:shadow-2xl hover:border-orange-200">
                  <div className="h-64 bg-[url('/leadersdev.jpg')] bg-cover bg-center" />
                  <div className="p-4 border-t border-gray-100 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold text-gray-800">5-Day Leadership Masterclass</p>
                      <p className="text-[11px] text-gray-500">Strategy, Execution & Team Performance</p>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-orange-50 text-[11px] font-semibold text-orange-700">
                      Next cohort
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-white py-12 px-6 md:px-8">
          <div className="mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center border border-gray-200 rounded-xl py-6 px-4 bg-gray-50"
              >
                <div className="text-2xl font-bold text-orange-700">
                  {animatedStats[index]}
                  {stat.suffix}
                </div>
                <p className="mt-1 text-xs md:text-sm text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Service Description */}
        <section id="programs" className="w-full mx-auto py-2 space-y-2">
          <header className="space-y-4 py-12 px-6 md:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Leadership Development Masterclasses
            </h2>
            <p className="text-base text-gray-700 leading-relaxed">
              Our leadership development offering brings together three intensive 5-day programs focused on modern project execution,
              strategic leadership, and building a winning business strategy.
            </p>
          </header>

          {/* Programs */}
          <div className="space-y-8 p-6 md:p-12 px-6 md:px-8">
            {programs.map((program) => (
              <div key={program.number} className="space-y-2">
                <h3 className="text-lg font-semibold text-gray-900">
                  {program.number}. {program.title}
                </h3>
                <p className="text-sm md:text-base text-orange-800 font-medium">
                  {program.subtitle}
                </p>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  {program.description}
                </p>
              </div>
            ))}
          </div>

          {/* Outcomes & Methodology */}
          <div className="grid md:grid-cols-2 gap-12 p-6 md:p-12 px-6 md:px-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                Core Outcomes (Across All Programs)
              </h3>
              <p className="mt-2 text-sm md:text-base text-gray-700">
                Participants will gain the ability to:
              </p>
              <ul className="mt-4 space-y-2 text-sm md:text-base text-gray-700 list-disc list-inside">
                {coreOutcomes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                Training Methodology
              </h3>
              <p className="mt-2 text-sm md:text-base text-gray-700 leading-relaxed">
                This is not academic theory. The approach is practical, hands-on and case-driven, based on more than 35 years of global leadership,
                project delivery and strategy experience.
              </p>
              <ul className="mt-4 space-y-2 text-sm md:text-base text-gray-700 list-disc list-inside">
                {methodology.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Benefits */}
          <div className="grid md:grid-cols-2 gap-12 p-6 md:p-12 px-6 md:px-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                Organizational Benefits
              </h3>
              <p className="mt-2 text-sm md:text-base text-gray-700 leading-relaxed">
                By sending delegates to any of these masterclasses, your organization gains:
              </p>
              <ul className="mt-4 space-y-2 text-sm md:text-base text-gray-700 list-disc list-inside">
                {organizationalBenefits.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                Personal Benefits for Participants
              </h3>
              <p className="mt-2 text-sm md:text-base text-gray-700 leading-relaxed">
                Participants gain:
              </p>
              <ul className="mt-4 space-y-2 text-sm md:text-base text-gray-700 list-disc list-inside">
                {personalBenefits.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* About the Instructor */}
          <div className="flex flex-col-reverse sm:flex-row-reverse gap-10 items-center mt-16 bg-[#eee] p-12 py-24">
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-gray-900">
                About the Instructor - Bela Sandor
              </h3>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                Bela Sandor is a project management and digital strategy expert with over 40 years of experience. He has led large
                project organizations, directed global teams at Cisco Systems, and supported transformation initiatives across Europe,
                Africa and the United States.
              </p>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                He teaches project management, Scrum, leadership and digital transformation at SRH Haarlem University of Applied Sciences
                in the Netherlands and delivers executive training programs through StartMonday.AI.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="w-40 h-40 md:w-48 md:h-48 rounded-3xl bg-gray-100 shadow-md border border-gray-200 overflow-hidden flex items-center justify-center">
                <span className="text-xs text-gray-500">Instructor photo</span>
              </div>
            </div>
          </div>

          <section className="px-6 md:px-10 py-12">
            <div className="max-w-4xl mx-auto rounded-3xl bg-white border border-gray-200 shadow-lg px-8 py-10 text-center space-y-4">
              <p className="text-xs md:text-sm font-semibold tracking-wide text-orange-700 uppercase">
                Leadership Masterclass
              </p>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                Develop leaders who turn strategy into real results.
              </h3>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed max-w-2xl mx-auto">
                Invite your managers and executives to a focused 5-day leadership development experience. Practical, case-driven
                and tailored to real business challenges.
              </p>
              <div className="flex justify-center pt-2">
                <LinkToMail href="mailto:leadership@ezconadvisory.com">
                  Book a Leadership Masterclass
                </LinkToMail>
              </div>
            </div>
          </section>
        </section>

        {/* Footer */}
        <Footer />
      </main>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out both;
        }
      `}</style>
    </>
  );
}


