import { experience } from "../data";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal as="h2" className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
          Experience and education
        </Reveal>

        <ol className="mt-12 border-l-2 border-snow/25 pl-6 md:pl-10">
          {experience.map((e) => (
            <Reveal as="li" key={e.org} className="relative pb-12 last:pb-0">
              <span
                aria-hidden="true"
                className="absolute -left-[2.1rem] top-2 h-3 w-3 rounded-full bg-lime md:-left-[3.1rem]"
              />
              <p className="font-medium text-lime">{e.dates}</p>
              <h3 className="mt-1 font-display text-2xl font-bold">{e.org}</h3>
              <p className="text-mute">{e.note}</p>
              {e.points.length > 0 && (
                <ul className="mt-4 max-w-2xl list-disc space-y-2 pl-5 leading-relaxed text-snow/85 marker:text-lime">
                  {e.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              )}
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
