'use client';

import { VercelLogo } from '@/components/icons';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { Calendar, Home, LineChart, Megaphone, Package, Settings, ShoppingCart, Users2 } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { NavItem } from './nav-item';

export function DesktopNav() {
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

  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
      <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
        <Link
          href="/dashboard"
          className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
        >
          <VercelLogo className="h-3 w-3 transition-all group-hover:scale-110" />
          <span className="sr-only">Untung Jawa</span>
        </Link>

        <NavItem href="/dashboard" label="Dashboard">
          <Home className="h-5 w-5" />
        </NavItem>

        <NavItem href="/dashboard/bookings" label="Bookings">
          <ShoppingCart className="h-5 w-5" />
        </NavItem>

        <NavItem href="/dashboard/homestays" label="Homestays">
          <Package className="h-5 w-5" />
        </NavItem>

        <NavItem href="/dashboard/promotions" label="Promotion">
            <Megaphone className="h-5 w-5" />
          </NavItem>

        {/* Show Activities only for super_admin and activity_manager */}
        {(userRole === 'super_admin' || userRole === 'activity_manager') && (
          <NavItem href="/dashboard/activities" label="Activities">
            <Calendar className="h-5 w-5" />
          </NavItem>
        )}

        {/* Show Users only for super_admin */}
        {userRole === 'super_admin' && (
          <NavItem href="/dashboard/users" label="Users">
            <Users2 className="h-5 w-5" />
          </NavItem>
        )}

        {/* Show Analytics only for super_admin */}
        {userRole === 'super_admin' && (
          <NavItem href="/dashboard/analytics" label="Analytics">
            <LineChart className="h-5 w-5" />
          </NavItem>
        )}
      </nav>
      <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href="#"
              className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
            >
              <Settings className="h-5 w-5" />
              <span className="sr-only">Settings</span>
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right">Settings</TooltipContent>
        </Tooltip>
      </nav>
    </aside>
  );
} 