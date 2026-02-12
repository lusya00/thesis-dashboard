'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Image as ImageIcon, Loader2, Star, StarOff, Upload, X } from 'lucide-react'
import { useCallback, useEffect, useRef, useState } from 'react'

interface ActivityImage {
  id: number
  img_url: string
  is_primary: boolean
  order: number
}

interface ActivityImageUploadProps {
  activityId: number
  existingImages: ActivityImage[]
  onImagesChange: (images: ActivityImage[]) => void
  maxImages?: number
  disabled?: boolean
}

export function ActivityImageUpload({
  activityId,
  existingImages,
  onImagesChange
}: ActivityImageUploadProps) {
  const [images, setImages] = useState<ActivityImage[]>(existingImages)
  const [dragActive, setDragActive] = useState(false)
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState('')
  const fileInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    setImages(existingImages)
  }, [existingImages])

  const validateFile = (file: File): { valid: boolean; error?: string } => {
    // Validate type (accept JPEG, PNG, WebP)
    const allowedTypes = ['image/jpeg', 'image/png', 'image/webp']
    if (!allowedTypes.includes(file.type)) {
      return { valid: false, error: 'Only JPEG, PNG, or WebP files are allowed' }
    }

    // Validate size (max 5MB to match server)
    const maxSize = 5 * 1024 * 1024
    if (file.size > maxSize) {
      return { valid: false, error: 'File size cannot exceed 5MB' }
    }

    return { valid: true }
  }

  const uploadFile = async (file: File, isPrimary: boolean = false): Promise<ActivityImage> => {
    const formData = new FormData()
    formData.append('activityId', activityId.toString())
    formData.append('file', file)
    formData.append('isPrimary', isPrimary.toString())

    console.log('Uploading file:', file.name, 'Size:', file.size, 'Type:', file.type)

    const response = await fetch('/api/activities/images', {
      method: 'POST',
      body: formData
    })

    console.log('Response status:', response.status)
    console.log('Response headers:', Object.fromEntries(response.headers.entries()))

    if (!response.ok) {
      let errorMessage = 'Upload failed'
      try {
        const errorData = await response.json()
        console.log('Error data:', errorData)
        errorMessage = errorData.error || errorMessage
      } catch (e) {
        console.log('Could not parse error response:', e)
        const text = await response.text()
        console.log('Error response text:', text)
      }
      throw new Error(errorMessage)
    }

    const result = await response.json()
    console.log('Upload result:', result)
    return result
  }

  const handleFiles = useCallback(async (files: FileList | null) => {
    if (!files) return

    setUploading(true)
    setError('')

    try {
      const uploadPromises = Array.from(files).map(async (file) => {
        const validation = validateFile(file)
        if (!validation.valid) {
          throw new Error(validation.error)
        }
        return uploadFile(file)
      })

      const uploadedImages = await Promise.all(uploadPromises)
      const updatedImages = [...images, ...uploadedImages]
      setImages(updatedImages)
      onImagesChange(updatedImages)
    } catch (error) {
      console.error('Upload error:', error)
      setError(error instanceof Error ? error.message : 'Upload failed')
    } finally {
      setUploading(false)
    }
  }, [images, activityId, onImagesChange])

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true)
    } else if (e.type === 'dragleave') {
      setDragActive(false)
    }
  }, [])

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    handleFiles(e.dataTransfer.files)
  }, [handleFiles])

  const handleFileInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    handleFiles(e.target.files)
  }, [handleFiles])

  const deleteImage = async (imageId: number) => {
    try {
      const response = await fetch(`/api/activities/images?imageId=${imageId}`, {
        method: 'DELETE'
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Delete failed')
      }

      const updatedImages = images.filter(img => img.id !== imageId)
      setImages(updatedImages)
      onImagesChange(updatedImages)
    } catch (error) {
      console.error('Delete error:', error)
      setError(error instanceof Error ? error.message : 'Delete failed')
    }
  }

  const setPrimaryImage = async (imageId: number) => {
    try {
      const response = await fetch('/api/activities/images', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ imageId, isPrimary: true })
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Update failed')
      }

      const updatedImages = images.map(img => ({
        ...img,
        is_primary: img.id === imageId
      }))
      setImages(updatedImages)
      onImagesChange(updatedImages)
    } catch (error) {
      console.error('Set primary error:', error)
      setError(error instanceof Error ? error.message : 'Update failed')
    }
  }

  const openFileDialog = useCallback(() => {
    fileInputRef.current?.click()
  }, [])

  return (
    <div className="space-y-4">
      <div className="text-sm text-gray-600">
        Upload images in JPEG, PNG, or WebP format (maximum 5MB each). The first image will be set as primary.
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      )}

      {/* Drop area */}
      <Card
        className={`border-2 border-dashed transition-colors ${
          dragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
        } cursor-pointer`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        onClick={openFileDialog}
      >
        <CardContent className="p-8 text-center">
          <Upload className="h-12 w-12 mx-auto mb-4 text-gray-400" />
          <p className="text-lg font-medium mb-2">
            Drag and drop images here
          </p>
          <p className="text-sm text-gray-500 mb-4">
            or click to select files
          </p>
          <Button type="button" variant="outline" disabled={uploading}>
            <ImageIcon className="h-4 w-4 mr-2" />
            Select images
          </Button>
        </CardContent>
      </Card>

      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        accept=".jpeg,.jpg,.png,.webp"
        multiple
        onChange={handleFileInputChange}
        className="hidden"
      />

      {/* Image grid */}
      {images.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image) => (
            <div key={image.id} className="relative group">
              <img
                src={image.img_url}
                alt="Activity"
                className="w-full h-32 object-cover rounded-lg border"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all rounded-lg flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 flex space-x-2">
                  <Button
                    type="button"
                    size="sm"
                    variant="secondary"
                    onClick={() => setPrimaryImage(image.id)}
                    className="h-8 w-8 p-0"
                  >
                    {image.is_primary ? (
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ) : (
                      <StarOff className="h-4 w-4" />
                    )}
                  </Button>
                  <Button
                    type="button"
                    size="sm"
                    variant="destructive"
                    onClick={() => deleteImage(image.id)}
                    className="h-8 w-8 p-0"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              {image.is_primary && (
                <div className="absolute top-2 left-2 bg-yellow-400 text-black text-xs px-2 py-1 rounded">
                  Primary
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Loading indicator */}
      {uploading && (
        <div className="flex items-center justify-center p-4">
          <Loader2 className="h-4 w-4 animate-spin mr-2" />
          <span>Uploading images...</span>
        </div>
      )}
    </div>
  )
}
