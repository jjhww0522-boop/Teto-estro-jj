import { Redis } from "@upstash/redis";

const REDIS_KEY = "teto:analysis_count";

function getRedis(): Redis | null {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) return null;
  return new Redis({ url, token });
}

/** 분석 완료 수 조회 (Redis 미설정 시 null) */
export async function getAnalysisCount(): Promise<number | null> {
  const redis = getRedis();
  if (!redis) return null;
  try {
    const value = await redis.get<number>(REDIS_KEY);
    return typeof value === "number" ? value : 0;
  } catch {
    return null;
  }
}

/** 분석 완료 시 카운트 1 증가 */
export async function incrementAnalysisCount(): Promise<number | null> {
  const redis = getRedis();
  if (!redis) return null;
  try {
    const next = await redis.incr(REDIS_KEY);
    return next;
  } catch {
    return null;
  }
}
