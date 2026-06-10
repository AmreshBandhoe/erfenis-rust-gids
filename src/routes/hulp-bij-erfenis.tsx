import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/hulp-bij-erfenis")({
  head: () => ({
    meta: [
      { title: "Hulp bij erfenis — De Erfeniswijzer" },
      {
        name: "description",
        content:
          "Begeleiding bij het afwikkelen van een erfenis: executeurschap, erfbelasting en een eerlijke verdeling. Wij ontzorgen nabestaanden.",
      },
      { property: "og:title", content: "Hulp bij erfenis — De Erfeniswijzer" },
      {
        property: "og:description",
        content:
          "Persoonlijke begeleiding bij het afwikkelen van een nalatenschap, met aandacht voor mens en details.",
      },
    ],
  }),
  component: HulpBijErfenis,
});

function HulpBijErfenis() {
  return (
    <PageHeader
      eyebrow="Na overlijden"
      title="Hulp bij erfenis"
      intro="Het verliezen van een dierbare is ingrijpend. Wij staan nabestaanden en executeurs bij in de afwikkeling van de nalatenschap — van executeurschap en erfbelasting tot een zorgvuldige, eerlijke verdeling."
    />
  );
}
