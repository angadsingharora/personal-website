"use client";

import { FadeIn } from "./FadeIn";

const skills = {
  Languages: ["TypeScript", "Java", "Python", "SQL"],
  Frameworks: ["React / React Native", "Next.js", "FastAPI"],
  Tools: ["Supabase", "Git", "Vercel", "Docker"],
};

export function Skills() {
  return (
    <section id="skills" className="py-28 border-t border-neutral-800/30">
      <div className="max-w-5xl mx-auto px-6">
        <FadeIn>
          <div className="flex items-center gap-2 mb-4">
            <div className="h-px w-6 bg-accent" />
            <p className="text-[11px] font-mono uppercase tracking-widest text-accent">
              Skills
            </p>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            My toolkit.
          </h2>
        </FadeIn>

        <div className="mt-12 space-y-8">
          {Object.entries(skills).map(([category, items], ci) => (
            <FadeIn key={category} delay={ci * 0.1}>
              <div>
                <h3 className="text-[10px] font-mono uppercase tracking-widest text-neutral-600 mb-3">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 text-sm text-neutral-400 border border-neutral-800/50 rounded-lg hover:border-accent/20 hover:text-neutral-200 transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
