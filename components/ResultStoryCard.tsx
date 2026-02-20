"use client";

import { useEffect, useState } from "react";
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

function truncateText(value: string, max: number): string {
  if (!value) return "";
  return value.length > max ? `${value.slice(0, max)}...` : value;
}

function truncateNatural(value: string, max: number): string {
  if (!value) return "";
  const normalized = value.replace(/\s+/g, " ").trim();
  if (normalized.length <= max) return normalized;
  const edge = Math.max(0, max - 6);
  const cut = normalized.lastIndexOf(" ", edge);
  const idx = cut > 0 ? cut : max;
  return `${normalized.slice(0, idx).trim()}...`;
}

function firstSentence(value: string): string {
  if (!value) return "";
  const normalized = value.replace(/\s+/g, " ").trim();
  const parts = normalized.split(/(?<=[.!?。！？])/);
  return parts[0]?.trim() || normalized;
}

function renderEmojiSprite(emoji: string): string | null {
  if (typeof document === "undefined") return null;

  const size = 160;
  const workSize = 320;
  const fontSize = 220;

  const work = document.createElement("canvas");
  work.width = workSize;
  work.height = workSize;
  const workCtx = work.getContext("2d", { willReadFrequently: true });
  if (!workCtx) return null;

  workCtx.clearRect(0, 0, workSize, workSize);
  workCtx.font = `${fontSize}px "Apple Color Emoji", "Segoe UI Emoji", "Noto Color Emoji", sans-serif`;
  workCtx.textAlign = "center";
  workCtx.textBaseline = "middle";
  workCtx.fillText(emoji, workSize / 2, workSize / 2);

  const imageData = workCtx.getImageData(0, 0, workSize, workSize).data;
  let minX = workSize;
  let minY = workSize;
  let maxX = -1;
  let maxY = -1;

  for (let y = 0; y < workSize; y++) {
    for (let x = 0; x < workSize; x++) {
      const alpha = imageData[(y * workSize + x) * 4 + 3];
      if (alpha > 10) {
        if (x < minX) minX = x;
        if (y < minY) minY = y;
        if (x > maxX) maxX = x;
        if (y > maxY) maxY = y;
      }
    }
  }

  if (maxX < minX || maxY < minY) return null;

  const glyphWidth = maxX - minX + 1;
  const glyphHeight = maxY - minY + 1;
  const scale = Math.min((size * 0.88) / glyphWidth, (size * 0.88) / glyphHeight);
  const drawW = glyphWidth * scale;
  const drawH = glyphHeight * scale;
  const dx = (size - drawW) / 2;
  const dy = (size - drawH) / 2;

  const out = document.createElement("canvas");
  out.width = size;
  out.height = size;
  const outCtx = out.getContext("2d");
  if (!outCtx) return null;
  outCtx.clearRect(0, 0, size, size);
  outCtx.drawImage(work, minX, minY, glyphWidth, glyphHeight, dx, dy, drawW, drawH);

  return out.toDataURL("image/png");
}

function renderTextSprite(text: string, color: string): string | null {
  if (typeof document === "undefined") return null;

  const outW = 220;
  const outH = 48;
  const workW = 440;
  const workH = 120;
  const fontSize = 60;

  const work = document.createElement("canvas");
  work.width = workW;
  work.height = workH;
  const workCtx = work.getContext("2d", { willReadFrequently: true });
  if (!workCtx) return null;

  workCtx.clearRect(0, 0, workW, workH);
  workCtx.fillStyle = color;
  workCtx.font = `700 ${fontSize}px "Pretendard", "Apple SD Gothic Neo", "Malgun Gothic", sans-serif`;
  workCtx.textAlign = "center";
  workCtx.textBaseline = "middle";
  workCtx.fillText(text, workW / 2, workH / 2);

  const pixels = workCtx.getImageData(0, 0, workW, workH).data;
  let minX = workW;
  let minY = workH;
  let maxX = -1;
  let maxY = -1;
  for (let y = 0; y < workH; y++) {
    for (let x = 0; x < workW; x++) {
      const alpha = pixels[(y * workW + x) * 4 + 3];
      if (alpha > 8) {
        if (x < minX) minX = x;
        if (y < minY) minY = y;
        if (x > maxX) maxX = x;
        if (y > maxY) maxY = y;
      }
    }
  }
  if (maxX < minX || maxY < minY) return null;

  const glyphW = maxX - minX + 1;
  const glyphH = maxY - minY + 1;
  const out = document.createElement("canvas");
  out.width = outW;
  out.height = outH;
  const outCtx = out.getContext("2d");
  if (!outCtx) return null;
  outCtx.clearRect(0, 0, outW, outH);

  const scale = Math.min((outW * 0.9) / glyphW, (outH * 0.74) / glyphH);
  const drawW = glyphW * scale;
  const drawH = glyphH * scale;
  const dx = (outW - drawW) / 2;
  const dy = (outH - drawH) / 2;
  outCtx.drawImage(work, minX, minY, glyphW, glyphH, dx, dy, drawW, drawH);
  return out.toDataURL("image/png");
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
  const { t, locale } = useLocale();
  const [emojiSprite, setEmojiSprite] = useState<string | null>(null);
  const [tagSprites, setTagSprites] = useState<(string | null)[]>([]);
  const serial = getSerialNumber();
  const percent = getConcentrationPercent(resultSlug ?? result.type);
  const goodMatches = toPartnerMatchNames(result.goodMatch, resultSlug);
  const badMatches = toPartnerMatchNames(result.badMatch, resultSlug);
  const goodOne = goodMatches[0] ?? "-";
  const badOne = badMatches[0] ?? "-";
  const topKeywords = result.keywords.slice(0, 3).map((k) => truncateText(k, 8));
  const safeTitle = truncateNatural(result.title, 28);
  const safeTagline = truncateNatural(result.tagline, 84);
  const safeOneLiner = truncateNatural(result.oneLiner, 80);
  const safeDetail = truncateNatural(firstSentence(result.loveDescription), 72);
  const safeGoodPoint = truncateNatural(firstSentence(result.checkGood), 84);
  const safeBadPoint = truncateNatural(firstSentence(result.checkBad), 84);

  const reportTitleKey = isSelf ? "result.storyReportTitleSelf" : "result.storyReportTitle";
  const resultTitleKey = isSelf ? "result.storyMyPartnerResultSelf" : "result.storyMyPartnerResult";
  const reportFallback = isSelf ? "TETOLAB | 나의 성향 보고서" : "TETOLAB | 성향 분석 보고서";
  const resultFallback = isSelf ? "나의 성향 분석 결과" : "내 연인의 성향 분석 결과";
  const concentrationFallback = "테토 농도";
  const bestFallback = "최고의 조수";
  const cautionFallback = "경계 대상";
  const ctaFallback = "나도 테스트하기";
  const goodPointFallback = "관계 강점";
  const badPointFallback = "주의 포인트";

  const sanitizeLabel = (label: string, fallback: string) => {
    if (locale !== "ko") return label || fallback;
    if (!label) return fallback;
    if (/[�]/.test(label)) return fallback;
    const hasHangul = /[가-힣]/.test(label);
    return hasHangul ? label : fallback;
  };

  const reportTitle = sanitizeLabel(t(reportTitleKey), reportFallback);
  const resultTitle = sanitizeLabel(t(resultTitleKey), resultFallback);
  const concentrationLabel = sanitizeLabel(t("result.storyConcentration"), concentrationFallback);
  const bestLabel = sanitizeLabel(t("result.storyBestHelper"), bestFallback);
  const cautionLabel = sanitizeLabel(t("result.storyCaution"), cautionFallback);
  const ctaLabel = sanitizeLabel(t("result.tryTest"), ctaFallback);
  const goodPointLabel = sanitizeLabel(t("result.checkGood"), goodPointFallback);
  const badPointLabel = sanitizeLabel(t("result.checkBad"), badPointFallback);

  useEffect(() => {
    setEmojiSprite(renderEmojiSprite(result.emoji));
  }, [result.emoji]);

  useEffect(() => {
    setTagSprites(topKeywords.map((k) => renderTextSprite(`#${k}`, "#b5451f")));
  }, [topKeywords.join("|")]);

  return (
    <div
      id="result-story-card"
      className="rounded-card overflow-hidden flex flex-col text-brand-charcoal shadow-card border border-brand-border"
      style={{
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        minWidth: CARD_WIDTH,
        minHeight: CARD_HEIGHT,
        background: "linear-gradient(180deg, #fff8ef 0%, #ffffff 55%, #fff4e8 100%)",
        boxSizing: "border-box",
      }}
    >
      <div className="flex justify-between items-center gap-2 px-4 pt-4 pb-2">
        <p className="text-[11px] font-black text-brand-charcoal leading-tight max-w-[228px] text-left text-kr-balance tracking-[-0.01em]">
          {reportTitle}
        </p>
        <p
          className="text-[10px] font-mono text-brand-muted px-2 py-1 rounded-full border"
          style={{ borderColor: "rgba(34,34,34,0.12)", background: "rgba(255,255,255,0.6)" }}
        >
          {serial}
        </p>
      </div>

      <div className="px-4 pt-2 pb-2 text-center">
        <h2 className="text-sm font-bold text-brand-muted leading-tight tracking-wide">
          {resultTitle}
        </h2>
      </div>

      <div className="px-5 pt-1 pb-3">
        <div
          className="rounded-[22px] border px-4 pt-5 pb-4 text-center"
          style={{
            background: "rgba(255,255,255,0.96)",
            borderColor: "rgba(255, 133, 71, 0.22)",
            boxShadow: "0 6px 16px rgba(255, 133, 71, 0.1)",
          }}
        >
          <div
            className="relative w-20 h-20 mx-auto rounded-[20px] mb-2 overflow-hidden"
            style={{
              background: "#fff4e8",
              border: "1px solid rgba(255, 133, 71, 0.3)",
            }}
          >
            {emojiSprite ? (
              <img
                src={emojiSprite}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-contain p-1"
                draggable={false}
              />
            ) : (
              <span
                className="absolute left-1/2 top-1/2 block text-5xl leading-none select-none"
                style={{ transform: "translate(-50%, -50%)" }}
                aria-hidden="true"
              >
                {result.emoji}
              </span>
            )}
          </div>
          <p className="text-xl font-black text-brand-charcoal leading-tight">{result.type}</p>
          <p className="text-[12px] text-brand-muted mb-3 leading-snug text-kr-balance tracking-[-0.01em]">{safeTitle}</p>

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
            {concentrationLabel} {percent}%
          </p>
          <p className="text-[11px] text-brand-muted mt-1 leading-snug text-kr-balance tracking-[-0.01em]">&ldquo;{safeTagline}&rdquo;</p>
        </div>
      </div>

      <div className="px-5 pb-1.5 space-y-1">
        <p className="text-[13px] font-semibold text-brand-charcoal leading-relaxed text-kr-balance tracking-[-0.01em] text-center">
          {safeOneLiner}
        </p>
        <p className="text-[12px] text-brand-muted leading-relaxed text-kr-balance tracking-[-0.01em] text-center">
          {safeDetail}
        </p>
        <div className="grid grid-cols-2 gap-2 pt-0.5">
          <div
            className="rounded-2xl px-2.5 py-2.5 min-h-[104px] flex flex-col items-center justify-start text-center"
            style={{ background: "rgba(56, 178, 121, 0.10)" }}
          >
            <p className="text-[12px] font-black text-brand-charcoal text-center leading-[1.2] tracking-[0.01em]">
              {goodPointLabel}
            </p>
            <p className="mt-1 text-[13px] font-semibold text-brand-charcoal leading-[1.35] text-center text-kr-balance tracking-[-0.01em] max-w-[152px]">
              {safeGoodPoint}
            </p>
          </div>
          <div
            className="rounded-2xl px-2.5 py-2.5 min-h-[104px] flex flex-col items-center justify-start text-center"
            style={{ background: "rgba(245, 158, 11, 0.12)" }}
          >
            <p className="text-[12px] font-black text-brand-charcoal text-center leading-[1.2] tracking-[0.01em]">
              {badPointLabel}
            </p>
            <p className="mt-1 text-[13px] font-semibold text-brand-charcoal leading-[1.35] text-center text-kr-balance tracking-[-0.01em] max-w-[152px]">
              {safeBadPoint}
            </p>
          </div>
        </div>
      </div>

      <div
        className="mt-auto px-4 pb-4 pt-2.5 space-y-2"
        style={{
          borderTop: "1px solid rgba(0,0,0,0.08)",
          background: "linear-gradient(180deg, rgba(255,255,255,0.55), rgba(255,255,255,0.92))",
        }}
      >
        <div className="flex flex-wrap items-center content-center justify-center gap-1.5 min-h-[26px] leading-none">
          {topKeywords.map((k, i) => (
            <span
              key={i}
              className="inline-flex items-center justify-center h-5 px-2 text-[10px] leading-none font-bold rounded-full align-middle"
              style={{ background: "rgba(255, 133, 71, 0.14)", color: "#b5451f" }}
            >
              {tagSprites[i] ? (
                <img
                  src={tagSprites[i] ?? ""}
                  alt=""
                  aria-hidden="true"
                  className="h-[10px] w-auto"
                  draggable={false}
                />
              ) : (
                `#${k}`
              )}
            </span>
          ))}
        </div>
        <div className="text-[10px] text-brand-muted grid grid-cols-2 gap-2 px-1 leading-snug">
          <span className="break-words text-left">
            {bestLabel}: {goodOne}
          </span>
          <span className="break-words text-right">
            {cautionLabel}: {badOne}
          </span>
        </div>
        <div
          className="rounded-[14px] px-3 py-3.5 min-h-[46px] flex items-center justify-between"
          style={{ background: "linear-gradient(90deg, #ff7a3d, #ffb347)" }}
        >
          <span className="text-[11px] font-black text-white leading-[1.2] pr-2">
            {ctaLabel}
          </span>
          <span className="text-[10px] font-semibold text-white/90 leading-[1.2]">tetolab.com</span>
        </div>
      </div>
    </div>
  );
}
