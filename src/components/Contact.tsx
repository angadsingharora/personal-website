"use client";

import { FadeIn } from "./FadeIn";

const links = [
  {
    label: "Email",
    href: "mailto:angad@example.com",
    display: "angad@example.com",
  },
  {
    label: "GitHub",
    href: "https://github.com/angadarora",
    display: "github.com/angadarora",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/angadarora",
    display: "linkedin.com/in/angadarora",
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <FadeIn>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Contact
          </h2>
          <div className="mt-2 w-12 h-1 bg-accent rounded-full" />
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="mt-8 text-neutral-600 dark:text-neutral-400 max-w-lg leading-relaxed">
            I&apos;m always open to interesting conversations, collaborations, or
            big ideas.
          </p>
        </FadeIn>

        <div className="mt-8 space-y-4">
          {links.map((link, i) => (
            <FadeIn key={link.label} delay={0.15 + i * 0.05}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3"
              >
                <span className="text-xs font-semibold uppercase tracking-widest text-neutral-400 dark:text-neutral-500 w-20">
                  {link.label}
                </span>
                <span className="text-sm text-neutral-700 dark:text-neutral-300 group-hover:text-accent transition-colors">
                  {link.display}
                </span>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
