function Hero() {
  return (
    <section id="home" className="px-6 pb-18 pt-24 sm:px-10 lg:px-16 lg:pt-28">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-4xl">
          <p className="text-sm uppercase tracking-[0.28em] text-slate-500">
            Full-Stack Developer
          </p>
          <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-tight text-slate-100 sm:text-5xl lg:text-6xl">
            Building clean digital products with a minimal, reliable approach.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            I&apos;m Shalin Christian, a developer focused on modern web
            applications across frontend and backend systems. I care about
            clear interfaces, maintainable code, and thoughtful execution.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#projects"
              className="border border-slate-200 px-6 py-3 text-sm font-medium uppercase tracking-[0.18em] text-slate-100 transition hover:bg-slate-100 hover:text-slate-950"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border border-white/10 px-6 py-3 text-sm font-medium uppercase tracking-[0.18em] text-slate-400 transition hover:border-slate-500 hover:text-slate-100"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
