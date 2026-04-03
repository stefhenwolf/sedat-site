import { SiteShell } from "../components/site-shell";

export default function YouTubePage() {
  return (
    <SiteShell
      active="YouTube"
      eyebrow="YouTube"
      title={
        <>
          Videos for product
          <br />
          explainers, camera
          <br />
          notes, and process.
        </>
      }
      intro="A future-facing media section for structured videos around cameras, products, comparisons, and behind-the-scenes thinking."
    >
      <div className="space-y-5">
        <div className="grid gap-5 lg:grid-cols-2">
          <article className="rounded-[1.5rem] border border-border bg-surface-strong px-5 py-5">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
              Preview
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight">
              Sedat Pala on YouTube
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-foreground/72">
              A direct channel preview area for videos around products, cameras,
              comparisons, and visual notes.
            </p>
            <div className="mt-6 rounded-[1.4rem] border border-border bg-[linear-gradient(135deg,rgba(255,255,255,0.7),rgba(247,236,224,0.9))] p-6">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ff0000] text-2xl text-white">
                  ▶
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-foreground/45">
                    Channel
                  </p>
                  <p className="mt-1 text-xl font-semibold">@sedatpala</p>
                </div>
              </div>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-foreground/72">
                Visit the full channel to watch published videos and future
                uploads in a cleaner YouTube-facing destination.
              </p>
              <a
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent"
                href="https://www.youtube.com/@sedatpala"
                target="_blank"
                rel="noreferrer"
              >
                Open YouTube channel
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </article>

          <article className="rounded-[1.5rem] border border-border bg-surface-strong px-5 py-5">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
              Preview
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight">
              The Quiet Hour Music
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-foreground/72">
              A second YouTube destination focused on the quieter, music-led
              side of the overall media presence.
            </p>
            <div className="mt-6 rounded-[1.4rem] border border-border bg-[linear-gradient(135deg,rgba(255,255,255,0.7),rgba(247,236,224,0.9))] p-6">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ff0000] text-2xl text-white">
                  ▶
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-foreground/45">
                    Channel
                  </p>
                  <p className="mt-1 text-xl font-semibold">@TheQuietHourMusic</p>
                </div>
              </div>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-foreground/72">
                Visit the full channel to explore music-focused uploads and
                related visual atmosphere.
              </p>
              <a
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent"
                href="https://www.youtube.com/@TheQuietHourMusic"
                target="_blank"
                rel="noreferrer"
              >
                Open music channel
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </article>
        </div>
      </div>
    </SiteShell>
  );
}
