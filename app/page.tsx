import type { Metadata } from "next";
import Link from "next/link";
import MainChoice from "@/components/MainChoice";
import { getBlogPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: "테토 농도 분석기 | 테토 연구소 - 연인 분석 & 나의 성향",
  description: "내 애인의 테토력을 분석하거나, 나의 연애 유형을 셀프 진단해보세요. 15가지 상황으로 알아보는 정밀 성향 리포트",
};

export default function HomePage() {
  const latestPosts = getBlogPosts().slice(0, 3);

  return (
    <>
      <MainChoice />

      {/* 서비스 소개 섹션 */}
      <section className="max-w-2xl mx-auto px-4 py-12 border-t border-brand-border">
        <h2 className="text-xl font-black text-brand-charcoal mb-3">테토 연구소란?</h2>
        <p className="text-sm text-brand-charcoal leading-relaxed mb-4">
          테토 연구소는 <strong>테토(Testo)·에스트로(Estro) 심리 유형 이론</strong>을 바탕으로 나와 연인의
          연애 성향을 분석하는 서비스입니다. 호르몬 기반 행동 패턴 연구에서 비롯된 이 두 유형은, 사람마다
          다른 소통 방식·감정 표현·갈등 해소 방식을 설명하는 데 활용됩니다.
        </p>
        <p className="text-sm text-brand-charcoal leading-relaxed mb-4">
          15가지 실제 연애 상황을 기반으로 설계된 문항에 답변하면 나의 성향 점수와 함께 상세한 분석
          리포트를 받을 수 있습니다. 단순한 O/X 퀴즈가 아닌 <strong>상황별 반응 패턴</strong>을 분석해
          더 정확한 결과를 제공합니다. 연인 분석 기능을 통해서는 상대방의 행동을 관찰한 내용을 바탕으로
          연인의 테토 성향을 파악하고, 서로의 차이를 이해할 수 있습니다.
        </p>
        <p className="text-sm text-brand-charcoal leading-relaxed">
          심리 분석 외에도 <strong>별빛 타로</strong> 서비스에서 AI 기반 타로 리딩으로 연애운·금전운·직업운
          등 궁금한 운세를 카드 세 장으로 살펴볼 수 있습니다. 테토 연구소의 모든 서비스는 무료로
          제공되며, 회원 가입 없이 바로 이용할 수 있습니다.
        </p>
      </section>

      {/* 서비스 카드 섹션 */}
      <section className="max-w-2xl mx-auto px-4 pb-10">
        <h2 className="text-lg font-black text-brand-charcoal mb-4">제공 서비스</h2>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          <Link
            href="/gender-select"
            className="flex flex-col gap-2 p-4 bg-brand-highlight rounded-xl border border-brand-accent/30 hover:shadow-sm transition-all"
          >
            <span className="text-2xl">🥔</span>
            <strong className="text-sm font-black text-brand-charcoal">나의 성향 분석</strong>
            <p className="text-xs text-brand-muted leading-relaxed">
              15가지 연애 상황에 답변하고 나의 테토·에스트로 성향을 확인해보세요.
            </p>
          </Link>
          <Link
            href="/partner-select"
            className="flex flex-col gap-2 p-4 bg-white rounded-xl border border-brand-border hover:shadow-sm transition-all"
          >
            <span className="text-2xl">💕</span>
            <strong className="text-sm font-black text-brand-charcoal">연인 성향 분석</strong>
            <p className="text-xs text-brand-muted leading-relaxed">
              연인을 관찰한 내용으로 답변하면 상대방의 유형을 정밀 분석해드립니다.
            </p>
          </Link>
          <Link
            href="/tarot"
            className="flex flex-col gap-2 p-4 bg-white rounded-xl border border-brand-border hover:shadow-sm transition-all"
          >
            <span className="text-2xl">✨</span>
            <strong className="text-sm font-black text-brand-charcoal">별빛 타로 (New!)</strong>
            <p className="text-xs text-brand-muted leading-relaxed">
              AI 타로 리딩으로 연애운·금전운·건강운을 카드 세 장으로 살펴보세요.
            </p>
          </Link>
        </div>
      </section>

      {/* 최신 블로그 포스트 섹션 */}
      <section className="max-w-2xl mx-auto px-4 py-10 border-t border-brand-border">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-brand-charcoal">📖 연애 심리 연구소</h2>
          <Link href="/blog" className="text-sm text-brand-accent hover:underline font-medium">
            더 보기 →
          </Link>
        </div>
        <ul className="space-y-3">
          {latestPosts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="flex flex-col gap-1 p-4 bg-white rounded-xl border border-brand-border hover:border-brand-accent/40 hover:shadow-sm transition-all"
              >
                <span className="text-xs font-medium text-brand-accent">{post.category}</span>
                <span className="text-sm font-bold text-brand-charcoal line-clamp-1">{post.title}</span>
                <span className="text-xs text-brand-muted line-clamp-1">{post.description}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
