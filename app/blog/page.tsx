import Link from "next/link";
import type { Metadata } from "next";
import { getBlogPosts } from "@/data/blog";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://tetolab.com";

export const metadata: Metadata = {
  title: "블로그 | 테토 연구소 - 연애 심리, 애착 이론, 커플 소통법",
  description:
    "연애 심리, 애착 이론, 커플 소통법 등 관계와 사랑에 대한 심리학 기반 글을 만나보세요. 전문 심리학 이론을 쉽고 재미있게 풀어 실제 연애에 적용할 수 있는 인사이트를 제공합니다.",
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

const CATEGORIES = [
  { name: "연애 심리", desc: "짝사랑, 밀당, 권태기 등 연애 심리 현상" },
  { name: "커플 소통법", desc: "건강한 관계를 위한 대화법과 소통 전략" },
  { name: "테토 캐릭터", desc: "8가지 연애 유형 심층 분석" },
  { name: "심리학 이론", desc: "Big Five, 바넘 효과 등 핵심 이론" },
  { name: "관계 심리", desc: "관계 발전 단계와 역학 분석" },
  { name: "연애 조언", desc: "실전 연애 상황별 조언과 팁" },
  { name: "애착 이론", desc: "4가지 애착 유형과 연애 패턴" },
];

export default function BlogListPage() {
  const posts = getBlogPosts();
  const categoryCount = (name: string) =>
    posts.filter((p) => p.category === name).length;

  return (
    <main className="min-h-screen max-w-2xl mx-auto px-4 py-10">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-brand-muted mb-6">
        <Link href="/" className="hover:underline">
          홈
        </Link>
        <span>›</span>
        <span className="text-brand-charcoal font-medium">블로그</span>
      </nav>

      <header className="mb-8">
        <h1 className="text-2xl font-bold text-brand-charcoal mb-2">
          연애 심리 블로그
        </h1>
        <p className="text-sm text-brand-charcoal leading-relaxed">
          연애 심리, 애착 이론, 커플 소통법 등 관계와 사랑에 대한 심리학 기반
          칼럼을 연재합니다. 전문 심리학 이론을 알기 쉽게 풀어 실제 연애에 적용할
          수 있는 인사이트를 제공합니다.
        </p>
        <p className="text-xs text-brand-muted mt-2">
          총 {posts.length}편의 칼럼이 등록되어 있습니다.
        </p>
      </header>

      {/* 카테고리 허브 */}
      <section className="mb-10">
        <h2 className="text-base font-black text-brand-charcoal mb-3">
          카테고리
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {CATEGORIES.map((cat) => {
            const count = categoryCount(cat.name);
            if (count === 0) return null;
            return (
              <Link
                key={cat.name}
                href={`/blog/category/${encodeURIComponent(cat.name)}`}
                className="p-3 bg-white rounded-xl border border-brand-border hover:border-brand-accent/40 hover:shadow-sm transition-all"
              >
                <strong className="text-xs font-black text-brand-charcoal block">
                  {cat.name}
                </strong>
                <p className="text-[10px] text-brand-muted mt-0.5 leading-relaxed">
                  {cat.desc}
                </p>
                <span className="text-[10px] text-brand-accent mt-1 block">
                  {count}편
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* 전체 글 목록 */}
      <section>
        <h2 className="text-base font-black text-brand-charcoal mb-4">
          전체 글
        </h2>
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
                  <h3 className="text-lg font-bold text-brand-charcoal mt-2 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-brand-muted mt-1 line-clamp-2 text-kr-wrap">
                    {post.description}
                  </p>
                  <p className="text-xs text-brand-muted mt-3">
                    {post.createdAt}
                    {post.updatedAt !== post.createdAt &&
                      ` · 수정 ${post.updatedAt}`}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>

      <div className="mt-10">
        <Link href="/" className="text-brand-accent hover:underline font-medium">
          ← 홈으로
        </Link>
      </div>
    </main>
  );
}
