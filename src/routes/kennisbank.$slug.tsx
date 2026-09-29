import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import { knowledgeArticles } from "@/lib/content";

export const Route = createFileRoute("/kennisbank/$slug")({
  loader: ({ params }) => {
    const article = knowledgeArticles.find((item) => item.slug === params.slug);
    if (!article) throw notFound();
    return article;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.title} — De Erfeniswijzer` },
          { name: "description", content: loaderData.excerpt },
          { property: "og:title", content: loaderData.title },
          { property: "og:description", content: loaderData.excerpt },
        ]
      : [],
  }),
  component: KnowledgeArticlePage,
});

function KnowledgeArticlePage() {
  const article = Route.useLoaderData();
  const category = article.category === "voorbereiding" ? "Voorbereiding" : "Afwikkeling";

  return (
    <>
      <header className="bg-secondary/50 py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link
            to="/kennisbank"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent-ink"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Terug naar de kennisbank
          </Link>
          <div className="mt-10 flex flex-wrap items-center gap-3 text-sm">
            <span className="rounded-full bg-primary px-4 py-1.5 font-semibold uppercase tracking-wide text-primary-foreground">
              {category}
            </span>
            <span className="inline-flex items-center gap-1.5 text-muted-foreground">
              <Clock className="h-4 w-4" aria-hidden="true" />
              {article.readingTime} lezen
            </span>
          </div>
          <h1 className="mt-6 text-4xl leading-tight text-primary sm:text-5xl md:text-6xl">
            {article.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            {article.excerpt}
          </p>
        </div>
      </header>

      <main className="bg-background py-20 sm:py-24">
        <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {article.sections.map((section, sectionIndex) => (
            <Reveal key={`${section.heading ?? "intro"}-${sectionIndex}`} className="mb-12">
              {section.heading && (
                <h2 className="mb-5 text-2xl text-primary sm:text-3xl">{section.heading}</h2>
              )}
              <div className="space-y-5">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-lg leading-8 text-foreground/80">
                    {paragraph}
                  </p>
                ))}
              </div>
            </Reveal>
          ))}
        </article>
      </main>

      <section className="on-dark bg-primary py-20 text-primary-foreground">
        <Reveal className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl text-primary-foreground sm:text-4xl">
            Wilt u weten wat dit voor uw situatie betekent?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-primary-foreground/85">
            Wij helpen u graag om de relevante documenten, vragen en vervolgstappen overzichtelijk
            in kaart te brengen.
          </p>
          <Button
            asChild
            size="lg"
            className="motion-press mt-8 rounded-full bg-accent px-8 py-6 text-accent-foreground hover:bg-accent/90"
          >
            <Link to="/contact">
              Bespreek uw situatie
              <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
            </Link>
          </Button>
        </Reveal>
      </section>
    </>
  );
}
