import { auth } from '@/lib/auth';
import { NextResponse } from 'next/server';

export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;
  const userRole = req.auth?.user?.role;

  const publicRoutes = ['/login', '/error', '/access-denied', '/debug', '/api/auth'];
  if (publicRoutes.some(route => nextUrl.pathname.startsWith(route))) {
    return NextResponse.next();
  }

  if (!isLoggedIn) {
    return NextResponse.redirect(new URL('/login', nextUrl));
  }

  const path = nextUrl.pathname;

  if (['/users', '/system-settings', '/analytics', '/reports'].some(r => path.startsWith(r))) {
    if (userRole !== 'super_admin') return NextResponse.redirect(new URL('/', nextUrl));
  }

  if (['/activities'].some(r => path.startsWith(r))) {
    if (userRole !== 'super_admin' && userRole !== 'activity_manager') {
      return NextResponse.redirect(new URL('/', nextUrl));
    }
  }

  return NextResponse.next();
});

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|public).*)'],
};