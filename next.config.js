/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      // ── 타로 앱 (990taro) → tetolab.com/tarot 프록시 ──────────────────────
      // basePath='/tarot'로 빌드된 앱이므로 _next/static, api 모두 /tarot/ 하위에 있음
      {
        source: "/tarot",
        destination: "https://990taro.vercel.app/tarot",
      },
      {
        source: "/tarot/:path*",
        destination: "https://990taro.vercel.app/tarot/:path*",
      },
      // public 폴더 이미지는 basePath 영향 없이 /cards/* 로 서빙됨
      // <img src="/cards/..."> 가 tetolab 도메인에서 요청될 때 필요
      {
        source: "/cards/:path*",
        destination: "https://990taro.vercel.app/cards/:path*",
      },
    ];
  },
};

module.exports = nextConfig
