import { prisma } from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': 'https://untung-jawa.vercel.app',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
}

export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    const id = (await params).id;
    const parsedId = parseInt(id);
    if (isNaN(parsedId)) {
        return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });
    }
    
    const activity = await prisma.activities.findUnique({
        where: { id: parsedId },
        include: {
            admin_users: {
                select: {
                    id: true,
                    name: true,
                    email: true,
                }
            },
            homestay: {
                select: {
                    id: true,
                    title: true,
                    location: true,
                }
            },
            activity_images: {
                orderBy: [
                    { is_primary: 'desc' },
                    { order: 'asc' }
                ]
            },
            activity_bookings: {
                select: {
                    id: true,
                    status: true,
                    participant_count: true,
                }
            },
            activity_schedules: {
                select: {
                    id: true,
                    date: true,
                    start_time: true,
                    end_time: true,
                    available_spots: true,
                    booked_spots: true,
                }
            }
        }
    });
    
    if (!activity) {
        return NextResponse.json({ error: 'Activity not found' }, { status: 404 });
    }
    
    return new NextResponse(JSON.stringify(activity), {
        status: 200,
        headers: {
            'Access-Control-Allow-Origin': 'https://untung-jawa.vercel.app',
            'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        },
    });
}

export async function PUT(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    try {
        const id = (await params).id;
        const parsedId = parseInt(id);
        
        if (isNaN(parsedId)) {
            return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });
        }
        
        const body = await request.json();
        
        const { 
            title, 
            description, 
            short_description,
            category, 
            price,
            duration_minutes,
            max_participants,
            min_participants,
            location, 
            address, 
            contact_phone,
            contact_email,
            status,
            is_featured,
            difficulty_level,
            age_restriction,
            includes,
            excludes,
            requirements,
            cancellation_policy,
            meeting_point,
            homestay_id,
            manager_id
        } = body;
        
        // Verificar si la actividad existe
        const existingActivity = await prisma.activities.findUnique({
            where: { id: parsedId }
        });
        
        if (!existingActivity) {
            return NextResponse.json({ error: 'Activity not found' }, { status: 404 });
        }
        
        // Actualizar la actividad
        const updatedActivity = await prisma.activities.update({
            where: { id: parsedId },
            data: {
                title,
                description,
                short_description,
                category,
                price: price ? parseFloat(price) : undefined,
                duration_minutes: duration_minutes ? parseInt(duration_minutes) : undefined,
                max_participants: max_participants ? parseInt(max_participants) : undefined,
                min_participants: min_participants ? parseInt(min_participants) : undefined,
                location,
                address,
                contact_phone,
                contact_email,
                status,
                is_featured,
                difficulty_level,
                age_restriction,
                includes,
                excludes,
                requirements,
                cancellation_policy,
                meeting_point,
                homestay_id: homestay_id ? parseInt(homestay_id) : undefined,
                manager_id: manager_id ? parseInt(manager_id) : undefined
            },
            include: {
                admin_users: {
                    select: {
                        id: true,
                        name: true,
                        email: true,
                    }
                },
                homestay: {
                    select: {
                        id: true,
                        title: true,
                        location: true,
                    }
                }
            }
        });
        
        return NextResponse.json(updatedActivity);
    } catch (error) {
        console.error('Error updating activity:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}

export async function DELETE(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    try {
        const id = (await params).id;
        const parsedId = parseInt(id);
        
        if (isNaN(parsedId)) {
            return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });
        }
        
        // Verificar si la actividad existe
        const existingActivity = await prisma.activities.findUnique({
            where: { id: parsedId }
        });
        
        if (!existingActivity) {
            return NextResponse.json({ error: 'Activity not found' }, { status: 404 });
        }
        
        // Eliminar la actividad
        await prisma.activities.delete({
            where: { id: parsedId }
        });
        
        return NextResponse.json({ message: 'Activity deleted successfully' });
    } catch (error) {
        console.error('Error deleting activity:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
} 