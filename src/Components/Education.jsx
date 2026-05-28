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

          <div className="space-y-6">
            {educationItems.map((item) => (
              <div
                key={`${item.degree}-${item.school}`}
                className="panel"
              >
                <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-100">
                      {item.degree}
                    </h3>
                    <p className="mt-1 text-slate-300">{item.school}</p>
                  </div>
                  <p className="section-label">
                    {item.period}
                  </p>
                </div>
                <p className="mt-4 max-w-2xl text-slate-400">{item.note}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
