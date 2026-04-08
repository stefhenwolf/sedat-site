import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Exify Photo Frames",
  description:
    "Create elegant EXIF photo frames, customize the presentation, and export polished photography-ready results.",
};

const features = [
  "Turn ordinary photos into premium EXIF frame exports",
  "Customize frame style, typography, and visual presentation",
  "Display key camera metadata in a clean editorial layout",
  "Export polished results ready for sharing or archiving",
  "Archive generated outputs inside the app",
  "Unlock unlimited exports with Exify Premium",
];

const highlights = [
  {
    eyebrow: "Product",
    title: "Elegant EXIF framing for photographers",
    body: "Exify is designed for people who want their images to feel finished, presentation-ready, and more premium without fighting noisy tools.",
  },
  {
    eyebrow: "Premium",
    title: "Free to start, stronger when you need more",
    body: "Users can explore the app with a free quota, then upgrade to Exify Premium for unlimited EXIF frame exports and a smoother production workflow.",
  },
  {
    eyebrow: "Platforms",
    title: "Built for iPhone, with a focused visual experience",
    body: "The app is optimized for a calm, polished mobile flow that keeps the output front and center instead of burying it behind heavy editing chrome.",
  },
];

export default function ExifyPage() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden px-6 py-8 sm:px-10 lg:px-16 lg:py-12">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-[-18%] h-[34rem] bg-[radial-gradient(circle_at_top,rgba(85,154,255,0.26),transparent_44%)]" />
        <div className="absolute left-[-10%] top-[18%] h-80 w-80 rounded-full bg-[radial-gradient(circle,_rgba(255,255,255,0.45),_transparent_62%)] blur-3xl" />
        <div className="absolute bottom-[-8%] right-[-6%] h-96 w-96 rounded-full bg-[radial-gradient(circle,_rgba(48,89,190,0.22),_transparent_58%)] blur-3xl" />
      </div>

      <div className="mx-auto flex max-w-7xl flex-col gap-8">
        <div className="flex items-center justify-between">
          <a
            href="https://sedatpala.site"
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
                  Exify Photo Frames
                </p>
                <div className="mt-6 flex items-center gap-4">
                  <div className="h-[88px] w-[88px] shrink-0 overflow-hidden rounded-[1.65rem] border border-white/60 shadow-[0_20px_40px_rgba(24,56,113,0.18)]">
                    <Image
                      src="/exify-icon.png"
                      alt="Exify app icon"
                      width={88}
                      height={88}
                      className="h-full w-full object-cover"
                      priority
                    />
                  </div>
                  <div className="rounded-full border border-border bg-surface-strong px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-accent">
                    Official app symbol
                  </div>
                </div>
                <h1 className="font-display mt-6 max-w-4xl text-5xl leading-[0.94] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
                  Turn photos into cleaner, more premium EXIF frames.
                </h1>
                <p className="mt-8 max-w-2xl text-base leading-8 text-foreground/72 sm:text-lg">
                  Exify helps users transform everyday images into polished EXIF
                  frame exports with a calmer, more editorial presentation. The
                  result feels more like a finished print than a raw screenshot.
                </p>
              </div>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <Link
                  href="support"
                  className="inline-flex min-w-[180px] items-center justify-center rounded-full bg-[#181818] px-6 py-3 text-sm font-semibold !text-white transition-transform duration-300 hover:-translate-y-0.5"
                  style={{ color: "#ffffff" }}
                >
                  Support
                </Link>
                <Link
                  href="privacy"
                  className="inline-flex min-w-[180px] items-center justify-center rounded-full border border-border bg-surface-strong px-6 py-3 text-sm font-semibold text-foreground/80 transition-colors duration-300 hover:bg-white/60 dark:hover:bg-white/5"
                >
                  Privacy Policy
                </Link>
              </div>
            </div>

            <aside className="rounded-[1.75rem] border border-border bg-[linear-gradient(180deg,rgba(255,255,255,0.88),rgba(231,239,255,0.72))] p-5 shadow-[0_18px_60px_rgba(27,45,86,0.12)] dark:bg-[linear-gradient(180deg,rgba(26,34,54,0.92),rgba(14,20,35,0.9))] sm:p-6">
              <div className="rounded-[1.4rem] border border-border/80 bg-surface p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-foreground/45">
                      Availability
                    </p>
                    <p className="mt-2 text-2xl font-semibold">Launching on the App Store</p>
                  </div>
                  <div className="rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-accent">
                    New
                  </div>
                </div>

                <div className="mt-8 space-y-4">
                  <div className="rounded-2xl border border-border/80 bg-surface-strong px-4 py-4">
                    <p className="text-xs uppercase tracking-[0.24em] text-foreground/45">
                      Category
                    </p>
                    <p className="mt-2 text-sm leading-7 text-foreground/75">
                      Photo &amp; Video
                    </p>
                  </div>
                  <div className="rounded-2xl border border-border/80 bg-surface-strong px-4 py-4">
                    <p className="text-xs uppercase tracking-[0.24em] text-foreground/45">
                      Compatibility
                    </p>
                    <p className="mt-2 text-sm leading-7 text-foreground/75">
                      Requires iOS 17.0 or later. Built for a focused iPhone workflow.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-border/80 bg-surface-strong px-4 py-4">
                    <p className="text-xs uppercase tracking-[0.24em] text-foreground/45">
                      Monetization
                    </p>
                    <p className="mt-2 text-sm leading-7 text-foreground/75">
                      Free quota with an optional monthly premium subscription for unlimited exports.
                    </p>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="privacy"
                    className="inline-flex items-center rounded-full border border-border px-4 py-2 text-sm font-semibold text-foreground/80 transition-colors hover:bg-surface-strong"
                  >
                    Privacy Policy
                  </Link>
                  <Link
                    href="support"
                    className="inline-flex items-center rounded-full border border-border px-4 py-2 text-sm font-semibold text-foreground/80 transition-colors hover:bg-surface-strong"
                  >
                    Support
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-3">
          {highlights.map((item) => (
            <article key={item.title} className="glass-panel soft-ring rounded-[1.6rem] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
                {item.eyebrow}
              </p>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight">
                {item.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-foreground/72">
                {item.body}
              </p>
            </article>
          ))}
        </section>

        <section className="glass-panel soft-ring rounded-[2rem] px-6 py-8 sm:px-8 sm:py-10">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-accent">
                Features
              </p>
              <h2 className="font-display mt-5 text-4xl tracking-[-0.04em] sm:text-5xl">
                A simpler way to make photography exports feel finished.
              </h2>
              <p className="mt-6 text-base leading-8 text-foreground/72">
                Exify is not trying to be a giant editing suite. It is focused on
                one outcome: helping users create tasteful EXIF frame exports
                that feel intentional, premium, and ready to share.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="rounded-[1.4rem] border border-border bg-surface-strong px-5 py-5"
                >
                  <p className="text-sm font-medium leading-7 text-foreground/80">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
