import { Loader2 } from "lucide-react"

export default function Loading() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center space-y-4">
        <Loader2 className="h-8 w-8 animate-spin mx-auto text-gray-400" />
        <p className="text-gray-500 text-sm">Loading Chapter 1: Chaos...</p>
      </div>
    </div>
  )
}

