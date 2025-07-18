import { prisma } from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/lib/auth';

export async function GET(request: NextRequest) {
    try {
        // Get current user session
        const session = await auth();
        
        if (!session?.user) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const { user } = session;
        const { searchParams } = new URL(request.url);
        const page = parseInt(searchParams.get('page') || '1');
        const limit = parseInt(searchParams.get('limit') || '10');
        const search = searchParams.get('search') || '';
        const status = searchParams.get('status') || '';
        const owner = searchParams.get('owner') || '';

        const skip = (page - 1) * limit;
        
        // Build where clause based on user role
        let whereClause: any = {};
        
        // If user is homestay_owner, only show their homestays
        if (user.role === 'homestay_owner') {
            whereClause.user_id = parseInt(user.id);
        }
        // super_admin and activity_manager can see all homestays

        // Add search filter
        if (search) {
            whereClause.OR = [
                { title: { contains: search, mode: 'insensitive' } },
                { location: { contains: search, mode: 'insensitive' } }
            ];
        }

        // Add status filter
        if (status && status !== 'all') {
            whereClause.status = status;
        }

        // Add owner filter
        if (owner && owner !== 'all') {
            whereClause.user_id = parseInt(owner);
        }

        // Get homestays with pagination
        const [homestays, total] = await Promise.all([
            prisma.homestay.findMany({
                where: whereClause,
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
                },
                orderBy: {
                    created_at: 'desc'
                },
                skip,
                take: limit
            }),
            prisma.homestay.count({ where: whereClause })
        ]);
        
        return NextResponse.json({
            homestays,
            pagination: {
                page,
                limit,
                total,
                pages: Math.ceil(total / limit)
            }
        });
    } catch (error) {
        console.error('Error fetching homestays:', error);
        return NextResponse.json(
            { error: 'Error fetching homestays' },
            { status: 500 }
        );
    }
}

export async function POST(request: NextRequest) {
    try {
        const session = await auth();
        
        if (!session?.user) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
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
        if (!title || !location || !address) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Determine user_id based on role
        let finalUserId = user_id;
        
        // If user is homestay_owner, they can only create homestays for themselves
        if (session.user.role === 'homestay_owner') {
            finalUserId = parseInt(session.user.id);
        }
        // super_admin and activity_manager can create homestays for any user
        
        const newHomestay = await prisma.homestay.create({
            data: {
                title,
                description,
                user_id: finalUserId,
                status: status || 'active',
                has_rooms: has_rooms || false,
                location,
                address,
                base_price,
                max_guests,
                contact_number
            }
        });
        
        return NextResponse.json(newHomestay, { status: 201 });
    } catch (error) {
        console.error('Error creating homestay:', error);
        return NextResponse.json(
            { error: 'Error creating homestay' },
            { status: 500 }
        );
    }
}
