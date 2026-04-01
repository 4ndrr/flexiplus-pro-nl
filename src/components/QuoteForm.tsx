import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle2 } from "lucide-react";
import { z } from "zod";

const formSchema = z.object({
  bedrijfsnaam: z.string().trim().min(1, "Bedrijfsnaam is verplicht").max(100),
  contactpersoon: z.string().trim().min(1, "Naam is verplicht").max(100),
  email: z.string().trim().email("Ongeldig e-mailadres").max(255),
  telefoon: z.string().trim().min(1, "Telefoonnummer is verplicht").max(20),
  typePand: z.string().min(1, "Selecteer een type pand"),
  dienst: z.string().min(1, "Selecteer een dienst"),
  frequentie: z.string().min(1, "Selecteer een frequentie"),
  bericht: z.string().trim().max(2000).optional(),
});

type FormData = z.infer<typeof formSchema>;

const QuoteForm = () => {
  const [formData, setFormData] = useState<Partial<FormData>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const update = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = formSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="offerte" className="py-20 md:py-28 section-alt">
        <div className="container max-w-xl text-center">
          <div className="bg-card rounded-xl p-12 shadow-card border border-border">
            <CheckCircle2 size={56} className="text-primary mx-auto mb-4" />
            <h3 className="font-display text-2xl font-bold text-foreground mb-2">Bedankt voor uw aanvraag!</h3>
            <p className="text-muted-foreground">Wij nemen zo snel mogelijk contact met u op om uw offerte te bespreken.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="offerte" className="py-20 md:py-28 section-alt">
      <div className="container max-w-2xl">
        <div className="text-center mb-10">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">Offerte aanvragen</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ontvang een vrijblijvende offerte
          </h2>
          <p className="text-muted-foreground">Vul het formulier in en wij bezorgen u binnen 24 uur een offerte op maat.</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-card rounded-xl p-8 md:p-10 shadow-card border border-border space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Field label="Bedrijfsnaam" error={errors.bedrijfsnaam}>
              <Input placeholder="Uw bedrijfsnaam" onChange={(e) => update("bedrijfsnaam", e.target.value)} />
            </Field>
            <Field label="Naam contactpersoon" error={errors.contactpersoon}>
              <Input placeholder="Uw naam" onChange={(e) => update("contactpersoon", e.target.value)} />
            </Field>
            <Field label="E-mail" error={errors.email}>
              <Input type="email" placeholder="email@bedrijf.be" onChange={(e) => update("email", e.target.value)} />
            </Field>
            <Field label="Telefoon" error={errors.telefoon}>
              <Input type="tel" placeholder="+32 ..." onChange={(e) => update("telefoon", e.target.value)} />
            </Field>
            <Field label="Type pand" error={errors.typePand}>
              <Select onValueChange={(v) => update("typePand", v)}>
                <SelectTrigger><SelectValue placeholder="Selecteer" /></SelectTrigger>
                <SelectContent>
                  {["Kantoor", "Winkel", "Magazijn", "Appartement / Syndic", "Horeca", "Industrieel", "Ander"].map((o) => (
                    <SelectItem key={o} value={o}>{o}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Field>
            <Field label="Gewenste dienst" error={errors.dienst}>
              <Select onValueChange={(v) => update("dienst", v)}>
                <SelectTrigger><SelectValue placeholder="Selecteer" /></SelectTrigger>
                <SelectContent>
                  {["Kantoor schoonmaak", "Commerciële schoonmaak", "Industriële reiniging", "Opleveringsschoonmaak", "Periodiek onderhoud", "Ramen / algemene reiniging"].map((o) => (
                    <SelectItem key={o} value={o}>{o}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Field>
          </div>
          <Field label="Frequentie" error={errors.frequentie}>
            <Select onValueChange={(v) => update("frequentie", v)}>
              <SelectTrigger><SelectValue placeholder="Selecteer" /></SelectTrigger>
              <SelectContent>
                {["Dagelijks", "Wekelijks", "Tweewekelijks", "Maandelijks", "Eenmalig", "Op maat"].map((o) => (
                  <SelectItem key={o} value={o}>{o}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </Field>
          <Field label="Bericht (optioneel)" error={errors.bericht}>
            <Textarea placeholder="Vertel ons meer over uw wensen..." rows={4} onChange={(e) => update("bericht", e.target.value)} />
          </Field>
          <Button variant="cta" size="lg" type="submit" className="w-full text-base py-6">
            Offerte aanvragen
          </Button>
          <p className="text-xs text-muted-foreground text-center">Wij respecteren uw privacy. Uw gegevens worden enkel gebruikt voor deze aanvraag.</p>
        </form>
      </div>
    </section>
  );
};

const Field = ({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) => (
  <div className="space-y-1.5">
    <label className="text-sm font-medium text-foreground">{label}</label>
    {children}
    {error && <p className="text-xs text-destructive">{error}</p>}
  </div>
);

export default QuoteForm;
