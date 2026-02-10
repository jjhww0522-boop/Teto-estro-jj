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
      data-ad-client="ca-pub-1924006200055778"
      data-ad-slot={adSlot}
      data-ad-format={adFormat}
      data-full-width-responsive={fullWidthResponsive.toString()}
    />
  );
}
