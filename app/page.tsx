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
          <h1 className="text-4xl font-bold text-gray-800">
            테토남/포테토남/에겐남
          </h1>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            유형 테스트
          </h2>
        </div>
        
        {/* 설명 */}
        <p className="text-gray-600 text-lg leading-relaxed px-4">
          당신은 어떤 남자친구 유형인가요?<br />
          12개의 질문으로 알아보는<br />
          <span className="font-bold text-pink-500">8가지 연애 스타일!</span>
        </p>
        <p className="text-xs text-gray-400">
          테토·포테토·에겐·고구마·치즈·살사·에헴·에라
        </p>
        
        {/* 시작 버튼 */}
        <Link href="/test">
          <button className="btn-primary w-full text-xl">
            테스트 시작하기 ✨
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
