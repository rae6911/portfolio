import { useEffect, useRef } from "react";
import { profile } from "../data";
import Reveal from "./Reveal";
import Parallax from "./Parallax";

const facts = [
  ["React, Flutter, C# WPF", "Interfaces for web, mobile and desktop"],
  ["Node.js, Express, PostgreSQL", "REST APIs, databases and Docker"],
  ["5 projects built", "Tech Flow, V-Access, AdvnCity and more"],
];

function Cursor({ className }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={`h-4 w-4 ${className}`}>
      <path d="M3 2l7.5 19.5 3.2-8.3 8.3-3.2z" fill="currentColor" />
    </svg>
  );
}

export default function Hero() {
  const sectionRef = useRef(null);

  // Feeds the scroll position to the CSS so the grid and glow drift slower than the page.
  useEffect(() => {
    const el = sectionRef.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      el.style.setProperty("--sy", Math.min(window.scrollY, 1200));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section id="top" ref={sectionRef} className="hero-bg">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 pb-12 pt-32 sm:pt-36 md:grid-cols-12 md:gap-10 md:pt-40 lg:gap-14">
        <Parallax speed={0.05} className="md:col-span-7">
          <Reveal>
            <p className="inline-flex items-center gap-2.5 rounded-2xl border border-snow/15 bg-surface/60 px-4 py-2 text-sm text-snow/85 sm:rounded-full">
              <span aria-hidden="true" className="h-2 w-2 rounded-full bg-lime" />
              Joshua Elijah Berdin, frontend developer in Tarlac
            </p>
          </Reveal>

          <Reveal as="h1" delay={100} className="mt-8 font-display text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
            I build web, mobile and desktop apps, from interface to database.
          </Reveal>
          <Reveal as="p" delay={200} className="mt-6 max-w-xl text-base leading-relaxed text-mute sm:text-lg">
            React, Flutter and C# for the interface, Node.js, Express and
            PostgreSQL behind it. Recent work includes Tech Flow, V-Access
            and the AdvnCity website.
          </Reveal>

          <Reveal delay={300} className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="#projects"
              className="group flex items-center justify-between gap-3 rounded-full bg-lime py-2 pl-6 pr-2 sm:justify-start font-semibold text-night transition duration-200 hover:-translate-y-0.5 hover:bg-snow"
            >
              See my projects
              <span className="grid h-10 w-10 place-items-center rounded-full bg-night text-snow">
                <svg viewBox="0 0 24 24" className="h-5 w-5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M7 17L17 7M9 7h8v8" />
                </svg>
              </span>
            </a>
            <a
              href={profile.cv}
              download
              className="rounded-full border border-snow/25 px-7 py-3.5 text-center font-medium transition duration-200 hover:-translate-y-0.5 hover:border-lime hover:text-lime"
            >
              Download CV
            </a>
          </Reveal>
        </Parallax>

        {/* Blob with floating tags: each layer moves at its own speed. */}
        <Reveal delay={150} className="relative mx-auto aspect-square w-full max-w-[19rem] sm:max-w-md md:col-span-5">
          <Parallax
            speed={0.12}
            className="absolute inset-6 grid place-items-center rounded-[58%_42%_55%_45%/45%_55%_45%_55%] bg-lime shadow-[0_0_120px_rgb(168_243_25/0.25)]"
          >
            <img src="/rae-mark.png" alt="" aria-hidden="true" className="mark-in w-2/5" />
          </Parallax>
          <Parallax speed={-0.1} className="absolute right-0 top-8">
            <span className="flex items-center gap-2 rounded-full bg-snow px-4 py-2 text-sm font-semibold text-night">
              <Cursor className="text-night" /> Web apps
            </span>
          </Parallax>
          <Parallax speed={0.07} className="absolute bottom-16 left-0">
            <span className="flex items-center gap-2 rounded-full bg-night px-4 py-2 text-sm font-semibold text-lime ring-1 ring-lime">
              <Cursor className="text-lime" /> Mobile apps
            </span>
          </Parallax>
          <Parallax speed={-0.18} className="absolute bottom-2 right-8">
            <span className="flex items-center gap-2 rounded-full bg-snow px-4 py-2 text-sm font-semibold text-night">
              <Cursor className="text-night" /> Desktop apps
            </span>
          </Parallax>
        </Reveal>
      </div>

      <div className="mx-auto max-w-6xl px-5 pb-16 md:pb-20">
        <ul className="grid gap-4 sm:grid-cols-3">
          {facts.map(([title, sub], i) => (
            <Reveal as="li" key={title} delay={i * 100} className="card !p-5">
              <p className="font-display text-lg font-bold">{title}</p>
              <p className="mt-1 text-mute">{sub}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
