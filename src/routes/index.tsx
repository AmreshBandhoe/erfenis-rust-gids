import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Heart,
  ShieldCheck,
  Coins,
  Users,
  Scale,
  ScrollText,
  Calculator,
  Compass,
  Phone,
  CalendarCheck,
  ClipboardList,
  HandHeart,
  CheckCircle2,
  FileDown,
  ArrowRight,
  Quote,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";

import heroImg from "@/assets/home-hero.jpg";
import whyImg from "@/assets/home-why.jpg";
import processImg from "@/assets/home-process.jpg";
import ctaImg from "@/assets/home-cta.jpg";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "De Erfeniswijzer — Uw gids bij nalatenschap en erfenis" },
      {
        name: "description",
        content:
          "Persoonlijke en deskundige begeleiding bij nalatenschap en erfenis. Van regelen bij leven tot afwikkeling na overlijden, met warmte en rust.",
      },
      { property: "og:title", content: "De Erfeniswijzer — Uw gids bij nalatenschap en erfenis" },
      {
        property: "og:description",
        content:
          "Wij maken nalatenschap geen bron van stress, maar een laatste daad van liefde en zorg voor nabestaanden.",
      },
      { property: "og:image", content: heroImg },
      { property: "twitter:image", content: heroImg },
    ],
  }),
  component: Index,
});

const reasons = [
  {
    icon: Heart,
    title: "Rust en duidelijkheid",
    text: "Helderheid voor uzelf en uw nabestaanden, zodat niemand met onzekerheid achterblijft.",
  },
  {
    icon: ShieldCheck,
    title: "Voorkom conflicten",
    text: "Goede afspraken voorkomen onnodige ruzies en spanningen binnen de familie.",
  },
  {
    icon: Coins,
    title: "Eerlijk besparen",
    text: "Bespaar erfbelasting op een verantwoorde en eerlijke manier, volledig binnen de regels.",
  },
  {
    icon: Users,
    title: "Persoonlijke experts",
    text: "Begeleiding door ervaren specialisten die echt naar uw verhaal luisteren.",
  },
];

const services = [
  {
    icon: Scale,
    title: "Hulp bij erfenis & executeurschap",
    text: "Volledige begeleiding bij het afwikkelen van een nalatenschap, van A tot Z.",
  },
  {
    icon: ScrollText,
    title: "Testament en levenstestament",
    text: "Leg uw wensen zorgvuldig vast, voor na uw overlijden én voor het geval u het zelf niet meer kunt regelen.",
  },
  {
    icon: Calculator,
    title: "Erfbelasting optimalisatie",
    text: "Slim en eerlijk plannen, zodat er zo veel mogelijk overblijft voor uw dierbaren.",
  },
  {
    icon: Compass,
    title: "Advies bij bijzondere situaties",
    text: "Samengesteld gezin, alleenstaand, eigen woning of ondernemer — wij denken met u mee.",
  },
];

const steps = [
  {
    icon: Phone,
    title: "Kennismaking",
    text: "We starten met een vrijblijvend gesprek waarin we naar uw situatie en wensen luisteren.",
  },
  {
    icon: ClipboardList,
    title: "In kaart brengen",
    text: "Samen brengen we uw nalatenschap, familie en wensen helder en volledig in beeld.",
  },
  {
    icon: Compass,
    title: "Persoonlijk plan",
    text: "U ontvangt een duidelijk advies op maat, in begrijpelijke taal en zonder verrassingen.",
  },
  {
    icon: HandHeart,
    title: "Samen regelen",
    text: "We regelen alles zorgvuldig en begeleiden u bij elke stap die nodig is.",
  },
  {
    icon: CalendarCheck,
    title: "Rust en nazorg",
    text: "Ook daarna blijven we bereikbaar, zodat u en uw nabestaanden er nooit alleen voor staan.",
  },
];

const testimonials = [
  {
    quote:
      "Eindelijk overzicht en rust. De Erfeniswijzer nam alle zorgen uit handen en legde alles in begrijpelijke taal uit.",
    name: "Margreet de Vries",
    role: "Apeldoorn",
    image: testimonial1,
  },
  {
    quote:
      "Met een samengesteld gezin was het ingewikkeld. Dankzij hun begeleiding weten we nu dat alles eerlijk en goed geregeld is.",
    name: "Hans Bakker",
    role: "Utrecht",
    image: testimonial2,
  },
  {
    quote:
      "Warme, persoonlijke aandacht op een moeilijk moment. Precies de gids die wij nodig hadden.",
    name: "Annelies Smit",
    role: "Haarlem",
    image: testimonial3,
  },
];

const stats = [
  { value: "15+", label: "jaar ervaring" },
  { value: "2.000+", label: "families begeleid" },
  { value: "9,4", label: "gemiddelde beoordeling" },
];

function Index() {
  return (
    <>
      {/* 1. Hero */}
      <section className="relative isolate overflow-hidden">
        <img
          src={heroImg}
          alt="Warm, persoonlijk gesprek tussen een adviseur en een ouder echtpaar aan een houten tafel met thee"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/30" />
        <div className="relative mx-auto flex min-h-[78vh] max-w-6xl flex-col justify-center px-4 py-24 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Uw gids bij nalatenschap en erfenis
            </p>
            <h1 className="text-5xl leading-[1.05] text-primary-foreground sm:text-6xl md:text-7xl">
              De Erfeniswijzer
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/90 sm:text-xl">
              Persoonlijke begeleiding bij het voorbereiden van uw nalatenschap
              en het afwikkelen van een erfenis. Wij nemen de zorgen uit handen,
              zodat u en uw nabestaanden met rust verder kunnen.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-accent px-8 py-6 text-base text-accent-foreground shadow-lg hover:bg-accent/90"
              >
                <Link to="/contact">Gratis adviesgesprek aanvragen</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-primary-foreground/40 bg-primary-foreground/5 px-8 py-6 text-base text-primary-foreground backdrop-blur-sm hover:bg-primary-foreground/15 hover:text-primary-foreground"
              >
                <Link to="/hulp-bij-erfenis">Meer over onze aanpak</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Waarom De Erfeniswijzer */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                Waarom De Erfeniswijzer?
              </p>
              <h2 className="text-3xl text-primary sm:text-4xl">
                Nalatenschap als laatste daad van liefde en zorg
              </h2>
              <p className="mt-5 max-w-lg text-lg leading-relaxed text-muted-foreground">
                Wij geloven dat nalaten geen bron van stress of onzekerheid hoort
                te zijn. Met warmte, deskundigheid en aandacht zorgen wij dat
                alles goed geregeld is.
              </p>
              <div className="mt-10 grid gap-5 sm:grid-cols-2">
                {reasons.map((reason) => (
                  <div
                    key={reason.title}
                    className="rounded-2xl border border-border/60 bg-card p-6 shadow-[var(--shadow-soft)] transition-shadow hover:shadow-[var(--shadow-elegant)]"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-primary">
                      <reason.icon className="h-6 w-6" strokeWidth={1.75} />
                    </div>
                    <h3 className="mt-4 text-xl text-primary">{reason.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {reason.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="overflow-hidden rounded-3xl shadow-[var(--shadow-elegant)]">
                <img
                  src={whyImg}
                  alt="Twee paar handen houden respectvol een oude familiefoto vast"
                  width={1024}
                  height={1024}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="pointer-events-none absolute -bottom-6 -left-6 hidden h-32 w-32 rounded-3xl border-4 border-accent/40 sm:block" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Onze Diensten */}
      <section className="bg-secondary/50 py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              Onze diensten
            </p>
            <h2 className="text-3xl text-primary sm:text-4xl">
              Deskundige hulp bij elke vraag
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Of u nu wilt regelen bij leven of een erfenis moet afwikkelen — wij
              staan met raad en daad naast u.
            </p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div
                key={service.title}
                className="group flex flex-col rounded-3xl border border-border/60 bg-card p-8 shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                  <service.icon className="h-7 w-7" strokeWidth={1.6} />
                </div>
                <h3 className="mt-6 text-xl leading-snug text-primary">
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {service.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Hoe wij werken */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-14 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="lg:sticky lg:top-28">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                Hoe wij werken
              </p>
              <h2 className="text-3xl text-primary sm:text-4xl">
                In vijf rustige stappen alles goed geregeld
              </h2>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-muted-foreground">
                Een helder en persoonlijk traject, waarin u nooit voor verrassingen
                komt te staan.
              </p>
              <div className="mt-8 overflow-hidden rounded-3xl shadow-[var(--shadow-elegant)]">
                <img
                  src={processImg}
                  alt="Rustige, lichte woonkamer met comfortabele fauteuils in warme tinten"
                  width={1024}
                  height={1024}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <ol className="relative space-y-8 border-l border-border pl-8">
              {steps.map((step, index) => (
                <li key={step.title} className="relative">
                  <span className="absolute -left-[3.05rem] flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground ring-8 ring-background">
                    {index + 1}
                  </span>
                  <div className="rounded-2xl border border-border/60 bg-card p-6 shadow-[var(--shadow-soft)]">
                    <div className="flex items-center gap-3">
                      <step.icon className="h-6 w-6 text-accent" strokeWidth={1.75} />
                      <h3 className="text-xl text-primary">{step.title}</h3>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {step.text}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* 5. Vertrouwen & Ervaringen */}
      <section className="bg-primary py-24 text-primary-foreground">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              Vertrouwen &amp; ervaringen
            </p>
            <h2 className="text-3xl text-primary-foreground sm:text-4xl">
              Mensen die hun zorgen aan ons toevertrouwden
            </h2>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-3xl border border-primary-foreground/15 bg-primary-foreground/5 p-8 text-center"
              >
                <p className="font-display text-5xl text-accent">{stat.value}</p>
                <p className="mt-2 text-sm uppercase tracking-wide text-primary-foreground/70">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="flex h-full flex-col rounded-3xl border border-primary-foreground/15 bg-primary-foreground/5 p-8"
              >
                <Quote className="h-8 w-8 text-accent" />
                <blockquote className="mt-4 flex-1 text-lg leading-relaxed text-primary-foreground/90">
                  “{t.quote}”
                </blockquote>
                <div className="mt-4 flex gap-1 text-accent">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <figcaption className="mt-6 flex items-center gap-4">
                  <img
                    src={t.image}
                    alt={`Portret van ${t.name}`}
                    width={768}
                    height={768}
                    loading="lazy"
                    className="h-14 w-14 rounded-full object-cover ring-2 ring-accent/40"
                  />
                  <div>
                    <p className="font-semibold text-primary-foreground">{t.name}</p>
                    <p className="text-sm text-primary-foreground/60">{t.role}</p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Gratis starten */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 rounded-[2rem] border border-border/60 bg-secondary/50 p-8 shadow-[var(--shadow-soft)] sm:p-12 lg:grid-cols-2">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                Gratis starten
              </p>
              <h2 className="text-3xl text-primary sm:text-4xl">
                Onze gratis gids &amp; checklist nalatenschap
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                Zet vandaag de eerste stap. Onze overzichtelijke gids en handige
                checklist helpen u op weg om uw nalatenschap zorgvuldig voor te
                bereiden — zonder verplichtingen.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Stap-voor-stap overzicht van wat te regelen",
                  "Praktische checklist voor uw documenten",
                  "Tips om erfbelasting eerlijk te beperken",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-foreground">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <Button
                asChild
                size="lg"
                className="mt-8 rounded-full bg-accent px-8 py-6 text-base text-accent-foreground hover:bg-accent/90"
              >
                <Link to="/gratis-gids">
                  <FileDown className="mr-2 h-5 w-5" />
                  Download de gratis gids
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-elegant)]">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                    <ClipboardList className="h-7 w-7" strokeWidth={1.6} />
                  </div>
                  <div>
                    <p className="font-display text-2xl text-primary">
                      Checklist Nalatenschap
                    </p>
                    <p className="text-sm text-muted-foreground">
                      PDF · gratis · direct beschikbaar
                    </p>
                  </div>
                </div>
                <div className="mt-6 space-y-3">
                  {[
                    "Wensen & waarden vastleggen",
                    "Testament of levenstestament",
                    "Erfgenamen & verdeling",
                    "Financiën & eigen woning",
                    "Belangrijke documenten verzamelen",
                  ].map((row) => (
                    <div
                      key={row}
                      className="flex items-center gap-3 rounded-xl bg-secondary/60 px-4 py-3"
                    >
                      <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-accent" />
                      <span className="text-sm text-foreground">{row}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Laatste CTA */}
      <section className="relative isolate overflow-hidden">
        <img
          src={ctaImg}
          alt="Oudere vrouw en kleinkind zitten ontspannen en hoopvol samen in een zonnige tuin"
          width={1920}
          height={1080}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/80 to-primary/50" />
        <div className="relative mx-auto max-w-3xl px-4 py-28 text-center sm:px-6 lg:px-8">
          <h2 className="text-4xl leading-tight text-primary-foreground sm:text-5xl">
            Laat uw nalatenschap een daad van liefde zijn
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/90">
            Plan vrijblijvend een persoonlijk adviesgesprek. Samen zorgen we voor
            rust, duidelijkheid en vertrouwen — voor u en voor uw nabestaanden.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-accent px-8 py-6 text-base text-accent-foreground shadow-lg hover:bg-accent/90"
            >
              <Link to="/contact">
                Gratis adviesgesprek aanvragen
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-primary-foreground/40 bg-primary-foreground/5 px-8 py-6 text-base text-primary-foreground backdrop-blur-sm hover:bg-primary-foreground/15 hover:text-primary-foreground"
            >
              <Link to="/over-ons">Maak kennis met ons team</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
