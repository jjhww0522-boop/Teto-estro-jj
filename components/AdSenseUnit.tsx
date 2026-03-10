"use client";

import { useEffect } from "react";

declare global {
    interface Window {
        adsbygoogle: unknown[];
    }
}

type AdSenseUnitProps = {
    adSlot?: string;
    adFormat?: "auto" | "fluid" | "rectangle" | "vertical" | "horizontal";
    fullWidthResponsive?: boolean;
    className?: string;
};

export default function AdSenseUnit({
    adSlot = "",
    adFormat = "auto",
    fullWidthResponsive = true,
    className = "",
}: AdSenseUnitProps) {
    const adsenseId = process.env.NEXT_PUBLIC_ADSENSE_ID;

    useEffect(() => {
        if (!adsenseId || !adSlot) return;
        try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch {
            // adsbygoogle 초기화 실패 시 무시
        }
    }, [adsenseId, adSlot]);

    // env 미설정이거나 adSlot 미지정이면 렌더링 안 함
    if (!adsenseId || !adSlot) return null;

    return (
        <div className={`adsense-unit my-4 text-center overflow-hidden ${className}`}>
            <ins
                className="adsbygoogle"
                style={{ display: "block" }}
                data-ad-client={adsenseId}
                data-ad-slot={adSlot}
                data-ad-format={adFormat}
                data-full-width-responsive={fullWidthResponsive ? "true" : "false"}
            />
        </div>
    );
}
