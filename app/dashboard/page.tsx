'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Package, Users, Calendar, ShoppingCart, TrendingUp, DollarSign, ArrowUpRight, ArrowDownRight, AlertCircle } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';

interface DashboardStats {
  homestays: {
    total: number;
    active: number;
  };
  users: {
    total: number;
    active: number;
  };
  activities: {
    total: number;
    active: number;
  };
  bookings: {
    total: number;
    thisMonth: number;
    lastMonth: number;
    change: number;
  };
  revenue: {
    total: number;
    thisMonth: number;
    lastMonth: number;
    change: number;
  };
  recent: {
    bookings: any[];
    users: any[];
  };
  error?: string;
}

export default function DashboardPage() {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch('/api/dashboard/stats-simple');
        const data = await response.json();
        
        if (!response.ok) {
          if (response.status === 401) {
            throw new Error('Please log in to view dashboard statistics');
          }
          throw new Error(data.error || 'Failed to fetch stats');
        }
        
        setStats(data);
        
        // Show warning if database is unavailable
        if (data.error) {
          toast.warning('Database temporarily unavailable. Showing cached data.');
        }
      } catch (error) {
        console.error('Error fetching stats:', error);
        const errorMessage = error instanceof Error ? error.message : 'Error loading dashboard statistics';
        setError(errorMessage);
        
        if (errorMessage.includes('log in')) {
          toast.error('Please log in to view dashboard statistics');
        } else {
          toast.error('Error loading dashboard statistics');
        }
        
        // Set fallback data
        setStats({
          homestays: { total: 0, active: 0 },
          users: { total: 0, active: 0 },
          activities: { total: 0, active: 0 },
          bookings: { total: 0, thisMonth: 0, lastMonth: 0, change: 0 },
          revenue: { total: 0, thisMonth: 0, lastMonth: 0, change: 0 },
          recent: { bookings: [], users: [] }
        });
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const formatPercentage = (value: number) => {
    return `${value >= 0 ? '+' : ''}${value.toFixed(1)}%`;
  };

  if (loading) {
    return (
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[...Array(4)].map((_, i) => (
            <Card key={i}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <div className="h-4 w-20 bg-muted animate-pulse rounded" />
                <div className="h-4 w-4 bg-muted animate-pulse rounded" />
              </CardHeader>
              <CardContent>
                <div className="h-8 w-16 bg-muted animate-pulse rounded mb-2" />
                <div className="h-3 w-24 bg-muted animate-pulse rounded" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <div className="flex items-center space-x-2">
          <Button>Download Report</Button>
        </div>
      </div>

      {/* Error Banner */}
      {error && (
        <Card className="border-red-200 bg-red-50">
          <CardContent className="pt-6">
            <div className="flex items-center space-x-2 text-red-700">
              <AlertCircle className="h-4 w-4" />
              <span className="text-sm font-medium">{error}</span>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Database Warning */}
      {stats?.error && (
        <Card className="border-yellow-200 bg-yellow-50">
          <CardContent className="pt-6">
            <div className="flex items-center space-x-2 text-yellow-700">
              <AlertCircle className="h-4 w-4" />
              <span className="text-sm font-medium">
                Database temporarily unavailable. Showing cached data.
              </span>
            </div>
          </CardContent>
        </Card>
      )}
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatCurrency(stats?.revenue.total || 0)}</div>
            <div className="flex items-center text-xs text-muted-foreground">
              {stats?.revenue.change !== undefined && (
                <>
                  {stats.revenue.change >= 0 ? (
                    <ArrowUpRight className="h-3 w-3 text-green-500 mr-1" />
                  ) : (
                    <ArrowDownRight className="h-3 w-3 text-red-500 mr-1" />
                  )}
                  {formatPercentage(stats.revenue.change)} from last month
                </>
              )}
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Bookings</CardTitle>
            <ShoppingCart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats?.bookings.total || 0}</div>
            <div className="flex items-center text-xs text-muted-foreground">
              {stats?.bookings.change !== undefined && (
                <>
                  {stats.bookings.change >= 0 ? (
                    <ArrowUpRight className="h-3 w-3 text-green-500 mr-1" />
                  ) : (
                    <ArrowDownRight className="h-3 w-3 text-red-500 mr-1" />
                  )}
                  {formatPercentage(stats.bookings.change)} from last month
                </>
              )}
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Homestays</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats?.homestays.active || 0}</div>
            <p className="text-xs text-muted-foreground">
              {stats?.homestays.total || 0} total homestays
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Activities</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats?.activities.active || 0}</div>
            <p className="text-xs text-muted-foreground">
              {stats?.activities.total || 0} total activities
            </p>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Recent Bookings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {stats?.recent.bookings && stats.recent.bookings.length > 0 ? (
                stats.recent.bookings.map((booking: any, index: number) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-none">
                        {booking.landing_page_user?.name || 'Unknown User'}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {booking.homestayRoom?.homestay?.title || 'Unknown Homestay'}
                      </p>
                    </div>
                    <div className="text-sm font-medium">
                      {formatCurrency(booking.payments?.[0]?.amount || 0)}
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center text-muted-foreground py-8">
                  No recent bookings
                </div>
              )}
            </div>
          </CardContent>
        </Card>
        
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Access the most important sections</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <Link href="/dashboard/homestays">
              <Button variant="outline" className="w-full justify-start">
                <Package className="mr-2 h-4 w-4" />
                Manage Homestays
              </Button>
            </Link>
            <Link href="/dashboard/bookings">
              <Button variant="outline" className="w-full justify-start">
                <ShoppingCart className="mr-2 h-4 w-4" />
                View Bookings
              </Button>
            </Link>
            <Link href="/dashboard/activities">
              <Button variant="outline" className="w-full justify-start">
                <Calendar className="mr-2 h-4 w-4" />
                Manage Activities
              </Button>
            </Link>
            <Link href="/dashboard/users">
              <Button variant="outline" className="w-full justify-start">
                <Users className="mr-2 h-4 w-4" />
                Manage Users
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Homestays</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats?.homestays.active || 0}</div>
            <p className="text-xs text-muted-foreground">Active homestays</p>
            <Link href="/dashboard/homestays">
              <Button variant="outline" size="sm" className="mt-2">
                View All
              </Button>
            </Link>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats?.users.active || 0}</div>
            <p className="text-xs text-muted-foreground">Active users</p>
            <Link href="/dashboard/users">
              <Button variant="outline" size="sm" className="mt-2">
                View All
              </Button>
            </Link>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Activities</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats?.activities.active || 0}</div>
            <p className="text-xs text-muted-foreground">Available activities</p>
            <Link href="/dashboard/activities">
              <Button variant="outline" size="sm" className="mt-2">
                View All
              </Button>
            </Link>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Bookings</CardTitle>
            <ShoppingCart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats?.bookings.total || 0}</div>
            <p className="text-xs text-muted-foreground">Total bookings</p>
            <Link href="/dashboard/bookings">
              <Button variant="outline" size="sm" className="mt-2">
                View All
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
