import { skills } from "../data";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <section id="skills" className="bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal as="h2" className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
          Skills
        </Reveal>
        <dl className="mt-12">
          {skills.map(([group, items]) => (
            <Reveal
              key={group}
              className="grid gap-3 border-t border-snow/15 py-6 md:grid-cols-4"
            >
              <dt className="font-display text-xl font-bold">{group}</dt>
              <dd className="flex flex-wrap gap-2 md:col-span-3">
                {items.map((i) => (
                  <span
                    key={i}
                    className="rounded-md bg-night px-3 py-1 text-sm font-medium ring-1 ring-snow/15 transition duration-200 hover:-translate-y-0.5 hover:ring-lime/70"
                  >
                    {i}
                  </span>
                ))}
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
