import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, ChevronDown } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useLang } from "@/lib/i18n";
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

function Brand({ onClick }: { onClick?: () => void }) {
  return (
    <Link
      to="/"
      onClick={onClick}
      className="flex items-center gap-3"
      aria-label="De Erfeniswijzer — naar home"
    >
      <img
        src={logo}
        alt="Logo De Erfeniswijzer"
        className="h-11 w-auto rounded-lg shadow-soft"
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
      className={navLinkClass}
      activeProps={{ className: "text-primary", "data-active": "true" }}
      activeOptions={{ exact: item.to === "/" }}
    >
      {({ isActive }) => (
        <span className="relative inline-block py-1">
          {item.label}
          <span
            className={`absolute -bottom-0.5 left-0 h-0.5 rounded-full bg-accent transition-all duration-300 ${
              isActive ? "w-full" : "w-0"
            }`}
          />
        </span>
      )}
    </Link>
  );
}

function DesktopDropdown({ label, children }: { label: string; children: readonly NavLeaf[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className={`inline-flex items-center gap-1 py-1 ${navLinkClass}`}
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        {label}
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>
      {open && (
        <div className="absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3">
          <div className="min-w-[260px] rounded-2xl border border-border/70 bg-background p-2 shadow-[var(--shadow-elegant)]">
            {children.map((child) => (
              <Link
                key={child.to}
                to={child.to}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-2.5 text-sm font-medium text-foreground/85 transition-colors hover:bg-secondary hover:text-primary"
                activeProps={{ className: "bg-secondary text-primary" }}
              >
                {child.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const { t } = useLang();
  const items = navItems(t);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Brand />

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
          <Button asChild className="rounded-full bg-accent px-6 text-accent-foreground hover:bg-accent/90">
            <Link to="/contact">{t.header.cta}</Link>
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label={t.header.openMenu}>
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
                  <Button asChild className="w-full rounded-full bg-accent text-accent-foreground hover:bg-accent/90">
                    <Link to="/contact">{t.header.cta}</Link>
                  </Button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
