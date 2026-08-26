import { GITHUB_USER } from "@/lib/github";

export default function Footer() {
  return (
    <footer id="contact" className="shell pt-[88px] pb-10 md:pt-[152px] md:pb-12">
      <div className="border-t border-line-strong pt-10 md:pt-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between md:gap-16">
          <div>
            <h2 className="font-serif text-display-l text-ink">Say hello.</h2>
            <a
              href="mailto:khaopan.nas@gmail.com"
              className="mt-4 inline-block font-serif text-display-s text-accent underline underline-offset-[6px] transition-opacity hover:opacity-75"
            >
              khaopan.nas@gmail.com
            </a>
          </div>

          <div className="flex flex-col gap-3 md:items-end">
            <p className="font-mono text-meta font-medium text-ink-3 uppercase">
              Elsewhere
            </p>
            <a
              href={`https://github.com/${GITHUB_USER}`}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-meta text-ink uppercase transition-colors hover:text-accent"
            >
              GitHub / {GITHUB_USER}
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-meta text-ink-3 uppercase">
            © {new Date().getFullYear()} Khaopun · Bangkok
          </p>
          <a
            href="#top"
            className="font-mono text-meta text-ink-3 uppercase transition-colors hover:text-ink"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
