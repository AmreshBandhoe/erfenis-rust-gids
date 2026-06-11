import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Phone, Mail, MapPin, Clock, Home, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Reveal } from "@/components/Reveal";
import contactHero from "@/assets/contact-hero.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Persoonlijk advies bij erfenis | De Erfeniswijzer" },
      {
        name: "description",
        content:
          "Neem vrijblijvend contact op met De Erfeniswijzer. Plan een gratis adviesgesprek over nalatenschap of erfenis — telefonisch of bij u thuis.",
      },
      { property: "og:title", content: "Contact — De Erfeniswijzer" },
      {
        property: "og:description",
        content:
          "Wij staan klaar om u persoonlijk te helpen. Plan vrijblijvend een adviesgesprek over nalatenschap en erfenis.",
      },
      { property: "og:image", content: contactHero },
      { property: "twitter:image", content: contactHero },
    ],
    links: [{ rel: "canonical", href: "https://erfenis-rust-gids.lovable.app/contact" }],
  }),
  component: Contact,
});

const contactSchema = z.object({
  naam: z
    .string()
    .trim()
    .min(2, { message: "Vul uw naam in." })
    .max(100, { message: "Naam mag maximaal 100 tekens zijn." }),
  telefoon: z
    .string()
    .trim()
    .min(6, { message: "Vul een geldig telefoonnummer in." })
    .max(20, { message: "Telefoonnummer mag maximaal 20 tekens zijn." })
    .regex(/^[0-9+()\s-]+$/, { message: "Gebruik alleen cijfers en + ( ) - tekens." }),
  email: z
    .string()
    .trim()
    .email({ message: "Vul een geldig e-mailadres in." })
    .max(255, { message: "E-mailadres mag maximaal 255 tekens zijn." }),
  onderwerp: z.enum(["hulp-bij-erfenis", "bij-leven-regelen", "algemeen"], {
    required_error: "Maak een keuze.",
  }),
  bericht: z
    .string()
    .trim()
    .min(10, { message: "Vertel ons kort waar wij u mee kunnen helpen." })
    .max(1500, { message: "Bericht mag maximaal 1500 tekens zijn." }),
});

type ContactValues = z.infer<typeof contactSchema>;

const contactDetails = [
  {
    icon: Phone,
    label: "Telefoon",
    value: "085 - 000 00 00",
    href: "tel:+31850000000",
  },
  {
    icon: Mail,
    label: "E-mail",
    value: "info@erfeniswijzer.nl",
    href: "mailto:info@erfeniswijzer.nl",
  },
  {
    icon: MapPin,
    label: "Werkgebied",
    value: "Heel Nederland · op afspraak bij u thuis",
  },
  {
    icon: Clock,
    label: "Bereikbaarheid",
    value: "Ma t/m vr 9.00 – 17.30 uur",
  },
];

function Contact() {
  const navigate = useNavigate();

  const form = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      naam: "",
      telefoon: "",
      email: "",
      onderwerp: "algemeen",
      bericht: "",
    },
  });

  function onSubmit(_values: ContactValues) {
    toast.success("Bedankt! Uw bericht is verzonden.", {
      description: "Wij nemen binnen één werkdag persoonlijk contact met u op.",
    });
    form.reset();
    navigate({ to: "/bedankt" });
  }

  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <img
          src={contactHero}
          alt="Warm gesprek tussen een adviseur van De Erfeniswijzer en een ouder echtpaar aan de keukentafel"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/30" />
        <div className="relative mx-auto flex min-h-[58vh] max-w-6xl flex-col justify-center px-4 py-24 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Neem contact op
            </p>
            <h1 className="text-4xl leading-[1.08] text-primary-foreground sm:text-5xl md:text-6xl">
              Neem contact met ons op
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/90">
              Wij staan klaar om u persoonlijk te helpen. Plan vrijblijvend een
              adviesgesprek — telefonisch of gewoon bij u thuis, met een kop koffie.
            </p>
          </div>
        </div>
      </section>

      {/* Contactgegevens + formulier */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            {/* Linkerkolom: gegevens */}
            <Reveal className="space-y-8">
              <div>
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                  Direct contact
                </p>
                <h2 className="text-3xl text-primary sm:text-4xl">
                  Persoonlijk en zonder verplichtingen
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                  Heeft u een vraag of wilt u kennismaken? Wij nemen rustig de
                  tijd voor uw situatie en denken graag met u mee.
                </p>
              </div>

              <ul className="space-y-5">
                {contactDetails.map((item) => (
                  <li key={item.label} className="flex items-start gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-secondary text-primary">
                      <item.icon className="h-6 w-6" strokeWidth={1.75} />
                    </span>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="break-words text-lg text-primary transition-colors hover:text-accent"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="break-words text-lg text-primary">{item.value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              <div className="flex items-start gap-4 rounded-2xl border border-accent/30 bg-accent/10 p-6">
                <Home className="mt-0.5 h-6 w-6 shrink-0 text-accent" strokeWidth={1.75} />
                <div>
                  <h3 className="text-lg text-primary">Liever een huisbezoek?</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    Wij komen graag bij u langs. In een vertrouwde omgeving praat
                    het vaak makkelijker over dit gevoelige onderwerp.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Rechterkolom: formulier */}
            <Reveal delay={120}>
              <div className="rounded-[2rem] border border-border/60 bg-card p-8 shadow-[var(--shadow-elegant)] sm:p-10">
                <h2 className="text-2xl text-primary sm:text-3xl">Stuur ons een bericht</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Vul het formulier in en wij nemen binnen één werkdag contact met u op.
                </p>

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="mt-8 space-y-6">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="naam"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Naam</FormLabel>
                            <FormControl>
                              <Input placeholder="Uw naam" autoComplete="name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="telefoon"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Telefoon</FormLabel>
                            <FormControl>
                              <Input
                                type="tel"
                                placeholder="06 - 12 34 56 78"
                                autoComplete="tel"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>E-mail</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="uw@email.nl"
                              autoComplete="email"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="onderwerp"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Waar gaat het over?</FormLabel>
                          <FormControl>
                            <RadioGroup
                              value={field.value}
                              onValueChange={field.onChange}
                              className="grid gap-3 sm:grid-cols-3"
                            >
                              {[
                                { value: "hulp-bij-erfenis", label: "Hulp bij erfenis" },
                                { value: "bij-leven-regelen", label: "Bij leven regelen" },
                                { value: "algemeen", label: "Algemeen" },
                              ].map((opt) => (
                                <label
                                  key={opt.value}
                                  htmlFor={`onderwerp-${opt.value}`}
                                  className="flex cursor-pointer items-center gap-3 rounded-xl border border-border bg-background px-4 py-3 text-sm transition-colors hover:border-accent has-[:checked]:border-accent has-[:checked]:bg-accent/10"
                                >
                                  <RadioGroupItem
                                    id={`onderwerp-${opt.value}`}
                                    value={opt.value}
                                  />
                                  <span className="text-foreground">{opt.label}</span>
                                </label>
                              ))}
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="bericht"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Bericht</FormLabel>
                          <FormControl>
                            <Textarea
                              rows={5}
                              placeholder="Vertel ons kort waar wij u mee kunnen helpen…"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      size="lg"
                      disabled={form.formState.isSubmitting}
                      className="w-full rounded-full bg-accent px-8 py-6 text-base text-accent-foreground shadow-lg hover:bg-accent/90"
                    >
                      Gratis adviesgesprek aanvragen
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                    <p className="text-center text-xs text-muted-foreground">
                      Wij gaan zorgvuldig en vertrouwelijk om met uw gegevens.
                    </p>
                  </form>
                </Form>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Kaart */}
      <section className="bg-secondary/50 pb-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="overflow-hidden rounded-[2rem] border border-border/60 shadow-[var(--shadow-soft)]">
              <div className="relative aspect-[16/7] w-full">
                <Label
                  className="absolute left-6 top-6 z-10 rounded-full bg-background/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-primary shadow-sm"
                >
                  Ons werkgebied
                </Label>
                <iframe
                  title="Kaart van het werkgebied van De Erfeniswijzer in Nederland"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=3.31%2C50.75%2C7.22%2C53.55&layer=mapnik"
                  className="h-full w-full grayscale-[0.2]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
            <p className="mt-4 text-center text-sm text-muted-foreground">
              Wij werken door heel Nederland en komen graag bij u thuis langs.{" "}
              <Link to="/bij-leven-regelen" className="font-medium text-primary underline-offset-4 hover:underline">
                Bekijk hoe wij u kunnen helpen
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
