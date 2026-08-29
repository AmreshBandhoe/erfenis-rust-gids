import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { CalendarCheck, Phone } from "lucide-react";
import { useState } from "react";

import { useT } from "@/lib/i18n";
import { PHONE_HREF, PHONE_IS_PLACEHOLDER } from "@/lib/contact";
import { DURATION, EASE } from "@/lib/motion";

/**
 * De homepage is op een telefoon ruim 11.000 pixels lang en de enige knop in de
 * balk bovenaan is het hamburgermenu. Iemand die net iemand verloren heeft en
 * halverwege die pagina besluit contact te zoeken, moet dan eerst helemaal terug
 * naar boven. Deze balk schuift na een schermlengte scrollen omhoog en blijft staan.
 *
 * Alleen op klein scherm: op desktop staat de CTA al permanent in de kop.
 * De bel-knop verschijnt pas als er een echt telefoonnummer is ingesteld
 * (zie src/lib/contact.ts).
 */
export function MobileContactBar() {
  const t = useT();
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => setVisible(y > 600));

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ duration: DURATION.swap, ease: EASE }}
          className="fixed inset-x-0 bottom-0 z-40 border-t border-border/70 bg-background/95 px-4 py-3 backdrop-blur-md lg:hidden"
          style={{ paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom))" }}
        >
          <div className="mx-auto flex max-w-md items-center gap-3">
            {!PHONE_IS_PLACEHOLDER && (
              <a
                href={PHONE_HREF}
                className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-full border border-primary/30 text-base font-medium text-primary"
              >
                <Phone className="h-5 w-5" aria-hidden="true" />
                {t.header.callCta}
              </a>
            )}
            <Link
              to="/contact"
              className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-full bg-accent text-base font-medium text-accent-foreground shadow-lg"
            >
              <CalendarCheck className="h-5 w-5" aria-hidden="true" />
              {t.header.cta}
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
