import { NextRequest, NextResponse } from "next/server";
import { CAPTION_COOKIE, isValidToken } from "@/lib/caption-auth";

const SUBDOMAIN_ROUTES: Record<string, string> = {
  "camerapick.sedatpala.site": "/camerapick",
  "exify.sedatpala.site": "/exify",
  "caption.sedatpala.site": "/caption",
};

const ASSET_PREFIXES = ["/_next", "/favicon.ico", "/robots.txt", "/sitemap.xml"];

// Everything under /caption is admin-only, except the login page itself.
async function guardCaption(req: NextRequest, internalPath: string, onCaptionHost: boolean) {
  if (!internalPath.startsWith("/caption") || internalPath.startsWith("/caption/login")) return null;
  if (await isValidToken(req.cookies.get(CAPTION_COOKIE)?.value)) return null;
  const login = req.nextUrl.clone();
  login.pathname = onCaptionHost ? "/login" : "/caption/login";
  login.search = "";
  return NextResponse.redirect(login);
}

export async function proxy(req: NextRequest) {
  const url = req.nextUrl.clone();
  const host = req.headers.get("host")?.toLowerCase().split(":")[0];
  const basePath = host ? SUBDOMAIN_ROUTES[host] : undefined;

  if (!basePath) {
    return (await guardCaption(req, url.pathname, false)) ?? NextResponse.next();
  }

  const isAssetRequest =
    ASSET_PREFIXES.some((prefix) => url.pathname.startsWith(prefix)) ||
    /\.[a-z0-9]+$/i.test(url.pathname);

  if (isAssetRequest || url.pathname.startsWith("/api")) {
    return NextResponse.next();
  }

  const onCaptionHost = basePath === "/caption";
  let internal = url.pathname;
  if (url.pathname === "/") internal = basePath;
  else if (!url.pathname.startsWith(basePath)) internal = `${basePath}${url.pathname}`;

  if (onCaptionHost) {
    const blocked = await guardCaption(req, internal, true);
    if (blocked) return blocked;
  }

  if (internal !== url.pathname) {
    url.pathname = internal;
    return NextResponse.rewrite(url);
  }
  return NextResponse.next();
}
