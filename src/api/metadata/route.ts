import { NextResponse } from 'next/server'

export async function GET() {
  const body = {
    title: "Blue Sky - A Visual Novel",
    description: "An immersive visual novel experience with stunning visuals and compelling storytelling",
    image: "https://blue-sky.vercel.app/og-image.png",
    url: "https://blue-sky.vercel.app",
    icons: {
      icon: "/favicon.svg",
      apple: "/favicon.svg",
    }
  }
  
  return NextResponse.json(body)
}