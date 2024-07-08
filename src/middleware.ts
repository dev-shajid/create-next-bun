import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { protectedRoutes } from '../app.config'

export function middleware(request: NextRequest) {
  const { nextUrl } = request

  // return NextResponse.redirect(new URL('/home', request.url))
}

export const config = {
  matcher: [
    ...Object.keys(protectedRoutes).map((e)=>protectedRoutes[e].href),

    
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    // '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}