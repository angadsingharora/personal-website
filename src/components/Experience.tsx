import { Reveal } from "./Reveal";
import { Section } from "./Section";

type Role = {
  years: string;
  title: string;
  org: string;
  href?: string;
  note: string;
};

const roles: Role[] = [
  {
    years: "2026 to now",
    title: "Software Engineering Intern",
    org: "Dosu",
    href: "https://dosu.dev",
    note: "Built a GTM operations agent that cut manual account research time by about 40%. Also work on agent orchestration and RAG pipelines.",
  },
  {
    years: "Early 2026",
    title: "AI Engineer",
    org: "Cue",
    note: "Architected a smart-glasses system for real-time communication coaching, processing video at 60 FPS with sub-250ms visual latency.",
  },
  {
    years: "2022 to 2025",
    title: "Founder & Lead Developer",
    org: "Gurbanity",
    note: "Built and ran a Punjabi learning platform to 1,200 active users.",
  },
  {
    years: "2024",
    title: "Lead Researcher",
    org: "Computational Energy Systems Lab",
    note: "Aluminum-ion battery modeling; co-authored the resulting paper.",
  },
  {
    years: "2024",
    title: "Software Developer",
    org: "Safely Campaign (Congressional App Foundation)",
    note: "Led four engineers building a geofencing tool for campaign field teams.",
  },
  {
    years: "2025 to 2029",
    title: "B.S. Computer Science, minor in Entrepreneurship",
    org: "University of Washington",
    note: "Data structures & algorithms, software design, linear algebra, statistics.",
  },
];

export function Experience() {
  return (
    <Section id="experience" label="Experience">
      <ol className="divide-y divide-rule border-y border-rule">
        {roles.map((role, i) => (
          <li key={role.title + role.years}>
            <Reveal delay={i * 40} className="grid gap-1 py-5 sm:grid-cols-[7.5rem_1fr] sm:gap-6">
              <span className="pt-[3px] font-mono text-[11.5px] tracking-wide text-faint">
                {role.years}
              </span>
              <div>
                <p className="text-[15px] text-ink">
                  {role.title}
                  <span className="text-faint">, </span>
                  {role.href ? (
                    <a
                      href={role.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline decoration-rule underline-offset-4 transition-colors hover:decoration-accent"
                    >
                      {role.org}
                    </a>
                  ) : (
                    role.org
                  )}
                </p>
                <p className="mt-1 text-[14px] leading-relaxed text-muted">{role.note}</p>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
