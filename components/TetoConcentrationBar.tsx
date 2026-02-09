"use client";

import { motion } from "framer-motion";

interface TetoConcentrationBarProps {
  /** 0~100 테토력 퍼센트 */
  percent: number;
}

/** 0에 가까울수록 흰색, 100에 가까울수록 빨간색 그라데이션 바 */
export default function TetoConcentrationBar({ percent }: TetoConcentrationBarProps) {
  const clamped = Math.min(100, Math.max(0, percent));

  return (
    <div className="w-full max-w-xs mx-auto">
      <p className="text-center text-lg font-bold text-gray-800 mb-2">
        내 애인의 테토력 <span className="text-purple-600">{clamped}%</span>!
      </p>
      <div className="h-6 rounded-full bg-gray-100 overflow-hidden border border-gray-200/80 shadow-inner">
        <motion.div
          className="h-full rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${clamped}%` }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{
            background: "linear-gradient(90deg, #ffffff 0%, #fef2f2 15%, #fecaca 40%, #f87171 75%, #ef4444 100%)",
            boxShadow: "0 0 0 1px rgba(0,0,0,0.05)",
          }}
        />
      </div>
    </div>
  );
}
