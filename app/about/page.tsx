import Link from "next/link";

export const metadata = {
  title: "소개 | 테토 연구소",
  description: "테토 연구소 서비스 소개 및 운영자 정보",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-800 mb-2">
        테토 연구소 소개 (About)
      </h1>
      <p className="text-sm text-gray-500 mb-8">About This Service</p>

      <div className="prose prose-sm text-gray-700 space-y-8 text-kr-wrap">
        <section>
          <h2 className="text-lg font-bold text-gray-800 mb-2">
            테토 연구소란?
          </h2>
          <p className="leading-relaxed">
            테토 연구소는 심리학 이론(Big Five 성격 모델, 애착 이론, 스턴버그의 사랑의 삼각형 이론 등)을
            바탕으로 연애 성향을 분석하는 인터랙티브 테스트 서비스입니다.
            12가지 이상의 상황 질문을 통해 8가지 연애 유형 중 자신의 성향을 파악하고,
            상대방과의 궁합까지 확인할 수 있습니다.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-800 mb-2">
            서비스 특징
          </h2>
          <ul className="list-disc pl-6 space-y-2 leading-relaxed">
            <li>
              <strong>8가지 연애 유형:</strong> 테토, 포테토, 에겐, 고구마, 치즈, 살사, 에헴, 에라 등 개성 넘치는 캐릭터로 분석 결과를 제공합니다.
            </li>
            <li>
              <strong>남친/여친 분석 모드:</strong> 상대방의 성향을 남자친구 또는 여자친구 관점에서 분석할 수 있습니다.
            </li>
            <li>
              <strong>궁합 매칭:</strong> 두 유형 사이의 케미스트리 지수와 관계 조언을 제공합니다.
            </li>
            <li>
              <strong>다국어 지원:</strong> 한국어, 영어, 일본어, 중국어를 지원합니다.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-800 mb-2">
            운영 정보
          </h2>
          <div className="bg-gray-50 rounded-xl p-5 border border-gray-200 space-y-2">
            <p className="leading-relaxed">
              <strong>서비스명:</strong> 테토 연구소 (Teto Lab)
            </p>
            <p className="leading-relaxed">
              <strong>운영자:</strong> 개인 운영
            </p>
            <p className="leading-relaxed">
              <strong>목적:</strong> 연애 심리 콘텐츠 제공 및 엔터테인먼트
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-800 mb-2">문의하기</h2>
          <p className="leading-relaxed mb-4">
            서비스 이용 중 궁금한 점이나 건의사항이 있으시면 아래 버튼을 통해 문의해 주세요.
          </p>
          <a
            href={"mailto:" + ["hsseo1492", "gmail.com"].join("@")}
            className="inline-block px-6 py-3 bg-pink-500 text-white font-bold rounded-xl hover:bg-pink-600 transition-colors"
          >
            이메일 문의하기
          </a>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-800 mb-2">면책 사항</h2>
          <p className="leading-relaxed">
            본 서비스의 모든 테스트 결과는 오락 및 자기 이해를 위한 참고 자료이며,
            전문적인 심리 상담이나 진단을 대체하지 않습니다. 결과를 바탕으로 한
            개인적 판단에 대해 서비스 운영자는 책임을 지지 않습니다.
          </p>
        </section>
      </div>

      <Link
        href="/"
        className="inline-block mt-10 text-pink-500 hover:underline font-medium"
      >
        ← 홈으로
      </Link>
    </div>
  );
}
