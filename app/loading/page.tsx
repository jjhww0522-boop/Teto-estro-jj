"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useLocale } from "@/components/LocaleProvider";
import { LoadingFallback } from "@/components/LoadingFallback";

/** SVG 막대 차트 애니메이션 - 8개 바가 순차적으로 올라가는 분석 시각화 */
function AnalyzingBars() {
  return (
    <div className="flex items-end justify-center gap-1.5 h-24">
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
        <div
          key={i}
          className="w-3 bg-brand-accent rounded-sm"
          style={{
            animation: `barPulse 1.2s ease-in-out ${i * 0.15}s infinite`,
            height: "20%",
          }}
        />
      ))}
      <style jsx>{`
        @keyframes barPulse {
          0%, 100% { height: 20%; opacity: 0.4; }
          50% { height: 90%; opacity: 1; }
        }
      `}</style>
    </div>
  );
}

/** 체크마크 SVG */
function CheckIcon({ active }: { active: boolean }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className={`shrink-0 transition-colors duration-300 ${active ? "text-brand-success" : "text-brand-border"}`}
    >
      <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" fill={active ? "currentColor" : "none"} />
      {active && (
        <path d="M5 8l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      )}
    </svg>
  );
}

function LoadingContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { t } = useLocale();
  const [progress, setProgress] = useState(0);
  const [dots, setDots] = useState("");

  const baseText = t("loading.analyzing");

  useEffect(() => {
    const answersParam = searchParams.get("answers");

    if (!answersParam) {
      router.push("/");
      return;
    }

    const dotInterval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "" : prev + "."));
    }, 500);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + 2;
      });
    }, 60);

    const modeParam = searchParams.get("mode") || "";
    const matchMeParam = searchParams.get("matchMe") || "";
    const isSelfParam = searchParams.get("isSelf") || "";

    const timer = setTimeout(() => {
      const params = new URLSearchParams({ answers: answersParam });
      if (modeParam) params.set("mode", modeParam);
      if (matchMeParam) params.set("matchMe", matchMeParam);
      if (isSelfParam) {
        params.set("isSelf", "1");
        router.push(`/result/self?${params.toString()}`);
      } else {
        router.push(`/result?${params.toString()}`);
      }
    }, 3000);

    return () => {
      clearTimeout(timer);
      clearInterval(dotInterval);
      clearInterval(progressInterval);
    };
  }, [searchParams, router]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="card max-w-md w-full text-center space-y-8">
        {/* SVG 막대 차트 애니메이션 */}
        <AnalyzingBars />

        {/* 로딩 텍스트 */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-brand-navy">
            {baseText}{dots}
          </h2>
          <p className="text-brand-muted">
            {t("loading.subtitle")}
          </p>
        </div>

        {/* 프로그레스 바 */}
        <div className="space-y-2">
          <div className="w-full bg-brand-border-light rounded-full h-2 overflow-hidden">
            <div
              className="bg-brand-accent h-full rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-xs text-brand-muted tabular-nums">{Math.round(progress)}%</p>
        </div>

        {/* 분석 단계 표시 */}
        <div className="space-y-3 text-left bg-brand-highlight rounded-button p-6 border border-brand-border">
          <div className="flex items-center gap-3">
            <CheckIcon active={progress > 20} />
            <span className={`text-sm ${progress > 20 ? 'text-brand-charcoal font-medium' : 'text-brand-muted'}`}>
              {t("loading.step1")}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <CheckIcon active={progress > 50} />
            <span className={`text-sm ${progress > 50 ? 'text-brand-charcoal font-medium' : 'text-brand-muted'}`}>
              {t("loading.step2")}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <CheckIcon active={progress > 80} />
            <span className={`text-sm ${progress > 80 ? 'text-brand-charcoal font-medium' : 'text-brand-muted'}`}>
              {t("loading.step3")}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function LoadingPage() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <LoadingContent />
    </Suspense>
  );
}
