import { NextRequest, NextResponse } from "next/server";
import { CAPTION_COOKIE } from "@/lib/caption-auth";

export async function POST(req: NextRequest) {
  const host = req.headers.get("host")?.split(":")[0] ?? "";
  const res = NextResponse.redirect(new URL(host.startsWith("caption.") ? "/login" : "/caption/login", req.url), 303);
  res.cookies.delete(CAPTION_COOKIE);
  return res;
}
