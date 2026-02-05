"use client";

import { useEffect, useState, useRef, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { calculateResult, results } from "@/data/results";
import Link from "next/link";
import AdPlaceholder from "@/components/AdPlaceholder";
import html2canvas from "html2canvas";

declare global {
  interface Window {
    Kakao: any;
  }
}

function ResultContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [result, setResult] = useState<any>(null);
  const [mounted, setMounted] = useState(false);
  const resultCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    const answersParam = searchParams.get("answers");
    
    if (!answersParam) {
      router.push("/");
      return;
    }

    const answerArray = answersParam.split("");
    const resultType = calculateResult(answerArray);
    setResult(results[resultType]);

    // 카카오 SDK 초기화
    if (window.Kakao && !window.Kakao.isInitialized()) {
      window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_KEY || "3226a5c1a88b15cf36cbd977ec3b1821");
    }
  }, [searchParams, router]);

  const shareToKakao = () => {
    if (!window.Kakao) {
      alert("카카오톡 공유 기능을 사용할 수 없습니다.");
      return;
    }

    const url = typeof window !== "undefined" ? window.location.href : "";

    window.Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: `나는 ${result.type}! ${result.title}`,
        description: result.description,
        imageUrl: "https://via.placeholder.com/800x600.png?text=Test+Result",
        link: {
          mobileWebUrl: url,
          webUrl: url,
        },
      },
      buttons: [
        {
          title: "나도 테스트하기",
          link: {
            mobileWebUrl: url.split("/result")[0],
            webUrl: url.split("/result")[0],
          },
        },
      ],
    });
  };

  const copyLink = () => {
    const url = typeof window !== "undefined" ? window.location.origin : "";
    navigator.clipboard.writeText(url);
    alert("링크가 복사되었습니다! 친구에게 공유해보세요 💕");
  };

  const downloadImage = async () => {
    if (!resultCardRef.current) return;

    try {
      // 로딩 표시
      const button = document.getElementById("download-btn");
      if (button) {
        button.textContent = "이미지 생성 중...";
      }

      // html2canvas로 이미지 생성
      const canvas = await html2canvas(resultCardRef.current, {
        backgroundColor: null,
        scale: 2, // 고해상도
        logging: false,
        useCORS: true,
      });

      // 이미지 다운로드
      const link = document.createElement("a");
      link.download = `${result.type}_테스트결과.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();

      // 버튼 원래대로
      if (button) {
        button.textContent = "📸 이미지로 저장하기";
      }

      alert("이미지가 저장되었습니다! 📸");
    } catch (error) {
      console.error("이미지 저장 실패:", error);
      alert("이미지 저장에 실패했습니다. 다시 시도해주세요.");
    }
  };

  if (!mounted || !result) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-2xl">결과를 불러오는 중...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 py-8">
      {/* 상단 광고 */}
      <AdPlaceholder position="top" />

      <div 
        ref={resultCardRef} 
        className="card max-w-2xl w-full space-y-8 bg-gradient-to-br from-white via-pastel-pink/10 to-pastel-purple/10"
        style={{ backgroundColor: '#ffffff' }}
      >
        {/* 결과 헤더 */}
        <div className="text-center space-y-4">
          <div className="text-8xl animate-bounce-slow">{result.emoji}</div>
          <h1 className="text-4xl font-bold text-gray-800">
            {result.type}
          </h1>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            {result.title}
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed px-4">
            {result.description}
          </p>
        </div>

        {/* 성격 특징 */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
            <span>✨</span>
            <span>나의 특징</span>
          </h3>
          <div className="bg-pastel-yellow/30 rounded-2xl p-6 space-y-3">
            {result.characteristics.map((char: string, index: number) => (
              <div
                key={index}
                className="flex items-start gap-2 text-gray-700"
              >
                <span>{char}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 연애 스타일 */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
            <span>💕</span>
            <span>연애 스타일</span>
          </h3>
          <div className="bg-pastel-pink/30 rounded-2xl p-6">
            <p className="text-gray-700 leading-relaxed">{result.loveStyle}</p>
          </div>
        </div>

        {/* 궁합 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
              <span>💚</span>
              <span>찰떡궁합</span>
            </h3>
            <div className="bg-pastel-mint/30 rounded-2xl p-4">
              {result.goodMatch.map((match: string, index: number) => (
                <div key={index} className="text-gray-700 font-medium">
                  • {match}
                </div>
              ))}
            </div>
          </div>
          
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
              <span>💔</span>
              <span>조심궁합</span>
            </h3>
            <div className="bg-pastel-peach/30 rounded-2xl p-4">
              {result.badMatch.map((match: string, index: number) => (
                <div key={index} className="text-gray-700 font-medium">
                  • {match}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 테토남 등 유형별 상세 가이드 (fullGuide 있을 때만) */}
        {result.fullGuide && (
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
              <span>📌</span>
              <span>상세 가이드</span>
            </h3>
            <div className="bg-gradient-to-br from-pastel-blue/20 to-pastel-purple/20 rounded-2xl p-6 border border-gray-100">
              <p className="text-gray-700 leading-relaxed whitespace-pre-line text-sm">
                {result.fullGuide}
              </p>
            </div>
          </div>
        )}

        {/* 상세 설명 - 왜 이런 결과가 나왔는지 (SEO·가치 있는 콘텐츠) */}
        {result.detailExplanation && (
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
              <span>📖</span>
              <span>왜 이런 결과가 나왔을까요?</span>
            </h3>
            <div className="bg-white/80 rounded-2xl p-6 border border-gray-100">
              <p className="text-gray-700 leading-relaxed whitespace-pre-line text-sm">
                {result.detailExplanation}
              </p>
            </div>
          </div>
        )}

        {/* 공유 버튼들 */}
        <div className="space-y-3 pt-4">
          <button
            onClick={shareToKakao}
            className="w-full bg-[#FEE500] hover:bg-[#FDD835] text-gray-800 font-bold py-4 px-6 rounded-2xl shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2"
          >
            <span className="text-xl">💬</span>
            <span>카카오톡으로 공유하기</span>
          </button>
          
          <button
            onClick={copyLink}
            className="w-full bg-white/90 hover:bg-pastel-blue text-gray-800 font-medium py-4 px-6 rounded-2xl shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2"
          >
            <span className="text-xl">🔗</span>
            <span>링크 복사하기</span>
          </button>

          <button
            id="download-btn"
            onClick={downloadImage}
            className="w-full bg-gradient-to-r from-pastel-mint to-pastel-blue hover:from-pastel-mint/80 hover:to-pastel-blue/80 text-gray-800 font-bold py-4 px-6 rounded-2xl shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2"
          >
            <span className="text-xl">📸</span>
            <span>이미지로 저장하기</span>
          </button>

          <Link href="/">
            <button className="w-full btn-primary">
              다시 테스트하기 🔄
            </button>
          </Link>
        </div>
      </div>

      {/* 하단 광고 */}
      <AdPlaceholder position="bottom" />
    </div>
  );
}

export default function ResultPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-2xl">결과를 불러오는 중...</div>
      </div>
    }>
      <ResultContent />
    </Suspense>
  );
}
