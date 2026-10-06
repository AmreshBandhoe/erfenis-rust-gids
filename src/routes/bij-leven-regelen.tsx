import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { ContentHero } from "@/components/ContentHero";
import { FaqSection } from "@/components/FaqSection";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { useLang } from "@/lib/i18n";
import { serviceFaqsByLang } from "@/lib/content";
import heroImg from "@/assets/bijleven-hero.jpg";

export const Route = createFileRoute("/bij-leven-regelen")({
  head: () => ({
    meta: [
      { title: "Bij leven regelen — De Erfeniswijzer" },
      {
        name: "description",
        content:
          "Leg uw documenten, financiële gegevens en wensen nu vast in een Persoonlijk Levensdossier. Compleet traject met persoonlijke begeleiding voor €599.",
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

function BijLevenRegelen() {
  const { lang, t } = useLang();
  const h = t.bijleven;

  return (
    <>
      <ContentHero
        image={heroImg}
        imageAlt="Een oudere man regelt rustig zijn zaken aan een zonnig bureau thuis"
        eyebrow={h.heroEyebrow}
        title={h.heroTitle}
        intro={h.heroIntro}
        ctaLabel={h.heroCta}
      />

      {/* Why */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-14 lg:grid-cols-2">
            <Reveal>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-accent-ink">
                {h.whyEyebrow}
              </p>
              <h2 className="text-3xl text-primary sm:text-4xl">{h.whyTitle}</h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{h.whyText}</p>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{h.whyText2}</p>
            </Reveal>
            <Reveal
              className="rounded-3xl border border-border/60 bg-secondary/50 p-8 shadow-[var(--shadow-soft)] sm:p-10"
              delay={120}
            >
              <h3 className="text-xl text-primary">{h.benefitsTitle}</h3>
              <ul className="mt-6 space-y-4">
                {h.benefits.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-foreground">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent-ink" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-secondary/50 py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-14 lg:grid-cols-2">
            <Reveal>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-accent-ink">
                {h.overviewEyebrow}
              </p>
              <h2 className="text-3xl text-primary sm:text-4xl">{h.overviewTitle}</h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{h.overviewText}</p>
            </Reveal>
            <Reveal
              className="rounded-3xl border border-border/60 bg-card p-8 shadow-[var(--shadow-soft)] sm:p-10"
              delay={120}
            >
              <h3 className="text-xl text-primary">{h.overviewListTitle}</h3>
              <ul className="mt-6 space-y-4">
                {h.overviewList.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-foreground">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent-ink" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Price */}
      <section className="on-dark bg-primary py-24 text-primary-foreground">
        <Reveal className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl leading-tight text-primary-foreground sm:text-5xl md:text-6xl">
            {h.priceTitle}
          </h2>
          <ul className="mt-10 grid gap-4 text-left sm:grid-cols-2">
            {h.priceItems.map((item) => (
              <li key={item} className="flex items-start gap-3 text-primary-foreground/90">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
          <p className="mx-auto mt-10 max-w-xl text-center text-lg leading-relaxed text-primary-foreground/90">
            {h.priceText}
          </p>
          <div className="text-center">
            <Button
              asChild
              size="lg"
              className="motion-press mt-8 rounded-full bg-accent px-8 py-6 text-base text-accent-foreground shadow-lg hover:bg-accent/90"
            >
              <Link to="/contact">
                {h.priceCta}
                <ArrowRight className="motion-icon ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
          <p className="mt-14 text-center font-display text-2xl italic text-accent">“{h.quote}”</p>
        </Reveal>
      </section>
      <FaqSection items={serviceFaqsByLang[lang].bijleven} />
    </>
  );
}
