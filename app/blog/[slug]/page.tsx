import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getBlogPost, getBlogPosts } from "@/data/blog";
import AdSenseUnit from "@/components/AdSenseUnit";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://tetolab.com";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: "글을 찾을 수 없음 | 테토 연구소" };
  return {
    title: `${post.title} | 테토 연구소 블로그`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${BASE_URL}/blog/${post.slug}`,
      siteName: "테토 연구소",
      type: "article",
      publishedTime: post.createdAt,
      modifiedTime: post.updatedAt,
    },
    alternates: {
      canonical: `${BASE_URL}/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  return (
    <article className="min-h-screen p-6 max-w-2xl mx-auto">
      <div className="mb-6">
        <Link
          href="/blog"
          className="text-sm text-brand-accent hover:underline"
        >
          ← 블로그 목록
        </Link>
      </div>

      <header className="mb-8">
        <span className="text-xs font-medium text-brand-accent bg-brand-accent/10 px-2 py-1 rounded-tag">
          {post.category}
        </span>
        <h1 className="text-2xl font-bold text-brand-charcoal mt-3 text-kr-wrap">
          {post.title}
        </h1>
        {/* 작성자 + 날짜 */}
        <div className="flex items-center gap-2 mt-3">
          <span className="flex items-center gap-1.5 text-xs text-brand-muted">
            <span className="w-6 h-6 rounded-full bg-brand-accent/10 flex items-center justify-center text-sm">🧪</span>
            <span className="font-medium text-brand-charcoal">테토 연구소 리서치팀</span>
          </span>
          <span className="text-brand-muted text-xs">·</span>
          <span className="text-xs text-brand-muted">
            {post.createdAt}
            {post.updatedAt !== post.createdAt && ` · 수정 ${post.updatedAt}`}
          </span>
        </div>
      </header>

      {/* 본문 상단 광고 */}
      <AdSenseUnit adSlot="" adFormat="auto" className="mb-6" />

      <div
        className="prose prose-sm max-w-none text-brand-charcoal leading-relaxed text-kr-wrap whitespace-pre-line"
        dangerouslySetInnerHTML={{ __html: escapeHtmlAndNewlines(post.content) }}
      />

      {/* 본문 하단 광고 */}
      <AdSenseUnit adSlot="" adFormat="auto" className="mt-8" />

      <footer className="mt-10 pt-6 border-t border-brand-border">
        <Link
          href="/blog"
          className="text-brand-accent hover:underline font-medium"
        >
          ← 다른 글 보기
        </Link>
      </footer>
    </article>
  );
}

/** 본문: HTML 이스케이프 + 줄바꿈 <br /> + **굵은글** + [텍스트](url) 링크 (XSS 방지) */
function escapeHtmlAndNewlines(text: string): string {
  const escaped = text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
  const withBr = escaped.replace(/\n/g, "<br />");
  const withBold = withBr.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  const withLinks = withBold.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    '<a href="$2" class="text-brand-accent underline hover:no-underline">$1</a>'
  );
  return withLinks;
}
