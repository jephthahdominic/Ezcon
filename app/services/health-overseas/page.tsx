import Footer from "@/app/components/Footer";
import Navbar from "../../components/Navbar";
import { LinkToMail } from "../../components/LinkToMail";

export default function HealthOverseas() {
  return (
    <>
      <Navbar />
      <main className="font-sans bg-white text-[#2c1c0f]">
        {/* Hero Section */}
        <section className="relative h-[70vh] bg-gradient-to-br from-[#4dd0e1] via-[#26c6da] to-[#00acc1] overflow-hidden bg-[url('/health-overseas.png')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative z-10 h-full flex items-end px-8 md:px-16 py-16">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-semibold text-white mb-6">Health Overseas</h1>
              <LinkToMail href="mailto:healthoverseas@ezconadvisory.com">
                Book Service
              </LinkToMail>
            </div>
          </div>
        </section>

        {/* Service Description */}
        <section className="max-w-4xl mx-auto py-16 px-8">
          <div className="space-y-6 text-gray-700 text-base leading-relaxed">
            <p>
              Our provider network (Hospital and Laboratory referrals), Payer Network (Insurance claims) and 
              allied health services (psychotherapy, physiotherapy) give you peace of mind as you pack up to 
              travel overseas. Covering both microsystem and macrosystem; from admissions, discharge and 
              insurance.
            </p>
            <p>
              We ensure regardless of locations overseas client receive equally best of health care. Because 
              accuracy of the entire health high-quality care in a timely and cost-effective manner, closing a case 
              is not our last step. We determine if goals were met, client has progressed and is satisfied and 
              progress has been documented and reported to the stakeholders.
            </p>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </main>
    </>
  );
}