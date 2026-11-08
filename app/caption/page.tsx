const STUDIO_URL = "https://claude.ai/artifact/7nUhTz2QY8JcAu3rLZ3KBH";

const links = [
  { name: "Instagram profili", href: "https://www.instagram.com/silentgrains/" },
  { name: "Pexels", href: "https://www.pexels.com/@sedatpala" },
  { name: "Exify", href: "https://exify.sedatpala.site" },
];

export default function CaptionAdmin() {
  return (
    <div className="w-full max-w-xl flex flex-col gap-8">
      <header className="flex items-baseline justify-between gap-4 border-b border-[#2a3035] pb-4">
        <h1 className="font-[family-name:var(--font-display)] text-4xl">
          Caption <span className="text-[#d9a65a]">Studio</span>
        </h1>
        <form action="/api/caption-logout" method="post">
          <button className="font-mono text-xs uppercase tracking-[0.1em] text-[#8d959b] hover:text-[#e7e4de]">
            Çıkış
          </button>
        </form>
      </header>

      <section className="flex flex-col gap-4 rounded-xl border border-[#2a3035] bg-[#171b1e] p-6">
        <p className="text-[15px] leading-relaxed text-[#c9c6c0]">
          Fotoğraf yükle, EXIF otomatik dolsun; Claude caption, 5 hashtag, alt metin ve ilk yorum yazsın.
          Üretim claude.ai hesabınla çalışır, ek ücret yok.
        </p>
        <a
          href={STUDIO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md bg-[#d9a65a] py-3 text-center font-semibold text-[#1a1206] hover:brightness-110"
        >
          Caption Studio&apos;yu aç
        </a>
        <p className="font-mono text-xs text-[#8d959b]">
          Hashtag havuzu her pazartesi otomatik güncellenir.
        </p>
      </section>

      <nav className="flex flex-wrap gap-2">
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-[#2a3035] px-4 py-1.5 text-sm hover:border-[#8d959b]"
          >
            {l.name}
          </a>
        ))}
      </nav>
    </div>
  );
}
