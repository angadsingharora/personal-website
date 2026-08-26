import { Reveal } from "./Reveal";
import { Section } from "./Section";

type Project = {
  name: string;
  when: string;
  summary: string;
  body: string;
  stack: string;
  links?: { label: string; href: string }[];
};

const projects: Project[] = [
  {
    name: "MicroMarkets",
    when: "Since 2025",
    summary: "A prediction market for the things people actually argue about.",
    body:
      "A group spins up a short-lived binary market on whatever's in question and trades it out. I wrote the automated market maker that prices contracts off live crowd sentiment, the credit ledger that settles payouts the moment a market resolves, and the realtime portfolio view that keeps every open position in sync.",
    stack: "React Native, Expo, TypeScript, Supabase, Postgres",
    links: [{ label: "GitHub", href: "https://github.com/angadsingharora" }],
  },
  {
    name: "GrandFLOW",
    when: "Nov 2025 · Cal Hacks, UC Berkeley",
    summary: "Multi-agent automation for senior care.",
    body:
      "A senior care platform with voice as the primary interface. I wired Whisper for speech in and Fish Audio for speech out so a resident can just talk to it, syncing 10+ wellness metrics into live dashboards behind the conversation. The LLM agents run on 3,000+ patient-state examples to catch anomalies and turn them into care recommendations. We presented it to YC-affiliated investors at the end of the weekend.",
    stack: "Next.js, TypeScript, Supabase, Whisper, Fish Audio",
    links: [{ label: "GitHub", href: "https://github.com/angadsingharora/GrandFLOW" }],
  },
  {
    name: "CueBOT",
    when: "Oct 2025 · UW hackathon",
    summary: "Camera and scene automation for Twitch streamers.",
    body:
      "OpenCV and MediaPipe watch the webcam and drive OBS over its WebSocket API, reframing the shot, switching scenes on a gesture, and clipping highlights as they happen, all under 100ms end to end. I also built the chat side: transformer embeddings classifying sentiment at about 92% precision.",
    stack: "Python, OpenCV, MediaPipe, OBS WebSocket",
    links: [{ label: "GitHub", href: "https://github.com/angadsingharora" }],
  },
  {
    name: "Gurbanity",
    when: "2022 to 2025",
    summary: "An AI-powered Punjabi learning platform.",
    body:
      "Three years of running it end to end. Language, music and heritage modules, adaptive lessons that used engagement data to pick each user's next vocabulary, scripture and pronunciation drills, and a transliteration engine that lifted translation accuracy 68%. It reached 1,200 users, and taught me most of what I know about shipping to people who aren't engineers.",
    stack: "Next.js, Supabase, OpenAI",
  },
  {
    name: "Aluminum-ion battery modeling",
    when: "Feb to Sep 2024 · Duke University",
    summary: "Published research on aluminum-ion cell architectures.",
    body:
      "Density functional theory and molecular dynamics modeling of ion diffusion and electrochemical stability, with the candidate architecture beating lithium-ion benchmarks on predicted voltage and energy density. I automated the Python and VASP simulation workflow, cutting compute time roughly 40% while screening sustainable cathode materials. Co-authored with post-graduate researchers at the lab.",
    stack: "Python, VASP, MATLAB",
    links: [
      { label: "Read the paper", href: "https://chemrxiv.org/doi/pdf/10.26434/chemrxiv-2024-wnt0j" },
    ],
  },
  {
    name: "Safely Campaign",
    when: "Mar to Jul 2024 · Congressional App Foundation",
    summary: "Geofencing for political campaign signs.",
    body:
      "I led four engineers on it. Apple AirTags and GPS telemetry tell a field team whether a sign is still where volunteers left it, inside a 50-foot radius, and traffic-flow analytics pick the high-exposure intersections, which raised average sign impressions 67%. The live prototype caught two instances of sign theft. We presented the findings to WA State Senator Manka Dhingra.",
    stack: "Mobile, GPS telemetry, analytics",
  },
];

export function Work() {
  return (
    <Section id="work" label="Selected work">
      <div className="divide-y divide-rule border-y border-rule">
        {projects.map((project, i) => (
          <Reveal key={project.name} delay={i * 40} className="py-8 first:pt-0 sm:py-10">
            <article className="group">
              <p className="font-mono text-[11.5px] tracking-wide text-faint">{project.when}</p>

              <h3 className="mt-2 text-[1.4rem] leading-snug text-ink">{project.name}</h3>

              <p className="mt-1.5 max-w-prose text-[15.5px] leading-relaxed text-ink/85">
                {project.summary}
              </p>

              <p className="mt-3 max-w-prose text-[15px] leading-[1.7] text-muted">{project.body}</p>

              <div className="mt-4 flex flex-wrap items-baseline gap-x-5 gap-y-2">
                <p className="font-mono text-[11.5px] text-faint">{project.stack}</p>
                {project.links?.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[13.5px] text-muted underline decoration-rule underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
                  >
                    {link.label}
                    <span aria-hidden className="ml-1 inline-block transition-transform duration-200 group-hover:translate-x-px">
                      ↗
                    </span>
                  </a>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
