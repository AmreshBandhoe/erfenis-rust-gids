import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { translations, type Lang, type Translations } from "./translations";

interface LangContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Translations;
}

const LangContext = createContext<LangContextValue | null>(null);

function getInitialLang(): Lang {
  return "nl";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(getInitialLang);

  useEffect(() => {
    let stored: string | null = null;
    try {
      stored = window.localStorage.getItem("erfeniswijzer-lang");
    } catch {
      // Some embedded browsers expose localStorage inconsistently during reloads.
    }

    const cookieLang = document.cookie
      .split("; ")
      .find((row) => row.startsWith("erfeniswijzer-lang="))
      ?.split("=")[1];

    const nextLang = stored === "nl" || stored === "en" ? stored : cookieLang;
    if (nextLang === "nl" || nextLang === "en") setLangState(nextLang);
  }, []);

  const setLang = (nextLang: Lang) => {
    setLangState(nextLang);
    if (typeof window !== "undefined") {
      try {
        window.localStorage.setItem("erfeniswijzer-lang", nextLang);
      } catch {
        // Cookie persistence below still keeps the language choice.
      }
      document.cookie = `erfeniswijzer-lang=${nextLang}; path=/; max-age=31536000; samesite=lax`;
      document.documentElement.lang = nextLang;
    }
  };

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const t = translations[lang] ?? translations.nl;

  return <LangContext.Provider value={{ lang, setLang, t }}>{children}</LangContext.Provider>;
}

export function useT() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useT must be used within LanguageProvider");
  return ctx.t;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}
