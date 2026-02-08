"use client";

import { Suspense, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { RESULTS_DATA, getCompatibility, ALL_RESULT_SLUGS } from "@/constants/results";
import type { ResultSlug } from "@/constants/results";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://teto-potato-test.vercel.app";

function isValidSlug(s: string | null): s is ResultSlug {
  return s !== null && (ALL_RESULT_SLUGS as readonly string[]).includes(s);
}

function MatchContent() {
  const searchParams = useSearchParams();
  const me = searchParams.get("me");
  const you = searchParams.get("you");

  const meValid = isValidSlug(me);
  const youValid = isValidSlug(you);
  const bothValid = meValid && youValid;

  const meData = meValid ? RESULTS_DATA[me!] : null;
  const youData = youValid ? RESULTS_DATA[you!] : null;
  const compatibility = meValid && youValid ? getCompatibility(me!, you!) : null;

  const shareUrl = meValid ? `${BASE_URL}/match?me=${encodeURIComponent(me!)}` : "";

  const copyShareLink = () => {
    if (!shareUrl) return;
    navigator.clipboard.writeText(shareUrl);
    alert("궁합 링크가 복사되었어요! 연인에게 보내고, 연인이 테스트한 뒤 이 링크로 들어오면 궁합을 볼 수 있어요 💕");
  };

  if (!meValid) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6">
        <div className="card max-w-md w-full text-center space-y-6">
          <h1 className="text-2xl font-bold text-gray-800">궁합 보기 (Chemistry)</h1>
          <p className="text-gray-600">
            먼저 테스트를 완료한 뒤 결과 페이지에서 &apos;우리 궁합 보기&apos;를 눌러주세요.
          </p>
          <Link href="/" className="block">
            <button type="button" className="w-full btn-primary">
              테스트하러 가기
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
          <h1 className="text-2xl font-bold text-gray-800">
            당신은 {meData?.type}!
          </h1>
          <p className="text-gray-600">
            연인도 테스트하면 우리 궁합을 볼 수 있어요. 아래 링크를 연인에게 보내주세요.
          </p>
          <button
            type="button"
            onClick={copyShareLink}
            className="w-full py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-2xl shadow-md"
          >
            연인에게 궁합 링크 보내기
          </button>
          <p className="text-sm text-gray-500">
            연인이 테스트를 마친 뒤 이 링크로 들어오면 궁합이 자동으로 나와요.
          </p>
          <Link
            href={`/test?matchMe=${encodeURIComponent(me!)}`}
            className="block w-full py-3 border-2 border-purple-200 text-purple-700 font-medium rounded-xl text-center"
          >
            나도 테스트하고 궁합 보기
          </Link>
          <Link href="/" className="text-sm text-purple-600 hover:underline">
            메인으로
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
        <h1 className="text-2xl font-bold text-center text-gray-800">
          우리 궁합 (Chemistry)
        </h1>

        <div className="flex justify-center items-center gap-6">
          <div className="text-center">
            <div className="text-5xl mb-2">{meData?.emoji}</div>
            <p className="font-bold text-gray-800">{meData?.type}</p>
          </div>
          <span className="text-3xl text-purple-400">💕</span>
          <div className="text-center">
            <div className="text-5xl mb-2">{youData?.emoji}</div>
            <p className="font-bold text-gray-800">{youData?.type}</p>
          </div>
        </div>

        <p className="text-center text-sm text-gray-500">
          우리들의 농도 합산 · 두 유형의 시너지
        </p>
        <div className="space-y-2">
          <p className="text-center text-sm font-bold text-purple-600">궁합 지수 (Chemistry)</p>
          <div className="relative w-full h-8 bg-gray-100 rounded-full overflow-hidden">
            <motion.div
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${score}%` }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-sm font-black text-gray-800 drop-shadow-sm">
                {score}%
              </span>
            </div>
          </div>
        </div>

        <p className="text-center text-gray-700 leading-relaxed text-kr-wrap">{description}</p>

        <div className="pt-4 space-y-3">
          <button
            type="button"
            onClick={copyShareLink}
            className="w-full py-4 bg-gradient-to-r from-amber-400 to-orange-500 text-white font-bold rounded-2xl shadow-md"
          >
            이 궁합 링크 복사하기 (me 고정)
          </button>
          <Link href="/" className="block text-center text-sm text-purple-600 hover:underline">
            메인으로
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

export default function MatchPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-xl">로딩 중...</div>
        </div>
      }
    >
      <MatchContent />
    </Suspense>
  );
}
