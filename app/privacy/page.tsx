import Link from "next/link";

export const metadata = {
  title: "개인정보처리방침 | 테토남/포테토남/에겐남 유형 테스트",
  description: "potatoboyfriends 개인정보처리방침 및 Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-800 mb-2">
        개인정보처리방침 (Privacy Policy)
      </h1>
      <p className="text-sm text-gray-500 mb-8">[개인정보처리방침 전문 보기]</p>

      <div className="prose prose-sm text-gray-700 space-y-8 text-kr-wrap">
        <section>
          <h2 className="text-lg font-bold text-gray-800 mb-2">
            1. 수집하는 개인정보 항목
          </h2>
          <p className="leading-relaxed">
            본 서비스(&apos;테토남 연애 테스트&apos;)는 별도의 회원가입 없이 이용 가능하며,
            이름, 연락처 등 직접적인 개인정보를 수집하지 않습니다. 다만, 서비스 이용
            과정에서 쿠키, 방문 기록, 기기 정보 등이 자동 생성되어 수집될 수 있습니다.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-800 mb-2">
            2. 개인정보 수집 및 이용 목적
          </h2>
          <p className="leading-relaxed">
            수집된 정보는 서비스 이용 통계 분석, 맞춤형 광고 제공(Google AdSense),
            서비스 개선 및 보안 강화의 목적으로만 사용됩니다.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-800 mb-2">
            3. 제3자 제공 및 위탁
          </h2>
          <p className="leading-relaxed">
            본 서비스는 Google에서 제공하는 로그 분석 도구(Google Analytics) 및
            광고 게재 서비스(Google AdSense)를 이용합니다. 이 과정에서 비식별화된
            정보가 Google 측에 제공될 수 있으며, 이는 각 서비스의 개인정보
            보호정책을 따릅니다.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-800 mb-2">
            4. 개인정보의 보유 및 파기
          </h2>
          <p className="leading-relaxed">
            본 서비스는 원칙적으로 개인정보를 저장하지 않으며, 목적이 달성된 후에는
            해당 정보를 지체 없이 파기합니다.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-800 mb-2">
            5. 이용자의 권리
          </h2>
          <p className="leading-relaxed">
            이용자는 언제든지 브라우저 설정을 통해 쿠키 저장을 거부할 수 있습니다.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-800 mb-2">6. 문의처</h2>
          <p className="leading-relaxed">
            개인정보와 관련한 문의사항은{" "}
            <a
              href="mailto:potatoman21@gmail.com"
              className="text-pink-500 hover:underline font-medium"
            >
              potatoman21@gmail.com
            </a>
            으로 연락 주시기 바랍니다.
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
