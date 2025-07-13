import { prisma } from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const features = await prisma.room_features.findMany({
      orderBy: {
        category: 'asc'
      }
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