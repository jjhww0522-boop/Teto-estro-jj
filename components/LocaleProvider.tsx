"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import {
  type Locale,
  loadTranslations,
  setLocaleCookie,
  setLocaleStorage,
  getLocaleFromStorage,
  t as tFn,
  type Translations,
} from "@/lib/i18n";
import koFallback from "@/locales/ko.json";

type LocaleState = {
  locale: Locale;
  translations: Translations;
  setLocale: (locale: Locale) => void;
  t: (key: string, vars?: Record<string, string | number>) => string;
};

const LocaleContext = createContext<LocaleState | null>(null);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("ko");
  const [translations, setTranslations] = useState<Translations>((koFallback as Translations));
  const [ready, setReady] = useState(true);

  const load = useCallback(async (l: Locale) => {
    const tr = await loadTranslations(l);
    setTranslations(tr);
  }, []);

  useEffect(() => {
    const stored = getLocaleFromStorage();
    setLocaleState(stored);
    if (stored !== "ko") {
      setReady(false);
      load(stored).then(() => setReady(true));
    }
  }, [load]);

  const setLocale = useCallback(
    (l: Locale) => {
      setLocaleState(l);
      setLocaleCookie(l);
      setLocaleStorage(l);
      setReady(false);
      load(l).then(() => setReady(true));
    },
    [load]
  );

  const t = useCallback(
    (key: string, vars?: Record<string, string | number>) => {
      const out = tFn(translations, key, vars);
      return out || key;
    },
    [translations]
  );

  return (
    <LocaleContext.Provider value={{ locale, translations, setLocale, t }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale(): LocaleState {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider");
  return ctx;
}
