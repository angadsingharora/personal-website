"use client";

import { FadeIn } from "./FadeIn";

interface Project {
  name: string;
  tag: string;
  context: string;
  description: string;
  highlights: string[];
  stack: string[];
  link?: string;
  github?: string;
}

const projects: Project[] = [
  {
    name: "GrandFLOW",
    tag: "Hackathon",
    context: "UC Berkeley Hackathon — Nov 2025",
    description: "Multi-agent automation platform for senior care.",
    highlights: [
      "Processed 85,000+ data points from wearables, diet logs, and medication reports",
      "Backend pipelines in FastAPI + Supabase with 8–10 req/s throughput",
      "LLM reasoning agents trained on 3,000+ patient-state examples for anomaly detection",
      "Presented to YC-affiliated VCs and startup mentors",
    ],
    stack: ["FastAPI", "Supabase", "OpenAI", "Python"],
    github: "https://github.com/angadsingharora/GrandFLOW",
  },
  {
    name: "CueBOT",
    tag: "Hackathon",
    context: "UW Hackathon — Oct 2025",
    description: "Computer vision pipeline for Twitch streamers.",
    highlights: [
      "Automated camera framing, gesture-based scene switching, and real-time highlight clipping",
      "OpenCV + MediaPipe + OBS WebSocket with sub-100ms event detection",
      "NLP-driven chat analytics using Transformer embeddings with 92% precision",
    ],
    stack: ["Python", "OpenCV", "MediaPipe", "NLP"],
    github: "https://github.com/angadsingharora",
  },
  {
    name: "Gurbanity",
    tag: "Startup",
    context: "Founder & Lead Dev — Jan 2022 – Jun 2025",
    description: "AI-powered platform reconnecting Punjabi youth with language and heritage.",
    highlights: [
      "Scaled to 1,200+ active users with personalized adaptive learning modules",
      "Built transliteration engine that boosted translation accuracy by 68%",
      "Analytics dashboard optimizing content recommendations across sessions",
    ],
    stack: ["Next.js", "Supabase", "OpenAI"],
  },
  {
    name: "Safely Campaign",
    tag: "Civic Tech",
    context: "Congressional App Foundation — Mar – Jul 2024",
    description: "Geofencing app for political campaign sign monitoring.",
    highlights: [
      "AirTag + GPS telemetry monitoring sign placement within 50-foot radius",
      "Visibility algorithm increased average sign impressions by 67%",
      "Detected sign theft instances; presented to WA State Senator Manka Dhingra",
    ],
    stack: ["Mobile", "GPS", "Analytics"],
  },
  {
    name: "Battery Research",
    tag: "Published",
    context: "Computational Energy Systems Lab, Duke — Feb – Sep 2024",
    description: "Published research on aluminum-ion battery architectures with Duke post-grads.",
    highlights: [
      "DFT + Molecular Dynamics modeling of ion diffusion and electrochemical stability",
      "Model outperformed lithium-ion benchmarks in predicted voltage and energy density",
      "Automated simulation workflows in Python + VASP, reducing compute time by 40%",
      "Co-authored published paper with Duke University post-graduate researchers",
    ],
    stack: ["Python", "VASP", "MATLAB", "DFT"],
    link: "https://chemrxiv.org/doi/pdf/10.26434/chemrxiv-2024-wnt0j",
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
                  <div>
                    <div className="flex items-center gap-2.5">
                      <h3 className="text-[15px] font-semibold text-neutral-900 dark:text-white group-hover:text-accent transition-colors">
                        {project.name}
                      </h3>
                      <span className="px-1.5 py-0.5 text-[9px] font-mono uppercase tracking-wider text-accent/60 border border-accent/15 dark:border-accent/10 rounded">
                        {project.tag}
                      </span>
                    </div>
                    <p className="text-[11px] font-mono text-neutral-400 dark:text-neutral-600 mt-1">
                      {project.context}
                    </p>
                  </div>
                  {(project.github || project.link) && (
                    <a
                      href={project.link || project.github}
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
