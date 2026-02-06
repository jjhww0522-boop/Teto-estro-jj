"use client";

import { QRCodeSVG } from "qrcode.react";
import type { ResultType } from "@/data/results";

/** 인스타 스토리용 9:16 카드 (360×640 기준, 캡처 시 scale 3 → 1080×1920) */
const CARD_WIDTH = 360;
const CARD_HEIGHT = 640;

interface ResultStoryCardProps {
  result: ResultType;
  testUrl: string;
  /** 결과 slug (남친=teto → 궁합 ㅇㅇ녀, 여친=teto_f → 궁합 ㅇㅇ남) */
  resultSlug?: string;
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

/** 유형별 농도 % (시각적 다양성용, 88~99) */
function getConcentrationPercent(type: string): number {
  let n = 0;
  for (let i = 0; i < type.length; i++) n += type.charCodeAt(i);
  return 88 + (n % 12);
}

export default function ResultStoryCard({ result, testUrl, resultSlug }: ResultStoryCardProps) {
  const serial = getSerialNumber();
  const percent = getConcentrationPercent(result.type);
  const goodMatches = toPartnerMatchNames(result.goodMatch, resultSlug);
  const badMatches = toPartnerMatchNames(result.badMatch, resultSlug);
  const goodOne = goodMatches[0] ?? "—";
  const badOne = badMatches[0] ?? "—";

  return (
    <div
      id="result-story-card"
      className="rounded-2xl overflow-hidden flex flex-col text-gray-800 shadow-2xl border-2 border-purple-100"
      style={{
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        minWidth: CARD_WIDTH,
        minHeight: CARD_HEIGHT,
        background: "linear-gradient(180deg, #F5F0FF 0%, #FDF8F0 50%, #FFF5F5 100%)",
        boxSizing: "border-box",
      }}
    >
      {/* 상단: 브랜드 + 일련번호 */}
      <div
        className="flex justify-between items-start px-4 pt-4 pb-1"
        style={{ borderBottom: "2px dashed rgba(139, 92, 246, 0.3)" }}
      >
        <p className="text-xs font-bold text-purple-600 tracking-wide opacity-90">
          테토 연구소 | 성향 분석 보고서
        </p>
        <p className="text-xs font-mono text-gray-500">{serial}</p>
      </div>

      {/* 중앙 상단: 분석 대상 */}
      <div className="px-4 pt-4 pb-2 text-center">
        <h2 className="text-base font-black text-gray-800 leading-tight">
          우리 남친의 테토 농도 분석 결과
        </h2>
      </div>

      {/* Hero: 캐릭터 + 농도 게이지 + 한 줄 */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-4">
        <div className="text-7xl mb-3 drop-shadow-md" aria-hidden>
          {result.emoji}
        </div>
        <div
          className="relative w-28 h-28 rounded-full flex items-center justify-center mb-3"
          style={{
            background: `conic-gradient(#8B5CF6 0% ${percent}%, #E9D5FF ${percent}% 100%)`,
            boxShadow: "inset 0 0 0 6px #F5F0FF",
          }}
        >
          <div
            className="absolute inset-2 rounded-full bg-gradient-to-br from-[#F5F0FF] to-white flex items-center justify-center"
            style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}
          >
            <span className="text-xl font-black text-purple-700">{percent}%</span>
          </div>
        </div>
        <p className="text-sm font-bold text-purple-700 text-center mb-1">
          테토 농도 {percent}% · 순도 100% 진국 감자
        </p>
        <p className="text-xs text-gray-600 text-center leading-snug max-w-[280px]">
          &ldquo;{result.tagline}&rdquo;
        </p>
      </div>

      {/* 하단: 요약 + 해시태그 + 궁합 + CTA + QR */}
      <div
        className="px-4 pb-4 pt-3 space-y-2"
        style={{
          borderTop: "2px dashed rgba(139, 92, 246, 0.3)",
          background: "rgba(255,255,255,0.5)",
        }}
      >
        <p className="text-xs text-gray-700 leading-relaxed line-clamp-2">
          {result.oneLiner}
        </p>
        <div className="flex flex-wrap gap-1">
          {result.keywords.slice(0, 4).map((k, i) => (
            <span key={i} className="text-[10px] text-purple-600 font-medium">
              #{k}
            </span>
          ))}
        </div>
        <div className="text-[10px] text-gray-600 flex flex-wrap gap-x-2">
          <span>최고의 조수: {goodOne}</span>
          <span>|</span>
          <span>경계 대상: {badOne}</span>
        </div>
        <div className="flex items-center justify-center gap-2 pt-2">
          <div className="flex flex-col items-center">
            <p className="text-[10px] text-gray-500 mb-1">여기에 링크 스티커를 붙여주세요!</p>
            <span className="text-lg" aria-hidden>
              👇
            </span>
          </div>
          <div className="flex-shrink-0 bg-white p-1.5 rounded-lg border border-purple-100">
            <QRCodeSVG value={testUrl} size={56} level="M" includeMargin={false} />
          </div>
        </div>
      </div>
    </div>
  );
}
