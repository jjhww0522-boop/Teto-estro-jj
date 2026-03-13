import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlogPosts } from "@/data/blog";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://tetolab.com";

const CATEGORY_META: Record<string, { title: string; description: string }> = {
  "연애 심리": {
    title: "연애 심리",
    description:
      "연애 관계에서 나타나는 심리적 패턴과 감정의 메커니즘을 탐구합니다. 짝사랑, 밀당, 권태기, 질투 등 연애의 다양한 심리 현상을 심리학 이론으로 풀어봅니다.",
  },
  "커플 소통법": {
    title: "커플 소통법",
    description:
      "건강한 커플 관계를 위한 대화법과 소통 전략을 다룹니다. 가트만의 4가지 적기(Four Horsemen), 비폭력 대화(NVC), 화해 기술 등 실전에서 바로 적용할 수 있는 소통 방법을 소개합니다.",
  },
  "테토 캐릭터": {
    title: "테토 캐릭터 가이드",
    description:
      "테토-에스트로 유형 이론의 8가지 연애 캐릭터를 깊이 있게 분석합니다. 각 유형의 연애 스타일, 장단점, 궁합, 실전 데이트 팁을 상세하게 소개합니다.",
  },
  "심리학 이론": {
    title: "심리학 이론",
    description:
      "Big Five 성격 모델, 바넘 효과, 푸시앤풀 심리학 등 연애와 관계에 적용되는 핵심 심리학 이론을 쉽고 재미있게 설명합니다.",
  },
  "관계 심리": {
    title: "관계 심리",
    description:
      "연인 관계의 발전 단계, 경계 설정, 관계 패턴 등 두 사람 사이의 역학을 심리학적으로 분석합니다.",
  },
  "연애 조언": {
    title: "연애 조언",
    description:
      "실제 연애 상황에서 바로 활용할 수 있는 실전 조언과 팁을 제공합니다. 고백, 데이트, 갈등 해결 등 구체적인 상황별 가이드입니다.",
  },
  "애착 이론": {
    title: "애착 이론",
    description:
      "존 볼비와 메리 에인스워스의 애착 이론을 연애에 적용합니다. 안정형, 불안형, 회피형, 혼란형 네 가지 애착 유형이 연인 관계에 미치는 영향을 탐구합니다.",
  },
};

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = decodeURIComponent(slug);
  const meta = CATEGORY_META[category];
  if (!meta) return {};

  return {
    title: `${meta.title} | 블로그 | 테토 연구소`,
    description: meta.description,
    openGraph: {
      title: `${meta.title} | 테토 연구소 블로그`,
      description: meta.description,
      url: `${BASE_URL}/blog/category/${slug}`,
      siteName: "테토 연구소",
      type: "website",
    },
    alternates: {
      canonical: `${BASE_URL}/blog/category/${slug}`,
    },
  };
}

export function generateStaticParams() {
  return Object.keys(CATEGORY_META).map((cat) => ({
    slug: encodeURIComponent(cat),
  }));
}

export default async function BlogCategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = decodeURIComponent(slug);
  const meta = CATEGORY_META[category];

  if (!meta) notFound();

  const posts = getBlogPosts().filter((p) => p.category === category);

  return (
    <main className="min-h-screen max-w-2xl mx-auto px-4 py-10">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-brand-muted mb-6">
        <Link href="/" className="hover:underline">홈</Link>
        <span>›</span>
        <Link href="/blog" className="hover:underline">블로그</Link>
        <span>›</span>
        <span className="text-brand-charcoal font-medium">{meta.title}</span>
      </nav>

      <header className="mb-8">
        <h1 className="text-2xl font-black text-brand-charcoal mb-3">{meta.title}</h1>
        <p className="text-sm text-brand-charcoal leading-relaxed">{meta.description}</p>
        <p className="text-xs text-brand-muted mt-2">{posts.length}개의 글</p>
      </header>

      {posts.length === 0 ? (
        <div className="card text-center py-12 text-brand-muted">
          <p>이 카테고리에는 아직 등록된 글이 없어요.</p>
        </div>
      ) : (
        <ul className="space-y-4">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="block card hover:shadow-card-hover transition-shadow border-brand-border hover:border-brand-accent/30"
              >
                <h2 className="text-lg font-bold text-brand-charcoal mt-1 line-clamp-2">
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

      <div className="mt-10 flex gap-4">
        <Link href="/blog" className="text-brand-accent hover:underline font-medium text-sm">
          ← 전체 블로그
        </Link>
      </div>
    </main>
  );
}
