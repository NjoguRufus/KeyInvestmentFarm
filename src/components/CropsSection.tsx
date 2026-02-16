import { motion } from "framer-motion";
import { crops } from "@/data/crops";
import CropCard from "@/components/CropCard";

const CropsSection = () => (
  <section id="crops" className="py-24 relative">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 space-y-4"
      >
        <div className="green-line mx-auto" />
        <h2 className="section-heading">Understanding Our Crops</h2>
        <p className="section-subtext mx-auto">
          Learn about the crops we grow, how they develop, and their lifecycle.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {crops.map((crop, i) => (
          <CropCard key={crop.id} crop={crop} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default CropsSection;
