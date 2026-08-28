import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Users,
  Scale,
  ScrollText,
  Calculator,
  HeartHandshake,
  LifeBuoy,
  ClipboardList,
  ClipboardCheck,
  CheckCircle2,
  FolderSearch,
  Landmark,
  Building2,
  House,
  CalendarClock,
  MonitorSmartphone,
  MessagesSquare,
  FileDown,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useT } from "@/lib/i18n";

import heroImg from "@/assets/home-hero.jpg";
import whyImg from "@/assets/home-why.jpg";
import helpImg from "@/assets/home-help.jpg";
import prepareImg from "@/assets/home-prepare.jpg";
import ctaImg from "@/assets/home-cta.jpg";
import logoIcr from "@/assets/logo-icr.png";
import logoAdr from "@/assets/logo-adr.png";
import logoIca from "@/assets/logo-ica.png";

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

const questionIcons = [
  FolderSearch,
  Landmark,
  Building2,
  House,
  Users,
  CalendarClock,
  MonitorSmartphone,
  MessagesSquare,
];
const serviceIcons = [HeartHandshake, LifeBuoy, ScrollText, Calculator, Scale];
const certLogos = [logoIcr, logoIca, logoAdr];

function Index() {
  const t = useT();
  const h = t.home;

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
              {h.heroEyebrow}
            </p>
            <h1 className="text-5xl leading-[1.05] text-primary-foreground sm:text-6xl md:text-7xl">
              {h.heroTitle}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/90 sm:text-xl">
              {h.heroIntro}
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-accent px-8 py-6 text-base text-accent-foreground shadow-lg hover:bg-accent/90"
              >
                <Link to="/bij-leven-regelen">{h.heroCta}</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-primary-foreground/40 bg-primary-foreground/5 px-8 py-6 text-base text-primary-foreground backdrop-blur-sm hover:bg-primary-foreground/15 hover:text-primary-foreground"
              >
                <Link to="/hulp-bij-erfenis">{h.heroSecondary}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Vragen na een overlijden */}
      <section className="bg-secondary/50 py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              {h.questionsEyebrow}
            </p>
            <h2 className="text-3xl text-primary sm:text-4xl">{h.questionsTitle}</h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{h.questionsIntro}</p>
          </div>

          <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {h.questions.map((question, i) => {
              const Icon = questionIcons[i];
              return (
                <li
                  key={question}
                  className="group rounded-2xl border border-border/60 bg-card p-6 shadow-[var(--shadow-soft)] transition-shadow hover:shadow-[var(--shadow-elegant)]"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                    <Icon className="h-7 w-7" strokeWidth={1.6} aria-hidden="true" />
                  </div>
                  <p className="mt-6 text-base leading-relaxed text-foreground/85">{question}</p>
                </li>
              );
            })}
          </ul>

          <div className="mx-auto mt-14 max-w-2xl text-center">
            <p className="text-lg leading-relaxed text-muted-foreground">
              {h.questionsOutro} {h.questionsClosing}
            </p>
          </div>
        </div>
      </section>

      {/* 3. Hulp na overlijden */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-2">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                {h.helpEyebrow}
              </p>
              <h2 className="text-3xl text-primary sm:text-4xl">{h.helpTitle}</h2>
              <p className="mt-5 max-w-lg text-lg leading-relaxed text-muted-foreground">
                {h.helpIntro}
              </p>
              <p className="mt-4 max-w-lg text-lg leading-relaxed text-muted-foreground">
                {h.helpNetwork}
              </p>
              <div className="mt-10 overflow-hidden rounded-3xl shadow-[var(--shadow-elegant)]">
                <img
                  src={helpImg}
                  alt="Handen sorteren oude brieven en documenten aan een houten tafel, naast een kop thee en een notitieboek"
                  width={1200}
                  height={900}
                  loading="lazy"
                  className="aspect-[4/3] h-full w-full object-cover"
                />
              </div>
              <div className="mt-8">
                <Link
                  to="/hulp-bij-erfenis"
                  className="group inline-flex items-center gap-1.5 text-base font-semibold text-accent"
                >
                  {h.helpCta}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            <div className="flex flex-col rounded-3xl border border-border/60 bg-card p-8 shadow-[var(--shadow-soft)] sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                {h.helpListTitle}
              </p>
              <ul className="mt-8 flex flex-1 flex-col justify-between gap-5">
                {h.helpItems.map((item) => (
                  <li key={item} className="flex items-start gap-3.5">
                    <CheckCircle2
                      className="mt-0.5 h-5 w-5 shrink-0 text-accent"
                      strokeWidth={1.75}
                      aria-hidden="true"
                    />
                    <span className="text-base leading-relaxed text-foreground/85">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Vooraf goed regelen */}
      <section className="bg-secondary/50 py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-2">
            <div className="overflow-hidden rounded-3xl shadow-[var(--shadow-elegant)] lg:order-2">
              <img
                src={prepareImg}
                alt="Iemand legt aan een bureau bij daglicht persoonlijke documenten en wensen vast"
                width={1200}
                height={900}
                loading="lazy"
                className="aspect-[4/3] h-full w-full object-cover lg:aspect-auto"
              />
            </div>

            <div className="flex flex-col justify-center lg:order-1">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                {h.prepEyebrow}
              </p>
              <h2 className="text-3xl text-primary sm:text-4xl">{h.prepTitle}</h2>
              <p className="mt-5 max-w-lg text-lg leading-relaxed text-muted-foreground">
                {h.prepIntro}
              </p>
              <ul className="mt-8 space-y-4">
                {h.prepItems.map((item) => (
                  <li key={item} className="flex items-start gap-3.5">
                    <CheckCircle2
                      className="mt-0.5 h-5 w-5 shrink-0 text-accent"
                      strokeWidth={1.75}
                      aria-hidden="true"
                    />
                    <span className="text-base leading-relaxed text-foreground/85">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link
                  to="/bij-leven-regelen"
                  className="group inline-flex items-center gap-1.5 text-base font-semibold text-accent"
                >
                  {h.prepCta}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Services */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              {h.servicesEyebrow}
            </p>
            <h2 className="text-3xl text-primary sm:text-4xl">{h.servicesTitle}</h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{h.servicesIntro}</p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{h.servicesIntro2}</p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {h.services.map((service, i) => {
              const Icon = serviceIcons[i];
              return (
                <Link
                  key={service.title}
                  to={service.to}
                  className="group flex flex-col rounded-3xl border border-border/60 bg-card p-8 shadow-[var(--shadow-soft)] lg:p-6 xl:p-8 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                    <Icon className="h-7 w-7" strokeWidth={1.6} />
                  </div>
                  <h3 className="mt-6 text-xl leading-snug text-primary">{service.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {service.text}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                    Meer informatie
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Why */}
      <section className="bg-secondary/50 py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div className="lg:order-2">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                {h.whyEyebrow}
              </p>
              <h2 className="text-3xl text-primary sm:text-4xl">{h.whyTitle}</h2>
              <p className="mt-5 max-w-lg text-lg leading-relaxed text-muted-foreground">
                {h.whyIntro}
              </p>
              <ul className="mt-10 grid gap-x-8 gap-y-6 sm:grid-cols-2">
                {h.reasons.map((reason) => (
                  <li key={reason.title} className="flex items-start gap-3.5">
                    <CheckCircle2
                      className="mt-1 h-5 w-5 shrink-0 text-accent"
                      strokeWidth={1.75}
                      aria-hidden="true"
                    />
                    <div>
                      <h3 className="text-lg text-primary">{reason.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {reason.text}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative lg:order-1">
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
              <div className="pointer-events-none absolute -bottom-6 -right-6 hidden h-32 w-32 rounded-3xl border-4 border-accent/40 sm:block" />
            </div>
          </div>
        </div>
      </section>

      {/* 7. Certifications */}
      <section className="bg-primary py-14 text-primary-foreground">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl text-primary-foreground sm:text-4xl">{h.certTitle}</h2>
          </div>

          <ul className="mt-12 flex flex-wrap items-center justify-center gap-12 sm:gap-16">
            {h.certifications.map((cert, i) => (
              <li key={cert.caption} className="flex flex-col items-center gap-4 text-center">
                <img
                  src={certLogos[i]}
                  alt={cert.caption}
                  loading="lazy"
                  className="h-24 w-auto object-contain"
                />
                <p className="max-w-[15rem] text-xs font-medium leading-relaxed text-primary-foreground/70">
                  {cert.caption}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 8. Nalatenschapscheck */}
      <section className="bg-background pt-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] border border-border/60 bg-secondary/50 p-8 text-center shadow-[var(--shadow-soft)] sm:p-12">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
              <ClipboardCheck className="h-7 w-7" strokeWidth={1.6} />
            </div>
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              {h.checkEyebrow}
            </p>
            <h2 className="mt-3 text-3xl text-primary sm:text-4xl">{h.checkTitle}</h2>
            <p className="mt-3 font-display text-2xl text-primary">{h.checkSubtitle}</p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{h.checkText}</p>
            <Button
              asChild
              size="lg"
              className="mt-8 rounded-full bg-accent px-8 py-6 text-base text-accent-foreground hover:bg-accent/90"
            >
              <Link to="/nalatenschapscheck">
                {h.checkCta}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 9. Free guide */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 rounded-[2rem] border border-border/60 bg-secondary/50 p-8 shadow-[var(--shadow-soft)] sm:p-12 lg:grid-cols-2">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                {h.guideEyebrow}
              </p>
              <h2 className="text-3xl text-primary sm:text-4xl">{h.guideTitle}</h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{h.guideIntro}</p>
              <ul className="mt-6 space-y-3">
                {h.guideChecklist.map((item) => (
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
                  {h.guideCta}
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
                    <p className="font-display text-2xl text-primary">{h.guideCardTitle}</p>
                    <p className="text-sm text-muted-foreground">{h.guideCardSub}</p>
                  </div>
                </div>
                <div className="mt-6 space-y-3">
                  {h.guideCardItems.map((row) => (
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

      {/* 10. Final CTA */}
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
            {h.finalCtaTitle}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/90">
            {h.finalCtaText}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-accent px-8 py-6 text-base text-accent-foreground shadow-lg hover:bg-accent/90"
            >
              <Link to="/contact">
                {h.finalCtaPrimary}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-primary-foreground/40 bg-primary-foreground/5 px-8 py-6 text-base text-primary-foreground backdrop-blur-sm hover:bg-primary-foreground/15 hover:text-primary-foreground"
            >
              <Link to="/over-ons">{h.finalCtaSecondary}</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
