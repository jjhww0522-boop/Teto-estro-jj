import { QUESTIONS, QUESTIONS_GIRLFRIEND } from "@/constants/questions";
import type { QuestionItem } from "@/constants/questions";

/** RESULTS_DATA / SLUG_TO_KEY와 일치하는 캐릭터 키 */
export type CharType =
  | "teto"
  | "potato"
  | "egen"
  | "cheese"
  | "era"
  | "salsa"
  | "ehem"
  | "sweet_potato";

const CHAR_ORDER: CharType[] = [
  "teto",
  "potato",
  "egen",
  "sweet_potato",
  "cheese",
  "salsa",
  "ehem",
  "era",
];

/**
 * 사용자가 고른 선택지 인덱스 배열(0~3)로 최종 캐릭터 점수를 계산해 우승 유형을 반환합니다.
 * 동점일 경우 finalScores 순서(CHAR_ORDER)상 첫 번째를 반환합니다.
 * @param userAnswers 질문별 선택 옵션 인덱스 (0~3)
 * @param mode 'girlfriend'면 여친용 질문지(QUESTIONS_GIRLFRIEND)로 계산
 */
export function getTestResult(
  userAnswers: number[],
  mode?: "boyfriend" | "girlfriend"
): CharType {
  const questions: QuestionItem[] = mode === "girlfriend" ? QUESTIONS_GIRLFRIEND : QUESTIONS;
  const finalScores: Record<CharType, number> = {
    teto: 0,
    potato: 0,
    egen: 0,
    cheese: 0,
    era: 0,
    salsa: 0,
    ehem: 0,
    sweet_potato: 0,
  };

  userAnswers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (!question || answerIndex < 0 || answerIndex >= question.options.length) return;
    const selectedOption = question.options[answerIndex];
    Object.entries(selectedOption.scores).forEach(([char, score]) => {
      if (char in finalScores) {
        finalScores[char as CharType] += score;
      }
    });
  });

  return CHAR_ORDER.reduce((a, b) =>
    finalScores[a] >= finalScores[b] ? a : b
  );
}
