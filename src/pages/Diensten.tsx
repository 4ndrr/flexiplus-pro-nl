import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesSection from "@/components/ServicesSection";
import HowItWorks from "@/components/HowItWorks";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Diensten = () => (
  <>
    <Header />
    <main className="pt-20">
      <section className="py-16 md:py-24">
        <div className="container text-center max-w-3xl">
          <h1 className="font-display text-4xl md:text-5xl font-extrabold text-foreground mb-4">
            Onze schoonmaakdiensten
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Ontdek ons volledig aanbod aan professionele schoonmaakoplossingen voor bedrijven in heel België.
          </p>
          <Button variant="cta" size="lg" asChild>
            <Link to="/offerte">Vraag een offerte aan</Link>
          </Button>
        </div>
      </section>
      <ServicesSection />
      <HowItWorks />
    </main>
    <Footer />
  </>
);

export default Diensten;
