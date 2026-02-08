"use client";

import { useEffect, useState, Suspense, useRef } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { calculateResult, results, getResultBySlug } from "@/data/results";
import { getTestResult } from "@/utils/calculate";
import ResultView from "@/components/ResultView";
import type { ResultType } from "@/data/results";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://teto-potato-test.vercel.app";

function ResultContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [result, setResult] = useState<ResultType | null>(null);
  const [shareUrl, setShareUrl] = useState("");
  const [resultSlug, setResultSlug] = useState<string>("");
  const [matchMe, setMatchMe] = useState<string | null>(null);
  const hasRecordedStats = useRef(false);

  useEffect(() => {
    const answersParam = searchParams.get("answers");
    const mode = searchParams.get("mode");
    const matchMeParam = searchParams.get("matchMe");
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
        <div className="text-2xl">결과를 불러오는 중...</div>
      </div>
    );
  }

  return (
    <ResultView
      result={result}
      shareUrl={shareUrl}
      resultSlug={resultSlug}
      matchMe={matchMe}
    />
  );
}

export default function ResultPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-2xl">결과를 불러오는 중...</div>
        </div>
      }
    >
      <ResultContent />
    </Suspense>
  );
}
