import { getToken } from 'next-auth/jwt';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export async function middleware(req: NextRequest) {
  const { nextUrl } = req;

  const token = await getToken({ req, secret: process.env.AUTH_SECRET });
  const isLoggedIn = !!token;
  const userRole = token?.role as string | undefined;

  const publicRoutes = ['/login', '/error', '/access-denied', '/debug'];
  const isPublicRoute = publicRoutes.some(route =>
    nextUrl.pathname.startsWith(route)
  );

  if (isPublicRoute) return NextResponse.next();

  if (!isLoggedIn) {
    return NextResponse.redirect(new URL('/login', nextUrl));
  }

  const path = nextUrl.pathname;

  const superAdminRoutes = ['/users', '/system-settings', '/analytics', '/reports'];
  const adminRoutes = ['/activities'];

  if (superAdminRoutes.some(route => path.startsWith(route))) {
    if (userRole !== 'super_admin') {
      return NextResponse.redirect(new URL('/', nextUrl));
    }
  }

  if (adminRoutes.some(route => path.startsWith(route))) {
    if (userRole !== 'super_admin' && userRole !== 'activity_manager') {
      return NextResponse.redirect(new URL('/', nextUrl));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|public).*)'],
};