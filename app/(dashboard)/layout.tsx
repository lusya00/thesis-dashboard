import { Analytics } from '@vercel/analytics/react';
import { BreadcrumbNav } from 'app/dashboard/breadcrumb-nav';
import { DesktopNav } from 'app/dashboard/desktop-nav';
import { MobileNav } from 'app/dashboard/mobile-nav';
import Providers from 'app/dashboard/providers';
import { SearchInput } from 'app/dashboard/search';
import { User } from 'app/dashboard/user';

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <main className="flex min-h-screen w-full flex-col bg-muted/40">
        <DesktopNav />
        <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
          <header className="sticky top-0 z-30 flex h-14 items-center gap-2 border-b bg-background px-3 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6 sm:gap-4">
            <MobileNav />
            <div className="flex items-center gap-2 flex-1 min-w-0">
              <div className="hidden md:block">
                <BreadcrumbNav />
              </div>
              <div className="md:hidden flex-1">
                <BreadcrumbNav />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="hidden sm:block">
                <SearchInput />
              </div>
              <User />
            </div>
          </header>
          <main className="grid flex-1 items-start gap-2 p-3 sm:px-6 sm:py-0 md:gap-4 bg-muted/40">
            {children}
          </main>
        </div>
        <Analytics />
      </main>
    </Providers>
  );
}
