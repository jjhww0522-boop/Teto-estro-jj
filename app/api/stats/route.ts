import { NextResponse } from "next/server";
import { getAnalysisCount, incrementAnalysisCount } from "@/lib/redis";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

/** 현재 분석 완료 수 조회 */
export async function GET() {
  const count = await getAnalysisCount();
  return NextResponse.json({
    count: count ?? 0,
    connected: count !== null,
  });
}

/** 분석 완료 시 카운트 증가 (결과 페이지에서 1회 호출) */
export async function POST() {
  const count = await incrementAnalysisCount();
  return NextResponse.json({
    count: count ?? 0,
    connected: count !== null,
  });
}
