"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="card max-w-md w-full text-center space-y-8 animate-fade-in">
        {/* 메인 이모지 */}
        <div className="text-8xl animate-bounce-slow">
          💝
        </div>

        {/* 8가지 감자 캐릭터 실루엣 - 호기심 유발 */}
        <div className="space-y-2">
          <p className="text-sm text-gray-500 font-medium">
            당신의 연애 온도와 닮은 캐릭터는?
          </p>
          <div className="flex flex-wrap justify-center gap-3 py-2">
            {["🚜", "🧸", "💌", "🍠", "🧀", "🌶️", "⚖️", "🌊"].map((emoji, i) => (
              <span
                key={i}
                className="text-2xl md:text-3xl opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                title="8가지 유형"
              >
                {emoji}
              </span>
            ))}
          </div>
        </div>
        
        {/* 제목 */}
        <div className="space-y-3">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            포테토 연애 도감
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            나의 &apos;감자&apos; 유형 찾기
          </h2>
        </div>
        
        {/* 카피 - 감자 컨셉 강화 */}
        <p className="text-gray-600 text-lg leading-relaxed px-4">
          갓 튀긴 감튀처럼 화끈한가요?<br />
          아니면 찐감자처럼 포근한가요?
        </p>
        <p className="text-gray-600 text-base leading-relaxed px-4">
          <span className="font-bold text-pink-500">8가지 고유한 &apos;맛&apos;</span>으로 분석하는 나의 연애 도감!
        </p>
        <p className="text-xs text-gray-400">
          테토·포테토·에겐·고구마·치즈·살사·에헴·에라
        </p>

        {/* 참여 허들 낮춤: 소요 시간·문항 수를 버튼 바로 위에 배치 */}
        <p className="text-sm font-medium text-gray-600 bg-gray-100/80 rounded-xl py-2 px-4">
          약 2분 소요 · 총 12문항
        </p>
        
        {/* 시작 버튼 */}
        <Link href="/test">
          <button className="btn-primary w-full text-xl">
            내 유형 확인하러 가기 🥔
          </button>
        </Link>
      </div>
    </div>
  );
}
