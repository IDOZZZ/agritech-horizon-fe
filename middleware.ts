import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value
  const isAuthPage = request.nextUrl.pathname === '/login' || request.nextUrl.pathname === '/'
  const isProtectedPage = request.nextUrl.pathname.startsWith('/courses')

  // If user is on auth page and has token, redirect to courses
  if (isAuthPage && token) {
    return NextResponse.redirect(new URL('/courses', request.url))
  }

  // If user is on protected page and has no token, redirect to login
  if (isProtectedPage && !token) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/', '/login', '/courses/:path*']
}
