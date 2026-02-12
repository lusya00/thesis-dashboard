import { createClient } from '@supabase/supabase-js'
import AWS from 'aws-sdk'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

// Cliente para el lado del cliente (solo lectura)
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Configurar S3 con las credenciales de Supabase
const s3 = new AWS.S3({
  accessKeyId: process.env.SUPABASE_S3_ACCESS_KEY_ID!,
  secretAccessKey: process.env.SUPABASE_S3_SECRET_ACCESS_KEY!,
  region: process.env.SUPABASE_S3_REGION || 'eu-central-1',
  endpoint: process.env.SUPABASE_S3_ENDPOINT!,
  s3ForcePathStyle: true, // Necesario para Supabase
  signatureVersion: 'v4'
})

// Función para subir imagen de homestay usando S3
export async function uploadHomestayImage(file: File, homestayId: number): Promise<string> {
  const fileExt = file.name.split('.').pop()
  const fileName = `homestay-${homestayId}-${Date.now()}.${fileExt}`
  const bucketName = 'homestay-images'
  
  try {
    // Convertir File a Buffer
    const arrayBuffer = await file.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)
    
    const uploadParams = {
      Bucket: bucketName,
      Key: fileName,
      Body: buffer,
      ContentType: file.type,
      CacheControl: 'max-age=3600',
      ACL: 'public-read' // Hacer la imagen pública
    }

    // Subir con S3
    const result = await s3.upload(uploadParams).promise()
    console.log("S3 Upload result:", result)
    
    // Generar la URL pública correcta de Supabase
    const { data: publicUrl } = supabase.storage
      .from(bucketName)
      .getPublicUrl(fileName)
    
    console.log("Public URL:", publicUrl.publicUrl)
    return publicUrl.publicUrl
  } catch (error) {
    console.error('Error subiendo imagen a S3:', error)
    throw error
  }
}

// Función para eliminar imagen de homestay usando S3
export async function deleteHomestayImage(imageUrl: string): Promise<void> {
  try {
    // Extraer el nombre del archivo de la URL pública
    const url = new URL(imageUrl)
    const pathParts = url.pathname.split('/')
    const fileName = pathParts[pathParts.length - 1]
    
    if (!fileName) {
      throw new Error('No se pudo extraer el nombre del archivo de la URL')
    }

    const deleteParams = {
      Bucket: 'homestay-images',
      Key: fileName
    }

    await s3.deleteObject(deleteParams).promise()
  } catch (error) {
    console.error('Error eliminando imagen de S3:', error)
    throw error
  }
}

// Función para validar archivo de imagen
export function validateWebPFile(file: File): { valid: boolean; error?: string } {
  // Validar tipo de archivo (aceptar JPEG, PNG, WebP)
  const allowedTypes = ['image/jpeg', 'image/png', 'image/webp']
  if (!allowedTypes.includes(file.type)) {
    return { valid: false, error: 'Solo se permiten archivos JPEG, PNG o WebP' }
  }

  // Validar tamaño del archivo (máximo 5MB)
  const maxSize = 5 * 1024 * 1024 // 5MB
  if (file.size > maxSize) {
    return { valid: false, error: 'El archivo no puede ser mayor a 5MB' }
  }

  return { valid: true }
}
