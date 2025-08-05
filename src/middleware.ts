import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { auth } from "@/auth"

export default auth((req) => {
  console.log("Middleware triggered for:", req.nextUrl.pathname)
  console.log("Auth status:", !!req.auth)
  
  // Redirect authenticated users away from login page
  if (req.auth && req.nextUrl.pathname.startsWith("/login")) {
    console.log("Already authenticated, redirecting to dashboard")
    return NextResponse.redirect(new URL('/dashboard', req.nextUrl.origin))
  }
  
  // Redirect unauthenticated users trying to access dashboard
  if (!req.auth && req.nextUrl.pathname.startsWith("/dashboard")) {
    console.log("No auth, redirecting to login")
    return NextResponse.redirect(new URL('/login', req.nextUrl.origin))
  }
  
  return NextResponse.next()
})

export const config = {
  matcher: ['/dashboard/:path*', '/login'],
}