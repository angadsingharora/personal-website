"use client";

import { FadeIn } from "./FadeIn";

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear_gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black_40%,transparent_100%)] opacity-60" />

      <div className="max-w-5xl mx-auto px-6 py-32 relative z-10">
        <FadeIn>
          <p className="text-accent font-medium mb-4 tracking-wide text-sm uppercase">
            Welcome
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
            Angad Arora
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="mt-6 text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl leading-relaxed text-balance">
            Computer Science @ University of Washington. Building products at
            the intersection of AI, startups, and systems.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="mt-4 text-base text-neutral-500 dark:text-neutral-500 max-w-xl leading-relaxed">
            I build things that solve real problems. From prediction markets to
            AI wearables, I care about shipping fast, learning deeply, and
            creating products people actually use.
          </p>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-accent text-white text-sm font-medium rounded-lg hover:bg-accent-dark transition-colors"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-neutral-300 dark:border-neutral-700 text-sm font-medium rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors"
            >
              Contact
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
