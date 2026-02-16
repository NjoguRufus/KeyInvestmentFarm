import { motion } from "framer-motion";
import { Sprout, FileText, Tractor } from "lucide-react";
import heroFarm from "@/assets/hero-farm.jpg";

const stats = [
  { icon: Sprout, value: "12+", label: "Active Crop Projects" },
  { icon: FileText, value: "Seed to Harvest", label: "Documentation" },
  { icon: Tractor, value: "Real", label: "Agricultural Operations" },
];

const HeroSection = () => (
  <section id="home" className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden">
    <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
      {/* Left */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-6"
      >
        <div className="green-line" />
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
          Understand the Power of{" "}
          <span className="text-gradient">Farming</span>
        </h1>
        <p className="section-subtext">
          Key Investment documents real agricultural processes to educate investors and learners on how farming works, why crops matter, and how agricultural value is created from seed to harvest.
        </p>
        <div className="flex flex-wrap gap-4 pt-2">
          <a href="#journey" className="glow-btn">Explore the Journey</a>
          <a href="#learn" className="glass-btn">Learn About Farming</a>
        </div>
      </motion.div>

      {/* Right */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="glass-card overflow-hidden p-0">
          <img
            src={heroFarm}
            alt="Aerial view of a lush agricultural field at sunrise"
            className="w-full h-64 md:h-80 object-cover rounded-t-2xl"
            loading="eager"
          />
          <div className="grid grid-cols-3 divide-x divide-glass-border p-4">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col items-center gap-1 px-2 text-center">
                <s.icon className="w-5 h-5 text-primary mb-1" />
                <span className="font-heading font-bold text-foreground text-sm md:text-base">{s.value}</span>
                <span className="text-muted-foreground text-xs">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
