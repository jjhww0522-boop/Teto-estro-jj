import { MetadataRoute } from "next";
import { getBlogPosts } from "@/data/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://tetolab.com";
  const lastModified = new Date(); // 빌드 시점의 현재 날짜 (동적)
  const posts = getBlogPosts();

  const resultTypes = [
    "teto",
    "potato",
    "egen",
    "cheese",
    "era",
    "salsa",
    "ehem",
    "sweet_potato",
    "teto_f",
    "potato_f",
    "egen_f",
    "cheese_f",
    "era_f",
    "salsa_f",
    "ehem_f",
    "sweet_potato_f",
  ];

  const resultUrls = resultTypes.map((type) => ({
    url: `${baseUrl}/result/${type}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const typeSlugs = ["teto", "potato", "egen", "sweet_potato", "cheese", "salsa", "ehem", "era"];
  const typeGuideUrls = typeSlugs.map((slug) => ({
    url: `${baseUrl}/types/${slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  // 타로 서비스 경로 (tetolab.com/tarot → Vercel rewrite 프록시)
  const tarotUrls = [
    { path: "/tarot",             priority: 0.8  },
    { path: "/tarot/about",       priority: 0.6  },
    { path: "/tarot/guide",       priority: 0.6  },
    { path: "/tarot/tarot-guide", priority: 0.6  },
  ].map(({ path, priority }) => ({
    url: `${baseUrl}${path}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority,
  }));

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/test`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/match`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    ...posts.map((p) => ({
      url: `${baseUrl}/blog/${p.slug}`,
      lastModified: new Date(p.updatedAt),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...resultUrls,
    ...typeGuideUrls,
    ...tarotUrls,
    {
      url: `${baseUrl}/types`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
  ];
}
