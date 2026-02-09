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

declare global {
  interface Window {
    Kakao: any;
  }
}

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://teto-potato-test.vercel.app";

interface CompatibilityCalculatorProps {
  /** 현재 사용자 결과 slug (예: teto, teto_f) */
  currentSlug: string;
  /** 현재 사용자 결과 데이터 (표시명 등) */
  currentResult: ResultType;
}

type View = "button" | "grid" | "loading" | "result";

const CATEGORY_LABEL: Record<CompatibilityCategory, string> = {
  good: "💖 찰떡궁합",
  normal: "😐 보통궁합",
  bad: "⚠️ 조심궁합",
};

/** 원형 게이지 (0~100%) */
function CircularGauge({ percent, size = 160 }: { percent: number; size?: number }) {
  const stroke = 10;
  const r = (size - stroke) / 2;
  const circumference = 2 * Math.PI * r;
  const offset = circumference - (percent / 100) * circumference;

  const color =
    percent >= 80 ? "#e879f9" : percent >= 35 ? "#a78bfa" : "#f97316";

  return (
    <div className="relative inline-flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="rgba(139, 92, 246, 0.15)"
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
      <span className="absolute text-3xl font-black text-gray-800 tabular-nums">
        {percent.toFixed(1)}%
      </span>
    </div>
  );
}

export default function CompatibilityCalculator({
  currentSlug,
  currentResult,
}: CompatibilityCalculatorProps) {
  const [view, setView] = useState<View>("button");
  const [targetSlug, setTargetSlug] = useState<string | null>(null);
  const [score, setScore] = useState<number>(0);
  const [description, setDescription] = useState<string>("");
  const [category, setCategory] = useState<CompatibilityCategory | null>(null);

  /** 한 페이지 안에서는 같은 (내 유형, 상대 유형) 조합일 때 항상 같은 %가 나오도록 캐시 */
  const resultCacheRef = useRef<Record<string, { score: number; description: string; category: CompatibilityCategory }>>({});

  // 남자 조사 결과(ㅇㅇ남)일 때는 궁합 리스트에 ㅇㅇ녀만, 여자 조사 결과(ㅇㅇ녀)일 때는 ㅇㅇ남만
  const isFemaleResult = currentSlug.endsWith("_f");
  const otherSlugs = ALL_RESULT_SLUGS.filter(
    (s) => s !== currentSlug && (isFemaleResult ? !s.endsWith("_f") : s.endsWith("_f"))
  );

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
          const fallback = { score: 50, description: "알 수 없는 조합이에요.", category: "normal" as CompatibilityCategory };
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
      alert("카카오톡 공유를 사용할 수 없어요.");
      return;
    }
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_KEY || "3226a5c1a88b15cf36cbd977ec3b1821");
    }
    const targetName = targetSlug ? RESULTS_DATA[targetSlug]?.type ?? targetSlug : "";
    const title = `우리 ${score.toFixed(1)}% 나왔어! 💕`;
    const desc = `${currentResult.type} × ${targetName}\n${description.slice(0, 80)}...`;
    const shareUrl = `${BASE_URL}/result?matchMe=${currentSlug}`;
    window.Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title,
        description: desc,
        imageUrl: "https://via.placeholder.com/1200x630/E5D4FF/5a4a6a?text=테토+궁합",
        link: { mobileWebUrl: shareUrl, webUrl: shareUrl },
      },
      buttons: [
        { title: "나도 궁합 보기", link: { mobileWebUrl: shareUrl, webUrl: shareUrl } },
        { title: "테스트 하기", link: { mobileWebUrl: BASE_URL, webUrl: BASE_URL } },
      ],
    });
  }, [currentResult.type, targetSlug, score, description]);

  return (
    <section className="rounded-3xl bg-white/90 backdrop-blur-sm p-6 border-2 border-purple-100 shadow-lg">
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
              className="w-full py-4 px-6 bg-gradient-to-r from-pastel-purple to-pastel-pink text-gray-800 font-bold rounded-2xl shadow-md hover:shadow-lg hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
            >
              <span className="text-xl">💕</span>
              <span>내 연인과의 궁합은?</span>
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
            <p className="text-center text-gray-700 font-medium">상대방 유형을 선택해주세요</p>
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
                    className="flex flex-col items-center justify-center p-3 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-100 hover:border-pastel-purple hover:shadow-md transition-all min-w-0"
                  >
                    <span className="text-2xl sm:text-3xl mb-1 shrink-0">{data.emoji}</span>
                    <span className="text-xs font-medium text-gray-700 text-center break-keep leading-tight">
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
              className="w-14 h-14 rounded-full border-4 border-pastel-purple border-t-transparent"
            />
            <p className="text-gray-600 font-medium">테토 에너지를 분석 중입니다...</p>
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
              <p className="text-sm font-bold text-purple-600">
                {currentResult.type} × {RESULTS_DATA[targetSlug]?.type ?? targetSlug}
              </p>
              <CircularGauge percent={score} size={180} />
              <p className="text-lg font-bold text-gray-800">{CATEGORY_LABEL[category]}</p>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed text-center text-kr-balance px-2">
              {description}
            </p>
            <div className="flex flex-col gap-2">
              <button
                type="button"
                onClick={shareKakaoCompatibility}
                className="w-full py-3 bg-[#FEE500] text-gray-800 font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-[#FDD835] transition-colors"
              >
                <span>카카오톡으로 자랑하기</span>
                <span className="text-lg">💬</span>
              </button>
              <button
                type="button"
                onClick={goBack}
                className="w-full py-2.5 text-gray-600 font-medium rounded-xl border-2 border-gray-200 hover:border-purple-200 hover:bg-purple-50/50 transition-colors"
              >
                다른 유형 궁합 보기
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
