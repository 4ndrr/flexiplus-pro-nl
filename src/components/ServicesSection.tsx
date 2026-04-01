import { Link } from "react-router-dom";
import { Building2, Store, Factory, Home, CalendarCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  { icon: Building2, title: "Kantoor schoonmaak", desc: "Dagelijkse of periodieke reiniging van kantoorruimtes, vergaderzalen en ontvangstruimtes voor een professionele werkomgeving." },
  { icon: Store, title: "Commerciële schoonmaak", desc: "Schoonmaak van winkels, showrooms en commerciële panden. Altijd een schone eerste indruk voor uw klanten." },
  { icon: Factory, title: "Industriële reiniging", desc: "Grondige reiniging van magazijnen, productiehallen en industriële ruimtes volgens de hoogste normen." },
  { icon: Home, title: "Opleveringsschoonmaak", desc: "Dieptereiniging na renovatie, verbouwing of nieuwbouw. Klaar voor gebruik of verhuur." },
  { icon: CalendarCheck, title: "Periodiek onderhoud", desc: "Structureel onderhoudsplan op maat. Wekelijks, tweewekelijks of maandelijks — u kiest." },
  { icon: Sparkles, title: "Ramen & algemene reiniging", desc: "Professionele ramenreiniging en algemene schoonmaak van gemeenschappelijke ruimtes." },
];

const ServicesSection = () => (
  <section id="diensten" className="py-20 md:py-28">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">Onze diensten</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
          Schoonmaakoplossingen voor elk bedrijf
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Van kantoren tot industriële panden — wij bieden een breed scala aan professionele schoonmaakdiensten, volledig op maat.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <div
            key={s.title}
            className="group bg-card rounded-lg p-7 shadow-card border border-border hover:shadow-premium hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
              <s.icon size={24} className="text-accent-foreground group-hover:text-primary-foreground transition-colors duration-300" />
            </div>
            <h3 className="font-display font-bold text-lg text-foreground mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">{s.desc}</p>
            <Button variant="link" className="p-0 h-auto text-primary font-semibold" asChild>
              <Link to="/offerte">Offerte aanvragen →</Link>
            </Button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
