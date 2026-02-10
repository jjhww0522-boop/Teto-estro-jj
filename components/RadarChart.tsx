"use client";

import { motion } from "framer-motion";
import type { CharType } from "@/utils/calculate";

const DIMENSION_LABELS: Record<CharType, string> = {
  teto: "직진력",
  potato: "안정감",
  egen: "감성",
  sweet_potato: "헌신",
  cheese: "매력",
  salsa: "열정",
  ehem: "책임감",
  era: "자유",
};

const DIMENSIONS: CharType[] = [
  "teto", "potato", "egen", "sweet_potato",
  "cheese", "salsa", "ehem", "era",
];

interface RadarChartProps {
  scores: Record<CharType, number>;
  size?: number;
}

export default function RadarChart({ scores, size = 280 }: RadarChartProps) {
  const cx = size / 2;
  const cy = size / 2;
  const maxRadius = size * 0.38;
  const labelRadius = size * 0.48;
  const n = DIMENSIONS.length;

  // 각 축의 최대값을 계산하여 0~100 범위로 정규화
  const maxScore = Math.max(...Object.values(scores), 1);
  const normalizedScores = DIMENSIONS.map(
    (dim) => Math.min(100, (scores[dim] / maxScore) * 100)
  );

  function getPoint(index: number, value: number): [number, number] {
    const angle = (Math.PI * 2 * index) / n - Math.PI / 2;
    const r = (value / 100) * maxRadius;
    return [cx + r * Math.cos(angle), cy + r * Math.sin(angle)];
  }

  // 그리드 링 (25%, 50%, 75%, 100%)
  const gridLevels = [25, 50, 75, 100];

  // 축선
  const axisLines = DIMENSIONS.map((_, i) => {
    const [x, y] = getPoint(i, 100);
    return `M${cx},${cy} L${x},${y}`;
  });

  // 데이터 폴리곤 포인트
  const dataPoints = normalizedScores.map((val, i) => getPoint(i, val));
  const dataPath = dataPoints.map(([x, y], i) => (i === 0 ? `M${x},${y}` : `L${x},${y}`)).join(" ") + " Z";

  // 라벨 위치
  const labelPositions = DIMENSIONS.map((_, i) => {
    const angle = (Math.PI * 2 * i) / n - Math.PI / 2;
    return [cx + labelRadius * Math.cos(angle), cy + labelRadius * Math.sin(angle)];
  });

  return (
    <div className="flex flex-col items-center">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="overflow-visible">
        {/* 그리드 링 */}
        {gridLevels.map((level) => {
          const points = DIMENSIONS.map((_, i) => getPoint(i, level));
          const path = points.map(([x, y], i) => (i === 0 ? `M${x},${y}` : `L${x},${y}`)).join(" ") + " Z";
          return (
            <path
              key={level}
              d={path}
              fill="none"
              stroke="#e0e0e0"
              strokeWidth="0.75"
              opacity={0.6}
            />
          );
        })}

        {/* 축선 */}
        {axisLines.map((d, i) => (
          <path key={i} d={d} stroke="#e0e0e0" strokeWidth="0.75" opacity={0.4} />
        ))}

        {/* 데이터 폴리곤 */}
        <motion.path
          d={dataPath}
          fill="rgba(108, 92, 231, 0.15)"
          stroke="#6c5ce7"
          strokeWidth="2"
          strokeLinejoin="round"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ transformOrigin: `${cx}px ${cy}px` }}
        />

        {/* 데이터 포인트 */}
        {dataPoints.map(([x, y], i) => (
          <motion.circle
            key={i}
            cx={x}
            cy={y}
            r={3}
            fill="#6c5ce7"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 + i * 0.05 }}
          />
        ))}

        {/* 라벨 */}
        {labelPositions.map(([x, y], i) => (
          <text
            key={i}
            x={x}
            y={y}
            textAnchor="middle"
            dominantBaseline="central"
            className="text-[10px] fill-brand-muted font-medium"
            style={{ fontSize: "10px" }}
          >
            {DIMENSION_LABELS[DIMENSIONS[i]]}
          </text>
        ))}
      </svg>
    </div>
  );
}
