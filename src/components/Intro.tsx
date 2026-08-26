import Image from "next/image";
import { Reveal } from "./Reveal";

const elsewhere = [
  { label: "GitHub", href: "https://github.com/angadsingharora" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/angadsingharora1" },
  { label: "Email", href: "mailto:angadsingharora@gmail.com" },
];

export function Intro() {
  return (
    <section className="mx-auto max-w-page px-6 pb-20 pt-16 sm:px-8 sm:pb-28 sm:pt-24">
      <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-start lg:gap-16">
        <div>
          <Reveal>
            <h1 className="max-w-[15ch] text-[clamp(2.1rem,6vw,3.4rem)] font-normal leading-[1.08]">
              I learn things by building them.
            </h1>
          </Reveal>

          <div className="mt-8 max-w-prose space-y-4 text-[16.5px] leading-[1.7] text-muted">
            <Reveal delay={60}>
              <p>
                I&apos;m a computer science student at the University of Washington.
                I&apos;m drawn to the gap between how something works and how it
                obviously should work, and when that gap bothers me enough I end up
                building the fix. Most of what I know came out of that reflex rather
                than out of a syllabus.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <p>
                I&apos;d rather be wrong early than careful and late. I like people
                who are unreasonable about small details, work that someone actually
                has to use, and problems where I have no idea what I&apos;m doing for
                the first two weeks.
              </p>
            </Reveal>
          </div>

          <Reveal delay={140}>
            <p className="mt-8 font-mono text-[11.5px] uppercase tracking-[0.14em] text-faint">
              Redmond, WA · UW CS &rsquo;29
            </p>
          </Reveal>

          <Reveal delay={180}>
            <ul className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-[13.5px]">
              {elsewhere.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="text-muted underline decoration-rule underline-offset-4 transition-colors hover:text-ink hover:decoration-accent"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={80} className="order-first lg:order-none">
          <Image
            src="/headshot.png"
            alt="Angad Singh Arora"
            width={148}
            height={148}
            priority
            className="h-[104px] w-[104px] rounded-sm object-cover saturate-[0.9] transition-[filter] duration-300 hover:saturate-100 sm:h-[132px] sm:w-[132px]"
          />
        </Reveal>
      </div>
    </section>
  );
}
