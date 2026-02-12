import { prisma } from '@/lib/db'
import { uploadHomestayImageServer, validateWebPFileServer } from '@/lib/supabase-server'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    console.log('Starting homestay image upload process...')

    const formData = await request.formData()
    const homestayId = formData.get('homestayId') as string
    const file = formData.get('file') as File
    const isPrimary = formData.get('isPrimary') === 'true'

    console.log('Form data received:', { homestayId, fileName: file?.name, fileSize: file?.size, fileType: file?.type, isPrimary })

    if (!homestayId || !file) {
      console.log('Missing required fields')
      return NextResponse.json(
        { error: 'HomestayId and file are required' },
        { status: 400 }
      )
    }

    // Validate file
    console.log('Validating file...')
    const validation = validateWebPFileServer(file)
    console.log('Validation result:', validation)
    if (!validation.valid) {
      return NextResponse.json(
        { error: validation.error },
        { status: 400 }
      )
    }

    // Check if homestay exists
    console.log('Checking if homestay exists...')
    const homestayExists = await prisma.homestay.findUnique({
      where: { id: parseInt(homestayId) }
    })

    if (!homestayExists) {
      console.log('Homestay not found')
      return NextResponse.json(
        { error: 'Homestay not found' },
        { status: 404 }
      )
    }

    // Upload to S3
    console.log('Uploading to S3...')
    const imageUrl = await uploadHomestayImageServer(file, parseInt(homestayId))
    console.log('S3 upload successful, URL:', imageUrl)

    // If this is primary, update other images to not be primary
    if (isPrimary) {
      await prisma.homestayImages.updateMany({
        where: { homestay_id: parseInt(homestayId) },
        data: { is_primary: false }
      })
    }

    // Get the last order
    const lastImage = await prisma.homestayImages.findFirst({
      where: { homestay_id: parseInt(homestayId) },
      orderBy: { order: 'desc' }
    })

    // Create database record
    const homestayImage = await prisma.homestayImages.create({
      data: {
        img_url: imageUrl,
        homestay_id: parseInt(homestayId),
        is_primary: isPrimary,
        order: (lastImage?.order || 0) + 1
      }
    })

    console.log('Database record created:', homestayImage)
    return NextResponse.json(homestayImage)
  } catch (error) {
    console.error('Error uploading homestay image:', error)
    return NextResponse.json(
      { error: 'Failed to upload image' },
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