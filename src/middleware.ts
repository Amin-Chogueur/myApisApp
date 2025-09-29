// middleware.ts
import { NextResponse } from "next/server";

// http://localhost:5173
//https://vue-hire-hub.vercel.app

export function middleware() {
  const res = NextResponse.next();
  res.headers.set(
    "Access-Control-Allow-Origin",
    "https://vue-hire-hub.vercel.app"
  );
  res.headers.set(
    "Access-Control-Allow-Methods",
    "GET,POST,PATCH,DELETE,OPTIONS"
  );
  res.headers.set(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization"
  );

  return res;
}

export const config = {
  matcher: ["/api/:path*"], // Apply only to API routes
};
