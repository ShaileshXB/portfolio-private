function About() {
  return (
    <section id="about" className="section-shell">
      <div className="section-frame">
        <div className="section-grid">
          <div><p className="section-label">About</p></div>
          <div className="about-layout">
            <div className="about-visual" role="img" aria-label="Animated code editor showing a software data flow">
              <div className="code-window-bar">
                <span className="code-window-dot" />
                <span className="code-window-dot" />
                <span className="code-window-dot" />
                <span className="code-window-file">system.js</span>
              </div>
              <div className="code-editor" aria-hidden="true">
                <div className="code-stream">
                  <p><span>01</span><b>const</b> shalin <i>=</i> {`{`}</p>
                  <p><span>02</span>&nbsp;&nbsp;focus: <em>&quot;backend + web&quot;</em>,</p>
                  <p className="code-line-active"><span>03</span>&nbsp;&nbsp;worksWith: [<em>&quot;data&quot;</em>, <em>&quot;systems&quot;</em>],</p>
                  <p><span>04</span>&nbsp;&nbsp;learning: <em>&quot;always&quot;</em>,</p>
                  <p><span>05</span>{`}`};</p>
                  <p><span>06</span> </p>
                  <p><span>07</span><b>function</b> <em>makeSenseOf</em>(system) {`{`}</p>
                  <p><span>08</span>&nbsp;&nbsp;<b>return</b> system.<em>understand</em>();</p>
                  <p><span>09</span>{`}`}</p>
                  <p><span>10</span> </p>
                  <p><span>11</span><b>const</b> projects <i>=</i> [</p>
                  <p><span>12</span>&nbsp;&nbsp;<em>&quot;build&quot;</em>, <em>&quot;test&quot;</em>, <em>&quot;improve&quot;</em></p>
                  <p><span>13</span>];</p>
                  <p><span>14</span> </p>
                  <p><span>15</span>export <b>default</b> shalin;</p>
                  <span className="code-cursor" />
                </div>
              </div>
              <div className="code-status"><span /> compiling / observing / iterating</div>
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
