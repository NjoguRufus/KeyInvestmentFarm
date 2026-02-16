import { motion } from "framer-motion";
import { Wheat, Gem, TreeDeciduous } from "lucide-react";

const cards = [
  {
    icon: Wheat,
    title: "Food Production",
    desc: "Farming feeds people and supports economies worldwide. Understanding agricultural production is foundational to understanding global food systems.",
  },
  {
    icon: Gem,
    title: "Real Asset Creation",
    desc: "Crops are physical, productive assets. Unlike abstract instruments, agriculture produces tangible goods with intrinsic value through biological processes.",
  },
  {
    icon: TreeDeciduous,
    title: "Natural Growth Cycle",
    desc: "Seasonal growth and biological production create a unique lifecycle. Learning these cycles is key to understanding how agricultural value develops over time.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6 },
  }),
};

const WhyFarmingSection = () => (
  <section id="why-farming" className="py-24 relative">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 space-y-4"
      >
        <div className="green-line mx-auto" />
        <h2 className="section-heading">Why Farming Matters</h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {cards.map((card, i) => (
          <motion.div
            key={card.title}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="glass-card flex flex-col items-start gap-4"
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

export default WhyFarmingSection;
