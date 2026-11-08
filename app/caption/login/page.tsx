export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;
  return (
    <form
      action="/api/caption-login"
      method="post"
      className="w-full max-w-sm flex flex-col gap-4 rounded-xl border border-[#2a3035] bg-[#171b1e] p-8"
    >
      <p className="font-mono text-xs uppercase tracking-[0.12em] text-[#8d959b]">@silentgrains · admin</p>
      <h1 className="font-[family-name:var(--font-display)] text-3xl">
        Caption <span className="text-[#d9a65a]">Studio</span>
      </h1>
      <label htmlFor="password" className="font-mono text-xs uppercase tracking-[0.1em] text-[#8d959b]">
        Şifre
      </label>
      <input
        id="password"
        name="password"
        type="password"
        required
        autoFocus
        autoComplete="current-password"
        className="rounded-md border border-[#2a3035] bg-[#0f1214] px-3 py-2.5 outline-none focus:border-[#d9a65a]"
      />
      {error && <p className="text-sm text-[#d98a5a]">Şifre yanlış.</p>}
      <button
        type="submit"
        className="rounded-md bg-[#d9a65a] py-2.5 font-semibold text-[#1a1206] hover:brightness-110"
      >
        Giriş yap
      </button>
    </form>
  );
}
