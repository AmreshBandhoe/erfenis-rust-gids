import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/bij-leven-regelen")({
  head: () => ({
    meta: [
      { title: "Bij leven regelen — De Erfeniswijzer" },
      {
        name: "description",
        content:
          "Regel uw nalatenschap zorgvuldig bij leven: testamenten, levenstestamenten en planning. Zo voorkomt u stress en onzekerheid voor uw nabestaanden.",
      },
      { property: "og:title", content: "Bij leven regelen — De Erfeniswijzer" },
      {
        property: "og:description",
        content:
          "Persoonlijke begeleiding bij het voorbereiden van uw nalatenschap bij leven, met rust en duidelijkheid.",
      },
    ],
  }),
  component: BijLevenRegelen,
});

function BijLevenRegelen() {
  return (
    <PageHeader
      eyebrow="Voorbereiden bij leven"
      title="Bij leven regelen"
      intro="Uw zaken goed regelen bij leven is een daad van zorg voor wie u liefheeft. Wij helpen u met testamenten, levenstestamenten en een doordachte planning, zodat alles helder is vastgelegd."
    />
  );
}
