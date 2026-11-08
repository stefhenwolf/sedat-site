import type { Metadata } from "next";
import { CSS, HTML } from "./content";

export const metadata: Metadata = { title: "Performans Özeti · silentgrains", robots: { index: false, follow: false } };

export default function Performans() {
  return (
    <div className="pm w-full self-start">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Manrope:wght@400;500;600;700&display=swap" />
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <a href="/caption" className="pm-back">← Panele dön</a>
      <div dangerouslySetInnerHTML={{ __html: HTML }} />
    </div>
  );
}
