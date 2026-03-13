import type { Metadata } from "next";
import Link from "next/link";
import MainChoice from "@/components/MainChoice";
import AdSenseUnit from "@/components/AdSenseUnit";
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
        <div className="grid grid-cols-3 gap-2 sm:gap-3">
          <Link
            href="/gender-select"
            className="flex flex-col items-center gap-1.5 p-3 sm:p-4 bg-brand-highlight rounded-xl border border-brand-accent/30 hover:shadow-sm transition-all text-center"
          >
            <span className="text-2xl">🥔</span>
            <strong className="text-[11px] sm:text-sm font-black text-brand-charcoal leading-tight">나의 성향 분석</strong>
            <p className="hidden sm:block text-xs text-brand-muted leading-relaxed">
              15가지 연애 상황에 답변하고 나의 테토·에스트로 성향을 확인해보세요.
            </p>
          </Link>
          <Link
            href="/partner-select"
            className="flex flex-col items-center gap-1.5 p-3 sm:p-4 bg-white rounded-xl border border-brand-border hover:shadow-sm transition-all text-center"
          >
            <span className="text-2xl">💕</span>
            <strong className="text-[11px] sm:text-sm font-black text-brand-charcoal leading-tight">연인 성향 분석</strong>
            <p className="hidden sm:block text-xs text-brand-muted leading-relaxed">
              연인을 관찰한 내용으로 답변하면 상대방의 유형을 정밀 분석해드립니다.
            </p>
          </Link>
          <Link
            href="/tarot"
            className="flex flex-col items-center gap-1.5 p-3 sm:p-4 bg-white rounded-xl border border-brand-border hover:shadow-sm transition-all text-center"
          >
            <span className="text-2xl">✨</span>
            <strong className="text-[11px] sm:text-sm font-black text-brand-charcoal leading-tight">별빛 타로 <span className="text-brand-accent">New</span></strong>
            <p className="hidden sm:block text-xs text-brand-muted leading-relaxed">
              AI 타로 리딩으로 연애운·금전운·건강운을 카드 세 장으로 살펴보세요.
            </p>
          </Link>
        </div>
      </section>

      {/* 심리학 이론 기반 섹션 */}
      <section className="max-w-2xl mx-auto px-4 py-10 border-t border-brand-border">
        <h2 className="text-xl font-black text-brand-charcoal mb-4">심리학 이론에 기반한 분석</h2>
        <div className="space-y-4">
          <div className="p-4 bg-white rounded-xl border border-brand-border">
            <h3 className="text-sm font-black text-brand-charcoal mb-2">Big Five 성격 모델</h3>
            <p className="text-sm text-brand-charcoal leading-relaxed">
              성격 심리학에서 가장 널리 인정받는 5요인 모델(개방성, 성실성, 외향성, 친화성, 신경성)을
              연애 맥락에 맞게 재해석했습니다. 각 요인이 연인 관계에서 어떤 행동 패턴으로 나타나는지
              분석합니다.
            </p>
          </div>
          <div className="p-4 bg-white rounded-xl border border-brand-border">
            <h3 className="text-sm font-black text-brand-charcoal mb-2">애착 이론 (Attachment Theory)</h3>
            <p className="text-sm text-brand-charcoal leading-relaxed">
              존 볼비(John Bowlby)와 메리 에인스워스(Mary Ainsworth)의 애착 이론을 바탕으로,
              안정형·불안형·회피형·혼란형 네 가지 애착 유형이 연애 관계에 미치는 영향을 살펴봅니다.
              나의 애착 패턴을 이해하면 관계에서 반복되는 갈등의 원인을 파악할 수 있습니다.
            </p>
          </div>
          <div className="p-4 bg-white rounded-xl border border-brand-border">
            <h3 className="text-sm font-black text-brand-charcoal mb-2">스턴버그의 사랑의 삼각형 이론</h3>
            <p className="text-sm text-brand-charcoal leading-relaxed">
              로버트 스턴버그(Robert Sternberg)의 이론에 따르면 사랑은 친밀감(Intimacy),
              열정(Passion), 헌신(Commitment) 세 요소로 구성됩니다. 테토 연구소는 이 세 축을
              기준으로 현재 관계의 사랑 유형을 진단하고, 더 건강한 관계를 위한 방향을 제시합니다.
            </p>
          </div>
        </div>
        <div className="mt-4 text-center">
          <Link href="/about" className="text-sm text-brand-accent hover:underline font-medium">
            분석 방법론 더 알아보기 →
          </Link>
        </div>
      </section>

      {/* 이용 방법 섹션 */}
      <section className="max-w-2xl mx-auto px-4 py-10 border-t border-brand-border">
        <h2 className="text-xl font-black text-brand-charcoal mb-4">이용 방법</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="p-4 bg-brand-highlight rounded-xl border border-brand-border text-center">
            <span className="text-2xl block mb-2">1</span>
            <strong className="text-sm font-black text-brand-charcoal block mb-1">성별 선택</strong>
            <p className="text-xs text-brand-muted leading-relaxed">
              나의 성향을 분석할지, 연인의 성향을 분석할지 선택하고 성별을 지정합니다.
            </p>
          </div>
          <div className="p-4 bg-brand-highlight rounded-xl border border-brand-border text-center">
            <span className="text-2xl block mb-2">2</span>
            <strong className="text-sm font-black text-brand-charcoal block mb-1">상황 질문 응답</strong>
            <p className="text-xs text-brand-muted leading-relaxed">
              15가지 실제 연애 상황에 대한 질문에 솔직하게 답변합니다. 정답이 없으니 편하게 선택하세요.
            </p>
          </div>
          <div className="p-4 bg-brand-highlight rounded-xl border border-brand-border text-center">
            <span className="text-2xl block mb-2">3</span>
            <strong className="text-sm font-black text-brand-charcoal block mb-1">결과 확인</strong>
            <p className="text-xs text-brand-muted leading-relaxed">
              8가지 유형 중 나의 연애 유형과 상세 분석 리포트, 궁합 정보를 확인할 수 있습니다.
            </p>
          </div>
        </div>
      </section>

      {/* 8가지 유형 프리뷰 섹션 */}
      <section className="max-w-2xl mx-auto px-4 py-10 border-t border-brand-border">
        <h2 className="text-xl font-black text-brand-charcoal mb-2">8가지 연애 유형</h2>
        <p className="text-sm text-brand-muted mb-4">
          테토-에스트로 이론으로 분류한 8가지 연애 유형을 미리 살펴보세요.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {[
            { slug: "teto", name: "테토남", emoji: "🚜", desc: "직진형 로맨티스트" },
            { slug: "potato", name: "포테토남", emoji: "🧸", desc: "따뜻한 안정파" },
            { slug: "egen", name: "에겐남", emoji: "💌", desc: "감성 충만 표현러" },
            { slug: "sweet_potato", name: "고구마남", emoji: "🍠", desc: "조용한 속깊은 연인" },
            { slug: "cheese", name: "치즈남", emoji: "🧀", desc: "달콤한 애교왕" },
            { slug: "salsa", name: "살사남", emoji: "🌶️", desc: "열정적 드라마틱" },
            { slug: "ehem", name: "에헴남", emoji: "⚖️", desc: "이성적 밸런서" },
            { slug: "era", name: "에라남", emoji: "🌊", desc: "자유로운 영혼" },
          ].map((type) => (
            <Link
              key={type.slug}
              href={`/types/${type.slug}`}
              className="flex flex-col items-center gap-1 p-3 bg-white rounded-xl border border-brand-border hover:border-brand-accent/40 hover:shadow-sm transition-all text-center"
            >
              <span className="text-xl">{type.emoji}</span>
              <strong className="text-xs font-black text-brand-charcoal">{type.name}</strong>
              <span className="text-[10px] text-brand-muted">{type.desc}</span>
            </Link>
          ))}
        </div>
        <div className="mt-4 text-center">
          <Link href="/types" className="text-sm text-brand-accent hover:underline font-medium">
            유형 가이드 전체 보기 →
          </Link>
        </div>
      </section>

      {/* 자주 묻는 질문 요약 */}
      <section className="max-w-2xl mx-auto px-4 py-10 border-t border-brand-border">
        <h2 className="text-xl font-black text-brand-charcoal mb-4">자주 묻는 질문</h2>
        <div className="space-y-3">
          <details className="p-4 bg-white rounded-xl border border-brand-border">
            <summary className="text-sm font-bold text-brand-charcoal cursor-pointer">테토 연구소는 무료인가요?</summary>
            <p className="text-sm text-brand-muted mt-2 leading-relaxed">
              네, 테토 연구소의 성향 분석, 유형 가이드, 블로그 콘텐츠는 모두 무료로 이용할 수 있습니다.
              회원 가입 없이 바로 테스트를 시작할 수 있으며, 결과도 즉시 확인 가능합니다.
            </p>
          </details>
          <details className="p-4 bg-white rounded-xl border border-brand-border">
            <summary className="text-sm font-bold text-brand-charcoal cursor-pointer">MBTI와 테토 유형은 어떻게 다른가요?</summary>
            <p className="text-sm text-brand-muted mt-2 leading-relaxed">
              MBTI는 인지 기능에 초점을 맞추는 반면, 테토-에스트로 유형은 호르몬 기반 행동 패턴 연구에서
              비롯되어 연애 관계에서의 소통 방식, 감정 표현, 갈등 해소 패턴에 집중합니다.
              두 체계는 상호 보완적이며, 연애에 특화된 분석을 원한다면 테토 유형이 더 적합합니다.
            </p>
          </details>
          <details className="p-4 bg-white rounded-xl border border-brand-border">
            <summary className="text-sm font-bold text-brand-charcoal cursor-pointer">테스트 결과는 정확한가요?</summary>
            <p className="text-sm text-brand-muted mt-2 leading-relaxed">
              테토 연구소의 분석은 Big Five 성격 모델, 애착 이론, 스턴버그의 사랑의 삼각형 이론 등
              검증된 심리학 이론을 기반으로 합니다. 다만 모든 심리 테스트와 마찬가지로 자기 보고식 응답의
              한계가 있으므로, 재미와 자기 이해의 도구로 활용하시길 권합니다.
            </p>
          </details>
        </div>
        <div className="mt-4 text-center">
          <Link href="/faq" className="text-sm text-brand-accent hover:underline font-medium">
            FAQ 전체 보기 →
          </Link>
        </div>
      </section>

      {/* 광고 단위 */}
      <div className="max-w-2xl mx-auto px-4">
        <AdSenseUnit adSlot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_HOME} adFormat="auto" />
      </div>

      {/* 최신 블로그 포스트 섹션 */}
      <section className="max-w-2xl mx-auto px-4 py-10 border-t border-brand-border">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-brand-charcoal">연애 심리 연구소</h2>
          <Link href="/blog" className="text-sm text-brand-accent hover:underline font-medium">
            더 보기 →
          </Link>
        </div>
        <p className="text-sm text-brand-muted mb-4">
          연애 심리, 애착 이론, 커플 소통법 등 관계에 대한 심리학 기반 칼럼을 연재하고 있습니다.
          전문 심리학 이론을 알기 쉽게 풀어 실제 연애에 적용할 수 있는 인사이트를 제공합니다.
        </p>
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
