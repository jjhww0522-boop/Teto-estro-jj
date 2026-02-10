"use client";

import { motion } from "framer-motion";

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

export default function RollingPotatoBar({ currentStep, totalSteps }: ProgressBarProps) {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className="w-full max-w-md mx-auto px-0 py-2">
      {/* 진행도 표시 */}
      <div className="flex justify-between items-end mb-3">
        <span className="section-label">진행도</span>
        <span className="text-sm font-semibold text-brand-accent tabular-nums">
          {currentStep} / {totalSteps}
        </span>
      </div>

      {/* 스텝 인디케이터 */}
      <div className="flex items-center gap-1 mb-2">
        {Array.from({ length: totalSteps }, (_, i) => (
          <div
            key={i}
            className={`flex-1 h-1.5 rounded-full transition-colors duration-300 ${
              i < currentStep ? "bg-brand-accent" : "bg-brand-border"
            }`}
          />
        ))}
      </div>

      {/* 실선 프로그레스 바 + 🥔 감자 */}
      <div className="relative w-full h-3 bg-brand-border-light rounded-full overflow-visible">
        <motion.div
          className="h-full bg-brand-accent rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
        {/* 굴러가는 감자 */}
        <motion.div
          className="absolute -top-3 text-xl leading-none select-none"
          style={{ left: `${progress}%`, translateX: "-50%" }}
          initial={{ left: "0%", rotate: 0 }}
          animate={{ left: `${progress}%`, rotate: progress * 3.6 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 120, damping: 14 }}
        >
          🥔
        </motion.div>
      </div>
    </div>
  );
}
