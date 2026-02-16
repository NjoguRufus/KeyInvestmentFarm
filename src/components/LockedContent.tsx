import { Lock } from "lucide-react";
import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface LockedContentProps {
  locked: boolean;
  onUnlock: () => void;
  price: number;
  children: ReactNode;
  className?: string;
}

const LockedContent = ({ locked, onUnlock, price, children, className }: LockedContentProps) => {
  if (!locked) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div className={cn("relative", className)}>
      <div className="relative select-none">
        <div className="blur-md opacity-60 pointer-events-none [user-select:none]">{children}</div>
        <div
          className="absolute inset-0 flex flex-col items-center justify-center gap-4 rounded-xl bg-background/80 backdrop-blur-sm border border-white/10"
          aria-hidden
        >
          <div className="w-14 h-14 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center">
            <Lock className="w-7 h-7 text-primary" />
          </div>
          <p className="font-heading font-semibold text-foreground text-center px-4">
            Premium content
          </p>
          <p className="text-muted-foreground text-sm text-center max-w-xs">
            Unlock detailed guides and best practices for this crop.
          </p>
          <button
            type="button"
            onClick={onUnlock}
            className="glow-btn text-sm py-2.5 px-5 rounded-xl"
          >
            Purchase Knowledge – KES {price.toLocaleString()}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LockedContent;
