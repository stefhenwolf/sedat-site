import { SiteShell } from "../components/site-shell";

export default function PhotographyPage() {
  return (
    <SiteShell
      active="Photography"
      eyebrow="Photography"
      title={
        <>
          Visual work shaped
          <br />
          by quiet frames,
          <br />
          light, and texture.
        </>
      }
      intro="A dedicated space for photography notes, image-making interests, and field observations around cameras and visual taste."
    >
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-[1.4rem] border border-border bg-surface-strong px-5 py-5">
          <p className="text-xs uppercase tracking-[0.24em] text-foreground/45">
            Street
          </p>
          <p className="mt-3 text-lg font-semibold">Quiet frames and texture</p>
        </div>
        <div className="rounded-[1.4rem] border border-border bg-surface-strong px-5 py-5">
          <p className="text-xs uppercase tracking-[0.24em] text-foreground/45">
            Portraits
          </p>
          <p className="mt-3 text-lg font-semibold">Natural light and calm tone</p>
        </div>
        <div className="rounded-[1.4rem] border border-border bg-surface-strong px-5 py-5">
          <p className="text-xs uppercase tracking-[0.24em] text-foreground/45">
            Gear
          </p>
          <p className="mt-3 text-lg font-semibold">Field notes and camera picks</p>
        </div>
      </div>
    </SiteShell>
  );
}
