import { useEffect, useState } from "react";

const GITHUB_USERNAME = "shalinchristian";

function normalizePinnedRepos(payload) {
  if (!payload) {
    return [];
  }

  const rawRepos = Array.isArray(payload)
    ? payload
    : Array.isArray(payload.data)
      ? payload.data
      : Array.isArray(payload.pins)
        ? payload.pins
        : [];

  return rawRepos
    .map((repo) => ({
      id: repo.id || repo.repo || repo.name,
      name: repo.repo || repo.name,
      description: repo.description || repo.desc || "",
      language:
        repo.language ||
        repo.primaryLanguage ||
        repo.primary_language ||
        "Code",
      link: repo.link || repo.url || repo.html_url,
    }))
    .filter((repo) => repo.name && repo.link);
}

async function fetchPinnedRepos(signal) {
  const endpoints = [
    `https://gh-pinned-repos.egoist.dev/?username=${GITHUB_USERNAME}`,
    `https://api.kremilly.com/github?user=${GITHUB_USERNAME}`,
  ];

  for (const endpoint of endpoints) {
    try {
      const response = await fetch(endpoint, { signal });

      if (!response.ok) {
        continue;
      }

      const data = await response.json();
      const repos = normalizePinnedRepos(data);

      if (repos.length > 0) {
        return repos;
      }
    } catch (error) {
      if (error.name === "AbortError") {
        throw error;
      }
    }
  }

  throw new Error("Unable to load pinned repositories.");
}

function Projects() {
  const [repos, setRepos] = useState([]);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    const controller = new AbortController();

    fetchPinnedRepos(controller.signal)
      .then((data) => {
        setRepos(data);
        setStatus("success");
      })
      .catch((error) => {
        if (error.name !== "AbortError") {
          setStatus("error");
        }
      });

    return () => controller.abort();
  }, []);

  return (
    <section id="projects" className="px-6 py-20 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-5xl border-t border-slate-800 pt-10">
        <div className="grid gap-8 md:grid-cols-[180px_1fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-slate-500">
              Projects
            </p>
          </div>

          <div className="space-y-5">
            {status === "loading" && (
              <p className="border border-slate-800 px-5 py-4 text-slate-400">
                Loading pinned repositories...
              </p>
            )}

            {status === "error" && (
              <p className="border border-slate-700 px-5 py-4 text-slate-300">
                I couldn&apos;t load the pinned repositories right now. Please
                check that your GitHub pins are public and try again.
              </p>
            )}

            {status === "success" &&
              repos.map((repo) => (
                <article
                  key={repo.id}
                  className="border border-slate-800 p-6 transition hover:border-slate-600"
                >
                  <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                    <div className="max-w-2xl">
                      <h3 className="text-xl font-medium text-slate-100">
                        {repo.name}
                      </h3>
                      <p className="mt-3 leading-7 text-slate-400">
                        {repo.description || "Project details coming soon."}
                      </p>
                    </div>
                    <span className="text-sm uppercase tracking-[0.18em] text-slate-500">
                      {repo.language}
                    </span>
                  </div>

                  <a
                    href={repo.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-block text-sm font-medium uppercase tracking-[0.18em] text-slate-200 transition hover:text-white"
                  >
                    Open Repository
                  </a>
                </article>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
