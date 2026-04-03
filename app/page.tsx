import Image from "next/image";

const navigationItems = [
  { label: "Home", href: "#home" },
  { label: "Apps", href: "#apps" },
  { label: "YouTube", href: "#youtube" },
  { label: "Photography", href: "#photography" },
];

export default function Home() {
  return (
    <main
      id="home"
      className="relative isolate min-h-screen overflow-hidden px-6 py-8 text-foreground sm:px-10 lg:px-16 lg:py-12"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[-10%] top-0 h-72 w-72 rounded-full bg-[radial-gradient(circle,_rgba(164,115,76,0.26),_transparent_68%)] blur-3xl" />
        <div className="absolute right-[-8%] top-[18%] h-80 w-80 rounded-full bg-[radial-gradient(circle,_rgba(255,255,255,0.55),_transparent_62%)] blur-3xl" />
        <div className="absolute bottom-[-10%] left-1/3 h-96 w-96 rounded-full bg-[radial-gradient(circle,_rgba(120,82,52,0.18),_transparent_64%)] blur-3xl" />
      </div>

      <section className="glass-panel soft-ring mx-auto w-full max-w-7xl rounded-[2rem] px-6 py-6 sm:px-8 sm:py-8 lg:px-12 lg:py-10">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border/80 pb-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accent">
              Sedat Pala
            </p>
            <p className="mt-2 text-sm text-foreground/65">
              Notes on apps, media, and visual work.
            </p>
          </div>

          <nav className="flex flex-wrap items-center gap-2">
            {navigationItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="rounded-full border border-border bg-surface-strong px-4 py-2 text-sm font-medium text-foreground/78 transition-colors duration-300 hover:bg-white/70"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <header className="border-b border-border/80 pb-8">
          <div className="flex flex-col gap-6 pt-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accent">
                Home
              </p>
              <h1 className="font-display mt-6 max-w-4xl text-5xl leading-[0.96] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
                A quieter,
                <br />
                more editorial home
                <br />
                for product work.
              </h1>
            </div>

            <div className="max-w-md">
              <p className="text-sm font-semibold uppercase tracking-[0.26em] text-accent">
                Notes
              </p>
              <p className="mt-3 text-base leading-8 text-foreground/72">
                Doctor, app builder, and maker of focused digital products with
                an emphasis on calm interfaces, product clarity, and polished
                execution.
              </p>
            </div>
          </div>
        </header>

        <div className="grid gap-10 py-10 lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-14">
          <section className="min-w-0">
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
                  I build products that feel more like well-edited publications
                  than noisy dashboards. The goal is simple: fewer rough edges,
                  stronger trust, and software that feels considered from the
                  first screen onward.
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                  <a
                    className="inline-flex min-w-[220px] items-center justify-center rounded-full bg-[#181818] px-6 py-3 text-sm font-semibold !text-white transition-transform duration-300 hover:-translate-y-0.5"
                    href="mailto:setadpala@gmail.com"
                    style={{ color: "#ffffff" }}
                  >
                    Start a conversation
                  </a>
                  <a
                    className="inline-flex min-w-[220px] items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground/80 transition-colors duration-300 hover:bg-surface-strong"
                    href="#featured-work"
                  >
                    View featured work
                  </a>
                </div>
              </div>
            </div>

            <div
              id="apps"
              className="grid gap-8 border-b border-border/70 py-10 lg:grid-cols-[140px_minmax(0,1fr)]"
            >
              <div className="text-xs font-semibold uppercase tracking-[0.28em] text-accent/90">
                Apps
              </div>

              <div className="space-y-5">
                <article className="rounded-[1.5rem] border border-border bg-surface-strong px-5 py-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
                    Featured
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold tracking-tight">
                    CameraPick
                  </h2>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-foreground/72">
                    A cleaner way to discover cameras and lenses, compare
                    models, and make better gear decisions with less friction.
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
                    Good product design is often subtraction. The fewer things a
                    user has to decode, the more premium and trustworthy the
                    experience feels.
                  </p>
                </article>
              </div>
            </div>

            <div
              id="youtube"
              className="grid gap-8 border-b border-border/70 py-10 lg:grid-cols-[140px_minmax(0,1fr)]"
            >
              <div className="text-xs font-semibold uppercase tracking-[0.28em] text-accent/90">
                YouTube
              </div>

              <div className="space-y-5">
                <article className="rounded-[1.5rem] border border-border bg-surface-strong px-5 py-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
                    Direction
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold tracking-tight">
                    Product explainers, comparisons, and visual notes.
                  </h2>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-foreground/72">
                    A section for future videos around cameras, apps, product
                    breakdowns, and behind-the-scenes work. Structured like a
                    journal instead of a loud content feed.
                  </p>
                </article>
              </div>
            </div>

            <div
              id="photography"
              className="grid gap-8 pt-10 lg:grid-cols-[140px_minmax(0,1fr)]"
            >
              <div className="text-xs font-semibold uppercase tracking-[0.28em] text-accent/90">
                Photography
              </div>

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
            </div>
          </section>

          <aside
            id="featured-work"
            className="glass-panel soft-ring h-fit rounded-[1.75rem] p-6 sm:p-7"
          >
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
                    <h2 className="min-w-0 text-balance font-display text-3xl">CameraPick</h2>
                    <div className="shrink-0 rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-accent">
                      Live
                    </div>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-foreground/70">
                    A cleaner way to discover cameras and lenses, compare
                    models, and make better gear decisions.
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
                    Focus
                  </p>
                  <p className="mt-2 text-sm font-semibold">Comparison clarity</p>
                </div>
                <div className="rounded-2xl border border-border/80 bg-surface px-4 py-4">
                  <p className="text-xs uppercase tracking-[0.24em] text-foreground/45">
                    Feel
                  </p>
                  <p className="mt-2 text-sm font-semibold">Editorial and calm</p>
                </div>
                <div className="rounded-2xl border border-border/80 bg-surface px-4 py-4">
                  <p className="text-xs uppercase tracking-[0.24em] text-foreground/45">
                    Status
                  </p>
                  <p className="mt-2 text-sm font-semibold">Available now</p>
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
