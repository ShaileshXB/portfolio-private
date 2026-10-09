const skillGroups = [
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "Tailwind CSS", "JavaScript"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "PHP", "ASP.NET Core"],
  },
  {
    title: "Programming Languages",
    skills: ["Java", "C#"],
  },
  {
    title: "Databases",
    skills: ["MySQL", "PostgreSQL", "SQL Server", "MongoDB"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "Postman", "IntelliJ IDEA"],
  },
];

function Skills() {
  return (
    <section id="skills" className="section-shell">
      <div className="section-frame">
        <div className="section-grid">
          <div>
            <p className="section-label">Skills</p>
          </div>

          <div className="skills-list">
            {skillGroups.map((group, index) => (
              <div key={group.title} className="skill-group">
                <span className="skill-number">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{group.title}</h3>
                  <div className="skill-items">
                  {group.skills.map((skill) => (
                    <span key={skill} className="tag">
                      {skill}
                    </span>
                  ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
