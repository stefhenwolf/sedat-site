import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CameraPick Privacy Policy",
  description: "Privacy policy for CameraPick.",
};

const sections = [
  {
    title: "Data used to track you",
    body: "According to the App Store listing, data that may be used to track users across apps and websites can include location, identifiers, and usage data.",
  },
  {
    title: "Data linked to you",
    body: "The App Store listing indicates that coarse location, device identifiers, usage data such as product interaction and advertising data, and performance diagnostics may be collected and linked to identity for third-party advertising and analytics.",
  },
  {
    title: "Data not linked to you",
    body: "Crash-related diagnostics may also be collected for analytics without being linked to identity, based on the information currently shown in the App Store privacy section.",
  },
  {
    title: "Source and contact",
    body: "This page summarizes the privacy information publicly shown on the CameraPick App Store listing. For privacy-related questions, contact setadpala@gmail.com.",
  },
];

export default function CameraPickPrivacyPage() {
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
            Privacy
          </p>
          <h1 className="font-display mt-5 text-4xl tracking-[-0.04em] sm:text-5xl">
            CameraPick Privacy Policy
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-foreground/72">
            This page summarizes the privacy disclosures visible on the App
            Store listing for CameraPick as of April 3, 2026.
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
