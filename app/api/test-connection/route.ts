import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function GET() {
  try {
    // Prueba simple de conexión con una sola consulta
    const startTime = Date.now();
    
    const result = await prisma.$queryRaw`SELECT 1 as test`;
    
    const endTime = Date.now();
    const responseTime = endTime - startTime;
    
    return NextResponse.json({
      success: true,
      message: 'Conexión a la base de datos exitosa',
      responseTime: `${responseTime}ms`,
      result: result
    });
    
  } catch (error) {
    console.error('Error testing database connection:', error);
    
    return NextResponse.json({
      success: false,
      message: 'Error de conexión a la base de datos',
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
} 