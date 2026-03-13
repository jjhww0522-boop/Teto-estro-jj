import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/loading",
        "/gender-select",
        "/partner-select",
        "/match",
        "/tarot/pick",
        "/tarot/shuffle",
        "/tarot/collection",
        "/tarot/payment",
        "/tarot/result",
      ],
    },
    sitemap: `${process.env.NEXT_PUBLIC_SITE_URL || "https://tetolab.com"}/sitemap.xml`,
  };
}
