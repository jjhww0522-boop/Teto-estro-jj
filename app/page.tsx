import type { Metadata } from "next";
import { getAnalysisCount } from "@/lib/redis";
import HomeContent from "@/components/HomeContent";

export const metadata: Metadata = {
  title: "내 애인의 테토 농도 분석기 | 테토 연구소",
  description: "내 남친의 테토력은 과연 몇 %? 12가지 상황으로 분석하는 정밀 성향 리포트",
};

export default async function HomePage() {
  const analysisCount = (await getAnalysisCount()) ?? 1234;
  return <HomeContent analysisCount={analysisCount} />;
}
