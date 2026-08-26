import { Reveal } from "./Reveal";
import { Section } from "./Section";

export function Contact() {
  return (
    <Section id="contact" label="Contact">
      <Reveal>
        <p className="max-w-prose text-[16.5px] leading-[1.7] text-muted">
          Open to internships, side projects, and arguments about ideas. I read
          everything that comes in, and I answer.
        </p>
      </Reveal>

      <Reveal delay={60}>
        <a
          href="mailto:angadsingharora@gmail.com"
          className="mt-6 inline-block font-serif text-[clamp(1.35rem,3.6vw,1.9rem)] text-ink underline decoration-accent/35 underline-offset-[6px] transition-colors hover:decoration-accent"
        >
          angadsingharora@gmail.com
        </a>
      </Reveal>

      <Reveal delay={100}>
        <ul className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-[13.5px]">
          {[
            { label: "GitHub", href: "https://github.com/angadsingharora" },
            { label: "LinkedIn", href: "https://www.linkedin.com/in/angadsingharora1" },
            { label: "Résumé", href: "/resume.pdf" },
          ].map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted underline decoration-rule underline-offset-4 transition-colors hover:text-ink hover:decoration-accent"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
