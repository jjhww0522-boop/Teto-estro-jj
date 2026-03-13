import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://tetolab.com";

export const metadata: Metadata = {
  title: "연애 유형 테스트 | 테토 연구소 — 15가지 상황으로 알아보는 나의 성향",
  description:
    "15가지 실제 연애 상황에 답변하고 나의 테토·에스트로 성향을 분석해보세요. 8가지 연애 유형 중 나의 유형과 궁합까지 무료로 확인할 수 있습니다.",
  alternates: {
    canonical: `${BASE_URL}/test`,
  },
  openGraph: {
    title: "연애 유형 테스트 | 테토 연구소",
    description: "15가지 상황으로 분석하는 나의 연애 성향. 무료로 바로 시작하세요.",
    url: `${BASE_URL}/test`,
    siteName: "테토 연구소",
    type: "website",
  },
};

export default function TestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
