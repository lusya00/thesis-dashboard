import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const { status, is_paid } = body;

    const updateData: any = {};
    
    if (status !== undefined) {
      updateData.status = status;
      if (status === 'cancelled') {
        updateData.cancelled_at = new Date();
      }
    }
    
    if (is_paid !== undefined) {
      updateData.is_paid = is_paid;
    }

    const booking = await prisma.booking.update({
      where: {
        id: parseInt(id)
      },
      data: updateData
    });

    return NextResponse.json(booking);
  } catch (error) {
    console.error('Error updating booking:', error);
    return NextResponse.json(
      { error: 'Error updating booking' },
      { status: 500 }
    );
  }
} 