import { prisma } from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { deleteHomestayImageServer } from '@/lib/supabase-server';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const id = parseInt((await params).id);
    
    if (isNaN(id)) {
      return NextResponse.json(
        { error: 'Invalid ID format' }, 
        { status: 400 }
      );
    }
    
    const homestay = await prisma.homestay.findUnique({
      where: { id },
      include: {
        admin_users: {
          select: {
            id: true,
            name: true,
            email: true,
          }
        },
        homestayImages: {
          orderBy: [
            { is_primary: 'desc' },
            { order: 'asc' }
          ]
        },
        homestayRoom: {
          include: {
            relation_feature_room: {
              include: {
                room_features: true
              }
            }
          }
        }
      }
    });
    
    if (!homestay) {
      return NextResponse.json(
        { error: 'Homestay not found' }, 
        { status: 404 }
      );
    }
    
    return NextResponse.json(homestay);
  } catch (error) {
    console.error('Error fetching homestay:', error);
    return NextResponse.json(
      { error: 'Error fetching homestay' }, 
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await auth();
    
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const id = parseInt((await params).id);
    
    if (isNaN(id)) {
      return NextResponse.json(
        { error: 'Invalid ID format' }, 
        { status: 400 }
      );
    }

    const body = await request.json();
    
    const { 
      title, 
      description, 
      user_id, 
      status, 
      has_rooms, 
      location, 
      address, 
      base_price, 
      max_guests, 
      contact_number 
    } = body;
    
    // Validate required fields
    if (!title || !location || !address) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Determine user_id based on role
    let finalUserId = user_id;
    
    // If user is homestay_owner, they can only update their own homestays
    if (session.user.role === 'homestay_owner') {
      finalUserId = parseInt(session.user.id);
    }
    // super_admin and activity_manager can update any homestay
    
    const updatedHomestay = await prisma.homestay.update({
      where: { id },
      data: {
        title,
        description,
        user_id: finalUserId,
        status: status || 'active',
        has_rooms: has_rooms || false,
        location,
        address,
        base_price,
        max_guests,
        contact_number
      }
    });
    
    return NextResponse.json(updatedHomestay);
  } catch (error) {
    console.error('Error updating homestay:', error);
    return NextResponse.json(
      { error: 'Error updating homestay' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await auth();
    
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const id = parseInt((await params).id);
    
    if (isNaN(id)) {
      return NextResponse.json(
        { error: 'Invalid ID format' }, 
        { status: 400 }
      );
    }

    // Check if homestay exists
    const homestay = await prisma.homestay.findUnique({
      where: { id },
      include: {
        homestayImages: true,
        homestayRoom: {
          include: {
            booking: true
          }
        }
      }
    });

    if (!homestay) {
      return NextResponse.json(
        { error: 'Homestay not found' }, 
        { status: 404 }
      );
    }

    // Check permissions
    if (session.user.role === 'homestay_owner' && homestay.user_id !== parseInt(session.user.id)) {
      return NextResponse.json(
        { error: 'Forbidden: You can only delete your own homestays' }, 
        { status: 403 }
      );
    }

    // Check if there are active bookings
    const hasActiveBookings = homestay.homestayRoom.some(room => 
      room.booking.some(booking => 
        booking.status === 'confirmed' || booking.status === 'pending'
      )
    );

    if (hasActiveBookings) {
      return NextResponse.json(
        { error: 'Cannot delete homestay with active bookings' }, 
        { status: 400 }
      );
    }

    // Delete images from Supabase Storage first
    if (homestay.homestayImages.length > 0) {
      const deleteImagePromises = homestay.homestayImages.map(image => 
        deleteHomestayImageServer(image.img_url)
      );
      
      try {
        await Promise.all(deleteImagePromises);
      } catch (error) {
        console.error('Error deleting images from storage:', error);
        // Continue with deletion even if image deletion fails
      }
    }

    // Delete homestay (this will cascade delete all related records)
    await prisma.homestay.delete({
      where: { id }
    });
    
    return NextResponse.json(
      { message: 'Homestay deleted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error deleting homestay:', error);
    return NextResponse.json(
      { error: 'Error deleting homestay' },
      { status: 500 }
    );
  }
} 