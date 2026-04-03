import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CameraPick Support",
  description: "Support information for CameraPick.",
};

export default function CameraPickSupportPage() {
  return (
    <main className="min-h-screen px-6 py-8 sm:px-10 lg:px-16 lg:py-12">
      <div className="mx-auto flex max-w-4xl flex-col gap-8">
        <Link
          href=".."
          className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-foreground/70 transition-colors hover:text-foreground"
        >
          <span aria-hidden="true">←</span>
          Back to CameraPick
        </Link>

        <section className="glass-panel soft-ring rounded-[2rem] px-6 py-8 sm:px-8 sm:py-10">
          <p className="text-xs font-semibold uppercase tracking-[0.34em] text-accent">
            Support
          </p>
          <h1 className="font-display mt-5 text-4xl tracking-[-0.04em] sm:text-5xl">
            Need help with CameraPick?
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-foreground/72">
            For account questions, bug reports, feature ideas, or partnership
            requests, reach out directly and include as much detail as possible
            so we can help quickly.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-[1.4rem] border border-border bg-surface-strong p-5">
              <p className="text-xs uppercase tracking-[0.24em] text-foreground/45">
                Email
              </p>
              <a
                href="mailto:setadpala@gmail.com?subject=CameraPick%20Support"
                className="mt-3 inline-block text-lg font-semibold"
              >
                setadpala@gmail.com
              </a>
            </div>

            <div className="rounded-[1.4rem] border border-border bg-surface-strong p-5">
              <p className="text-xs uppercase tracking-[0.24em] text-foreground/45">
                Best for
              </p>
              <p className="mt-3 text-lg font-semibold">
                Support, bugs, product feedback
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
