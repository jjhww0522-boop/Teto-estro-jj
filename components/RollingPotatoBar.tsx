"use client";

import { motion } from "framer-motion";

interface ProgressBarProps {
  currentStep: number; // 1 ~ 12
  totalSteps: number;  // 12
}

export default function RollingPotatoBar({ currentStep, totalSteps }: ProgressBarProps) {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className="w-full max-w-md mx-auto px-0 py-2">
      {/* 진행도 표시 텍스트 */}
      <div className="flex justify-between items-end mb-2">
        <span className="text-sm font-bold text-purple-600">진행도</span>
        <span className="text-xs text-gray-400">{currentStep} / {totalSteps}</span>
      </div>

      {/* 바 배경 */}
      <div className="relative w-full h-3 bg-gray-100 rounded-full overflow-visible">
        {/* 채워지는 바 */}
        <motion.div
          className="h-full bg-gradient-to-r from-pastel-purple to-pastel-pink rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />

        {/* 데굴데굴 구르는 감자 - 진행에 따라 슬라이드 + 회전 */}
        <motion.div
          className="absolute top-[-24px] text-2xl select-none pointer-events-none -translate-x-1/2"
          initial={{ left: "0%", rotate: 0 }}
          animate={{
            left: `${progress}%`,
            rotate: (currentStep - 1) * 45,
          }}
          transition={{
            left: { duration: 0.5, ease: "easeOut" },
            rotate: { type: "spring", stiffness: 120, damping: 14 },
          }}
        >
          🥔
        </motion.div>
      </div>

      {/* 바닥 선 (땅 느낌) */}
      <div className="w-full h-[2px] bg-gray-200 mt-[-2px] opacity-50 rounded-full" />
    </div>
  );
}
