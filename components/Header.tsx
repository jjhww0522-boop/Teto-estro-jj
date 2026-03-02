"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "홈" },
  { href: "/test", label: "테스트" },
  { href: "/match", label: "궁합" },
  { href: "/blog", label: "블로그" },
  { href: "/about", label: "소개" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="w-full bg-white border-b border-brand-border sticky top-0 z-50">
      <div className="max-w-2xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* 로고 */}
        <Link
          href="/"
          className="flex items-center gap-2 font-bold text-base text-brand-charcoal hover:text-brand-accent transition-colors"
        >
          <span className="text-xl">🧪</span>
          <span>테토 연구소</span>
        </Link>

        {/* 네비게이션 */}
        <nav className="flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-brand-accent/10 text-brand-accent"
                    : "text-brand-muted hover:text-brand-charcoal hover:bg-gray-50"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
