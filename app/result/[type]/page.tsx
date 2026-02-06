import { notFound } from "next/navigation";
import { getResultBySlug, RESULT_SLUGS } from "@/data/results";
import ResultView from "@/components/ResultView";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://teto-potato-test.vercel.app";

interface PageProps {
  params: Promise<{ type: string }>;
}

export async function generateStaticParams() {
  return RESULT_SLUGS.map((type) => ({ type }));
}

export default async function ResultTypePage({ params }: PageProps) {
  const { type } = await params;
  const result = getResultBySlug(type);
  if (!result) notFound();
  const shareUrl = `${BASE_URL}/result/${type}`;
  return <ResultView result={result} shareUrl={shareUrl} />;
}
