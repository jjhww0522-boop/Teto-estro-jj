"use client";

import { useEffect, useState, Suspense, useRef } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { calculateResult, results, getResultBySlug } from "@/data/results";
import { getTestResult, getTestScores } from "@/utils/calculate";
import type { CharType } from "@/utils/calculate";
import ResultView from "@/components/ResultView";
import { LoadingFallback } from "@/components/LoadingFallback";
import type { ResultType } from "@/data/results";
import { useLocale } from "@/components/LocaleProvider";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://tetolab.com";

function ResultContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { t } = useLocale();
  const [result, setResult] = useState<ResultType | null>(null);
  const [shareUrl, setShareUrl] = useState("");
  const [resultSlug, setResultSlug] = useState<string>("");
  const [matchMe, setMatchMe] = useState<string | null>(null);
  const [dimensionScores, setDimensionScores] = useState<Record<CharType, number> | null>(null);
  const hasRecordedStats = useRef(false);

  /** 셀프 진단 여부는 URL에서 바로 읽어 첫 렌더부터 올바른 문구 표시 */
  const isSelf = searchParams.get("isSelf") === "1";

  useEffect(() => {
    const answersParam = searchParams.get("answers");
    const mode = searchParams.get("mode");
    const matchMeParam = searchParams.get("matchMe");
    const isSelfParam = searchParams.get("isSelf");
    if (!answersParam) {
      router.push("/");
      return;
    }

    let resolvedResult: ResultType | null = null;
    let displaySlug = "";
    const isGirlfriend = mode === "girlfriend";

    // 새 방식: 선택지 인덱스 "0,2,1,0,..." → 가중치 합산 후 slug로 결과 조회
    if (answersParam.includes(",")) {
      const indices = answersParam.split(",").map((s) => parseInt(s.trim(), 10));
      if (indices.every((n) => !Number.isNaN(n))) {
        const modeForCalc = isGirlfriend ? "girlfriend" : "boyfriend";
        const baseSlug = getTestResult(indices, modeForCalc);
        displaySlug = isGirlfriend ? `${baseSlug}_f` : baseSlug;
        resolvedResult = getResultBySlug(displaySlug);

        // 차원별 점수 계산 (레이더 차트용)
        const scores = getTestScores(indices, modeForCalc);
        setDimensionScores(scores);
      }
    } else {
      // 레거시: 유형 코드 문자열 "TPGEC..." → 카운트 후 결과 키로 조회
      const answerArray = answersParam.split("");
      const resultKey = calculateResult(answerArray);
      resolvedResult = results[resultKey] ?? null;
    }

    if (!resolvedResult) {
      router.push("/");
      return;
    }
    setResult(resolvedResult);
    setResultSlug(displaySlug);
    setMatchMe(matchMeParam || null);
    const shareParams = new URLSearchParams({ answers: answersParam });
    if (isGirlfriend) shareParams.set("mode", "girlfriend");
    if (isSelfParam === "1") shareParams.set("isSelf", "1");
    setShareUrl(`${BASE_URL}/result?${shareParams.toString()}`);
  }, [searchParams, router]);

  // 분석 완료 시 실데이터 카운트 1회만 증가
  useEffect(() => {
    if (!result || hasRecordedStats.current) return;
    hasRecordedStats.current = true;
    fetch("/api/stats", { method: "POST" }).catch(() => {});
  }, [result]);

  if (!result) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-2xl">{t("result.loading")}</div>
      </div>
    );
  }

  return (
    <ResultView
      result={result}
      shareUrl={shareUrl}
      resultSlug={resultSlug}
      matchMe={matchMe}
      dimensionScores={dimensionScores}
      isSelf={isSelf}
    />
  );
}

export default function ResultPage() {
  return (
    <Suspense fallback={<LoadingFallback messageKey="result.loading" />}>
      <ResultContent />
    </Suspense>
  );
}
