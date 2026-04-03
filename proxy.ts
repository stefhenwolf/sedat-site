import { NextRequest, NextResponse } from "next/server";

const CAMERAPICK_HOST = "camerapick.sedatpala.site";
const ASSET_PREFIXES = ["/_next", "/favicon.ico", "/robots.txt", "/sitemap.xml"];

export function proxy(req: NextRequest) {
  const url = req.nextUrl.clone();
  const host = req.headers.get("host")?.toLowerCase().split(":")[0];

  if (host !== CAMERAPICK_HOST) {
    return NextResponse.next();
  }

  const isAssetRequest =
    ASSET_PREFIXES.some((prefix) => url.pathname.startsWith(prefix)) ||
    /\.[a-z0-9]+$/i.test(url.pathname);

  if (isAssetRequest || url.pathname.startsWith("/api")) {
    return NextResponse.next();
  }

  if (url.pathname === "/") {
    url.pathname = "/camerapick";
    return NextResponse.rewrite(url);
  }

  if (!url.pathname.startsWith("/camerapick")) {
    url.pathname = `/camerapick${url.pathname}`;
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}
