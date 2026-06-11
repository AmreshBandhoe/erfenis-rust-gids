import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import {
  FileDown,
  CheckCircle2,
  ListChecks,
  Coins,
  ScrollText,
  HeartHandshake,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Reveal } from "@/components/Reveal";
import gidsHero from "@/assets/gids-hero.jpg";

export const Route = createFileRoute("/gratis-gids")({
  head: () => ({
    meta: [
      { title: "Gratis Erfeniswijzer Gids downloaden | De Erfeniswijzer" },
      {
        name: "description",
        content:
          "Download de gratis Erfeniswijzer Gids: een praktische checklist en heldere uitleg over de belangrijkste stappen bij nalatenschap en erfenis.",
      },
      { property: "og:title", content: "Download de gratis Erfeniswijzer Gids" },
      {
        property: "og:description",
        content:
          "Praktische checklist en uitleg over de belangrijkste stappen bij nalatenschap en erfenis. Gratis en vrijblijvend.",
      },
      { property: "og:image", content: gidsHero },
      { property: "twitter:image", content: gidsHero },
    ],
    links: [{ rel: "canonical", href: "https://erfenis-rust-gids.lovable.app/gratis-gids" }],
  }),
  component: GratisGids,
});

const gidsSchema = z.object({
  naam: z
    .string()
    .trim()
    .min(2, { message: "Vul uw naam in." })
    .max(100, { message: "Naam mag maximaal 100 tekens zijn." }),
  email: z
    .string()
    .trim()
    .email({ message: "Vul een geldig e-mailadres in." })
    .max(255, { message: "E-mailadres mag maximaal 255 tekens zijn." }),
});

type GidsValues = z.infer<typeof gidsSchema>;

const contents = [
  {
    icon: ListChecks,
    title: "Complete checklist",
    text: "Stap voor stap overzicht van alles wat u kunt regelen — niets blijft over het hoofd gezien.",
  },
  {
    icon: ScrollText,
    title: "Uitleg per document",
    text: "Heldere uitleg over testament, levenstestament en volmachten, in gewone taal.",
  },
  {
    icon: Coins,
    title: "Erfbelasting beperken",
    text: "Praktische tips om erfbelasting eerlijk en binnen de regels te verminderen.",
  },
  {
    icon: HeartHandshake,
    title: "Gesprek met de familie",
    text: "Handvatten om het gesprek over nalaten open en zonder spanning te voeren.",
  },
];

function GratisGids() {
  const navigate = useNavigate();

  const form = useForm<GidsValues>({
    resolver: zodResolver(gidsSchema),
    defaultValues: { naam: "", email: "" },
  });

  function onSubmit(_values: GidsValues) {
    toast.success("Gelukt! De gids is onderweg.", {
      description: "U ontvangt de Erfeniswijzer Gids binnen enkele minuten per e-mail.",
    });
    form.reset();
    navigate({ to: "/bedankt" });
  }

  return (
    <>
      {/* Hero met formulier */}
      <section className="relative isolate overflow-hidden">
        <img
          src={gidsHero}
          alt="De gedrukte Erfeniswijzer Gids met handgeschreven checklist, leesbril en vulpen op een warm bureau"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/45" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-24 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:py-28 lg:px-8">
          <div className="max-w-xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Gratis download
            </p>
            <h1 className="text-4xl leading-[1.08] text-primary-foreground sm:text-5xl md:text-6xl">
              Download de gratis Erfeniswijzer Gids
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-primary-foreground/90">
              Een praktische checklist plus heldere uitleg over de belangrijkste
              stappen bij nalatenschap en erfenis. Zo zet u vandaag nog rustig de
              eerste stap.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "Direct in uw mailbox — geen verplichtingen",
                "Geschreven in begrijpelijke taal",
                "Samengesteld door ervaren specialisten",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-primary-foreground/90">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[2rem] border border-border/60 bg-card p-8 shadow-[var(--shadow-elegant)] sm:p-10">
            <h2 className="text-2xl text-primary">Stuur mij de gratis gids</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Vul uw naam en e-mailadres in, dan sturen wij de gids direct toe.
            </p>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="mt-6 space-y-5">
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
                <Button
                  type="submit"
                  size="lg"
                  disabled={form.formState.isSubmitting}
                  className="w-full rounded-full bg-accent px-8 py-6 text-base text-accent-foreground shadow-lg hover:bg-accent/90"
                >
                  <FileDown className="mr-2 h-5 w-5" />
                  Download de gratis gids
                </Button>
                <p className="text-center text-xs text-muted-foreground">
                  Wij gaan zorgvuldig en vertrouwelijk om met uw gegevens.
                </p>
              </form>
            </Form>
          </div>
        </div>
      </section>

      {/* Wat staat erin? */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              Een voorproefje
            </p>
            <h2 className="text-3xl text-primary sm:text-4xl">Wat staat er in de gids?</h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Alles wat u nodig heeft om met vertrouwen te beginnen — overzichtelijk
              en zonder jargon.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {contents.map((item, i) => (
              <Reveal key={item.title} delay={i * 90}>
                <div className="flex h-full gap-5 rounded-3xl border border-border/60 bg-card p-8 shadow-[var(--shadow-soft)] transition-shadow hover:shadow-[var(--shadow-elegant)]">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                    <item.icon className="h-7 w-7" strokeWidth={1.6} />
                  </span>
                  <div>
                    <h3 className="text-xl text-primary">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
