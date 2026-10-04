import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { motion, useReducedMotion } from "motion/react";
import { useEffect, useState, type ReactNode } from "react";

import { DURATION, EASE } from "@/lib/motion";

import appCss from "../styles.css?url";
import ogImage from "@/assets/home-hero.jpg";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileContactBar } from "@/components/MobileContactBar";
import { Toaster } from "@/components/ui/sonner";
import { LanguageProvider } from "@/lib/i18n";
import { getMaintenanceSnapshot } from "@/lib/api/admin.functions";

const brandButton =
  "inline-flex items-center justify-center rounded-full bg-accent px-7 py-3 text-base font-medium text-accent-foreground shadow-lg transition-colors hover:bg-accent/90";
const brandButtonQuiet =
  "inline-flex items-center justify-center rounded-full border border-primary/30 px-7 py-3 text-base font-medium text-primary transition-colors hover:bg-secondary";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-background px-4 py-24">
      <div className="max-w-lg text-center">
        <p className="font-display text-7xl text-accent-ink">404</p>
        <h1 className="mt-4 text-3xl text-primary sm:text-4xl">Deze pagina bestaat niet</h1>
        <p className="mx-auto mt-4 max-w-md text-lg leading-relaxed text-muted-foreground">
          De pagina die u zoekt is verplaatst of bestaat niet meer. Vanaf de homepage vindt u alles
          terug — en anders helpen wij u graag persoonlijk verder.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link to="/" className={brandButton}>
            Terug naar home
          </Link>
          <Link to="/contact" className={brandButtonQuiet}>
            Neem contact op
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-background px-4 py-24">
      <div className="max-w-lg text-center">
        <h1 className="text-3xl text-primary sm:text-4xl">Deze pagina laadde niet</h1>
        <p className="mx-auto mt-4 max-w-md text-lg leading-relaxed text-muted-foreground">
          Er ging iets mis aan onze kant. Probeert u het opnieuw, of ga terug naar de homepage.
          Blijft het misgaan? Neem gerust even contact met ons op.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className={brandButton}
          >
            Opnieuw proberen
          </button>
          <a href="/" className={brandButtonQuiet}>
            Terug naar home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "De Erfeniswijzer — Uw gids bij nalatenschap en erfenis" },
      {
        name: "description",
        content:
          "Persoonlijke en deskundige begeleiding bij nalatenschap en erfenis. Van regelen bij leven tot afwikkeling na overlijden.",
      },
      { name: "author", content: "De Erfeniswijzer" },
      { property: "og:title", content: "De Erfeniswijzer — Uw gids bij nalatenschap en erfenis" },
      {
        property: "og:description",
        content:
          "Persoonlijke en deskundige begeleiding bij nalatenschap en erfenis. Warmte, rust en duidelijkheid rond een gevoelig onderwerp.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "De Erfeniswijzer — Uw gids bij nalatenschap en erfenis" },
      {
        name: "twitter:description",
        content:
          "Persoonlijke en deskundige begeleiding bij nalatenschap en erfenis. Warmte, rust en duidelijkheid rond een gevoelig onderwerp.",
      },
      { property: "og:locale", content: "nl_NL" },
      { property: "og:site_name", content: "De Erfeniswijzer" },
      { property: "og:image", content: ogImage },
      { name: "twitter:image", content: ogImage },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Karla:wght@400;500;600;700&display=swap",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  loader: () => getMaintenanceSnapshot(),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="nl">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

/**
 * Animeer alleen het verschijnen van de nieuwe pagina. Outlet wisselt zijn inhoud
 * direct bij navigatie; een wachtende exit-animatie kan daardoor de nieuwe inhoud
 * vasthouden in een onzichtbare wrapper, vooral bij geneste AnimatePresence-lijsten.
 */
function RouteFade({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const reduced = useReducedMotion();

  if (reduced) return <>{children}</>;

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: DURATION.swap, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Bij navigatie binnen de app verwisselt alleen de inhoud van <main>; een
 * schermlezer merkt daar niets van en blijft de oude paginatitel melden. Deze
 * onzichtbare regio leest de nieuwe titel voor zodra de route is gewisseld.
 */
function RouteAnnouncer() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Een tik wachten: de nieuwe route zet document.title pas na deze render.
    const id = window.setTimeout(() => setMessage(document.title), 200);
    return () => window.clearTimeout(id);
  }, [pathname]);

  return (
    <div aria-live="polite" aria-atomic="true" className="sr-only">
      {message}
    </div>
  );
}

function MaintenancePage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-primary px-4 py-20 text-primary-foreground">
      <div className="max-w-xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
          De Erfeniswijzer
        </p>
        <h1 className="mt-5 text-4xl leading-tight text-primary-foreground sm:text-5xl">
          De website is tijdelijk in onderhoud
        </h1>
        <p className="mx-auto mt-6 max-w-md text-lg leading-relaxed text-primary-foreground/80">
          We zijn bezig met een korte update. Probeert u het later opnieuw, of neem rechtstreeks
          contact op via info@erfeniswijzer.nl.
        </p>
      </div>
    </div>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const maintenance = Route.useLoaderData();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const showMaintenance = maintenance.enabled && pathname !== "/admin";

  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        {showMaintenance ? (
          <MaintenancePage />
        ) : (
          <>
            <a
              href="#main"
              className="sr-only rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100]"
            >
              Naar de inhoud
            </a>
            <div className="flex min-h-screen flex-col">
              <Header />
              {/* tabIndex maakt <main> een geldig doel voor de skiplink hierboven. */}
              <main id="main" tabIndex={-1} className="flex-1 outline-none">
                {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
                <RouteFade>
                  <Outlet />
                </RouteFade>
              </main>
              <Footer />
            </div>
            <MobileContactBar />
            <RouteAnnouncer />
          </>
        )}
        <Toaster position="top-center" richColors />
      </LanguageProvider>
    </QueryClientProvider>
  );
}
