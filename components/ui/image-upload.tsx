'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { validateWebPFile } from '@/lib/supabase'
import { Image as ImageIcon, Loader2, Upload, X } from 'lucide-react'
import { useCallback, useRef, useState } from 'react'

export interface ImageFile {
  file: File
  preview: string
  id: string
}

interface ImageUploadProps {
  onImagesChange: (images: ImageFile[]) => void
  maxImages?: number
  initialImages?: ImageFile[]
  disabled?: boolean
}

export function ImageUpload({ 
  onImagesChange, 
  maxImages = 5, 
  initialImages = [],
  disabled = false 
}: ImageUploadProps) {
  const [images, setImages] = useState<ImageFile[]>(initialImages)
  const [dragActive, setDragActive] = useState(false)
  const [uploading, setUploading] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFiles = useCallback((files: FileList | null) => {
    if (!files || disabled) return

    const newImages: ImageFile[] = []
    const errors: string[] = []

    Array.from(files).forEach((file) => {
      const validation = validateWebPFile(file)
      
      if (!validation.valid) {
        errors.push(validation.error || 'Archivo inválido')
        return
      }

      if (images.length + newImages.length >= maxImages) {
        errors.push(`Máximo ${maxImages} imágenes permitidas`)
        return
      }

      const preview = URL.createObjectURL(file)
      newImages.push({
        file,
        preview,
        id: Math.random().toString(36).substring(7)
      })
    })

    if (errors.length > 0) {
      alert(errors.join('\n'))
    }

    if (newImages.length > 0) {
      const updatedImages = [...images, ...newImages]
      setImages(updatedImages)
      onImagesChange(updatedImages)
    }
  }, [images, maxImages, onImagesChange, disabled])

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

  const removeImage = useCallback((id: string) => {
    const updatedImages = images.filter(img => img.id !== id)
    setImages(updatedImages)
    onImagesChange(updatedImages)
  }, [images, onImagesChange])

  const openFileDialog = useCallback(() => {
    if (!disabled) {
      fileInputRef.current?.click()
    }
  }, [disabled])

  return (
    <div className="space-y-4">
      <div className="text-sm text-gray-600 mb-2">
        Upload images in JPEG, PNG, or WebP format (maximum 5MB each). Maximum {maxImages} images.
      </div>
      
      {/* Drop area */}
      <Card 
        className={`border-2 border-dashed transition-colors ${
          dragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
        } ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
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
          <Button type="button" variant="outline" disabled={disabled}>
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
        disabled={disabled}
      />

      {/* Image preview */}
      {images.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image) => (
            <div key={image.id} className="relative group">
              <img
                src={image.preview}
                alt="Preview"
                className="w-full h-32 object-cover rounded-lg border"
              />
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  removeImage(image.id)
                }}
                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                disabled={disabled}
              >
                <X className="h-4 w-4" />
              </button>
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