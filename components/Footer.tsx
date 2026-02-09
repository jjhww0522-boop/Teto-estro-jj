import Link from "next/link";
import { APP_VERSION, LAST_UPDATED } from "@/constants/version";

export default function Footer() {
  return (
    <footer className="mt-auto w-full bg-white/60 backdrop-blur-sm border-t border-gray-200/80">
      <div className="max-w-2xl mx-auto px-4 py-8 text-center space-y-4">
        {/* 저작권 */}
        <p className="text-sm text-gray-600">
          Copyright © 2026 potatoboyfriends. All rights reserved.
        </p>

        {/* 정책 링크 */}
        <nav className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-sm">
          <Link href="/privacy" className="text-gray-600 hover:text-pink-500 underline underline-offset-2">
            개인정보처리방침 (Privacy Policy)
          </Link>
          <span className="text-gray-300">|</span>
          <Link href="/terms" className="text-gray-600 hover:text-pink-500 underline underline-offset-2">
            이용약관
          </Link>
        </nav>

        {/* 테스트 설명 */}
        <p className="text-xs text-gray-500 leading-relaxed max-w-xl mx-auto pt-2">
          본 테스트는 연애 성향을 재미로 알아보는 심리 테스트입니다.
          진단·치료 목적이 아니며, 결과는 참고용으로만 활용해 주세요.
        </p>

        {/* 버전 · 수정일시 (최하단) */}
        <p className="text-[10px] text-gray-400 pt-4">
          v{APP_VERSION} · 수정 {LAST_UPDATED}
        </p>
      </div>
    </footer>
  );
}
