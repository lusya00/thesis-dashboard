import { prisma } from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
    const users = await prisma.admin_users.findMany({
        where: {
            is_active: true
        },
        select: {
            id: true,
            name: true,
            email: true,
            username: true,
            role: true
        },
        orderBy: {
            name: 'asc'
        }
    });
    return NextResponse.json(users);
} 