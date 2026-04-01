import { ShieldCheck, CalendarClock, Zap, Star } from "lucide-react";

const items = [
  { icon: ShieldCheck, label: "Professionele service" },
  { icon: CalendarClock, label: "Flexibele planning" },
  { icon: Zap, label: "Snelle offerte" },
  { icon: Star, label: "Kwaliteitsgerichte aanpak" },
];

const TrustBar = () => (
  <section className="trust-bg border-y border-border">
    <div className="container py-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {items.map((item) => (
          <div key={item.label} className="flex items-center gap-3 justify-center">
            <item.icon size={22} className="text-primary shrink-0" />
            <span className="text-sm font-semibold text-foreground">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustBar;
