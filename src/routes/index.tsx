import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

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
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <section className="mx-auto flex max-w-3xl flex-col items-center px-4 py-28 text-center sm:px-6 lg:px-8">
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
        Uw gids bij nalatenschap en erfenis
      </p>
      <h1 className="text-4xl leading-tight text-primary sm:text-5xl md:text-6xl">
        De Erfeniswijzer
      </h1>
      <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
        De huisstijl, navigatie en lay-out staan klaar. De homepage vullen we
        samen verder in.
      </p>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <Button asChild size="lg" className="rounded-full bg-accent px-8 text-accent-foreground hover:bg-accent/90">
          <Link to="/contact">Plan een gesprek</Link>
        </Button>
        <Button asChild size="lg" variant="outline" className="rounded-full border-primary/30 px-8 text-primary hover:bg-secondary">
          <Link to="/hulp-bij-erfenis">Ontdek onze hulp</Link>
        </Button>
      </div>
    </section>
  );
}
