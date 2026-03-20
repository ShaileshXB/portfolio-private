import { useEffect, useState } from "react";

function Projects() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch("https://gh-pinned-repos.egoist.dev/?username=shalinchristian")
      .then(res => res.json())
      .then(data => setRepos(data));
  }, []);

  return (
    <section className="px-10 py-16 bg-[#0A192F] text-white">
      <h2 className="text-3xl font-bold mb-8">Projects</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {repos.map((repo) => (
          <div key={repo.repo} className="bg-[#112240] p-6 rounded-xl shadow-lg">
            
            <h3 className="text-xl font-semibold">{repo.repo}</h3>
            <p className="text-gray-300 mt-2">{repo.description}</p>

            <div className="mt-3 text-sm text-blue-400">
              {repo.language}
            </div>

            <a 
              href={repo.link}
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-4 text-blue-300 hover:underline"
            >
              View Project →
            </a>

          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;