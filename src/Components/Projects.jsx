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
      language: repo.language || repo.primaryLanguage || repo.primary_language || "",
      link: repo.link || repo.url || repo.html_url,
      homepage: repo.homepage || null,
    }))
    .filter((repo) => repo.name && repo.link);
}

function getRepoSlugFromLink(link) {
  try {
    const pathnameParts = new URL(link).pathname.split("/").filter(Boolean);

    if (pathnameParts.length < 2) {
      return null;
    }

    return pathnameParts.slice(0, 2).join("/");
  } catch {
    return null;
  }
}

async function enrichWithHomepages(repos, signal) {
  return Promise.all(
    repos.map(async (repo) => {
      const slug = getRepoSlugFromLink(repo.link);

      if (!slug) {
        return repo;
      }

      try {
        const response = await fetch(`https://api.github.com/repos/${slug}`, {
          signal,
        });

        if (!response.ok) {
          return repo;
        }

        const data = await response.json();

        return {
          ...repo,
          homepage: data.homepage || repo.homepage || null,
        };
      } catch (error) {
        if (error.name === "AbortError") {
          throw error;
        }

        return repo;
      }
    }),
  );
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
        return enrichWithHomepages(repos, signal);
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
    <section id="projects" className="section-shell">
      <div className="section-frame">
        <div className="section-grid">
          <div>
            <p className="section-label">Projects</p>
          </div>

          <div className="projects-grid">
            {status === "loading" && (
              <p className="project-state">
                Loading pinned repositories...
              </p>
            )}

            {status === "error" && (
              <p className="project-state">
                I couldn&apos;t load the pinned repositories right now. Please
                check that your GitHub pins are public and try again.
              </p>
            )}

            {status === "success" &&
              repos.map((repo) => (
                <article
                  key={repo.id}
                  className="project-card"
                >
                  <div className="project-card-top">
                    <span className="project-index">Project</span>
                    <span className="project-language">{repo.language || "Web"}</span>
                  </div>
                  <h3>{repo.name}</h3>
                  <p>{repo.description || "Project details coming soon."}</p>
                  <div className="project-links">
                    <a
                      href={repo.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Repository <span>↗</span>
                    </a>

                    {repo.homepage && (
                      <a
                        href={repo.homepage}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Live site <span>↗</span>
                      </a>
                    )}
                  </div>
                </article>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
