import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

import { EASE, DURATION } from "@/lib/motion";

/**
 * De hero staat bij het laden al in beeld, dus daar werkt een scroll-onthulling niet:
 * die zou meteen afvuren of — erger — helemaal niet. Deze twee componenten laten de
 * regels van de hero in plaats daarvan bij het monteren na elkaar binnenkomen.
 *
 * Gebruik: <HeroIntro> om de reeks heen, <HeroPiece> om elke regel.
 */

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const piece = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: DURATION.enter, ease: EASE } },
};

export function HeroIntro({ children, className }: { children: ReactNode; className?: string }) {
  const reduced = useReducedMotion();
  if (reduced) return <div className={className}>{children}</div>;

  return (
    <motion.div className={className} variants={container} initial="hidden" animate="visible">
      {children}
    </motion.div>
  );
}

export function HeroPiece({ children, className }: { children: ReactNode; className?: string }) {
  const reduced = useReducedMotion();
  if (reduced) return <div className={className}>{children}</div>;

  return (
    <motion.div className={className} variants={piece}>
      {children}
    </motion.div>
  );
}
