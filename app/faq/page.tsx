import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://tetolab.com";

export const metadata: Metadata = {
  title: "자주 묻는 질문 (FAQ) | 테토 연구소",
  description:
    "테토 연구소 서비스에 대한 자주 묻는 질문을 모았습니다. 테토·에스트로 유형 분석, 연인 분석, 별빛 타로 등 이용 방법을 안내합니다.",
  alternates: {
    canonical: `${BASE_URL}/faq`,
  },
  openGraph: {
    title: "자주 묻는 질문 (FAQ) | 테토 연구소",
    description:
      "테토 연구소 서비스 이용 가이드. 유형 분석 원리부터 결과 해석까지 궁금한 것을 모두 답해드립니다.",
    url: `${BASE_URL}/faq`,
    siteName: "테토 연구소",
    type: "website",
  },
};

const faqs = [
  {
    question: "테토 연구소가 무엇인가요?",
    answer:
      "테토 연구소는 테토(Testo)·에스트로(Estro) 심리 유형 이론을 바탕으로 나의 연애 성향과 연인의 유형을 분석하는 무료 서비스입니다. 15가지 실제 연애 상황을 기반으로 한 문항으로 정밀한 성향 리포트를 제공하며, AI 타로 서비스도 함께 운영하고 있습니다.",
  },
  {
    question: "테토 유형과 에스트로 유형은 무엇인가요?",
    answer:
      "테토(Testo) 유형과 에스트로(Estro) 유형은 각각 테스토스테론·에스트로겐 기반 행동 패턴 연구에서 파생된 연애 성향 분류입니다. 테토 유형은 직진적·주도적·확신 중심의 연애 성향을, 에스트로 유형은 공감적·감성적·관계 중심의 연애 성향을 나타냅니다. 8가지 세부 캐릭터(테토, 포테토, 에겐, 고구마, 치즈, 살사, 에헴, 에라)로 구분됩니다.",
  },
  {
    question: "나의 성향 분석 테스트는 어떻게 진행되나요?",
    answer:
      "나의 성향 분석은 15가지 연애 상황 문항에 응답하는 방식으로 진행됩니다. 단순한 O/X가 아닌 상황별 반응 패턴을 분석하며, 약 3~5분이면 완료됩니다. 남성형·여성형 중 선택 후 테스트를 시작하며, 모든 문항에 답하면 즉시 상세 성향 리포트가 제공됩니다.",
  },
  {
    question: "연인 성향 분석은 어떻게 이용하나요?",
    answer:
      "연인 성향 분석은 상대방의 행동을 직접 관찰한 내용을 바탕으로 답변합니다. 연인에게 직접 테스트를 하게 할 필요 없이, 평소 연인의 반응 패턴을 기반으로 대신 답변해 연인의 연애 유형을 파악할 수 있습니다. 상대 성별을 선택한 후 동일한 15문항에 응답하면 됩니다.",
  },
  {
    question: "테스트 결과는 얼마나 정확한가요?",
    answer:
      "테토 연구소의 분석은 Big Five 성격 이론, 애착 이론, 스턴버그 사랑의 삼각형 이론 등 심리학 연구를 참고하여 설계되었습니다. 다만 본 서비스는 오락·자기 이해 목적의 콘텐츠로, 공인된 임상 심리 검사를 대체하지 않습니다. 재미와 인사이트를 위한 참고 자료로 활용하시길 권장합니다.",
  },
  {
    question: "MBTI와 테토·에스트로 유형의 차이점은 무엇인가요?",
    answer:
      "MBTI는 인식·판단 방식을 16가지 유형으로 분류하는 반면, 테토·에스트로 유형은 연애 상황에서의 반응 패턴과 감정 표현 방식에 특화된 분류입니다. 실제 연애 시나리오 기반의 상황 문항을 사용하므로, 연애 성향을 파악하는 데 더 직관적인 결과를 제공합니다.",
  },
  {
    question: "8가지 유형 중 어떤 유형이 가장 좋은 건가요?",
    answer:
      "모든 유형은 고유한 강점과 특성을 가지고 있으며, 어떤 유형이 더 우월하다는 개념은 없습니다. 테토형은 확신과 리더십, 포테토형은 안정감과 공감, 살사형은 열정과 표현력 등 각각의 유형이 서로 다른 방식으로 빛납니다. 중요한 것은 자신의 유형을 이해하고 상대방의 유형도 존중하는 것입니다.",
  },
  {
    question: "궁합 분석은 어떻게 하나요?",
    answer:
      "상단 메뉴의 '궁합 분석' 또는 결과 페이지 하단의 링크를 통해 이용할 수 있습니다. 나의 유형과 상대방의 유형을 각각 선택하면 두 유형 간의 궁합 점수와 함께 관계 특성, 소통 방식, 갈등 해소 팁 등 상세한 궁합 분석을 제공합니다.",
  },
  {
    question: "별빛 타로는 어떤 서비스인가요?",
    answer:
      "별빛 타로는 AI 기반 타로 리딩 서비스입니다. 22장의 메이저 아르카나 카드 중 3장을 선택하면 과거·현재·미래의 흐름을 AI가 해석해 연애운·금전운·건강운 등을 리딩해 드립니다. 상단 메뉴의 '타로' 버튼 또는 tetolab.com/tarot에서 이용하실 수 있습니다.",
  },
  {
    question: "서비스 이용은 무료인가요?",
    answer:
      "테토 연구소의 모든 서비스는 완전 무료입니다. 회원 가입이나 앱 설치 없이 바로 이용할 수 있습니다. 성향 분석, 연인 분석, 궁합 분석, 별빛 타로 모두 무료로 제공됩니다.",
  },
  {
    question: "테스트 결과를 저장하거나 공유할 수 있나요?",
    answer:
      "결과 페이지 하단의 공유 버튼을 통해 카카오톡·URL 복사로 결과를 공유할 수 있습니다. 별도 계정이 없어도 결과 페이지 URL을 북마크하거나 저장해 두면 언제든지 다시 확인할 수 있습니다.",
  },
  {
    question: "개인 정보는 수집되나요?",
    answer:
      "테토 연구소는 별도의 회원 가입이 없으며, 이름·연락처 등 개인 식별 정보를 수집하지 않습니다. 서비스 개선을 위한 익명 방문 통계(Vercel Analytics)만 수집됩니다. 자세한 내용은 개인정보처리방침 페이지에서 확인하실 수 있습니다.",
  },
  {
    question: "테스트 결과가 나의 실제 성향과 다른 것 같아요.",
    answer:
      "연애 성향은 상대방이나 상황에 따라 다르게 나타날 수 있습니다. 특정 연애 상황을 상상하며 답변하면 더 정확한 결과를 얻을 수 있습니다. 결과가 맞지 않는다고 느껴지면 다른 유형의 결과 페이지도 참고해 보세요. 유형은 고정된 것이 아니며, 시간이 지남에 따라 변할 수 있습니다.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      "@id": `${BASE_URL}/faq`,
      "name": "테토 연구소 자주 묻는 질문",
      "url": `${BASE_URL}/faq`,
      "mainEntity": faqs.map((faq) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer,
        },
      })),
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "홈", "item": BASE_URL },
        { "@type": "ListItem", "position": 2, "name": "FAQ", "item": `${BASE_URL}/faq` },
      ],
    },
  ],
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="max-w-2xl mx-auto px-4 py-10">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-brand-muted mb-6">
          <Link href="/" className="hover:underline">홈</Link>
          <span>›</span>
          <span className="text-brand-charcoal font-medium">FAQ</span>
        </nav>

        <header className="mb-8">
          <h1 className="text-2xl font-black text-brand-charcoal mb-2">
            자주 묻는 질문
          </h1>
          <p className="text-sm text-brand-muted">
            테토 연구소 서비스 이용에 관해 자주 묻는 질문을 모았습니다.
          </p>
        </header>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <details
              key={idx}
              className="group border border-brand-border rounded-xl overflow-hidden"
            >
              <summary className="flex items-center justify-between gap-3 p-4 cursor-pointer list-none hover:bg-brand-highlight transition-colors">
                <span className="text-sm font-bold text-brand-charcoal leading-snug">
                  Q. {faq.question}
                </span>
                <span className="text-brand-accent text-lg shrink-0 transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <div className="px-4 pb-4 pt-0">
                <p className="text-sm text-brand-charcoal leading-relaxed border-t border-brand-border pt-3">
                  {faq.answer}
                </p>
              </div>
            </details>
          ))}
        </div>

        <footer className="mt-10 pt-6 border-t border-brand-border flex flex-col gap-2">
          <p className="text-sm text-brand-muted">더 궁금한 점이 있으신가요?</p>
          <div className="flex flex-wrap gap-3 text-sm">
            <Link href="/test" className="text-brand-accent hover:underline font-medium">
              → 나의 성향 분석하기
            </Link>
            <Link href="/about" className="text-brand-accent hover:underline font-medium">
              → 테토 연구소 소개
            </Link>
            <Link href="/blog" className="text-brand-accent hover:underline font-medium">
              → 연애 심리 블로그
            </Link>
          </div>
        </footer>
      </main>
    </>
  );
}
