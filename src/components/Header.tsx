"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const links = [
  { label: "Work", href: "/#work" },
  { label: "Writing", href: "/blog" },
  { label: "Résumé", href: "/resume.pdf" },
];

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="-mr-1.5 flex h-8 w-8 items-center justify-center text-faint transition-colors hover:text-ink"
      aria-label={mounted ? `Switch to ${isDark ? "light" : "dark"} theme` : "Switch theme"}
    >
      {/* Fixed glyph until mounted so server and client markup agree. */}
      {mounted && isDark ? (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden>
          <circle cx="12" cy="12" r="4.2" />
          <path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.2 5.2l1.4 1.4M17.4 17.4l1.4 1.4M18.8 5.2l-1.4 1.4M6.6 17.4l-1.4 1.4" />
        </svg>
      ) : (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M20.5 13.4A8.6 8.6 0 1 1 10.6 3.5a6.9 6.9 0 0 0 9.9 9.9z" />
        </svg>
      )}
    </button>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-paper">
      <div className="mx-auto flex h-14 max-w-page items-center justify-between gap-6 px-6 sm:px-8">
        <Link
          href="/"
          className="font-serif text-[15px] tracking-tight text-ink transition-colors hover:text-accent"
        >
          Angad Singh Arora
        </Link>

        <nav className="flex items-center gap-5 sm:gap-7" aria-label="Primary">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              target={link.href.endsWith(".pdf") ? "_blank" : undefined}
              className="text-[13px] text-muted underline-offset-4 transition-colors hover:text-ink hover:underline hover:decoration-accent/50"
            >
              {link.label}
            </Link>
          ))}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
