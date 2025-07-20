import { prisma } from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

// Configuración de CORS para acceso público
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',
  'Access-Control-Max-Age': '86400',
};

// CORS preflight handler
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: corsHeaders,
  });
}

export async function GET(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        const id = parseInt(params.id);
        
        if (isNaN(id)) {
            return new NextResponse(
                JSON.stringify({ 
                    success: false,
                    error: 'Invalid ID format',
                    message: 'El ID debe ser un número válido'
                }), 
                { 
                    status: 400,
                    headers: {
                        ...corsHeaders,
                        'Content-Type': 'application/json',
                    }
                }
            );
        }

        const activity = await prisma.activities.findUnique({
            where: { id },
            include: {
                // Información del administrador/manager
                admin_users: {
                    select: {
                        id: true,
                        name: true,
                        email: true,
                        username: true,
                        role: true,
                        is_active: true,
                    }
                },
                // Información del homestay asociado
                homestay: {
                    select: {
                        id: true,
                        title: true,
                        description: true,
                        location: true,
                        address: true,
                        status: true,
                        category: true,
                        base_price: true,
                        max_guests: true,
                        contact_number: true,
                        homestayImages: {
                            orderBy: [
                                { is_primary: 'desc' },
                                { order: 'asc' }
                            ],
                            select: {
                                id: true,
                                img_url: true,
                                is_primary: true,
                                order: true,
                            }
                        }
                    }
                },
                // Imágenes de la actividad
                activity_images: {
                    orderBy: [
                        { is_primary: 'desc' },
                        { order: 'asc' }
                    ],
                    select: {
                        id: true,
                        img_url: true,
                        is_primary: true,
                        order: true,
                        caption: true,
                    }
                },
                // Horarios de la actividad
                activity_schedules: {
                    orderBy: [
                        { date: 'asc' },
                        { start_time: 'asc' }
                    ],
                    select: {
                        id: true,
                        date: true,
                        start_time: true,
                        end_time: true,
                        available_spots: true,
                        booked_spots: true,
                        price_override: true,
                        is_available: true,
                        notes: true,
                    }
                },
                // Reservas de la actividad
                activity_bookings: {
                    orderBy: {
                        created_at: 'desc'
                    },
                    select: {
                        id: true,
                        booking_number: true,
                        participant_count: true,
                        total_price: true,
                        status: true,
                        payment_status: true,
                        booking_date: true,
                        participant_details: true,
                        special_requests: true,
                        notes: true,
                        created_at: true,
                        landing_page_user: {
                            select: {
                                id: true,
                                name: true,
                                last_name: true,
                                email: true,
                                phone_number: true,
                            }
                        }
                    }
                },
                // Reseñas de la actividad
                activity_reviews: {
                    orderBy: {
                        created_at: 'desc'
                    },
                    select: {
                        id: true,
                        rating: true,
                        comment: true,
                        is_verified: true,
                        created_at: true,
                        landing_page_user: {
                            select: {
                                id: true,
                                name: true,
                                last_name: true,
                            }
                        }
                    }
                }
            }
        });

        if (!activity) {
            return new NextResponse(
                JSON.stringify({ 
                    success: false,
                    error: 'Activity not found',
                    message: 'Actividad no encontrada'
                }), 
                { 
                    status: 404,
                    headers: {
                        ...corsHeaders,
                        'Content-Type': 'application/json',
                    }
                }
            );
        }

        // Calcular estadísticas adicionales
        const totalBookings = activity.activity_bookings.length;
        const confirmedBookings = activity.activity_bookings.filter(b => b.status === 'confirmed').length;
        const totalParticipants = activity.activity_bookings.reduce((sum, b) => sum + b.participant_count, 0);
        const averageRating = activity.activity_reviews.length > 0 
            ? activity.activity_reviews.reduce((sum, r) => sum + r.rating, 0) / activity.activity_reviews.length 
            : null;
        
        // Calcular disponibilidad de horarios
        const availableSchedules = activity.activity_schedules.filter(s => 
            s.is_available && s.available_spots > s.booked_spots
        );

        const activityWithStats = {
            ...activity,
            stats: {
                total_bookings: totalBookings,
                confirmed_bookings: confirmedBookings,
                total_participants: totalParticipants,
                average_rating: averageRating,
                review_count: activity.activity_reviews.length,
                available_schedules_count: availableSchedules.length,
            }
        };

        return new NextResponse(JSON.stringify({
            success: true,
            data: activityWithStats
        }), {
            status: 200,
            headers: {
                ...corsHeaders,
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        console.error('Error fetching activity:', error);
        return new NextResponse(
            JSON.stringify({ 
                success: false,
                error: 'Internal server error',
                message: 'Error al recuperar la actividad'
            }), 
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