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
  totalViews: "47.2K",
  rank30Day: "5.4K",
  allTimeRank: "95.7K",
  gallery: "129",
  followers: "5",
  following: "24",
};

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
            Live profile metrics sourced dynamically from the public Pexels
            stats page.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-3 lg:grid-cols-6">
            <div className="rounded-[1.2rem] border border-border bg-white/55 px-4 py-4">
              <p className="text-xs uppercase tracking-[0.24em] text-foreground/45">
                Total Views
              </p>
              <p className="mt-2 text-lg font-semibold">{stats.totalViews}</p>
            </div>
            <div className="rounded-[1.2rem] border border-border bg-white/55 px-4 py-4">
              <p className="text-xs uppercase tracking-[0.24em] text-foreground/45">
                30-day rank
              </p>
              <p className="mt-2 text-lg font-semibold">{stats.rank30Day}</p>
            </div>
            <div className="rounded-[1.2rem] border border-border bg-white/55 px-4 py-4">
              <p className="text-xs uppercase tracking-[0.24em] text-foreground/45">
                All-time rank
              </p>
              <p className="mt-2 text-lg font-semibold">{stats.allTimeRank}</p>
            </div>
            <div className="rounded-[1.2rem] border border-border bg-white/55 px-4 py-4">
              <p className="text-xs uppercase tracking-[0.24em] text-foreground/45">
                Gallery
              </p>
              <p className="mt-2 text-lg font-semibold">{stats.gallery}</p>
            </div>
            <div className="rounded-[1.2rem] border border-border bg-white/55 px-4 py-4">
              <p className="text-xs uppercase tracking-[0.24em] text-foreground/45">
                Followers
              </p>
              <p className="mt-2 text-lg font-semibold">{stats.followers}</p>
            </div>
            <div className="rounded-[1.2rem] border border-border bg-white/55 px-4 py-4">
              <p className="text-xs uppercase tracking-[0.24em] text-foreground/45">
                Following
              </p>
              <p className="mt-2 text-lg font-semibold">{stats.following}</p>
            </div>
          </div>

          <a
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent"
            href="https://www.pexels.com/@sedatpala/stats/"
            target="_blank"
            rel="noreferrer"
          >
            Open Pexels stats page
            <span aria-hidden="true">↗</span>
          </a>
        </article>

        <div className="grid gap-4 sm:grid-cols-3">
          {photoPreviews.map((photo) => (
            <article
              key={photo.src}
              className="overflow-hidden rounded-[1.4rem] border border-border bg-surface-strong"
            >
              <Image
                src={photo.src}
                alt={photo.title}
                width={800}
                height={533}
                className="h-64 w-full object-cover"
              />
              <div className="px-5 py-4">
                <p className="text-sm font-semibold text-foreground/80">
                  {photo.title}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </SiteShell>
  );
}
