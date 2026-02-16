import { motion } from "framer-motion";
import { TrendingUp, CalendarDays, ShieldCheck } from "lucide-react";

const cards = [
  {
    icon: TrendingUp,
    title: "How Crops Generate Value",
    desc: "Understand the economics of agricultural production—from input costs and biological yield to market pricing and value chains.",
  },
  {
    icon: CalendarDays,
    title: "Seasonal Farming Cycles",
    desc: "Learn how planting seasons, weather patterns, and crop rotation strategies shape the agricultural calendar year after year.",
  },
  {
    icon: ShieldCheck,
    title: "Agricultural Risk & Sustainability",
    desc: "Explore how environmental factors, pest management, and sustainable practices affect long-term agricultural viability.",
  },
];

const LearnSection = () => (
  <section id="learn" className="py-24 relative">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 space-y-4"
      >
        <div className="green-line mx-auto" />
        <h2 className="section-heading">Learn Agricultural Investment Fundamentals</h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {cards.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.5 }}
            className="glass-card flex flex-col gap-4"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center">
              <card.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-heading font-semibold text-xl text-foreground">{card.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{card.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default LearnSection;
