"use client";

import { FadeIn } from "./FadeIn";

const items = [
  "Building MicroMarkets v2",
  "Exploring AI-powered wearable assistants",
  "Studying systems + ML at UW",
];

export function Currently() {
  return (
    <section className="py-16 border-t border-neutral-200 dark:border-neutral-800">
      <div className="max-w-5xl mx-auto px-6">
        <FadeIn>
          <h2 className="text-xs font-semibold uppercase tracking-widest text-neutral-400 dark:text-neutral-500 mb-6">
            Currently
          </h2>
        </FadeIn>

        <ul className="space-y-3">
          {items.map((item, i) => (
            <FadeIn key={item} delay={i * 0.1}>
              <li className="flex items-start gap-3 text-neutral-700 dark:text-neutral-300">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                <span className="text-sm sm:text-base">{item}</span>
              </li>
            </FadeIn>
          ))}
        </ul>
      </div>
    </section>
  );
}
