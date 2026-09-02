import { useRef, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "motion/react";
import { Menu, ChevronDown } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useLang } from "@/lib/i18n";
import { DURATION, EASE } from "@/lib/motion";
import logo from "@/assets/erfeniswijzer-logo.jpeg";

type NavLeaf = { label: string; to: string };
type NavEntry = NavLeaf | { label: string; children: readonly NavLeaf[] };

export function navItems(t: ReturnType<typeof useLang>["t"]): readonly NavEntry[] {
  return [
    { label: t.nav.home, to: "/" },
    {
      label: t.nav.onzeBegeleiding,
      children: [
        { label: t.nav.bijLevenRegelen, to: "/bij-leven-regelen" },
        { label: t.nav.hulpNaOverlijden, to: "/hulp-bij-erfenis" },
        { label: t.nav.executeurschap, to: "/executeurschap" },
        { label: t.nav.mediation, to: "/nalatenschapsmediation" },
        { label: t.nav.erfbelasting, to: "/erfbelasting-aangifte" },
      ],
    },
    { label: t.nav.onsTeam, to: "/over-ons" },
    { label: t.nav.kennisbank, to: "/kennisbank" },
    { label: t.nav.contact, to: "/contact" },
  ] as const;
}

function Brand({ onClick, condensed = false }: { onClick?: () => void; condensed?: boolean }) {
  return (
    <Link
      to="/"
      onClick={onClick}
      className="flex items-center gap-3"
      aria-label="De Erfeniswijzer — naar home"
    >
      <motion.img
        src={logo}
        alt="Logo De Erfeniswijzer"
        className="h-11 w-auto origin-left rounded-lg shadow-soft"
        animate={{ scale: condensed ? 0.88 : 1 }}
        transition={{ duration: DURATION.swap, ease: EASE }}
      />
    </Link>
  );
}

const navLinkClass =
  "relative text-[0.95rem] font-medium text-foreground/80 transition-colors hover:text-primary";

function DesktopLink({ item }: { item: NavLeaf }) {
  return (
    <Link
      to={item.to}
      className={`group ${navLinkClass}`}
      activeProps={{ className: "text-primary", "data-active": "true" }}
      activeOptions={{ exact: item.to === "/" }}
    >
      {({ isActive }) => (
        <span className="relative inline-block py-1">
          {item.label}
          {/*
            Het streepje bestond alleen in de actieve staat en deed bij hover niets.
            scaleX vanaf links groeit het nu onder de muis uit — dezelfde beweging
            die de actieve staat al toont, zodat hover en 'hier bent u' één taal spreken.
          */}
          <span
            className={`absolute -bottom-0.5 left-0 h-0.5 w-full origin-left rounded-full bg-accent transition-transform duration-300 ${
              isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
            }`}
          />
        </span>
      )}
    </Link>
  );
}

function DesktopDropdown({ label, children }: { label: string; children: readonly NavLeaf[] }) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const reduced = useReducedMotion();

  // Zonder dit bleef "Onze begeleiding" ongemarkeerd zodra je op een van de
  // onderliggende pagina's stond: nergens in de navigatie was dan te zien waar je was.
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isActive = children.some((child) => pathname === child.to);

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      // Het menu ging alleen open bij muisbeweging; met de focusgebeurtenis erbij
      // kan het ook met het toetsenbord worden bereikt.
      onFocus={() => setOpen(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setOpen(false);
      }}
      onKeyDown={(e) => {
        if (e.key === "Escape" && open) {
          setOpen(false);
          containerRef.current?.querySelector("button")?.focus();
        }
      }}
    >
      <button
        type="button"
        className={`inline-flex items-center gap-1 py-1 ${navLinkClass} ${
          isActive ? "text-primary" : ""
        }`}
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="relative inline-block">
          {label}
          <span
            className={`absolute -bottom-0.5 left-0 h-0.5 w-full origin-left rounded-full bg-accent transition-transform duration-300 ${
              isActive || open ? "scale-x-100" : "scale-x-0"
            }`}
          />
        </span>
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>
      <AnimatePresence>
        {open && (
          <div className="absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3">
            <motion.div
              role="menu"
              aria-label={label}
              className="min-w-[260px] rounded-2xl border border-border/70 bg-background p-2 shadow-[var(--shadow-elegant)]"
              initial={reduced ? false : { opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={reduced ? { opacity: 0 } : { opacity: 0, y: -6, scale: 0.98 }}
              transition={{ duration: DURATION.quick, ease: EASE }}
            >
              {children.map((child) => (
                <Link
                  key={child.to}
                  to={child.to}
                  role="menuitem"
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-2.5 text-sm font-medium text-foreground/85 transition-colors hover:bg-secondary hover:text-primary"
                  activeProps={{ className: "bg-secondary text-primary" }}
                >
                  {child.label}
                </Link>
              ))}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const { t } = useLang();
  const items = navItems(t);
  const reduced = useReducedMotion();

  /**
   * De balk was een vaste plak van 80px die niets deed. Zodra de bezoeker begint
   * te lezen krimpt hij nu naar 64px en wordt de achtergrond dichter — dat geeft
   * de inhoud ruimte en maakt tegelijk voelbaar dát er gescrold is.
   */
  const { scrollY } = useScroll();
  const [condensed, setCondensed] = useState(false);
  useMotionValueEvent(scrollY, "change", (y) => setCondensed(y > 40));

  const shrink = condensed && !reduced;

  // Achtergrond en schaduw lopen via CSS-transities, niet via Motion: die kan
  // color-mix() en var() niet interpoleren en zou de waarde in één klap omzetten.
  // Alleen de hoogte wordt door Motion geanimeerd.
  return (
    <header
      className={`sticky top-0 z-50 border-b border-border/70 backdrop-blur-md transition-[background-color,box-shadow] duration-300 ${
        condensed ? "bg-background/95 shadow-[var(--shadow-soft)]" : "bg-background/85 shadow-none"
      }`}
    >
      <motion.div
        className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
        animate={{ height: shrink ? 64 : 80 }}
        transition={{ duration: DURATION.swap, ease: EASE }}
      >
        <Brand condensed={shrink} />

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Hoofdnavigatie">
          {items.map((item) =>
            "children" in item ? (
              <DesktopDropdown key={item.label} label={item.label} children={item.children} />
            ) : (
              <DesktopLink key={item.to} item={item} />
            ),
          )}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button
            asChild
            className="rounded-full bg-accent px-6 text-accent-foreground hover:bg-accent/90"
          >
            <Link to="/contact">{t.header.cta}</Link>
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-11 w-11"
                aria-label={t.header.openMenu}
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] overflow-y-auto bg-background">
              <div className="mt-2 mb-8">
                <Brand onClick={() => setOpen(false)} />
              </div>
              <nav className="flex flex-col gap-1" aria-label="Mobiele navigatie">
                {items.map((item) =>
                  "children" in item ? (
                    <div key={item.label} className="mt-2">
                      <p className="px-3 pb-1 pt-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        {item.label}
                      </p>
                      {item.children.map((child) => (
                        <SheetClose asChild key={child.to}>
                          <Link
                            to={child.to}
                            className="block rounded-lg px-3 py-2.5 pl-5 text-base font-medium text-foreground/85 transition-colors hover:bg-secondary hover:text-primary"
                            activeProps={{ className: "bg-secondary text-primary" }}
                          >
                            {child.label}
                          </Link>
                        </SheetClose>
                      ))}
                    </div>
                  ) : (
                    <SheetClose asChild key={item.to}>
                      <Link
                        to={item.to}
                        className="rounded-lg px-3 py-3 text-lg font-medium text-foreground/85 transition-colors hover:bg-secondary hover:text-primary"
                        activeProps={{ className: "bg-secondary text-primary" }}
                        activeOptions={{ exact: item.to === "/" }}
                      >
                        {item.label}
                      </Link>
                    </SheetClose>
                  ),
                )}
              </nav>
              <div className="mt-8">
                <SheetClose asChild>
                  <Button
                    asChild
                    className="w-full rounded-full bg-accent text-accent-foreground hover:bg-accent/90"
                  >
                    <Link to="/contact">{t.header.cta}</Link>
                  </Button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </motion.div>
    </header>
  );
}
