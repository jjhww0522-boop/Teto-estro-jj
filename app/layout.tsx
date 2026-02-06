import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "남자친구 테토 농도 분석기",
  description:
    "내 남친의 테토 농도는 몇 %? 지금 바로 정밀 분석 리포트를 확인하세요!",
  openGraph: {
    title: "남자친구 테토 농도 분석기 ⚗️",
    description: "12가지 상황으로 알아보는 우리 남친의 진짜 테토력!",
    url: "https://teto-potato-test.vercel.app",
    siteName: "테토 연구소",
    images: [
      {
        url: "/images/og-main.png",
        width: 1200,
        height: 630,
        alt: "테토 농도 분석기 대표 이미지",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "남자친구 테토 농도 분석기 ⚗️",
    description: "12가지 상황으로 알아보는 우리 남친의 진짜 테토력!",
    images: ["/images/og-main.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "1nyDJz2NawwGAhdX1pF1sa-0vInKEuV_F56wB8EMJ0Y",
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
