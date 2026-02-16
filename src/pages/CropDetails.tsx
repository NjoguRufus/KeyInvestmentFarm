import { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GlassCard from "@/components/GlassCard";
import LockedContent from "@/components/LockedContent";
import { getCropById } from "@/data/crops";
import heroBg from "@/assets/hero-bg.jpg";

const paidSectionTitles: Record<string, string> = {
  soilPreparation: "Soil Preparation",
  irrigationSystem: "Irrigation System",
  pestControl: "Pest Control",
  harvesting: "Harvesting",
};

const CropDetails = () => {
  const { cropId } = useParams<{ cropId: string }>();
  const navigate = useNavigate();
  const [unlocked, setUnlocked] = useState(false);

  const crop = cropId ? getCropById(cropId) : undefined;

  if (!crop) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center gap-4 px-4">
        <p className="font-heading text-xl text-foreground">Crop not found</p>
        <Link to="/#crops" className="glass-btn">
          Back to crops
        </Link>
      </div>
    );
  }

  const handleUnlock = () => setUnlocked(true);

  return (
    <div className="min-h-screen bg-background relative">
      <div
        className="fixed inset-0 z-0 opacity-60"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      />
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-background/50 via-background/70 to-background/90" />
      <div className="fixed inset-0 z-0 bg-gradient-to-t from-background/80 via-transparent to-background/40" />

      <div className="relative z-10">
        <Navbar />
        <main className="container mx-auto px-4 py-8 md:py-12 max-w-4xl">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="glass-btn inline-flex items-center gap-2 mb-8 text-sm py-2.5 px-4 rounded-xl"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>

          {/* Hero: image, name, duration, stage */}
          <div className="glass-card p-0 overflow-hidden mb-10">
            <div className="h-56 md:h-72 overflow-hidden">
              <img
                src={crop.image}
                alt={crop.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 md:p-8 space-y-3">
              <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                {crop.name}
              </h1>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1.5 rounded-lg bg-primary/15 text-primary font-medium text-sm">
                  {crop.duration}
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-muted text-muted-foreground text-sm">
                  {crop.stage}
                </span>
              </div>
            </div>
          </div>

          {/* Journey of the crop – image as bg, faded towards bottom */}
          <section className="mb-12 rounded-2xl overflow-hidden">
            <div
              className="relative min-h-[420px] md:min-h-[480px] flex flex-col justify-end bg-cover bg-center"
              style={{ backgroundImage: `url(${crop.image})` }}
            >
              {/* Fade overlay: image visible at top, faded to solid at bottom */}
              <div
                className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background"
                aria-hidden
              />
              <div className="relative z-10 p-6 md:p-8 pt-16 md:pt-24">
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Journey of the crop
                </h2>
                <div className="space-y-3 max-h-[280px] md:max-h-[320px] overflow-y-auto pr-2">
                  {crop.journey.map((step, i) => (
                    <GlassCard key={step.title} className="py-3 px-4">
                      <h3 className="font-heading font-semibold text-foreground text-sm md:text-base">
                        {i + 1}. {step.title}
                      </h3>
                      <p className="text-muted-foreground text-xs md:text-sm mt-1 leading-relaxed">
                        {step.description}
                      </p>
                    </GlassCard>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Free content */}
          <section className="mb-12">
            <h2 className="font-heading text-xl font-semibold text-foreground mb-4">
              Free knowledge
            </h2>
            <div className="space-y-4">
              <GlassCard>
                <h3 className="font-heading font-semibold text-foreground mb-2">Introduction</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {crop.freeContent.intro}
                </p>
              </GlassCard>
              <GlassCard>
                <h3 className="font-heading font-semibold text-foreground mb-2">Overview</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {crop.freeContent.overview}
                </p>
              </GlassCard>
            </div>
          </section>

          {/* Premium / paid content */}
          <section>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-4">
              Premium knowledge
            </h2>
            <LockedContent locked={!unlocked} onUnlock={handleUnlock} price={crop.price}>
              <div className="space-y-4">
                {(Object.keys(paidSectionTitles) as Array<keyof typeof paidSectionTitles>).map(
                  (key) => (
                    <GlassCard key={key} as="section">
                      <h3 className="font-heading font-semibold text-foreground mb-2">
                        {paidSectionTitles[key]}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {crop.paidContent[key]}
                      </p>
                    </GlassCard>
                  )
                )}
              </div>
            </LockedContent>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default CropDetails;
