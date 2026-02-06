import { QUESTIONS } from "@/constants/questions";

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
 */
export function getTestResult(userAnswers: number[]): CharType {
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
    const question = QUESTIONS[questionIndex];
    if (!question || answerIndex < 0 || answerIndex >= question.options.length) return;
    const selectedOption = question.options[answerIndex];
    Object.entries(selectedOption.scores).forEach(([char, score]) => {
      if (char in finalScores) {
        finalScores[char as CharType] += score;
      }
    });
  });

  // 동점이면 순서대로 첫 번째 반환
  return CHAR_ORDER.reduce((a, b) =>
    finalScores[a] >= finalScores[b] ? a : b
  );
}
