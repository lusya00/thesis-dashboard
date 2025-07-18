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
    // super_admin and activity_manager can see all data

    // Get current date and last month date
    const now = new Date();
    const lastMonth = new Date(now.getFullYear(), now.getMonth() - 1, now.getDate());
    const thisMonth = new Date(now.getFullYear(), now.getMonth(), 1);

    try {
      // Optimizar: Reducir el número de consultas simultáneas
      // Agrupar consultas relacionadas y usar transacciones cuando sea posible
      
      // Primera ronda: Estadísticas básicas (menos consultas)
      const basicStats = await Promise.allSettled([
        // Homestays
        prisma.homestay.count({ where: homestayWhere }),
        prisma.homestay.count({ where: { ...homestayWhere, status: 'active' } }),
        
        // Users (solo para super_admin)
        user.role === 'super_admin' ? prisma.admin_users.count() : Promise.resolve(0),
        user.role === 'super_admin' ? prisma.admin_users.count({ where: { is_active: true } }) : Promise.resolve(0),
        
        // Activities
        prisma.activities.count({ where: activityWhere }),
        prisma.activities.count({ where: { ...activityWhere, status: 'active' } }),
        
        // Bookings
        prisma.booking.count({ where: bookingWhere }),
        prisma.booking.count({ 
          where: { 
            ...bookingWhere,
            created_at: { gte: thisMonth }
          }
        }),
        prisma.booking.count({ 
          where: { 
            ...bookingWhere,
            created_at: { gte: lastMonth, lt: thisMonth }
          }
        })
      ]);

      // Segunda ronda: Estadísticas de ingresos (consultas más pesadas)
      const revenueStats = await Promise.allSettled([
        prisma.payments.aggregate({
          where: {
            booking: bookingWhere,
            payment_status: 'COMPLETED'
          },
          _sum: {
            amount: true
          }
        }),
        prisma.payments.aggregate({
          where: {
            booking: bookingWhere,
            payment_status: 'COMPLETED',
            created_at: { gte: thisMonth }
          },
          _sum: {
            amount: true
          }
        }),
        prisma.payments.aggregate({
          where: {
            booking: bookingWhere,
            payment_status: 'COMPLETED',
            created_at: { gte: lastMonth, lt: thisMonth }
          },
          _sum: {
            amount: true
          }
        })
      ]);

      // Tercera ronda: Datos recientes (consultas con includes)
      const recentData = await Promise.allSettled([
        prisma.booking.findMany({
          where: bookingWhere,
          include: {
            homestayRoom: {
              include: {
                homestay: {
                  select: {
                    title: true,
                    location: true
                  }
                }
              }
            },
            landing_page_user: {
              select: {
                name: true,
                email: true
              }
            },
            payments: {
              where: { payment_status: 'COMPLETED' },
              select: { amount: true }
            }
          },
          orderBy: { created_at: 'desc' },
          take: 5
        }),
        
        // Recent users (solo para super_admin)
        user.role === 'super_admin' ? prisma.admin_users.findMany({
          select: {
            id: true,
            name: true,
            email: true,
            role: true,
            created_at: true
          },
          orderBy: { created_at: 'desc' },
          take: 5
        }) : Promise.resolve([])
      ]);

      // Extract values from Promise.allSettled results
      const getValue = (result: PromiseSettledResult<any>, defaultValue: any = 0) => {
        return result.status === 'fulfilled' ? result.value : defaultValue;
      };

      const getArrayValue = (result: PromiseSettledResult<any>, defaultValue: any = []) => {
        return result.status === 'fulfilled' ? result.value : defaultValue;
      };

      // Calculate revenue percentages
      const currentRevenue = Number(getValue(revenueStats[1])._sum?.amount) || 0;
      const previousRevenue = Number(getValue(revenueStats[2])._sum?.amount) || 0;
      const revenueChange = previousRevenue > 0 
        ? ((currentRevenue - previousRevenue) / previousRevenue) * 100 
        : 0;

      // Calculate booking percentages
      const bookingChange = getValue(basicStats[8]) > 0 
        ? ((getValue(basicStats[7]) - getValue(basicStats[8])) / getValue(basicStats[8])) * 100 
        : 0;

      return NextResponse.json({
        homestays: {
          total: getValue(basicStats[0]),
          active: getValue(basicStats[1])
        },
        users: {
          total: getValue(basicStats[2]),
          active: getValue(basicStats[3])
        },
        activities: {
          total: getValue(basicStats[4]),
          active: getValue(basicStats[5])
        },
        bookings: {
          total: getValue(basicStats[6]),
          thisMonth: getValue(basicStats[7]),
          lastMonth: getValue(basicStats[8]),
          change: bookingChange
        },
        revenue: {
          total: Number(getValue(revenueStats[0])._sum?.amount) || 0,
          thisMonth: currentRevenue,
          lastMonth: previousRevenue,
          change: revenueChange
        },
        recent: {
          bookings: getArrayValue(recentData[0]),
          users: getArrayValue(recentData[1])
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