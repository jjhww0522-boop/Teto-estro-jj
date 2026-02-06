import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "테토남 연애 유형 테스트 - 나의 연애 스타일은?",
  description:
    "테토남, 포테토남, 에겐남... 나는 어떤 유형일까? 12가지 문항으로 알아보는 정통 연애 심리 테스트!",
  keywords: ["연애테스트", "심리테스트", "테토남", "연애유형", "MBTI테스트"],
  openGraph: {
    title: "테토남 연애 유형 테스트",
    description: "지금 바로 나의 연애 불도저 지수를 확인해보세요!",
    url: "https://teto-estro-jj-knyb.vercel.app",
    siteName: "테토남 테스트",
    images: [
      {
        url: "/images/main-thumbnail.png",
        width: 1200,
        height: 630,
        alt: "테토남 연애 유형 테스트",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "테토남 연애 유형 테스트",
    description: "나의 연애 스타일을 확인해보세요!",
    images: ["/images/main-thumbnail.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "ipmUsg9sCGtJ9s_N8Wnt6h3F8Jlj9V0YhHDiINFHlE8",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        {/* 카카오 SDK */}
        <script src="https://t1.kakaocdn.net/kakao_js_sdk/2.7.2/kakao.min.js" async></script>
      </head>
      <body className="antialiased flex flex-col min-h-screen">
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
