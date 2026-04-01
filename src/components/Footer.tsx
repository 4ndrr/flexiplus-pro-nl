import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground">
    <div className="container py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="space-y-4">
          <h3 className="font-display font-bold text-xl">
            <span className="text-primary">Flexi+</span> Commercial
          </h3>
          <p className="text-primary-foreground/70 text-sm leading-relaxed">
            Professionele schoonmaakdiensten voor bedrijven in heel België. Betrouwbaar, flexibel en kwaliteitsgericht.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-primary-foreground/50">Snelle links</h4>
          <nav className="flex flex-col gap-2">
            {[
              { label: "Home", href: "/" },
              { label: "Diensten", href: "/diensten" },
              { label: "Over ons", href: "/over-ons" },
              { label: "Offerte aanvragen", href: "/offerte" },
              { label: "Contact", href: "/contact" },
            ].map((l) => (
              <Link key={l.href} to={l.href} className="text-sm text-primary-foreground/70 hover:text-primary transition-colors">
                {l.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Contact */}
        <div className="space-y-4">
          <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-primary-foreground/50">Contact</h4>
          <div className="space-y-3 text-sm text-primary-foreground/70">
            <div className="flex items-start gap-2"><MapPin size={16} className="mt-0.5 text-primary shrink-0" /> Wommelgem, België</div>
            <div className="flex items-start gap-2"><Phone size={16} className="mt-0.5 text-primary shrink-0" /> +32 (0)3 000 00 00</div>
            <div className="flex items-start gap-2"><Mail size={16} className="mt-0.5 text-primary shrink-0" /> info@flexipluscommercial.be</div>
          </div>
        </div>

        {/* CTA */}
        <div className="space-y-4">
          <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-primary-foreground/50">Offerte nodig?</h4>
          <p className="text-sm text-primary-foreground/70">Ontvang binnen 24 uur een vrijblijvende offerte op maat.</p>
          <Button variant="cta" asChild>
            <Link to="/offerte">Vraag een offerte aan</Link>
          </Button>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-primary-foreground/40">
        <p>© {new Date().getFullYear()} Flexi+ Commercial. Alle rechten voorbehouden.</p>
        <div className="flex gap-4">
          <Link to="/privacy" className="hover:text-primary-foreground/70 transition-colors">Privacybeleid</Link>
          <Link to="/cookies" className="hover:text-primary-foreground/70 transition-colors">Cookiebeleid</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
