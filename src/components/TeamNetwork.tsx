import { motion, useReducedMotion } from "motion/react";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TeamAvatar } from "@/components/TeamAvatar";
import { Reveal } from "@/components/Reveal";
import { DURATION, EASE, stagger } from "@/lib/motion";

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
}

interface TeamNetworkProps {
  /** Eerste lid is het vaste aanspreekpunt, de rest zijn aangesloten specialisten. */
  members: readonly TeamMember[];
  /** Groot portret van het aanspreekpunt. */
  principalPortrait?: string;
  /** Kleine portretten van de specialisten, op naam. */
  specialistPortraits: Record<string, string>;
  /** Voorvoegsel voor de alt-tekst, bv. "Portret van". */
  portraitLabel: string;
}

/** Hoeveel de ring buiten het portret valt. */
const RING_OFFSET = 6;

/**
 * De teamsectie van /over-ons.
 *
 * Waarom niet gewoon vijf gelijke kaarten: de bio's zeggen zelf dat maar één
 * persoon De Erfeniswijzer ís. De andere vier hebben een eigen kantoor en worden
 * "binnen De Erfeniswijzer" ingeschakeld. Vijf identieke kaarten vertelden dat
 * verkeerd, lieten bovendien een gat vallen in een raster van drie, en toonden de
 * portretten zo groot dat de lage resolutie van sommige opviel.
 *
 * Daarom: één groot portret voor het aanspreekpunt, en de specialisten als
 * keuzerij met één detailpaneel. Dat houdt de sectie kort ondanks bio's van 350
 * tot 480 tekens en houdt de portretten klein genoeg om scherp te blijven.
 */
export function TeamNetwork({
  members,
  principalPortrait,
  specialistPortraits,
  portraitLabel,
}: TeamNetworkProps) {
  const reduced = useReducedMotion();
  const [principal, ...specialists] = members;
  const [active, setActive] = useState(specialists[0]?.name ?? "");

  /**
   * De ring is één element dat naar het actieve portret toe beweegt.
   *
   * Eerder deed layoutId dit werk, maar dat sprong: elke knop zit in een <Reveal>,
   * en zo'n geanimeerde transform in de ouderketen breekt de positieberekening van
   * Motions layout-projectie. Ook een LayoutGroup eromheen loste dat niet op. Zelf
   * meten is hier voorspelbaar en heeft die afhankelijkheid niet.
   */
  const listRef = useRef<HTMLDivElement | null>(null);
  const avatarRefs = useRef<Record<string, HTMLSpanElement | null>>({});
  const [ring, setRing] = useState<{ x: number; y: number; size: number } | null>(null);

  const measure = useCallback(() => {
    const list = listRef.current;
    const avatar = avatarRefs.current[active];
    if (!list || !avatar) return;
    const listBox = list.getBoundingClientRect();
    const avatarBox = avatar.getBoundingClientRect();
    setRing({
      x: avatarBox.left - listBox.left - RING_OFFSET,
      y: avatarBox.top - listBox.top - RING_OFFSET,
      size: avatarBox.width + RING_OFFSET * 2,
    });
  }, [active]);

  useLayoutEffect(measure, [measure]);

  useEffect(() => {
    // Het raster wisselt van twee naar vier kolommen en de portretten laden lui,
    // dus opnieuw meten zodra de afmetingen veranderen.
    const list = listRef.current;
    if (!list) return;
    const observer = new ResizeObserver(measure);
    observer.observe(list);
    window.addEventListener("resize", measure);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [measure]);

  if (!principal) return null;

  return (
    <div className="space-y-20">
      {/* Blok A — het vaste aanspreekpunt */}
      <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,17.5rem)_1fr] lg:gap-16">
        <Reveal className="relative mx-auto w-full max-w-[17.5rem]">
          {principalPortrait ? (
            <img
              src={principalPortrait}
              alt={`${portraitLabel} ${principal.name}`}
              width={488}
              height={488}
              className="w-full rounded-3xl object-cover shadow-[var(--shadow-elegant)]"
            />
          ) : (
            <div className="overflow-hidden rounded-3xl">
              <TeamAvatar name={principal.name} />
            </div>
          )}
          {/* Zelfde accentkader als op de homepage, voor herkenbaarheid. */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-5 -right-5 hidden h-28 w-28 rounded-3xl border-4 border-accent/40 sm:block"
          />
        </Reveal>

        <Reveal delay={120}>
          <h3 className="font-display text-3xl text-primary sm:text-4xl">{principal.name}</h3>
          <p className="mt-2 text-base font-semibold text-accent-ink">{principal.role}</p>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">{principal.bio}</p>
        </Reveal>
      </div>

      {/* Blok B — de aangesloten specialisten */}
      {specialists.length > 0 && (
        <Tabs value={active} onValueChange={setActive} className="w-full">
          <div ref={listRef} className="relative">
            {ring && (
              <motion.span
                aria-hidden="true"
                className="pointer-events-none absolute left-0 top-0 rounded-full border-2 border-accent"
                initial={false}
                animate={{ x: ring.x, y: ring.y, width: ring.size, height: ring.size }}
                transition={reduced ? { duration: 0 } : { duration: DURATION.swap, ease: EASE }}
              />
            )}

            <TabsList className="grid h-auto w-full grid-cols-2 gap-4 bg-transparent p-0 sm:grid-cols-4">
              {specialists.map((member, i) => {
                const isActive = member.name === active;
                const portrait = specialistPortraits[member.name];
                return (
                  <Reveal key={member.name} as="div" delay={stagger(i, 90)} className="flex">
                    <TabsTrigger
                      value={member.name}
                      className="group flex h-auto w-full flex-col items-center gap-3 rounded-2xl bg-transparent p-3 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
                    >
                      <span
                        ref={(el) => {
                          avatarRefs.current[member.name] = el;
                        }}
                        className="relative block h-24 w-24 sm:h-28 sm:w-28"
                      >
                        {portrait ? (
                          <motion.img
                            src={portrait}
                            alt={`${portraitLabel} ${member.name}`}
                            width={256}
                            height={256}
                            loading="lazy"
                            onLoad={measure}
                            className="h-full w-full rounded-full object-cover"
                            animate={
                              reduced
                                ? undefined
                                : {
                                    scale: isActive ? 1.04 : 1,
                                    filter: isActive ? "saturate(1)" : "saturate(0.92)",
                                  }
                            }
                            transition={{ duration: DURATION.quick, ease: EASE }}
                          />
                        ) : (
                          <span className="flex h-full w-full items-center justify-center overflow-hidden rounded-full">
                            <TeamAvatar name={member.name} />
                          </span>
                        )}
                      </span>

                      <span className="text-center">
                        <span className="block font-display text-lg leading-snug text-primary">
                          {member.name}
                        </span>
                        <span className="mt-0.5 block text-xs font-semibold leading-snug text-muted-foreground group-data-[state=active]:text-accent-ink">
                          {member.role}
                        </span>
                      </span>
                    </TabsTrigger>
                  </Reveal>
                );
              })}
            </TabsList>
          </div>

          <div className="mt-10">
            {specialists.map((member) => {
              const isActive = member.name === active;
              return (
                // forceMount houdt alle bio's in de DOM. Radix hangt standaard alleen
                // het actieve paneel op, waardoor vier van de vijf teksten voor
                // zoekmachines zouden verdwijnen.
                <TabsContent
                  key={member.name}
                  value={member.name}
                  forceMount
                  className="mt-0 data-[state=inactive]:hidden"
                >
                  <motion.div
                    className="rounded-3xl border border-border/60 bg-card p-8 shadow-[var(--shadow-soft)] sm:p-10"
                    initial={false}
                    animate={
                      reduced ? undefined : { opacity: isActive ? 1 : 0, y: isActive ? 0 : 8 }
                    }
                    transition={{ duration: DURATION.swap, ease: EASE }}
                  >
                    <h3 className="font-display text-2xl text-primary">{member.name}</h3>
                    <p className="mt-1 text-sm font-semibold text-accent-ink">{member.role}</p>
                    <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                      {member.bio}
                    </p>
                  </motion.div>
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      )}
    </div>
  );
}
