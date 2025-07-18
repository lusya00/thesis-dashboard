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
    
    // Build where clause based on user role
    let whereClause: any = {};
    
    // If user is homestay_owner, only show bookings for their homestays
    if (user.role === 'homestay_owner') {
      whereClause.homestayRoom = {
        homestay: {
          user_id: parseInt(user.id)
        }
      };
    }
    // super_admin and activity_manager can see all bookings

    const bookings = await prisma.booking.findMany({
      where: whereClause,
      include: {
        homestayRoom: {
          include: {
            homestay: {
              select: {
                id: true,
                title: true,
                location: true,
                user_id: true
              }
            }
          }
        },
        landing_page_user: {
          select: {
            id: true,
            name: true,
            email: true,
            phone_number: true
          }
        },
        payments: true
      },
      orderBy: {
        created_at: 'desc'
      }
    });

    return NextResponse.json(bookings);
  } catch (error) {
    console.error('Error fetching bookings:', error);
    return NextResponse.json(
      { error: 'Error fetching bookings' },
      { status: 500 }
    );
  }
} 