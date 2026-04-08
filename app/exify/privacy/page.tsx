import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Exify Privacy Policy",
  description: "Privacy policy for Exify Photo Frames.",
};

const sections = [
  {
    title: "Photos and generated content",
    body: "Exify allows users to select photos, create framed exports, and keep generated outputs inside the app archive. This content is used to provide the app's core functionality.",
  },
  {
    title: "Account and purchases",
    body: "Exify supports Sign in with Apple and offers an optional premium subscription. Purchase information and account-related identifiers may be processed to manage premium access and restore purchases.",
  },
  {
    title: "Tracking",
    body: "Exify is not designed around third-party ad tracking. The app's App Store privacy disclosure should always be treated as the most current source of truth for how Apple categorizes collected data.",
  },
  {
    title: "Support contact",
    body: "For privacy-related questions about Exify Photo Frames, contact setadpala@gmail.com.",
  },
];

export default function ExifyPrivacyPage() {
  return (
    <main className="min-h-screen px-6 py-8 sm:px-10 lg:px-16 lg:py-12">
      <div className="mx-auto flex max-w-4xl flex-col gap-8">
        <Link
          href=".."
          className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-foreground/70 transition-colors hover:text-foreground"
        >
          <span aria-hidden="true">←</span>
          Back to Exify
        </Link>

        <section className="glass-panel soft-ring rounded-[2rem] px-6 py-8 sm:px-8 sm:py-10">
          <p className="text-xs font-semibold uppercase tracking-[0.34em] text-accent">
            Privacy
          </p>
          <h1 className="font-display mt-5 text-4xl tracking-[-0.04em] sm:text-5xl">
            Exify Privacy Policy
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-foreground/72">
            This page summarizes the product-level privacy expectations for
            Exify Photo Frames and should be read together with the latest App
            Store privacy disclosure.
          </p>

          <div className="mt-10 space-y-4">
            {sections.map((section) => (
              <article
                key={section.title}
                className="rounded-[1.4rem] border border-border bg-surface-strong p-5"
              >
                <h2 className="text-xl font-semibold tracking-tight">
                  {section.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-foreground/72">
                  {section.body}
                </p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
