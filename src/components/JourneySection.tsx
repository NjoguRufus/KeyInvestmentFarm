import { motion } from "framer-motion";
import { Shovel, Sprout, Sun, Package } from "lucide-react";

const steps = [
  {
    icon: Shovel,
    title: "Land Preparation",
    desc: "Soil testing, clearing, tilling, and nutrient amendment to create optimal growing conditions before any seed is planted.",
  },
  {
    icon: Sprout,
    title: "Planting",
    desc: "Seed selection, spacing, and planting methods tailored to each crop's specific requirements for maximum yield potential.",
  },
  {
    icon: Sun,
    title: "Crop Growth",
    desc: "Ongoing irrigation management, pest control, fertilisation schedules, and monitoring through vegetative and flowering stages.",
  },
  {
    icon: Package,
    title: "Harvest",
    desc: "Timing the harvest for peak maturity, post-harvest handling, grading, and preparation for distribution and market.",
  },
];

const JourneySection = () => (
  <section id="journey" className="py-24 relative">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 space-y-4"
      >
        <div className="green-line mx-auto" />
        <h2 className="section-heading">Documenting the Farming Journey</h2>
      </motion.div>

      <div className="relative max-w-4xl mx-auto">
        {/* Timeline line - same on all screen sizes */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-px bg-primary/20" />

        {steps.map((step, i) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.5 }}
            className={`relative flex flex-row items-center gap-2 md:gap-6 mb-4 md:mb-10 ${
              i % 2 === 1 ? "flex-row-reverse" : ""
            }`}
          >
            {/* Dot - same on all screen sizes */}
            <div className="absolute left-1/2 -translate-x-1/2 w-2.5 h-2.5 md:w-4 md:h-4 rounded-full bg-primary border-2 md:border-4 border-background z-10 shrink-0" />

            {/* Card - smaller on mobile, same layout */}
            <div className={`glass-card flex-1 min-w-0 px-2.5 py-2 md:px-4 md:py-3 ${i % 2 === 0 ? "mr-3 md:mr-12" : "ml-3 md:ml-12"}`}>
              <div className="flex items-center gap-2 md:gap-3 mb-1.5 md:mb-3">
                <div className="w-7 h-7 md:w-10 md:h-10 rounded-lg bg-primary/15 flex items-center justify-center shrink-0">
                  <step.icon className="w-3.5 h-3.5 md:w-5 md:h-5 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-xs md:text-lg text-foreground">{step.title}</h3>
              </div>
              <p className="text-muted-foreground text-[10px] md:text-sm leading-relaxed">{step.desc}</p>
            </div>

            {/* Spacer for other side - keeps same layout on mobile */}
            <div className="flex-1 min-w-0" />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default JourneySection;
