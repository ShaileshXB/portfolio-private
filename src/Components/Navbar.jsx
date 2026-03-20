function Navbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-white/10 bg-[#0b0f14]/90 px-6 py-5 backdrop-blur sm:px-10 lg:px-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <a
          href="#home"
          className="text-lg font-semibold tracking-[0.18em] text-slate-100 uppercase"
        >
          Shalin Christian
        </a>
        <nav className="flex flex-wrap gap-5 text-sm text-slate-400">
          <a className="transition hover:text-slate-100" href="#about">
            About
          </a>
          <a className="transition hover:text-slate-100" href="#skills">
            Skills
          </a>
          <a className="transition hover:text-slate-100" href="#education">
            Education
          </a>
          <a className="transition hover:text-slate-100" href="#projects">
            Projects
          </a>
          <a className="transition hover:text-slate-100" href="#contact">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
