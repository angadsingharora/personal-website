"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

export type Project = {
  name: string;
  when: string;
  summary: string;
  body: string;
  stack: string;
  /* Shown on the cover when there is no screenshot. */
  kind: string;
  preview?: { src: string; width: number; height: number; alt: string };
  links?: { label: string; href: string }[];
};

const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* Horizontal, snap-scrolling rail of project tiles. Each tile opens a
   native <dialog> with the full write-up, so every word stays in the
   server-rendered HTML while the rail itself stays compact. */
export function ProjectRail({ projects }: { projects: Project[] }) {
  const trackRef = useRef<HTMLUListElement>(null);
  const [pos, setPos] = useState({ index: 0, atStart: true, atEnd: false });

  const stride = useCallback(() => {
    const track = trackRef.current;
    const [a, b] = track ? Array.from(track.children) as HTMLElement[] : [];
    return a && b ? b.offsetLeft - a.offsetLeft : track?.clientWidth ?? 0;
  }, []);

  const measure = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const max = track.scrollWidth - track.clientWidth;
    const atEnd = track.scrollLeft >= max - 2;
    const step = stride() || 1;
    setPos({
      index: atEnd ? projects.length - 1 : Math.round(track.scrollLeft / step),
      atStart: track.scrollLeft <= 2,
      atEnd,
    });
  }, [projects.length, stride]);

  useEffect(() => {
    measure();
    const track = trackRef.current;
    if (!track) return;
    track.addEventListener("scroll", measure, { passive: true });
    window.addEventListener("resize", measure);
    return () => {
      track.removeEventListener("scroll", measure);
      window.removeEventListener("resize", measure);
    };
  }, [measure]);

  const go = (dir: 1 | -1) =>
    trackRef.current?.scrollBy({
      left: dir * stride(),
      behavior: prefersReducedMotion() ? "auto" : "smooth",
    });

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div>
      <div className="mb-5 flex items-center justify-between">
        <p className="font-mono text-[11.5px] tracking-wide text-faint" aria-live="polite">
          <span className="text-ink">{pad(pos.index + 1)}</span> / {pad(projects.length)}
        </p>
        <div className="flex gap-2">
          <RailButton label="Previous projects" disabled={pos.atStart} onClick={() => go(-1)}>
            ←
          </RailButton>
          <RailButton label="Next projects" disabled={pos.atEnd} onClick={() => go(1)}>
            →
          </RailButton>
        </div>
      </div>

      <ul
        ref={trackRef}
        data-start={pos.atStart}
        data-end={pos.atEnd}
        className="project-rail -mx-6 flex snap-x snap-mandatory scroll-px-6 gap-5 overflow-x-auto px-6 pb-2 sm:mx-0 sm:scroll-px-0 sm:px-0"
      >
        {projects.map((project) => (
          <li key={project.name} className="w-[82%] shrink-0 snap-start sm:w-[19rem]">
            <ProjectTile project={project} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function RailButton({
  label,
  disabled,
  onClick,
  children,
}: {
  label: string;
  disabled: boolean;
  onClick: () => void;
  children: string;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      disabled={disabled}
      onClick={onClick}
      className="grid h-8 w-8 place-items-center rounded-full border border-rule text-[14px] text-muted transition-colors hover:border-accent hover:text-accent disabled:pointer-events-none disabled:opacity-35"
    >
      <span aria-hidden>{children}</span>
    </button>
  );
}

function Cover({ project, sizes }: { project: Project; sizes: string }) {
  if (project.preview) {
    return (
      <Image
        src={project.preview.src}
        alt={project.preview.alt}
        fill
        sizes={sizes}
        className="object-cover object-left-top transition-transform duration-500 ease-out group-hover:scale-[1.025]"
      />
    );
  }
  /* No live site to show: a ruled-paper card in the site's own type. The
     title already sits under the tile, so the cover carries an initial. */
  return (
    <div className="project-cover relative flex h-full flex-col justify-between p-4">
      <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-faint">{project.kind}</span>
      <span
        aria-hidden
        className="absolute bottom-1 right-5 font-serif text-[5.5rem] italic leading-none text-accent/25 transition-colors duration-300 group-hover:text-accent/45"
      >
        {project.name[0]}
      </span>
    </div>
  );
}

function ExternalLinks({ links, className = "" }: { links?: Project["links"]; className?: string }) {
  if (!links?.length) return null;
  return (
    <div className={`flex flex-wrap gap-x-4 gap-y-1 ${className}`}>
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[13px] text-muted underline decoration-rule underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
        >
          {link.label}
          <span aria-hidden className="ml-1">↗</span>
        </a>
      ))}
    </div>
  );
}

function ProjectTile({ project }: { project: Project }) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const open = () => {
    dialogRef.current?.showModal();
    document.documentElement.style.overflow = "hidden";
  };
  const close = () => dialogRef.current?.close();

  return (
    <article className="group flex h-full flex-col">
      {/* The cover is a mouse shortcut; the title button is the accessible control. */}
      <div
        onClick={open}
        aria-hidden
        className="relative aspect-[16/10] cursor-pointer overflow-hidden rounded-md border border-rule bg-surface"
      >
        <Cover project={project} sizes="(min-width: 640px) 304px, 82vw" />
      </div>

      <p className="mt-4 font-mono text-[11px] tracking-wide text-faint">{project.when}</p>

      <h3 className="mt-1.5 text-[1.25rem] leading-snug text-ink">
        <button
          type="button"
          onClick={open}
          aria-haspopup="dialog"
          className="text-left transition-colors hover:text-accent"
        >
          {project.name}
        </button>
      </h3>

      <p className="mt-1.5 text-[14.5px] leading-relaxed text-muted">{project.summary}</p>

      <div className="mt-auto flex flex-wrap items-baseline gap-x-4 gap-y-1 pt-4">
        <button
          type="button"
          onClick={open}
          aria-haspopup="dialog"
          aria-label={`Read more about ${project.name}`}
          className="text-[13px] text-ink underline decoration-accent/50 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
        >
          Read more
        </button>
        <ExternalLinks links={project.links} />
      </div>

      <dialog
        ref={dialogRef}
        aria-labelledby={`${slug(project.name)}-title`}
        onClose={() => (document.documentElement.style.overflow = "")}
        onClick={(e) => e.target === dialogRef.current && close()}
        className="project-dialog m-auto w-[min(40rem,calc(100vw-2rem))] max-h-[min(88vh,52rem)] overflow-y-auto rounded-lg border border-rule bg-paper p-0 text-ink shadow-2xl"
      >
        <div className="p-6 sm:p-8">
          <div className="flex items-start justify-between gap-6">
            <p className="pt-1 font-mono text-[11.5px] tracking-wide text-faint">{project.when}</p>
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="-mr-2 -mt-1 grid h-8 w-8 shrink-0 place-items-center rounded-full text-[18px] text-muted transition-colors hover:bg-surface hover:text-ink"
            >
              <span aria-hidden>×</span>
            </button>
          </div>

          <h3 id={`${slug(project.name)}-title`} className="mt-2 text-[1.75rem] leading-tight">
            {project.name}
          </h3>
          <p className="mt-2 text-[15.5px] leading-relaxed text-ink/85">{project.summary}</p>

          {project.preview && (
            <div className="mt-6 overflow-hidden rounded-md border border-rule bg-surface">
              <Image
                src={project.preview.src}
                alt={project.preview.alt}
                width={project.preview.width}
                height={project.preview.height}
                sizes="(min-width: 672px) 576px, 100vw"
                className="h-auto w-full"
              />
            </div>
          )}

          <p className="mt-6 text-[15px] leading-[1.7] text-muted">{project.body}</p>

          <div className="mt-6 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-3 border-t border-rule pt-4">
            <p className="font-mono text-[11.5px] text-faint">{project.stack}</p>
            <ExternalLinks links={project.links} />
          </div>
        </div>
      </dialog>
    </article>
  );
}

const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-");
