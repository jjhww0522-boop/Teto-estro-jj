"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/components/LocaleProvider";

interface TetoConcentrationBarProps {
  /** 0~100 테토력 퍼센트 */
  percent: number;
  /** 셀프 진단 시 "내 테토력" 문구 사용 */
  isSelf?: boolean;
}

export default function TetoConcentrationBar({ percent, isSelf }: TetoConcentrationBarProps) {
  const { t } = useLocale();
  const clamped = Math.min(100, Math.max(0, percent));
  const labelKey = isSelf ? "result.concentrationLabelSelf" : "result.concentrationLabel";

  return (
    <div className="w-full max-w-xs mx-auto">
      <p className="text-center text-lg font-bold text-brand-charcoal mb-2">
        {t(labelKey, { percent: clamped })}
      </p>
      <div className="h-3 rounded-full bg-brand-border-light overflow-hidden border border-brand-border">
        <motion.div
          className="h-full rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${clamped}%` }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{
            background: "linear-gradient(90deg, #a29bfe 0%, #6c5ce7 50%, #5b4cdb 100%)",
          }}
        />
      </div>
    </div>
  );
}
