import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, ClipboardCheck, FolderHeart, ArrowRight } from "lucide-react";
import { ContentHero } from "@/components/ContentHero";
import { Button } from "@/components/ui/button";
import { useT } from "@/lib/i18n";
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
  const t = useT();
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
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                {h.whyEyebrow}
              </p>
              <h2 className="text-3xl text-primary sm:text-4xl">{h.whyTitle}</h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{h.whyText}</p>
            </div>
            <div className="rounded-3xl border border-border/60 bg-secondary/50 p-8 shadow-[var(--shadow-soft)] sm:p-10">
              <h3 className="text-xl text-primary">{h.benefitsTitle}</h3>
              <ul className="mt-6 space-y-4">
                {h.benefits.map((item) => (
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

      {/* Overview */}
      <section className="bg-secondary/50 py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-14 lg:grid-cols-2">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                {h.overviewEyebrow}
              </p>
              <h2 className="text-3xl text-primary sm:text-4xl">{h.overviewTitle}</h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                {h.overviewText}
              </p>
            </div>
            <div className="rounded-3xl border border-border/60 bg-card p-8 shadow-[var(--shadow-soft)] sm:p-10">
              <h3 className="text-xl text-primary">{h.overviewListTitle}</h3>
              <ul className="mt-6 space-y-4">
                {h.overviewList.map((item) => (
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

      {/* Nalatenschapscheck */}
      <section className="bg-background py-24">
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

      {/* Levensdossier */}
      <section className="bg-secondary/50 py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-14 lg:grid-cols-2">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                {h.dossierEyebrow}
              </p>
              <h2 className="text-3xl text-primary sm:text-4xl">{h.dossierTitle}</h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                {h.dossierText1}
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                {h.dossierText2}
              </p>
            </div>
            <div className="rounded-3xl border border-border/60 bg-card p-8 shadow-[var(--shadow-soft)] sm:p-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                <FolderHeart className="h-7 w-7" strokeWidth={1.6} />
              </div>
              <ul className="mt-6 space-y-4">
                {h.dossierList.map((item) => (
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

      {/* Price */}
      <section className="bg-primary py-24 text-primary-foreground">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-4xl leading-tight text-primary-foreground sm:text-5xl md:text-6xl">
            {h.priceTitle}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/90">
            {h.priceText}
          </p>
          <Button
            asChild
            size="lg"
            className="mt-10 rounded-full bg-accent px-8 py-6 text-base text-accent-foreground shadow-lg hover:bg-accent/90"
          >
            <Link to="/contact">
              {h.priceCta}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <p className="mt-12 font-display text-2xl italic text-accent">“{h.quote}”</p>
        </div>
      </section>
    </>
  );
}

