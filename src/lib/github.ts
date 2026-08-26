export const GITHUB_USER = "CHxNOBODY";

/**
 * The repos worth showing, in the order they should appear, with a readable
 * title for the ones whose repo name is a Kasetsart course code.
 * Everything else (description, language, last push) comes live from GitHub.
 */
const FEATURED: { repo: string; title: string; live?: string }[] = [
  {
    repo: "KU-Acoustic-Website",
    title: "KU Acoustic",
    live: "https://ku-acoustic-website.vercel.app",
  },
  { repo: "CS-01418351-Project", title: "KU File Transfer" },
  { repo: "My-Discord-Bot", title: "Discord Bot" },
  { repo: "CS-01418262", title: "Machine Learning" },
  { repo: "LineBot", title: "LINE Bot" },
  { repo: "Anniversary-4-years", title: "Anniversary" },
];

export type Project = {
  name: string;
  title: string;
  description: string | null;
  language: string | null;
  url: string;
  live?: string;
  pushedAt: string | null;
};

type GitHubRepo = {
  name: string;
  description: string | null;
  language: string | null;
  html_url: string;
  homepage: string | null;
  pushed_at: string | null;
};

/** Used when the GitHub API is unreachable or rate-limited, so the build never fails. */
const FALLBACK: Record<string, Omit<GitHubRepo, "name" | "html_url">> = {
  "KU-Acoustic-Website": {
    description: "This is the website for my club.",
    language: "HTML",
    homepage: "https://ku-acoustic-website.vercel.app",
    pushed_at: "2026-08-20T12:53:36Z",
  },
  "CS-01418351-Project": {
    description: "KU File Transfer Project",
    language: "Python",
    homepage: null,
    pushed_at: "2026-08-25T16:30:56Z",
  },
  "My-Discord-Bot": {
    description: "Bot for play music, snipe the messages, or edit roles.",
    language: "Python",
    homepage: null,
    pushed_at: "2026-08-20T12:20:15Z",
  },
  "CS-01418262": {
    description: "For Machine Learning Project And Lab.",
    language: "Jupyter Notebook",
    homepage: null,
    pushed_at: "2025-08-01T07:39:54Z",
  },
  LineBot: {
    description: null,
    language: "TypeScript",
    homepage: null,
    pushed_at: "2026-08-25T08:17:45Z",
  },
  "Anniversary-4-years": {
    description: "This is website for anniversary 4 years with my girlfriend.",
    language: "TypeScript",
    homepage: null,
    pushed_at: "2026-08-23T14:55:46Z",
  },
};

async function fetchRepos(): Promise<Map<string, GitHubRepo> | null> {
  try {
    const res = await fetch(
      `https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&sort=pushed`,
      {
        headers: { Accept: "application/vnd.github+json" },
        // Re-checked hourly; the page itself stays static between revalidations.
        next: { revalidate: 3600 },
      },
    );
    if (!res.ok) return null;
    const repos = (await res.json()) as GitHubRepo[];
    return new Map(repos.map((r) => [r.name, r]));
  } catch {
    return null;
  }
}

export async function getProjects(): Promise<Project[]> {
  const live = await fetchRepos();

  return FEATURED.map(({ repo, title, live: pinnedLive }) => {
    const remote = live?.get(repo);
    const data = remote ?? {
      ...FALLBACK[repo],
      name: repo,
      html_url: `https://github.com/${GITHUB_USER}/${repo}`,
    };

    return {
      name: repo,
      title,
      description: data.description,
      language: data.language,
      url: remote?.html_url ?? `https://github.com/${GITHUB_USER}/${repo}`,
      live: pinnedLive ?? data.homepage ?? undefined,
      pushedAt: data.pushed_at,
    };
  });
}

export function pushedYear(pushedAt: string | null) {
  if (!pushedAt) return null;
  return new Date(pushedAt).getUTCFullYear().toString();
}
