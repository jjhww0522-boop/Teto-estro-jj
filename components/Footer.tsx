"use client";

import Link from "next/link";
import { APP_VERSION, LAST_UPDATED } from "@/constants/version";
import { useLocale } from "@/components/LocaleProvider";

export default function Footer() {
  const { t } = useLocale();
  return (
    <footer className="mt-auto w-full bg-white/60 backdrop-blur-sm border-t border-gray-200/80">
      <div className="max-w-2xl mx-auto px-4 py-8 text-center space-y-4">
        <p className="text-sm text-gray-600">{t("footer.copyright")}</p>

        <nav className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-sm">
          <Link href="/privacy" className="text-gray-600 hover:text-pink-500 underline underline-offset-2">
            {t("footer.privacy")}
          </Link>
          <span className="text-gray-300">|</span>
          <Link href="/terms" className="text-gray-600 hover:text-pink-500 underline underline-offset-2">
            {t("footer.terms")}
          </Link>
        </nav>

        <p className="text-xs text-gray-500 leading-relaxed max-w-xl mx-auto pt-2">
          {t("footer.disclaimer")}
        </p>

        <p className="text-[10px] text-gray-400 pt-4">
          v{APP_VERSION} · {t("footer.modified")} {LAST_UPDATED}
        </p>
      </div>
    </footer>
  );
}
