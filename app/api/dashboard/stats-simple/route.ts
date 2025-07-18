import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { auth } from '@/lib/auth';

export async function GET() {
  try {
    // Get current user session
    const session = await auth();
    
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { user } = session;
    
    // Build where clauses based on user role
    let homestayWhere: any = {};
    let bookingWhere: any = {};
    let activityWhere: any = {};
    
    // If user is homestay_owner, only show their data
    if (user.role === 'homestay_owner') {
      homestayWhere.user_id = parseInt(user.id);
      bookingWhere.homestayRoom = {
        homestay: {
          user_id: parseInt(user.id)
        }
      };
      activityWhere.homestay = {
        user_id: parseInt(user.id)
      };
    }

    try {
      // Versión simplificada: menos consultas simultáneas
      // Usar consultas individuales en lugar de Promise.allSettled
      
      // 1. Estadísticas básicas de homestays
      const totalHomestays = await prisma.homestay.count({ where: homestayWhere });
      const activeHomestays = await prisma.homestay.count({ where: { ...homestayWhere, status: 'active' } });
      
      // 2. Estadísticas de usuarios (solo para super_admin)
      let totalUsers = 0;
      let activeUsers = 0;
      if (user.role === 'super_admin') {
        totalUsers = await prisma.admin_users.count();
        activeUsers = await prisma.admin_users.count({ where: { is_active: true } });
      }
      
      // 3. Estadísticas de actividades
      const totalActivities = await prisma.activities.count({ where: activityWhere });
      const activeActivities = await prisma.activities.count({ where: { ...activityWhere, status: 'active' } });
      
      // 4. Estadísticas de reservas
      const totalBookings = await prisma.booking.count({ where: bookingWhere });
      
      // 5. Estadísticas de ingresos (una sola consulta agregada)
      const revenueStats = await prisma.payments.aggregate({
        where: {
          booking: bookingWhere,
          payment_status: 'COMPLETED'
        },
        _sum: {
          amount: true
        }
      });

      return NextResponse.json({
        homestays: {
          total: totalHomestays,
          active: activeHomestays
        },
        users: {
          total: totalUsers,
          active: activeUsers
        },
        activities: {
          total: totalActivities,
          active: activeActivities
        },
        bookings: {
          total: totalBookings,
          thisMonth: 0, // Simplificado por ahora
          lastMonth: 0, // Simplificado por ahora
          change: 0
        },
        revenue: {
          total: Number(revenueStats._sum?.amount) || 0,
          thisMonth: 0, // Simplificado por ahora
          lastMonth: 0, // Simplificado por ahora
          change: 0
        },
        recent: {
          bookings: [],
          users: []
        }
      });

    } catch (dbError) {
      console.error('Database connection error:', dbError);
      
      // Return fallback data when database is not available
      return NextResponse.json({
        homestays: {
          total: 0,
          active: 0
        },
        users: {
          total: 0,
          active: 0
        },
        activities: {
          total: 0,
          active: 0
        },
        bookings: {
          total: 0,
          thisMonth: 0,
          lastMonth: 0,
          change: 0
        },
        revenue: {
          total: 0,
          thisMonth: 0,
          lastMonth: 0,
          change: 0
        },
        recent: {
          bookings: [],
          users: []
        },
        error: 'Database temporarily unavailable'
      });
    }

  } catch (error) {
    console.error('Error fetching dashboard stats:', error);
    return NextResponse.json(
      { 
        error: 'Error fetching dashboard statistics',
        homestays: { total: 0, active: 0 },
        users: { total: 0, active: 0 },
        activities: { total: 0, active: 0 },
        bookings: { total: 0, thisMonth: 0, lastMonth: 0, change: 0 },
        revenue: { total: 0, thisMonth: 0, lastMonth: 0, change: 0 },
        recent: { bookings: [], users: [] }
      },
      { status: 500 }
    );
  }
} 