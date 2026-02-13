"use client";

import type { ResultType } from "@/data/results";
import { getConcentrationPercent } from "@/utils/concentration";
import { useLocale } from "@/components/LocaleProvider";

/** 인스타 스토리용 9:16 카드 (360×640 기준, 캡처 시 scale 3 → 1080×1920) */
const CARD_WIDTH = 360;
const CARD_HEIGHT = 640;

interface ResultStoryCardProps {
  result: ResultType;
  resultSlug?: string;
  /** 셀프 진단 결과일 때 카드 문구를 "나의 ~"로 표시 */
  isSelf?: boolean;
}

function toPartnerMatchNames(names: string[], resultSlug?: string): string[] {
  if (!resultSlug) return names;
  const isFemaleResult = resultSlug.endsWith("_f");
  return names.map((name) =>
    isFemaleResult ? name.replace(/녀$/, "남") : name.replace(/남$/, "녀")
  );
}

function getSerialNumber() {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, "0");
  const d = String(now.getDate()).padStart(2, "0");
  return `No. ${y}-${m}${d}`;
}

export default function ResultStoryCard({ result, resultSlug, isSelf }: ResultStoryCardProps) {
  const { t } = useLocale();
  const serial = getSerialNumber();
  const percent = getConcentrationPercent(resultSlug ?? result.type);
  const goodMatches = toPartnerMatchNames(result.goodMatch, resultSlug);
  const badMatches = toPartnerMatchNames(result.badMatch, resultSlug);
  const goodOne = goodMatches[0] ?? "—";
  const badOne = badMatches[0] ?? "—";

  const reportTitleKey = isSelf ? "result.storyReportTitleSelf" : "result.storyReportTitle";
  const resultTitleKey = isSelf ? "result.storyMyPartnerResultSelf" : "result.storyMyPartnerResult";

  return (
    <div
      id="result-story-card"
      className="rounded-card overflow-hidden flex flex-col text-brand-charcoal shadow-card border border-brand-border"
      style={{
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        minWidth: CARD_WIDTH,
        minHeight: CARD_HEIGHT,
        background: "linear-gradient(180deg, #fafaf8 0%, #ffffff 100%)",
        boxSizing: "border-box",
      }}
    >
      {/* 상단: 브랜드 + 일련번호 */}
      <div
        className="flex justify-between items-start px-4 pt-4 pb-1"
        style={{ borderBottom: "2px dashed rgba(108, 92, 231, 0.2)" }}
      >
        <p className="text-xs font-bold text-brand-accent tracking-wide opacity-90">
          {t(reportTitleKey)}
        </p>
        <p className="text-xs font-mono text-brand-muted">{serial}</p>
      </div>

      {/* 중앙 상단: 분석 대상 */}
      <div className="px-4 pt-4 pb-2 text-center">
        <h2 className="text-base font-black text-brand-charcoal leading-tight">
          {t(resultTitleKey)}
        </h2>
      </div>

      {/* Hero: 캐릭터 + 농도 게이지 + 한 줄 */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-4">
        <div className="w-16 h-16 bg-brand-highlight border border-brand-border rounded-card flex items-center justify-center text-4xl mb-2">
          {result.emoji}
        </div>
        <p className="text-sm font-black text-brand-charcoal text-center mb-1 leading-tight">
          {result.type}
        </p>
        <p className="text-[11px] text-brand-muted text-center mb-3" style={{ letterSpacing: "-0.03em" }}>
          {result.title}
        </p>
        <div
          className="relative w-28 h-28 rounded-full flex items-center justify-center mb-3"
          style={{
            background: `conic-gradient(#6c5ce7 0% ${percent}%, #e0e0e0 ${percent}% 100%)`,
            boxShadow: "inset 0 0 0 6px #fafaf8",
          }}
        >
          <div
            className="absolute inset-2 rounded-full bg-brand-surface flex items-center justify-center"
            style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}
          >
            <span className="text-xl font-black text-brand-accent">{percent}%</span>
          </div>
        </div>
        <p className="text-sm font-bold text-brand-accent text-center mb-1">
          {t("result.storyConcentration")} {percent}%
        </p>
        <p className="text-xs text-brand-muted text-center leading-snug max-w-[280px] text-kr-balance" style={{ letterSpacing: "-0.03em" }}>
          &ldquo;{result.tagline}&rdquo;
        </p>
      </div>

      {/* 하단: 요약 + 해시태그 + 궁합 + CTA + QR */}
      <div
        className="px-4 pb-4 pt-3 space-y-2"
        style={{
          borderTop: "2px dashed rgba(108, 92, 231, 0.2)",
          background: "rgba(255,255,255,0.5)",
        }}
      >
        <p className="text-xs text-brand-charcoal leading-relaxed line-clamp-2 text-kr-balance" style={{ letterSpacing: "-0.03em" }}>
          {result.oneLiner}
        </p>
        <div className="flex flex-wrap gap-1">
          {result.keywords.slice(0, 4).map((k, i) => (
            <span key={i} className="text-[10px] text-brand-accent font-medium">
              #{k}
            </span>
          ))}
        </div>
        <div className="text-[10px] text-brand-muted flex flex-wrap gap-x-2">
          <span>{t("result.storyBestHelper")}: {goodOne}</span>
          <span>|</span>
          <span>{t("result.storyCaution")}: {badOne}</span>
        </div>
        <p className="text-[10px] text-brand-accent font-bold text-center pt-2 tracking-wide">
          tetolab.com
        </p>
      </div>
    </div>
  );
}
