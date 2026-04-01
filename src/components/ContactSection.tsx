import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

const ContactSection = () => {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">Contact</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Neem contact met ons op
          </h2>
          <p className="text-muted-foreground">Heeft u een vraag of wilt u meer informatie? Wij helpen u graag verder.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Info */}
          <div className="space-y-8">
            <div className="space-y-6">
              {[
                { icon: MapPin, label: "Adres", value: "Wommelgem, België" },
                { icon: Phone, label: "Telefoon", value: "+32 (0)3 000 00 00" },
                { icon: Mail, label: "E-mail", value: "info@flexipluscommercial.be" },
                { icon: Clock, label: "Bereikbaarheid", value: "Ma - Vr: 08:00 - 18:00" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center shrink-0">
                    <item.icon size={18} className="text-accent-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{item.label}</p>
                    <p className="text-sm text-muted-foreground">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="rounded-lg bg-muted h-52 flex items-center justify-center border border-border">
              <p className="text-sm text-muted-foreground">Kaart — Wommelgem, België</p>
            </div>
          </div>

          {/* Form */}
          <div className="bg-card rounded-xl p-8 shadow-card border border-border">
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-10">
                <CheckCircle2 size={48} className="text-primary mb-4" />
                <h3 className="font-display text-xl font-bold text-foreground mb-2">Bericht verzonden!</h3>
                <p className="text-muted-foreground text-sm">Wij nemen zo snel mogelijk contact met u op.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                className="space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-foreground">Naam</label>
                    <Input placeholder="Uw naam" required />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-foreground">E-mail</label>
                    <Input type="email" placeholder="email@bedrijf.be" required />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-foreground">Onderwerp</label>
                  <Input placeholder="Waar gaat uw vraag over?" required />
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-foreground">Bericht</label>
                  <Textarea placeholder="Uw bericht..." rows={5} required />
                </div>
                <Button variant="cta" size="lg" type="submit" className="w-full text-base py-6">
                  Bericht versturen
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
