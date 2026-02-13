"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { RESULTS_DATA, getCompatibility, ALL_RESULT_SLUGS } from "@/constants/results";
import type { ResultSlug } from "@/constants/results";
import { useLocale } from "@/components/LocaleProvider";
import { LoadingFallback } from "@/components/LoadingFallback";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://teto-potato-test.vercel.app";

function isValidSlug(s: string | null): s is ResultSlug {
  return s !== null && (ALL_RESULT_SLUGS as readonly string[]).includes(s);
}

function MatchContent() {
  const searchParams = useSearchParams();
  const { t } = useLocale();
  const me = searchParams.get("me");
  const you = searchParams.get("you");

  const meValid = isValidSlug(me);
  const youValid = isValidSlug(you);

  const meData = meValid ? RESULTS_DATA[me!] : null;
  const youData = youValid ? RESULTS_DATA[you!] : null;
  const compatibility = meValid && youValid ? getCompatibility(me!, you!) : null;

  const shareUrl = meValid ? `${BASE_URL}/match?me=${encodeURIComponent(me!)}` : "";

  const copyShareLink = () => {
    if (!shareUrl) return;
    navigator.clipboard.writeText(shareUrl);
    alert(t("match.linkCopied"));
  };

  if (!meValid) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6">
        <div className="card max-w-md w-full text-center space-y-6">
          <h1 className="text-2xl font-bold text-brand-charcoal">{t("match.title")}</h1>
          <p className="text-brand-muted">
            {t("match.needTest")}
          </p>
          <Link href="/" className="block">
            <button type="button" className="w-full btn-primary">
              {t("match.goTest")}
            </button>
          </Link>
        </div>
      </div>
    );
  }

  if (!youValid) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6">
        <div className="card max-w-md w-full text-center space-y-6">
          <div className="text-6xl">{meData?.emoji}</div>
          <h1 className="text-2xl font-bold text-brand-charcoal">
            {t("match.youAre", { type: meData?.type ?? "" })}
          </h1>
          <p className="text-brand-muted">
            {t("match.sendLink")}
          </p>
          <button
            type="button"
            onClick={copyShareLink}
            className="w-full btn-primary"
          >
            {t("match.sendLinkBtn")}
          </button>
          <p className="text-sm text-brand-muted">
            {t("match.sendLinkDesc")}
          </p>
          <Link
            href={`/test?matchMe=${encodeURIComponent(me!)}`}
            className="block w-full py-3 border border-brand-border text-brand-accent font-medium rounded-button text-center hover:bg-brand-highlight transition-colors"
          >
            {t("match.alsoTest")}
          </Link>
          <Link href="/" className="text-sm text-brand-accent hover:underline">
            {t("match.goMain")}
          </Link>
        </div>
      </div>
    );
  }

  const score = compatibility?.score ?? 0;
  const description = compatibility?.description ?? "";

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <motion.div
        className="card max-w-lg w-full space-y-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-2xl font-bold text-center text-brand-charcoal">
          {t("match.ourChemistry")}
        </h1>

        <div className="flex justify-center items-center gap-6">
          <div className="text-center">
            <div className="text-5xl mb-2">{meData?.emoji}</div>
            <p className="font-bold text-brand-charcoal">{meData?.type}</p>
          </div>
          <span className="text-xl font-bold text-brand-accent bg-brand-accent/10 w-10 h-10 rounded-full flex items-center justify-center">💕</span>
          <div className="text-center">
            <div className="text-5xl mb-2">{youData?.emoji}</div>
            <p className="font-bold text-brand-charcoal">{youData?.type}</p>
          </div>
        </div>

        <p className="text-center text-sm text-brand-muted">
          {t("match.densitySum")}
        </p>
        <div className="space-y-2">
          <p className="text-center text-sm font-bold text-brand-accent">{t("match.chemistryIndex")}</p>
          <div className="relative w-full h-8 bg-brand-border-light rounded-full overflow-hidden">
            <motion.div
              className="absolute inset-y-0 left-0 bg-brand-accent rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${score}%` }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-sm font-black text-brand-charcoal drop-shadow-sm">
                {score}%
              </span>
            </div>
          </div>
        </div>

        <p className="text-center text-brand-charcoal leading-relaxed text-kr-wrap">{description}</p>

        <div className="pt-4 space-y-3">
          <button
            type="button"
            onClick={copyShareLink}
            className="w-full btn-primary"
          >
            {t("match.copyChemistry")}
          </button>
          <Link href="/" className="block text-center text-sm text-brand-accent hover:underline">
            {t("match.goMain")}
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

export default function MatchPage() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <MatchContent />
    </Suspense>
  );
}
