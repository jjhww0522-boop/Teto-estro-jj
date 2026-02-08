import Link from "next/link";
import Image from "next/image";

export default function ResearchReportInvisibleHand() {
  return (
    <section className="w-full max-w-[480px] mt-6 relative z-20">
      <details className="group">
        <summary className="list-none cursor-pointer w-full py-3 px-4 bg-white/80 hover:bg-white border border-purple-100 rounded-2xl shadow-sm transition-colors flex items-center justify-between gap-2 [&::-webkit-details-marker]:hidden">
          <span className="text-sm font-bold text-purple-700">
            📋 연구 리포트: 연애 농도를 결정짓는 또 다른 보이지 않는 손
          </span>
          <span className="text-purple-400 text-lg shrink-0 group-open:rotate-180 transition-transform">
            ▼
          </span>
        </summary>
        <div className="mt-2 p-4 bg-white/90 border border-purple-100 rounded-2xl shadow-sm text-left text-[13px] text-gray-600 leading-relaxed space-y-4 text-kr-wrap">
          <div>
            <h3 className="font-bold text-gray-800 mb-1">
              1. 5가지 사랑의 언어: 소통의 채널 맞추기
            </h3>
            <p className="mb-2">
              게리 채프먼(Gary Chapman) 박사는 사람들이 사랑을 느끼고 표현하는
              방식이 제각각이라고 말합니다. 이를 &apos;5가지 사랑의
              언어&apos;라고 부르는데, 서로의 언어가 다를 때 &apos;애정
              결핍&apos;을 느끼기 쉽습니다.
            </p>
            <ul className="list-none space-y-1 text-[12px] mb-3">
              <li>
                <strong>인정하는 말 (Words of Affirmation):</strong> &apos;에겐형&apos;은
                연인의 따뜻한 말 한마디에서 가장 큰 확신을 얻습니다.
              </li>
              <li>
                <strong>함께하는 시간 (Quality Time):</strong> &apos;살사형&apos;에게는
                단순히 옆에 있는 것보다 눈을 맞추고 온전히 집중하는 시간이 최고의
                에너지원입니다.
              </li>
              <li>
                <strong>봉사 (Acts of Service):</strong> &apos;고구마형&apos;이나
                &apos;에헴형&apos;은 화려한 말보다 상대의 짐을 들어주거나 청소를
                도와주는 행동으로 사랑을 증명하곤 합니다.
              </li>
            </ul>
            <div className="rounded-xl overflow-hidden border border-purple-100 my-3">
              <Image
                src="/images/love-languages.png"
                alt="5가지 사랑의 언어: 인정하는 말, 함께하는 시간, 선물, 봉사, 신체적 접촉"
                width={440}
                height={280}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          <div>
            <h3 className="font-bold text-gray-800 mb-1">
              2. 스턴버그의 사랑의 삼각형 이론
            </h3>
            <p className="mb-2">
              사랑은 단순히 하나의 감정이 아닙니다. 로버트 스턴버그(Robert
              Sternberg)는 사랑이{" "}
              <strong>
                친밀감(Intimacy), 열정(Passion), 헌신(Commitment)
              </strong>
              라는 세 가지 요소로 구성된다고 설명합니다.
            </p>
            <ul className="list-none space-y-1 text-[12px] mb-3">
              <li>
                <strong>친밀감:</strong> 정서적인 가깝고 따뜻한 느낌입니다.
                &apos;포테토형&apos;이 관계에서 가장 중요하게 생각하는
                가치입니다.
              </li>
              <li>
                <strong>열정:</strong> 신체적 매력과 성적 흥분을 포함한 강렬한
                이끌림입니다. &apos;살사형&apos; 연애의 초기 동력입니다.
              </li>
              <li>
                <strong>헌신:</strong> 관계를 유지하겠다는 의지입니다.
                &apos;에헴형&apos;이나 &apos;고구마형&apos;이 관계를 장기적으로
                지속시키는 힘입니다.
              </li>
            </ul>
            <p className="mb-3">
              이 세 요소가 정삼각형에 가까울수록 우리는 이를{" "}
              <strong>&apos;완전한 사랑(Consummate Love)&apos;</strong>이라
              부릅니다.
            </p>
            <div className="rounded-xl overflow-hidden border border-purple-100 my-3">
              <Image
                src="/images/sternberg-triangle.png"
                alt="스턴버그의 사랑의 삼각형: 친밀감, 열정, 헌신과 완전한 사랑"
                width={440}
                height={280}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          <div>
            <h3 className="font-bold text-gray-800 mb-1">
              3. 가트맨의 4가지 파멸 요인: 조심궁합의 과학
            </h3>
            <p className="mb-2">
              세계적인 관계 전문가 존 가트맨(John Gottman) 박사는 이혼할 확률이
              90% 이상인 커플들의 대화 패턴에서 4가지 공통된 독을 발견했습니다.
              테토 연구소의 <strong>&apos;조심궁합&apos;</strong>이 경고하는
              지점이 바로 이곳입니다.
            </p>
            <ul className="list-none space-y-1 text-[12px]">
              <li>
                <strong>비난(Criticism):</strong> 상대의 성격이나 인격을 공격하는
                것입니다. (예: &quot;넌 항상 이기적이야.&quot;)
              </li>
              <li>
                <strong>방어(Defensiveness):</strong> 책임을 회피하고 상대를 역으로
                공격하는 것입니다.
              </li>
              <li>
                <strong>경멸(Contempt):</strong> 상대보다 우위에 서서 조롱하는
                것입니다. (관계에 가장 치명적!)
              </li>
              <li>
                <strong>담쌓기(Stonewalling):</strong> 대화를 거부하고 침묵으로
                일관하는 것입니다.
              </li>
            </ul>
            <p className="mt-2">
              테토 연구소는 이러한 부정적 신호를 미리 감지하고, 서로의 다름을
              &apos;비난&apos;이 아닌 &apos;이해&apos;의 관점으로 바라볼 수
              있도록 돕습니다.
            </p>
          </div>

          <div className="py-3 px-4 bg-purple-50 rounded-xl border border-purple-100">
            <p className="text-center text-purple-700 font-medium mb-2">
              당신의 농도가 궁금하다면?
            </p>
            <Link
              href="/test?mode=boyfriend"
              className="block w-full py-2.5 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-center rounded-full font-bold text-sm hover:opacity-90 transition-opacity"
            >
              테스트 시작하기 →
            </Link>
          </div>
        </div>
      </details>
    </section>
  );
}
