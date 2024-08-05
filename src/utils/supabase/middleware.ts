import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'
import { protectedRoutes, REDIRECT_AUTHENTICATED, REDIRECT_NOT_AUTHENTICATED } from '../../../app.config'
import { createClient } from './server'

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  })

  const supabase = createClient()

  // IMPORTANT: Avoid writing any logic between createServerClient and
  // supabase.auth.getUser(). A simple mistake could make it very hard to debug
  // issues with users being randomly logged out.

  const {
    data: { user },
  } = await supabase.auth.getUser()

  // console.log({user})

  if (
    user &&
    request.nextUrl.pathname.startsWith(REDIRECT_NOT_AUTHENTICATED)
  ) {
    // no user, potentially respond by redirecting the user to the login page
    const url = request.nextUrl.clone()
    url.pathname = REDIRECT_AUTHENTICATED
    return NextResponse.redirect(url)
  }

  if (
    !user &&
    Object.keys(protectedRoutes).map(e=>request.nextUrl.pathname.startsWith(protectedRoutes[e].href)).includes(true)
  ) {
    // no user, potentially respond by redirecting the user to the login page
    let callback = request.nextUrl.pathname
    if(request.nextUrl.search) callback += request.nextUrl.search
    const encodedCallback = encodeURIComponent(callback)
    return NextResponse.redirect(new URL(`${REDIRECT_NOT_AUTHENTICATED}?callback=${encodedCallback}`, request.nextUrl))
  }

  // IMPORTANT: You *must* return the supabaseResponse object as it is. If you're
  // creating a new response object with NextResponse.next() make sure to:
  // 1. Pass the request in it, like so:
  //    const myNewResponse = NextResponse.next({ request })
  // 2. Copy over the cookies, like so:
  //    myNewResponse.cookies.setAll(supabaseResponse.cookies.getAll())
  // 3. Change the myNewResponse object to fit your needs, but avoid changing
  //    the cookies!
  // 4. Finally:
  //    return myNewResponse
  // If this is not done, you may be causing the browser and server to go out
  // of sync and terminate the user's session prematurely!

  return supabaseResponse
}