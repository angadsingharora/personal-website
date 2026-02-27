"use client";

import { FadeIn } from "./FadeIn";

interface Project {
  name: string;
  description: string;
  highlights: string[];
  stack: string[];
  link?: string;
  github?: string;
}

const projects: Project[] = [
  {
    name: "MicroMarkets v2",
    description: "Social prediction markets for everyday decisions.",
    highlights: [
      "Real-time market engine with dynamic odds",
      "Social feed with friend-based market discovery",
      "Built for 1,000+ concurrent users",
    ],
    stack: ["React Native", "TypeScript", "Supabase", "FastAPI"],
    github: "#",
  },
  {
    name: "AI Glasses Assistant",
    description:
      "Real-time AI wearable prototype for context-aware assistance.",
    highlights: [
      "On-device vision model for scene understanding",
      "Sub-200ms response latency",
      "Voice-first interaction design",
    ],
    stack: ["Python", "OpenCV", "Whisper", "GPT-4 Vision"],
    github: "#",
  },
  {
    name: "Aluminum-Ion Battery Research",
    description: "Computational modeling of next-gen battery architectures.",
    highlights: [
      "Molecular dynamics simulations for ion transport",
      "Published research on electrode optimization",
      "Collaboration with UW Materials Science lab",
    ],
    stack: ["Python", "MATLAB", "DFT Simulations"],
  },
  {
    name: "GrandFLOW",
    description: "AI-driven senior care coordination platform.",
    highlights: [
      "Automated care scheduling with ML optimization",
      "Family dashboard with real-time health insights",
      "Integrated medication tracking system",
    ],
    stack: ["Next.js", "TypeScript", "Supabase", "OpenAI"],
    link: "#",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <FadeIn>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Projects
          </h2>
          <div className="mt-2 w-12 h-1 bg-accent rounded-full" />
        </FadeIn>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <FadeIn key={project.name} delay={i * 0.1}>
              <div className="group h-full border border-neutral-200 dark:border-neutral-800 rounded-xl p-6 hover:border-accent/40 dark:hover:border-accent/40 transition-all duration-300 hover:-translate-y-1">
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                  {project.name}
                </h3>
                <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
                  {project.description}
                </p>

                <ul className="mt-4 space-y-2">
                  {project.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-start gap-2 text-sm text-neutral-600 dark:text-neutral-400"
                    >
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-neutral-400 dark:bg-neutral-600 shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-4 flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      className="text-sm text-accent hover:text-accent-dark dark:hover:text-accent-light transition-colors"
                    >
                      GitHub
                    </a>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      className="text-sm text-accent hover:text-accent-dark dark:hover:text-accent-light transition-colors"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
