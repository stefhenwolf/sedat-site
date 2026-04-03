import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CameraPick Privacy Policy",
  description: "Privacy policy for CameraPick.",
};

const sections = [
  {
    title: "Information",
    body: "CameraPick may collect limited technical and usage information necessary to operate the app, improve reliability, and understand overall product quality.",
  },
  {
    title: "How data is used",
    body: "Any collected information is used to provide app functionality, respond to support requests, diagnose issues, and improve the experience over time.",
  },
  {
    title: "Third-party services",
    body: "The app may rely on third-party infrastructure or analytics providers. Those services may process limited technical information according to their own policies.",
  },
  {
    title: "Contact",
    body: "For any privacy-related question, request, or concern, contact hello@sedatpala.site.",
  },
];

export default function CameraPickPrivacyPage() {
  return (
    <main className="min-h-screen px-6 py-8 sm:px-10 lg:px-16 lg:py-12">
      <div className="mx-auto flex max-w-4xl flex-col gap-8">
        <a
          href="/camerapick"
          className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-foreground/70 transition-colors hover:text-foreground"
        >
          <span aria-hidden="true">←</span>
          Back to CameraPick
        </a>

        <section className="glass-panel soft-ring rounded-[2rem] px-6 py-8 sm:px-8 sm:py-10">
          <p className="text-xs font-semibold uppercase tracking-[0.34em] text-accent">
            Privacy
          </p>
          <h1 className="font-display mt-5 text-4xl tracking-[-0.04em] sm:text-5xl">
            CameraPick Privacy Policy
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-foreground/72">
            This page provides a simple overview of how CameraPick may handle
            data in connection with the app and related support communication.
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
