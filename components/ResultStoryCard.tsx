"use client";

import type { ResultType } from "@/data/results";
import { getConcentrationPercent } from "@/utils/concentration";
import { useLocale } from "@/components/LocaleProvider";

const CARD_WIDTH = 360;
const CARD_HEIGHT = 640;

interface ResultStoryCardProps {
  result: ResultType;
  resultSlug?: string;
  isSelf?: boolean;
}

function toPartnerMatchNames(names: string[], resultSlug?: string): string[] {
  if (!resultSlug) return names;
  const isFemaleResult = resultSlug.endsWith("_f");
  return names.map((name) =>
    isFemaleResult ? name.replace(/(여|녀)$/, "남") : name.replace(/남$/, "녀")
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
  const goodOne = goodMatches[0] ?? "-";
  const badOne = badMatches[0] ?? "-";
  const topKeywords = result.keywords.slice(0, 3);

  const reportTitleKey = isSelf ? "result.storyReportTitleSelf" : "result.storyReportTitle";
  const resultTitleKey = isSelf ? "result.storyMyPartnerResultSelf" : "result.storyMyPartnerResult";

  return (
    <div
      id="result-story-card"
      className="relative rounded-card overflow-hidden flex flex-col text-brand-charcoal shadow-card border border-brand-border"
      style={{
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        minWidth: CARD_WIDTH,
        minHeight: CARD_HEIGHT,
        background:
          "radial-gradient(120% 80% at 10% 0%, rgba(255, 146, 101, 0.26), transparent 52%), radial-gradient(110% 80% at 92% 10%, rgba(255, 221, 87, 0.24), transparent 48%), linear-gradient(170deg, #fffaf3 0%, #fff 40%, #fff5ea 100%)",
        boxSizing: "border-box",
      }}
    >
      <div
        aria-hidden="true"
        className="absolute -top-8 -left-8 w-28 h-28 rounded-full"
        style={{ background: "rgba(255, 120, 64, 0.15)", filter: "blur(2px)" }}
      />
      <div
        aria-hidden="true"
        className="absolute -right-10 top-36 w-32 h-32 rounded-full"
        style={{ background: "rgba(255, 201, 60, 0.18)", filter: "blur(3px)" }}
      />

      <div className="relative z-10 flex justify-between items-center gap-2 px-4 pt-4 pb-2">
        <p className="text-[11px] font-black text-brand-charcoal tracking-wide uppercase max-w-[220px] truncate">
          {t(reportTitleKey)}
        </p>
        <p
          className="text-[10px] font-mono text-brand-muted px-2 py-1 rounded-full border"
          style={{ borderColor: "rgba(34,34,34,0.12)", background: "rgba(255,255,255,0.6)" }}
        >
          {serial}
        </p>
      </div>

      <div className="relative z-10 px-4 pt-2 pb-2 text-center">
        <h2 className="text-sm font-bold text-brand-muted leading-tight tracking-wide">
          {t(resultTitleKey)}
        </h2>
      </div>

      <div className="relative z-10 px-5 pt-1 pb-3">
        <div
          className="rounded-[24px] border px-4 pt-5 pb-4 text-center"
          style={{
            background: "linear-gradient(145deg, rgba(255,255,255,0.95), rgba(255,249,242,0.9))",
            borderColor: "rgba(255, 133, 71, 0.25)",
            boxShadow: "0 10px 26px rgba(255, 133, 71, 0.14)",
          }}
        >
          <div
            className="w-20 h-20 mx-auto rounded-[20px] flex items-center justify-center text-5xl mb-2"
            style={{
              background: "linear-gradient(145deg, #fff, #ffe7d9)",
              border: "1px solid rgba(255, 133, 71, 0.3)",
            }}
          >
            {result.emoji}
          </div>
          <p className="text-xl font-black text-brand-charcoal leading-tight">{result.type}</p>
          <p className="text-[12px] text-brand-muted mb-3 text-kr-balance leading-snug max-h-[2.1rem] overflow-hidden">
            {result.title}
          </p>

          <div className="w-full mb-2">
            <div className="h-3 rounded-full overflow-hidden" style={{ background: "rgba(0,0,0,0.08)" }}>
              <div
                className="h-full rounded-full"
                style={{
                  width: `${percent}%`,
                  background: "linear-gradient(90deg, #ff7a3d 0%, #ffb347 55%, #ffd95a 100%)",
                }}
              />
            </div>
          </div>
          <p className="text-sm font-black text-brand-charcoal">
            {t("result.storyConcentration")} {percent}%
          </p>
          <p className="text-[11px] text-brand-muted mt-1 text-kr-balance max-h-[2rem] overflow-hidden">
            &ldquo;{result.tagline}&rdquo;
          </p>
        </div>
      </div>

      <div className="relative z-10 px-5 pb-2">
        <p className="text-[12px] text-brand-charcoal leading-relaxed text-kr-balance max-h-[2.2rem] overflow-hidden">
          {result.oneLiner}
        </p>
      </div>

      <div
        className="mt-auto relative z-10 px-4 pb-4 pt-3 space-y-2"
        style={{
          borderTop: "1px solid rgba(0,0,0,0.08)",
          background: "linear-gradient(180deg, rgba(255,255,255,0.55), rgba(255,255,255,0.92))",
        }}
      >
        <div className="flex flex-wrap gap-1.5 justify-center">
          {topKeywords.map((k, i) => (
            <span
              key={i}
              className="text-[10px] font-bold px-2 py-1 rounded-full max-w-[100px] truncate"
              style={{ background: "rgba(255, 133, 71, 0.14)", color: "#b5451f" }}
            >
              #{k}
            </span>
          ))}
        </div>
        <div className="text-[10px] text-brand-muted grid grid-cols-2 gap-2 px-1">
          <span className="truncate">
            {t("result.storyBestHelper")}: {goodOne}
          </span>
          <span className="truncate text-right">
            {t("result.storyCaution")}: {badOne}
          </span>
        </div>
        <div
          className="rounded-[14px] px-3 py-2 flex items-center justify-between"
          style={{ background: "linear-gradient(90deg, #ff7a3d, #ffb347)" }}
        >
          <span className="text-[10px] font-black text-white max-w-[210px] truncate">{t("result.tryTest")}</span>
          <span className="text-[10px] font-semibold text-white/90">tetolab.com</span>
        </div>
      </div>
    </div>
  );
}
