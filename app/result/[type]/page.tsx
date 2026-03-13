import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { cookies } from "next/headers";
import { getResultBySlug, RESULT_SLUGS } from "@/data/results";
import ResultView from "@/components/ResultView";
import { getLocaleFromCookies, loadTranslations, t } from "@/lib/i18n";
import { RESULTS_I18N } from "@/constants/results-i18n";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://tetolab.com";

interface PageProps {
  params: Promise<{ type: string }>;
}

const SLUG_INFO: Record<string, { name: string; emoji: string; gender: string }> = {
  teto: { name: "테토", emoji: "🚜", gender: "남" },
  potato: { name: "포테토", emoji: "🧸", gender: "남" },
  egen: { name: "에겐", emoji: "💌", gender: "남" },
  sweet_potato: { name: "고구마", emoji: "🍠", gender: "남" },
  cheese: { name: "치즈", emoji: "🧀", gender: "남" },
  salsa: { name: "살사", emoji: "🌶️", gender: "남" },
  ehem: { name: "에헴", emoji: "⚖️", gender: "남" },
  era: { name: "에라", emoji: "🌊", gender: "남" },
  teto_f: { name: "테토", emoji: "🚜", gender: "녀" },
  potato_f: { name: "포테토", emoji: "🧸", gender: "녀" },
  egen_f: { name: "에겐", emoji: "💌", gender: "녀" },
  sweet_potato_f: { name: "고구마", emoji: "🍠", gender: "녀" },
  cheese_f: { name: "치즈", emoji: "🧀", gender: "녀" },
  salsa_f: { name: "살사", emoji: "🌶️", gender: "녀" },
  ehem_f: { name: "에헴", emoji: "⚖️", gender: "녀" },
  era_f: { name: "에라", emoji: "🌊", gender: "녀" },
};

export async function generateStaticParams() {
  return RESULT_SLUGS.map((type) => ({ type }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { type } = await params;
  const result = getResultBySlug(type);
  if (!result) return {};

  const cookieStore = await cookies();
  const locale = getLocaleFromCookies(cookieStore);
  const translations = await loadTranslations(locale);
  const siteName = t(translations, "common.siteName");
  const i18nResult = locale !== "ko" ? RESULTS_I18N[locale]?.[type] : null;
  const displayType = i18nResult?.type ?? result.type;
  const displayTitle = i18nResult?.title ?? result.title;
  const displayTagline = i18nResult?.tagline ?? result.tagline;
  const displayOneLiner = i18nResult?.oneLiner ?? result.oneLiner;

  const title = `${displayType}: ${displayTitle} | ${siteName}`;
  const description = `${displayTagline} ${displayOneLiner} - ${siteName}`;
  const url = `${BASE_URL}/result/${type}`;

  return {
    title,
    description,
    keywords: result.keywords?.join(", "),
    openGraph: {
      title: `${displayType}: ${displayTitle} | ${siteName}`,
      description: `${displayTagline} - ${displayOneLiner}`,
      url,
      siteName,
      type: "article",
    },
    alternates: {
      canonical: url,
    },
  };
}

function getOtherTypes(currentSlug: string) {
  const isFemale = currentSlug.endsWith("_f");
  const baseSlugs = isFemale
    ? ["teto_f", "potato_f", "egen_f", "sweet_potato_f", "cheese_f", "salsa_f", "ehem_f", "era_f"]
    : ["teto", "potato", "egen", "sweet_potato", "cheese", "salsa", "ehem", "era"];
  return baseSlugs.filter((s) => s !== currentSlug);
}

export default async function ResultTypePage({ params }: PageProps) {
  const { type } = await params;
  const result = getResultBySlug(type);
  if (!result) notFound();

  const cookieStore = await cookies();
  const locale = getLocaleFromCookies(cookieStore);
  const translations = await loadTranslations(locale);
  const siteName = t(translations, "common.siteName");
  const i18nResult = locale !== "ko" ? RESULTS_I18N[locale]?.[type] : null;
  const displayResult = i18nResult ? { ...result, ...i18nResult } : result;

  const shareUrl = `${BASE_URL}/result/${type}`;
  const otherTypes = getOtherTypes(type);

  function getTypeDisplayName(slug: string): string {
    if (locale !== "ko") {
      const name = RESULTS_I18N[locale]?.[slug]?.type;
      if (name) return name;
    }
    const info = SLUG_INFO[slug];
    return info ? `${info.name}${info.gender}` : slug;
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${displayResult.type}: ${displayResult.title}`,
    description: `${displayResult.tagline} - ${displayResult.oneLiner}`,
    url: shareUrl,
    publisher: {
      "@type": "Organization",
      name: siteName,
      url: BASE_URL,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": shareUrl,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Server-rendered SEO content - visible to crawlers */}
      <article className="max-w-2xl mx-auto px-6 pt-6">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-gray-500 mb-4">
          <Link href="/" className="hover:underline">홈</Link>
          <span>›</span>
          <Link href="/types" className="hover:underline">유형 가이드</Link>
          <span>›</span>
          <span className="text-gray-700 font-medium">{displayResult.type} 유형</span>
        </nav>

        <header className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800">
            {result.emoji} {displayResult.type}: {displayResult.title}
          </h1>
          <p className="text-gray-600 mt-2 italic">{displayResult.tagline}</p>
          <p className="text-gray-700 mt-2">{displayResult.oneLiner}</p>
        </header>

        {displayResult.keywords && displayResult.keywords.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {displayResult.keywords.map((kw) => (
              <span
                key={kw}
                className="text-xs bg-pink-50 text-pink-600 px-2 py-1 rounded-full"
              >
                #{kw}
              </span>
            ))}
          </div>
        )}

        <section className="mb-6">
          <h2 className="text-lg font-bold text-gray-800 mb-2">{t(translations, "result.loveStyleSection")}</h2>
          <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">
            {displayResult.loveDescription}
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-lg font-bold text-gray-800 mb-2">{t(translations, "result.psychAnalysisSection")}</h2>
          <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">
            {displayResult.psychologicalAnalysis}
          </p>
          <div className="flex gap-2 mt-2">
            <span className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded-full">
              {t(translations, "result.bigFiveBadge")}
            </span>
            <span className="text-xs bg-purple-50 text-purple-600 px-2 py-1 rounded-full">
              {t(translations, "result.attachmentBadge")}
            </span>
          </div>
        </section>

        {(displayResult.checkGood || displayResult.checkBad) && (
          <section className="mb-6">
            <h2 className="text-lg font-bold text-gray-800 mb-2">장점 &amp; 주의점</h2>
            <div className="flex flex-col gap-2">
              {displayResult.checkGood && (
                <div className="flex items-start gap-2 p-3 bg-green-50 rounded-lg border border-green-100">
                  <span className="text-green-500 font-bold text-sm mt-0.5">✓</span>
                  <p className="text-sm text-gray-700">{displayResult.checkGood}</p>
                </div>
              )}
              {displayResult.checkBad && (
                <div className="flex items-start gap-2 p-3 bg-amber-50 rounded-lg border border-amber-100">
                  <span className="text-amber-500 font-bold text-sm mt-0.5">!</span>
                  <p className="text-sm text-gray-700">{displayResult.checkBad}</p>
                </div>
              )}
            </div>
          </section>
        )}

        {displayResult.lovePattern && (
          <section className="mb-6">
            <h2 className="text-lg font-bold text-gray-800 mb-2">연애 패턴 심층 분석</h2>
            <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">
              {displayResult.lovePattern}
            </p>
          </section>
        )}
      </article>

      {/* Client-rendered interactive result view */}
      <ResultView result={result} shareUrl={shareUrl} resultSlug={type} isSharedView />

      {/* Server-rendered internal links for SEO */}
      <nav className="max-w-2xl mx-auto px-6 pb-10">
        <h2 className="text-lg font-bold text-gray-800 mb-4">
          {t(translations, "result.otherTypesTitle")}
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {otherTypes.map((slug) => {
            const info = SLUG_INFO[slug];
            if (!info) return null;
            return (
              <Link
                key={slug}
                href={`/result/${slug}`}
                className="flex items-center gap-2 p-3 bg-gray-50 rounded-xl border border-gray-200 hover:border-pink-300 hover:bg-pink-50 transition-all text-sm no-underline"
              >
                <span className="text-lg">{info.emoji}</span>
                <span className="text-gray-700 font-medium">
                  {getTypeDisplayName(slug)}
                </span>
              </Link>
            );
          })}
        </div>
        <div className="mt-6 flex flex-wrap gap-3 text-sm">
          <Link href="/test" className="text-pink-500 hover:underline font-medium">
            {t(translations, "result.retakeTestLink")}
          </Link>
          <Link href="/about" className="text-pink-500 hover:underline font-medium">
            {t(translations, "result.aboutLabLink")}
          </Link>
          {/* 유형 가이드 딥링크 */}
          {SLUG_INFO[type]?.gender === "남" && (
            <Link href={`/types/${type}`} className="text-pink-500 hover:underline font-medium">
              {SLUG_INFO[type]?.name}남 유형 상세 가이드 →
            </Link>
          )}
        </div>

        {/* 관련 블로그 */}
        <div className="mt-8 p-4 bg-gray-50 rounded-xl border border-gray-200">
          <h2 className="text-sm font-bold text-gray-700 mb-3">관련 심리 콘텐츠</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/blog/attachment-style-love-type" className="text-sm text-pink-500 hover:underline">
                애착 유형으로 알아보는 나의 연애 스타일
              </Link>
            </li>
            <li>
              <Link href="/blog/five-love-languages" className="text-sm text-pink-500 hover:underline">
                5가지 사랑의 언어 — 연인과 다른 언어를 쓰고 있진 않나요?
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-xs text-gray-500 hover:underline">
                연애 심리 블로그 전체 보기 →
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
