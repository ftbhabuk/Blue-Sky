import { Metadata } from "next"

export const metadata: Metadata = {
  metadataBase: new URL('https://blue-sky-mu.vercel.app'),
  title: "Blue Sky - A Visual Novel",
  description: "An immersive visual novel experience with stunning visuals and compelling storytelling",
  keywords: ["visual novel", "interactive story", "blue sky", "fiction", "narrative", "emotional journey"],
authors: [{ name: "Bhabuk.B", url: "https://bhabukb.com.np" }],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Blue Sky - A Visual Novel",
    description: "An immersive visual novel experience with stunning visuals and compelling storytelling",
    type: "website",
    url: "https://blue-sky-mu.vercel.app",
    siteName: "Blue Sky",
    locale: 'en_US',
    images: [
      {
        url: "https://blue-sky-mu.vercel.app/og-image.png",
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
    site: "@Bhabuk_B",
    creator: "@Bhabuk_B",
    images: [{
      url: "https://blue-sky-mu.vercel.app/og-image.png",
      width: 1200,
      height: 630,
      alt: "Blue Sky Visual Novel",
    }],
  },
  robots: "index, follow",
  other: {
    'theme-color': '#3B82F6',
    'msapplication-TileColor': '#3B82F6',
  },
}