import Link from "next/link";

export const metadata = {
  title: "이용약관 | 테토남/포테토남/에겐남 유형 테스트",
  description: "potatoboyfriends 서비스 이용약관",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">이용약관</h1>
      <div className="prose prose-sm text-gray-600 space-y-4">
        <p>본 서비스(테토남/포테토남/에겐남 유형 테스트)는 참고 및 오락 목적으로 제공됩니다.</p>
        <p>테스트 결과는 심리·행동 경향에 대한 가벼운 참고용이며, 전문적인 진단이나 상담을 대체하지 않습니다. 서비스 이용으로 인한 어떠한 손해에 대해서도 책임의 범위를 법령이 허용하는 범위로 제한합니다.</p>
      </div>
      <Link href="/" className="inline-block mt-8 text-pink-500 hover:underline">← 홈으로</Link>
    </div>
  );
}
