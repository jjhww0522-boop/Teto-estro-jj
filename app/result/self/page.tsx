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

function ResultSelfContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { t } = useLocale();
  const [result, setResult] = useState<ResultType | null>(null);
  const [shareUrl, setShareUrl] = useState("");
  const [resultSlug, setResultSlug] = useState<string>("");
  const [dimensionScores, setDimensionScores] = useState<Record<CharType, number> | null>(null);
  const hasRecordedStats = useRef(false);

  useEffect(() => {
    const answersParam = searchParams.get("answers");
    const mode = searchParams.get("mode");
    if (!answersParam) {
      router.push("/");
      return;
    }

    let resolvedResult: ResultType | null = null;
    let displaySlug = "";
    const isGirlfriend = mode === "girlfriend";

    if (answersParam.includes(",")) {
      const indices = answersParam.split(",").map((s) => parseInt(s.trim(), 10));
      if (indices.every((n) => !Number.isNaN(n))) {
        const modeForCalc = isGirlfriend ? "girlfriend" : "boyfriend";
        const baseSlug = getTestResult(indices, modeForCalc);
        displaySlug = isGirlfriend ? `${baseSlug}_f` : baseSlug;
        resolvedResult = getResultBySlug(displaySlug);
        const scores = getTestScores(indices, modeForCalc);
        setDimensionScores(scores);
      }
    } else {
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
    const shareParams = new URLSearchParams({ answers: answersParam });
    if (isGirlfriend) shareParams.set("mode", "girlfriend");
    shareParams.set("isSelf", "1");
    setShareUrl(`${BASE_URL}/result/self?${shareParams.toString()}`);
  }, [searchParams, router]);

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
      matchMe={null}
      dimensionScores={dimensionScores}
      isSelf={true}
    />
  );
}

export default function ResultSelfPage() {
  return (
    <Suspense fallback={<LoadingFallback messageKey="result.loading" />}>
      <ResultSelfContent />
    </Suspense>
  );
}
