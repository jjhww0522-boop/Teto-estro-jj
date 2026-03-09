import type { Metadata } from "next";
import Link from "next/link";
import { results, SLUG_TO_KEY } from "@/data/results";

export const metadata: Metadata = {
  title: "8가지 연애 유형 가이드 | 테토 연구소",
  description: "테토남, 포테토남, 에겐남, 고구마남, 치즈남, 살사남, 에헴남, 에라남 — 8가지 연애 유형의 특징, 소통 방식, 궁합을 완벽 정리했습니다.",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || "https://tetolab.com"}/types`,
  },
};

const TYPE_SLUGS = [
  { slug: "teto",         name: "테토남",   emoji: "🚜" },
  { slug: "potato",       name: "포테토남", emoji: "🧸" },
  { slug: "egen",         name: "에겐남",   emoji: "💌" },
  { slug: "sweet_potato", name: "고구마남", emoji: "🍠" },
  { slug: "cheese",       name: "치즈남",   emoji: "🧀" },
  { slug: "salsa",        name: "살사남",   emoji: "🌶️" },
  { slug: "ehem",         name: "에헴남",   emoji: "⚖️" },
  { slug: "era",          name: "에라남",   emoji: "🌊" },
] as const;

export default function TypesIndexPage() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-10">
      {/* 헤더 */}
      <header className="mb-8">
        <div className="flex items-center gap-2 text-xs text-brand-muted mb-4">
          <Link href="/" className="hover:underline">홈</Link>
          <span>›</span>
          <span>유형 가이드</span>
        </div>
        <h1 className="text-2xl font-black text-brand-charcoal mb-3">8가지 연애 유형 완벽 가이드</h1>
        <p className="text-sm text-brand-charcoal leading-relaxed">
          테토-에스트로 이론에서 정의하는 8가지 연애 유형을 소개합니다. 각 유형의 연애 스타일,
          소통 방식, 궁합, 데이트 팁을 통해 나와 연인을 더 깊이 이해해 보세요.
        </p>
      </header>

      {/* 유형 카드 그리드 */}
      <section className="mb-10">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {TYPE_SLUGS.map(({ slug, name, emoji }) => {
            const key = SLUG_TO_KEY[slug];
            const result = key ? results[key] : null;
            return (
              <Link
                key={slug}
                href={`/types/${slug}`}
                className="flex gap-4 p-4 bg-white rounded-xl border border-brand-border hover:border-brand-accent/40 hover:shadow-sm transition-all"
              >
                <span className="text-3xl flex-shrink-0" aria-hidden>{emoji}</span>
                <div>
                  <strong className="text-sm font-black text-brand-charcoal block mb-1">{name}</strong>
                  {result && (
                    <>
                      <p className="text-xs text-brand-accent font-medium mb-1">{result.title}</p>
                      <p className="text-xs text-brand-muted leading-relaxed line-clamp-2">{result.oneLiner}</p>
                    </>
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* 테토-에스트로 이론 소개 */}
      <section className="mb-8 p-5 bg-brand-highlight rounded-xl border border-brand-border">
        <h2 className="text-base font-black text-brand-charcoal mb-3">테토-에스트로 유형이란?</h2>
        <p className="text-sm text-brand-charcoal leading-relaxed mb-3">
          테토-에스트로 유형은 호르몬 기반 행동 패턴 연구에서 비롯된 심리 유형 이론입니다.
          테스토스테론(Testosterone)의 영향을 강하게 받는 <strong>테토(Teto) 성향</strong>과
          에스트로겐(Estrogen)의 영향을 강하게 받는 <strong>에스트로(Estro) 성향</strong>으로
          사람의 연애 행동 패턴을 분류합니다.
        </p>
        <p className="text-sm text-brand-charcoal leading-relaxed">
          이 이론을 바탕으로 테토 연구소는 실제 연애 상황에서의 반응 패턴을 분석해 8가지
          세부 유형을 정의했습니다. 각 유형은 소통 방식, 감정 표현, 갈등 해결, 애착 패턴에서
          뚜렷한 차이를 보입니다.
        </p>
      </section>

      {/* CTA */}
      <div className="p-5 bg-brand-charcoal rounded-xl text-center">
        <p className="text-sm text-white/80 mb-1">나는 어떤 유형일까요?</p>
        <p className="text-base font-black text-white mb-4">지금 바로 무료로 알아보세요</p>
        <Link
          href="/gender-select"
          className="inline-block bg-brand-accent text-white text-sm font-bold px-6 py-2.5 rounded-full hover:opacity-90 transition"
        >
          성향 테스트 시작하기
        </Link>
      </div>
    </main>
  );
}
