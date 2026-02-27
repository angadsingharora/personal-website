"use client";

import { FadeIn } from "./FadeIn";

interface SkillCategory {
  title: string;
  items: string[];
}

const categories: SkillCategory[] = [
  {
    title: "Languages",
    items: ["TypeScript", "Java", "Python", "SQL"],
  },
  {
    title: "Frameworks",
    items: ["React / React Native", "Next.js", "FastAPI"],
  },
  {
    title: "Tools",
    items: ["Supabase", "Git", "Vercel", "Docker"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <FadeIn>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Skills
          </h2>
          <div className="mt-2 w-12 h-1 bg-accent rounded-full" />
        </FadeIn>

        <div className="mt-12 grid sm:grid-cols-3 gap-10">
          {categories.map((cat, i) => (
            <FadeIn key={cat.title} delay={i * 0.1}>
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-neutral-400 dark:text-neutral-500 mb-4">
                  {cat.title}
                </h3>
                <ul className="space-y-2.5">
                  {cat.items.map((item) => (
                    <li
                      key={item}
                      className="text-sm text-neutral-700 dark:text-neutral-300 flex items-center gap-2.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
