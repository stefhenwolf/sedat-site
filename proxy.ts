import { NextResponse } from "next/server";

export function proxy(req: Request) {
  const url = new URL(req.url);
  const host = req.headers.get("host");

  if (host === "camerapick.sedatpala.site") {
    url.pathname = "/camerapick";
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}
