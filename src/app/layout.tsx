import type React from "react"
import "./globals.css"
import { Source_Sans_3 as Source_Sans_Pro } from "next/font/google"

// const playfair = Playfair_Display({ subsets: ["latin"] })
const sourceSans = Source_Sans_Pro({
  weight: ["400", "600"],
  subsets: ["latin"],
})
// const caveat = Caveat({ subsets: ["latin"] })
// const robotoMono = Roboto_Mono({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={sourceSans.className}>
        <div className="min-h-screen bg-white text-gray-800">{children}</div>
      </body>
    </html>
  )
}

