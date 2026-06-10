import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — De Erfeniswijzer" },
      {
        name: "description",
        content:
          "Neem vrijblijvend contact op met De Erfeniswijzer voor persoonlijke begeleiding bij nalatenschap en erfenis. Wij denken graag met u mee.",
      },
      { property: "og:title", content: "Contact — De Erfeniswijzer" },
      {
        property: "og:description",
        content:
          "Plan een vrijblijvend gesprek. Wij nemen rustig de tijd voor uw vragen rond nalatenschap en erfenis.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <PageHeader
      eyebrow="Neem contact op"
      title="Contact"
      intro="Heeft u een vraag of wilt u een vrijblijvend gesprek? Wij nemen rustig de tijd voor uw situatie en denken graag met u mee. Het contactformulier en de gegevens komen hier binnenkort."
    />
  );
}
