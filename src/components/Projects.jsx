import { projects, profile } from "../data";
import Reveal from "./Reveal";

export default function Projects() {
  return (
    <section id="projects" className="bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal as="h2" className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
          Projects
        </Reveal>
        <Reveal as="p" delay={100} className="mt-4 max-w-xl text-lg text-mute">
          Websites, apps and a full-stack tool, built for government offices
          and a growing company.
        </Reveal>

        <ul className="mt-12">
          {projects.map((p) => (
            <Reveal
              as="li"
              key={p.name}
              className="grid gap-5 border-t border-snow/15 py-8 md:grid-cols-12 md:gap-8"
            >
              <div className="md:col-span-4">
                <h3 className="font-display text-2xl font-bold">{p.name}</h3>
                <p className="mt-1 font-medium text-lime">{p.kind}</p>
              </div>
              <p className="leading-relaxed text-snow/80 md:col-span-5">
                {p.description}
              </p>
              <ul className="flex flex-wrap content-start gap-2 md:col-span-3">
                {p.stack.map((s) => (
                  <li
                    key={s}
                    className="rounded-md border border-snow/25 px-2.5 py-1 text-sm text-snow/90 transition-colors duration-200 hover:border-lime hover:text-lime"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </ul>

        <a
          href={profile.github}
          className="mt-6 inline-block border-b-2 border-lime pb-1 font-medium text-lime transition-colors duration-200 hover:bg-lime hover:text-night"
        >
          More on GitHub
        </a>
      </div>
    </section>
  );
}
