"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { questions, type Question } from "@/data/questions";
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

export default function TestPage() {
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  // 새로 테스트 시작할 때마다 각 질문의 선택지 순서를 랜덤으로 섞음 (한 번만 실행)
  const shuffledQuestions = useMemo<Question[]>(() => {
    return questions.map((q) => ({
      ...q,
      answers: shuffleArray(q.answers),
    }));
  }, []);

  const handleAnswer = (type: string) => {
    const newAnswers = [...answers, type];
    setAnswers(newAnswers);

    if (currentQuestion < shuffledQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // 모든 질문이 끝나면 로딩 페이지로 이동
      const queryString = newAnswers.join("");
      router.push(`/loading?answers=${queryString}`);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setAnswers(answers.slice(0, -1));
    }
  };

  const question = shuffledQuestions[currentQuestion];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 py-8">
      <div className="card max-w-2xl w-full space-y-6">
        {/* 감자 구르는 진행 바 */}
        <RollingPotatoBar
          currentStep={currentQuestion + 1}
          totalSteps={shuffledQuestions.length}
        />

        {/* 질문 */}
        <div className="text-center py-8">
          <div className="text-4xl mb-4">🤔</div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 leading-relaxed">
            {question.question}
          </h2>
        </div>

        {/* 답변 선택지 */}
        <div className="space-y-3">
          {question.answers.map((answer, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(answer.type)}
              className="btn-answer w-full text-left"
            >
              <span className="text-lg">{answer.text}</span>
            </button>
          ))}
        </div>

        {/* 이전 버튼 */}
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
