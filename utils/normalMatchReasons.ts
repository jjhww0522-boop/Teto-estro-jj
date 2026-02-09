/**
 * 테토 연구소: 보통궁합(Normal Match) 상세 분석
 * 그룹 조합에 따라 상세 사유를 반환합니다.
 */

const REALIST = [
  "teto",
  "ehem",
  "sweet_potato",
  "teto_f",
  "ehem_f",
  "sweet_potato_f",
] as const;

const SOCIAL = ["salsa", "cheese", "salsa_f", "cheese_f"] as const;

/** 상호 보완적 자극: 살사·치즈 ↔ 포테토·고구마 (외향 vs 내향) */
const CALM = ["potato", "sweet_potato", "potato_f", "sweet_potato_f"] as const;

/** 에라·살사 ↔ 테토·에헴 (자유로운 존중) — sweet_potato 제외 */
const FREE_SPIRIT = ["era", "salsa", "era_f", "salsa_f"] as const;
const REALIST_STRICT = ["teto", "ehem", "teto_f", "ehem_f"] as const;

/** 감성적 공감: 에겐·치즈 ↔ 포테토·에라 */
const SENSITIVE = ["egen", "cheese", "egen_f", "cheese_f"] as const;
const CALM_FREE = ["potato", "era", "potato_f", "era_f"] as const;

const REALIST_SET = new Set(REALIST);
const SOCIAL_SET = new Set(SOCIAL);
const CALM_SET = new Set(CALM);
const FREE_SPIRIT_SET = new Set(FREE_SPIRIT);
const REALIST_STRICT_SET = new Set(REALIST_STRICT);
const SENSITIVE_SET = new Set(SENSITIVE);
const CALM_FREE_SET = new Set(CALM_FREE);

function inGroup(slug: string, set: Set<string>): boolean {
  return set.has(slug);
}

/**
 * 보통궁합( Normal Match )일 때 그룹 조합에 따른 상세 사유 반환
 */
export function getNormalMatchReason(mySlug: string, targetSlug: string): string {
  // 1. [안정적인 동행] 현실주의자들의 만남 — 테토, 에헴, 고구마 계열 간
  if (inGroup(mySlug, REALIST_SET) && inGroup(targetSlug, REALIST_SET)) {
    return "서로가 추구하는 삶의 궤적이 비슷하여 큰 갈등 없이 안정적인 관계를 유지합니다. 각자의 역할 분담이 명확하고 서로의 영역을 존중하기에 실질적인 고민을 나눌 때 최고의 파트너가 됩니다. 다만, 관계가 고착화되어 다소 정적으로 느껴질 수 있으니 가끔은 의도적인 이벤트로 활력을 불어넣어 보세요.";
  }

  // 2. [상호 보완적 자극] 살사·치즈 ↔ 포테토·고구마 (외향 vs 내향)
  if (
    (inGroup(mySlug, SOCIAL_SET) && inGroup(targetSlug, CALM_SET)) ||
    (inGroup(mySlug, CALM_SET) && inGroup(targetSlug, SOCIAL_SET))
  ) {
    return "서로 다른 에너지 레벨이 만나 완만한 조화를 이룹니다. 한쪽의 넘치는 활력이 상대에게 생기를 불어넣고, 다른 한쪽의 차분함은 관계의 무게중심을 잡아줍니다. 서로의 속도 차이를 '틀림'이 아닌 '다름'으로 인정한다면, 서로의 세계관을 넓혀주는 아주 건강한 관계로 발전할 수 있습니다.";
  }

  // 3. [감성적 공감] 에겐·치즈 ↔ 포테토·에라
  if (
    (inGroup(mySlug, SENSITIVE_SET) && inGroup(targetSlug, CALM_FREE_SET)) ||
    (inGroup(mySlug, CALM_FREE_SET) && inGroup(targetSlug, SENSITIVE_SET))
  ) {
    return "말하지 않아도 서로의 기분을 눈치채는 섬세한 배려가 돋보이는 조합입니다. 정서적 유대감을 중요시하며, 소소한 일상을 공유하는 것에서 행복을 찾습니다. 가끔은 현실적인 문제 해결보다 감정적 위로가 우선시되어 결정이 늦어질 수 있지만, 그만큼 따뜻하고 인간미 넘치는 연애를 이어갑니다.";
  }

  // 4. [자유로운 존중] 에라·살사 ↔ 테토·에헴 (sweet_potato 제외)
  if (
    (inGroup(mySlug, FREE_SPIRIT_SET) && inGroup(targetSlug, REALIST_STRICT_SET)) ||
    (inGroup(mySlug, REALIST_STRICT_SET) && inGroup(targetSlug, FREE_SPIRIT_SET))
  ) {
    return "서로의 독립적인 성향을 인정하며 적절한 거리를 유지하는 세련된 관계입니다. 상대방을 구속하려 하지 않고 각자의 개성을 존중해주기 때문에 심리적 압박감이 적습니다. 다만, 서로 너무 쿨한 태도를 유지하다가 정작 깊은 감정적 연결이 필요한 순간을 놓칠 수 있으니 주의 깊은 관찰이 필요합니다.";
  }

  // 5. 기본
  return "무난한 조합입니다. 서로의 다름을 대화로 맞춰가며 우리만의 속도를 찾아가는 즐거움이 있습니다.";
}
