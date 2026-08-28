import ProjectPreview from "@/components/ProjectPreview";
import { GITHUB_USER, getProjects, pushedYear } from "@/lib/github";
import { previews } from "@/lib/previews";

export default async function Projects() {
  const projects = await getProjects();

  return (
    <section id="projects" className="shell pt-[88px] md:pt-[152px]">
      <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between md:gap-10">
        <h2 className="font-serif text-display-m text-ink">Things I&rsquo;ve built.</h2>
        <a
          href={`https://github.com/${GITHUB_USER}`}
          target="_blank"
          rel="noreferrer"
          className="font-mono text-meta font-medium text-ink-3 uppercase transition-colors hover:text-accent md:text-right"
        >
          All repositories — github.com/{GITHUB_USER} ↗
        </a>
      </div>

      <div className="mt-8 md:mt-14">
        {projects.map((project) => {
          const year = pushedYear(project.pushedAt);
          const preview = previews[project.name];

          return (
            <article
              key={project.name}
              className="group border-t border-line-soft py-7 md:grid md:grid-cols-[minmax(0,1fr)_minmax(0,46%)] md:items-start md:gap-12 md:py-10"
            >
              <div>
                <h3 className="font-serif text-display-s text-ink">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors hover:text-accent"
                  >
                    {project.title}
                  </a>
                </h3>

                {project.description ? (
                  <p className="mt-2 max-w-[52ch] font-sans text-body-m text-ink-2 text-pretty">
                    {project.description}
                  </p>
                ) : null}

                {project.live ? (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-block font-mono text-meta font-medium text-accent uppercase underline underline-offset-4"
                  >
                    Live site ↗
                  </a>
                ) : null}

                <p className="mt-4 flex flex-wrap gap-x-5 gap-y-1 font-mono text-meta text-ink-3 uppercase md:mt-6">
                  {project.language ? <span>{project.language}</span> : null}
                  {year ? <span>{year}</span> : null}
                  <span className="transition-colors group-hover:text-ink">
                    {project.name}
                  </span>
                </p>
              </div>

              {preview ? (
                <div className="mt-6 md:mt-0">
                  <ProjectPreview preview={preview} />
                </div>
              ) : null}
            </article>
          );
        })}
        <div className="border-t border-line-soft" />
      </div>
    </section>
  );
}
