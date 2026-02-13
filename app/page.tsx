import type { Metadata } from "next";
import MainChoice from "@/components/MainChoice";

export const metadata: Metadata = {
  title: "테토 농도 분석기 | 테토 연구소 - 연인 분석 & 나의 성향",
  description: "내 애인의 테토력을 분석하거나, 나의 연애 유형을 셀프 진단해보세요. 15가지 상황으로 알아보는 정밀 성향 리포트",
};

export default function HomePage() {
  return <MainChoice />;
}
