"use client";

import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  QUESTIONS,
  QUESTIONS_GIRLFRIEND,
  formatQuestion,
  type QuestionOption,
} from "@/constants/questions";
import RollingPotatoBar from "@/components/RollingPotatoBar";

export type TestMode = "boyfriend" | "girlfriend";

/** 선택지 + 원본 인덱스 (셔플 후에도 점수 계산용 인덱스 보관) */
type OptionWithIndex = QuestionOption & { originalIndex: number };

/** Fisher-Yates 셔플 - 배열을 랜덤 순서로 섞음 */
function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function buildShuffledQuestions(questions: typeof QUESTIONS) {
  return questions.map((q) => {
    const optionsWithIndex: OptionWithIndex[] = q.options.map((opt, idx) => ({
      ...opt,
      originalIndex: idx,
    }));
    return { ...q, options: shuffleArray(optionsWithIndex) };
  });
}

const SHUFFLED_QUESTIONS_BOYFRIEND = buildShuffledQuestions(QUESTIONS);
const SHUFFLED_QUESTIONS_GIRLFRIEND = buildShuffledQuestions(QUESTIONS_GIRLFRIEND);

function TestContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const mode: TestMode = (searchParams.get("mode") === "girlfriend" ? "girlfriend" : "boyfriend");
  const subject = mode === "girlfriend" ? "그녀" : "그";
  const shuffledQuestions =
    mode === "girlfriend" ? SHUFFLED_QUESTIONS_GIRLFRIEND : SHUFFLED_QUESTIONS_BOYFRIEND;

  const [currentQuestion, setCurrentQuestion] = useState(0);
  /** 질문별 선택한 옵션 인덱스 (0~3) */
  const [selectedIndices, setSelectedIndices] = useState<number[]>([]);

  const handleAnswer = (optionIndex: number) => {
    const selectedOption = question.options[optionIndex] as OptionWithIndex;
    const originalIndex = selectedOption.originalIndex;
    const newIndices = [...selectedIndices, originalIndex];
    setSelectedIndices(newIndices);

    if (currentQuestion < shuffledQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const params = new URLSearchParams({ answers: newIndices.join(","), mode });
      const matchMe = searchParams.get("matchMe");
      if (matchMe) params.set("matchMe", matchMe);
      router.push(`/loading?${params.toString()}`);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedIndices(selectedIndices.slice(0, -1));
    }
  };

  const question = shuffledQuestions[currentQuestion];
  const questionText =
    mode === "girlfriend" ? question.question : formatQuestion(question.question, subject);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 py-8">
      <div className="card max-w-2xl w-full space-y-6">
        <RollingPotatoBar
          currentStep={currentQuestion + 1}
          totalSteps={shuffledQuestions.length}
        />

        <div className="text-center py-8">
          <div className="text-4xl mb-4">🤔</div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 leading-relaxed">
            {questionText}
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

export default function TestPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-xl">로딩 중...</div>}>
      <TestContent />
    </Suspense>
  );
}
