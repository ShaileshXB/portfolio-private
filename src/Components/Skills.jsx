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
    <section id="skills" className="px-6 py-20 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-5xl border-t border-slate-800 pt-10">
        <div className="grid gap-8 md:grid-cols-[180px_1fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-slate-500">
              Skills
            </p>
          </div>

          <div className="space-y-6">
            {skillGroups.map((group) => (
              <div
                key={group.title}
                className="grid gap-4 border-b border-slate-900 pb-6 md:grid-cols-[160px_1fr]"
              >
                <h3 className="text-lg font-medium text-slate-200">
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="border border-slate-700 px-3 py-2 text-sm text-slate-300"
                    >
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
