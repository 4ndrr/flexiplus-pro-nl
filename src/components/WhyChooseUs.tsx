import { Clock, Users, Wrench, Award, MessageCircle, Handshake } from "lucide-react";

const benefits = [
  { icon: Clock, title: "Betrouwbare planning", desc: "Altijd op tijd, altijd volgens afspraak. U kunt op ons rekenen." },
  { icon: Users, title: "Discrete en professionele teams", desc: "Onze medewerkers werken onopvallend en respecteren uw bedrijfsomgeving." },
  { icon: Wrench, title: "Maatwerk per bedrijf", desc: "Elk schoonmaakplan wordt afgestemd op uw specifieke wensen en ruimte." },
  { icon: Award, title: "Focus op kwaliteit en hygiëne", desc: "Wij garanderen een hoog kwaliteitsniveau bij elke schoonmaakbeurt." },
  { icon: MessageCircle, title: "Snelle communicatie", desc: "Korte lijnen, snel antwoord. Bereikbaar wanneer u ons nodig heeft." },
  { icon: Handshake, title: "Flexibele samenwerking", desc: "Geen langlopende verplichtingen — wij passen ons aan uw behoeften aan." },
];

const WhyChooseUs = () => (
  <section className="py-20 md:py-28 section-alt">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">Waarom Flexi+</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
          Uw partner in professionele schoonmaak
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Wij onderscheiden ons door betrouwbaarheid, kwaliteit en een persoonlijke aanpak — altijd.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {benefits.map((b) => (
          <div key={b.title} className="flex gap-4">
            <div className="w-11 h-11 rounded-lg bg-accent flex items-center justify-center shrink-0">
              <b.icon size={20} className="text-accent-foreground" />
            </div>
            <div>
              <h3 className="font-display font-semibold text-foreground mb-1">{b.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
