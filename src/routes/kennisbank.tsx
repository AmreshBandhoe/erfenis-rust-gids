import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { ContentHero } from "@/components/ContentHero";
import { CtaSection } from "@/components/CtaSection";
import { cn } from "@/lib/utils";
import heroImg from "@/assets/kennisbank-hero.jpg";

export const Route = createFileRoute("/kennisbank")({
  head: () => ({
    meta: [
      { title: "Kennisbank Nalatenschap & Erfenis — De Erfeniswijzer" },
      {
        name: "description",
        content:
          "Praktische artikelen en heldere uitleg over nalatenschap en erfenis: executeurschap, erfbelasting, levenstestament, checklists en meer.",
      },
      { property: "og:title", content: "Kennisbank Nalatenschap & Erfenis — De Erfeniswijzer" },
      {
        property: "og:description",
        content:
          "Betrouwbare, begrijpelijke informatie over nalatenschap en erfenis op één plek.",
      },
      { property: "og:image", content: heroImg },
      { property: "twitter:image", content: heroImg },
    ],
  }),
  component: Kennisbank,
});

type Category = "voorbereiding" | "afwikkeling";

const articles: {
  title: string;
  excerpt: string;
  category: Category;
  readingTime: string;
}[] = [
  {
    title: "Wat doet een executeur precies?",
    excerpt:
      "De taken, verantwoordelijkheden en bevoegdheden van een executeur helder uitgelegd.",
    category: "afwikkeling",
    readingTime: "5 min",
  },
  {
    title: "Hoe werkt erfbelasting?",
    excerpt:
      "Wie betaalt hoeveel, welke vrijstellingen gelden er en hoe doet u aangifte?",
    category: "afwikkeling",
    readingTime: "6 min",
  },
  {
    title: "Levenstestament: waarom is het belangrijk?",
    excerpt:
      "Regel bij leven wie er namens u beslist als u dat zelf niet meer kunt.",
    category: "voorbereiding",
    readingTime: "4 min",
  },
  {
    title: "Nalatenschap bij een samengesteld gezin",
    excerpt:
      "Voorkom onbedoelde gevolgen en zorg dat iedereen eerlijk wordt meegenomen.",
    category: "voorbereiding",
    readingTime: "7 min",
  },
  {
    title: "Wat te doen bij overlijden: de checklist",
    excerpt:
      "Een overzichtelijk stappenplan voor de eerste dagen en weken na een overlijden.",
    category: "afwikkeling",
    readingTime: "5 min",
  },
  {
    title: "Crypto en digitale bezittingen in een erfenis",
    excerpt:
      "Hoe gaat u om met cryptovaluta, accounts en digitale bezittingen in een nalatenschap?",
    category: "voorbereiding",
    readingTime: "6 min",
  },
  {
    title: "Schenken bij leven: slim en eerlijk besparen",
    excerpt:
      "Hoe u met schenkingen erfbelasting kunt beperken, volledig binnen de regels.",
    category: "voorbereiding",
    readingTime: "5 min",
  },
  {
    title: "Een erfenis verdelen zonder ruzie",
    excerpt:
      "Praktische tips om de verdeling eerlijk en in goede harmonie te laten verlopen.",
    category: "afwikkeling",
    readingTime: "6 min",
  },
];

const filters: { label: string; value: Category | "alle" }[] = [
  { label: "Alle artikelen", value: "alle" },
  { label: "Voorbereiding", value: "voorbereiding" },
  { label: "Afwikkeling", value: "afwikkeling" },
];

const categoryLabels: Record<Category, string> = {
  voorbereiding: "Voorbereiding",
  afwikkeling: "Afwikkeling",
};

function Kennisbank() {
  const [active, setActive] = useState<Category | "alle">("alle");

  const visible =
    active === "alle"
      ? articles
      : articles.filter((a) => a.category === active);

  return (
    <>
      <ContentHero
        image={heroImg}
        imageAlt="Rustige leeshoek met boeken, een laptop en een kop thee bij het raam"
        eyebrow="Kennis & inzicht"
        title="Kennisbank Nalatenschap & Erfenis"
        intro="Praktische artikelen en heldere uitleg om zelf alvast wijzer te worden. Begrijpelijke antwoorden op de meest gestelde vragen over nalatenschap en erfenis."
        ctaLabel="Stel uw vraag in een gratis gesprek"
      />

      <section className="bg-background py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {filters.map((f) => (
              <button
                key={f.value}
                type="button"
                onClick={() => setActive(f.value)}
                className={cn(
                  "rounded-full border px-5 py-2.5 text-sm font-medium transition-colors",
                  active === f.value
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card text-foreground/80 hover:border-accent hover:text-primary",
                )}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Artikelen */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((article) => (
              <article
                key={article.title}
                className="group flex h-full flex-col rounded-3xl border border-border/60 bg-card p-7 shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]"
              >
                <div className="flex items-center gap-3 text-xs">
                  <span className="rounded-full bg-secondary px-3 py-1 font-semibold uppercase tracking-wide text-primary">
                    {categoryLabels[article.category]}
                  </span>
                  <span className="text-muted-foreground">{article.readingTime} lezen</span>
                </div>
                <h2 className="mt-5 text-xl leading-snug text-primary">
                  {article.title}
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {article.excerpt}
                </p>
                <Link
                  to="/contact"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors group-hover:text-accent"
                >
                  Lees meer
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="Liever persoonlijk advies?"
        text="Onze kennisbank helpt u op weg, maar elke situatie is anders. Stel uw vraag gerust in een gratis en vrijblijvend adviesgesprek."
      />
    </>
  );
}
