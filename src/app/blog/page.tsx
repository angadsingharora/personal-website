import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";

export const metadata = {
  title: "Writing / Angad Singh Arora",
  description: "Essays on cricket by Angad Singh Arora, published on Medium.",
};

/* Static list: four posts, all from 2021, nothing new since. Fetch the RSS
   feed instead if this ever starts moving. */
const posts = [
  {
    title: "Pace vs. Spin Bowling",
    date: "July 26, 2021",
    read: "3 min",
    blurb:
      "Speed through the air or rotation off the pitch — which actually takes more wickets? The numbers split by format, and they don't settle it.",
    href: "https://angadsingharora.medium.com/pace-vs-spin-bowling-e2e8f09d0f87",
  },
  {
    title: "Swing: The Most Complex Art of Cricket",
    date: "July 19, 2021",
    read: "3 min",
    blurb:
      "Inswing, outswing, reverse. What the commentators mean by the jargon, and the seam position and airflow underneath it.",
    href: "https://angadsingharora.medium.com/what-is-swing-6ded5f2f142a",
  },
  {
    title: "The Downfall of Test Cricket",
    date: "July 11, 2021",
    read: "3 min",
    blurb:
      "The sport's oldest and most prestigious format is losing to the shortest one. Why the five-day game is fading, and what goes with it.",
    href: "https://angadsingharora.medium.com/the-downfall-of-test-cricket-75cc9eb470ef",
  },
  {
    title: "Bowling Techniques: Grip Variation",
    date: "July 6, 2021",
    read: "4 min",
    blurb:
      "Cricket as cat and mouse. How a few millimetres of finger placement change what the ball does after it lands.",
    href: "https://angadsingharora.medium.com/bowling-techniques-grip-variation-7a3b9500fd3b",
  },
];

export default function BlogPage() {
  return (
    <>
      <Header />
      <main id="main">
        <div className="mx-auto max-w-page px-6 py-16 sm:px-8 sm:py-24 lg:grid lg:grid-cols-[8rem_1fr] lg:gap-14">
          <div className="min-w-0 lg:col-start-2">
            <div className="divide-y divide-rule border-y border-rule">
              {posts.map((post, i) => (
                <Reveal key={post.href} delay={i * 40}>
                  <a
                    href={post.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block py-8 sm:py-9"
                  >
                    <p className="font-mono text-[11.5px] tracking-wide text-faint">
                      {post.date} · {post.read} read
                    </p>

                    <h2 className="mt-2 text-[1.4rem] leading-snug text-ink transition-colors group-hover:text-accent">
                      {post.title}
                      <span
                        aria-hidden
                        className="ml-2 inline-block text-[1rem] text-faint transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-accent"
                      >
                        ↗
                      </span>
                    </h2>

                    <p className="mt-2.5 max-w-prose text-[15px] leading-[1.7] text-muted">
                      {post.blurb}
                    </p>
                  </a>
                </Reveal>
              ))}
            </div>

            <Reveal>
              <p className="mt-10 text-[13.5px] text-faint">
                More eventually — probably not about cricket.{" "}
                <Link
                  href="/#contact"
                  className="text-muted underline decoration-rule underline-offset-4 transition-colors hover:text-ink hover:decoration-accent"
                >
                  Say hello
                </Link>{" "}
                in the meantime.
              </p>
            </Reveal>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
