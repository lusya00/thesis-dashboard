

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        search: ''
      },
      {
        protocol: 'https',
        hostname: '*.public.blob.vercel-storage.com',
        search: ''
      },
      {
        protocol: 'https',
        hostname: '*.supabase.co',
        search: ''
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
        search: ''
      },
      {
        protocol: 'https',
        hostname: '**.unsplash.com',
        search: ''
      }
    ],
    domains: ['images.unsplash.com', 'placehold.co', 'afjlefismtdccjhftnmn.supabase.co']
  }
}

export default nextConfig
