import { SiteShell } from "../components/site-shell";

export default function AboutPage() {
  return (
    <SiteShell
      active="About"
      eyebrow="About"
      title={
        <>
          Professional profile,
          <br />
          background, and
          <br />
          public presence.
        </>
      }
      intro="A dedicated page for professional identity, background, and the platforms that represent work, experience, and reputation."
    >
      <div className="space-y-5">
        <article className="rounded-[1.5rem] border border-border bg-surface-strong p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
            Preview
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight">
            LinkedIn
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-foreground/72">
            A professional preview card linking directly to your LinkedIn
            profile for experience, background, and network presence.
          </p>

          <div className="mt-6 rounded-[1.4rem] border border-border bg-[linear-gradient(135deg,rgba(10,102,194,0.12),rgba(255,255,255,0.72))] p-6">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0A66C2] text-2xl font-bold text-white">
                in
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-foreground/45">
                  LinkedIn
                </p>
                <p className="mt-1 text-xl font-semibold">Sedat Pala</p>
              </div>
            </div>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-foreground/72">
              Visit the full profile to view background, experience, and public
              professional details.
            </p>

            <a
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent"
              href="https://www.linkedin.com/in/sedat-0a4b3a1b7"
              target="_blank"
              rel="noreferrer"
            >
              Open LinkedIn profile
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </article>
      </div>
    </SiteShell>
  );
}
