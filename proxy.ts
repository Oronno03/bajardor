import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function proxy(request: NextRequest) {
  const loginUrl = new URL('/sign-up', request.url)
  loginUrl.searchParams.set('alert', 'auth_required')

  return NextResponse.redirect(loginUrl)
}
 
export const config = {
  matcher: ['/category/:slug*', '/product/:slug*'],
}
