import { useEffect, useState } from "react";

const links = [
  ["Projects", "#projects"],
  ["Experience", "#experience"],
  ["Skills", "#skills"],
];

export default function Header() {
  const [open, setOpen] = useState(false);

  // Close the mobile menu on Escape, or when the viewport grows past the mobile breakpoint.
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    const mq = window.matchMedia("(min-width: 640px)");
    const onChange = () => mq.matches && setOpen(false);
    window.addEventListener("keydown", onKey);
    mq.addEventListener("change", onChange);
    return () => {
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onChange);
    };
  }, [open]);

  return (
    <header className="fixed inset-x-3 top-3 z-30 sm:inset-x-4 sm:top-4">
      <nav
        aria-label="Main"
        className="mx-auto flex h-14 max-w-5xl items-center justify-between rounded-full border border-snow/10 bg-night/70 pl-5 pr-2 shadow-lg shadow-black/30 backdrop-blur-xl"
      >
        <a href="#top" aria-label="rae, back to top" className="transition-transform duration-200 hover:scale-105">
          <img src="/rae-logo.png" alt="rae" className="h-8 w-auto" />
        </a>

        <div className="flex items-center gap-2 sm:gap-7">
          <ul className="hidden items-center gap-7 text-sm font-medium sm:flex">
            {links.map(([label, href]) => (
              <li key={href}>
                <a href={href} className="py-2 text-snow/80 transition-colors duration-200 hover:text-lime">
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="block rounded-full bg-lime px-5 py-2.5 text-sm font-semibold text-night transition duration-200 hover:-translate-y-0.5 hover:bg-snow"
          >
            Contact
          </a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid h-10 w-10 place-items-center rounded-full border border-snow/20 text-snow transition-colors duration-200 hover:border-lime hover:text-lime sm:hidden"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 8h16M4 16h16" />}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div
          id="mobile-menu"
          className="mx-auto mt-2 max-w-5xl rounded-3xl border border-snow/10 bg-night/90 p-2 shadow-lg shadow-black/30 backdrop-blur-xl sm:hidden"
        >
          <ul>
            {links.map(([label, href]) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => setOpen(false)}
                  className="block rounded-2xl px-4 py-3.5 font-medium text-snow/90 transition-colors duration-200 hover:bg-surface hover:text-lime"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
