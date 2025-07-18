import { prisma } from '@/lib/db';
import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const { password } = body;

    // Validate required fields
    if (!password) {
      return NextResponse.json(
        { error: 'Password is required' },
        { status: 400 }
      );
    }

    // Validate password length
    if (password.length < 6) {
      return NextResponse.json(
        { error: 'Password must be at least 6 characters long' },
        { status: 400 }
      );
    }

    // Check if user exists
    const existingUser = await prisma.admin_users.findUnique({
      where: {
        id: parseInt(id),
      },
    });

    if (!existingUser) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }

    // Hash the new password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Update the user's password
    const updatedUser = await prisma.admin_users.update({
      where: {
        id: parseInt(id),
      },
      data: {
        password: hashedPassword,
        updated_at: new Date(),
      },
    });

    // Don't return the password in the response
    const { password: _, ...userWithoutPassword } = updatedUser;

    return NextResponse.json({
      message: 'Password updated successfully',
      user: userWithoutPassword
    });
  } catch (error) {
    console.error('Error updating password:', error);
    return NextResponse.json(
      { error: 'Error updating password' },
      { status: 500 }
    );
  }
} 