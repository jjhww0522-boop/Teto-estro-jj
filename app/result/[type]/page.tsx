import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getResultBySlug, RESULT_SLUGS } from "@/data/results";
import ResultView from "@/components/ResultView";

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

  const title = `${result.type}: ${result.title} | 테토 연구소`;
  const description = `${result.tagline} ${result.oneLiner} - 테토 연구소 연애 유형 테스트 결과`;
  const url = `${BASE_URL}/result/${type}`;

  return {
    title,
    description,
    keywords: result.keywords?.join(", "),
    openGraph: {
      title: `${result.type}: ${result.title} | 테토 연구소`,
      description: `${result.tagline} - ${result.oneLiner}`,
      url,
      siteName: "테토 연구소",
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

  const shareUrl = `${BASE_URL}/result/${type}`;
  const otherTypes = getOtherTypes(type);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${result.type}: ${result.title}`,
    description: `${result.tagline} - ${result.oneLiner}`,
    url: shareUrl,
    publisher: {
      "@type": "Organization",
      name: "테토 연구소",
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
        <header className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800">
            {result.emoji} {result.type}: {result.title}
          </h1>
          <p className="text-gray-600 mt-2 italic">{result.tagline}</p>
          <p className="text-gray-700 mt-2">{result.oneLiner}</p>
        </header>

        {result.keywords && result.keywords.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {result.keywords.map((kw) => (
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
          <h2 className="text-lg font-bold text-gray-800 mb-2">연애 스타일</h2>
          <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">
            {result.loveDescription}
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-lg font-bold text-gray-800 mb-2">심리 분석</h2>
          <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">
            {result.psychologicalAnalysis}
          </p>
          <div className="flex gap-2 mt-2">
            <span className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded-full">
              Big Five 성격 모델
            </span>
            <span className="text-xs bg-purple-50 text-purple-600 px-2 py-1 rounded-full">
              애착 이론
            </span>
          </div>
        </section>
      </article>

      {/* Client-rendered interactive result view */}
      <ResultView result={result} shareUrl={shareUrl} resultSlug={type} isSharedView />

      {/* Server-rendered internal links for SEO */}
      <nav className="max-w-2xl mx-auto px-6 pb-10">
        <h2 className="text-lg font-bold text-gray-800 mb-4">
          다른 연애 유형 알아보기
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
                  {info.name}{info.gender}
                </span>
              </Link>
            );
          })}
        </div>
        <div className="mt-6 flex gap-4 text-sm">
          <Link href="/test" className="text-pink-500 hover:underline font-medium">
            테스트 다시하기
          </Link>
          <Link href="/about" className="text-pink-500 hover:underline font-medium">
            테토 연구소 소개
          </Link>
          <Link href="/match" className="text-pink-500 hover:underline font-medium">
            궁합 매칭
          </Link>
        </div>
      </nav>
    </>
  );
}
