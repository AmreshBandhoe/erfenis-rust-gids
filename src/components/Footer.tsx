import { Link } from "@tanstack/react-router";
import { Mail, Phone, Clock } from "lucide-react";
import { useT } from "@/lib/i18n";
import logo from "@/assets/erfeniswijzer-logo.jpeg";

export function Footer() {
  const t = useT();
  const year = new Date().getFullYear();

  const quickLinks = [
    { label: t.nav.home, to: "/" },
    { label: t.nav.onzeBegeleiding, to: "/bij-leven-regelen" },
    { label: t.nav.kennisbank, to: "/kennisbank" },
    { label: t.nav.onsTeam, to: "/over-ons" },
    { label: t.nav.contact, to: "/contact" },
    { label: t.nav.gratisGids, to: "/gratis-gids" },
    { label: t.check.heroEyebrow, to: "/nalatenschapscheck" },
  ] as const;

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand + tagline */}
          <div>
            <img
              src={logo}
              alt="Logo De Erfeniswijzer"
              className="h-20 w-auto rounded-xl"
            />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-primary-foreground/75">
              {t.footer.tagline}
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h2 className="text-lg font-semibold text-accent">{t.footer.quickLinks}</h2>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-sm text-primary-foreground/80 transition-colors hover:text-accent"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-lg font-semibold text-accent">{t.footer.contactTitle}</h2>
            <ul className="mt-5 space-y-4 text-sm text-primary-foreground/80">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <a href="tel:+31850000000" className="transition-colors hover:text-accent">
                  085 - 000 00 00
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <a href="mailto:info@erfeniswijzer.nl" className="transition-colors hover:text-accent">
                  info@erfeniswijzer.nl
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>{t.footer.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-primary-foreground/15 pt-8 text-xs text-primary-foreground/60 sm:flex-row">
          <p>© {year} {t.footer.copyrightName} {t.footer.copyright}</p>
          <nav className="flex flex-wrap items-center gap-x-5 gap-y-2" aria-label="Juridisch">
            <Link to="/contact" className="transition-colors hover:text-accent">
              {t.footer.privacy}
            </Link>
            <Link to="/contact" className="transition-colors hover:text-accent">
              {t.footer.terms}
            </Link>
            <span className="font-display text-sm tracking-wide text-accent">
              {t.footer.slogan}
            </span>
          </nav>
        </div>
      </div>
    </footer>
  );
}
