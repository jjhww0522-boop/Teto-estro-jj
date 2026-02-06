"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { calculateResult, results } from "@/data/results";
import ResultView from "@/components/ResultView";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://teto-potato-test.vercel.app";

function ResultContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [result, setResult] = useState<typeof results[string] | null>(null);
  const [shareUrl, setShareUrl] = useState("");

  useEffect(() => {
    const answersParam = searchParams.get("answers");
    if (!answersParam) {
      router.push("/");
      return;
    }
    const answerArray = answersParam.split("");
    const resultType = calculateResult(answerArray);
    setResult(results[resultType]);
    setShareUrl(`${BASE_URL}/result?answers=${encodeURIComponent(answersParam)}`);
  }, [searchParams, router]);

  if (!result) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-2xl">결과를 불러오는 중...</div>
      </div>
    );
  }

  return <ResultView result={result} shareUrl={shareUrl} />;
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
