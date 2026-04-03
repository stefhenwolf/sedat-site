import { SiteShell } from "../components/site-shell";

export default function MusicPage() {
  return (
    <SiteShell
      active="Music"
      eyebrow="Music"
      title={
        <>
          Listening notes,
          <br />
          moods, and sound
          <br />
          as creative texture.
        </>
      }
      intro="A quiet section for music taste, ambient references, listening habits, and the soundtracks that shape visual and product work."
    >
      <div className="space-y-5">
        <article className="rounded-[1.5rem] border border-border bg-surface-strong px-5 py-5">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
            Preview
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight">
            Quiet Hour Music on Spotify
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-foreground/72">
            Embedded artist preview for the Spotify profile you shared, so the
            page feels like a real media destination instead of a placeholder.
          </p>
          <div className="mt-6 overflow-hidden rounded-[1.4rem] border border-border bg-white">
            <iframe
              src="https://open.spotify.com/embed/artist/4GAsFrKcab0iBgLoEEJqeW?utm_source=generator"
              width="100%"
              height="352"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title="Quiet Hour Music on Spotify"
            />
          </div>
          <a
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent"
            href="https://open.spotify.com/artist/4GAsFrKcab0iBgLoEEJqeW?si=QvbS-7FwTYOzglI986boSw"
            target="_blank"
            rel="noreferrer"
          >
            Open Spotify artist page
            <span aria-hidden="true">↗</span>
          </a>
        </article>
      </div>
    </SiteShell>
  );
}
