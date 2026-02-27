"use client";

import Image from "next/image";
import { FadeIn } from "./FadeIn";

const values = [
  { num: "01", title: "Build real products", desc: "Not assignments — things people use." },
  { num: "02", title: "Technical depth", desc: "Understand the stack top to bottom." },
  { num: "03", title: "Startup velocity", desc: "Move fast, stay scrappy, ship relentlessly." },
  { num: "04", title: "Learn by doing", desc: "Every project is a bet on growth." },
];

export function About() {
  return (
    <section id="about" className="py-28 border-t border-neutral-800/30">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-4 flex flex-col items-center lg:items-start gap-6">
            <FadeIn>
              <div className="relative">
                <div className="w-44 h-44 rounded-2xl overflow-hidden ring-1 ring-neutral-800">
                  <Image
                    src="/headshot.png"
                    alt="Angad Singh Arora"
                    width={176}
                    height={176}
                    className="object-cover w-full h-full"
                    priority
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 px-2 py-1 bg-neutral-950 border border-neutral-800 rounded-md">
                  <span className="text-[10px] font-mono text-accent">UW &apos;27</span>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="text-center lg:text-left">
                <p className="font-medium text-white text-sm">University of Washington</p>
                <p className="text-xs text-neutral-500 mt-1">
                  B.S. Computer Science
                </p>
                <p className="text-xs text-neutral-500">
                  Minor in Entrepreneurship
                </p>
              </div>
            </FadeIn>
          </div>

          <div className="lg:col-span-8">
            <FadeIn>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-px w-6 bg-accent" />
                <p className="text-[11px] font-mono uppercase tracking-widest text-accent">
                  About
                </p>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                I build things instead of<br className="hidden sm:block" /> just studying them.
              </h2>
            </FadeIn>

            <div className="mt-8 space-y-4 text-[15px] text-neutral-400 leading-relaxed">
              <FadeIn delay={0.1}>
                <p>
                  I&apos;m a CS student at UW who started a company before
                  finishing freshman year. My work sits at the intersection of
                  systems engineering, machine learning, and product
                  design&mdash;and I&apos;ve been shipping ever since.
                </p>
              </FadeIn>
              <FadeIn delay={0.15}>
                <p>
                  I care about technical depth, but I care more about impact.
                  I want to understand how things work at every layer, then use
                  that knowledge to build products that matter.
                </p>
              </FadeIn>
            </div>

            <div className="mt-10 grid sm:grid-cols-2 gap-4">
              {values.map((v, i) => (
                <FadeIn key={v.num} delay={0.1 + i * 0.05}>
                  <div className="flex gap-3 p-3 rounded-lg border border-neutral-800/30 hover:border-neutral-700/50 transition-colors">
                    <span className="text-[11px] font-mono text-accent/50 mt-0.5 shrink-0">
                      {v.num}
                    </span>
                    <div>
                      <p className="text-sm font-medium text-neutral-200">{v.title}</p>
                      <p className="text-xs text-neutral-600 mt-0.5">{v.desc}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
