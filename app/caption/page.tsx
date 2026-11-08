const tools = [
  {
    name: "Caption Studio",
    cta: "Caption Studio'yu aç",
    href: "https://claude.ai/artifact/7nUhTz2QY8JcAu3rLZ3KBH",
    body: "Fotoğraf yükle, EXIF otomatik dolsun; Claude caption, 5 hashtag, alt metin ve ilk yorum yazsın.",
    note: "Hashtag havuzu her pazartesi otomatik güncellenir.",
  },
  {
    name: "Photo Picker",
    cta: "Photo Picker'ı aç",
    href: "https://claude.ai/artifact/6qhjPLvykskRT3dHjNGrdn",
    body: "Son karelerini yükle; Claude puanlasın, en güçlü 5'ini, paylaşım gün ve saatini, ızgara sırasını önersin.",
    note: "En fazla 30 kare.",
  },
  {
    name: "Büyüme Planı",
    cta: "Büyüme Planı'nı aç",
    href: "https://claude.ai/artifact/DT3XFydH8Hjdj4iig8toHJ",
    body: "7 yöntem, haftalık paylaşım ritmi, işaretlenebilir haftalık liste ve 30 günlük hedefler.",
    note: "Senin verine ve 2026 algoritmasına göre hazırlandı.",
  },
  {
    name: "Performans Panosu",
    cta: "Panoyu aç",
    href: "https://claude.ai/artifact/Fn93B6B97Sap7qwLrLfznt",
    body: "Aylık erişim, kategori, format, saat ve gün analizi; en çok erişen gönderiler.",
    note: "Yeni Meta dışa aktarımıyla güncellenir.",
  },
  {
    name: "Performans Özeti (telefon)",
    cta: "Telefon özetini aç",
    href: "/caption/performans",
    body: "Panonun sade hali; doğrudan bu sitede açılır, eski iPhone'larda da çalışır.",
    note: "Panoyla aynı veri.",
  },
];

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
          silent<span className="text-[#d9a65a]">grains</span> admin
        </h1>
        <form action="/api/caption-logout" method="post">
          <button className="font-mono text-xs uppercase tracking-[0.1em] text-[#8d959b] hover:text-[#e7e4de]">
            Çıkış
          </button>
        </form>
      </header>

      {tools.map((t) => (
        <section key={t.href} className="flex flex-col gap-4 rounded-xl border border-[#2a3035] bg-[#171b1e] p-6">
          <h2 className="font-[family-name:var(--font-display)] text-2xl">{t.name}</h2>
          <p className="text-[15px] leading-relaxed text-[#c9c6c0]">{t.body}</p>
          <a
            href={t.href}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-[#d9a65a] py-3 text-center font-semibold text-[#1a1206] hover:brightness-110"
          >
            {t.cta}
          </a>
          <p className="font-mono text-xs text-[#8d959b]">{t.note}</p>
        </section>
      ))}
      <p className="font-mono text-xs text-[#8d959b]">Araçlar claude.ai hesabınla çalışır, ek ücret yok.</p>

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
