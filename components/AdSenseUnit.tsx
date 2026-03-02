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
    useEffect(() => {
        try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch {
            // adsbygoogle 초기화 실패 시 무시
        }
    }, []);

    return (
        <div className={`adsense-unit my-4 text-center overflow-hidden ${className}`}>
            <ins
                className="adsbygoogle"
                style={{ display: "block" }}
                data-ad-client="ca-pub-1924006200055778"
                data-ad-slot={adSlot}
                data-ad-format={adFormat}
                data-full-width-responsive={fullWidthResponsive ? "true" : "false"}
            />
        </div>
    );
}
