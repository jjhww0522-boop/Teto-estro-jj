"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import html2canvas from "html2canvas";
import type { ResultType } from "@/data/results";

declare global {
  interface Window {
    Kakao: any;
  }
}

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://teto-potato-test.vercel.app";

interface ResultViewProps {
  result: ResultType;
  shareUrl: string;
}

export default function ResultView({ result, shareUrl }: ResultViewProps) {
  const resultCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && window.Kakao && !window.Kakao.isInitialized()) {
      window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_KEY || "3226a5c1a88b15cf36cbd977ec3b1821");
    }
  }, []);

  const shareToKakao = () => {
    if (!window.Kakao) {
      alert("카카오톡 공유 기능을 사용할 수 없습니다.");
      return;
    }
    const textPart = `${result.tagline}\n\n${result.oneLiner}`.slice(0, 150);
    const linkText = `\n\n🔗 결과 보기: ${shareUrl}`;
    const longDescription = textPart + linkText;
    window.Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: `나는 ${result.type}! ${result.title}`,
        description: longDescription,
        imageUrl: "https://via.placeholder.com/1200x630/FFD6E8/5a4a6a?text=테토남+연애+테스트",
        link: { mobileWebUrl: shareUrl, webUrl: shareUrl },
      },
      buttons: [
        { title: "결과 보기", link: { mobileWebUrl: shareUrl, webUrl: shareUrl } },
        { title: "나도 테스트하기", link: { mobileWebUrl: BASE_URL, webUrl: BASE_URL } },
      ],
    });
  };

  const copyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    alert("링크가 복사되었습니다! 친구에게 공유해보세요 💕");
  };

  const downloadImage = async () => {
    if (!resultCardRef.current) return;
    try {
      const button = document.getElementById("download-btn");
      if (button) button.textContent = "이미지 생성 중...";
      const canvas = await html2canvas(resultCardRef.current, {
        backgroundColor: null,
        scale: 2,
        logging: false,
        useCORS: true,
      });
      const link = document.createElement("a");
      link.download = `${result.type}_테스트결과.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
      if (button) button.textContent = "📸 이미지로 저장하기";
      alert("이미지가 저장되었습니다! 📸");
    } catch (error) {
      console.error("이미지 저장 실패:", error);
      alert("이미지 저장에 실패했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 py-8">
      <div
        ref={resultCardRef}
        className="card max-w-2xl w-full space-y-8 bg-gradient-to-br from-white via-pastel-pink/10 to-pastel-purple/10"
        style={{ backgroundColor: "#ffffff" }}
      >
        {/* 헤더: 이모지 + 유형명: 부제 */}
        <div className="text-center space-y-4">
          <div className="text-8xl animate-bounce-slow">{result.emoji}</div>
          <h1 className="text-3xl font-bold text-gray-800">
            {result.type}: {result.title}
          </h1>
          <blockquote className="text-lg text-gray-600 italic border-l-4 border-pastel-pink/50 pl-4 py-1 text-left">
            &ldquo;{result.tagline}&rdquo;
          </blockquote>
          <p className="text-base text-gray-600 font-medium">{result.oneLiner}</p>
        </div>

        {/* 키워드 태그 */}
        <div className="flex flex-wrap gap-2 justify-center">
          {result.keywords.map((keyword, index) => (
            <span
              key={index}
              className="px-3 py-1.5 rounded-full text-sm font-medium bg-pastel-yellow/30 text-gray-700 border border-pastel-yellow/50"
            >
              #{keyword}
            </span>
          ))}
        </div>

        {/* 당신의 연애는... */}
        <div className="space-y-3">
          <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
            <span>🔍</span>
            <span>당신의 연애는...</span>
          </h3>
          <div className="bg-pastel-pink/20 rounded-2xl p-6 border border-pastel-pink/30">
            <p className="text-gray-700 leading-relaxed">{result.loveDescription}</p>
          </div>
        </div>

        {/* 체크 포인트 Good / Bad */}
        <div className="space-y-3">
          <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
            <span>✅</span>
            <span>체크 포인트</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-pastel-mint/30 rounded-2xl p-4 border border-pastel-mint/40">
              <p className="text-xs font-bold text-pastel-mint/80 uppercase tracking-wide mb-2">Good</p>
              <p className="text-gray-700 text-sm leading-relaxed">{result.checkGood}</p>
            </div>
            <div className="bg-pastel-peach/30 rounded-2xl p-4 border border-pastel-peach/40">
              <p className="text-xs font-bold text-pastel-peach/80 uppercase tracking-wide mb-2">Bad</p>
              <p className="text-gray-700 text-sm leading-relaxed">{result.checkBad}</p>
            </div>
          </div>
        </div>

        {/* 찰떡궁합 / 조심궁합 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
              <span>💚</span>
              <span>찰떡궁합</span>
            </h3>
            <div className="bg-pastel-mint/30 rounded-2xl p-4">
              {result.goodMatch.map((match: string, index: number) => (
                <div key={index} className="text-gray-700 font-medium">• {match}</div>
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
                <div key={index} className="text-gray-700 font-medium">• {match}</div>
              ))}
            </div>
          </div>
        </div>

        {/* 왜 이런 결과가? (심리학적 분석) */}
        <div className="space-y-3">
          <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
            <span>💡</span>
            <span>왜 이런 결과가? (심리학적 분석)</span>
          </h3>
          <div className="bg-gradient-to-br from-pastel-blue/20 to-pastel-purple/20 rounded-2xl p-6 border border-gray-100">
            <p className="text-gray-700 leading-relaxed text-sm">{result.psychologicalAnalysis}</p>
          </div>
        </div>

        {/* 액션 버튼 */}
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
            <button className="w-full btn-primary">다시 테스트하기 🔄</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
