function About() {
  return (
    <section id="about" className="section-shell">
      <div className="section-frame">
        <div className="section-grid">
          <div>
            <p className="section-label">About</p>
          </div>

          <div className="space-y-6">
            <h2 className="section-title">
              Simple, thoughtful development with attention to both detail and
              usability.
            </h2>
            <p className="body-copy max-w-3xl">
              I build web experiences that feel clear and efficient. My work
              spans frontend interfaces, backend logic, and database-driven
              systems, with a focus on creating products that are easy to use
              and easy to maintain.
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="panel">
                <p className="section-label">Focus</p>
                <p className="mt-3 text-slate-200">Full-stack product development</p>
              </div>
              <div className="panel">
                <p className="section-label">Strength</p>
                <p className="mt-3 text-slate-200">Readable, scalable implementation</p>
              </div>
              <div className="panel">
                <p className="section-label">Approach</p>
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
