import Image from "next/image";

export default function Home() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden px-6 py-8 text-foreground sm:px-10 lg:px-16 lg:py-12">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[-10%] top-0 h-72 w-72 rounded-full bg-[radial-gradient(circle,_rgba(164,115,76,0.26),_transparent_68%)] blur-3xl" />
        <div className="absolute right-[-8%] top-[18%] h-80 w-80 rounded-full bg-[radial-gradient(circle,_rgba(255,255,255,0.55),_transparent_62%)] blur-3xl" />
        <div className="absolute bottom-[-10%] left-1/3 h-96 w-96 rounded-full bg-[radial-gradient(circle,_rgba(120,82,52,0.18),_transparent_64%)] blur-3xl" />
      </div>

      <section className="glass-panel soft-ring mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-7xl flex-col rounded-[2rem] px-6 py-6 sm:px-8 sm:py-8 lg:px-12 lg:py-10">
        <header className="flex flex-col gap-6 border-b border-border/80 pb-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accent">
              Sedat Pala
            </p>
            <p className="mt-3 max-w-xl text-sm leading-6 text-foreground/70 sm:text-base">
              Clinical precision meets product taste. A personal studio for
              thoughtful software and refined digital experiences.
            </p>
          </div>

          <a
            className="inline-flex items-center justify-center rounded-full border border-border bg-surface-strong px-5 py-3 text-sm font-semibold text-foreground transition-transform duration-300 hover:-translate-y-0.5"
            href="mailto:setadpala@gmail.com"
          >
            Start a conversation
          </a>
        </header>

        <div className="grid flex-1 gap-10 py-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-end lg:gap-14">
          <section className="flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-3 rounded-full border border-border bg-surface-strong px-4 py-2 text-sm text-foreground/75">
                <span className="h-2 w-2 rounded-full bg-accent" />
                Doctor
                <span className="text-foreground/35">/</span>
                App Builder
              </div>

              <h1 className="font-display mt-8 max-w-4xl text-5xl leading-[0.94] tracking-[-0.04em] sm:text-6xl lg:text-8xl">
                Building calm,
                <br />
                premium digital
                <br />
                products.
              </h1>

              <p className="mt-8 max-w-2xl text-base leading-8 text-foreground/72 sm:text-lg">
                I design and ship focused tools with an emphasis on clarity,
                trust, and elegant execution. The result is software that feels
                considered from the very first click.
              </p>
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                className="inline-flex items-center justify-center rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-transform duration-300 hover:-translate-y-0.5"
                href="https://camerapick.sedatpala.site"
                target="_blank"
                rel="noreferrer"
              >
                Explore CameraPick
              </a>
              <a
                className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground/80 transition-colors duration-300 hover:bg-surface-strong"
                href="#featured-work"
              >
                View featured work
              </a>
            </div>
          </section>

          <aside
            id="featured-work"
            className="glass-panel soft-ring rounded-[1.75rem] p-6 sm:p-7"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-accent">
              Featured app
            </p>

            <div className="mt-8 rounded-[1.5rem] border border-border bg-[linear-gradient(180deg,rgba(255,255,255,0.82),rgba(246,236,224,0.64))] p-5 dark:bg-[linear-gradient(180deg,rgba(59,42,30,0.82),rgba(34,24,18,0.82))]">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="overflow-hidden rounded-[1.35rem] border border-border/80 shadow-[0_14px_32px_rgba(26,49,92,0.16)]">
                    <Image
                      src="/camerapick-icon.png"
                      alt="CameraPick app icon"
                      width={72}
                      height={72}
                      className="h-[72px] w-[72px] object-cover"
                    />
                  </div>
                  <div>
                    <h2 className="font-display text-3xl">CameraPick</h2>
                    <p className="mt-3 text-sm leading-7 text-foreground/70">
                      A cleaner way to discover, compare, and choose the right
                      camera with confidence.
                    </p>
                  </div>
                </div>
                <div className="rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-accent">
                  Live
                </div>
              </div>
              <div className="mt-6 overflow-hidden rounded-[1.4rem] border border-white/60 bg-[linear-gradient(135deg,rgba(27,107,203,0.14),rgba(255,255,255,0.65))] p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">
                  Official app symbol
                </p>
                <p className="mt-2 text-sm leading-7 text-foreground/72">
                  The same CameraPick symbol used in the iOS app, now carried
                  through to the website for stronger product continuity.
                </p>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-border/80 bg-surface px-4 py-4">
                  <p className="text-xs uppercase tracking-[0.24em] text-foreground/45">
                    Focus
                  </p>
                  <p className="mt-2 text-sm font-semibold">Buyer clarity</p>
                </div>
                <div className="rounded-2xl border border-border/80 bg-surface px-4 py-4">
                  <p className="text-xs uppercase tracking-[0.24em] text-foreground/45">
                    Feel
                  </p>
                  <p className="mt-2 text-sm font-semibold">Fast and editorial</p>
                </div>
                <div className="rounded-2xl border border-border/80 bg-surface px-4 py-4">
                  <p className="text-xs uppercase tracking-[0.24em] text-foreground/45">
                    Status
                  </p>
                  <p className="mt-2 text-sm font-semibold">Publicly available</p>
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
          </aside>
        </div>
      </section>
    </main>
  );
}
