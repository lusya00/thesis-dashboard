import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { uploadHomestayImage, validateWebPFile } from '@/lib/supabase'

export async function POST(request: NextRequest) {
  try {


    const formData = await request.formData()
    const homestayId = formData.get('homestayId') as string
    const file = formData.get('file') as File
    const isPrimary = formData.get('isPrimary') === 'true'

    if (!homestayId || !file) {
      return NextResponse.json(
        { error: 'HomestayId y archivo son requeridos' },
        { status: 400 }
      )
    }

    // Validar el archivo
    const validation = validateWebPFile(file)
    if (!validation.valid) {
      return NextResponse.json(
        { error: validation.error },
        { status: 400 }
      )
    }

    // Verificar que el homestay existe
    const homestayExists = await prisma.homestay.findUnique({
      where: { id: parseInt(homestayId) }
    })

    if (!homestayExists) {
      return NextResponse.json(
        { error: 'Homestay no encontrado' },
        { status: 404 }
      )
    }

    // Subir imagen a Supabase usando el cliente admin
    const imageUrl = await uploadHomestayImage(file, parseInt(homestayId))
    console.log(imageUrl)

    // Si es imagen primaria, actualizar la anterior
    if (isPrimary) {
      await prisma.homestayImages.updateMany({
        where: { homestay_id: parseInt(homestayId) },
        data: { is_primary: false }
      })
    }

    // Obtener el último orden
    const lastImage = await prisma.homestayImages.findFirst({
      where: { homestay_id: parseInt(homestayId) },
      orderBy: { order: 'desc' }
    })

    // Crear registro en la base de datos
    const homestayImage = await prisma.homestayImages.create({
      data: {
        img_url: imageUrl,
        homestay_id: parseInt(homestayId),
        is_primary: isPrimary,
        order: (lastImage?.order || 0) + 1
      }
    })

    return NextResponse.json(homestayImage)
  } catch (error) {
    console.error('Error subiendo imagen:', error)
    return NextResponse.json(
      { error: 'Error al subir la imagen' },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const homestayId = searchParams.get('homestayId')

    if (!homestayId) {
      return NextResponse.json(
        { error: 'HomestayId es requerido' },
        { status: 400 }
      )
    }

    const images = await prisma.homestayImages.findMany({
      where: { homestay_id: parseInt(homestayId) },
      orderBy: [
        { is_primary: 'desc' },
        { order: 'asc' }
      ]
    })

    return NextResponse.json(images)
  } catch (error) {
    console.error('Error obteniendo imágenes:', error)
    return NextResponse.json(
      { error: 'Error al obtener las imágenes' },
      { status: 500 }
    )
  }
} 