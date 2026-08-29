import { createFileRoute } from "@tanstack/react-router";
import { Heart, GraduationCap, Compass } from "lucide-react";
import { ContentHero } from "@/components/ContentHero";
import { Reveal } from "@/components/Reveal";
import { CtaSection } from "@/components/CtaSection";
import { TeamAvatar } from "@/components/TeamAvatar";

import { useT } from "@/lib/i18n";
import { stagger } from "@/lib/motion";
import heroImg from "@/assets/team-hero.jpg";
import team1 from "@/assets/team-zainul-habieb.jpg";
import team2 from "@/assets/team-gerard-van-de-kerkhof.jpg";
import team3 from "@/assets/team-mark-van-geffen.jpg";

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

const teamImages = [team1, team2, team3];
const valueIcons = [Heart, GraduationCap, Compass];

function OverOns() {
  const t = useT();
  const h = t.overOns;

  return (
    <>
      <ContentHero
        image={heroImg}
        imageAlt="Het warme team van De Erfeniswijzer in een lichte, huiselijke ruimte"
        eyebrow={h.heroEyebrow}
        title={h.heroTitle}
        intro={h.heroIntro}
      />

      {/* Team */}
      <section className="bg-secondary/50 py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-accent-ink">
              {h.teamEyebrow}
            </p>
            <h2 className="text-3xl text-primary sm:text-4xl">{h.teamTitle}</h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{h.teamIntro}</p>
          </Reveal>
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {h.team.map((member, i) => {
              const portrait = teamImages[i];
              return (
                <Reveal
                  key={member.name}
                  delay={stagger(i)}
                  className="flex flex-col overflow-hidden rounded-3xl border border-border/60 bg-card shadow-[var(--shadow-soft)] transition-shadow hover:shadow-[var(--shadow-elegant)]"
                >
                  {portrait ? (
                    <img
                      src={portrait}
                      alt={`${h.teamPortrait} ${member.name}`}
                      width={1000}
                      height={1000}
                      loading="lazy"
                      className="aspect-square w-full object-cover"
                    />
                  ) : (
                    <TeamAvatar name={member.name} />
                  )}
                  <div className="p-7">
                    <h3 className="text-xl text-primary">{member.name}</h3>
                    <p className="mt-1 text-sm font-semibold text-accent-ink">{member.role}</p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {member.bio}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-accent-ink">
              {h.valuesEyebrow}
            </p>
            <h2 className="text-3xl text-primary sm:text-4xl">{h.valuesTitle}</h2>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {h.values.map((value, i) => {
              const Icon = valueIcons[i];
              return (
                <Reveal
                  key={value.title}
                  delay={stagger(i)}
                  className="rounded-3xl border border-border/60 bg-card p-8 text-center shadow-[var(--shadow-soft)]"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary text-primary">
                    <Icon className="h-7 w-7" strokeWidth={1.6} />
                  </div>
                  <h3 className="mt-5 text-xl text-primary">{value.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{value.text}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
