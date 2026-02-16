import { motion } from "framer-motion";

const CtaSection = () => (
  <section id="cta" className="py-24">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-card max-w-3xl mx-auto text-center py-16 px-8 space-y-6"
      >
        <div className="green-line mx-auto" />
        <h2 className="section-heading">Start Your Agricultural Learning Journey</h2>
        <p className="section-subtext mx-auto">
          Explore how farming works, understand crop lifecycles, and learn the fundamentals of agricultural value creation.
        </p>
        <a href="#home" className="glow-btn inline-block mt-4">
          Get Started
        </a>
      </motion.div>
    </div>
  </section>
);

export default CtaSection;
