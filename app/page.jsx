import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import WhyItMatters from "@/components/WhyItMatters";
import SustainabilitySection from "@/components/SustainabilitySection";
import Footer from "@/components/Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <HeroSection />
      <HowItWorks />
      <WhyItMatters />
      <SustainabilitySection />
      <Footer />
    </div>
  );
}
