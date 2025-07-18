import { prisma } from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

// Configuración de CORS
const corsHeaders = {
  'Access-Control-Allow-Origin': '*', // Permite todos los orígenes - puedes cambiarlo a dominios específicos
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',
  'Access-Control-Max-Age': '86400', // 24 horas
};

// CORS preflight handler
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: corsHeaders,
  });
}

export async function GET(request: NextRequest) {
    try {
        const activities = await prisma.activities.findMany({
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
                }
            },
            orderBy: {
                created_at: 'desc'
            }
        });
        
        return new NextResponse(JSON.stringify(activities), {
          status: 200,
          headers: {
            ...corsHeaders,
            'Content-Type': 'application/json',
          },
        });
    } catch (error) {
        console.error('Error fetching activities:', error);
        return new NextResponse(
            JSON.stringify({ error: 'Internal server error' }), 
            { 
                status: 500,
                headers: {
                    ...corsHeaders,
                    'Content-Type': 'application/json',
                }
            }
        );
    }
}

export async function POST(request: NextRequest) {
    try {
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
        
        // Validar campos requeridos
        if (!title || !category || !price || !max_participants || !location) {
            return new NextResponse(
                JSON.stringify({ error: 'Missing required fields: title, category, price, max_participants, location' }),
                { 
                    status: 400,
                    headers: {
                        ...corsHeaders,
                        'Content-Type': 'application/json',
                    }
                }
            );
        }
        
        // Crear la actividad
        const activity = await prisma.activities.create({
            data: {
                title,
                description,
                short_description,
                category,
                price: parseFloat(price),
                duration_minutes: duration_minutes ? parseInt(duration_minutes) : null,
                max_participants: parseInt(max_participants),
                min_participants: min_participants ? parseInt(min_participants) : 1,
                location,
                address,
                contact_phone,
                contact_email,
                status: status || 'active',
                is_featured: is_featured || false,
                difficulty_level: difficulty_level || 'easy',
                age_restriction,
                includes,
                excludes,
                requirements,
                cancellation_policy,
                meeting_point,
                homestay_id: homestay_id ? parseInt(homestay_id) : null,
                manager_id: manager_id ? parseInt(manager_id) : null
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
        
        return new NextResponse(
            JSON.stringify(activity), 
            { 
                status: 201,
                headers: {
                    ...corsHeaders,
                    'Content-Type': 'application/json',
                }
            }
        );
    } catch (error) {
        console.error('Error creating activity:', error);
        return new NextResponse(
            JSON.stringify({ error: 'Internal server error' }), 
            { 
                status: 500,
                headers: {
                    ...corsHeaders,
                    'Content-Type': 'application/json',
                }
            }
        );
    }
} 