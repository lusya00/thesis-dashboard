import { prisma } from '@/lib/db';
import { user_role } from 'generated/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
    const users = await prisma.admin_users.findMany({
        where: {
            is_active: true,
            role: {
                in: [user_role.homestay_owner, user_role.activity_manager] 
            }
        },
        orderBy: {
            name: 'asc'
        }
    });
    return NextResponse.json(users);
}

// POST - Create new user 
export async function POST(request: NextRequest) {
    const body = await request.json();
    
    if (!body.username || !body.email || !body.name) {
        return NextResponse.json(
            { error: 'Username, email, and name are required' },
            { status: 400 }
        );
    }

    const allowedRole = [user_role.homestay_owner, user_role.activity_manager].includes(body.role)
        ? body.role
        : user_role.homestay_owner; 

    const newUser = await prisma.admin_users.create({
        data: {
            username: body.username,
            email: body.email,
            name: body.name,
            password: body.password, 
            role: allowedRole,
            is_active: true 
        }
    });

    return NextResponse.json(newUser);
}

// PUT - Update user 
export async function PUT(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('id');
    
    if (!userId || isNaN(parseInt(userId))) {
        return NextResponse.json(
            { error: 'Valid user ID is required' },
            { status: 400 }
        );
    }

    const body = await request.json();
    
    // Blok update jika mencoba mengubah ke role yang tidak diizinkan
    if (body.role && ![user_role.homestay_owner, user_role.activity_manager].includes(body.role)) {
        return NextResponse.json(
            { error: 'Role can only be set to homestay_owner or activity_manager' },
            { status: 400 }
        );
    }

    const updatedUser = await prisma.admin_users.update({
        where: {
            id: parseInt(userId),
            is_active: true 
        },
        data: {
            username: body.username,
            email: body.email,
            name: body.name,
            role: body.role 
        }
    });

    return NextResponse.json(updatedUser);
}

// DELETE User
export async function DELETE(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('id');
    
    if (!userId || isNaN(parseInt(userId))) {
        return NextResponse.json(
            { error: 'Valid user ID is required' },
            { status: 400 }
        );
    }

    try {
        const deletedUser = await prisma.admin_users.delete({
            where: { id: parseInt(userId) }
        });

        return NextResponse.json({ 
            success: true,
            message: 'User permanently deleted',
            data: deletedUser 
        });

    } catch (error) {
        console.error('DELETE Error:', error);
        
        // Solusi 1: Type Guard
        if (error instanceof Error && 'code' in error && error.code === 'P2025') {
            return NextResponse.json(
                { error: 'User not found' },
                { status: 404 }
            );
        }

        // Solusi 2: Type Assertion (alternatif)
        // const prismaError = error as { code?: string };
        // if (prismaError.code === 'P2025') { ... }

        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
