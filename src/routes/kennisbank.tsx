import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/kennisbank")({
  head: () => ({
    meta: [
      { title: "Kennisbank — De Erfeniswijzer" },
      {
        name: "description",
        content:
          "Heldere uitleg over nalatenschap en erfenis: testamenten, erfbelasting, executeurschap en verdeling. Begrijpelijke antwoorden op uw vragen.",
      },
      { property: "og:title", content: "Kennisbank — De Erfeniswijzer" },
      {
        property: "og:description",
        content:
          "Betrouwbare, begrijpelijke informatie over nalatenschap en erfenis op één plek.",
      },
    ],
  }),
  component: Kennisbank,
});

function Kennisbank() {
  return (
    <PageHeader
      eyebrow="Kennis & inzicht"
      title="Kennisbank"
      intro="Heldere, betrouwbare informatie over nalatenschap en erfenis. Hier vindt u straks begrijpelijke uitleg en antwoorden op de meest gestelde vragen."
    />
  );
}
