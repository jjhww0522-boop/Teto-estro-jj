import type { Metadata } from "next";
import Link from "next/link";
import MainChoice from "@/components/MainChoice";
import { getBlogPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: "테토 농도 분석기 | 테토 연구소 - 연인 분석 & 나의 성향",
  description: "내 애인의 테토력을 분석하거나, 나의 연애 유형을 셀프 진단해보세요. 15가지 상황으로 알아보는 정밀 성향 리포트",
};

export default function HomePage() {
  const latestPosts = getBlogPosts().slice(0, 3);

  return (
    <>
      <MainChoice />
      {/* 최신 블로그 포스트 섹션 */}
      <section className="max-w-2xl mx-auto px-4 py-10 border-t border-brand-border">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-brand-charcoal">📖 연애 심리 연구소</h2>
          <Link href="/blog" className="text-sm text-brand-accent hover:underline font-medium">
            더 보기 →
          </Link>
        </div>
        <ul className="space-y-3">
          {latestPosts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="flex flex-col gap-1 p-4 bg-white rounded-xl border border-brand-border hover:border-brand-accent/40 hover:shadow-sm transition-all"
              >
                <span className="text-xs font-medium text-brand-accent">{post.category}</span>
                <span className="text-sm font-bold text-brand-charcoal line-clamp-1">{post.title}</span>
                <span className="text-xs text-brand-muted line-clamp-1">{post.description}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
