import { prisma } from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const features = await prisma.room_features.findMany({
      orderBy: [
        { category: 'asc' },
        { title: 'asc' }
      ]
    });
    
    return NextResponse.json(features);
  } catch (error) {
    console.error('Error fetching room features:', error);
    return NextResponse.json(
      { error: 'Error fetching room features' }, 
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { title, description, symbol, category } = body;
    
    if (!title || !category) {
      return NextResponse.json(
        { error: 'Title and category are required' }, 
        { status: 400 }
      );
    }
    
    const feature = await prisma.room_features.create({
      data: {
        title,
        description,
        symbol,
        category
      }
    });
    
    return NextResponse.json(feature, { status: 201 });
  } catch (error) {
    console.error('Error creating room feature:', error);
    return NextResponse.json(
      { error: 'Error creating room feature' }, 
      { status: 500 }
    );
  }
} 