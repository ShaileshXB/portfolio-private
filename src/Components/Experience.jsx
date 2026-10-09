import { profile } from "../data/profile";

function Experience() {
  return (
    <section id="experience" className="section-shell">
      <div className="section-frame">
        <div className="section-grid">
          <div>
            <p className="section-label">Experience</p>
          </div>

          <div className="experience-board">
            {profile.experience.map((item, index) => (
              <article
                key={`${item.role}-${item.company}-${item.period}`}
                className={`experience-entry ${index === 0 ? "experience-entry-primary" : "experience-entry-secondary"}`}
              >
                <div className="experience-entry-top">
                  <span className="experience-period">{item.period}</span>
                  <span className="experience-entry-rule" aria-hidden="true" />
                </div>
                <h3>{item.role}</h3>
                <p className="experience-company">{item.company}</p>
                <p className="experience-summary">{item.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
