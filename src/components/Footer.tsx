import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import { navItems } from "@/components/Header";
import logoAsset from "@/assets/erfeniswijzer-logo.jpeg.asset.json";

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

          {/* Navigatie */}
          <div>
            <h2 className="text-lg font-semibold text-accent">Navigatie</h2>
            <ul className="mt-5 space-y-3">
              {navItems.map((item) => (
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
                <span>085 - 000 00 00</span>
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

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-primary-foreground/15 pt-8 text-xs text-primary-foreground/60 sm:flex-row">
          <p>© {year} De Erfeniswijzer. Alle rechten voorbehouden.</p>
          <p className="font-display text-sm tracking-wide text-accent">
            Uw gids bij nalatenschap en erfenis
          </p>
        </div>
      </div>
    </footer>
  );
}
