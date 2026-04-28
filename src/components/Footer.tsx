"use client";

import { useEffect, useState } from "react";

export function Footer() {
  const [isPartyMode, setIsPartyMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("easter-party-on", isPartyMode);
    return () => {
      document.body.classList.remove("easter-party-on");
    };
  }, [isPartyMode]);

  return (
    <footer className="py-8 border-t border-neutral-200 dark:border-neutral-800/30">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <button
          type="button"
          onClick={() => setIsPartyMode((v) => !v)}
          className="text-[11px] font-mono text-neutral-400 dark:text-neutral-700 transition-colors hover:text-neutral-600 dark:hover:text-neutral-500"
          aria-label="Toggle pink party easter egg"
        >
          &copy; {new Date().getFullYear()} Angad Singh Arora
        </button>
        <p className="text-[11px] font-mono text-neutral-300 dark:text-neutral-800">
          next.js &middot; tailwind &middot; vercel
        </p>
      </div>
    </footer>
  );
}
