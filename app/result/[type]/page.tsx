import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getResultBySlug, RESULT_SLUGS } from "@/data/results";
import ResultView from "@/components/ResultView";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://tetolab.com";

interface PageProps {
  params: Promise<{ type: string }>;
}

export async function generateStaticParams() {
  return RESULT_SLUGS.map((type) => ({ type }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { type } = await params;
  const result = getResultBySlug(type);
  if (!result) return {};
  return {
    title: `${result.type}: ${result.title} | 테토 연구소`,
    description: `${result.tagline} - ${result.oneLiner}`,
    openGraph: {
      title: `${result.type}: ${result.title}`,
      description: result.oneLiner,
      url: `${BASE_URL}/result/${type}`,
    },
  };
}

export default async function ResultTypePage({ params }: PageProps) {
  const { type } = await params;
  const result = getResultBySlug(type);
  if (!result) notFound();
  const shareUrl = `${BASE_URL}/result/${type}`;
  return <ResultView result={result} shareUrl={shareUrl} resultSlug={type} />;
}
