import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { LocaleProvider } from "@/components/LocaleProvider";
import Footer from "@/components/Footer";
import AgentationDevTool from "@/components/AgentationDevTool";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://tetolab.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "테토 농도 분석기 | 연인 분석 · 나의 성향 셀프진단",
  description:
    "연인의 테토력을 분석하거나, 나의 연애 유형을 셀프 진단해보세요. 15가지 상황으로 알아보는 정밀 성향 리포트!",
  openGraph: {
    title: "테토 농도 분석기 | 연인 분석 · 나의 성향 셀프진단",
    description: "연인 테토력 분석부터 나의 연애 유형 셀프진단까지. 15가지 상황으로 알아보는 정밀 성향 리포트!",
    url: SITE_URL,
    siteName: "테토 연구소",
    images: [
      {
        url: "/images/og-main.png",
        width: 1200,
        height: 630,
        alt: "테토 농도 분석기 - 연인 분석 & 나의 성향",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "테토 농도 분석기 | 연인 분석 · 나의 성향 셀프진단",
    description: "연인 테토력 분석부터 나의 연애 유형 셀프진단까지. 15가지 상황으로 알아보는 정밀 성향 리포트!",
    images: ["/images/og-main.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "UFevesK6ZTN6CC-MpFCXroq9reZj52u41TdgBz78SQk",
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
        {/* Pretendard Variable 폰트 */}
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css"
        />
        {/* 카카오 SDK */}
        <script src="https://t1.kakaocdn.net/kakao_js_sdk/2.7.2/kakao.min.js" async></script>
        {/* Google AdSense */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1924006200055778"
          crossOrigin="anonymous"
        />
      </head>
      <body className="antialiased flex flex-col min-h-screen">
        <LocaleProvider>
          <main className="flex-1">{children}</main>
          <Footer />
          <AgentationDevTool />
          <Analytics />
        </LocaleProvider>
      </body>
    </html>
  );
}
