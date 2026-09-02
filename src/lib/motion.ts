import type { Transition, Variants } from "motion/react";

/**
 * Eén gedeelde bewegingstaal voor de hele site.
 *
 * Dit is een site over overlijden en nalatenschap. Beweging mag hier nooit
 * vrolijk of springerig zijn: geen veren, geen overshoot, niets dat de aandacht
 * naar zichzelf trekt. Alles gaat op dezelfde rustige curve en is binnen een
 * halve seconde klaar.
 */

/** Dezelfde curve die de oorspronkelijke .reveal-CSS al gebruikte. */
export const EASE = [0.22, 1, 0.36, 1] as const;

export const DURATION = {
  /** Binnenkomen van blokken en kaarten. */
  enter: 0.5,
  /** Wisselen tussen routes en vragen: korter, anders voelt klikken traag. */
  swap: 0.25,
  /** Hover, indrukken, uitklappen. */
  quick: 0.2,
} as const;

export const enterTransition: Transition = { duration: DURATION.enter, ease: EASE };
export const swapTransition: Transition = { duration: DURATION.swap, ease: EASE };

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: enterTransition },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: enterTransition },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.97 },
  visible: { opacity: 1, scale: 1, transition: enterTransition },
};

/**
 * Voor rijen kaarten. De vertraging per kind blijft klein, want bij vijf
 * servicekaarten zou 0,15s betekenen dat de laatste pas na 0,75s verschijnt —
 * dan wacht je op de pagina in plaats van andersom.
 */
export const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

/** De viewport-instelling die overal hetzelfde moet zijn. */
export const inView = { once: true, amount: 0.15 } as const;

/**
 * Vertraging voor een trapsgewijze reeks, afgetopt zodat het laatste item nooit
 * meer dan ~0,4s na het eerste binnenkomt.
 */
export function stagger(index: number, stepMs = 80, capMs = 400): number {
  return Math.min(index * stepMs, capMs);
}
