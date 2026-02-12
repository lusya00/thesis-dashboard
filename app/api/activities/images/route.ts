import { prisma } from '@/lib/db'
import { deleteActivityImageServer, uploadActivityImageServer, validateWebPFileServer } from '@/lib/supabase-server'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    console.log('Starting activity image upload process...')

    const formData = await request.formData()
    const activityId = formData.get('activityId') as string
    const file = formData.get('file') as File
    const isPrimary = formData.get('isPrimary') === 'true'

    console.log('Form data received:', { activityId, fileName: file?.name, fileSize: file?.size, fileType: file?.type, isPrimary })

    if (!activityId || !file) {
      console.log('Missing required fields')
      return NextResponse.json(
        { error: 'ActivityId and file are required' },
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

    // Check if activity exists
    console.log('Checking if activity exists...')
    const activityExists = await prisma.activities.findUnique({
      where: { id: parseInt(activityId) }
    })

    if (!activityExists) {
      console.log('Activity not found')
      return NextResponse.json(
        { error: 'Activity not found' },
        { status: 404 }
      )
    }

    // Upload to S3
    console.log('Uploading to S3...')
    const imageUrl = await uploadActivityImageServer(file, parseInt(activityId))
    console.log('S3 upload successful, URL:', imageUrl)

    // If this is primary, update other images to not be primary
    if (isPrimary) {
      await prisma.activity_images.updateMany({
        where: { activity_id: parseInt(activityId) },
        data: { is_primary: false }
      })
    }

    // Get the last order
    const lastImage = await prisma.activity_images.findFirst({
      where: { activity_id: parseInt(activityId) },
      orderBy: { order: 'desc' }
    })

    // Create database record
    const activityImage = await prisma.activity_images.create({
      data: {
        img_url: imageUrl,
        activity_id: parseInt(activityId),
        is_primary: isPrimary,
        order: (lastImage?.order || 0) + 1
      }
    })

    console.log('Database record created:', activityImage)
    return NextResponse.json(activityImage)
  } catch (error) {
    console.error('Error uploading activity image:', error)
    return NextResponse.json(
      { error: 'Failed to upload image' },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const activityId = searchParams.get('activityId')

    if (!activityId) {
      return NextResponse.json(
        { error: 'Activity ID is required' },
        { status: 400 }
      )
    }

    const images = await prisma.activity_images.findMany({
      where: { activity_id: parseInt(activityId) },
      orderBy: { order: 'asc' }
    })

    return NextResponse.json({ images })

  } catch (error) {
    console.error('Error fetching activity images:', error)
    return NextResponse.json(
      { error: 'Failed to fetch images' },
      { status: 500 }
    )
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const imageId = searchParams.get('imageId')

    if (!imageId) {
      return NextResponse.json(
        { error: 'Image ID is required' },
        { status: 400 }
      )
    }

    // Get image details before deletion
    const image = await prisma.activity_images.findUnique({
      where: { id: parseInt(imageId) }
    })

    if (!image) {
      return NextResponse.json(
        { error: 'Image not found' },
        { status: 404 }
      )
    }

    // Delete from database
    await prisma.activity_images.delete({
      where: { id: parseInt(imageId) }
    })

    // Delete from S3
    await deleteActivityImageServer(image.img_url)

    // Reorder remaining images
    const remainingImages = await prisma.activity_images.findMany({
      where: { activity_id: image.activity_id },
      orderBy: { order: 'asc' }
    })

    for (let i = 0; i < remainingImages.length; i++) {
      await prisma.activity_images.update({
        where: { id: remainingImages[i].id },
        data: { order: i }
      })
    }

    return NextResponse.json({ success: true })

  } catch (error) {
    console.error('Error deleting activity image:', error)
    return NextResponse.json(
      { error: 'Failed to delete image' },
      { status: 500 }
    )
  }
}

export async function PATCH(request: NextRequest) {
  try {
    const body = await request.json()
    const { imageId, isPrimary, order } = body

    if (!imageId) {
      return NextResponse.json(
        { error: 'Image ID is required' },
        { status: 400 }
      )
    }

    const updateData: any = {}
    if (isPrimary !== undefined) updateData.is_primary = isPrimary
    if (order !== undefined) updateData.order = order

    const updatedImage = await prisma.activity_images.update({
      where: { id: parseInt(imageId) },
      data: updateData
    })

    // If setting as primary, update other images
    if (isPrimary) {
      const image = await prisma.activity_images.findUnique({
        where: { id: parseInt(imageId) }
      })
      if (image) {
        await prisma.activity_images.updateMany({
          where: {
            activity_id: image.activity_id,
            id: { not: parseInt(imageId) }
          },
          data: { is_primary: false }
        })
      }
    }

    return NextResponse.json({
      success: true,
      image: updatedImage
    })

  } catch (error) {
    console.error('Error updating activity image:', error)
    return NextResponse.json(
      { error: 'Failed to update image' },
      { status: 500 }
    )
  }
}
