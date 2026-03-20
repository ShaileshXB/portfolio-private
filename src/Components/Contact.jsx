function Contact() {
  return (
    <section id="contact" className="px-6 py-20 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-5xl border-t border-slate-800 pt-10">
        <div className="grid gap-8 md:grid-cols-[180px_1fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-slate-500">
              Contact
            </p>
          </div>

          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold text-slate-100 sm:text-4xl">
              Available for meaningful work and thoughtful collaborations.
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-400 sm:text-lg">
              If you&apos;re hiring, building a product, or want to connect, feel
              free to reach out.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="mailto:shalinchristian71@gmail.com"
                className="border border-slate-200 px-6 py-3 text-sm font-medium uppercase tracking-[0.18em] text-slate-100 transition hover:bg-slate-100 hover:text-slate-950"
              >
                Email Me
              </a>
              <a
                href="https://github.com/shalinchristian"
                target="_blank"
                rel="noreferrer"
                className="border border-white/10 px-6 py-3 text-sm font-medium uppercase tracking-[0.18em] text-slate-400 transition hover:border-slate-500 hover:text-slate-100"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
