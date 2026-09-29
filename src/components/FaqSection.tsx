import { ChevronDown } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import type { FaqItem } from "@/lib/content";

interface FaqSectionProps {
  items: FaqItem[];
}

export function FaqSection({ items }: FaqSectionProps) {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <h2 className="text-3xl text-primary sm:text-4xl">Veelgestelde vragen</h2>
        </Reveal>

        <div className="mt-12 space-y-4">
          {items.map((item, index) => (
            <Reveal key={item.question} delay={index * 45}>
              <details className="group overflow-hidden rounded-2xl border border-border/70 bg-card shadow-[var(--shadow-soft)] open:shadow-[var(--shadow-elegant)]">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 bg-primary px-6 py-5 text-left font-display text-lg text-primary-foreground marker:content-none sm:px-8 sm:text-xl">
                  <span>{item.question}</span>
                  <ChevronDown
                    className="h-5 w-5 shrink-0 text-primary-foreground transition-transform duration-300 group-open:rotate-180"
                    aria-hidden="true"
                  />
                </summary>
                <div className="border-t border-border/60 px-6 py-5 text-base leading-relaxed text-muted-foreground sm:px-8">
                  {item.answer}
                </div>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
