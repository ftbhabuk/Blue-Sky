import type React from "react"
// import Footer from "@/components/Footer"
export default function ChapterLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className="min-h-screen bg-white">{children}</div>
}

