import Image from "next/image";
import { unstable_noStore as noStore } from "next/cache";
import { SiteShell } from "../components/site-shell";

const photoPreviews = [
  {
    src: "https://images.pexels.com/photos/36858473/pexels-photo-36858473.jpeg?cs=srgb&dl=pexels-sedatpala-36858473.jpg&fm=jpg",
    title: "Bosphorus frame",
  },
  {
    src: "https://images.pexels.com/photos/36858471/pexels-photo-36858471.jpeg?cs=srgb&dl=pexels-sedatpala-36858471.jpg&fm=jpg",
    title: "Hillside view",
  },
  {
    src: "https://images.pexels.com/photos/36858441/pexels-photo-36858441.jpeg?cs=srgb&dl=pexels-sedatpala-36858441.jpg&fm=jpg",
    title: "Coastal texture",
  },
];

const fallbackStats = {
  totalViews: "54.8K",
  rank30Day: "3K",
  allTimeRank: "92K",
  gallery: "188",
  followers: "9",
  following: "33",
};

const statDetails = [
  {
    key: "rank30Day",
    label: "30-day rank",
    description: "Recent traction across the profile.",
  },
  {
    key: "allTimeRank",
    label: "All-time rank",
    description: "Long-tail standing on Pexels.",
  },
  {
    key: "gallery",
    label: "Gallery",
    description: "Published photographs in the archive.",
  },
  {
    key: "followers",
    label: "Followers",
    description: "People tracking new uploads.",
  },
  {
    key: "following",
    label: "Following",
    description: "Accounts followed for reference.",
  },
] as const;

function extractStatValue(html: string, label: string) {
  const escapedLabel = label.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const match = html.match(new RegExp(`${escapedLabel}\\s*([0-9.]+[KMBT]?)`, "i"));
  return match?.[1] ?? null;
}

async function getPexelsStats() {
  noStore();

  try {
    const response = await fetch("https://www.pexels.com/@sedatpala/stats/", {
      headers: {
        "user-agent":
          "Mozilla/5.0 (compatible; SedatSiteBot/1.0; +https://sedatpala.site)",
      },
      cache: "no-store",
    });

    if (!response.ok) {
      return fallbackStats;
    }

    const html = await response.text();

    return {
      totalViews: extractStatValue(html, "Total Views") ?? fallbackStats.totalViews,
      rank30Day: extractStatValue(html, "30-day rank") ?? fallbackStats.rank30Day,
      allTimeRank:
        extractStatValue(html, "All-time rank") ?? fallbackStats.allTimeRank,
      gallery: extractStatValue(html, "Gallery") ?? fallbackStats.gallery,
      followers: extractStatValue(html, "Followers") ?? fallbackStats.followers,
      following: extractStatValue(html, "Following") ?? fallbackStats.following,
    };
  } catch {
    return fallbackStats;
  }
}

export default async function PhotographyPage() {
  const stats = await getPexelsStats();

  return (
    <SiteShell
      active="Photography"
      eyebrow="Photography"
      title={
        <>
          Visual work shaped
          <br />
          by quiet frames,
          <br />
          light, and texture.
        </>
      }
      intro="A dedicated space for photography notes, image-making interests, and field observations around cameras and visual taste."
    >
      <div className="space-y-6">
        <div className="grid gap-5 lg:grid-cols-2">
          <article className="rounded-[1.5rem] border border-border bg-surface-strong p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
              Preview
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight">
              Pexels profile
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-foreground/72">
              A live visual preview sourced from your Pexels profile, with direct
              access to the full photography page.
            </p>
            <a
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent"
              href="https://www.pexels.com/@sedatpala/"
              target="_blank"
              rel="noreferrer"
            >
              Open Pexels profile
              <span aria-hidden="true">↗</span>
            </a>
          </article>

          <article className="rounded-[1.5rem] border border-border bg-surface-strong p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
              Preview
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight">
              Instagram
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-foreground/72">
              A second photography destination for the more mood-driven and
              social side of the work, linked directly from the photography
              section.
            </p>
            <div className="mt-6 rounded-[1.4rem] border border-border bg-[linear-gradient(135deg,rgba(131,58,180,0.14),rgba(253,29,29,0.1),rgba(252,176,69,0.12))] p-6">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#833ab4,#fd1d1d,#fcb045)] text-2xl text-white">
                  ◎
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-foreground/45">
                    Instagram
                  </p>
                  <p className="mt-1 text-xl font-semibold">@silentgrains</p>
                </div>
              </div>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-foreground/72">
                Visit the Instagram profile for a more immediate stream of
                photography and visual mood.
              </p>
              <a
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent"
                href="https://www.instagram.com/silentgrains/"
                target="_blank"
                rel="noreferrer"
              >
                Open Instagram profile
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </article>
        </div>

        <article className="rounded-[1.5rem] border border-border bg-surface-strong p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
            Pexels stats
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight">
            Current profile snapshot
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-foreground/72">
            A curated snapshot of the current Pexels profile metrics, kept in
            sync with the latest profile view.
          </p>

          <div className="mt-6 grid gap-4 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
            <div className="rounded-[1.5rem] border border-border bg-[linear-gradient(145deg,rgba(255,255,255,0.82),rgba(247,238,227,0.92))] p-5">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.26em] text-accent">
                    Reach
                  </p>
                  <p className="mt-3 text-5xl font-semibold tracking-[-0.05em] text-foreground sm:text-6xl">
                    {stats.totalViews}
                  </p>
                </div>
                <div className="rounded-full border border-border bg-white/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-foreground/55">
                  Updated manually
                </div>
              </div>

              <p className="mt-4 max-w-lg text-sm leading-7 text-foreground/70">
                A quick read on how the photography archive is performing right now,
                anchored by total profile views and aligned with the latest creator-side profile stats.
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                <div className="min-w-[140px] rounded-[1.1rem] border border-border bg-white/72 px-4 py-3">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-foreground/45">
                    30-day rank
                  </p>
                  <p className="mt-2 text-xl font-semibold">{stats.rank30Day}</p>
                </div>
                <div className="min-w-[140px] rounded-[1.1rem] border border-border bg-white/72 px-4 py-3">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-foreground/45">
                    All-time rank
                  </p>
                  <p className="mt-2 text-xl font-semibold">{stats.allTimeRank}</p>
                </div>
              </div>

              <a
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent"
                href="https://www.pexels.com/@sedatpala/stats/"
                target="_blank"
                rel="noreferrer"
              >
                Open Pexels stats page
                <span aria-hidden="true">↗</span>
              </a>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {statDetails.map((item) => (
                <div
                  key={item.key}
                  className="rounded-[1.2rem] border border-border bg-white/55 px-4 py-4"
                >
                  <p className="text-xs uppercase tracking-[0.24em] text-foreground/45">
                    {item.label}
                  </p>
                  <p className="mt-2 text-2xl font-semibold tracking-[-0.03em]">
                    {stats[item.key]}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-foreground/62">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 rounded-[1.5rem] border border-border bg-[linear-gradient(180deg,rgba(255,255,255,0.36),rgba(255,255,255,0.18))] p-4 sm:p-5">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
                  Selected frames
                </p>
                <h3 className="mt-2 text-xl font-semibold tracking-tight">
                  Recent visual excerpts
                </h3>
              </div>
              <p className="max-w-xl text-sm leading-7 text-foreground/68">
                A small preview strip from the public gallery, highlighting landscape
                texture, distance, and framing.
              </p>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              {photoPreviews.map((photo, index) => (
                <article
                  key={photo.src}
                  className="group overflow-hidden rounded-[1.35rem] border border-border bg-surface-strong"
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={photo.src}
                      alt={photo.title}
                      width={800}
                      height={533}
                      className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/32 via-black/6 to-transparent" />
                    <div className="absolute left-4 top-4 rounded-full border border-white/28 bg-black/18 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-white backdrop-blur-sm">
                      Frame {index + 1}
                    </div>
                  </div>
                  <div className="px-5 py-4">
                    <p className="text-sm font-semibold text-foreground/82">
                      {photo.title}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </article>
      </div>
    </SiteShell>
  );
}
