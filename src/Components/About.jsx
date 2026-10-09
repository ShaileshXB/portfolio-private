function About() {
  return (
    <section id="about" className="section-shell">
      <div className="section-frame">
        <div className="section-grid">
          <div><p className="section-label">01 / About</p></div>
          <div className="about-layout">
            <div className="about-visual" role="img" aria-label="Abstract software system diagram">
              <svg className="system-diagram" viewBox="0 0 520 360" aria-hidden="true">
                <defs>
                  <linearGradient id="system-flow" x1="0" x2="1">
                    <stop offset="0" stopColor="transparent" />
                    <stop offset="0.5" stopColor="var(--accent)" />
                    <stop offset="1" stopColor="transparent" />
                  </linearGradient>
                </defs>
                <path className="system-connection" d="M76 82H190M190 82L315 56M190 82L315 160M315 160L438 160M190 82L190 278M190 278H438" />
                <path className="system-connection system-connection-muted" d="M76 278H190M76 82V278" />
                <path className="system-flow" d="M76 82H190L315 160H438" />
                <rect className="system-node system-node-ui" x="45" y="51" width="62" height="62" rx="10" />
                <rect className="system-node system-node-core" x="157" y="49" width="66" height="66" rx="14" />
                <rect className="system-node" x="283" y="25" width="64" height="62" rx="10" />
                <rect className="system-node" x="283" y="129" width="64" height="62" rx="10" />
                <rect className="system-node system-node-data" x="157" y="247" width="66" height="62" rx="10" />
                <rect className="system-node" x="406" y="129" width="64" height="62" rx="10" />
                <text x="76" y="86">UI</text>
                <text x="190" y="86">APP</text>
                <text x="315" y="62">AUTH</text>
                <text x="315" y="166">API</text>
                <text x="190" y="284">DATA</text>
                <text x="438" y="166">OUTPUT</text>
                <circle className="system-packet" cx="130" cy="82" r="4" />
                <circle className="system-packet system-packet-delay" cx="375" cy="160" r="4" />
              </svg>
            </div>
            <div>
              <div className="accent-rule mb-7" />
              <h2 className="section-title">A bit about me.</h2>
              <p className="body-copy mt-6 max-w-2xl">
                I work on software projects involving backend development,
                databases, and web applications. I enjoy understanding how
                systems fit together and improving the details that make them
                work.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                <div><p className="section-label">Right now</p><p className="mt-2 font-medium">Learning</p></div>
                <div><p className="section-label">Usually</p><p className="mt-2 font-medium">Building</p></div>
                <div><p className="section-label">Always</p><p className="mt-2 font-medium">Curious</p></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
