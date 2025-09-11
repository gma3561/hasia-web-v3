import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'HASIA - AI Native Company',
    short_name: 'HASIA',
    description: 'Building tomorrow with AI, today. Transform your business with infinite AI agents.',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#00FF88',
    icons: [],
  }
}