import { GITHUB_USER, getProjects, pushedYear } from "@/lib/github";

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
          return (
            <article
              key={project.name}
              className="group border-t border-line-soft py-7 md:grid md:grid-cols-[1fr_auto] md:items-start md:gap-12"
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
                  <p className="mt-2 max-w-[58ch] font-sans text-body-m text-ink-2 text-pretty">
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
              </div>

              <p className="mt-3 flex gap-5 font-mono text-meta text-ink-3 uppercase md:mt-2 md:justify-end md:gap-6">
                {project.language ? <span>{project.language}</span> : null}
                {year ? <span>{year}</span> : null}
                <span className="text-ink-3 transition-colors group-hover:text-ink">
                  {project.name}
                </span>
              </p>
            </article>
          );
        })}
        <div className="border-t border-line-soft" />
      </div>
    </section>
  );
}
