"use client";

import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  QUESTIONS,
  QUESTIONS_GIRLFRIEND,
  formatQuestion,
  formatOptionForSelfGirlfriend,
  type QuestionOption,
} from "@/constants/questions";
import { QUESTIONS_I18N, QUESTIONS_GIRLFRIEND_I18N } from "@/constants/questions-i18n";
import RollingPotatoBar from "@/components/RollingPotatoBar";
import { LoadingFallback } from "@/components/LoadingFallback";
import { useLocale } from "@/components/LocaleProvider";

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

/** locale별 subject 치환용 맵 */
const SUBJECT_MAP: Record<string, { boyfriend: string; girlfriend: string }> = {
  ko: { boyfriend: "그", girlfriend: "그녀" },
  en: { boyfriend: "he", girlfriend: "she" },
  ja: { boyfriend: "彼", girlfriend: "彼女" },
  zh: { boyfriend: "他", girlfriend: "她" },
};

function TestContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { locale, t } = useLocale();
  const mode: TestMode = (searchParams.get("mode") === "girlfriend" ? "girlfriend" : "boyfriend");
  const isSelf = searchParams.get("isSelf") === "1";
  const subject = isSelf ? "나" : (mode === "girlfriend" ? "그녀" : "그");
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
      if (isSelf) params.set("isSelf", "1");
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

  // i18n 오버레이: locale !== "ko"일 때 번역 텍스트 사용
  const i18nMap = mode === "girlfriend" ? QUESTIONS_GIRLFRIEND_I18N : QUESTIONS_I18N;
  const i18nEntry = locale !== "ko" ? i18nMap[locale]?.[question.id] : null;

  let questionText: string;
  if (i18nEntry && !isSelf) {
    questionText = i18nEntry.question;
  } else if (mode === "girlfriend" && !isSelf) {
    questionText = question.question;
  } else if (isSelf && mode === "girlfriend") {
    questionText = question.question
      .replace(/내가 /g, "그가 ") // 질문 안의 '내가'(남자) → '그가'
      .replace(/그녀의/g, "나의")
      .replace(/그녀가/g, "내가")
      .replace(/그녀는/g, "나는")
      .replace(/그녀/g, "나");
  } else {
    questionText = formatQuestion(question.question, subject);
  }
  if (isSelf) {
    questionText = questionText
      .replace(/나를 발견했을 때/g, "상대방을 발견했을 때")
      .replace(/내 사진을 찍어줄 때/g, "상대방의 사진을 찍어줄 때")
      .replace(/나에게 /g, "상대방에게 ")
      .replace(/내가 가장 먼저 하는 반응은\?/g, "나의 반응은?")
      .replace(/나가 /g, "내가 ");
    if (mode === "boyfriend") {
      questionText = questionText
        .replace(/내가 /g, "상대방이 ")
        .replace(/상대방이 가장 중시하는 건\?/g, "내가 가장 중시하는 건?");
    }
  }

  // 옵션 텍스트 오버레이 (셀프 모드일 때는 '나' 시점 문장으로)
  const getOptionText = (option: OptionWithIndex): string => {
    if (i18nEntry && i18nEntry.options[option.originalIndex] && !isSelf) {
      return i18nEntry.options[option.originalIndex];
    }
    if (isSelf && mode === "girlfriend") {
      return option.textSelf ?? formatOptionForSelfGirlfriend(option.text);
    }
    if (isSelf) {
      const base = option.textSelf ?? option.text;
      return base
        .replace(/내 의견을 묻고/g, "상대방의 의견을 묻고")
        .replace(/내 어깨에/g, "상대방의 어깨에")
        .replace(/내 안부를/g, "상대방의 안부를")
        .replace(/내 감정을/g, "상대의 감정을");
    }
    return option.text;
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 py-8">
      <div className="card max-w-2xl w-full space-y-6">
        <RollingPotatoBar
          currentStep={currentQuestion + 1}
          totalSteps={shuffledQuestions.length}
        />

        <div className="py-8 px-4">
          <div className="w-10 h-10 rounded-full bg-brand-accent text-white flex items-center justify-center text-lg font-bold mx-auto mb-4">
            🤔
          </div>
          <h2 className="text-lg md:text-xl font-bold text-brand-charcoal leading-8 text-kr-wrap text-center max-w-2xl mx-auto">
            {questionText}
          </h2>
        </div>

        <div className="space-y-3">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(index)}
              className="btn-answer w-full text-kr-wrap"
            >
              <span className="block text-sm text-center leading-relaxed whitespace-pre-line">
                {getOptionText(option as OptionWithIndex)}
              </span>
            </button>
          ))}
        </div>

        {currentQuestion > 0 && (
          <button
            onClick={handlePrevious}
            className="w-full text-brand-muted hover:text-brand-accent py-2 text-sm transition-colors"
          >
            {t("test.previous")}
          </button>
        )}
      </div>
    </div>
  );
}

export default function TestPage() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <TestContent />
    </Suspense>
  );
}
