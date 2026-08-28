import { useCallback, useEffect, useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface QuestionCarouselProps {
  items: readonly { question: string; Icon: LucideIcon }[];
  prevLabel: string;
  nextLabel: string;
}

/** Pixels per frame; ~24px/s at 60fps, in de trage sfeer van de certificeringen-marquee. */
const SPEED = 0.4;

/**
 * Horizontale carrousel die uit zichzelf rustig doorscrollt en naadloos rondloopt.
 * De reeks staat er twee keer in: zodra de eerste helft voorbij is, springt de
 * scrollpositie een halve breedte terug, wat visueel niet te zien is.
 *
 * Pauzeert bij hover, bij toetsenbordfocus en zodra het tabblad niet zichtbaar is.
 * Respecteert prefers-reduced-motion: dan staat de beweging uit en blijven alleen
 * de pijlen over.
 */
export function QuestionCarousel({ items, prevLabel, nextLabel }: QuestionCarouselProps) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const pausedRef = useRef(false);
  const pendingRef = useRef(0);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motionQuery.matches) return;

    // De positie wordt als kommagetal bijgehouden: scrollLeft rondt af op hele pixels,
    // dus een stap van 0,4px per frame zou anders elke keer wegvallen en niets bewegen.
    let pos = el.scrollLeft;
    let frame = 0;

    const step = () => {
      // Sleepte de bezoeker zelf? Dan die positie overnemen.
      if (Math.abs(el.scrollLeft - pos) > 2) pos = el.scrollLeft;

      let delta = 0;
      if (pendingRef.current !== 0) {
        // Een pijlklik wordt hier uitgevloeid, zodat hij niet vecht met het doorlopen.
        const move = pendingRef.current * 0.14;
        const applied = Math.abs(move) < 0.5 ? pendingRef.current : move;
        pendingRef.current -= applied;
        if (Math.abs(pendingRef.current) < 0.5) pendingRef.current = 0;
        delta = applied;
      } else if (!pausedRef.current) {
        delta = SPEED;
      }

      if (delta !== 0) {
        const half = el.scrollWidth / 2;
        pos += delta;
        if (pos >= half) pos -= half;
        if (pos < 0) pos += half;
        el.scrollLeft = pos;
      }

      // requestAnimationFrame staat vanzelf stil in een verborgen tab; dat hoeft hier niet nog eens.
      frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);

    return () => cancelAnimationFrame(frame);
  }, []);

  /**
   * Verschuift met een hele kaart tegelijk, zodat een klik altijd een zichtbare stap is.
   * De verplaatsing loopt via dezelfde animatielus als het doorscrollen; scrollBy met
   * "smooth" zou daar tegenin werken, omdat de lus elke frame scrollLeft zet.
   */
  const scrollByCard = useCallback((direction: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.firstElementChild as HTMLElement | null;
    const amount = card ? card.offsetWidth + 32 : 280;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.scrollBy({ left: direction * amount, behavior: "auto" });
      return;
    }
    pendingRef.current += direction * amount;
  }, []);

  const pause = () => {
    pausedRef.current = true;
  };
  const resume = () => {
    pausedRef.current = false;
  };

  return (
    <div
      className="relative"
      role="region"
      aria-roledescription="carrousel"
      aria-label="Vragen na een overlijden"
      onMouseEnter={pause}
      onMouseLeave={resume}
      onFocusCapture={pause}
      onBlurCapture={resume}
    >
      <div
        ref={trackRef}
        className="mx-12 flex gap-8 overflow-x-auto overscroll-x-contain [-ms-overflow-style:none] [scrollbar-width:none] sm:mx-14 [&::-webkit-scrollbar]:hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 7%, black 93%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 7%, black 93%, transparent 100%)",
        }}
      >
        {[...items, ...items].map(({ question, Icon }, i) => (
          <div
            key={`${question}-${i}`}
            className="group w-[calc(100%-2rem)] shrink-0 sm:w-[calc(50%-1.5rem)] lg:w-[calc(25%-1.5rem)]"
            aria-hidden={i >= items.length ? true : undefined}
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
              <Icon className="h-7 w-7" strokeWidth={1.6} aria-hidden="true" />
            </div>
            <p className="mt-5 text-base leading-relaxed text-foreground/85">{question}</p>
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={() => scrollByCard(-1)}
        aria-label={prevLabel}
        className="absolute left-0 top-1/2 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-border/60 bg-background/80 text-primary backdrop-blur-sm transition-colors hover:bg-accent hover:text-accent-foreground"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
      </button>
      <button
        type="button"
        onClick={() => scrollByCard(1)}
        aria-label={nextLabel}
        className="absolute right-0 top-1/2 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-border/60 bg-background/80 text-primary backdrop-blur-sm transition-colors hover:bg-accent hover:text-accent-foreground"
      >
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </button>
    </div>
  );
}
