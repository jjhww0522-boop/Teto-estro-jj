import Link from "next/link";
import type { Metadata } from "next";
import { getBlogPosts } from "@/data/blog";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://tetolab.com";

export const metadata: Metadata = {
  title: "블로그 | 테토 연구소 - 연애 심리, 애착 이론, 커플 소통법",
  description:
    "연애 심리, 애착 이론, 커플 소통법 등 관계와 사랑에 대한 심리학 기반 글을 만나보세요.",
  openGraph: {
    title: "블로그 | 테토 연구소",
    description: "연애 심리, 애착 이론, 커플 소통법 등 관계와 사랑에 대한 글",
    url: `${BASE_URL}/blog`,
    siteName: "테토 연구소",
    type: "website",
  },
  alternates: {
    canonical: `${BASE_URL}/blog`,
  },
};

export default function BlogListPage() {
  const posts = getBlogPosts();

  return (
    <div className="min-h-screen p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold text-brand-charcoal mb-2">블로그</h1>
      <p className="text-sm text-brand-muted mb-8">
        연애 심리, 애착 이론, 커플 소통법 · 테토 연구소
      </p>

      {posts.length === 0 ? (
        <div className="card text-center py-12 text-brand-muted">
          <p>아직 등록된 글이 없어요.</p>
          <p className="text-sm mt-2">곧 유익한 글로 찾아올게요!</p>
        </div>
      ) : (
        <ul className="space-y-4">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="block card hover:shadow-card-hover transition-shadow border-brand-border hover:border-brand-accent/30"
              >
                <span className="text-xs font-medium text-brand-accent bg-brand-accent/10 px-2 py-1 rounded-tag">
                  {post.category}
                </span>
                <h2 className="text-lg font-bold text-brand-charcoal mt-2 line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-sm text-brand-muted mt-1 line-clamp-2 text-kr-wrap">
                  {post.description}
                </p>
                <p className="text-xs text-brand-muted mt-3">
                  {post.createdAt}
                  {post.updatedAt !== post.createdAt && ` · 수정 ${post.updatedAt}`}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-10">
        <Link
          href="/"
          className="text-brand-accent hover:underline font-medium"
        >
          ← 홈으로
        </Link>
      </div>
    </div>
  );
}
