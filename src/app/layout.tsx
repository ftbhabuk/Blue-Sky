import type React from "react"
import "./globals.css"
import { Source_Sans_3 as Source_Sans_Pro, Playfair_Display, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import { metadata } from "@/lib/metadata"

// Load all your fonts at the root level
const sourceSans = Source_Sans_Pro({
  weight: ["400", "600"],
  subsets: ["latin"],
})

const playfair = Playfair_Display({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-playfair"
})

const inter = Inter({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-inter"
})

export { metadata }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Load Cormorant Garamond and IM Fell English via link tags for better performance */}
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=IM+Fell+English:wght@400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${sourceSans.className} ${playfair.variable} ${inter.variable}`}>
        <div className="min-h-screen bg-white text-gray-800">{children}</div>
        <Analytics />
      </body>
    </html>
  )
}