import { NextRequest, NextResponse } from "next/server";

const SUBDOMAIN_ROUTES: Record<string, string> = {
  "camerapick.sedatpala.site": "/camerapick",
  "exify.sedatpala.site": "/exify",
};

const ASSET_PREFIXES = ["/_next", "/favicon.ico", "/robots.txt", "/sitemap.xml"];

export function proxy(req: NextRequest) {
  const url = req.nextUrl.clone();
  const host = req.headers.get("host")?.toLowerCase().split(":")[0];
  const basePath = host ? SUBDOMAIN_ROUTES[host] : undefined;

  if (!basePath) {
    return NextResponse.next();
  }

  const isAssetRequest =
    ASSET_PREFIXES.some((prefix) => url.pathname.startsWith(prefix)) ||
    /\.[a-z0-9]+$/i.test(url.pathname);

  if (isAssetRequest || url.pathname.startsWith("/api")) {
    return NextResponse.next();
  }

  if (url.pathname === "/") {
    url.pathname = basePath;
    return NextResponse.rewrite(url);
  }

  if (!url.pathname.startsWith(basePath)) {
    url.pathname = `${basePath}${url.pathname}`;
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}
