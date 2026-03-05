import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import ServicesOverview from "@/components/sections/ServicesOverview";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import IndustriesServed from "@/components/sections/IndustriesServed";
import DeploymentProcess from "@/components/sections/DeploymentProcess";
import Testimonials from "@/components/sections/Testimonials";
import RiskAssessmentCTA from "@/components/sections/RiskAssessmentCTA";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <TrustBar />
      <ServicesOverview />
      <WhyChooseUs />
      <IndustriesServed />
      <DeploymentProcess />
      <Testimonials />
      <RiskAssessmentCTA />
      <ContactSection />
      <Footer />
    </main>
  );
}
