const educationItems = [
  {
    degree: "Bachelor's Degree in Computer Applications",
    school: "Charotar University of Science and Technology",
    period: "2022-2025",
    note: "Focused on software fundamentals, web development, and practical problem solving.",
  },{
    degree: "Master's Degree in Computer Applications",
    school: "Charotar University of Science and Technology",
    period: "2025-2027",
    note: "",
  },
];

function Education() {
  return (
    <section id="education" className="px-6 py-20 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-5xl border-t border-slate-800 pt-10">
        <div className="grid gap-8 md:grid-cols-[180px_1fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-slate-500">
              Education
            </p>
          </div>

          <div className="space-y-6">
            {educationItems.map((item) => (
              <div
                key={`${item.degree}-${item.school}`}
                className="border border-slate-800 bg-slate-950/20 p-6"
              >
                <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-100">
                      {item.degree}
                    </h3>
                    <p className="mt-1 text-slate-300">{item.school}</p>
                  </div>
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
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
