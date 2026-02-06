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
        
        {/* 제목 */}
        <div className="space-y-3">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            포테토 연애 도감
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            나의 &apos;감자&apos; 유형 찾기
          </h2>
        </div>
        
        {/* 설명 */}
        <p className="text-gray-600 text-lg leading-relaxed px-4">
          겉바속촉? 포근달달?<br />
          당신의 연애 온도와 닮은 감자는?
        </p>
        <p className="text-gray-600 text-base leading-relaxed px-4">
          12가지 질문을 통해 <span className="font-bold text-pink-500">숨겨진 8가지 로맨스 취향</span>을 분석해 드려요.
        </p>
        <p className="text-xs text-gray-400">
          테토·포테토·에겐·고구마·치즈·살사·에헴·에라
        </p>
        
        {/* 시작 버튼 */}
        <Link href="/test">
          <button className="btn-primary w-full text-xl">
            내 유형 확인하러 가기 🥔
          </button>
        </Link>
        
        {/* 푸터 텍스트 */}
        <p className="text-sm text-gray-500 pt-4">
          약 2분 소요 • 총 12문항
        </p>
      </div>
    </div>
  );
}
