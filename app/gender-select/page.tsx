"use client";

import Link from "next/link";
import { useLocale } from "@/components/LocaleProvider";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { motion } from "framer-motion";

export default function GenderSelectPage() {
  const { t } = useLocale();

  return (
    <main className="min-h-screen bg-brand-cream flex flex-col items-center justify-center p-6 font-sans relative">
      <div className="absolute top-4 right-4 z-20">
        <LanguageSwitcher />
      </div>

      <div
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #2d3436 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="z-10 w-full max-w-lg text-center space-y-10">
        <h1 className="text-2xl md:text-3xl font-black text-brand-charcoal">
          {t("genderSelect.title")}
        </h1>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link href="/test?mode=boyfriend&isSelf=1" className="w-full sm:flex-1 max-w-xs">
            <motion.button
              type="button"
              className="w-full py-8 px-6 rounded-card bg-brand-surface border-2 border-brand-border shadow-card hover:shadow-card-hover font-black text-xl text-brand-charcoal"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <span className="block text-4xl mb-2">🐻</span>
              {t("genderSelect.male")}
            </motion.button>
          </Link>
          <Link href="/test?mode=girlfriend&isSelf=1" className="w-full sm:flex-1 max-w-xs">
            <motion.button
              type="button"
              className="w-full py-8 px-6 rounded-card bg-brand-highlight border-2 border-brand-accent/30 shadow-card hover:shadow-card-hover font-black text-xl text-brand-charcoal"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <span className="block text-4xl mb-2">🐰</span>
              {t("genderSelect.female")}
            </motion.button>
          </Link>
        </div>

        <p className="text-sm text-brand-muted">
          선택하시면 나의 연애 유형 질문이 시작돼요
        </p>
      </div>
    </main>
  );
}
