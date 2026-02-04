import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "테토남/포테토남/에겐남 유형 테스트",
  description: "당신은 어떤 남자친구 유형인가요? 재미있는 성격 테스트로 알아보세요!",
  openGraph: {
    title: "테토남/포테토남/에겐남 유형 테스트",
    description: "당신은 어떤 남자친구 유형인가요?",
    type: "website",
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
        
        {/* Google AdSense */}
        <script 
          async 
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
