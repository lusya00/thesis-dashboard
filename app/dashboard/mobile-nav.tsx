'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Package, Package2, PanelLeft, LineChart, ShoppingCart, Users2, Calendar, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Input } from '@/components/ui/input';
import { useEffect, useState } from 'react';

export function MobileNav() {
  const pathname = usePathname();
  const [userRole, setUserRole] = useState<string>('');

  useEffect(() => {
    // Get user role from session
    fetch('/api/auth/session')
      .then(res => res.json())
      .then(data => {
        if (data.user) {
          setUserRole(data.user.role);
        }
      })
      .catch(err => console.error('Error fetching user role:', err));
  }, []);

  const isActive = (path: string) => {
    if (path === '/dashboard') {
      return pathname === '/dashboard';
    }
    return pathname.startsWith(path);
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="outline" className="sm:hidden">
          <PanelLeft className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[280px] sm:max-w-none">
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center gap-2 px-2 py-4 border-b">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground">
              <Package2 className="h-5 w-5" />
            </div>
            <span className="font-semibold text-lg">Untung Jawa</span>
          </div>

          {/* Mobile Search */}
          <div className="p-4 border-b">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search..."
                className="pl-10 bg-background"
              />
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-2 py-4 space-y-1">
            <Link
              href="/dashboard"
              className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive('/dashboard') 
                  ? 'bg-primary text-primary-foreground' 
                  : 'text-muted-foreground hover:text-foreground hover:bg-accent'
              }`}
            >
              <Home className="h-5 w-5" />
              Dashboard
            </Link>

            <Link
              href="/dashboard/bookings"
              className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive('/dashboard/bookings') 
                  ? 'bg-primary text-primary-foreground' 
                  : 'text-muted-foreground hover:text-foreground hover:bg-accent'
              }`}
            >
              <ShoppingCart className="h-5 w-5" />
              Bookings
            </Link>

            <Link
              href="/dashboard/homestays"
              className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive('/dashboard/homestays') 
                  ? 'bg-primary text-primary-foreground' 
                  : 'text-muted-foreground hover:text-foreground hover:bg-accent'
              }`}
            >
              <Package className="h-5 w-5" />
              Homestays
            </Link>

            {/* Show Activities only for super_admin and activity_manager */}
            {(userRole === 'super_admin' || userRole === 'activity_manager') && (
              <Link
                href="/dashboard/activities"
                className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive('/dashboard/activities') 
                    ? 'bg-primary text-primary-foreground' 
                    : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                }`}
              >
                <Calendar className="h-5 w-5" />
                Activities
              </Link>
            )}

            {/* Show Users only for super_admin */}
            {userRole === 'super_admin' && (
              <Link
                href="/dashboard/users"
                className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive('/dashboard/users') 
                    ? 'bg-primary text-primary-foreground' 
                    : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                }`}
              >
                <Users2 className="h-5 w-5" />
                Users
              </Link>
            )}

            {/* Show Analytics only for super_admin */}
            {userRole === 'super_admin' && (
              <Link
                href="/dashboard/analytics"
                className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive('/dashboard/analytics') 
                    ? 'bg-primary text-primary-foreground' 
                    : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                }`}
              >
                <LineChart className="h-5 w-5" />
                Analytics
              </Link>
            )}
          </nav>

          {/* Footer */}
          <div className="p-4 border-t">
            <Link
              href="#"
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
            >
              <LineChart className="h-5 w-5" />
              Settings
            </Link>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
} 