import { NextResponse } from 'next/server'
import { auth } from "@/auth"

export default auth((req) => {
  
  // Redirect authenticated users away from login page
  if (req.auth && req.nextUrl.pathname.startsWith("/login")) {
    return NextResponse.redirect(new URL('/dashboard', req.nextUrl.origin))
  }
  
  // Redirect unauthenticated users trying to access dashboard
  if (!req.auth && req.nextUrl.pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL('/login', req.nextUrl.origin))
  }
  
  return NextResponse.next()
})

export const config = {
  matcher: ['/dashboard/:path*', '/login'],
}