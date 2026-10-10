import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { auth } from "./lib/auth";
import { headers } from "next/headers";

export async function proxy(request: NextRequest) {
  const session = await auth.api.getSession({ headers: await headers() });

  if (session || process.env.NODE_ENV === "development") return;

  const loginUrl = new URL("/sign-up", request.url);

  if (request.nextUrl.pathname === "/profile") {
    loginUrl.searchParams.set("alert", "auth_required_profile");
  } else if (request.nextUrl.pathname.startsWith("/product")) {
    loginUrl.searchParams.set("alert", "auth_required_product");
  } else if (request.nextUrl.pathname.startsWith("/category")) {
    loginUrl.searchParams.set("alert", "auth_required_category");
  }

  return NextResponse.redirect(loginUrl);
}

export const config = {
  matcher: ["/category/:slug*", "/product/:slug*", "/profile"],
};
