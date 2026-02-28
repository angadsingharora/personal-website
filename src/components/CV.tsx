"use client";

import { FadeIn } from "./FadeIn";

export function CV() {
  return (
    <section id="cv" className="py-28 border-t border-neutral-200 dark:border-neutral-800/30">
      <div className="max-w-5xl mx-auto px-6">
        <FadeIn>
          <div className="flex items-center gap-2 mb-4">
            <div className="h-px w-6 bg-accent" />
            <p className="text-[11px] font-mono uppercase tracking-widest text-accent">
              CV
            </p>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
            Resume
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="mt-4 text-[15px] text-neutral-500 max-w-md leading-relaxed">
            Download my full resume for a detailed look at my experience,
            projects, and education.
          </p>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="mt-8">
            <a
              href="/resume.pdf"
              download="Angad_Singh_Arora_Resume.pdf"
              className="group inline-flex items-center gap-2.5 px-6 py-3 bg-accent text-white text-sm font-semibold rounded-md hover:bg-accent-dark transition-colors"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download Resume
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
