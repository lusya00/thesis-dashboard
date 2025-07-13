import { prisma } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const user = await prisma.admin_users.findUnique({
      where: {
        id: parseInt(id),
      },
    });

    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(user);
  } catch (error) {
    console.error('Error fetching user:', error);
    return NextResponse.json(
      { error: 'Error fetching user' },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const { username, name, email, role, is_active } = body;

    // Validate required fields
    if (!username || !name || !email || !role) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Check if username or email already exists for other users
    const existingUser = await prisma.admin_users.findFirst({
      where: {
        AND: [
          {
            OR: [
              { username },
              { email },
            ],
          },
          {
            id: {
              not: parseInt(id),
            },
          },
        ],
      },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: 'Username or email already exists' },
        { status: 400 }
      );
    }

    const updatedUser = await prisma.admin_users.update({
      where: {
        id: parseInt(id),
      },
      data: {
        username,
        name,
        email,
        role,
        is_active,
        updated_at: new Date(),
      },
    });

    return NextResponse.json(updatedUser);
  } catch (error) {
    console.error('Error updating user:', error);
    return NextResponse.json(
      { error: 'Error updating user' },
      { status: 500 }
    );
  }
} 