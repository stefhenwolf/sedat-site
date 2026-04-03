import Image from "next/image";
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

export default function PhotographyPage() {
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
