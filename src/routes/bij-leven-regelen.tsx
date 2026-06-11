import { createFileRoute } from "@tanstack/react-router";
import {
  ScrollText,
  ShieldCheck,
  Gift,
  Home,
  Users,
  User,
  Building2,
  CheckCircle2,
} from "lucide-react";
import { ContentHero } from "@/components/ContentHero";
import { CtaSection } from "@/components/CtaSection";
import heroImg from "@/assets/bijleven-hero.jpg";

export const Route = createFileRoute("/bij-leven-regelen")({
  head: () => ({
    meta: [
      { title: "Bij leven regelen — De Erfeniswijzer" },
      {
        name: "description",
        content:
          "Regel uw nalatenschap zorgvuldig bij leven: testament, levenstestament en schenkingen. Voorkom problemen voor nabestaanden en bespaar erfbelasting.",
      },
      { property: "og:title", content: "Bij leven regelen — De Erfeniswijzer" },
      {
        property: "og:description",
        content:
          "Persoonlijke begeleiding bij het voorbereiden van uw nalatenschap bij leven, met rust en duidelijkheid.",
      },
      { property: "og:image", content: heroImg },
      { property: "twitter:image", content: heroImg },
    ],
  }),
  component: BijLevenRegelen,
});

const topics = [
  {
    icon: ScrollText,
    title: "Testament opstellen",
    text: "Leg precies vast wie wat erft. Een goed testament voorkomt onduidelijkheid en zorgt dat uw wensen écht worden uitgevoerd.",
  },
  {
    icon: ShieldCheck,
    title: "Levenstestament",
    text: "Regel wie er beslist over uw financiën en zorg als u dat zelf even niet meer kunt. Zo houdt u de regie, ook in moeilijke tijden.",
  },
  {
    icon: Gift,
    title: "Schenkingen",
    text: "Slim en eerlijk schenken bij leven kan veel erfbelasting besparen. Wij rekenen het voor u uit en begeleiden u stap voor stap.",
  },
];

const situations = [
  {
    icon: Users,
    title: "Samengesteld gezin",
    text: "Kinderen uit verschillende relaties? Wij zorgen dat iedereen eerlijk wordt meegenomen en voorkomen onbedoelde gevolgen.",
  },
  {
    icon: User,
    title: "Alleenstaand",
    text: "Zonder partner of kinderen is het extra belangrijk om zelf te bepalen wie uw nalatenschap ontvangt.",
  },
  {
    icon: Home,
    title: "Eigen woning",
    text: "Uw huis is vaak uw grootste bezit. Wij helpen u dit zorgvuldig en fiscaal verstandig over te dragen.",
  },
  {
    icon: Building2,
    title: "Eigen bedrijf",
    text: "Bedrijfsopvolging vraagt om een doordacht plan. Wij regelen een soepele en zorgeloze overdracht.",
  },
];

const benefits = [
  "Voorkom onzekerheid, ruzie en stress voor uw nabestaanden",
  "Bespaar op een eerlijke manier erfbelasting",
  "Houd zelf de regie over uw bezittingen en zorg",
  "De rust van weten dat alles goed is vastgelegd",
];

function BijLevenRegelen() {
  return (
    <>
      <ContentHero
        image={heroImg}
        imageAlt="Een oudere man regelt rustig zijn zaken aan een zonnig bureau thuis"
        eyebrow="Testament & nalatenschapsplanning"
        title="Bij leven alles goed regelen"
        intro="Uw zaken bij leven regelen is een daad van zorg voor wie u liefheeft. Wij helpen u alles helder vast te leggen, zodat uw nabestaanden later niets hoeven uit te zoeken."
        ctaLabel="Start met een persoonlijk adviesgesprek"
      />

      {/* Waarom regelen */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-14 lg:grid-cols-2">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                Waarom nu regelen?
              </p>
              <h2 className="text-3xl text-primary sm:text-4xl">
                Een geschenk van rust aan uw dierbaren
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                Door uw nalatenschap bij leven te regelen, voorkomt u dat uw
                nabestaanden later voor moeilijke keuzes en onduidelijkheden komen
                te staan. U bepaalt zelf hoe alles geregeld wordt — met rust en
                vertrouwen.
              </p>
            </div>
            <div className="rounded-3xl border border-border/60 bg-secondary/50 p-8 shadow-[var(--shadow-soft)] sm:p-10">
              <h3 className="text-xl text-primary">Wat het u oplevert</h3>
              <ul className="mt-6 space-y-4">
                {benefits.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-foreground">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Onderwerpen */}
      <section className="bg-secondary/50 py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              Belangrijke onderwerpen
            </p>
            <h2 className="text-3xl text-primary sm:text-4xl">
              Wat u kunt vastleggen
            </h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {topics.map((topic) => (
              <div
                key={topic.title}
                className="group flex flex-col rounded-3xl border border-border/60 bg-card p-8 shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                  <topic.icon className="h-7 w-7" strokeWidth={1.6} />
                </div>
                <h3 className="mt-6 text-xl leading-snug text-primary">
                  {topic.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {topic.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Situaties */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              Past bij uw situatie
            </p>
            <h2 className="text-3xl text-primary sm:text-4xl">
              Advies op maat voor elke levenssituatie
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Iedere situatie is anders. Wij denken met u mee en kijken naar wat
              voor ú het beste is.
            </p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {situations.map((s) => (
              <div
                key={s.title}
                className="rounded-3xl border border-border/60 bg-card p-7 shadow-[var(--shadow-soft)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-primary">
                  <s.icon className="h-6 w-6" strokeWidth={1.75} />
                </div>
                <h3 className="mt-4 text-lg text-primary">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {s.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="Begin vandaag met goed regelen"
        text="In een persoonlijk adviesgesprek brengen we samen in kaart wat er bij uw situatie past. Vrijblijvend en in begrijpelijke taal."
        ctaLabel="Start met een persoonlijk adviesgesprek"
      />
    </>
  );
}
