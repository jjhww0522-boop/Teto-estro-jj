/**
 * 유형별 테토력 % (0~100) - 결과 그래프·스토리 카드용
 */
const SLUG_TO_PERCENT: Record<string, number> = {
  teto: 100,
  potato: 22,
  egen: 1,
  sweet_potato: 73,
  cheese: 50,
  salsa: 95,
  ehem: 85,
  era: 90,
};

/** 표시명(테토남, 포테토녀 등) → base slug */
const TYPE_TO_SLUG: Record<string, string> = {
  테토남: "teto",
  테토녀: "teto",
  포테토남: "potato",
  포테토녀: "potato",
  에겐남: "egen",
  에겐녀: "egen",
  고구마남: "sweet_potato",
  고구마녀: "sweet_potato",
  치즈남: "cheese",
  치즈녀: "cheese",
  살사남: "salsa",
  살사녀: "salsa",
  에헴남: "ehem",
  에헴녀: "ehem",
  에라남: "era",
  에라녀: "era",
};

/**
 * 결과 slug(teto, teto_f) 또는 type(테토남, 포테토녀 등)에 따른 테토력 % 반환 (0~100).
 */
export function getConcentrationPercent(slugOrType: string | undefined): number {
  if (!slugOrType) return 50;
  const baseSlug = TYPE_TO_SLUG[slugOrType] ?? slugOrType.replace(/_f$/, "");
  return SLUG_TO_PERCENT[baseSlug] ?? 50;
}
