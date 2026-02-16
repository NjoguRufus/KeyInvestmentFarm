import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "article";
}

const GlassCard = ({ children, className, as: Component = "div" }: GlassCardProps) => (
  <Component className={cn("glass-card p-4 md:p-6", className)}>
    {children}
  </Component>
);

export default GlassCard;
