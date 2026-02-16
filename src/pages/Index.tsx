import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhyFarmingSection from "@/components/WhyFarmingSection";
import JourneySection from "@/components/JourneySection";
import CropsSection from "@/components/CropsSection";
import LearnSection from "@/components/LearnSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import heroBg from "@/assets/hero-bg.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Background image overlay */}
      <div
        className="fixed inset-0 z-0 opacity-60"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      />
      {/* Gradient overlays for depth */}
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-background/50 via-background/70 to-background/90" />
      <div className="fixed inset-0 z-0 bg-gradient-to-t from-background/80 via-transparent to-background/40" />

      <div className="relative z-10">
        <Navbar />
        <main>
          <HeroSection />
          <WhyFarmingSection />
          <JourneySection />
          <CropsSection />
          <LearnSection />
          <CtaSection />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
