import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { auth } from './lib/auth'
import { headers } from 'next/headers'
 
export async function proxy(request: NextRequest) {

  const session = await auth.api.getSession({headers: await headers()});

  if(session) return;

  const loginUrl = new URL('/sign-up', request.url)
  loginUrl.searchParams.set('alert', 'auth_required')

  return NextResponse.redirect(loginUrl)
}
 
export const config = {
  matcher: ['/category/:slug*', '/product/:slug*'],
}
