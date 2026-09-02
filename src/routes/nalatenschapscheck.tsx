import { useEffect, useRef, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { AnimatePresence, animate, motion, useReducedMotion } from "motion/react";
import { ArrowLeft, ArrowRight, CheckCircle2, ClipboardCheck, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useT } from "@/lib/i18n";
import { DURATION, EASE, stagger } from "@/lib/motion";

/**
 * Telt de score op in plaats van hem er neer te zetten. Bij een uitslag over de
 * eigen nalatenschap voelt een getal dat rustig oploopt minder als een oordeel
 * dan een cijfer dat er ineens staat.
 */
function ScoreCounter({ value }: { value: number }) {
  const reduced = useReducedMotion();
  const [shown, setShown] = useState(reduced ? value : 0);

  useEffect(() => {
    if (reduced) {
      setShown(value);
      return;
    }
    // Via onUpdate naar React-state in plaats van een MotionValue als kind: dat
    // laatste werkt hier niet, de span bleef op de beginwaarde staan.
    const controls = animate(0, value, {
      duration: 0.9,
      ease: EASE,
      onUpdate: setShown,
    });
    return () => controls.stop();
  }, [value, reduced]);

  // Halve punten bestaan (een "deels"-antwoord telt voor 0,5), dus alleen afronden
  // op één decimaal als dat ook echt nodig is.
  const rounded = Math.round(shown * 2) / 2;

  return (
    <span className="font-display text-6xl text-primary">
      {rounded % 1 === 0 ? rounded : rounded.toFixed(1)}
    </span>
  );
}

export const Route = createFileRoute("/nalatenschapscheck")({
  head: () => ({
    meta: [
      { title: "Gratis nalatenschapscheck — De Erfeniswijzer" },
      {
        name: "description",
        content:
          "Vijf eenvoudige vragen en u weet direct hoe goed uw nalatenschap is geregeld. Gratis, vrijblijvend en met een persoonlijk advies per onderwerp.",
      },
      { property: "og:title", content: "Gratis nalatenschapscheck — De Erfeniswijzer" },
      {
        property: "og:description",
        content:
          "Ontdek in vijf vragen waar u staat met uw nalatenschap en welke stappen nog zinvol zijn.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Nalatenschapscheck,
});

type Answer = "yes" | "partly" | "no";

const scores: Record<Answer, number> = { yes: 1, partly: 0.5, no: 0 };

function Nalatenschapscheck() {
  const t = useT();
  const h = t.check;
  const total = h.questions.length;

  const [started, setStarted] = useState(false);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);

  const finished = started && answers.length === total;
  const score = answers.reduce((sum, a) => sum + scores[a], 0);
  const level = score >= total - 0.5 ? 2 : score >= total / 2 ? 1 : 0;
  const gaps = h.questions.filter((_, i) => answers[i] !== "yes");

  /**
   * De aangeklikte antwoordknop verdwijnt bij elke stap uit de DOM, waardoor de
   * focus terugviel naar de body: wie met het toetsenbord werkt begon vijf keer
   * achter elkaar weer bovenaan de navigatie. Daarom verplaatsen we de focus zelf
   * naar de kaart, die daardoor ook meteen wordt voorgelezen.
   */
  const cardRef = useRef<HTMLDivElement | null>(null);
  const moved = useRef(false);

  useEffect(() => {
    if (!started) return;
    // Niet op de eerste render focussen: dan zou de pagina bij het laden al springen.
    if (!moved.current) {
      moved.current = true;
      return;
    }
    cardRef.current?.focus({ preventScroll: true });
  }, [step, finished, started]);

  // Percentage van de vraag waar de bezoeker nú staat, niet van wat al achter hem
  // ligt: anders opent de check op een lege balk van 0% en eindigt hij op 80%.
  const progress = Math.round(((step + 1) / total) * 100);

  // Welke kant de vraag op schuift. Zonder dit zou "Vorige" dezelfde beweging
  // maken als "Volgende" en voelt teruggaan als vooruitgaan.
  const [direction, setDirection] = useState<1 | -1>(1);
  const reduced = useReducedMotion();

  function answer(value: Answer) {
    const next = [...answers];
    next[step] = value;
    setAnswers(next);
    setDirection(1);
    if (step < total - 1) setStep(step + 1);
  }

  function goBack() {
    setDirection(-1);
    setStep(step - 1);
  }

  function restart() {
    setDirection(-1);
    setAnswers([]);
    setStep(0);
  }

  return (
    <>
      {/* Intro */}
      <section className="on-dark bg-primary py-20 text-primary-foreground">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-foreground/10 text-accent">
            <ClipboardCheck className="h-7 w-7" strokeWidth={1.6} />
          </div>
          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            {h.heroEyebrow}
          </p>
          <h1 className="mt-3 text-4xl leading-tight text-primary-foreground sm:text-5xl">
            {h.heroTitle}
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-primary-foreground/90">
            {h.heroIntro}
          </p>
        </div>
      </section>

      {/* Check */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {!started && (
            <div className="rounded-[2rem] border border-border/60 bg-card p-8 text-center shadow-[var(--shadow-soft)] sm:p-12">
              <p className="text-lg leading-relaxed text-muted-foreground">{h.disclaimer}</p>
              <Button
                size="lg"
                onClick={() => setStarted(true)}
                className="mt-8 rounded-full bg-accent px-8 py-6 text-base text-accent-foreground hover:bg-accent/90"
              >
                {h.startLabel}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          )}

          {started && !finished && (
            <div
              ref={cardRef}
              tabIndex={-1}
              data-focus-shift
              aria-live="polite"
              className="rounded-[2rem] border border-border/60 bg-card p-8 shadow-[var(--shadow-soft)] outline-none sm:p-12"
            >
              <div className="flex items-center justify-between text-sm font-semibold text-muted-foreground">
                <span>
                  {h.progressLabel} {step + 1} {h.ofLabel} {total}
                </span>
                <span className="text-accent-ink">{progress}%</span>
              </div>
              <div
                role="progressbar"
                aria-valuenow={progress}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label={`${h.progressLabel} ${step + 1} ${h.ofLabel} ${total}`}
                className="mt-3 h-2 w-full overflow-hidden rounded-full bg-secondary"
              >
                <motion.div
                  className="h-full rounded-full bg-accent"
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: DURATION.enter, ease: EASE }}
                />
              </div>

              {/*
                De vraag wisselde eerder zonder enige overgang, waardoor niet te zien
                was dát je een stap verder was. Nu schuift de oude vraag weg en komt
                de nieuwe van de andere kant binnen — bij "Vorige" precies andersom.
              */}
              <AnimatePresence mode="wait" initial={false} custom={direction}>
                <motion.div
                  key={step}
                  custom={direction}
                  initial={reduced ? false : { opacity: 0, x: direction * 28 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={reduced ? { opacity: 0 } : { opacity: 0, x: direction * -28 }}
                  transition={{ duration: DURATION.swap, ease: EASE }}
                >
                  <h2 className="mt-8 text-2xl leading-snug text-primary sm:text-3xl">
                    {h.questions[step].title}
                  </h2>
                  <p className="mt-3 text-muted-foreground">{h.questions[step].help}</p>
                </motion.div>
              </AnimatePresence>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {(
                  [
                    ["yes", h.answerYes],
                    ["partly", h.answerPartly],
                    ["no", h.answerNo],
                  ] as [Answer, string][]
                ).map(([value, label]) => (
                  <motion.button
                    key={value}
                    type="button"
                    onClick={() => answer(value)}
                    aria-pressed={answers[step] === value}
                    whileTap={reduced ? undefined : { scale: 0.97 }}
                    transition={{ duration: DURATION.quick, ease: EASE }}
                    className={`rounded-2xl border px-5 py-4 text-base font-semibold transition-colors hover:border-accent hover:bg-secondary ${
                      answers[step] === value
                        ? "border-accent bg-secondary text-primary"
                        : "border-border bg-card text-foreground"
                    }`}
                  >
                    {label}
                  </motion.button>
                ))}
              </div>

              {step > 0 && (
                <button
                  type="button"
                  onClick={goBack}
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
                >
                  <ArrowLeft className="h-4 w-4" />
                  {h.back}
                </button>
              )}
            </div>
          )}

          {finished && (
            <motion.div
              ref={cardRef}
              tabIndex={-1}
              data-focus-shift
              aria-live="polite"
              className="rounded-[2rem] border border-border/60 bg-card p-8 shadow-[var(--shadow-elegant)] outline-none sm:p-12"
              initial={reduced ? false : { opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: DURATION.enter, ease: EASE }}
            >
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent-ink">
                {h.resultEyebrow}
              </p>
              <div className="mt-4 flex items-baseline gap-3">
                <ScoreCounter value={score} />
                <span className="text-lg text-muted-foreground">{h.scoreSuffix}</span>
              </div>
              <h2 className="mt-6 text-3xl text-primary">{h.levels[level].title}</h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                {h.levels[level].text}
              </p>

              {gaps.length > 0 ? (
                <div className="mt-10">
                  <h3 className="text-xl text-primary">{h.adviceTitle}</h3>
                  <ul className="mt-5 space-y-4">
                    {/* Trapsgewijs, zodat de aandachtspunten één voor één landen in
                        plaats van als een lijst van tekortkomingen tegelijk. */}
                    {gaps.map((q, i) => (
                      <motion.li
                        key={q.title}
                        className="rounded-2xl border border-border/60 bg-secondary/50 p-5"
                        initial={reduced ? false : { opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: DURATION.enter,
                          ease: EASE,
                          delay: reduced ? 0 : (300 + stagger(i, 60, 300)) / 1000,
                        }}
                      >
                        <p className="font-semibold text-primary">{q.title}</p>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                          {q.advice}
                        </p>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              ) : (
                <div className="mt-10 rounded-2xl border border-border/60 bg-secondary/50 p-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent-ink" />
                    <div>
                      <p className="font-semibold text-primary">{h.allGoodTitle}</p>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {h.allGoodText}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <button
                type="button"
                onClick={restart}
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
              >
                <RotateCcw className="h-4 w-4" />
                {h.restart}
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary/50 py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl text-primary sm:text-4xl">{h.ctaTitle}</h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
            {h.ctaText}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-accent px-8 py-6 text-base text-accent-foreground hover:bg-accent/90"
            >
              <Link to="/contact">{h.ctaPrimary}</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-primary/30 px-8 py-6 text-base text-primary hover:bg-secondary"
            >
              <Link to="/bij-leven-regelen">{h.ctaSecondary}</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
