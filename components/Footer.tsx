"use client";

import Link from "next/link";
import { APP_VERSION, LAST_UPDATED } from "@/constants/version";
import { useLocale } from "@/components/LocaleProvider";

export default function Footer() {
  const { t } = useLocale();
  return (
    <footer className="mt-auto w-full bg-brand-surface border-t border-brand-border">
      <div className="max-w-2xl mx-auto px-4 py-8 text-center space-y-4">
        <p className="text-sm text-brand-muted">{t("footer.copyright")}</p>

        <nav className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-sm">
          <Link href="/privacy" className="text-brand-muted hover:text-brand-accent underline underline-offset-2">
            {t("footer.privacy")}
          </Link>
          <span className="text-brand-border">|</span>
          <Link href="/terms" className="text-brand-muted hover:text-brand-accent underline underline-offset-2">
            {t("footer.terms")}
          </Link>
          <span className="text-brand-border">|</span>
          <Link href="/about" className="text-brand-muted hover:text-brand-accent underline underline-offset-2">
            About
          </Link>
          <span className="text-brand-border">|</span>
          <Link href="/blog" className="text-brand-muted hover:text-brand-accent underline underline-offset-2">
            블로그
          </Link>
        </nav>

        <p className="text-xs text-brand-muted leading-relaxed max-w-xl mx-auto pt-2">
          {t("footer.disclaimer")}
        </p>

        <p className="text-[10px] text-brand-muted/60 pt-4">
          v{APP_VERSION} · {t("footer.modified")} {LAST_UPDATED}
        </p>
      </div>
    </footer>
  );
}
