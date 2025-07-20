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

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const category = searchParams.get('category');
        const status = searchParams.get('status');
        const isFeatured = searchParams.get('is_featured');
        const limit = searchParams.get('limit');
        const offset = searchParams.get('offset');

        // Construir filtros
        const where: any = {};
        
        if (category) {
            where.category = category;
        }
        
        if (status) {
            where.status = status;
        }
        
        if (isFeatured) {
            where.is_featured = isFeatured === 'true';
        }

        // Construir opciones de paginación
        const take = limit ? parseInt(limit) : undefined;
        const skip = offset ? parseInt(offset) : undefined;

        const activities = await prisma.activities.findMany({
            where,
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
                            where: { is_primary: true },
                            select: {
                                id: true,
                                img_url: true,
                                is_primary: true,
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
                    where: {
                        is_available: true,
                        date: {
                            gte: new Date()
                        }
                    },
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
            },
            orderBy: [
                { is_featured: 'desc' },
                { created_at: 'desc' }
            ],
            take,
            skip
        });

        // Calcular estadísticas adicionales para cada actividad
        const activitiesWithStats = activities.map(activity => {
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

            return {
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
        });
        
        return new NextResponse(JSON.stringify({
            success: true,
            data: activitiesWithStats,
            pagination: {
                limit: take,
                offset: skip,
                total: activitiesWithStats.length
            }
        }), {
          status: 200,
          headers: {
            ...corsHeaders,
            'Content-Type': 'application/json',
          },
        });
    } catch (error) {
        console.error('Error fetching activities:', error);
        return new NextResponse(
            JSON.stringify({ 
                success: false,
                error: 'Internal server error',
                message: 'Error al recuperar las actividades'
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