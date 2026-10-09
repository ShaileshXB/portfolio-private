function Hero() {
  return (
    <section id="home" className="hero-section section-shell">
      <div className="content-width hero-grid">
        <div>
          <p className="section-label hero-kicker">HELLO, I&apos;M SHALIN</p>
          <h1 className="display-title">
            Selected work and ongoing <em>explorations.</em>
          </h1>
          <p className="body-copy mt-7 max-w-lg">
            A collection of software projects, technical experiments, and
            other things I&apos;ve spent time exploring.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#projects" className="button-primary">View projects <span className="ml-3 text-base">↓</span></a>
            <a href="#about" className="button-secondary">About me</a>
          </div>
        </div>

        <div className="hero-network" role="img" aria-label="Abstract connected computing network">
          <svg viewBox="0 0 420 360" aria-hidden="true">
            <path className="network-line" d="M54 90L170 52L278 108L365 64" />
            <path className="network-line" d="M54 90L108 232L226 194L278 108" />
            <path className="network-line" d="M226 194L338 278L365 64" />
            <path className="network-line network-line-muted" d="M108 232L338 278" />
            <circle className="network-node network-node-muted" cx="54" cy="90" r="7" />
            <circle className="network-node" cx="170" cy="52" r="10" />
            <circle className="network-node network-node-muted" cx="278" cy="108" r="7" />
            <circle className="network-node" cx="365" cy="64" r="8" />
            <circle className="network-node network-node-muted" cx="108" cy="232" r="6" />
            <circle className="network-node network-node-core" cx="226" cy="194" r="15" />
            <circle className="network-node network-node-muted" cx="338" cy="278" r="8" />
            <circle className="network-signal" cx="112" cy="71" r="3" />
            <circle className="network-signal network-signal-delay" cx="288" cy="237" r="3" />
          </svg>
          <span className="network-label network-label-one">interface</span>
          <span className="network-label network-label-two">data</span>
          <span className="network-label network-label-three">systems</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
