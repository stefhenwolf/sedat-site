import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CameraPick",
  description:
    "CameraPick helps you compare cameras, understand trade-offs, and choose the right gear with confidence.",
};

export default function CameraPickPage() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden px-6 py-8 sm:px-10 lg:px-16 lg:py-12">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-[-18%] h-[34rem] bg-[radial-gradient(circle_at_top,rgba(193,145,104,0.28),transparent_45%)]" />
        <div className="absolute left-[-10%] top-[18%] h-80 w-80 rounded-full bg-[radial-gradient(circle,_rgba(255,255,255,0.5),_transparent_60%)] blur-3xl" />
        <div className="absolute bottom-[-8%] right-[-6%] h-96 w-96 rounded-full bg-[radial-gradient(circle,_rgba(124,84,53,0.24),_transparent_58%)] blur-3xl" />
      </div>

      <div className="mx-auto flex max-w-7xl flex-col gap-8">
        <div className="flex items-center justify-between">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-foreground/70 transition-colors hover:text-foreground"
          >
            <span aria-hidden="true">←</span>
            Sedat Pala
          </a>

          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-strong px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            iPhone App
          </div>
        </div>

        <section className="glass-panel soft-ring overflow-hidden rounded-[2rem]">
          <div className="grid gap-10 px-6 py-8 sm:px-8 sm:py-10 lg:grid-cols-[1.2fr_0.8fr] lg:px-12 lg:py-12">
            <div className="flex flex-col justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.34em] text-accent">
                  CameraPick
                </p>
                <h1 className="font-display mt-6 max-w-4xl text-5xl leading-[0.94] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
                  Choose the right camera without the noise.
                </h1>
                <p className="mt-8 max-w-2xl text-base leading-8 text-foreground/72 sm:text-lg">
                  CameraPick turns complex camera research into a calm, premium
                  mobile experience. Compare models, understand trade-offs, and
                  move toward the right gear with confidence.
                </p>
              </div>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="/camerapick/support"
                  className="inline-flex items-center justify-center rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-transform duration-300 hover:-translate-y-0.5"
                >
                  Support
                </a>
                <a
                  href="/camerapick/privacy"
                  className="inline-flex items-center justify-center rounded-full border border-border bg-surface-strong px-6 py-3 text-sm font-semibold text-foreground/80 transition-colors duration-300 hover:bg-white/60 dark:hover:bg-white/5"
                >
                  Privacy Policy
                </a>
              </div>
            </div>

            <aside className="rounded-[1.75rem] border border-border bg-[linear-gradient(180deg,rgba(255,255,255,0.88),rgba(247,236,224,0.72))] p-5 shadow-[0_18px_60px_rgba(66,44,23,0.12)] dark:bg-[linear-gradient(180deg,rgba(61,42,30,0.92),rgba(30,21,16,0.9))] sm:p-6">
              <div className="rounded-[1.4rem] border border-border/80 bg-surface p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-foreground/45">
                      Built for
                    </p>
                    <p className="mt-2 text-2xl font-semibold">Clear buying decisions</p>
                  </div>
                  <div className="rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-accent">
                    Live
                  </div>
                </div>

                <div className="mt-8 space-y-4">
                  <div className="rounded-2xl border border-border/80 bg-surface-strong px-4 py-4">
                    <p className="text-xs uppercase tracking-[0.24em] text-foreground/45">
                      Core value
                    </p>
                    <p className="mt-2 text-sm leading-7 text-foreground/75">
                      Fast comparison across camera bodies and lenses, without
                      spreadsheet fatigue.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-border/80 bg-surface-strong px-4 py-4">
                    <p className="text-xs uppercase tracking-[0.24em] text-foreground/45">
                      Product tone
                    </p>
                    <p className="mt-2 text-sm leading-7 text-foreground/75">
                      Minimal, editorial, and easy to trust when choices get
                      expensive.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-border/80 bg-surface-strong px-4 py-4">
                    <p className="text-xs uppercase tracking-[0.24em] text-foreground/45">
                      Availability
                    </p>
                    <p className="mt-2 text-sm leading-7 text-foreground/75">
                      Region-aware product discovery designed for real purchase
                      journeys.
                    </p>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-3">
          <article className="glass-panel soft-ring rounded-[1.6rem] p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
              Compare faster
            </p>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight">
              Specs that stay readable
            </h2>
            <p className="mt-4 text-sm leading-7 text-foreground/72">
              Key differences are surfaced clearly, so users spend less time
              decoding tables and more time deciding what matters.
            </p>
          </article>

          <article className="glass-panel soft-ring rounded-[1.6rem] p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
              Buy smarter
            </p>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight">
              Context for real trade-offs
            </h2>
            <p className="mt-4 text-sm leading-7 text-foreground/72">
              CameraPick makes the gap between “good enough” and “worth it”
              easier to understand before money is on the line.
            </p>
          </article>

          <article className="glass-panel soft-ring rounded-[1.6rem] p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
              Feel premium
            </p>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight">
              Quiet, polished product design
            </h2>
            <p className="mt-4 text-sm leading-7 text-foreground/72">
              The interface stays clean and measured, giving research-heavy
              flows a calmer and more trustworthy feel.
            </p>
          </article>
        </section>
      </div>
    </main>
  );
}
