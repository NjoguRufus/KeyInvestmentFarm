import { Leaf, Mail, Phone, MapPin } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "Why Farming", href: "#why-farming" },
  { label: "Our Journey", href: "#journey" },
  { label: "Crops", href: "#crops" },
  { label: "Learn", href: "#learn" },
];

const Footer = () => (
  <footer id="contact" className="glass border-t border-glass-border mt-8">
    <div className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-3 gap-10">
        {/* Brand */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center">
              <Leaf className="w-4 h-4 text-primary" />
            </div>
            <span className="font-heading font-bold text-foreground">
              KEY <span className="text-primary">INVESTMENT</span>
            </span>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
            Documenting agricultural processes and educating learners on the fundamentals of farming and crop production.
          </p>
        </div>

        {/* Nav */}
        <div>
          <h4 className="font-heading font-semibold text-foreground mb-4">Navigation</h4>
          <ul className="space-y-2">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-heading font-semibold text-foreground mb-4">Contact</h4>
          <ul className="space-y-3">
            <li className="flex items-center gap-2 text-sm text-muted-foreground">
              <Phone className="w-4 h-4 text-primary" /> +1 234 567 890
            </li>
            <li className="flex items-center gap-2 text-sm text-muted-foreground">
              <Mail className="w-4 h-4 text-primary" /> info@keyinvestment.com
            </li>
            <li className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4 text-primary" /> 123 Green Valley Road, Suite 100
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-glass-border mt-10 pt-6 text-center">
        <p className="text-xs text-muted-foreground">
          © 2026 Key Investment. All rights reserved. Agricultural education platform.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
