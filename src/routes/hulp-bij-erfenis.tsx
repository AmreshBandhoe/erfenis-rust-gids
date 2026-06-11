import { createFileRoute } from "@tanstack/react-router";
import { Gavel, HandHeart, Calculator, Users2, CheckCircle2 } from "lucide-react";
import { ContentHero } from "@/components/ContentHero";
import { CtaSection } from "@/components/CtaSection";
import heroImg from "@/assets/hulp-hero.jpg";

export const Route = createFileRoute("/hulp-bij-erfenis")({
  head: () => ({
    meta: [
      { title: "Hulp bij erfenis — De Erfeniswijzer" },
      {
        name: "description",
        content:
          "Wij nemen de zorgen uit handen bij het afwikkelen van een erfenis: executeurschap, erfbelasting, verdeling en mediation. Persoonlijke begeleiding voor nabestaanden.",
      },
      { property: "og:title", content: "Hulp bij erfenis — De Erfeniswijzer" },
      {
        property: "og:description",
        content:
          "Persoonlijke begeleiding bij het afwikkelen van een nalatenschap, met warmte en deskundigheid.",
      },
      { property: "og:image", content: heroImg },
      { property: "twitter:image", content: heroImg },
    ],
  }),
  component: HulpBijErfenis,
});

const services = [
  {
    icon: Gavel,
    title: "Volledig executeurschap",
    text: "Wij nemen het executeurschap volledig op ons: van inventarisatie en het informeren van instanties tot de financiële afwikkeling. U hoeft zich nergens druk over te maken.",
  },
  {
    icon: HandHeart,
    title: "Begeleiding als nabestaande",
    text: "Wilt u zelf betrokken blijven? Dan staan wij naast u met advies en praktische hulp bij elke stap, in uw eigen tempo en met alle ruimte voor uw verdriet.",
  },
  {
    icon: Calculator,
    title: "Erfbelasting regelen",
    text: "Wij verzorgen de aangifte erfbelasting correct en op tijd, en zorgen dat u nooit te veel betaalt. Helder uitgelegd, zonder verrassingen achteraf.",
  },
  {
    icon: Users2,
    title: "Mediation bij familieconflicten",
    text: "Spanningen of onenigheid binnen de familie? Als neutrale gids helpen wij het gesprek weer op gang te brengen en samen tot een eerlijke oplossing te komen.",
  },
];

const burdens = [
  "Het regelen van de uitvaart en alle bijbehorende administratie",
  "Het informeren van banken, verzekeraars en overheidsinstanties",
  "Het in kaart brengen van bezittingen, schulden en verzekeringen",
  "De aangifte en betaling van de erfbelasting",
  "Een eerlijke en zorgvuldige verdeling onder de erfgenamen",
];

function HulpBijErfenis() {
  return (
    <>
      <ContentHero
        image={heroImg}
        imageAlt="Warm, ondersteunend gesprek tussen een adviseur en een nabestaande aan een houten tafel"
        eyebrow="Voor nabestaanden & executeurs"
        title="Hulp bij erfenis – Wij nemen de zorgen uit handen"
        intro="Het verliezen van een dierbare is ingrijpend genoeg. Het afwikkelen van de erfenis hoeft u er niet alléén bij te dragen. Wij begeleiden u met warmte en deskundigheid door elke stap."
      />

      {/* Inleiding + lasten */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-14 lg:grid-cols-2">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                Een zware taak op een zwaar moment
              </p>
              <h2 className="text-3xl text-primary sm:text-4xl">
                U hoeft het niet alleen te doen
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                Het afwikkelen van een nalatenschap is vaak ingewikkelder en
                emotioneler dan mensen verwachten. Er komt veel op u af, terwijl
                u juist tijd en rust nodig heeft om afscheid te nemen.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                De Erfeniswijzer neemt de praktische en juridische zorgen uit
                handen, zodat u zich kunt richten op wat écht belangrijk is.
              </p>
            </div>
            <div className="rounded-3xl border border-border/60 bg-secondary/50 p-8 shadow-[var(--shadow-soft)] sm:p-10">
              <h3 className="text-xl text-primary">Waar wij u bij ontzorgen</h3>
              <ul className="mt-6 space-y-4">
                {burdens.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-foreground">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Diensten */}
      <section className="bg-secondary/50 py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              Onze diensten
            </p>
            <h2 className="text-3xl text-primary sm:text-4xl">
              Volledige begeleiding bij de erfenis
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Of u nu alles uit handen wilt geven of zelf betrokken wilt blijven —
              wij passen ons aan uw wensen aan.
            </p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.title}
                className="group flex flex-col rounded-3xl border border-border/60 bg-card p-8 shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                  <service.icon className="h-7 w-7" strokeWidth={1.6} />
                </div>
                <h3 className="mt-6 text-xl leading-snug text-primary">
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {service.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="Laat de zorgen aan ons over"
        text="Plan een gratis en vrijblijvend adviesgesprek. We luisteren naar uw situatie en vertellen u rustig hoe wij u kunnen helpen."
      />
    </>
  );
}
