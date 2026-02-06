"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { QUESTIONS } from "@/constants/questions";
import RollingPotatoBar from "@/components/RollingPotatoBar";

/** Fisher-Yates 셔플 - 배열을 랜덤 순서로 섞음 */
function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/** 셔플된 질문 목록 (선택지 순서만 섞음, 가중치/점수는 그대로) */
const SHUFFLED_QUESTIONS = QUESTIONS.map((q) => ({
  ...q,
  options: shuffleArray(q.options),
}));

export default function TestPage() {
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  /** 질문별 선택한 옵션 인덱스 (0~3) */
  const [selectedIndices, setSelectedIndices] = useState<number[]>([]);

  const handleAnswer = (optionIndex: number) => {
    const newIndices = [...selectedIndices, optionIndex];
    setSelectedIndices(newIndices);

    if (currentQuestion < SHUFFLED_QUESTIONS.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const queryString = newIndices.join(",");
      router.push(`/loading?answers=${encodeURIComponent(queryString)}`);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedIndices(selectedIndices.slice(0, -1));
    }
  };

  const question = SHUFFLED_QUESTIONS[currentQuestion];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 py-8">
      <div className="card max-w-2xl w-full space-y-6">
        <RollingPotatoBar
          currentStep={currentQuestion + 1}
          totalSteps={SHUFFLED_QUESTIONS.length}
        />

        <div className="text-center py-8">
          <div className="text-4xl mb-4">🤔</div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 leading-relaxed">
            {question.question}
          </h2>
        </div>

        <div className="space-y-3">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(index)}
              className="btn-answer w-full text-left"
            >
              <span className="text-lg">{option.text}</span>
            </button>
          ))}
        </div>

        {currentQuestion > 0 && (
          <button
            onClick={handlePrevious}
            className="w-full text-gray-500 hover:text-gray-700 py-2 text-sm transition-colors"
          >
            ← 이전 질문으로
          </button>
        )}
      </div>
    </div>
  );
}
