import { useState } from "react";
import { profile } from "../data";
import Reveal from "./Reveal";

const icons = {
  phone: <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />,
  mail: (
    <>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-10 6L2 7" />
    </>
  ),
  pin: (
    <>
      <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z" />
      <circle cx="12" cy="10" r="3" />
    </>
  ),
  github: (
    <>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </>
  ),
  linkedin: (
    <>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </>
  ),
  copy: (
    <>
      <rect x="9" y="9" width="13" height="13" rx="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </>
  ),
  check: <path d="M20 6 9 17l-5-5" />,
  file: (
    <>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6M12 18v-6m-3 3 3 3 3-3" />
    </>
  ),
};

function Icon({ name, className = "h-5 w-5" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {icons[name]}
    </svg>
  );
}

function CopyButton({ text, label }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* Clipboard can be blocked; the link beside it still works. */
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={`Copy ${label}`}
      className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-snow/20 text-xs font-medium transition-colors duration-200 hover:border-lime hover:text-lime sm:w-auto sm:px-4"
    >
      <Icon name={copied ? "check" : "copy"} className="h-4 w-4 sm:hidden" />
      <span aria-hidden="true" className="hidden sm:inline">{copied ? "Copied" : "Copy"}</span>
      <span className="sr-only" aria-live="polite">{copied ? "Copied" : ""}</span>
    </button>
  );
}

const items = [
  { icon: "phone", label: "Mobile", value: profile.phone, href: profile.phoneHref, copy: profile.phone, wide: true },
  { icon: "mail", label: "Email", value: profile.email, href: `mailto:${profile.email}`, copy: profile.email, wide: true },
  { icon: "pin", label: "Location", value: "Victoria, Tarlac City, Philippines", wide: true },
  { icon: "github", label: "GitHub", value: "rae6911", href: profile.github },
  { icon: "linkedin", label: "LinkedIn", value: "joshua-berdin", href: profile.linkedin },
  { icon: "file", label: "CV", value: "Download PDF", href: profile.cv, download: true, wide: true },
];

// Lets long values wrap at the @ instead of in the middle of a word.
function Value({ children }) {
  const text = String(children);
  const at = text.indexOf("@");
  return (
    <span className="block break-words font-semibold">
      {at > 0 ? (<>{text.slice(0, at)}<wbr />{text.slice(at)}</>) : text}
    </span>
  );
}

export default function Contact() {
  return (
    <>
      <section id="contact" className="px-5 pb-16 pt-4 md:pb-28">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-12">
          {/* Call to action */}
          <Reveal className="on-lime flex flex-col min-w-0 rounded-[1.75rem] bg-lime p-6 text-night sm:rounded-[2rem] sm:p-10 md:col-span-12 lg:col-span-5">
            <h2 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tighter sm:text-5xl">
              Have a project in mind?
            </h2>
            <p className="mt-4 max-w-sm text-base leading-relaxed text-night/80 sm:mt-5 sm:text-lg">
              Call or email me and tell me what you need built.
            </p>
            <div className="mt-auto flex flex-col gap-3 pt-8 sm:flex-row sm:pt-10 lg:flex-col">
              <a
                href={profile.phoneHref}
                className="flex items-center justify-center gap-2.5 rounded-full bg-night px-5 py-3.5 text-center font-semibold text-lime sm:px-6 transition duration-200 hover:-translate-y-0.5 hover:bg-snow hover:text-night"
              >
                <Icon name="phone" className="h-4 w-4" />
                {profile.phone}
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center justify-center gap-2.5 rounded-full border-2 border-night px-5 py-3 text-center font-semibold sm:px-6 transition duration-200 hover:-translate-y-0.5 hover:bg-night hover:text-lime"
              >
                <Icon name="mail" className="h-4 w-4" />
                Email me
              </a>
            </div>
          </Reveal>

          {/* Details */}
          <ul className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2 md:col-span-12 lg:col-span-7">
            {items.map((it, idx) => (
              <Reveal as="li" key={it.label} delay={idx * 80} className={`card card-link flex items-center gap-3 !p-4 sm:gap-4 sm:!p-5 ${it.wide ? "sm:col-span-2" : ""}`}>
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-lime text-night">
                  <Icon name={it.icon} />
                </span>
                {it.href ? (
                  <a
                    href={it.href}
                    {...(it.download ? { download: true } : {})}
                    className="min-w-0 flex-1"
                  >
                    <span className="block text-sm text-mute">{it.label}</span>
                    <Value>{it.value}</Value>
                  </a>
                ) : (
                  <div className="min-w-0 flex-1">
                    <span className="block text-sm text-mute">{it.label}</span>
                    <Value>{it.value}</Value>
                  </div>
                )}
                {it.copy && <CopyButton text={it.copy} label={it.label.toLowerCase()} />}
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <footer className="border-t border-snow/10 py-8 text-sm text-mute">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5">
          <img src="/rae-logo.png" alt="rae" className="h-12 w-auto" />
          <p>
            © {new Date().getFullYear()} {profile.name}. Based in {profile.location}.
          </p>
        </div>
      </footer>
    </>
  );
}
