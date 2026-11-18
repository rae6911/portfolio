const links = [
  ["Projects", "#projects"],
  ["Experience", "#experience"],
  ["Skills", "#skills"],
];

export default function Header() {
  return (
    <header className="fixed inset-x-4 top-4 z-30">
      <nav
        aria-label="Main"
        className="mx-auto flex h-14 max-w-5xl items-center justify-between rounded-full border border-snow/10 bg-night/70 pl-5 pr-2 shadow-lg shadow-black/30 backdrop-blur-xl"
      >
        <a href="#top" aria-label="rae, back to top" className="transition-transform duration-200 hover:scale-105">
          <img src="/rae-logo.png" alt="rae" className="h-8 w-auto" />
        </a>
        <ul className="flex items-center gap-7 text-sm font-medium">
          {links.map(([label, href]) => (
            <li key={href} className="hidden sm:block">
              <a href={href} className="py-2 text-snow/80 transition-colors duration-200 hover:text-lime">
                {label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="block rounded-full bg-lime px-5 py-2.5 font-semibold text-night transition duration-200 hover:-translate-y-0.5 hover:bg-snow"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
