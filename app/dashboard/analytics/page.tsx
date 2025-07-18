'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
  Legend
} from 'recharts';
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  Users, 
  Package, 
  Calendar,
  Download,
  RefreshCw
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';

interface AnalyticsData {
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

export default function AnalyticsPage() {
  const [data, setData] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch('/api/dashboard/stats-simple');
      const analyticsData = await response.json();
      
      if (!response.ok) {
        if (response.status === 401) {
          throw new Error('Please log in to view analytics');
        }
        throw new Error(analyticsData.error || 'Failed to fetch analytics data');
      }
      
      setData(analyticsData);
      
      if (analyticsData.error) {
        toast.warning('Database temporarily unavailable. Showing cached data.');
      }
    } catch (error) {
      console.error('Error fetching analytics:', error);
      const errorMessage = error instanceof Error ? error.message : 'Error loading analytics';
      setError(errorMessage);
      
      if (errorMessage.includes('log in')) {
        toast.error('Please log in to view analytics');
      } else {
        toast.error('Error loading analytics data');
      }
      
      // Set fallback data
      setData({
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

  useEffect(() => {
    fetchData();
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

  // Datos para gráficos
  const homestayData = [
    { name: 'Total', value: data?.homestays.total || 0, fill: '#3b82f6' },
    { name: 'Active', value: data?.homestays.active || 0, fill: '#10b981' },
    { name: 'Inactive', value: (data?.homestays.total || 0) - (data?.homestays.active || 0), fill: '#ef4444' }
  ];

  const activityData = [
    { name: 'Total', value: data?.activities.total || 0, fill: '#8b5cf6' },
    { name: 'Active', value: data?.activities.active || 0, fill: '#06b6d4' },
    { name: 'Inactive', value: (data?.activities.total || 0) - (data?.activities.active || 0), fill: '#f59e0b' }
  ];

  const revenueData = [
    { month: 'Last Month', revenue: data?.revenue.lastMonth || 0 },
    { month: 'This Month', revenue: data?.revenue.thisMonth || 0 }
  ];

  const bookingData = [
    { month: 'Last Month', bookings: data?.bookings.lastMonth || 0 },
    { month: 'This Month', bookings: data?.bookings.thisMonth || 0 }
  ];

  const overviewData = [
    { name: 'Homestays', total: data?.homestays.total || 0, active: data?.homestays.active || 0 },
    { name: 'Users', total: data?.users.total || 0, active: data?.users.active || 0 },
    { name: 'Activities', total: data?.activities.total || 0, active: data?.activities.active || 0 },
    { name: 'Bookings', total: data?.bookings.total || 0, active: data?.bookings.thisMonth || 0 }
  ];

  const COLORS = ['#3b82f6', '#10b981', '#ef4444', '#8b5cf6', '#06b6d4', '#f59e0b'];

  if (loading) {
    return (
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Analytics</h2>
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
        <h2 className="text-3xl font-bold tracking-tight">Analytics</h2>
        <div className="flex items-center space-x-2">
          <Button variant="outline" onClick={fetchData} disabled={loading}>
            <RefreshCw className={`h-4 w-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
            Refresh
          </Button>
          <Button>
            <Download className="h-4 w-4 mr-2" />
            Export Report
          </Button>
        </div>
      </div>

      {/* Error Banner */}
      {error && (
        <Card className="border-red-200 bg-red-50">
          <CardContent className="pt-6">
            <div className="flex items-center space-x-2 text-red-700">
              <TrendingDown className="h-4 w-4" />
              <span className="text-sm font-medium">{error}</span>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Database Warning */}
      {data?.error && (
        <Card className="border-yellow-200 bg-yellow-50">
          <CardContent className="pt-6">
            <div className="flex items-center space-x-2 text-yellow-700">
              <TrendingDown className="h-4 w-4" />
              <span className="text-sm font-medium">
                Database temporarily unavailable. Showing cached data.
              </span>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Overview Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatCurrency(data?.revenue.total || 0)}</div>
            <div className="flex items-center text-xs text-muted-foreground">
              {data?.revenue.change !== undefined && (
                <>
                  {data.revenue.change >= 0 ? (
                    <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
                  ) : (
                    <TrendingDown className="h-3 w-3 text-red-500 mr-1" />
                  )}
                  {formatPercentage(data.revenue.change)} from last month
                </>
              )}
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Bookings</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{data?.bookings.total || 0}</div>
            <div className="flex items-center text-xs text-muted-foreground">
              {data?.bookings.change !== undefined && (
                <>
                  {data.bookings.change >= 0 ? (
                    <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
                  ) : (
                    <TrendingDown className="h-3 w-3 text-red-500 mr-1" />
                  )}
                  {formatPercentage(data.bookings.change)} from last month
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
            <div className="text-2xl font-bold">{data?.homestays.active || 0}</div>
            <p className="text-xs text-muted-foreground">
              of {data?.homestays.total || 0} total
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{data?.users.active || 0}</div>
            <p className="text-xs text-muted-foreground">
              of {data?.users.total || 0} total
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="revenue">Revenue</TabsTrigger>
          <TabsTrigger value="bookings">Bookings</TabsTrigger>
          <TabsTrigger value="homestays">Homestays</TabsTrigger>
          <TabsTrigger value="activities">Activities</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Overview Statistics</CardTitle>
                <CardDescription>Total vs Active items across all categories</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={overviewData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="total" fill="#3b82f6" name="Total" />
                    <Bar dataKey="active" fill="#10b981" name="Active" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Revenue Trend</CardTitle>
                <CardDescription>Monthly revenue comparison</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip formatter={(value) => formatCurrency(Number(value))} />
                    <Area type="monotone" dataKey="revenue" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.3} />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="revenue" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Revenue Analytics</CardTitle>
              <CardDescription>Detailed revenue analysis and trends</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip formatter={(value) => formatCurrency(Number(value))} />
                    <Line type="monotone" dataKey="revenue" stroke="#3b82f6" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
                
                <div className="space-y-4">
                  <div className="text-center">
                    <h3 className="text-lg font-semibold">Revenue Summary</h3>
                    <div className="mt-4 space-y-2">
                      <div className="flex justify-between">
                        <span>Total Revenue:</span>
                        <span className="font-semibold">{formatCurrency(data?.revenue.total || 0)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>This Month:</span>
                        <span className="font-semibold">{formatCurrency(data?.revenue.thisMonth || 0)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Last Month:</span>
                        <span className="font-semibold">{formatCurrency(data?.revenue.lastMonth || 0)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Change:</span>
                        <span className={`font-semibold ${(data?.revenue.change || 0) >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                          {formatPercentage(data?.revenue.change || 0)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="bookings" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Booking Analytics</CardTitle>
              <CardDescription>Booking trends and statistics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={bookingData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="bookings" fill="#10b981" />
                  </BarChart>
                </ResponsiveContainer>
                
                <div className="space-y-4">
                  <div className="text-center">
                    <h3 className="text-lg font-semibold">Booking Summary</h3>
                    <div className="mt-4 space-y-2">
                      <div className="flex justify-between">
                        <span>Total Bookings:</span>
                        <span className="font-semibold">{data?.bookings.total || 0}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>This Month:</span>
                        <span className="font-semibold">{data?.bookings.thisMonth || 0}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Last Month:</span>
                        <span className="font-semibold">{data?.bookings.lastMonth || 0}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Change:</span>
                        <span className={`font-semibold ${(data?.bookings.change || 0) >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                          {formatPercentage(data?.bookings.change || 0)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="homestays" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Homestay Analytics</CardTitle>
              <CardDescription>Homestay status distribution</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={homestayData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name} ${(percent ? (percent * 100).toFixed(0) : 0)}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {homestayData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
                
                <div className="space-y-4">
                  <div className="text-center">
                    <h3 className="text-lg font-semibold">Homestay Summary</h3>
                    <div className="mt-4 space-y-2">
                      <div className="flex justify-between">
                        <span>Total Homestays:</span>
                        <span className="font-semibold">{data?.homestays.total || 0}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Active:</span>
                        <span className="font-semibold text-green-600">{data?.homestays.active || 0}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Inactive:</span>
                        <span className="font-semibold text-red-600">
                          {(data?.homestays.total || 0) - (data?.homestays.active || 0)}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Active Rate:</span>
                        <span className="font-semibold">
                          {data?.homestays.total ? ((data.homestays.active / data.homestays.total) * 100).toFixed(1) : 0}%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="activities" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Activity Analytics</CardTitle>
              <CardDescription>Activity status distribution</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={activityData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name} ${(percent ? (percent * 100).toFixed(0) : 0)}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {activityData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
                
                <div className="space-y-4">
                  <div className="text-center">
                    <h3 className="text-lg font-semibold">Activity Summary</h3>
                    <div className="mt-4 space-y-2">
                      <div className="flex justify-between">
                        <span>Total Activities:</span>
                        <span className="font-semibold">{data?.activities.total || 0}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Active:</span>
                        <span className="font-semibold text-green-600">{data?.activities.active || 0}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Inactive:</span>
                        <span className="font-semibold text-red-600">
                          {(data?.activities.total || 0) - (data?.activities.active || 0)}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Active Rate:</span>
                        <span className="font-semibold">
                          {data?.activities.total ? ((data.activities.active / data.activities.total) * 100).toFixed(1) : 0}%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
} 