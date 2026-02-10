import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { LocaleProvider } from "@/components/LocaleProvider";
import Footer from "@/components/Footer";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://tetolab.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "내 애인의 테토 농도 분석기",
  description:
    "내 애인의 테토 농도는 몇 %? 지금 바로 정밀 분석 리포트를 확인하세요!",
  openGraph: {
    title: "내 애인의 테토 농도 분석기",
    description: "12가지 상황으로 알아보는 내 애인의 진짜 테토력!",
    url: SITE_URL,
    siteName: "테토 연구소",
    images: [
      {
        url: "/images/og-main.png",
        width: 1200,
        height: 630,
        alt: "내 애인의 테토 농도 분석기 대표 이미지",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "내 애인의 테토 농도 분석기",
    description: "12가지 상황으로 알아보는 내 애인의 진짜 테토력!",
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
          <Analytics />
        </LocaleProvider>
      </body>
    </html>
  );
}
