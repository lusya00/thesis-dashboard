'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb';

export function BreadcrumbNav() {
  const pathname = usePathname();
  
  // Extract path segments
  const segments = pathname.split('/').filter(Boolean);
  
  // Create breadcrumb items
  const breadcrumbItems = [];
  
  // Always add dashboard as the first item
  breadcrumbItems.push({
    href: '/dashboard',
    label: 'Dashboard',
    isActive: pathname === '/dashboard'
  });
  
  // Add other segments
  let currentPath = '';
  
  segments.forEach((segment, index) => {
    currentPath += `/${segment}`;
    
    // Format the segment name properly
    const formattedName = segment.charAt(0).toUpperCase() + segment.slice(1);
    
    breadcrumbItems.push({
      href: currentPath,
      label: formattedName,
      isActive: currentPath === pathname
    });
  });

  // Get current page title for mobile
  const currentPage = breadcrumbItems[breadcrumbItems.length - 1];
  
  return (
    <>
      {/* Desktop Breadcrumb */}
      <Breadcrumb className="hidden md:flex">
        <BreadcrumbList>
          {breadcrumbItems.map((item, index) => (
            <BreadcrumbItem key={item.href}>
              {!item.isActive ? (
                <BreadcrumbLink asChild>
                  <Link href={item.href}>{item.label}</Link>
                </BreadcrumbLink>
              ) : (
                <BreadcrumbPage>{item.label}</BreadcrumbPage>
              )}
              
              {index < breadcrumbItems.length - 1 && (
                <BreadcrumbSeparator />
              )}
            </BreadcrumbItem>
          ))}
        </BreadcrumbList>
      </Breadcrumb>

      {/* Mobile Page Title */}
      <div className="md:hidden flex items-center">
        <h1 className="text-lg font-semibold text-foreground truncate">
          {currentPage?.label || 'Dashboard'}
        </h1>
      </div>
    </>
  );
} 