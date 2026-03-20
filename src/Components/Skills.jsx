const skillGroups = [
  {
    title: "Frontend",
    skills: ["Angular", "React", "JavaScript", "Tailwind CSS", "HTML", "CSS"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "PHP", "ASP.NET Core", "REST APIs"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "MySQL", "MongoDB", "Postman"],
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

          <div className="space-y-6">
            {skillGroups.map((group) => (
              <div
                key={group.title}
                className="grid gap-4 border-b border-slate-900 pb-6 md:grid-cols-[140px_1fr]"
              >
                <h3 className="text-lg font-medium text-slate-200">
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {group.skills.map((skill) => (
                    <span key={skill} className="tag">
                      {skill}
                    </span>
                  ))}
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
