const educationItems = [
  {
    degree: "Master's Degree in Computer Applications",
    school: "Charotar University of Science and Technology",
    period: "2025-2027",
    note: "Focused on full-stack web development, REST API design, backend engineering, and modern web technologies. Built practical projects while strengthening software engineering and problem-solving skills.",
  },{
    degree: "Bachelor's Degree in Computer Applications",
    school: "Charotar University of Science and Technology",
    period: "2022-2025",
    note: "Focused on essential computer application skills such as programming, web technologies, database management, and systems concepts.",
  },
];

function Education() {
  return (
    <section id="education" className="section-shell">
      <div className="section-frame">
        <div className="section-grid">
          <div>
            <p className="section-label">Education</p>
          </div>

          <div className="education-archive">
            {educationItems.map((item, index) => (
              <article className={`education-record education-record-${index + 1}`} key={`${item.degree}-${item.school}`}>
                <div className="education-record-mark" aria-hidden="true" />
                <div className="education-record-top">
                  <span className="education-period">{item.period}</span>
                </div>
                <div className="education-record-body">
                  <h3>{item.degree}</h3>
                  <p className="education-school">{item.school}</p>
                  <p className="education-note">{item.note}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
