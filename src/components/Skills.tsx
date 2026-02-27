"use client";

import { FadeIn } from "./FadeIn";

const skills: Record<string, string[]> = {
  Languages: ["Python", "JavaScript", "HTML", "CSS", "Dart", "Java", "SQL", "C++", "TypeScript"],
  "Tools & Frameworks": ["React", "Svelte", "Firebase", "Flask", "InfluxDB", "Grafana", "Git/GitHub", "Excel", "Google Sheets"],
  "Systems & Databases": ["Firebase", "SQLite", "InfluxDB", "REST APIs", "OR-Tools", "Data Visualization"],
  Interests: ["Weightlifting", "Road Biking", "Seattle Seahawks", "Rap Concerts", "Spider-Man Movies", "Vinyl Records"],
};

export function Skills() {
  return (
    <section id="skills" className="py-28 border-t border-neutral-200 dark:border-neutral-800/30">
      <div className="max-w-5xl mx-auto px-6">
        <FadeIn>
          <div className="flex items-center gap-2 mb-4">
            <div className="h-px w-6 bg-accent" />
            <p className="text-[11px] font-mono uppercase tracking-widest text-accent">
              Skills
            </p>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
            Skills &amp; Expertise
          </h2>
          <p className="mt-3 text-sm text-neutral-500 max-w-lg leading-relaxed">
            A comprehensive overview of my technical skills and areas of expertise,
            spanning full-stack development, mobile apps, and data systems.
          </p>
        </FadeIn>

        <div className="mt-12 grid sm:grid-cols-2 gap-4">
          {Object.entries(skills).map(([category, items], ci) => (
            <FadeIn key={category} delay={ci * 0.08}>
              <div className="p-5 rounded-xl border border-neutral-200 dark:border-neutral-800/40 bg-neutral-50/50 dark:bg-neutral-900/20">
                <h3 className="text-sm font-semibold text-neutral-900 dark:text-white mb-4">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-xs text-neutral-600 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-800/50 rounded-md hover:border-accent/30 dark:hover:border-accent/20 hover:text-neutral-900 dark:hover:text-neutral-200 transition-all duration-200 cursor-default"
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
