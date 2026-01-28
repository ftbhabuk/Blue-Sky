import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blue Sky - A Visual Novel",
  description: "An immersive visual novel experience with stunning visuals and compelling storytelling",
  keywords: ["visual novel", "interactive story", "blue sky", "fiction"],
  authors: [{ name: "Blue Sky Team" }],
  openGraph: {
    title: "Blue Sky - A Visual Novel",
    description: "An immersive visual novel experience with stunning visuals and compelling storytelling",
    type: "website",
    url: "https://blue-sky.vercel.app",
    images: [
      {
        url: "/og-image.jpg",
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
    images: ["/og-image.jpg"],
  },
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
}