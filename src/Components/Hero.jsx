function Hero() {
  return (
    <section id="home" className="section-shell pt-20 sm:pt-24 lg:pt-28">
      <div className="content-width">
        <div className="max-w-4xl">
          <p className="section-label">
            Full-Stack Developer
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight text-slate-100 sm:text-5xl lg:text-6xl">
            Building clean digital products with a minimal, reliable approach.
          </h1>
          <p className="body-copy mt-5 max-w-2xl">
            I&apos;m Shalin Christian, a developer focused on modern web
            applications across frontend and backend systems. I care about
            clear interfaces, maintainable code, and thoughtful execution.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href="#projects" className="button-primary">
              View Projects
            </a>
            <a href="#contact" className="button-secondary">
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
