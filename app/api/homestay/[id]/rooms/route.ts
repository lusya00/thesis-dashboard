import { prisma } from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

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
    
    const rooms = await prisma.homestayRoom.findMany({
      where: { homestay_id: id },
      include: {
        relation_feature_room: {
          include: {
            room_features: true
          }
        }
      }
    });
    
    return NextResponse.json(rooms);
  } catch (error) {
    console.error('Error fetching rooms:', error);
    return NextResponse.json(
      { error: 'Error fetching rooms' }, 
      { status: 500 }
    );
  }
}

export async function POST(
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
    
    const body = await request.json();
    const { 
      title,
      description,
      room_number,
      number_people,
      max_occupancy,
      price,
      currency,
      size,
      features
    } = body;
    
    if (!title || !number_people || !max_occupancy || !price) {
      return NextResponse.json(
        { error: 'Missing required fields' }, 
        { status: 400 }
      );
    }
    
    const room = await prisma.homestayRoom.create({
      data: {
        homestay_id: id,
        title,
        description,
        room_number,
        number_people,
        max_occupancy,
        price,
        currency: currency || 'IDR',
        size,
        relation_feature_room: {
          create: features?.map((featureId: number) => ({
            room_feature_id: featureId,
            is_available: true
          })) || []
        }
      },
      include: {
        relation_feature_room: {
          include: {
            room_features: true
          }
        }
      }
    });
    
    return NextResponse.json(room, { status: 201 });
  } catch (error) {
    console.error('Error creating room:', error);
    return NextResponse.json(
      { error: 'Error creating room' }, 
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const id = parseInt((await params).id);
    const roomId = parseInt(request.nextUrl.searchParams.get('roomId') || '0');
    
    if (isNaN(id) || isNaN(roomId)) {
      return NextResponse.json(
        { error: 'Invalid ID format' }, 
        { status: 400 }
      );
    }
    
    const body = await request.json();
    const { 
      title,
      description,
      room_number,
      number_people,
      max_occupancy,
      price,
      currency,
      size,
      features
    } = body;
    
    if (!title || !number_people || !max_occupancy || !price) {
      return NextResponse.json(
        { error: 'Missing required fields' }, 
        { status: 400 }
      );
    }
    
    // Update room
    const room = await prisma.homestayRoom.update({
      where: {
        id: roomId,
        homestay_id: id
      },
      data: {
        title,
        description,
        room_number,
        number_people,
        max_occupancy,
        price,
        currency: currency || 'IDR',
        size
      }
    });
    
    // Update features if provided
    if (features) {
      // Delete existing features
      await prisma.relation_feature_room.deleteMany({
        where: {
          homestay_id: roomId
        }
      });
      
      // Create new features
      await prisma.relation_feature_room.createMany({
        data: features.map((featureId: number) => ({
          room_feature_id: featureId,
          homestay_id: roomId,
          is_available: true
        }))
      });
    }
    
    // Get updated room with features
    const updatedRoom = await prisma.homestayRoom.findUnique({
      where: { id: roomId },
      include: {
        relation_feature_room: {
          include: {
            room_features: true
          }
        }
      }
    });
    
    return NextResponse.json(updatedRoom);
  } catch (error) {
    console.error('Error updating room:', error);
    return NextResponse.json(
      { error: 'Error updating room' }, 
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const id = parseInt((await params).id);
    const roomId = parseInt(request.nextUrl.searchParams.get('roomId') || '0');
    
    if (isNaN(id) || isNaN(roomId)) {
      return NextResponse.json(
        { error: 'Invalid ID format' }, 
        { status: 400 }
      );
    }
    
    await prisma.homestayRoom.delete({
      where: {
        id: roomId,
        homestay_id: id
      }
    });
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting room:', error);
    return NextResponse.json(
      { error: 'Error deleting room' }, 
      { status: 500 }
    );
  }
} 