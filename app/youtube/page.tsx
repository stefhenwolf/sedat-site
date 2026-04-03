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
        <article className="rounded-[1.5rem] border border-border bg-surface-strong px-5 py-5">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
            Direction
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight">
            Product explainers, comparisons, and visual notes.
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-foreground/72">
            Structured like a journal instead of a loud content feed, with room
            for practical, well-edited videos.
          </p>
        </article>
      </div>
    </SiteShell>
  );
}
