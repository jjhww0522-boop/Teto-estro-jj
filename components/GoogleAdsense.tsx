"use client";

import { useEffect } from "react";

interface GoogleAdsenseProps {
  adSlot: string;
  adFormat?: string;
  fullWidthResponsive?: boolean;
  style?: React.CSSProperties;
}

export default function GoogleAdsense({
  adSlot,
  adFormat = "auto",
  fullWidthResponsive = true,
  style = {},
}: GoogleAdsenseProps) {
  useEffect(() => {
    try {
      // 애드센스 스크립트 로드
      if (typeof window !== "undefined") {
        ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push(
          {}
        );
      }
    } catch (error) {
      console.error("AdSense error:", error);
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{
        display: "block",
        textAlign: "center",
        ...style,
      }}
      data-ad-client="ca-pub-XXXXXXXXXXXXXXXX" // 여기에 실제 애드센스 Publisher ID 입력
      data-ad-slot={adSlot}
      data-ad-format={adFormat}
      data-full-width-responsive={fullWidthResponsive.toString()}
    />
  );
}
