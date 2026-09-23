import { createFileRoute } from "@tanstack/react-router";
import { ContentHero } from "@/components/ContentHero";
import { CtaSection } from "@/components/CtaSection";
import { Reveal } from "@/components/Reveal";
import { useT } from "@/lib/i18n";
import teamHero from "@/assets/team-hero-collaboration.png";
import zainul from "@/assets/team-zainul-habieb-feature.jpg";
import gerard from "@/assets/team-gerard-van-de-kerkhof.jpg";
import mark from "@/assets/team-mark-van-geffen.jpg";
import hans from "@/assets/team-hans-sanders.png";
import yussuf from "@/assets/team-yussuf-abdi.png";
import errol from "@/assets/team-errol-moennoe.png";

export const Route = createFileRoute("/over-ons")({ component: OverOns });

const portraits: Record<string, string> = {
  "Zainul Habieb": zainul,
  "Gerard van de Kerkhof": gerard,
  "Mark van Geffen": mark,
  "Hans Sanders": hans,
  "Yussuf Abdi": yussuf,
  "Errol Moennoe": errol,
};

function OverOns() {
  const { overOns: h } = useT();
  return (
    <>
      <ContentHero
        image={teamHero}
        imageAlt="Team van specialisten in overleg aan een vergadertafel"
        eyebrow={h.heroEyebrow}
        title={h.heroTitle}
        intro={h.heroIntro}
      />
      <section className="bg-secondary/50 py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {h.team.map((member, index) => (
              <Reveal
                key={member.name}
                delay={index * 70}
                className="motion-lift motion-image-frame overflow-hidden rounded-2xl bg-card shadow-[var(--shadow-soft)]"
              >
                <img
                  src={portraits[member.name]}
                  alt={`${h.teamPortrait} ${member.name}`}
                  className="aspect-[4/3] w-full object-cover"
                  loading={index < 3 ? "eager" : "lazy"}
                />
                <div className="p-7">
                  <h2 className="text-2xl text-primary">{member.name}</h2>
                  <p className="mt-1 text-sm font-semibold text-accent-ink">{member.role}</p>
                  <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{member.bio}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CtaSection />
    </>
  );
}
