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
            <h1 className="max-w-[13ch] text-[clamp(2.2rem,6.2vw,3.5rem)] font-normal leading-[1.07]">
              Noticing is the easy part.
            </h1>
          </Reveal>

          <div className="mt-8 max-w-prose space-y-4 text-[16.5px] leading-[1.7] text-muted">
            <Reveal delay={60}>
              <p>
                Everyone sees the thing that&apos;s broken. What I&apos;ve never
                managed to switch off is the step after. I start working out how hard
                the fix would actually be, and then I&apos;m two weeks into building
                it. That habit accounts for most of what I know and most of the time
                I&apos;ve wasted.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <p>
                I&apos;m a computer science student at the University of Washington.
                I&apos;m better at the start of a problem than the end, the stretch
                where nobody knows its shape yet and being wrong is still cheap. The
                last ten percent takes a patience I&apos;ve had to learn on purpose.
              </p>
            </Reveal>
          </div>

          <Reveal delay={140}>
            <p className="mt-8 font-mono text-[11.5px] uppercase tracking-[0.14em] text-faint">
              Seattle · San Francisco · UW CS &amp; Entrepreneurship
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
