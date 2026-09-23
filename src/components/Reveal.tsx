import { motion, useReducedMotion } from "motion/react";
import type { ElementType, ReactNode } from "react";

import { EASE, DURATION, inView } from "@/lib/motion";

/**
 * motion.create() maakt elke aanroep een nieuw componenttype. Zonder deze cache
 * zou React de inhoud bij iedere render opnieuw aankoppelen — met verlies van
 * focus en formulierstatus tot gevolg.
 */
const motionTags = new Map<ElementType, ElementType>();

function motionTag(tag: ElementType): ElementType {
  let cached = motionTags.get(tag);
  if (!cached) {
    cached = motion.create(tag as never) as ElementType;
    motionTags.set(tag, cached);
  }
  return cached;
}

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Vertraging in ms voor een zacht trapsgewijs effect */
  delay?: number;
  as?: ElementType;
}

/**
 * Onthult de inhoud met een zachte fade + opwaartse beweging zodra
 * het element in beeld scrollt. Respecteert prefers-reduced-motion.
 *
 * De API is bewust gelijk gebleven aan de eerdere IntersectionObserver-versie;
 * alleen de motor eronder is vervangen door Motion, zodat dit component dezelfde
 * timing deelt met de rest van de bewegingen op de site.
 */
export function Reveal({ children, className = "", delay = 0, as: Tag = "div" }: RevealProps) {
  const reduced = useReducedMotion();
  const MotionTag = motionTag(Tag);

  // Bij verminderde beweging niets animeren én niets verbergen: de klassieke fout
  // is dat de inhoud dan onzichtbaar blijft staan.
  if (reduced) {
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={inView}
      transition={{ duration: DURATION.enter, ease: EASE, delay: delay / 1000 }}
    >
      {children}
    </MotionTag>
  );
}
