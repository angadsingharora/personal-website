"use client";

import { useEffect, useRef, useState } from "react";

export function LoadingScreen() {
  const startedAt = useRef(0);
  const [progress, setProgress] = useState(0);
  const [ready, setReady] = useState(false);
  const [leaving, setLeaving] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    startedAt.current = Date.now();
    const onLoad = () => setReady(true);
    const progressTimer = window.setInterval(() => {
      setProgress((value) => value >= 90 ? value : Math.min(value + Math.max(1, (90 - value) * 0.12), 90));
    }, 80);
    if (document.readyState === "complete") onLoad();
    else window.addEventListener("load", onLoad, { once: true });
    return () => {
      window.clearInterval(progressTimer);
      window.removeEventListener("load", onLoad);
    };
  }, []);

  useEffect(() => {
    if (!ready) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const remaining = Math.max(0, (reduceMotion ? 0 : 1200) - (Date.now() - startedAt.current));
    const finishTimer = window.setTimeout(() => setProgress(100), remaining);
    const leaveTimer = window.setTimeout(() => setLeaving(true), remaining + (reduceMotion ? 0 : 210));
    const hideTimer = window.setTimeout(() => setHidden(true), remaining + (reduceMotion ? 0 : 570));
    return () => {
      window.clearTimeout(finishTimer);
      window.clearTimeout(leaveTimer);
      window.clearTimeout(hideTimer);
    };
  }, [ready]);

  if (hidden) return null;

  return (
    <div className={`site-loader ${leaving ? "site-loader--leaving" : ""}`} role="status" aria-label="Loading site">
      <div className="site-loader__top" aria-hidden="true">
        <span>Angad Singh Arora</span>
        <span>Portfolio / 2026</span>
      </div>
      <div className="site-loader__content">
        <p className="site-loader__eyebrow">Loading the work</p>
        <div className="site-loader__progress" aria-hidden="true">
          <span style={{ transform: `scaleX(${progress / 100})` }} />
        </div>
        <p className="site-loader__count" aria-hidden="true">{String(Math.round(progress)).padStart(2, "0")}%</p>
      </div>
    </div>
  );
}
