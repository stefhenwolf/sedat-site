import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "CameraPick",
  description:
    "Discover cameras and lenses, compare models side by side, and check official price references with country-based support.",
};

const features = [
  "Browse cameras and lenses in one place",
  "Filter by brand, mount, type, and key specs",
  "Compare products side by side",
  "Save favorites for later",
  "Open official product links directly",
  "Refresh official pricing data",
];

const highlights = [
  {
    eyebrow: "Product",
    title: "Discover cameras and lenses",
    body: "Built for people researching their next camera or lens and wanting a cleaner way to explore real options.",
  },
  {
    eyebrow: "Support",
    title: "Country-based pricing support",
    body: "Official price references and regional context help users compare gear with a more realistic purchase lens.",
  },
  {
    eyebrow: "Platforms",
    title: "Made for iPhone and iPad",
    body: "Available on iPhone and iPad with a lightweight footprint and a focused Photo & Video product experience.",
  },
];

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
                  CameraPick
                </p>
                <div className="mt-6 flex items-center gap-4">
                  <div className="overflow-hidden rounded-[1.65rem] border border-white/60 shadow-[0_20px_40px_rgba(24,56,113,0.18)]">
                    <Image
                      src="/camerapick-icon.png"
                      alt="CameraPick app icon"
                      width={88}
                      height={88}
                      className="h-[88px] w-[88px] object-cover"
                      priority
                    />
                  </div>
                  <div className="rounded-full border border-border bg-surface-strong px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-accent">
                    Official app symbol
                  </div>
                </div>
                <h1 className="font-display mt-6 max-w-4xl text-5xl leading-[0.94] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
                  Discover cameras and lenses with less friction.
                </h1>
                <p className="mt-8 max-w-2xl text-base leading-8 text-foreground/72 sm:text-lg">
                  CameraPick helps users compare models, review key
                  specifications, explore detailed product pages, and check
                  official price references with country-based pricing and
                  language support.
                </p>
              </div>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="https://apps.apple.com/tr/app/camerapick/id6760162723"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-transform duration-300 hover:-translate-y-0.5"
                >
                  View on the App Store
                </a>
                <Link
                  href="support"
                  className="inline-flex items-center justify-center rounded-full border border-border bg-surface-strong px-6 py-3 text-sm font-semibold text-foreground/80 transition-colors duration-300 hover:bg-white/60 dark:hover:bg-white/5"
                >
                  Support
                </Link>
              </div>
            </div>

            <aside className="rounded-[1.75rem] border border-border bg-[linear-gradient(180deg,rgba(255,255,255,0.88),rgba(247,236,224,0.72))] p-5 shadow-[0_18px_60px_rgba(66,44,23,0.12)] dark:bg-[linear-gradient(180deg,rgba(61,42,30,0.92),rgba(30,21,16,0.9))] sm:p-6">
              <div className="rounded-[1.4rem] border border-border/80 bg-surface p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-foreground/45">
                      App Store
                    </p>
                    <p className="mt-2 text-2xl font-semibold">5.0 rating from 4 reviews</p>
                  </div>
                  <div className="rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-accent">
                    Live
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
                      Requires iOS 17.0 or later. Designed for iPhone and iPad.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-border/80 bg-surface-strong px-4 py-4">
                    <p className="text-xs uppercase tracking-[0.24em] text-foreground/45">
                      Monetization
                    </p>
                    <p className="mt-2 text-sm leading-7 text-foreground/75">
                      Free with in-app purchases, including a remove-ads option.
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
                  <a
                    href="https://apps.apple.com/tr/app/camerapick/id6760162723"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center rounded-full border border-border px-4 py-2 text-sm font-semibold text-foreground/80 transition-colors hover:bg-surface-strong"
                  >
                    Open listing
                  </a>
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
                Real App Store functionality, presented with more polish.
              </h2>
              <p className="mt-6 text-base leading-8 text-foreground/72">
                The page now mirrors the app&apos;s actual promise instead of a
                generic concept pitch, so visitors see the same value
                proposition they find in the App Store listing.
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
