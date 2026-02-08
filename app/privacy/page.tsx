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
            3. 쿠키(Cookie) 사용에 관한 사항
          </h2>
          <p className="leading-relaxed mb-3">
            본 서비스는 이용자에게 편리한 서비스 제공을 위해 쿠키를 사용할 수 있습니다.
            쿠키는 웹사이트가 이용자의 컴퓨터(또는 기기)에 저장하는 작은 텍스트 파일로,
            이용자 식별, 방문 기록 저장, 서비스 이용 패턴 분석 등에 쓰입니다.
          </p>
          <ul className="list-disc pl-6 space-y-1 leading-relaxed mb-3">
            <li>
              <strong>필수 쿠키:</strong> 서비스 이용에 꼭 필요한 기능(예: 세션 유지, 설정 저장)을 위해 사용됩니다.
            </li>
            <li>
              <strong>분석·통계 쿠키:</strong> 방문 횟수, 머문 시간 등 비식별화된 통계를 수집해 서비스를 개선하는 데 사용됩니다.
            </li>
            <li>
              <strong>광고 쿠키:</strong> Google AdSense 등 제3자 광고 서비스가 맞춤형 광고 제공, 광고 노출·클릭 측정을 위해 쿠키를 설정·사용할 수 있습니다. 이 과정에서 기기 식별자, 방문한 페이지 정보 등이 비식별화 형태로 처리될 수 있습니다.
            </li>
          </ul>
          <p className="leading-relaxed">
            이용자는 브라우저 설정에서 쿠키 저장을 거부하거나 삭제할 수 있습니다. 다만 필수 쿠키를 거부할 경우 일부 서비스 이용에 제한이 있을 수 있습니다.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-800 mb-2">
            4. 광고 서비스(Google AdSense) 및 맞춤 광고
          </h2>
          <p className="leading-relaxed mb-3">
            본 서비스는 Google이 제공하는 광고 서비스(Google AdSense)를 이용합니다.
            AdSense는 이용자에게 관심에 맞는 광고를 보여 주기 위해 쿠키 및 기타 기술을 사용할 수 있습니다.
          </p>
          <ul className="list-disc pl-6 space-y-1 leading-relaxed mb-3">
            <li>
              Google은 본 사이트를 포함한 파트너 사이트 방문 기록, 광고 노출·클릭 정보 등을 활용해 맞춤형 광고를 게재할 수 있습니다.
            </li>
            <li>
              이러한 처리 방식은 Google의 개인정보 처리방침 및 광고 정책을 따릅니다. 자세한 내용은{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:underline font-medium"
              >
                Google 개인정보 처리방침
              </a>
              ,{" "}
              <a
                href="https://policies.google.com/technologies/ads"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:underline font-medium"
              >
                Google 광고 정책
              </a>
              에서 확인하실 수 있습니다.
            </li>
            <li>
              맞춤형 광고를 원하지 않으시면{" "}
              <a
                href="https://adssettings.google.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:underline font-medium"
              >
                Google 광고 설정(adssettings.google.com)
              </a>
              에서 광고 맞춤설정을 끄거나 쿠키를 관리할 수 있습니다.
            </li>
          </ul>
          <p className="leading-relaxed">
            본 서비스는 Google AdSense를 통해 게재되는 광고의 내용·선택에 관여하지 않으며, 광고 관련 문의는 Google에 직접 하시기 바랍니다.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-800 mb-2">
            5. 제3자 제공 및 위탁
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
            6. 개인정보의 보유 및 파기
          </h2>
          <p className="leading-relaxed">
            본 서비스는 원칙적으로 개인정보를 저장하지 않으며, 목적이 달성된 후에는
            해당 정보를 지체 없이 파기합니다. 단, 광고·분석 목적으로 제3자(Google 등)에 전달된 비식별화 정보의 보유·파기 정책은 해당 사업자의 정책을 따릅니다.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-800 mb-2">
            7. 이용자의 권리
          </h2>
          <p className="leading-relaxed">
            이용자는 언제든지 브라우저 설정을 통해 쿠키 저장을 거부하거나 삭제할 수 있습니다.
            Google 맞춤형 광고에 대해서는 위 &apos;4. 광고 서비스&apos; 안내의 Google 광고 설정 링크에서 관리할 수 있습니다.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-800 mb-2">8. 문의처</h2>
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
