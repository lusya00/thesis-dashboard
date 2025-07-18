import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export function useAuth(requiredRole?: string) {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'loading') return;

    if (!session) {
      router.push('/login');
      return;
    }

    if (requiredRole && session.user.role !== requiredRole) {
      router.push('/dashboard');
      return;
    }
  }, [session, status, requiredRole, router]);

  return {
    session,
    status,
    user: session?.user,
    isAuthenticated: !!session,
    isLoading: status === 'loading',
    hasRole: (role: string) => session?.user.role === role,
    isSuperAdmin: session?.user.role === 'super_admin',
    isActivityManager: session?.user.role === 'activity_manager',
    isHomestayOwner: session?.user.role === 'homestay_owner'
  };
}

export function useRequireAuth(requiredRole?: string) {
  const auth = useAuth(requiredRole);
  
  if (auth.isLoading) {
    return { ...auth, isLoading: true };
  }

  if (!auth.isAuthenticated) {
    return { ...auth, isLoading: false };
  }

  if (requiredRole && !auth.hasRole(requiredRole)) {
    return { ...auth, isLoading: false };
  }

  return auth;
} 