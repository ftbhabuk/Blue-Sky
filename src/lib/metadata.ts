import { Metadata } from "next"

export const metadata: Metadata = {
  metadataBase: new URL('https://blue-sky.vercel.app'),
  title: "Blue Sky - A Visual Novel",
  description: "An immersive visual novel experience with stunning visuals and compelling storytelling",
  keywords: ["visual novel", "interactive story", "blue sky", "fiction"],
  authors: [{ name: "Blue Sky Team" }],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Blue Sky - A Visual Novel",
    description: "An immersive visual novel experience with stunning visuals and compelling storytelling",
    type: "website",
    url: "https://blue-sky.vercel.app",
    siteName: "Blue Sky",
    images: [
      {
        url: "https://blue-sky.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Blue Sky Visual Novel",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blue Sky - A Visual Novel",
    description: "An immersive visual novel experience with stunning visuals and compelling storytelling",
    images: [{
      url: "https://blue-sky.vercel.app/og-image.png",
      width: 1200,
      height: 630,
      alt: "Blue Sky Visual Novel",
    }],
  },
  robots: "index, follow",
}