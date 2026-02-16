import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Why Farming", href: "#why-farming" },
  { label: "Our Journey", href: "#journey" },
  { label: "Crops", href: "#crops" },
  { label: "Learn", href: "#learn" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="fixed top-4 left-0 right-0 mx-auto z-50 w-[95%] max-w-6xl glass px-6 py-3 flex items-center justify-between"
    >
      {/* Logo - scaled visually, layout size unchanged so navbar height stays same */}
      <a href="#home" className="flex items-center gap-2">
        <span className="w-9 h-9 flex shrink-0 flex items-center justify-center overflow-visible">
          <img
            src="/assets/keylogo.png"
            alt="Key Investment"
            className="h-9 w-9 object-contain scale-150 origin-center"
          />
        </span>
        <span className="font-heading font-bold text-lg text-foreground tracking-tight">
          KEY <span className="text-primary">INVESTMENT</span>
        </span>
      </a>

      {/* Desktop links */}
      <div className="hidden lg:flex items-center gap-8">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="font-body text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Desktop CTA */}
      <div className="hidden lg:flex items-center gap-3">
        <a href="#contact" className="glass-btn text-sm py-2 px-4 rounded-xl">
          Login
        </a>
        <a href="#cta" className="glow-btn text-sm py-2 px-5 rounded-xl">
          Get Started
        </a>
      </div>

      {/* Mobile toggle */}
      <button
        className="lg:hidden text-foreground"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle menu"
      >
        {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 mt-2 glass p-6 flex flex-col gap-4 lg:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-body text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="flex gap-3 pt-2">
              <a href="#contact" className="glass-btn text-sm py-2 px-4 rounded-xl">Login</a>
              <a href="#cta" className="glow-btn text-sm py-2 px-5 rounded-xl">Get Started</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
