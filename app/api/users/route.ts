import { prisma } from '@/lib/db';
import { user_role } from 'generated/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
    const users = await prisma.admin_users.findMany({
        where: {
            is_active: true,
            role: user_role.homestay_owner || user_role.activity_manager
        },
        orderBy: {
            name: 'asc'
        }
    });
    return NextResponse.json(users);
} 