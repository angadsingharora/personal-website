import { type ReactNode } from "react";

/* Editorial rail: the section label sits in the left margin on wide
   screens, above the content on narrow ones. */
export function Section({
  id,
  label,
  children,
}: {
  id?: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="border-t border-rule">
      <div className="mx-auto max-w-page px-6 py-14 sm:px-8 sm:py-20 lg:grid lg:grid-cols-[8rem_1fr] lg:gap-14">
        <h2 className="mb-8 font-mono text-[11px] uppercase tracking-[0.18em] text-faint lg:mb-0 lg:pt-2">
          {label}
        </h2>
        <div className="min-w-0">{children}</div>
      </div>
    </section>
  );
}
