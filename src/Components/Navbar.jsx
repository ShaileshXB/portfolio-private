import { useState } from "react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((current) => !current);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-20 border-b border-white/10 bg-[#0b0f14]/90 backdrop-blur">
      <div className="page-padding mx-auto max-w-6xl py-4">
        <div className="flex items-center justify-between gap-4">
          <a
            href="#home"
            className="text-base font-semibold uppercase tracking-[0.16em] text-slate-100 sm:text-lg sm:tracking-[0.18em]"
            onClick={handleClose}
          >
            Shalin Christian
          </a>

          <button
            type="button"
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
            className="flex h-11 w-11 items-center justify-center border border-white/10 text-slate-200 transition hover:border-slate-500 hover:text-white md:hidden"
            onClick={handleToggle}
          >
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 top-0 h-0.5 w-5 bg-current transition ${
                  isOpen ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[7px] h-0.5 w-5 bg-current transition ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 top-[14px] h-0.5 w-5 bg-current transition ${
                  isOpen ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>

          <nav className="hidden items-center gap-6 text-sm text-slate-400 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                className="transition hover:text-slate-100"
                href={item.href}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        {isOpen && (
          <nav className="mt-4 border-t border-white/10 pt-4 md:hidden">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  className="py-3 text-sm text-slate-300 transition hover:text-white"
                  href={item.href}
                  onClick={handleClose}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Navbar;
