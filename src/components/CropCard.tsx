import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import type { Crop } from "@/data/crops";
import GlassCard from "@/components/GlassCard";

interface CropCardProps {
  crop: Crop;
  index: number;
}

const CropCard = ({ crop, index }: CropCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
    className="h-full"
  >
    <Link to={`/crops/${crop.id}`} className="block h-full group">
      <GlassCard className="p-0 overflow-hidden h-full flex flex-col">
        <div className="h-44 overflow-hidden">
          <img
            src={crop.image}
            alt={crop.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </div>
        <div className="p-5 space-y-3 flex-1">
          <h3 className="font-heading font-semibold text-lg text-foreground">{crop.name}</h3>
          <div className="flex gap-3 text-xs">
            <span className="px-2 py-1 rounded-md bg-primary/15 text-primary font-medium">
              {crop.duration}
            </span>
            <span className="px-2 py-1 rounded-md bg-muted text-muted-foreground">{crop.stage}</span>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed">{crop.desc}</p>
        </div>
      </GlassCard>
    </Link>
  </motion.div>
);

export default CropCard;
