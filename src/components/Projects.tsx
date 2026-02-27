"use client";

import { FadeIn } from "./FadeIn";

interface Project {
  name: string;
  tag: string;
  description: string;
  highlights: string[];
  stack: string[];
  link?: string;
  github?: string;
}

const projects: Project[] = [
  {
    name: "MicroMarkets v2",
    tag: "Startup",
    description: "Social prediction markets for everyday decisions.",
    highlights: [
      "Real-time market engine with dynamic odds",
      "Social feed with friend-based market discovery",
      "Built for 1,000+ concurrent users",
    ],
    stack: ["React Native", "TypeScript", "Supabase", "FastAPI"],
    github: "https://github.com/angadsingharora",
  },
  {
    name: "AI Glasses Assistant",
    tag: "AI / Hardware",
    description: "Real-time AI wearable prototype for context-aware assistance.",
    highlights: [
      "On-device vision model for scene understanding",
      "Sub-200ms response latency",
      "Voice-first interaction design",
    ],
    stack: ["Python", "OpenCV", "Whisper", "GPT-4V"],
    github: "https://github.com/angadsingharora",
  },
  {
    name: "Battery Research",
    tag: "Research",
    description: "Computational modeling of aluminum-ion battery architectures.",
    highlights: [
      "Molecular dynamics simulations for ion transport",
      "Published research on electrode optimization",
      "UW Materials Science collaboration",
    ],
    stack: ["Python", "MATLAB", "DFT"],
  },
  {
    name: "GrandFLOW",
    tag: "Healthcare",
    description: "AI-driven senior care coordination platform.",
    highlights: [
      "Multi-agent system for care automation",
      "Family dashboard with real-time health insights",
      "Medication tracking and alerting",
    ],
    stack: ["Next.js", "TypeScript", "Supabase", "OpenAI"],
    github: "https://github.com/angadsingharora/GrandFLOW",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-28">
      <div className="max-w-5xl mx-auto px-6">
        <FadeIn>
          <div className="flex items-center gap-2 mb-4">
            <div className="h-px w-6 bg-accent" />
            <p className="text-[11px] font-mono uppercase tracking-widest text-accent">
              Projects
            </p>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
            Things I&apos;ve built.
          </h2>
        </FadeIn>

        <div className="mt-12 grid md:grid-cols-2 gap-4">
          {projects.map((project, i) => (
            <FadeIn key={project.name} delay={i * 0.08}>
              <div className="group h-full rounded-xl border border-neutral-200 dark:border-neutral-800/40 p-6 hover:border-accent/30 dark:hover:border-accent/20 transition-all duration-300 bg-neutral-50/50 dark:bg-neutral-900/20">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <h3 className="text-[15px] font-semibold text-neutral-900 dark:text-white group-hover:text-accent transition-colors">
                      {project.name}
                    </h3>
                    <span className="px-1.5 py-0.5 text-[9px] font-mono uppercase tracking-wider text-accent/60 border border-accent/15 dark:border-accent/10 rounded">
                      {project.tag}
                    </span>
                  </div>
                  {(project.github || project.link) && (
                    <a
                      href={project.github || project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 mt-0.5 text-neutral-400 dark:text-neutral-700 hover:text-accent transition-colors"
                      aria-label={`View ${project.name}`}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M7 17L17 7M17 7H7M17 7v10" />
                      </svg>
                    </a>
                  )}
                </div>

                <p className="mt-2 text-[13px] text-neutral-500">
                  {project.description}
                </p>

                <ul className="mt-3.5 space-y-1.5">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-[13px] text-neutral-600 dark:text-neutral-400">
                      <span className="mt-[7px] w-1 h-1 rounded-full bg-accent/30 shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <span key={tech} className="px-2 py-0.5 text-[10px] font-mono bg-neutral-100 dark:bg-neutral-800/50 text-neutral-500 rounded">
                      {tech}
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
