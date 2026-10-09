function Contact() {
  return (
    <section id="contact" className="section-shell">
      <div className="section-frame">
        <div className="section-grid">
          <div>
            <p className="section-label">Contact</p>
          </div>

          <div className="contact-content">
            <div className="contact-copy">
              <h2 className="section-title">For professional inquiries.</h2>
              <p className="body-copy">
                For questions about my work, project discussions, or professional
                correspondence, email is the most direct way to reach me.
              </p>
            </div>

            <div className="contact-actions">
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
