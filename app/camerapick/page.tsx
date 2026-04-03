export default function CameraPickPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-12 text-black">
      <div className="mx-auto flex max-w-2xl flex-col gap-6">
        <div className="flex flex-col gap-3">
          <span className="inline-flex w-fit rounded-full bg-black px-3 py-1 text-sm font-medium text-white">
            iPhone App
          </span>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            CameraPick
          </h1>
          <p className="text-lg leading-8 text-black/70">
            CameraPick is a simple and powerful iPhone app that helps you
            compare cameras and choose the right gear for your needs.
          </p>
        </div>

        <ul className="space-y-3 text-base text-black/80">
          <li>Compare camera specs quickly and clearly.</li>
          <li>Browse a clean, minimal, mobile-first interface.</li>
          <li>Discover cameras and lenses with region-aware pricing.</li>
        </ul>

        <div className="flex flex-wrap gap-3 pt-2">
          <a
            href="/support"
            className="inline-flex items-center rounded-lg bg-black px-6 py-3 font-medium text-white transition hover:bg-black/85"
          >
            Support
          </a>
          <a
            href="/privacy"
            className="inline-flex items-center rounded-lg border border-black/15 px-6 py-3 font-medium text-black transition hover:bg-black/5"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </main>
  );
}
