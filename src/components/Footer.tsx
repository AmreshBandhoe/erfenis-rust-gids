import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import { navItems } from "@/components/Header";
import logoAsset from "@/assets/erfeniswijzer-logo.jpeg.asset.json";

const quickLinks = [
  ...navItems,
  { label: "Gratis gids", to: "/gratis-gids" },
] as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand + missie */}
          <div>
            <img
              src={logoAsset.url}
              alt="Logo De Erfeniswijzer"
              className="h-20 w-auto rounded-xl"
            />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-primary-foreground/75">
              Uw gids bij nalatenschap en erfenis. Wij combineren juridische
              expertise met menselijke warmte, zodat nalatenschap een laatste
              daad van liefde en zorg kan zijn.
            </p>
          </div>

          {/* Snelle links */}
          <div>
            <h2 className="text-lg font-semibold text-accent">Snelle links</h2>
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
            <h2 className="text-lg font-semibold text-accent">Contact</h2>
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
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>Nederland · op afspraak bij u thuis</span>
              </li>
            </ul>
            <p className="mt-5 text-xs text-primary-foreground/55">KvK 00000000</p>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="mt-14 max-w-3xl text-xs leading-relaxed text-primary-foreground/45">
          Disclaimer: de informatie op deze website is met zorg samengesteld en
          uitsluitend bedoeld als algemene voorlichting. Aan de inhoud kunnen geen
          rechten worden ontleend. Voor advies op maat plannen wij graag een
          persoonlijk gesprek.
        </p>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-primary-foreground/15 pt-8 text-xs text-primary-foreground/60 sm:flex-row">
          <p>© {year} De Erfeniswijzer. Alle rechten voorbehouden.</p>
          <nav className="flex flex-wrap items-center gap-x-5 gap-y-2" aria-label="Juridisch">
            <Link to="/contact" className="transition-colors hover:text-accent">
              Privacybeleid
            </Link>
            <Link to="/contact" className="transition-colors hover:text-accent">
              Algemene voorwaarden
            </Link>
            <span className="font-display text-sm tracking-wide text-accent">
              Uw gids bij nalatenschap en erfenis
            </span>
          </nav>
        </div>
      </div>
    </footer>
  );
}
