import { Reveal } from "./Reveal";
import { Section } from "./Section";

const rows: [string, string][] = [
  ["Languages", "Python, TypeScript, JavaScript, Java, SQL, C++"],
  ["Day to day", "React, Next.js, Svelte, Node.js, FastAPI, Supabase, Postgres, MongoDB, Docker, Vercel"],
  ["Also comfortable with", "LLM tooling and RAG, computer vision, Kubernetes, AWS, GCP, CI/CD, DFT and molecular dynamics simulation"],
  ["Off the clock", "Basketball, cooking, improv, investing, eating my way through Seattle"],
];

export function Toolkit() {
  return (
    <Section id="toolkit" label="Toolkit">
      <dl className="space-y-6">
        {rows.map(([term, detail], i) => (
          <Reveal key={term} delay={i * 40}>
            <div className="sm:grid sm:grid-cols-[11rem_1fr] sm:gap-6">
              <dt className="text-[14px] text-ink">{term}</dt>
              <dd className="mt-1 max-w-prose text-[15px] leading-relaxed text-muted sm:mt-0">
                {detail}
              </dd>
            </div>
          </Reveal>
        ))}
      </dl>
    </Section>
  );
}
