import { hashPassword } from '@/lib/password';
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

export async function POST(request: NextRequest) {
    const body = await request.json();
    
    if (!body.username || !body.password || !body.email || !body.name) {
        return NextResponse.json(
            { error: 'Username, password, email, and name are required' },
            { status: 400 }
        );
    }

    // Hash password
    const hashedPassword = await hashPassword(body.password);

    // Validasi role
    const allowedRoles = [user_role.homestay_owner, user_role.activity_manager];
    const role = allowedRoles.includes(body.role) 
        ? body.role 
        : user_role.homestay_owner; 

    const newUser = await prisma.admin_users.create({
        data: {
            username: body.username,
            email: body.email,
            name: body.name,
            password: hashedPassword,
            role: role,
            is_active: true
        }
    });

    const { password: _, ...userData } = newUser;
    return NextResponse.json(userData, { status: 201 });
}

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
        
        if (error instanceof Error && 'code' in error && error.code === 'P2025') {
            return NextResponse.json(
                { error: 'User not found' },
                { status: 404 }
            );
        }

        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
