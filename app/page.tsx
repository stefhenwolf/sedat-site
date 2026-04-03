import Link from "next/link";
import Image from "next/image";
import { SiteShell } from "./components/site-shell";

export default function Home() {
  return (
    <SiteShell
      active="Home"
      eyebrow="Home"
      title={
        <>
          A quieter,
          <br />
          more editorial home
          <br />
          for product work.
        </>
      }
      intro="Doctor, app builder, and maker of focused digital products with an emphasis on calm interfaces, product clarity, and polished execution."
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

            <div className="mt-6 overflow-hidden rounded-[1.4rem] border border-white/60 bg-[linear-gradient(135deg,rgba(27,107,203,0.14),rgba(255,255,255,0.65))] p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">
                Official app symbol
              </p>
              <p className="mt-2 text-sm leading-7 text-foreground/72">
                The same CameraPick symbol used in the iOS app, now carried
                through to the website for stronger continuity.
              </p>
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
      <div className="grid gap-8 border-b border-border/70 pb-10 lg:grid-cols-[140px_minmax(0,1fr)]">
        <div className="text-xs font-semibold uppercase tracking-[0.28em] text-accent/90">
          About
        </div>

        <div>
          <div className="inline-flex items-center gap-3 rounded-full border border-border bg-surface-strong px-4 py-2 text-sm text-foreground/75">
            <span className="h-2 w-2 rounded-full bg-accent" />
            Doctor
            <span className="text-foreground/35">/</span>
            App Builder
          </div>

          <p className="mt-8 max-w-2xl text-lg leading-9 text-foreground/78">
            I build products that feel more like well-edited publications than
            noisy dashboards. The goal is simple: fewer rough edges, stronger
            trust, and software that feels considered from the first screen
            onward.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <a
              className="inline-flex min-w-[220px] items-center justify-center rounded-full bg-[#181818] px-6 py-3 text-sm font-semibold !text-white transition-transform duration-300 hover:-translate-y-0.5"
              href="mailto:setadpala@gmail.com"
              style={{ color: "#ffffff" }}
            >
              Start a conversation
            </a>
            <Link
              className="inline-flex min-w-[220px] items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground/80 transition-colors duration-300 hover:bg-surface-strong"
              href="/apps"
            >
              View apps
            </Link>
          </div>
        </div>
      </div>
    </SiteShell>
  );
}
