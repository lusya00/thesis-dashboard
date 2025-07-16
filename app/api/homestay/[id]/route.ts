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
    const id = parseInt((await params).id);
    
    if (isNaN(id)) {
      return NextResponse.json(
        { error: 'Invalid ID format' }, 
        { status: 400 }
      );
    }
    
    // Check if homestay exists
    const existingHomestay = await prisma.homestay.findUnique({
      where: { id }
    });
    
    if (!existingHomestay) {
      return NextResponse.json(
        { error: 'Homestay not found' }, 
        { status: 404 }
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
    if (!title || !user_id || !location || !address) {
      return NextResponse.json(
        { error: 'Missing required fields' }, 
        { status: 400 }
      );
    }
    
    const updatedHomestay = await prisma.homestay.update({
      where: { id },
      data: {
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
    const id = parseInt((await params).id);
    
    if (isNaN(id)) {
      return NextResponse.json(
        { error: 'Invalid ID format' }, 
        { status: 400 }
      );
    }
    
    // Check if homestay exists
    const existingHomestay = await prisma.homestay.findUnique({
      where: { id }
    });
    
    if (!existingHomestay) {
      return NextResponse.json(
        { error: 'Homestay not found' }, 
        { status: 404 }
      );
    }
    
    await prisma.homestay.delete({
      where: { id }
    });
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting homestay:', error);
    return NextResponse.json(
      { error: 'Error deleting homestay' }, 
      { status: 500 }
    );
  }
} 