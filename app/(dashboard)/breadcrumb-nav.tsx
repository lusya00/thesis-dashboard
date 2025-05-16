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
    href: '/',
    label: 'Dashboard',
    isActive: pathname === '/'
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
  
  return (
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
  );
} 