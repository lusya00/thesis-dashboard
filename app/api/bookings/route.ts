import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function GET() {
  try {
    const bookings = await prisma.booking.findMany({
      include: {
        homestayRoom: {
          include: {
            homestay: {
              select: {
                id: true,
                title: true,
                location: true
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