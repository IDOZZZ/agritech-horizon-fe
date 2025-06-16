import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value
  const isAuthPage = request.nextUrl.pathname === '/login' || request.nextUrl.pathname === '/register' // Tambahkan /register jika itu juga halaman otentikasi

  // Jika pengguna berada di halaman otentikasi dan memiliki token, arahkan ke /courses
  if (isAuthPage && token) {
    return NextResponse.redirect(new URL('/courses', request.url))
  }

  // Halaman utama (/) dan halaman kursus (/courses) tidak memerlukan otentikasi
  // Jadi, tidak ada pengalihan paksa ke login untuk halaman-halaman ini.

  return NextResponse.next()
}

export const config = {
  matcher: ['/', '/login', '/register', '/courses/:path*'] // Pastikan semua path yang relevan dicocokkan
}
