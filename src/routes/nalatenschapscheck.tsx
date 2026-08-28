import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, CheckCircle2, ClipboardCheck, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useT } from "@/lib/i18n";

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

  function answer(value: Answer) {
    const next = [...answers];
    next[step] = value;
    setAnswers(next);
    if (step < total - 1) setStep(step + 1);
  }

  function restart() {
    setAnswers([]);
    setStep(0);
    setStarted(false);
  }

  return (
    <>
      {/* Intro */}
      <section className="bg-primary py-20 text-primary-foreground">
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
            <div className="rounded-[2rem] border border-border/60 bg-card p-8 shadow-[var(--shadow-soft)] sm:p-12">
              <div className="flex items-center justify-between text-sm font-semibold text-muted-foreground">
                <span>
                  {h.progressLabel} {step + 1} {h.ofLabel} {total}
                </span>
                <span className="text-accent">{Math.round((step / total) * 100)}%</span>
              </div>
              <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-secondary">
                <div
                  className="h-full rounded-full bg-accent transition-all duration-500"
                  style={{ width: `${(step / total) * 100}%` }}
                />
              </div>

              <h2 className="mt-8 text-2xl leading-snug text-primary sm:text-3xl">
                {h.questions[step].title}
              </h2>
              <p className="mt-3 text-muted-foreground">{h.questions[step].help}</p>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {(
                  [
                    ["yes", h.answerYes],
                    ["partly", h.answerPartly],
                    ["no", h.answerNo],
                  ] as [Answer, string][]
                ).map(([value, label]) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => answer(value)}
                    className={`rounded-2xl border px-5 py-4 text-base font-semibold transition-all hover:-translate-y-0.5 hover:border-accent hover:bg-secondary ${
                      answers[step] === value
                        ? "border-accent bg-secondary text-primary"
                        : "border-border bg-card text-foreground"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>

              {step > 0 && (
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
                >
                  <ArrowLeft className="h-4 w-4" />
                  {h.back}
                </button>
              )}
            </div>
          )}

          {finished && (
            <div className="rounded-[2rem] border border-border/60 bg-card p-8 shadow-[var(--shadow-elegant)] sm:p-12">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                {h.resultEyebrow}
              </p>
              <div className="mt-4 flex items-baseline gap-3">
                <span className="font-display text-6xl text-primary">
                  {score % 1 === 0 ? score : score.toFixed(1)}
                </span>
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
                    {gaps.map((q) => (
                      <li
                        key={q.title}
                        className="rounded-2xl border border-border/60 bg-secondary/50 p-5"
                      >
                        <p className="font-semibold text-primary">{q.title}</p>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                          {q.advice}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <div className="mt-10 rounded-2xl border border-border/60 bg-secondary/50 p-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
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
            </div>
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
