"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";

function LoadingContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState("결과 분석 중");

  useEffect(() => {
    const answersParam = searchParams.get("answers");
    
    if (!answersParam) {
      router.push("/");
      return;
    }

    // 로딩 텍스트 애니메이션
    const textInterval = setInterval(() => {
      setLoadingText((prev) => {
        if (prev === "결과 분석 중...") return "결과 분석 중";
        return prev + ".";
      });
    }, 500);

    // 프로그레스 바 애니메이션
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + 2;
      });
    }, 60); // 3초 동안 100%까지

    const modeParam = searchParams.get("mode") || "";
    const matchMeParam = searchParams.get("matchMe") || "";

    // 3초 후 결과 페이지로 이동 (answers, mode, matchMe 유지)
    const timer = setTimeout(() => {
      const params = new URLSearchParams({ answers: answersParam });
      if (modeParam) params.set("mode", modeParam);
      if (matchMeParam) params.set("matchMe", matchMeParam);
      router.push(`/result?${params.toString()}`);
    }, 3000);

    return () => {
      clearTimeout(timer);
      clearInterval(textInterval);
      clearInterval(progressInterval);
    };
  }, [searchParams, router]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      {/* 메인 로딩 화면 */}
      <div className="card max-w-md w-full text-center space-y-8">
        {/* 로딩 애니메이션 */}
        <div className="relative">
          <div className="text-8xl animate-bounce-slow">
            🔮
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 border-4 border-pastel-purple/30 border-t-pastel-pink rounded-full animate-spin"></div>
          </div>
        </div>

        {/* 로딩 텍스트 */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            {loadingText}
          </h2>
          <p className="text-gray-600">
            당신의 유형을 분석하고 있어요
          </p>
        </div>

        {/* 프로그레스 바 */}
        <div className="space-y-2">
          <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
            <div
              className="bg-gradient-to-r from-pastel-purple via-pastel-pink to-pastel-blue h-full rounded-full transition-all duration-300 ease-out flex items-center justify-end pr-2"
              style={{ width: `${progress}%` }}
            >
              {progress > 10 && (
                <span className="text-xs font-bold text-white">
                  {Math.round(progress)}%
                </span>
              )}
            </div>
          </div>
        </div>

        {/* 분석 단계 표시 */}
        <div className="space-y-3 text-left bg-pastel-yellow/10 rounded-2xl p-6">
          <div className="flex items-center gap-3">
            <div className={`w-2 h-2 rounded-full ${progress > 20 ? 'bg-green-400' : 'bg-gray-300'}`}></div>
            <span className={`text-sm ${progress > 20 ? 'text-gray-700 font-medium' : 'text-gray-400'}`}>
              답변 데이터 수집 완료
            </span>
          </div>
          <div className="flex items-center gap-3">
            <div className={`w-2 h-2 rounded-full ${progress > 50 ? 'bg-green-400' : 'bg-gray-300'}`}></div>
            <span className={`text-sm ${progress > 50 ? 'text-gray-700 font-medium' : 'text-gray-400'}`}>
              성격 유형 분석 중
            </span>
          </div>
          <div className="flex items-center gap-3">
            <div className={`w-2 h-2 rounded-full ${progress > 80 ? 'bg-green-400' : 'bg-gray-300'}`}></div>
            <span className={`text-sm ${progress > 80 ? 'text-gray-700 font-medium' : 'text-gray-400'}`}>
              궁합 정보 생성 중
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function LoadingPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-2xl">로딩 중...</div>
      </div>
    }>
      <LoadingContent />
    </Suspense>
  );
}
