"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import html2canvas from "html2canvas";
import type { ResultType } from "@/data/results";
import type { CharType } from "@/utils/calculate";
import { RESULTS_DATA } from "@/constants/results";
import TetoConcentrationBar from "@/components/TetoConcentrationBar";
import CompatibilityCalculator from "@/components/CompatibilityCalculator";
import RadarChart from "@/components/RadarChart";
import { getConcentrationPercent } from "@/utils/concentration";
import ResultStoryCard from "@/components/ResultStoryCard";
import { useLocale } from "@/components/LocaleProvider";
import { RESULTS_I18N } from "@/constants/results-i18n";

declare global {
  interface Window {
    Kakao: any;
  }
}

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://teto-potato-test.vercel.app";

interface ResultViewProps {
  result: ResultType;
  shareUrl: string;
  resultSlug?: string;
  matchMe?: string | null;
  dimensionScores?: Record<CharType, number> | null;
  isSharedView?: boolean;
}

function toPartnerMatchNames(names: string[], resultSlug?: string): string[] {
  if (!resultSlug) return names;
  const isFemaleResult = resultSlug.endsWith("_f");
  return names.map((name) =>
    isFemaleResult ? name.replace(/녀$/, "남") : name.replace(/남$/, "녀")
  );
}

function isPartnerSlug(resultSlug: string | undefined, otherSlug: string): boolean {
  if (!resultSlug) return true;
  const resultIsFemale = resultSlug.endsWith("_f");
  const otherIsFemale = otherSlug.endsWith("_f");
  return resultIsFemale ? !otherIsFemale : otherIsFemale;
}

function groupCompatibilitiesByDescription(
  entries: [string, { score: number; description: string }][],
  resultSlug: string | undefined
): { typeNames: string[]; description: string }[] {
  const filtered = entries.filter(([slug]) => isPartnerSlug(resultSlug, slug));
  const byDesc = new Map<string, string[]>();
  for (const [slug, { description }] of filtered) {
    const name = RESULTS_DATA[slug]?.type ?? slug;
    if (!byDesc.has(description)) byDesc.set(description, []);
    byDesc.get(description)!.push(name);
  }
  return Array.from(byDesc.entries()).map(([description, typeNames]) => ({
    typeNames,
    description,
  }));
}

export default function ResultView({ result, shareUrl, resultSlug, matchMe, dimensionScores, isSharedView }: ResultViewProps) {
  const resultCardRef = useRef<HTMLDivElement>(null);
  const [showShareButtons, setShowShareButtons] = useState(true);
  const { t, locale } = useLocale();

  const handleCompatibilityViewChange = useCallback((view: string) => {
    setShowShareButtons(view !== "result");
  }, []);

  // i18n 오버레이: 결과 텍스트
  const i18nResult = (locale !== "ko" && resultSlug) ? RESULTS_I18N[locale]?.[resultSlug] : null;
  const displayResult = i18nResult
    ? { ...result, ...i18nResult }
    : result;

  const displayGoodMatch = toPartnerMatchNames(result.goodMatch, resultSlug);
  const displayBadMatch = toPartnerMatchNames(result.badMatch, resultSlug);

  useEffect(() => {
    if (typeof window !== "undefined" && window.Kakao && !window.Kakao.isInitialized()) {
      window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_KEY || "3226a5c1a88b15cf36cbd977ec3b1821");
    }
  }, []);

  const shareToKakao = () => {
    if (!window.Kakao) {
      alert(t("result.kakaoUnavailable"));
      return;
    }
    const shortOneLiner = displayResult.oneLiner.split(/(?<=[.!?])\s/)[0];
    const textPart = `${displayResult.tagline}\n\n${shortOneLiner}`.slice(0, 150);
    const isFemaleResult = resultSlug?.endsWith("_f");
    const imageUrl = isFemaleResult
      ? `${BASE_URL}/images/og-result-female.png`
      : `${BASE_URL}/images/og-result-male.png`;
    window.Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: `나는 ${displayResult.type}! ${displayResult.title}`,
        description: textPart,
        imageUrl,
        link: { mobileWebUrl: shareUrl, webUrl: shareUrl },
      },
      buttons: [
        { title: t("result.viewResult"), link: { mobileWebUrl: shareUrl, webUrl: shareUrl } },
        { title: t("result.tryTest"), link: { mobileWebUrl: BASE_URL, webUrl: BASE_URL } },
      ],
    });
  };

  const copyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    alert(t("result.linkCopied"));
  };

  const downloadImage = async () => {
    if (!resultCardRef.current) return;
    try {
      const button = document.getElementById("download-btn");
      if (button) button.textContent = t("result.savingImage");
      const canvas = await html2canvas(resultCardRef.current, {
        backgroundColor: null,
        scale: 2,
        logging: false,
        useCORS: true,
      });
      const link = document.createElement("a");
      link.download = `${displayResult.type}_테스트결과.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
      if (button) button.textContent = t("result.saveImage");
      alert(t("result.imageSaved"));
    } catch (error) {
      console.error("이미지 저장 실패:", error);
      alert(t("result.imageFail"));
    }
  };

  const downloadStoryImage = async () => {
    const storyCard = document.getElementById("result-story-card");
    if (!storyCard) return;
    try {
      const button = document.getElementById("download-story-btn");
      if (button) button.textContent = t("result.savingStory");
      const canvas = await html2canvas(storyCard, {
        backgroundColor: null,
        scale: 3,
        logging: false,
        useCORS: true,
      });
      const link = document.createElement("a");
      link.download = `${displayResult.type}_인스타스토리.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
      if (button) button.textContent = t("result.saveStory");
      alert(t("result.storySaved"));
    } catch (error) {
      console.error("스토리 이미지 저장 실패:", error);
      alert(t("result.imageFail"));
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 py-8">
      {/* 인스타 스토리용 오프스크린 카드 */}
      <div style={{ position: "absolute", left: "-9999px", top: 0 }} aria-hidden="true">
        <ResultStoryCard result={result} resultSlug={resultSlug} />
      </div>

      {/* 공유 링크로 유입된 사용자용 CTA */}
      {isSharedView && (
        <Link href="/" className="w-full max-w-2xl mb-4 block">
          <div className="btn-primary text-center py-4 px-6 flex items-center justify-center gap-2">
            <span>{t("result.tryTestCTA")}</span>
          </div>
        </Link>
      )}

      <div
        ref={resultCardRef}
        className="card max-w-2xl w-full space-y-8"
        style={{ backgroundColor: "#ffffff" }}
      >
        {/* 헤더: 이모지 + 테토력 그래프 + 유형명 */}
        <div className="text-center space-y-4">
          <div className="w-20 h-20 mx-auto bg-brand-highlight border border-brand-border rounded-card flex items-center justify-center text-5xl">
            {result.emoji}
          </div>
          <TetoConcentrationBar percent={getConcentrationPercent(resultSlug ?? result.type)} />
          <h1
            className="font-bold text-brand-charcoal whitespace-nowrap max-w-full text-sm min-[400px]:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl px-0.5"
            style={{ letterSpacing: "-0.04em" }}
          >
            {displayResult.type}:{"\u00A0"}{displayResult.title}
          </h1>
          <blockquote className="text-lg text-brand-muted italic border-l-4 border-brand-accent/30 pl-4 py-1 text-center text-kr-balance" style={{ letterSpacing: "-0.03em" }}>
            &ldquo;{displayResult.tagline}&rdquo;
          </blockquote>
          <p className="text-base text-brand-muted font-medium text-kr-balance" style={{ letterSpacing: "-0.03em" }}>{displayResult.oneLiner}</p>
        </div>

        {/* 키워드 태그 */}
        <div className="flex flex-wrap gap-2 justify-center">
          {displayResult.keywords.map((keyword: string, index: number) => (
            <span key={index} className="theory-badge">
              #{keyword}
            </span>
          ))}
        </div>

        {/* 레이더 차트 섹션 */}
        {dimensionScores && (
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-brand-charcoal flex items-center gap-2">
              <span className="section-label">{t("result.tendencyAnalysis")}</span>
            </h3>
            <div className="bg-brand-highlight rounded-card p-6 border border-brand-border flex justify-center">
              <RadarChart scores={dimensionScores} />
            </div>
          </div>
        )}

        {/* 당신의 연애는... */}
        <div className="space-y-3">
          <h3 className="text-xl font-bold text-brand-charcoal flex items-center gap-2">
            <span className="section-label">{t("result.loveStyle")}</span>
          </h3>
          <div className="bg-brand-highlight rounded-card p-6 border border-brand-border">
            <p className="text-brand-charcoal leading-relaxed text-kr-wrap">{displayResult.loveDescription}</p>
          </div>
        </div>

        {/* 체크 포인트 Good / Bad */}
        <div className="space-y-3">
          <h3 className="text-xl font-bold text-brand-charcoal flex items-center gap-2">
            <span className="section-label">{t("result.checkPoint")}</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-brand-success/5 rounded-card p-4 border border-brand-success/20">
              <p className="text-xs font-bold text-brand-success uppercase tracking-wide mb-2">Good</p>
              <p className="text-brand-charcoal text-sm leading-relaxed text-kr-wrap">{displayResult.checkGood}</p>
            </div>
            <div className="bg-brand-warning/8 rounded-card p-4 border border-brand-warning/30">
              <p className="text-xs font-bold text-brand-accent-rose uppercase tracking-wide mb-2">Bad</p>
              <p className="text-brand-charcoal text-sm leading-relaxed text-kr-wrap">{displayResult.checkBad}</p>
            </div>
          </div>
        </div>

        {/* 찰떡궁합 / 조심궁합 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-brand-charcoal flex items-center gap-2">
              <span className="section-label">{t("result.goodMatch")}</span>
            </h3>
            <div className="bg-brand-success/5 rounded-card p-4 space-y-3 border border-brand-success/20">
              {result.compatibilities
                ? (() => {
                    const entries = Object.entries(result.compatibilities).filter(
                      ([, v]) => v.score >= 80
                    );
                    const groups = groupCompatibilitiesByDescription(entries, resultSlug);
                    return groups.map(({ typeNames, description }, i) => (
                      <div key={i} className="text-left">
                        <p className="text-brand-charcoal font-semibold text-sm text-kr-wrap">
                          {typeNames.join(" & ")} : {description}
                        </p>
                      </div>
                    ));
                  })()
                : displayGoodMatch.map((match: string, index: number) => (
                    <div key={index} className="text-brand-charcoal font-medium text-kr-wrap">
                      {match}
                    </div>
                  ))}
            </div>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-brand-charcoal flex items-center gap-2">
              <span className="section-label">{t("result.badMatch")}</span>
            </h3>
            <div className="bg-brand-warning/8 rounded-card p-4 space-y-3 border border-brand-warning/30">
              {result.compatibilities
                ? (() => {
                    const entries = Object.entries(result.compatibilities).filter(
                      ([, v]) => v.score <= 55
                    );
                    const groups = groupCompatibilitiesByDescription(entries, resultSlug);
                    return groups.map(({ typeNames, description }, i) => (
                      <div key={i} className="text-left">
                        <p className="text-brand-charcoal font-semibold text-sm text-kr-wrap">
                          {typeNames.join(" & ")} : {description}
                        </p>
                      </div>
                    ));
                  })()
                : displayBadMatch.map((match: string, index: number) => (
                    <div key={index} className="text-brand-charcoal font-medium text-kr-wrap">
                      {match}
                    </div>
                  ))}
            </div>
          </div>
        </div>

        {/* 왜 이런 결과가? (심리학적 분석) */}
        <div className="space-y-3">
          <h3 className="text-xl font-bold text-brand-charcoal flex items-center gap-2">
            <span className="section-label">{t("result.psychAnalysis")}</span>
          </h3>
          <div className="flex flex-wrap gap-2 mb-2">
            <span className="theory-badge">Big Five</span>
            <span className="theory-badge">Attachment Theory</span>
          </div>
          <div className="bg-brand-highlight rounded-card p-6 border border-brand-border">
            <p className="text-brand-charcoal leading-relaxed text-sm text-kr-wrap">{displayResult.psychologicalAnalysis}</p>
          </div>
        </div>

        {/* 액션 버튼 */}
        <div className="space-y-3 pt-4">
          {resultSlug && (
            <CompatibilityCalculator currentSlug={resultSlug} currentResult={result} onViewChange={handleCompatibilityViewChange} />
          )}
          {resultSlug && (
            <Link
              href={
                matchMe
                  ? `/match?me=${encodeURIComponent(matchMe)}&you=${encodeURIComponent(resultSlug)}`
                  : `/match?me=${encodeURIComponent(resultSlug)}`
              }
              className="w-full block text-center"
            >
              <span className="text-sm text-brand-muted hover:text-brand-accent">
                {t("result.chemistryLink")}
              </span>
            </Link>
          )}
          {showShareButtons && (
            <>
              <button
                onClick={shareToKakao}
                className="w-full bg-[#FEE500] hover:bg-[#FDD835] text-gray-800 font-bold py-4 px-6 rounded-button shadow-button hover:shadow-card-hover transform hover:scale-[1.02] transition-all duration-200 flex items-center justify-center gap-2"
              >
                <span>{t("result.shareKakao")}</span>
              </button>
              <button
                id="download-story-btn"
                onClick={downloadStoryImage}
                className="w-full text-white font-bold py-4 px-6 rounded-button shadow-button hover:shadow-card-hover transform hover:scale-[1.02] transition-all duration-200 flex items-center justify-center gap-2"
                style={{ background: "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)" }}
              >
                <span>{t("result.saveStory")}</span>
              </button>
              <button
                onClick={copyLink}
                className="btn-secondary w-full flex items-center justify-center gap-2"
              >
                <span>{t("result.copyLink")}</span>
              </button>
              <button
                id="download-btn"
                onClick={downloadImage}
                className="btn-secondary w-full flex items-center justify-center gap-2"
              >
                <span>{t("result.saveImage")}</span>
              </button>
            </>
          )}
          <Link href="/">
            <button className="w-full btn-primary">{t("result.retakeTest")}</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
