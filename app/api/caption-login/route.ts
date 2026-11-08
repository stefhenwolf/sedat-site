import { NextRequest, NextResponse } from "next/server";
import { CAPTION_COOKIE, CAPTION_MAX_AGE, checkPassword, expectedToken } from "@/lib/caption-auth";

function home(req: NextRequest, path: string) {
  const host = req.headers.get("host")?.split(":")[0] ?? "";
  // On caption.sedatpala.site the proxy maps "/" -> /caption; elsewhere use the full path.
  const target = host.startsWith("caption.") ? path.replace(/^\/caption/, "") || "/" : path;
  return new URL(target, req.url);
}

export async function POST(req: NextRequest) {
  const form = await req.formData();
  const password = String(form.get("password") ?? "");
  await new Promise((r) => setTimeout(r, 400)); // slow down guessing

  if (!(await checkPassword(password))) {
    return NextResponse.redirect(home(req, "/caption/login?error=1"), 303);
  }
  const res = NextResponse.redirect(home(req, "/caption"), 303);
  res.cookies.set(CAPTION_COOKIE, await expectedToken(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: CAPTION_MAX_AGE,
  });
  return res;
}
