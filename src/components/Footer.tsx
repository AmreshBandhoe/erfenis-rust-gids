import { Link } from "@tanstack/react-router";
import { Mail, Phone, Clock } from "lucide-react";
import { useT } from "@/lib/i18n";
import { EMAIL, EMAIL_HREF, PHONE_DISPLAY, PHONE_HREF, PHONE_IS_PLACEHOLDER } from "@/lib/contact";
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
    <footer className="on-dark bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 pb-28 pt-16 sm:px-6 lg:px-8 lg:pb-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand + tagline */}
          <div>
            <img src={logo} alt="Logo De Erfeniswijzer" className="h-20 w-auto rounded-xl" />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-primary-foreground/75">
              {t.footer.tagline}
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h2 className="text-lg font-semibold text-accent">{t.footer.quickLinks}</h2>
            <ul className="mt-5 space-y-1.5">
              {quickLinks.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="inline-block py-1 text-sm text-primary-foreground/80 transition-colors hover:text-accent"
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
              {!PHONE_IS_PLACEHOLDER && (
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <a
                    href={PHONE_HREF}
                    className="inline-block py-1 transition-colors hover:text-accent"
                  >
                    {PHONE_DISPLAY}
                  </a>
                </li>
              )}
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <a
                  href={EMAIL_HREF}
                  className="inline-block py-1 transition-colors hover:text-accent"
                >
                  {EMAIL}
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
          <p>
            © {year} {t.footer.copyrightName} {t.footer.copyright}
          </p>
          <nav className="flex flex-wrap items-center gap-x-5 gap-y-2" aria-label="Juridisch">
            <Link to="/contact" className="inline-block py-1 transition-colors hover:text-accent">
              {t.footer.privacy}
            </Link>
            <Link to="/contact" className="inline-block py-1 transition-colors hover:text-accent">
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
