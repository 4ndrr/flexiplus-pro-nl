import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Mark Verboven",
    role: "Facility Manager, Antwerp Logistics BV",
    text: "Sinds we samenwerken met Flexi+ Commercial is het verschil in ons magazijn enorm. Betrouwbare planning, discreet personeel en altijd een uitstekend resultaat.",
  },
  {
    name: "Sarah De Moor",
    role: "Eigenaar, Boutique Concept Store",
    text: "Onze winkel moet er altijd perfect uitzien. Flexi+ begrijpt dat als geen ander. Flexibele uren, stipte service en oog voor detail. Absolute aanrader.",
  },
  {
    name: "Johan Claessens",
    role: "Office Manager, TechGrowth NV",
    text: "We zochten een betrouwbare schoonmaakpartner voor onze drie kantoorlocaties. Flexi+ levert consistent kwaliteit en de communicatie verloopt bijzonder vlot.",
  },
];

const TestimonialsSection = () => (
  <section className="py-20 md:py-28">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">Ervaringen</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
          Wat onze klanten zeggen
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <div key={t.name} className="bg-card rounded-xl p-7 shadow-card border border-border hover:shadow-premium transition-shadow duration-300">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="fill-primary text-primary" />
              ))}
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6 italic">"{t.text}"</p>
            <div>
              <p className="font-semibold text-sm text-foreground">{t.name}</p>
              <p className="text-xs text-muted-foreground">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
