import { profile } from "../data/profile";

function Experience() {
  return (
    <section id="experience" className="section-shell">
      <div className="section-frame">
        <div className="section-grid">
          <div>
            <p className="section-label">Experience</p>
          </div>

          <div className="space-y-6">
            {profile.experience.map((item) => (
              <article
                key={`${item.role}-${item.company}-${item.period}`}
                className="panel"
              >
                <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-100">
                      {item.role}
                    </h3>
                    <p className="mt-1 text-slate-300">{item.company}</p>
                  </div>
                  <p className="section-label">
                    {item.period}
                  </p>
                </div>
                <p className="mt-4 max-w-2xl text-slate-400">{item.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
