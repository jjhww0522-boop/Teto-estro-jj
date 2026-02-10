"use client";

import Link from "next/link";
import { useLocale } from "@/components/LocaleProvider";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import ResearchReport from "@/components/ResearchReport";
import ResearchReportInvisibleHand from "@/components/ResearchReportInvisibleHand";

function formatCount(n: number, locale: string) {
  try {
    return n.toLocaleString(locale === "ko" ? "ko-KR" : locale === "ja" ? "ja-JP" : locale === "zh" ? "zh-CN" : "en-US");
  } catch {
    return String(n);
  }
}

export default function HomeContent({ analysisCount }: { analysisCount: number }) {
  const { t, locale } = useLocale();

  return (
    <main className="min-h-screen bg-brand-cream flex flex-col items-center justify-center p-6 font-sans relative">
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

      <div className="z-10 w-full max-w-[480px] bg-brand-surface rounded-card shadow-card overflow-hidden border border-brand-border flex flex-col items-center p-10 text-center">
        {/* 상단 아이콘 섹션 */}
        <div className="relative mb-8 flex items-center gap-3">
          <span className="text-lg">⚗️</span>
          <span className="theory-badge">Personality Lab</span>
        </div>

        {/* 메인 타이틀 */}
        <h1 className="text-[28px] font-black text-brand-charcoal leading-tight mb-2">
          {(() => {
            const title = t("home.title");
            const highlight = t("home.titleHighlight");
            const i = title.indexOf(highlight);
            if (i >= 0) {
              return (
                <>
                  {title.slice(0, i)}
                  <span className="text-brand-accent">{highlight}</span>
                  {title.slice(i + highlight.length)}
                </>
              );
            }
            return title;
          })()}
        </h1>
        <p className="text-brand-muted font-bold text-lg mb-6">{t("home.subtitle")}</p>

        {/* 상세 설명 리스트 */}
        <div className="bg-brand-highlight rounded-button p-5 mb-8 w-full text-sm text-brand-muted space-y-2 text-kr-wrap border border-brand-border">
          <p>{t("home.bullet1")}</p>
          <p>{t("home.bullet2")}</p>
          <p className="font-bold text-brand-accent underline underline-offset-4">
            {t("home.bullet3")}
          </p>
        </div>

        {/* 캐릭터 라벨 */}
        <div className="text-[10px] text-brand-muted/50 tracking-widest mb-6">
          {t("home.characters")}
        </div>

        {/* 분석 모드 선택: 남친 vs 여친 */}
        <div className="w-full space-y-3 mb-6">
          <Link href="/test?mode=boyfriend" className="block w-full">
            <button
              type="button"
              className="w-full py-5 bg-brand-accent text-white rounded-button font-black text-xl shadow-button hover:shadow-card-hover hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              {t("home.analyzeBoyfriend")}
            </button>
          </Link>
          <Link href="/test?mode=girlfriend" className="block w-full">
            <button
              type="button"
              className="w-full py-5 bg-brand-surface border border-brand-border text-brand-accent rounded-button font-black text-xl shadow-button hover:shadow-card-hover hover:bg-brand-highlight hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              {t("home.analyzeGirlfriend")}
            </button>
          </Link>
        </div>

        {/* 하단 통계 바 */}
        <div className="w-full bg-brand-highlight rounded-button border border-brand-border p-3 flex items-center justify-between text-sm">
          <span className="text-brand-muted">{t("home.statsTime")}</span>
          <span className="text-brand-accent font-semibold tabular-nums">
            {t("home.statsCount", { count: formatCount(analysisCount, locale) })}
          </span>
        </div>
      </div>

      <ResearchReport />
      <ResearchReportInvisibleHand />

      {/* 푸터 */}
      <footer className="mt-10 text-[10px] text-brand-muted space-x-4">
        <Link href="/privacy" className="hover:underline">
          {t("footer.privacy")}
        </Link>
        <Link href="/terms" className="hover:underline">
          {t("footer.terms")}
        </Link>
      </footer>
    </main>
  );
}
