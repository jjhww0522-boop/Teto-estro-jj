/**
 * 다국어: locale 타입 및 번역 로딩
 * 번역 키는 점 표기법 (예: home.title)
 * 치환: {{count}} 등
 */
export type Locale = "ko" | "en" | "ja" | "zh";

export const LOCALE_LABELS: Record<Locale, string> = {
  ko: "한국어",
  en: "English",
  ja: "日本語",
  zh: "中文",
};

const COOKIE_NAME = "locale";
const COOKIE_MAX_AGE = 365 * 24 * 60 * 60; // 1년

export function getLocaleFromCookie(cookieHeader: string | null): Locale {
  if (!cookieHeader) return "ko";
  const match = cookieHeader.match(new RegExp(`${COOKIE_NAME}=([^;]+)`));
  const value = match?.[1]?.trim();
  if (value === "en" || value === "ja" || value === "zh") return value;
  return "ko";
}

/** 서버 컴포넌트용: Next.js cookies()에서 locale 추출 */
export function getLocaleFromCookies(cookieStore: { get: (name: string) => { value: string } | undefined }): Locale {
  const value = cookieStore.get(COOKIE_NAME)?.value?.trim();
  if (value === "en" || value === "ja" || value === "zh") return value;
  return "ko";
}

export function setLocaleCookie(locale: Locale) {
  if (typeof document === "undefined") return;
  document.cookie = `${COOKIE_NAME}=${locale};path=/;max-age=${COOKIE_MAX_AGE};SameSite=Lax`;
}

export function getLocaleFromStorage(): Locale {
  if (typeof window === "undefined") return "ko";
  try {
    const v = localStorage.getItem(COOKIE_NAME);
    if (v === "en" || v === "ja" || v === "zh") return v;
  } catch {}
  return "ko";
}

export function setLocaleStorage(locale: Locale) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(COOKIE_NAME, locale);
  } catch {}
}

/** 점 경로로 객체 값 가져오기 */
function getByPath(obj: Record<string, unknown>, path: string): string | undefined {
  const parts = path.split(".");
  let current: unknown = obj;
  for (const p of parts) {
    if (current == null || typeof current !== "object") return undefined;
    current = (current as Record<string, unknown>)[p];
  }
  return typeof current === "string" ? current : undefined;
}

/** {{key}} 치환 */
function interpolate(str: string, vars: Record<string, string | number>): string {
  return str.replace(/\{\{(\w+)\}\}/g, (_, key) => String(vars[key] ?? ""));
}

export type Translations = Record<string, unknown>;

let cached: Partial<Record<Locale, Translations>> = {};

export async function loadTranslations(locale: Locale): Promise<Translations> {
  if (cached[locale]) return cached[locale] as Translations;
  const mod = await import(`@/locales/${locale}.json`);
  const tr = mod.default as Translations;
  cached[locale] = tr;
  return tr;
}

export function t(
  translations: Translations,
  key: string,
  vars?: Record<string, string | number>
): string {
  const raw = getByPath(translations as Record<string, unknown>, key);
  const str = raw ?? key;
  return vars ? interpolate(str, vars) : str;
}
