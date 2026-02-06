import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://teto-potato-test.vercel.app";
  const types = [
    "teto",
    "potato",
    "egen",
    "cheese",
    "era",
    "salsa",
    "ehem",
    "sweet_potato",
  ];

  const resultUrls = types.map((type) => ({
    url: `${baseUrl}/result/${type}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    ...resultUrls,
  ];
}
