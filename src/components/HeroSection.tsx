import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section className="relative min-h-[90vh] flex items-center overflow-hidden">
    <img
      src={heroBg}
      alt="Professioneel schoon kantoor"
      width={1920}
      height={1080}
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="absolute inset-0 gradient-hero-overlay" />

    <div className="container relative z-10 py-20 md:py-32">
      <div className="max-w-2xl space-y-6 animate-fade-up">
        <div className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary-foreground text-sm font-medium backdrop-blur-sm border border-primary-foreground/10">
          Professionele B2B schoonmaak
        </div>
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-primary-foreground">
          Professionele schoonmaak voor bedrijven zonder zorgen
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed max-w-xl">
          Flexi+ Commercial helpt bedrijven, kantoren en commerciële ruimtes in België met betrouwbare, flexibele en kwalitatieve schoonmaakdiensten.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 pt-2">
          <Button variant="hero" size="lg" asChild className="text-base px-8 py-6">
            <Link to="/offerte">Vraag een offerte aan</Link>
          </Button>
          <Button variant="heroOutline" size="lg" asChild className="text-base px-8 py-6">
            <a href="#diensten">Bekijk diensten</a>
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
