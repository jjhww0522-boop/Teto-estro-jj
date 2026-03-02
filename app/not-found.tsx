import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "페이지를 찾을 수 없습니다 | 테토 연구소",
    description: "요청하신 페이지를 찾을 수 없습니다. 테토 연구소 홈으로 돌아가세요.",
};

export default function NotFound() {
    return (
        <main className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center bg-brand-cream">
            <span className="text-6xl mb-4">🥔</span>
            <h1 className="text-3xl font-black text-brand-charcoal mb-2">404</h1>
            <p className="text-lg font-bold text-brand-charcoal mb-1">페이지를 찾을 수 없어요</p>
            <p className="text-sm text-brand-muted mb-8 max-w-xs leading-relaxed">
                요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
                아래 링크에서 원하는 내용을 찾아보세요.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
                <Link
                    href="/"
                    className="px-6 py-3 bg-brand-accent text-white rounded-xl font-semibold text-sm hover:bg-brand-accent/90 transition-colors"
                >
                    🏠 홈으로 가기
                </Link>
                <Link
                    href="/blog"
                    className="px-6 py-3 bg-white text-brand-charcoal border border-brand-border rounded-xl font-semibold text-sm hover:border-brand-accent/50 transition-colors"
                >
                    📖 블로그 보기
                </Link>
                <Link
                    href="/test"
                    className="px-6 py-3 bg-white text-brand-charcoal border border-brand-border rounded-xl font-semibold text-sm hover:border-brand-accent/50 transition-colors"
                >
                    🧪 테스트 하기
                </Link>
            </div>
        </main>
    );
}
