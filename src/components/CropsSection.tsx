import { motion } from "framer-motion";
import cropTomatoes from "@/assets/crop-tomatoes.jpg";
import cropBeans from "@/assets/crop-french-beans.jpg";
import cropAvocados from "@/assets/crop-avocados.jpg";
import cropGreenhouse from "@/assets/crop-greenhouse.jpg";

const crops = [
  {
    name: "Tomatoes",
    image: cropTomatoes,
    duration: "90 days",
    stage: "Vegetative",
    desc: "Tomatoes require controlled irrigation, nutrient management, and sunlight monitoring throughout their growth cycle.",
  },
  {
    name: "French Beans",
    image: cropBeans,
    duration: "60 days",
    stage: "Flowering",
    desc: "French beans are a fast-growing legume crop that fixes nitrogen in the soil and thrives in warm, well-drained conditions.",
  },
  {
    name: "Avocados",
    image: cropAvocados,
    duration: "12–18 months",
    stage: "Fruiting",
    desc: "Avocado trees require patience—a long maturation period—but yield high-value fruit with consistent care and climate control.",
  },
  {
    name: "Greenhouse Vegetables",
    image: cropGreenhouse,
    duration: "Continuous",
    stage: "Year-round",
    desc: "Controlled-environment agriculture enables continuous production cycles with precision water, light, and nutrient delivery.",
  },
];

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
          <motion.div
            key={crop.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="glass-card p-0 overflow-hidden group"
          >
            <div className="h-44 overflow-hidden">
              <img
                src={crop.image}
                alt={crop.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="p-5 space-y-3">
              <h3 className="font-heading font-semibold text-lg text-foreground">{crop.name}</h3>
              <div className="flex gap-3 text-xs">
                <span className="px-2 py-1 rounded-md bg-primary/15 text-primary font-medium">{crop.duration}</span>
                <span className="px-2 py-1 rounded-md bg-muted text-muted-foreground">{crop.stage}</span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">{crop.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CropsSection;
