import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();

  // const {
  //   data: { user },
  // } = await supabase.auth.getUser();

  const publicRoutes = ["/", "/login", "/signup"];

  return res;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
