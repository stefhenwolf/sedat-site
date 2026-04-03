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
          Calm product thinking,
          <br />
          visual taste,
          <br />
          and shipped work.
        </>
      }
      intro="A more refined home for product notes, software experiments, media links, and selected work across apps, photography, music, and video."
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
                  Discover cameras and lenses, compare models side by side, and
                  make cleaner buying decisions with less noise.
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
                  Focus
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
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
        <article className="rounded-[1.6rem] border border-border bg-surface-strong p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
            About
          </p>
          <div className="mt-5 inline-flex items-center gap-3 rounded-full border border-border bg-white/55 px-4 py-2 text-sm text-foreground/75">
            <span className="h-2 w-2 rounded-full bg-accent" />
            Doctor
            <span className="text-foreground/35">/</span>
            App Builder
          </div>

          <p className="mt-6 max-w-2xl text-lg leading-9 text-foreground/78">
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
        </article>

        <article className="rounded-[1.6rem] border border-border bg-surface-strong p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
            Journal direction
          </p>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight">
            A cleaner portfolio structure.
          </h2>
          <p className="mt-4 text-sm leading-8 text-foreground/72">
            This site is moving toward a more editorial format: separate media
            sections, clearer app pages, and stronger visual continuity between
            web presence and shipped products.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className="rounded-[1.2rem] border border-border/80 bg-white/50 px-4 py-4">
              <p className="text-xs uppercase tracking-[0.24em] text-foreground/45">
                Sections
              </p>
              <p className="mt-2 text-sm font-semibold">Apps, YouTube, Photos, Music</p>
            </div>
            <div className="rounded-[1.2rem] border border-border/80 bg-white/50 px-4 py-4">
              <p className="text-xs uppercase tracking-[0.24em] text-foreground/45">
                Direction
              </p>
              <p className="mt-2 text-sm font-semibold">Calm, premium, readable</p>
            </div>
          </div>
        </article>
      </div>
    </SiteShell>
  );
}
