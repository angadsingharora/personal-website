"use client";

import { FadeIn } from "./FadeIn";

export function About() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <FadeIn>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            About
          </h2>
          <div className="mt-2 w-12 h-1 bg-accent rounded-full" />
        </FadeIn>

        <div className="mt-12 max-w-2xl space-y-6 text-neutral-600 dark:text-neutral-400 leading-relaxed">
          <FadeIn delay={0.1}>
            <p>
              I&apos;m a Computer Science student at the University of
              Washington who builds products instead of just studying them. I
              started my first company before I finished my freshman year, and
              I&apos;ve been shipping ever since.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p>
              My work sits at the intersection of systems engineering, machine
              learning, and product design. I care about technical depth&mdash;I
              want to understand the stack top to bottom&mdash;but I care even
              more about building things people actually use.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p>
              I believe the best way to learn is to ship. Every project I take on
              is a bet on an idea, a chance to push my skills, and a step toward
              building something that matters. I move fast, stay scrappy, and
              treat every problem like a product waiting to be built.
            </p>
          </FadeIn>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 gap-8">
          <FadeIn delay={0.2}>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-neutral-400 dark:text-neutral-500 mb-4">
                What I Care About
              </h3>
              <ul className="space-y-2.5">
                {[
                  "Building real products",
                  "Technical depth over breadth",
                  "Startup velocity",
                  "Shipping fast and iterating",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-neutral-700 dark:text-neutral-300"
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-neutral-400 dark:text-neutral-500 mb-4">
                Education
              </h3>
              <div>
                <p className="font-medium text-neutral-900 dark:text-neutral-100">
                  University of Washington
                </p>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
                  B.S. Computer Science
                </p>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                  Minor: Entrepreneurship
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
