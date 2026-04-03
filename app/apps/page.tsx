import Image from "next/image";
import { SiteShell } from "../components/site-shell";

export default function AppsPage() {
  return (
    <SiteShell
      active="Apps"
      eyebrow="Apps"
      title={
        <>
          Focused products,
          <br />
          clearer utility,
          <br />
          stronger decisions.
        </>
      }
      intro="A clearer view of current app work, what each product is for, and why the user should care."
      aside={
        <>
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-accent">
            Featured app
          </p>
          <div className="mt-6 rounded-[1.5rem] border border-border bg-[linear-gradient(180deg,rgba(255,255,255,0.82),rgba(246,236,224,0.64))] p-6">
            <div className="flex items-start gap-5">
              <div className="h-[72px] w-[72px] shrink-0 overflow-hidden rounded-[1.35rem] border border-border/80 shadow-[0_14px_32px_rgba(26,49,92,0.16)]">
                <Image
                  src="/camerapick-icon.png"
                  alt="CameraPick app icon"
                  width={72}
                  height={72}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="min-w-0">
                <div className="flex flex-col items-start gap-3">
                  <div className="rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-accent">
                    Live
                  </div>
                  <h2 className="min-w-0 text-balance font-display text-[2.2rem] leading-none">
                    CameraPick
                  </h2>
                </div>
                <p className="mt-4 text-sm leading-7 text-foreground/70">
                  A cleaner way to discover cameras and lenses, compare models,
                  and make better gear decisions with less friction.
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-border/80 bg-surface px-4 py-4">
                <p className="text-xs uppercase tracking-[0.24em] text-foreground/45">
                  Platform
                </p>
                <p className="mt-2 text-sm font-semibold">iPhone / iPad</p>
              </div>
              <div className="rounded-2xl border border-border/80 bg-surface px-4 py-4">
                <p className="text-xs uppercase tracking-[0.24em] text-foreground/45">
                  Category
                </p>
                <p className="mt-2 text-sm font-semibold">Photo &amp; Video</p>
              </div>
              <div className="rounded-2xl border border-border/80 bg-surface px-4 py-4">
                <p className="text-xs uppercase tracking-[0.24em] text-foreground/45">
                  Value
                </p>
                <p className="mt-2 text-sm font-semibold">Comparison clarity</p>
              </div>
            </div>

            <a
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent"
              href="https://camerapick.sedatpala.site"
              target="_blank"
              rel="noreferrer"
            >
              Visit product
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </>
      }
    >
      <div className="grid gap-6 lg:grid-cols-[260px_minmax(0,1fr)]">
        <aside className="rounded-[1.6rem] border border-border bg-surface-strong p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
            Apps list
          </p>

          <div className="mt-5 space-y-3">
            <a
              href="https://camerapick.sedatpala.site"
              target="_blank"
              rel="noreferrer"
              className="block rounded-[1.2rem] border border-border bg-white/55 px-4 py-4 transition-colors hover:bg-white/75"
            >
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border bg-surface text-xs font-semibold text-accent">
                  01
                </div>
                <div>
                  <p className="text-sm font-semibold">CameraPick</p>
                  <p className="mt-1 text-sm text-foreground/65">
                    Camera comparison app
                  </p>
                </div>
              </div>
            </a>
          </div>
        </aside>

        <div className="grid gap-5">
          <article className="rounded-[1.6rem] border border-border bg-surface-strong p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
              Current app
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              CameraPick
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-8 text-foreground/72">
              CameraPick is built for people researching their next camera or
              lens. It reduces friction around comparing options, scanning
              specs, and moving toward the right purchase with more confidence.
            </p>
          </article>

          <div className="grid gap-5 lg:grid-cols-2">
            <article className="rounded-[1.6rem] border border-border bg-surface-strong p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
                What it does
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-foreground/72">
                <li>Compare cameras and lenses side by side.</li>
                <li>Review core specs without spreadsheet fatigue.</li>
                <li>Open official product pages and pricing references.</li>
              </ul>
            </article>

            <article className="rounded-[1.6rem] border border-border bg-surface-strong p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
                Why it matters
              </p>
              <p className="mt-4 text-sm leading-8 text-foreground/72">
                The product is designed to make expensive buying decisions feel
                calmer, cleaner, and more trustworthy through stronger
                hierarchy and reduced noise.
              </p>
            </article>
          </div>

          <article className="rounded-[1.6rem] border border-border bg-surface-strong p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
              Product philosophy
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight">
              Calm software is a product decision.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-8 text-foreground/72">
              Good product design is often subtraction. The fewer things a user
              has to decode, the more premium and trustworthy the experience
              feels.
            </p>
          </article>
        </div>
      </div>
    </SiteShell>
  );
}
