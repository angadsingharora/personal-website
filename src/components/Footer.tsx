"use client";

import { useEffect, useState } from "react";

export function Footer() {
  const [warm, setWarm] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("warm", warm);
    return () => document.body.classList.remove("warm");
  }, [warm]);

  return (
    <footer className="border-t border-rule">
      <div className="mx-auto flex max-w-page flex-col gap-3 px-6 py-10 text-[11.5px] text-faint sm:flex-row sm:items-center sm:justify-between sm:px-8">
        {/* The old site hid a party mode behind the copyright. Kept, quieter. */}
        <button
          type="button"
          onClick={() => setWarm((v) => !v)}
          aria-pressed={warm}
          className="self-start font-mono transition-colors hover:text-accent"
          title="Nothing important happens here"
        >
          © {new Date().getFullYear()} Angad Singh Arora
        </button>
        <p className="font-mono">Next.js · Tailwind · Vercel</p>
      </div>
    </footer>
  );
}
