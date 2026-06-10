import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/over-ons")({
  head: () => ({
    meta: [
      { title: "Over ons — De Erfeniswijzer" },
      {
        name: "description",
        content:
          "De Erfeniswijzer combineert juridische expertise met menselijke warmte. Een betrouwbare gids die mensen écht ontzorgt rond nalatenschap en erfenis.",
      },
      { property: "og:title", content: "Over ons — De Erfeniswijzer" },
      {
        property: "og:description",
        content:
          "Geen kille bureaucratie, maar persoonlijke aandacht en deskundige begeleiding rond een gevoelig onderwerp.",
      },
    ],
  }),
  component: OverOns,
});

function OverOns() {
  return (
    <PageHeader
      eyebrow="Wie wij zijn"
      title="Over ons"
      intro="Iedereen verdient rust en duidelijkheid rond dit gevoelige onderwerp. Wij combineren juridische expertise met menselijke warmte en persoonlijke aandacht — een betrouwbare gids die u écht ontzorgt."
    />
  );
}
