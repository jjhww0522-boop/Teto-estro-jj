import Link from "next/link";

export const metadata = {
  title: "이용약관 | 테토 연구소",
  description: "테토 연구소(Teto Lab) 서비스 이용약관",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-800 mb-2">서비스 이용약관</h1>
      <p className="text-sm text-gray-500 mb-8">Terms of Service · 시행일: 2026-02-13</p>

      <div className="prose prose-sm text-gray-700 space-y-8 text-kr-wrap">
        <section>
          <h2 className="text-lg font-bold text-gray-800 mt-0 mb-2">제1조 (목적)</h2>
          <p className="m-0 leading-relaxed">
            본 약관은 &apos;테토 연구소(Teto Lab)&apos;(이하 &quot;서비스&quot;)가 제공하는 모든 서비스의 이용 조건 및 절차, 이용자와 서비스 제공자의 권리, 의무 및 책임 사항을 규정함을 목적으로 합니다.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-800 mt-0 mb-2">제2조 (용어의 정의)</h2>
          <ul className="list-none pl-0 space-y-2 m-0">
            <li className="leading-relaxed">
              <strong>&quot;이용자&quot;</strong>란 본 서비스에 접속하여 서비스를 이용하는 모든 사용자를 의미합니다.
            </li>
            <li className="leading-relaxed">
              <strong>&quot;콘텐츠&quot;</strong>란 본 서비스에서 제공하는 테스트 문항, 결과 이미지, 캐릭터 일러스트 및 텍스트 정보를 의미합니다.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-800 mt-0 mb-2">제3조 (이용약관의 효력 및 변경)</h2>
          <ol className="list-decimal pl-5 space-y-2 m-0">
            <li className="leading-relaxed">본 약관은 서비스 화면에 게시함으로써 효력이 발생합니다.</li>
            <li className="leading-relaxed">서비스 제공자는 필요하다고 인정되는 경우 관련 법령을 위반하지 않는 범위 내에서 약관을 변경할 수 있으며, 변경된 약관은 서비스 내 공지합니다.</li>
          </ol>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-800 mt-0 mb-2">제4조 (서비스 이용 및 제한)</h2>
          <ol className="list-decimal pl-5 space-y-2 m-0">
            <li className="leading-relaxed">본 서비스는 별도의 회원가입 없이 누구나 무료로 이용할 수 있습니다.</li>
            <li className="leading-relaxed">서비스 내 모든 결과는 오락적 재미를 위한 것이며, 과학적 근거를 보장하지 않습니다.</li>
            <li className="leading-relaxed">이용자는 서비스를 이용함으로써 얻은 정보를 서비스 제공자의 사전 승낙 없이 복제, 송신, 출판, 배포할 수 없습니다.</li>
          </ol>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-800 mt-0 mb-2">제5조 (면책 조항)</h2>
          <ol className="list-decimal pl-5 space-y-2 m-0">
            <li className="leading-relaxed">서비스 제공자는 천재지변, 서버 점검 또는 이에 준하는 불가항력으로 인해 서비스를 제공할 수 없는 경우 책임이 면제됩니다.</li>
            <li className="leading-relaxed">이용자가 서비스 결과를 신뢰하여 행한 결정이나 행동에 대하여 서비스 제공자는 어떠한 책임도 지지 않습니다.</li>
          </ol>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-800 mt-0 mb-2">제6조 (저작권의 귀속)</h2>
          <ol className="list-decimal pl-5 space-y-2 m-0">
            <li className="leading-relaxed">본 서비스에서 제공하는 모든 텍스트, 캐릭터 이미지 및 디자인에 대한 저작권은 서비스 제공자에게 귀속됩니다.</li>
            <li className="leading-relaxed">개인적인 공유 목적(카카오톡, SNS 등) 외에 상업적 목적으로 콘텐츠를 무단 사용하는 것을 금합니다.</li>
          </ol>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-800 mt-0 mb-2">제7조 (준거법 및 관할법원)</h2>
          <p className="m-0 leading-relaxed">
            본 약관과 관련하여 발생한 분쟁에 대해서는 대한민국 법령을 준거법으로 하며, 관할 법원은 서비스 제공자의 소재지를 관할하는 법원으로 합니다.
          </p>
        </section>
      </div>

      <Link href="/" className="inline-block mt-8 text-pink-500 hover:underline">← 홈으로</Link>
    </div>
  );
}
