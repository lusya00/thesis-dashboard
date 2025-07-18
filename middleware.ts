import { NextResponse } from 'next/server';
import { auth } from '@/lib/auth';

export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;
  const userRole = req.auth?.user?.role;

  // Rutas públicas que no requieren autenticación
  const publicRoutes = ['/login', '/error', '/access-denied', '/debug', '/api/auth'];
  const isPublicRoute = publicRoutes.some(route => 
    nextUrl.pathname.startsWith(route)
  );

  // Si es una ruta pública, permitir acceso
  if (isPublicRoute) {
    return NextResponse.next();
  }

  // Si no está autenticado, redirigir al login
  if (!isLoggedIn) {
    return NextResponse.redirect(new URL('/login', nextUrl));
  }

  // Control de acceso por roles
  const path = nextUrl.pathname;

  // Rutas solo para super_admin
  const superAdminRoutes = [
    '/users',
    '/users/create',
    '/users/[id]',
    '/users/[id]/edit',
    '/system-settings',
    '/analytics',
    '/reports'
  ];

  // Rutas para super_admin y activity_manager
  const adminRoutes = [
    '/activities',
    '/activities/create',
    '/activities/[id]',
    '/activities/[id]/edit'
  ];



  // Verificar acceso según el rol
  if (superAdminRoutes.some(route => path.startsWith(route.replace('[id]', '')))) {
    if (userRole !== 'super_admin') {
      return NextResponse.redirect(new URL('/', nextUrl));
    }
  }

  if (adminRoutes.some(route => path.startsWith(route.replace('[id]', '')))) {
    if (userRole !== 'super_admin' && userRole !== 'activity_manager') {
      return NextResponse.redirect(new URL('/', nextUrl));
    }
  }

  // Para rutas de homestays, verificar permisos
  if (path.startsWith('/homestays')) {
    if (userRole === 'homestay_owner') {
      // Los propietarios pueden acceder a sus homestays
      // La lógica de filtrado se maneja en la API
    } else if (userRole !== 'super_admin' && userRole !== 'activity_manager') {
      return NextResponse.redirect(new URL('/', nextUrl));
    }
  }

  // Para rutas de bookings, verificar permisos
  if (path.startsWith('/bookings')) {
    if (userRole === 'homestay_owner') {
      // Los propietarios pueden acceder a bookings de sus homestays
      // La lógica de filtrado se maneja en la API
    } else if (userRole !== 'super_admin' && userRole !== 'activity_manager') {
      return NextResponse.redirect(new URL('/', nextUrl));
    }
  }

  return NextResponse.next();
});

// Configuración del middleware
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!api|_next/static|_next/image|favicon.ico|public).*)',
  ],
};
