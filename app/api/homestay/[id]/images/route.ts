import { prisma } from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';
import { deleteHomestayImageServer } from '@/lib/supabase-server';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const id = parseInt((await params).id);
    
    if (isNaN(id)) {
      return NextResponse.json(
        { error: 'Invalid ID format' }, 
        { status: 400 }
      );
    }
    
    const images = await prisma.homestayImages.findMany({
      where: { homestay_id: id },
      orderBy: { order: 'asc' }
    });
    
    return NextResponse.json(images);
  } catch (error) {
    console.error('Error fetching images:', error);
    return NextResponse.json(
      { error: 'Error fetching images' }, 
      { status: 500 }
    );
  }
}

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const id = parseInt((await params).id);
    
    if (isNaN(id)) {
      return NextResponse.json(
        { error: 'Invalid ID format' }, 
        { status: 400 }
      );
    }
    
    const body = await request.json();
    const { img_url, is_primary, order } = body;
    
    if (!img_url) {
      return NextResponse.json(
        { error: 'Image URL is required' }, 
        { status: 400 }
      );
    }
    
    // If this is primary, unset any existing primary images
    if (is_primary) {
      await prisma.homestayImages.updateMany({
        where: { 
          homestay_id: id,
          is_primary: true
        },
        data: { is_primary: false }
      });
    }
    
    const image = await prisma.homestayImages.create({
      data: {
        img_url,
        homestay_id: id,
        is_primary: is_primary || false,
        order: order || 0
      }
    });
    
    return NextResponse.json(image, { status: 201 });
  } catch (error) {
    console.error('Error creating image:', error);
    return NextResponse.json(
      { error: 'Error creating image' }, 
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const id = parseInt((await params).id);
    const imageId = parseInt(request.nextUrl.searchParams.get('imageId') || '0');
    
    if (isNaN(id) || isNaN(imageId)) {
      return NextResponse.json(
        { error: 'Invalid ID format' }, 
        { status: 400 }
      );
    }
    
    // Primero obtener la información de la imagen para eliminar del storage
    const imageToDelete = await prisma.homestayImages.findUnique({
      where: {
        id: imageId,
        homestay_id: id
      }
    });
    
    if (!imageToDelete) {
      return NextResponse.json(
        { error: 'Image not found' }, 
        { status: 404 }
      );
    }
    
    // Eliminar del storage de Supabase primero
    if (imageToDelete.img_url) {
      try {
        await deleteHomestayImageServer(imageToDelete.img_url);
        console.log('Image deleted from storage:', imageToDelete.img_url);
      } catch (storageError) {
        console.error('Error deleting image from storage:', storageError);
        // Continuar con la eliminación de la base de datos incluso si falla el storage
      }
    }
    
    // Eliminar de la base de datos
    await prisma.homestayImages.delete({
      where: {
        id: imageId,
        homestay_id: id
      }
    });
    
    console.log('Image deleted from database:', imageId);
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting image:', error);
    
    // Manejar errores específicos de Prisma
    if (error && typeof error === 'object' && 'code' in error) {
      if (error.code === 'P2024') {
        return NextResponse.json(
          { error: 'Database connection timeout. Please try again.' }, 
          { status: 503 }
        );
      }
      if (error.code === 'P2025') {
        return NextResponse.json(
          { error: 'Image not found' }, 
          { status: 404 }
        );
      }
    }
    
    return NextResponse.json(
      { error: 'Error deleting image' }, 
      { status: 500 }
    );
  }
} 