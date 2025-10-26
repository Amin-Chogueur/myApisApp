// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
// http://localhost:5173
//https://vue-hire-hub.vercel.app
//https://myvue-glasses-app.vercel.app
export function middleware(req: NextRequest) {
  const origin = req.headers.get("origin");

  // Define allowed origins
  const allowedOrigins = [
    "https://vue-hire-hub.vercel.app",
    "https://myvue-glasses-app.vercel.app",
  ];

  const res = NextResponse.next();

  // Check if the request origin is allowed
  if (origin && allowedOrigins.includes(origin)) {
    res.headers.set("Access-Control-Allow-Origin", origin);
  }

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

// Optional: limit where this middleware runs
export const config = {
  matcher: ["/api/:path*"],
};
