import Link from "next/link";
import type { ReactNode } from "react";

const navigationItems = [
  { label: "Home", href: "/" },
  { label: "Apps", href: "/apps" },
  { label: "YouTube", href: "/youtube" },
  { label: "Photography", href: "/photography" },
  { label: "Music", href: "/music" },
];

type SiteShellProps = {
  active: string;
  eyebrow: string;
  title: ReactNode;
  intro: string;
  children: ReactNode;
  aside?: ReactNode;
};

export function SiteShell({
  active,
  eyebrow,
  title,
  intro,
  children,
  aside,
}: SiteShellProps) {
  return (
    <main className="relative isolate min-h-screen overflow-hidden px-6 py-8 text-foreground sm:px-10 lg:px-16 lg:py-12">
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

          <nav className="flex max-w-full items-center gap-2 overflow-x-auto whitespace-nowrap pb-1">
            {navigationItems.map((item) => {
              const isActive = item.label === active;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`shrink-0 rounded-full border px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                    isActive
                      ? "border-[#181818] bg-[#181818] !text-white"
                      : "border-border bg-surface-strong text-foreground/78 hover:bg-white/70"
                  }`}
                  style={isActive ? { color: "#ffffff" } : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        <header className="border-b border-border/80 pb-8">
          <div className="flex flex-col gap-6 pt-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accent">
                {eyebrow}
              </p>
              <h1 className="font-display mt-6 max-w-4xl text-5xl leading-[0.96] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
                {title}
              </h1>
            </div>

            <div className="max-w-md">
              <p className="text-sm font-semibold uppercase tracking-[0.26em] text-accent">
                Notes
              </p>
              <p className="mt-3 text-base leading-8 text-foreground/72">
                {intro}
              </p>
            </div>
          </div>
        </header>

        <div
          className={`grid gap-10 py-10 ${
            aside ? "lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-14" : ""
          }`}
        >
          <section className="min-w-0">{children}</section>
          {aside ? (
            <aside className="glass-panel soft-ring h-fit rounded-[1.75rem] p-6 sm:p-7">
              {aside}
            </aside>
          ) : null}
        </div>
      </section>
    </main>
  );
}
