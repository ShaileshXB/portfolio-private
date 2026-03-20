function About() {
  return (
    <section id="about" className="px-6 py-20 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-5xl border-t border-slate-800 pt-10">
        <div className="grid gap-8 md:grid-cols-[180px_1fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-slate-500">
              About
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="max-w-3xl text-3xl font-semibold leading-tight text-slate-100 sm:text-4xl">
              Simple, thoughtful development with attention to both detail and
              usability.
            </h2>
            <p className="max-w-3xl text-base leading-8 text-slate-400 sm:text-lg">
              I build web experiences that feel clear and efficient. My work
              spans frontend interfaces, backend logic, and database-driven
              systems, with a focus on creating products that are easy to use
              and easy to maintain.
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="border border-slate-800 p-5">
                <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
                  Focus
                </p>
                <p className="mt-3 text-slate-200">Full-stack product development</p>
              </div>
              <div className="border border-slate-800 p-5">
                <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
                  Strength
                </p>
                <p className="mt-3 text-slate-200">Readable, scalable implementation</p>
              </div>
              <div className="border border-slate-800 p-5">
                <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
                  Approach
                </p>
                <p className="mt-3 text-slate-200">Minimal design with purposeful UX</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
