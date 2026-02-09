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
    <main className="min-h-screen bg-[#FDFCF7] flex flex-col items-center justify-center p-6 font-sans relative">
      {/* 우측 상단 언어 설정 */}
      <div className="absolute top-4 right-4 z-20">
        <LanguageSwitcher />
      </div>

      {/* 연구소 배경 효과 (grid 패턴) */}
      <div
        className="absolute inset-0 z-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#4B2C20 1px, transparent 1px), linear-gradient(90deg, #4B2C20 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="z-10 w-full max-w-[480px] bg-white rounded-[40px] shadow-2xl overflow-hidden border-4 border-purple-100 flex flex-col items-center p-10 text-center">
        {/* 상단 실험 아이콘 섹션 */}
        <div className="relative mb-8">
          <div className="text-6xl animate-bounce">⚗️</div>
          <div className="absolute -top-2 -right-4 text-4xl">🧪</div>
          <div className="absolute -bottom-2 -left-4 text-3xl">🔍</div>
        </div>

        {/* 메인 타이틀 (titleHighlight 부분만 보라색) */}
        <h1 className="text-[28px] font-black text-gray-800 leading-tight mb-2">
          {(() => {
            const title = t("home.title");
            const highlight = t("home.titleHighlight");
            const i = title.indexOf(highlight);
            if (i >= 0) {
              return (
                <>
                  {title.slice(0, i)}
                  <span className="text-purple-600">{highlight}</span>
                  {title.slice(i + highlight.length)}
                </>
              );
            }
            return title;
          })()}
        </h1>
        <p className="text-purple-400 font-bold text-lg mb-6">{t("home.subtitle")}</p>

        {/* 상세 설명 리스트 */}
        <div className="bg-purple-50 rounded-2xl p-5 mb-8 w-full text-sm text-gray-600 space-y-2 text-kr-wrap">
          <p>{t("home.bullet1")}</p>
          <p>{t("home.bullet2")}</p>
          <p className="font-bold text-purple-700 underline underline-offset-4">
            {t("home.bullet3")}
          </p>
        </div>

        {/* 캐릭터 라벨 */}
        <div className="text-[10px] text-gray-300 tracking-widest mb-6">
          {t("home.characters")}
        </div>

        {/* 분석 모드 선택: 남친 vs 여친 */}
        <div className="w-full space-y-3 mb-6">
          <Link href="/test?mode=boyfriend" className="block w-full">
            <button
              type="button"
              className="w-full py-5 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-black text-xl shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              {t("home.analyzeBoyfriend")} ⚗️
            </button>
          </Link>
          <Link href="/test?mode=girlfriend" className="block w-full">
            <button
              type="button"
              className="w-full py-5 bg-white border-2 border-purple-300 text-purple-700 rounded-full font-black text-xl shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              {t("home.analyzeGirlfriend")} 🧪
            </button>
          </Link>
        </div>

        {/* 하단 통계 정보 */}
        <div className="text-xs text-gray-400 flex flex-col gap-1">
          <span>{t("home.statsTime")}</span>
          <span className="text-purple-300 font-mono mt-2">
            {t("home.statsCount", { count: formatCount(analysisCount, locale) })}
          </span>
        </div>
      </div>

      <ResearchReport />
      <ResearchReportInvisibleHand />

      {/* 푸터 */}
      <footer className="mt-10 text-[10px] text-gray-400 space-x-4">
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
