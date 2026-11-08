import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Caption Studio · Admin",
  robots: { index: false, follow: false },
};

export default function CaptionLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-[#0f1214] text-[#e7e4de] flex items-center justify-center px-4 py-12">
      {children}
    </main>
  );
}
