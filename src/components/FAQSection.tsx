import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "Voor welke bedrijven werken jullie?", a: "Wij werken voor een breed scala aan bedrijven: kantoren, winkels, magazijnen, appartementscomplexen, horecabedrijven en industriële panden. Elk type ruimte krijgt een aanpak op maat." },
  { q: "Kunnen we een vaste planning afspreken?", a: "Absoluut. Wij bieden vaste schoonmaakplanningen aan — dagelijks, wekelijks, tweewekelijks of maandelijks. U kiest wat het beste bij uw bedrijf past." },
  { q: "Werken jullie ook buiten kantooruren?", a: "Ja, wij passen ons aan uw bedrijfsuren aan. Schoonmaak 's avonds, 's nachts of in het weekend is geen probleem." },
  { q: "Hoe snel ontvangen we een offerte?", a: "Na uw aanvraag ontvangt u doorgaans binnen 24 uur een vrijblijvende offerte op maat." },
  { q: "Bieden jullie maatwerk aan?", a: "Zeker. Elk schoonmaakplan wordt volledig afgestemd op uw specifieke wensen, type pand en frequentie. Geen standaardpakketten, maar oplossingen op maat." },
];

const FAQSection = () => (
  <section className="py-20 md:py-28 section-alt">
    <div className="container max-w-3xl">
      <div className="text-center mb-14">
        <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">Veelgestelde vragen</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
          Heeft u vragen? Wij hebben antwoorden.
        </h2>
      </div>

      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((faq, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-lg border border-border px-6 shadow-card">
            <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary transition-colors py-5">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
