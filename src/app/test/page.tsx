import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Test - Blue Sky Visual Novel",
  description: "Testing social media metadata",
  openGraph: {
    title: "Blue Sky - A Visual Novel",
    description: "An immersive visual novel experience with stunning visuals and compelling storytelling",
    type: "website",
    url: "https://blue-sky.vercel.app/test",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Blue Sky Visual Novel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blue Sky - A Visual Novel",
    description: "An immersive visual novel experience with stunning visuals and compelling storytelling",
    images: ["/og-image.png"],
  },
}

export default function TestPage() {
  return (
    <div className="p-8">
      <h1>Metadata Test Page</h1>
      <p>This page tests if social media metadata is working correctly.</p>
      <p>Check the page source for og: and twitter: meta tags.</p>
    </div>
  )
}