function Contact() {
  return (
    <section id="contact" className="section-shell">
      <div className="section-frame">
        <div className="section-grid">
          <div>
            <p className="section-label">Contact</p>
          </div>

          <div className="max-w-3xl">
            <h2 className="section-title">
              Thanks for stopping by.
            </h2>
            <p className="body-copy mt-5">
              If you&apos;d like to talk about a project, technology, or just say
              hello, my inbox is open.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href="mailto:shalinchristian71@gmail.com" className="button-primary">
                Email Me
              </a>
              <a
                href="https://github.com/shalinchristian"
                target="_blank"
                rel="noreferrer"
                className="button-secondary"
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
