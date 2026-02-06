import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "남자친구 테토 농도 분석기 | 테토 연구소",
  description: "내 남친의 테토력은 과연 몇 %? 12가지 상황으로 분석하는 정밀 성향 리포트",
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#FDFCF7] flex flex-col items-center justify-center p-6 font-sans relative">
      {/* 연구소 배경 효과 (grid 패턴) */}
      <div
        className="absolute inset-0 z-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#4B2C20 1px, transparent 1px), linear-gradient(90deg, #4B2C20 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="z-10 w-full max-w-[480px] bg-white rounded-[40px] shadow-2xl overflow-hidden border-4 border-purple-100 flex flex-col items-center p-10 text-center">
        {/* 상단 실험 아이콘 섹션 */}
        <div className="relative mb-8">
          <div className="text-6xl animate-bounce">⚗️</div>
          <div className="absolute -top-2 -right-4 text-4xl">🧪</div>
          <div className="absolute -bottom-2 -left-4 text-3xl">🔍</div>
        </div>

        {/* 메인 타이틀 */}
        <h1 className="text-[28px] font-black text-gray-800 leading-tight mb-2">
          연인 <span className="text-purple-600">테토 농도</span> 분석기
        </h1>
        <p className="text-purple-400 font-bold text-lg mb-6">
          내 연인의 &apos;테토력&apos;은 과연 몇 %?
        </p>

        {/* 상세 설명 리스트 */}
        <div className="bg-purple-50 rounded-2xl p-5 mb-8 w-full text-sm text-gray-600 space-y-2">
          <p>🥔 겉바속촉 감자부터 직진 불도저 테토까지</p>
          <p>📊 12가지 상황으로 추출하는 정밀 성향 리포트</p>
          <p className="font-bold text-purple-700 underline underline-offset-4">
            당신의 연인을 관찰한 그대로 응답하세요!
          </p>
        </div>

        {/* 캐릭터 라벨 */}
        <div className="text-[10px] text-gray-300 tracking-widest mb-6">
          TETO · POTATO · EGEN · GOGUMA · CHEESE · SALSA · EHEM · ERA
        </div>

        {/* 분석 모드 선택: 남친 vs 여친 */}
        <div className="w-full space-y-3 mb-6">
          <Link href="/test?mode=boyfriend" className="block w-full">
            <button
              type="button"
              className="w-full py-5 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-black text-xl shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              남친 농도 분석하기 ⚗️
            </button>
          </Link>
          <Link href="/test?mode=girlfriend" className="block w-full">
            <button
              type="button"
              className="w-full py-5 bg-white border-2 border-purple-300 text-purple-700 rounded-full font-black text-xl shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              여친 농도 분석하기 🧪
            </button>
          </Link>
        </div>

        {/* 하단 통계 정보 */}
        <div className="text-xs text-gray-400 flex flex-col gap-1">
          <span>약 2분 소요 · 총 12문항</span>
          <span className="text-purple-300 font-mono mt-2">
            현재까지 1,234명의 남친 분석 완료
          </span>
        </div>
      </div>

      {/* 푸터 */}
      <footer className="mt-10 text-[10px] text-gray-400 space-x-4">
        <Link href="/privacy" className="hover:underline">
          개인정보처리방침
        </Link>
        <Link href="/terms" className="hover:underline">
          이용약관
        </Link>
      </footer>
    </main>
  );
}
