import { Phone, FileText, Sparkles } from "lucide-react";

const steps = [
  { icon: Phone, num: "01", title: "Contact opnemen", desc: "Neem vrijblijvend contact op via telefoon, e-mail of het contactformulier op onze website." },
  { icon: FileText, num: "02", title: "Offerte op maat ontvangen", desc: "Wij stellen een gedetailleerde offerte op, afgestemd op uw specifieke situatie en wensen." },
  { icon: Sparkles, num: "03", title: "Start van de schoonmaakservice", desc: "Na akkoord starten wij direct. U geniet van een schone, professionele werkplek." },
];

const HowItWorks = () => (
  <section className="py-20 md:py-28">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">Hoe het werkt</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
          In 3 stappen naar een schone werkomgeving
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((s, i) => (
          <div key={s.num} className="relative text-center group">
            {i < steps.length - 1 && (
              <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-px border-t-2 border-dashed border-border" />
            )}
            <div className="w-20 h-20 rounded-full gradient-primary flex items-center justify-center mx-auto mb-6 shadow-premium group-hover:scale-105 transition-transform duration-300">
              <s.icon size={32} className="text-primary-foreground" />
            </div>
            <span className="text-xs font-bold text-primary uppercase tracking-widest">Stap {s.num}</span>
            <h3 className="font-display font-bold text-lg text-foreground mt-2 mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
