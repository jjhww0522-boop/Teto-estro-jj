"use client";

import Link from "next/link";
import { useLocale } from "@/components/LocaleProvider";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { motion } from "framer-motion";

export default function MainChoice() {
  const { t } = useLocale();

  return (
    <main className="min-h-screen bg-brand-cream flex flex-col font-sans relative overflow-hidden pt-12 md:pt-16">
      {/* 우측 상단 언어 설정 */}
      <div className="absolute top-4 right-4 z-20">
        <LanguageSwitcher />
      </div>

      {/* 배경 도트 패턴 */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #2d3436 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* 좌우 이등분 큰 버튼 */}
      <div className="flex-1 flex flex-col md:flex-row z-10">
        {/* 왼쪽: 나의 성향 분석하기 */}
        <Link
          href="/gender-select"
          className="flex-1 flex flex-col items-center justify-center p-5 md:p-12 min-h-[42vh] md:min-h-0 md:border-r border-brand-border/50"
        >
          <motion.div
            className="w-full max-w-md md:aspect-square flex flex-col items-center justify-center rounded-card bg-brand-highlight border-2 border-brand-accent/30 shadow-card hover:shadow-card-hover p-7 md:p-8 text-center"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <span className="text-5xl md:text-6xl mb-4" aria-hidden>🥔</span>
            <h2 className="text-xl md:text-2xl font-black text-brand-charcoal leading-tight mb-2 text-kr-balance">
              {t("home.analyzeSelf")}
            </h2>
            <p className="text-sm text-brand-muted whitespace-nowrap">
              나는 어떤 연애 유형일까? 셀프 진단
            </p>
          </motion.div>
        </Link>

        {/* 오른쪽: 내 애인 분석하기 */}
        <Link
          href="/partner-select"
          className="flex-1 flex flex-col items-center justify-center p-5 md:p-12 min-h-[42vh] md:min-h-0"
        >
          <motion.div
            className="w-full max-w-md md:aspect-square flex flex-col items-center justify-center rounded-card bg-brand-surface border-2 border-brand-border shadow-card hover:shadow-card-hover p-7 md:p-8 text-center"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <span className="text-5xl md:text-6xl mb-4" aria-hidden>💕</span>
            <h2 className="text-xl md:text-2xl font-black text-brand-charcoal leading-tight mb-2 text-kr-balance">
              {t("home.analyzePartner")}
            </h2>
            <p className="text-sm text-brand-muted leading-relaxed">
              연인을 관찰한 답변으로
              <br />
              유형을 분석해요
            </p>
          </motion.div>
        </Link>
      </div>

      {/* 하단 로고/브랜드 */}
      <div className="z-10 py-3 md:py-4 text-center border-t border-brand-border/40">
        <p className="text-xs text-brand-muted font-medium mb-1">Tetolab</p>
        <p className="text-[11px] text-brand-muted/60">심리 유형 분석 · 연인 분석 · AI 타로</p>
      </div>
    </main>
  );
}
