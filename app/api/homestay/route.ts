import { prisma } from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
    const homestays = await prisma.homestay.findMany({
        include: {
            admin_users: {
                select: {
                    id: true,
                    name: true,
                    email: true,
                }
            }
        },
        orderBy: {
            created_at: 'desc'
        }
    });
    return NextResponse.json(homestays);
}

export async function POST(request: NextRequest) {
    try {
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
        
        // Validar campos requeridos
        if (!title || !user_id || !location || !address) {
            return NextResponse.json(
                { error: 'Faltan campos requeridos' },
                { status: 400 }
            );
        }
        
        const newHomestay = await prisma.homestay.create({
            data: {
                title,
                description,
                user_id,
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
        console.error('Error al crear homestay:', error);
        return NextResponse.json(
            { error: 'Error al crear homestay' },
            { status: 500 }
        );
    }
}
