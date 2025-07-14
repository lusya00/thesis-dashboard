import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { deleteHomestayImage } from '@/lib/supabase'

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {


    const imageId = parseInt((await params).id)
    
    if (isNaN(imageId)) {
      return NextResponse.json(
        { error: 'ID de imagen inválido' },
        { status: 400 }
      )
    }

    // Buscar la imagen
    const image = await prisma.homestayImages.findUnique({
      where: { id: imageId },
      include: {
        homestay: {
          select: {
            id: true,
            user_id: true
          }
        }
      }
    })

    if (!image) {
      return NextResponse.json(
        { error: 'Imagen no encontrada' },
        { status: 404 }
      )
    }


    // Eliminar la imagen de Supabase Storage
    await deleteHomestayImage(image.img_url)

    // Eliminar el registro de la base de datos
    await prisma.homestayImages.delete({
      where: { id: imageId }
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error eliminando imagen:', error)
    return NextResponse.json(
      { error: 'Error al eliminar la imagen' },
      { status: 500 }
    )
  }
} 