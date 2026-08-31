import { createFileRoute } from "@tanstack/react-router";
import { Heart, GraduationCap, Compass } from "lucide-react";
import { ContentHero } from "@/components/ContentHero";
import { Reveal } from "@/components/Reveal";
import { CtaSection } from "@/components/CtaSection";
import { TeamNetwork } from "@/components/TeamNetwork";

import { useT } from "@/lib/i18n";
import { stagger } from "@/lib/motion";
import heroImg from "@/assets/team-hero.jpg";
import portretZainulHabieb from "@/assets/team-zainul-habieb-feature.jpg";
import portretGerardVanDeKerkhof from "@/assets/team-gerard-van-de-kerkhof-sm.jpg";
import portretMarkVanGeffen from "@/assets/team-mark-van-geffen-sm.jpg";
import portretHansSanders from "@/assets/team-hans-sanders-sm.jpg";
import portretYussufAbdi from "@/assets/team-yussuf-abdi-sm.jpg";

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

/**
 * Portret per teamlid, op naam in plaats van op volgorde. Met een array op index
 * schuift alles een plek op zodra er iemand tussen wordt gezet — dan staat er een
 * verkeerd gezicht bij een naam. Ontbreekt iemand hier, dan valt die terug op
 * TeamAvatar met de initialen.
 *
 * Twee maten: het aanspreekpunt wordt groot getoond, de specialisten klein. De
 * bestanden komen uit scripts/optimize-portraits.mjs.
 */
const specialistPortraits: Record<string, string> = {
  "Gerard van de Kerkhof": portretGerardVanDeKerkhof,
  "Mark van Geffen": portretMarkVanGeffen,
  "Hans Sanders": portretHansSanders,
  "Yussuf Abdi": portretYussufAbdi,
};
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
          <div className="mt-16">
            <TeamNetwork
              members={h.team}
              principalPortrait={portretZainulHabieb}
              specialistPortraits={specialistPortraits}
              portraitLabel={h.teamPortrait}
            />
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
