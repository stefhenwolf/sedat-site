// Single-admin auth for caption.sedatpala.site.
// Env: ADMIN_PASSWORD (your login password), ADMIN_SECRET (long random string for signing).
export const CAPTION_COOKIE = "caption_admin";
export const CAPTION_MAX_AGE = 60 * 60 * 24 * 30; // 30 days

async function hmac(message: string): Promise<string> {
  const secret = process.env.ADMIN_SECRET;
  if (!secret) throw new Error("ADMIN_SECRET is not set");
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const sig = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(message));
  return Array.from(new Uint8Array(sig), (b) => b.toString(16).padStart(2, "0")).join("");
}

function safeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

// Token changes whenever ADMIN_PASSWORD changes, so changing the password logs out old sessions.
export async function expectedToken(): Promise<string> {
  return hmac(`caption-admin:${process.env.ADMIN_PASSWORD ?? ""}`);
}

export async function isValidToken(token: string | undefined): Promise<boolean> {
  if (!token || !process.env.ADMIN_PASSWORD || !process.env.ADMIN_SECRET) return false;
  return safeEqual(token, await expectedToken());
}

export async function checkPassword(input: string): Promise<boolean> {
  const real = process.env.ADMIN_PASSWORD;
  if (!real || !process.env.ADMIN_SECRET) return false;
  return safeEqual(await hmac(`pw:${input}`), await hmac(`pw:${real}`));
}
