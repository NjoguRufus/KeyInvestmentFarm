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
        {/* Timeline line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-primary/20 hidden md:block" />

        {steps.map((step, i) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.5 }}
            className={`relative flex flex-col md:flex-row items-start md:items-center gap-6 mb-10 ${
              i % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Dot */}
            <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10" />

            {/* Card */}
            <div className={`glass-card flex-1 ${i % 2 === 0 ? "md:mr-12" : "md:ml-12"}`}>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center shrink-0">
                  <step.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground">{step.title}</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
            </div>

            {/* Spacer for other side */}
            <div className="hidden md:block flex-1" />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default JourneySection;
