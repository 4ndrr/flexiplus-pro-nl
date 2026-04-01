import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhyChooseUs from "@/components/WhyChooseUs";
import TestimonialsSection from "@/components/TestimonialsSection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Target, Eye, Users } from "lucide-react";

const values = [
  { icon: Target, title: "Missie", desc: "Elk bedrijf verdient een schone, hygiënische en professionele werkplek. Wij maken dat mogelijk — betrouwbaar, flexibel en op maat." },
  { icon: Eye, title: "Visie", desc: "Dé schoonmaakpartner zijn waar Belgische bedrijven blind op vertrouwen. Door kwaliteit, consistentie en een persoonlijke aanpak." },
  { icon: Users, title: "Team", desc: "Ons team bestaat uit ervaren, discrete en goed opgeleide schoonmaakprofessionals die trots zijn op hun werk." },
];

const OverOns = () => (
  <>
    <Header />
    <main className="pt-20">
      <section className="py-16 md:py-24">
        <div className="container max-w-4xl">
          <div className="text-center mb-14">
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">Over ons</p>
            <h1 className="font-display text-4xl md:text-5xl font-extrabold text-foreground mb-6">
              Flexi+ Commercial
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Gevestigd in Wommelgem, helpen wij bedrijven in heel België met professionele schoonmaakdiensten. 
              Onze aanpak is persoonlijk, betrouwbaar en altijd gericht op kwaliteit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {values.map((v) => (
              <div key={v.title} className="text-center">
                <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mx-auto mb-4 shadow-premium">
                  <v.icon size={26} className="text-primary-foreground" />
                </div>
                <h3 className="font-display font-bold text-lg text-foreground mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button variant="cta" size="lg" asChild>
              <Link to="/offerte">Werk met ons samen</Link>
            </Button>
          </div>
        </div>
      </section>
      <WhyChooseUs />
      <TestimonialsSection />
    </main>
    <Footer />
  </>
);

export default OverOns;
