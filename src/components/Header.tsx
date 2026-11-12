"use client";

import Link from "next/link";
import { useEffect, useState, type MouseEvent } from "react";
import { useTheme } from "next-themes";

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="-mr-1 flex h-[22px] w-10 items-center rounded-full border border-rule bg-surface px-[3px] transition-colors hover:border-faint"
      aria-label="Dark theme"
    >
      <span
        className={`h-[14px] w-[14px] rounded-full bg-ink transition-transform duration-200 ${
          isDark ? "translate-x-[18px]" : "translate-x-0"
        }`}
      />
    </button>
  );
}

/* On the home page the name glides back to the top instead of a
   router navigation, which jumps there instantly. Elsewhere (e.g. /blog)
   it stays a normal link home. Modified clicks still open new tabs. */
function scrollHomeToTop(e: MouseEvent<HTMLAnchorElement>) {
  if (window.location.pathname !== "/" || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
  e.preventDefault();
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  if (window.location.hash) history.replaceState(null, "", "/");
}

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-paper">
      <div className="mx-auto flex h-14 max-w-page items-center justify-between gap-6 px-6 sm:px-8">
        <Link
          href="/"
          onClick={scrollHomeToTop}
          className="font-serif text-[15px] tracking-tight text-ink transition-colors hover:text-accent"
        >
          Angad Singh Arora
        </Link>

        <nav className="flex items-center" aria-label="Site controls">
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
