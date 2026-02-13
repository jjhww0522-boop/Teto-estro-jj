"use client";

import { useLocale } from "@/components/LocaleProvider";

interface LoadingFallbackProps {
  /** locale 키 (기본: common.loading) */
  messageKey?: string;
  className?: string;
}

export function LoadingFallback({ messageKey = "common.loading", className }: LoadingFallbackProps) {
  const { t } = useLocale();
  return (
    <div className={className ?? "min-h-screen flex items-center justify-center"}>
      <div className="text-2xl">{t(messageKey)}</div>
    </div>
  );
}
