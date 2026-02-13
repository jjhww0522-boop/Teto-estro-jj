"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  RESULTS_DATA,
  ALL_RESULT_SLUGS,
  getCompatibility,
  getCompatibilityCategory,
  getRandomCompatibilityScore,
  type CompatibilityCategory,
} from "@/constants/results";
import type { ResultType } from "@/data/results";
import { useLocale } from "@/components/LocaleProvider";

declare global {
  interface Window {
    Kakao: any;
  }
}

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://teto-potato-test.vercel.app";

interface CompatibilityCalculatorProps {
  currentSlug: string;
  currentResult: ResultType;
  onViewChange?: (view: View) => void;
  /** 셀프 진단 결과일 때 궁합 문구를 "나는 어떤 유형과 잘맞을까?"로 표시 */
  isSelf?: boolean;
}

type View = "button" | "grid" | "loading" | "result";

function getCategoryLabels(t: (key: string) => string): Record<CompatibilityCategory, string> {
  return {
    good: t("compatibility.bestMatch"),
    normal: t("compatibility.normalMatch"),
    bad: t("compatibility.badMatch"),
  };
}

const CATEGORY_COLOR: Record<CompatibilityCategory, string> = {
  good: "bg-brand-success/10 text-brand-success",
  normal: "bg-brand-accent/10 text-brand-accent",
  bad: "bg-brand-warning/10 text-brand-accent-rose",
};

function CircularGauge({ percent, size = 160 }: { percent: number; size?: number }) {
  const stroke = 10;
  const r = (size - stroke) / 2;
  const circumference = 2 * Math.PI * r;
  const offset = circumference - (percent / 100) * circumference;

  const color =
    percent >= 80 ? "#6c5ce7" : percent >= 35 ? "#6c5ce7" : "#e17055";

  return (
    <div className="relative inline-flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="rgba(108, 92, 231, 0.1)"
          strokeWidth={stroke}
        />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={color}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
      </svg>
      <span className="absolute text-3xl font-black text-brand-charcoal tabular-nums">
        {percent.toFixed(1)}%
      </span>
    </div>
  );
}

export default function CompatibilityCalculator({
  currentSlug,
  currentResult,
  onViewChange,
  isSelf,
}: CompatibilityCalculatorProps) {
  const [view, setView] = useState<View>("button");
  const [targetSlug, setTargetSlug] = useState<string | null>(null);
  const [score, setScore] = useState<number>(0);
  const [description, setDescription] = useState<string>("");
  const [category, setCategory] = useState<CompatibilityCategory | null>(null);

  const { t } = useLocale();
  const resultCacheRef = useRef<Record<string, { score: number; description: string; category: CompatibilityCategory }>>({});
  const CATEGORY_LABEL = getCategoryLabels(t);

  const isFemaleResult = currentSlug.endsWith("_f");
  const otherSlugs = ALL_RESULT_SLUGS.filter(
    (s) => s !== currentSlug && (isFemaleResult ? !s.endsWith("_f") : s.endsWith("_f"))
  );

  useEffect(() => {
    onViewChange?.(view);
  }, [view, onViewChange]);

  const openGrid = useCallback(() => setView("grid"), []);
  const goBack = useCallback(() => {
    setView("grid");
    setTargetSlug(null);
  }, []);

  const selectTarget = useCallback((slug: string) => {
    setTargetSlug(slug);
    setView("loading");
  }, []);

  useEffect(() => {
    if (view !== "loading" || !targetSlug) return;
    const cacheKey = targetSlug;
    const delay = 1200 + Math.random() * 800;
    const timer = setTimeout(() => {
      const cached = resultCacheRef.current[cacheKey];
      if (cached) {
        setScore(cached.score);
        setDescription(cached.description);
        setCategory(cached.category);
      } else {
        const comp = getCompatibility(currentSlug, targetSlug);
        const cat = getCompatibilityCategory(currentSlug, targetSlug);
        if (!comp || !cat) {
          const fallback = { score: 50, description: t("compatibility.unknown"), category: "normal" as CompatibilityCategory };
          resultCacheRef.current[cacheKey] = fallback;
          setScore(fallback.score);
          setDescription(fallback.description);
          setCategory(fallback.category);
        } else {
          const scoreVal = getRandomCompatibilityScore(cat);
          const result = { score: scoreVal, description: comp.description, category: cat };
          resultCacheRef.current[cacheKey] = result;
          setScore(result.score);
          setDescription(result.description);
          setCategory(result.category);
        }
      }
      setView("result");
    }, delay);
    return () => clearTimeout(timer);
  }, [view, targetSlug, currentSlug]);

  const shareKakaoCompatibility = useCallback(() => {
    if (typeof window === "undefined" || !window.Kakao) {
      alert(t("result.kakaoUnavailable"));
      return;
    }
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_KEY || "3226a5c1a88b15cf36cbd977ec3b1821");
    }
    const targetName = targetSlug ? RESULTS_DATA[targetSlug]?.type ?? targetSlug : "";
    const title = `${currentResult.emoji} ${currentResult.type} × ${targetName} ${RESULTS_DATA[targetSlug!]?.emoji ?? ""} ${score.toFixed(1)}%!`;
    const desc = `${description.slice(0, 120)}`;
    const shareUrl = `${BASE_URL}/result?matchMe=${currentSlug}`;
    const imageUrl = isFemaleResult
      ? `${BASE_URL}/images/og-result-female.png`
      : `${BASE_URL}/images/og-result-male.png`;
    window.Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title,
        description: desc,
        imageUrl,
        link: { mobileWebUrl: shareUrl, webUrl: shareUrl },
      },
      buttons: [
        { title: t("compatibility.viewOther"), link: { mobileWebUrl: shareUrl, webUrl: shareUrl } },
        { title: t("result.tryTest"), link: { mobileWebUrl: BASE_URL, webUrl: BASE_URL } },
      ],
    });
  }, [currentResult.type, targetSlug, score, description, currentSlug]);

  return (
    <section className="rounded-card bg-brand-surface p-6 border border-brand-border shadow-card">
      <AnimatePresence mode="wait">
        {view === "button" && (
          <motion.div
            key="button"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-center"
          >
            <button
              type="button"
              onClick={openGrid}
              className="w-full btn-primary flex items-center justify-center gap-2"
            >
              <span>{t(isSelf ? "compatibility.titleSelf" : "compatibility.title")}</span>
            </button>
          </motion.div>
        )}

        {view === "grid" && (
          <motion.div
            key="grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-4"
          >
            <p className="text-center text-brand-charcoal font-medium">{t("compatibility.selectType")}</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
              {otherSlugs.map((slug) => {
                const data = RESULTS_DATA[slug];
                if (!data) return null;
                return (
                  <motion.button
                    key={slug}
                    type="button"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => selectTarget(slug)}
                    className="flex flex-col items-center justify-center p-3 rounded-card bg-brand-highlight border border-brand-border hover:border-brand-accent/30 hover:shadow-card-hover transition-all min-w-0"
                  >
                    <span className="text-2xl sm:text-3xl mb-1 shrink-0">{data.emoji}</span>
                    <span className="text-xs font-medium text-brand-charcoal text-center break-keep leading-tight">
                      {data.type}
                    </span>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        )}

        {view === "loading" && (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="py-12 flex flex-col items-center justify-center gap-6"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="w-14 h-14 rounded-full border-4 border-brand-accent/30 border-t-brand-accent"
            />
            <p className="text-brand-muted font-medium">{t("compatibility.analyzing")}</p>
          </motion.div>
        )}

        {view === "result" && targetSlug && category !== null && (
          <motion.div
            key="result"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <div className="flex flex-col items-center gap-4">
              <p className="text-sm font-bold text-brand-accent">
                {currentResult.emoji} {currentResult.type} × {RESULTS_DATA[targetSlug]?.type ?? targetSlug} {RESULTS_DATA[targetSlug]?.emoji}
              </p>
              <CircularGauge percent={score} size={180} />
              <span className={`inline-flex items-center px-3 py-1 rounded-tag text-sm font-bold ${CATEGORY_COLOR[category]}`}>
                {CATEGORY_LABEL[category]}
              </span>
            </div>
            <p className="text-brand-charcoal text-sm leading-relaxed text-center text-kr-balance px-2">
              {description}
            </p>
            <div className="flex flex-col gap-2">
              <button
                type="button"
                onClick={shareKakaoCompatibility}
                className="w-full py-3 bg-[#FEE500] text-gray-800 font-bold rounded-button flex items-center justify-center gap-2 hover:bg-[#FDD835] transition-colors"
              >
                <span>{t("compatibility.shareKakao")}</span>
              </button>
              <button
                type="button"
                onClick={goBack}
                className="w-full py-2.5 text-brand-muted font-medium rounded-button border border-brand-border hover:border-brand-accent/30 hover:bg-brand-highlight transition-colors"
              >
                {t("compatibility.viewOther")}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
