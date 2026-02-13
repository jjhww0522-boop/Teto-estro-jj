import Link from "next/link";
import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://tetolab.com";

export const metadata: Metadata = {
  title: "소개 | 테토 연구소 - 연애 심리 테스트 서비스",
  description:
    "테토 연구소는 Big Five 성격 모델, 애착 이론, 스턴버그의 사랑의 삼각형 이론을 기반으로 8가지 연애 유형을 분석하는 인터랙티브 심리 테스트 서비스입니다. 테토, 포테토, 에겐, 고구마, 치즈, 살사, 에헴, 에라 중 나의 연애 유형을 알아보세요.",
  openGraph: {
    title: "소개 | 테토 연구소 - 연애 심리 테스트 서비스",
    description:
      "심리학 이론을 기반으로 8가지 연애 유형을 분석하는 인터랙티브 테스트. 나의 연애 성향과 궁합을 확인해보세요.",
    url: `${BASE_URL}/about`,
    siteName: "테토 연구소",
    type: "website",
  },
  alternates: {
    canonical: `${BASE_URL}/about`,
  },
};

const characters = [
  {
    slug: "teto",
    emoji: "🚜",
    name: "테토",
    type: "직진 불도저형",
    desc: "밀당 없이 자신의 감정에 솔직하게 직진하는 확신형 연인. 리더십이 강하고 결단력 있는 사랑을 합니다.",
  },
  {
    slug: "potato",
    emoji: "🧸",
    name: "포테토",
    type: "든든 안정형",
    desc: "포근하고 안정적인 사랑을 추구하는 힐링형 연인. 상대방의 하루 끝에 가장 편안한 쉼터가 되어줍니다.",
  },
  {
    slug: "egen",
    emoji: "💌",
    name: "에겐",
    type: "감성 로맨티스트",
    desc: "일상을 영화처럼 만드는 감성적인 연인. 공감 능력이 뛰어나고 깊은 정서적 교감을 중시합니다.",
  },
  {
    slug: "sweet_potato",
    emoji: "🍠",
    name: "고구마",
    type: "달달한 성실형",
    desc: "천천히 달궈지지만 결코 식지 않는 진심형 연인. 말보다 행동으로 사랑을 표현하는 묵직한 사람입니다.",
  },
  {
    slug: "cheese",
    emoji: "🧀",
    name: "치즈",
    type: "사르르 녹는 유연형",
    desc: "능글맞은 다정함 뒤에 진한 진심을 숨긴 사교적 연인. 유연하게 상대에 맞추면서도 깊이 있는 관계를 만듭니다.",
  },
  {
    slug: "salsa",
    emoji: "🌶️",
    name: "살사",
    type: "정열적인 에너자이저",
    desc: "매 순간이 축제처럼 화끈한 열정을 가진 연인. 에너지 넘치는 표현으로 관계에 활력을 불어넣습니다.",
  },
  {
    slug: "ehem",
    emoji: "⚖️",
    name: "에헴",
    type: "진중한 원칙주의자",
    desc: "가볍지 않은 무게감으로 신뢰를 지키는 책임감 있는 연인. 논리적이고 체계적으로 관계를 설계합니다.",
  },
  {
    slug: "era",
    emoji: "🌊",
    name: "에라",
    type: "쿨한 모험가형",
    desc: "자유로움 속에서 더 깊은 사랑을 찾는 독립적 연인. 새로운 경험을 통해 관계의 신선함을 유지합니다.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-800 mb-2">
        테토 연구소 소개
      </h1>
      <p className="text-sm text-gray-500 mb-8">About Teto Lab</p>

      <div className="prose prose-sm text-gray-700 space-y-10 text-kr-wrap">
        {/* 테토 연구소란? */}
        <section>
          <h2 className="text-lg font-bold text-gray-800 mb-3">
            테토 연구소란?
          </h2>
          <p className="leading-relaxed">
            테토 연구소는 <strong>연애 심리를 재미있게 탐구하는 인터랙티브 콘텐츠 연구소</strong>입니다.
            &ldquo;나는 어떤 연인일까?&rdquo;라는 질문에서 출발하여, 심리학 이론을 기반으로
            개인의 연애 성향을 분석하고 재미있는 캐릭터로 결과를 제공합니다.
          </p>
          <p className="leading-relaxed mt-2">
            12가지 이상의 연애 상황 질문을 통해 8가지 연애 유형 중 자신의 성향을 파악하고,
            상대방과의 궁합까지 확인할 수 있습니다. 연애에 대한 자기 이해를 넓히고,
            파트너와의 관계를 더 깊이 이해하는 데 도움을 드리는 것이 테토 연구소의 미션입니다.
          </p>
        </section>

        {/* 심리학적 근거 */}
        <section>
          <h2 className="text-lg font-bold text-gray-800 mb-3">
            어떻게 만들었나? — 심리학적 근거
          </h2>
          <p className="leading-relaxed mb-4">
            테토 연구소의 연애 유형 분석은 검증된 심리학 이론들을 토대로 설계되었습니다.
          </p>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
              <h3 className="font-bold text-gray-800 mb-1">Big Five 성격 모델 (OCEAN)</h3>
              <p className="leading-relaxed text-sm">
                개방성(Openness), 성실성(Conscientiousness), 외향성(Extraversion),
                친화성(Agreeableness), 신경성(Neuroticism) 등 5가지 성격 차원을 통해
                연애에서의 행동 패턴과 선호를 분석합니다.
              </p>
            </div>
            <div className="bg-purple-50 rounded-xl p-4 border border-purple-100">
              <h3 className="font-bold text-gray-800 mb-1">애착 이론 (Attachment Theory)</h3>
              <p className="leading-relaxed text-sm">
                존 볼비(John Bowlby)와 메리 에인스워스(Mary Ainsworth)의 애착 이론을 바탕으로,
                안정형·불안형·회피형·혼란형 등 관계에서의 애착 스타일이 연애 성향에
                미치는 영향을 반영합니다.
              </p>
            </div>
            <div className="bg-pink-50 rounded-xl p-4 border border-pink-100">
              <h3 className="font-bold text-gray-800 mb-1">
                스턴버그의 사랑의 삼각형 이론 (Triangular Theory of Love)
              </h3>
              <p className="leading-relaxed text-sm">
                로버트 스턴버그(Robert Sternberg)의 이론에 따라 친밀감(Intimacy),
                열정(Passion), 헌신(Commitment) 세 요소의 조합으로
                연애 유형의 사랑 스타일을 분류합니다.
              </p>
            </div>
          </div>
        </section>

        {/* 8가지 연애 유형 */}
        <section>
          <h2 className="text-lg font-bold text-gray-800 mb-3">
            8가지 연애 유형 소개
          </h2>
          <p className="leading-relaxed mb-4">
            테토 연구소는 심리 분석 결과를 8가지 개성 넘치는 캐릭터로 표현합니다.
            각 캐릭터를 클릭하면 상세 분석 결과를 확인할 수 있습니다.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {characters.map((c) => (
              <Link
                key={c.slug}
                href={`/result/${c.slug}`}
                className="block bg-white rounded-xl p-4 border border-gray-200 hover:border-pink-300 hover:shadow-md transition-all no-underline"
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl flex-shrink-0">{c.emoji}</span>
                  <div>
                    <p className="font-bold text-gray-800 text-sm">
                      {c.name} — {c.type}
                    </p>
                    <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                      {c.desc}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* 서비스 이용 방법 */}
        <section>
          <h2 className="text-lg font-bold text-gray-800 mb-3">
            서비스 이용 방법
          </h2>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center font-bold text-sm">
                1
              </span>
              <div>
                <p className="font-bold text-gray-800 text-sm">테스트 시작</p>
                <p className="text-sm text-gray-500 leading-relaxed">
                  <Link href="/test" className="text-pink-500 hover:underline">
                    테스트 페이지
                  </Link>
                  에서 12가지 이상의 연애 상황 질문에 답합니다. 내 연애 성향 또는 남자친구/여자친구 성향을 선택할 수 있습니다.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center font-bold text-sm">
                2
              </span>
              <div>
                <p className="font-bold text-gray-800 text-sm">결과 확인</p>
                <p className="text-sm text-gray-500 leading-relaxed">
                  8가지 연애 유형 중 나의 유형을 확인하고, 연애 스타일 분석, 심리 분석,
                  장단점 등 상세한 결과를 확인합니다.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center font-bold text-sm">
                3
              </span>
              <div>
                <p className="font-bold text-gray-800 text-sm">궁합 매칭</p>
                <p className="text-sm text-gray-500 leading-relaxed">
                  <Link href="/match" className="text-pink-500 hover:underline">
                    궁합 매칭 페이지
                  </Link>
                  에서 두 유형 사이의 케미스트리 지수와 관계 조언을 확인할 수 있습니다.
                  결과를 친구나 연인에게 공유해보세요!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 운영자 소개 */}
        <section>
          <h2 className="text-lg font-bold text-gray-800 mb-3">
            운영자 소개
          </h2>
          <div className="bg-gray-50 rounded-xl p-5 border border-gray-200 space-y-2">
            <p className="leading-relaxed">
              <strong>서비스명:</strong> 테토 연구소 (Teto Lab)
            </p>
            <p className="leading-relaxed">
              <strong>도메인:</strong> tetolab.com
            </p>
            <p className="leading-relaxed">
              <strong>운영:</strong> 테토 연구소는 연애 심리 콘텐츠에 관심 있는 개인
              개발자가 운영하는 서비스입니다. 심리학 이론과 웹 기술을 결합하여 누구나 쉽고
              재미있게 자신의 연애 성향을 탐구할 수 있는 콘텐츠를 만들고 있습니다.
            </p>
            <p className="leading-relaxed">
              <strong>목적:</strong> 연애 심리 콘텐츠 제공 및 엔터테인먼트
            </p>
            <p className="leading-relaxed">
              <strong>광고:</strong> Google AdSense를 통해 광고가 노출될 수 있습니다.
            </p>
          </div>
        </section>

        {/* 문의하기 */}
        <section>
          <h2 className="text-lg font-bold text-gray-800 mb-3">문의하기</h2>
          <p className="leading-relaxed mb-4">
            서비스 이용 중 궁금한 점이나 건의사항, 협업 제안이 있으시면 아래 버튼을 통해
            문의해 주세요.
          </p>
          <a
            href="mailto:potatoman21@gmail.com"
            className="inline-block px-6 py-3 bg-pink-500 text-white font-bold rounded-xl hover:bg-pink-600 transition-colors"
          >
            이메일 문의하기
          </a>
        </section>

        {/* 면책 사항 */}
        <section>
          <h2 className="text-lg font-bold text-gray-800 mb-3">면책 사항</h2>
          <div className="bg-yellow-50 rounded-xl p-4 border border-yellow-100 space-y-2">
            <p className="leading-relaxed text-sm">
              본 서비스의 모든 테스트 결과는 오락 및 자기 이해를 위한 참고 자료이며,
              전문적인 심리 상담이나 진단을 대체하지 않습니다.
            </p>
            <p className="leading-relaxed text-sm">
              결과는 심리학 이론에 기반한 경향성 분석이며, 개인의 성격이나 관계를 단정짓는
              것이 아닙니다. 결과를 바탕으로 한 개인적 판단에 대해 서비스 운영자는 책임을
              지지 않습니다.
            </p>
          </div>
        </section>
      </div>

      <div className="mt-10 flex gap-4">
        <Link
          href="/"
          className="inline-block text-pink-500 hover:underline font-medium"
        >
          &larr; 홈으로
        </Link>
        <Link
          href="/test"
          className="inline-block px-6 py-2 bg-pink-500 text-white font-bold rounded-xl hover:bg-pink-600 transition-colors"
        >
          테스트 시작하기
        </Link>
      </div>
    </div>
  );
}
