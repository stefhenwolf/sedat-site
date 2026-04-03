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
          built with editorial
          <br />
          clarity.
        </>
      }
      intro="A small collection of product work shaped around calm interfaces, clearer decisions, and useful software."
      aside={
        <>
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-accent">
            Featured app
          </p>
          <div className="mt-6 rounded-[1.5rem] border border-border bg-[linear-gradient(180deg,rgba(255,255,255,0.82),rgba(246,236,224,0.64))] p-5">
            <div className="flex items-start gap-4">
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
                <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <h2 className="min-w-0 text-balance font-display text-3xl">
                    CameraPick
                  </h2>
                  <div className="shrink-0 rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-accent">
                    Live
                  </div>
                </div>
                <p className="mt-3 text-sm leading-7 text-foreground/70">
                  A cleaner way to discover cameras and lenses, compare models,
                  and make better gear decisions.
                </p>
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
      <div className="space-y-5">
        <article className="rounded-[1.5rem] border border-border bg-surface-strong px-5 py-5">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
            Featured
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight">
            CameraPick
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-foreground/72">
            A cleaner way to discover cameras and lenses, compare models, and
            make better gear decisions with less friction.
          </p>
        </article>

        <article className="rounded-[1.5rem] border border-border bg-surface-strong px-5 py-5">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
            Philosophy
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight">
            Calm software is a product decision.
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-foreground/72">
            Good product design is often subtraction. The fewer things a user
            has to decode, the more premium and trustworthy the experience
            feels.
          </p>
        </article>
      </div>
    </SiteShell>
  );
}
