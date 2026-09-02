import { Link } from "@tanstack/react-router";
import { motion, useReducedMotion } from "motion/react";
import { Button } from "@/components/ui/button";
import { HeroIntro, HeroPiece } from "@/components/HeroIntro";
import { useT } from "@/lib/i18n";

interface ContentHeroProps {
  image: string;
  imageAlt: string;
  eyebrow: string;
  title: string;
  intro: string;
  ctaLabel?: string;
  ctaTo?: string;
}

export function ContentHero({
  image,
  imageAlt,
  eyebrow,
  title,
  intro,
  ctaLabel,
  ctaTo = "/contact",
}: ContentHeroProps) {
  const t = useT();
  const label = ctaLabel ?? t.cta.defaultContentHeroLabel;
  const reduced = useReducedMotion();

  return (
    <section className="on-dark relative isolate overflow-hidden">
      <motion.img
        src={image}
        alt={imageAlt}
        width={1600}
        height={1000}
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover"
        initial={{ scale: 1 }}
        animate={reduced ? undefined : { scale: 1.04 }}
        transition={{ duration: 30, ease: "linear" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/30" />
      <div className="relative mx-auto flex min-h-[62vh] max-w-6xl flex-col justify-center px-4 py-24 sm:px-6 lg:px-8">
        <HeroIntro className="max-w-2xl">
          <HeroPiece>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              {eyebrow}
            </p>
          </HeroPiece>
          <HeroPiece>
            <h1 className="text-4xl leading-[1.08] text-primary-foreground sm:text-5xl md:text-6xl">
              {title}
            </h1>
          </HeroPiece>
          <HeroPiece>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/90">
              {intro}
            </p>
          </HeroPiece>
          <HeroPiece className="mt-10">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-accent px-8 py-6 text-base text-accent-foreground shadow-lg hover:bg-accent/90"
            >
              <Link to={ctaTo}>{label}</Link>
            </Button>
          </HeroPiece>
        </HeroIntro>
      </div>
    </section>
  );
}
