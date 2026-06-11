import { createFileRoute } from "@tanstack/react-router";
import { Heart, GraduationCap, Compass } from "lucide-react";
import { ContentHero } from "@/components/ContentHero";
import { CtaSection } from "@/components/CtaSection";
import heroImg from "@/assets/team-hero.jpg";
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";

export const Route = createFileRoute("/over-ons")({
  head: () => ({
    meta: [
      { title: "Over ons — De Erfeniswijzer" },
      {
        name: "description",
        content:
          "De Erfeniswijzer combineert juridische expertise met menselijke warmte. Maak kennis met ons team en onze waarden: persoonlijke aandacht, deskundigheid en rust.",
      },
      { property: "og:title", content: "Over ons — De Erfeniswijzer" },
      {
        property: "og:description",
        content:
          "Geen kille bureaucratie, maar persoonlijke aandacht en deskundige begeleiding rond een gevoelig onderwerp.",
      },
      { property: "og:image", content: heroImg },
      { property: "twitter:image", content: heroImg },
    ],
  }),
  component: OverOns,
});

const team = [
  {
    name: "Marieke van Dongen",
    role: "Oprichter & nalatenschapsadviseur",
    image: team1,
    bio: "Marieke richtte De Erfeniswijzer op vanuit de overtuiging dat nalaten met warmte en aandacht hoort te gebeuren.",
  },
  {
    name: "Pieter Hofman",
    role: "Specialist erfrecht & executeurschap",
    image: team2,
    bio: "Met meer dan 25 jaar ervaring begeleidt Pieter families door zelfs de meest complexe nalatenschappen.",
  },
  {
    name: "Sanne Willems",
    role: "Juridisch adviseur & mediator",
    image: team3,
    bio: "Sanne brengt rust in lastige gesprekken en helpt families samen tot eerlijke oplossingen te komen.",
  },
];

const values = [
  {
    icon: Heart,
    title: "Persoonlijke aandacht",
    text: "Achter elk dossier zit een mens en een verhaal. Wij luisteren echt en nemen de tijd voor u.",
  },
  {
    icon: GraduationCap,
    title: "Deskundigheid",
    text: "Diepgaande kennis van erfrecht en fiscaliteit, vertaald naar heldere, begrijpelijke taal.",
  },
  {
    icon: Compass,
    title: "Rust & duidelijkheid",
    text: "Wij brengen overzicht en kalmte, zodat u altijd weet waar u aan toe bent.",
  },
];

function OverOns() {
  return (
    <>
      <ContentHero
        image={heroImg}
        imageAlt="Het warme team van De Erfeniswijzer in een lichte, huiselijke ruimte"
        eyebrow="Wie wij zijn"
        title="De Erfeniswijzer – Uw persoonlijke gids"
        intro="Wij geloven dat nalatenschap een laatste daad van liefde en zorg kan zijn. Met juridische expertise én menselijke warmte staan wij naast u, op de momenten die er het meest toe doen."
      />

      {/* Ons verhaal */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="mb-4 text-center text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            Ons verhaal
          </p>
          <h2 className="text-center text-3xl text-primary sm:text-4xl">
            Waarom wij dit werk doen
          </h2>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              De Erfeniswijzer ontstond uit een eenvoudige observatie: rond
              nalatenschap en erfenis komt veel kilte en bureaucratie kijken,
              juist op een moment dat mensen warmte en duidelijkheid nodig hebben.
            </p>
            <p>
              Wij zagen te vaak hoe onduidelijkheid leidde tot stress, en soms
              zelfs tot blijvende ruzies binnen families. Dat moest anders kunnen.
              Daarom combineren wij deskundige begeleiding met oprechte,
              persoonlijke aandacht.
            </p>
            <p>
              Of u nu uw zaken bij leven wilt regelen of een erfenis moet
              afwikkelen — wij zijn uw gids. We nemen de zorgen uit handen en
              zorgen dat nalaten weer kan zijn wat het hoort te zijn: een
              laatste daad van liefde.
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-secondary/50 py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              Ons team
            </p>
            <h2 className="text-3xl text-primary sm:text-4xl">
              De mensen achter De Erfeniswijzer
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Een toegewijd team dat met hart en kennis voor u klaarstaat.
            </p>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {team.map((member) => (
              <div
                key={member.name}
                className="flex flex-col overflow-hidden rounded-3xl border border-border/60 bg-card shadow-[var(--shadow-soft)] transition-shadow hover:shadow-[var(--shadow-elegant)]"
              >
                <img
                  src={member.image}
                  alt={`Portret van ${member.name}`}
                  width={1000}
                  height={1000}
                  loading="lazy"
                  className="aspect-square w-full object-cover"
                />
                <div className="p-7">
                  <h3 className="text-xl text-primary">{member.name}</h3>
                  <p className="mt-1 text-sm font-semibold text-accent">
                    {member.role}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Waarden */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              Onze waarden
            </p>
            <h2 className="text-3xl text-primary sm:text-4xl">
              Waar wij voor staan
            </h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-3xl border border-border/60 bg-card p-8 text-center shadow-[var(--shadow-soft)]"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary text-primary">
                  <value.icon className="h-7 w-7" strokeWidth={1.6} />
                </div>
                <h3 className="mt-5 text-xl text-primary">{value.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {value.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
