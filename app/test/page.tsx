"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { questions } from "@/data/questions";

export default function TestPage() {
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const handleAnswer = (type: string) => {
    const newAnswers = [...answers, type];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
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

  const question = questions[currentQuestion];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 py-8">
      <div className="card max-w-2xl w-full space-y-6">
        {/* 프로그레스 바 */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm text-gray-600">
            <span className="font-medium">
              질문 {currentQuestion + 1} / {questions.length}
            </span>
            <span className="text-pink-500 font-bold">
              {Math.round(progress)}%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <div
              className="bg-gradient-to-r from-pastel-purple to-pastel-pink h-full rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

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
