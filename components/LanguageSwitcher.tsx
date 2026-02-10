"use client";

import { useState, useRef, useEffect } from "react";
import { useLocale } from "@/components/LocaleProvider";
import { type Locale, LOCALE_LABELS } from "@/lib/i18n";

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLocale();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const locales: Locale[] = ["ko", "en", "ja", "zh"];

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-1.5 px-3 py-2 rounded-button border border-brand-border bg-brand-surface text-brand-charcoal text-sm font-medium hover:bg-brand-highlight hover:border-brand-accent/30 transition-colors"
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label="Select language"
      >
        <span className="text-xs font-semibold text-brand-muted">Lang</span>
        <span>{LOCALE_LABELS[locale]}</span>
        <span
          className={`inline-block transition-transform text-brand-muted ${open ? "rotate-180" : ""}`}
          aria-hidden
        >
          ▼
        </span>
      </button>
      {open && (
        <ul
          role="listbox"
          className="absolute right-0 top-full mt-1 py-1 w-40 rounded-button border border-brand-border bg-brand-surface shadow-card z-50"
        >
          {locales.map((l) => (
            <li key={l} role="option" aria-selected={locale === l}>
              <button
                type="button"
                onClick={() => {
                  setLocale(l);
                  setOpen(false);
                }}
                className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${
                  locale === l
                    ? "bg-brand-accent/10 text-brand-accent font-medium"
                    : "text-brand-charcoal hover:bg-brand-highlight"
                }`}
              >
                {LOCALE_LABELS[l]}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
