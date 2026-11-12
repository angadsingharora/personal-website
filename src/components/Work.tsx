import { ProjectRail, type Project } from "./ProjectRail";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

const projects: Project[] = [
  {
    name: "whereverwhenever",
    kind: "Web app",
    preview: {
      src: "/projects/whereverwhenever.webp",
      width: 800,
      height: 553,
      alt: "whereverwhenever: a three-stop itinerary routed on real roads from Berkeley to Oakland, with the itinerary panel and a simulated iPhone",
    },
    when: "Nov 2026",
    summary: "Your iPhone, wherever, whenever. Location spoofing that moves like a real person.",
    body:
      "Every location-changer app makes the same one call to Apple's developer channel and teleports the phone. The hard part, which none of them do, is a trajectory a human or a heuristic would believe. I built a motion engine for that: each leg is routed on OpenStreetMap roads, speed is capped by curvature and lateral g through bends, forward and backward passes enforce acceleration and braking limits, junctions turn red with a per-mode probability, each stop has a dwell, and the reported fix drifts a few metres on a 10 to 90 second timescale like real GPS. Everything derives from a seed, so an itinerary resumes mid-route after a reboot. The site talks to a one-command local bridge over USB, draws the speed profile before you press Go, and shows a simulated iPhone with what a friend's Find My would see. Claude turns 'gym for an hour, coffee, then home, by bike' into stops.",
    stack: "Python, pymobiledevice3, MapLibre, OSRM, Claude",
    links: [
      { label: "Live", href: "https://whereverwhenever.vercel.app" },
      { label: "GitHub", href: "https://github.com/angadsingharora/whereverwhenever" },
    ],
  },
  {
    name: "Vandal",
    kind: "Security platform",
    preview: {
      src: "/projects/vandal-landing.webp",
      width: 1320,
      height: 825,
      alt: "Vandal's landing page: \"Your books can balance while the money goes to the wrong person.\" with buttons to open the workspace or watch the demo",
    },
    when: "Since Oct 2026 · Cal Hacks 13.0",
    summary: "A security layer for AI agents that move a company's money.",
    body:
      "Built with Mohith Ram Narendra Babu. Vandal Strike clones a company's books into a deterministic twin and searches for event sequences that break financial invariants, like one where every step looks valid and the ledger balances, but $40,000 lands in an attacker's account. It traces the broken link in the authorization chain and synthesizes a control to close it. Vandal Guard enforces that control in the live path, checking each payment, bank change and refund before money moves. On the simulated demo company, the control held across 34,676 re-searched sequences at depth 3, with all 80 legitimate invoices still paid.",
    stack: "Python, FastAPI, Next.js, Claude, Postgres",
    links: [
      { label: "Live demo", href: "https://frontend-dusky-eight-92.vercel.app" },
      { label: "GitHub", href: "https://github.com/angadsingharora/vandal" },
    ],
  },
  {
    name: "MicroMarkets",
    kind: "Mobile app",
    preview: {
      src: "/projects/micromarkets.webp",
      width: 1320,
      height: 825,
      alt: "Illustration: A prediction market on a phone: a live question about making a flight, priced at 64% yes, with a portfolio card and a resolved market paying out credits",
    },
    when: "Since 2025",
    summary: "A prediction market for the things people actually argue about.",
    body:
      "A group spins up a short-lived binary market on whatever's in question and trades it out. I wrote the automated market maker that prices contracts off live crowd sentiment, the credit ledger that settles payouts the moment a market resolves, and the realtime portfolio view that keeps every open position in sync.",
    stack: "React Native, Expo, TypeScript, Supabase, Postgres",
    links: [{ label: "GitHub", href: "https://github.com/angadsingharora" }],
  },
  {
    name: "GrandFLOW",
    kind: "Multi-agent platform",
    preview: {
      src: "/projects/grandflow.webp",
      width: 1320,
      height: 825,
      alt: "Illustration: A resident speaking to the voice assistant beside heart rate, sleep, steps and hydration tiles, with an agent flagging slower walking pace for the care team",
    },
    when: "Nov 2025 · Cal Hacks, UC Berkeley",
    summary: "Multi-agent automation for senior care.",
    body:
      "A senior care platform with voice as the primary interface. I wired Whisper for speech in and Fish Audio for speech out so a resident can just talk to it, syncing 10+ wellness metrics into live dashboards behind the conversation. The LLM agents run on 3,000+ patient-state examples to catch anomalies and turn them into care recommendations. We presented it to YC-affiliated investors at the end of the weekend.",
    stack: "Next.js, TypeScript, Supabase, Whisper, Fish Audio",
    links: [{ label: "GitHub", href: "https://github.com/angadsingharora/GrandFLOW" }],
  },
  {
    name: "CueBOT",
    kind: "Streaming tool",
    preview: {
      src: "/projects/cuebot.webp",
      width: 1320,
      height: 825,
      alt: "Illustration: A live stream with face tracking and a peace-sign gesture switching OBS scenes, a chat mood meter, and highlight clips on a timeline",
    },
    when: "Oct 2025 · UW hackathon",
    summary: "Camera and scene automation for Twitch streamers.",
    body:
      "OpenCV and MediaPipe watch the webcam and drive OBS over its WebSocket API, reframing the shot, switching scenes on a gesture, and clipping highlights as they happen, all under 100ms end to end. I also built the chat side: transformer embeddings classifying sentiment at about 92% precision.",
    stack: "Python, OpenCV, MediaPipe, OBS WebSocket",
    links: [{ label: "GitHub", href: "https://github.com/angadsingharora" }],
  },
  {
    name: "Gurbanity",
    kind: "Learning platform",
    preview: {
      src: "/projects/gurbanity.webp",
      width: 1320,
      height: 825,
      alt: "Illustration: A Punjabi vocabulary lesson for the word paani (water) in Gurmukhi, with a pronunciation score, an alphabet card and the next lesson",
    },
    when: "2022 to 2025",
    summary: "An AI-powered Punjabi learning platform.",
    body:
      "Three years of running it end to end. Language, music and heritage modules, adaptive lessons that used engagement data to pick each user's next vocabulary, scripture and pronunciation drills, and a transliteration engine that lifted translation accuracy 68%. It reached 1,200 users, and taught me most of what I know about shipping to people who aren't engineers.",
    stack: "Next.js, Supabase, OpenAI",
    links: [{ label: "News feature", href: "https://www.youtube.com/watch?v=NWEuPWkfyzM" }],
  },
  {
    name: "Aluminum-ion battery modeling",
    kind: "Research paper",
    preview: {
      src: "/projects/aluminum-ion-battery.webp",
      width: 1320,
      height: 825,
      alt: "Figure 1(b) from the paper: schematic of an aluminum-ion battery, with Al3+ ions moving from the aluminum metal anode through the electrolyte and separator to the cathode during discharge",
    },
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
    kind: "Geofencing app",
    preview: {
      src: "/projects/safely-campaign.webp",
      width: 1320,
      height: 825,
      alt: "Illustration: a street map with campaign signs inside 50-foot geofences, a high-traffic intersection highlighted, and an alert that sign 14 has left its zone, possible theft",
    },
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
      <Reveal>
        <ProjectRail projects={projects} />
      </Reveal>
    </Section>
  );
}
