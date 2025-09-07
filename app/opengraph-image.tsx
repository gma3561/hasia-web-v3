import { ImageResponse } from 'next/og'

// Route segment config
export const runtime = 'edge'
export const dynamic = 'force-static'

// Image metadata
export const alt = 'HASIA - AI Native Company'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: 'black',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            fontSize: 64,
            fontWeight: 'bold',
            background: 'linear-gradient(90deg, #00FF88 0%, #66FFB2 100%)',
            backgroundClip: 'text',
            color: 'transparent',
            marginBottom: 20,
          }}
        >
          HASIA
        </div>
        <div
          style={{
            fontSize: 80,
            fontWeight: 'bold',
            color: 'white',
            marginBottom: 10,
          }}
        >
          FROM IDEA
        </div>
        <div
          style={{
            fontSize: 80,
            fontWeight: 'bold',
            background: 'linear-gradient(90deg, #66FFB2 0%, #00FF88 100%)',
            backgroundClip: 'text',
            color: 'transparent',
          }}
        >
          TO REALITY
        </div>
        <div
          style={{
            fontSize: 32,
            color: '#888',
            marginTop: 40,
          }}
        >
          AI Native Company
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}