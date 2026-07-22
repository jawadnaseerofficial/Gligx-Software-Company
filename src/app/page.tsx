import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import EnterpriseProof from "@/components/EnterpriseProof";
import ServicesSection from "@/components/ServicesSection";
import WhyChoose from "@/components/WhyChoose";
import TechStack from "@/components/TechStack";
import ProcessSection from "@/components/ProcessSection";
import CaseStudies from "@/components/CaseStudies";
import AboutSection from "@/components/AboutSection";
import ProofOfDelivery from "@/components/ProofOfDelivery";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <HeroSection />
        <EnterpriseProof />
        <ServicesSection />
        <WhyChoose />
        <TechStack />
        <ProcessSection />
        <CaseStudies />
        <AboutSection />
        <ProofOfDelivery />
        <Testimonials />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
