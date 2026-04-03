import { NextResponse } from "next/server";

export function middleware(req) {
  const host = req.headers.get("host");

  if (host === "camerapick.sedatpala.site") {
    return NextResponse.rewrite(new URL("/camerapick", req.url));
  }

  return NextResponse.next();
}
