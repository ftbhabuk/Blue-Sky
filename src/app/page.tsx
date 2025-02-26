"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"

export default function Home() {
  const [loaded, setLoaded] = useState(false)
  const [isNavigating, setIsNavigating] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setLoaded(true)
  }, [])

  const handleBeginReading = async () => {
    setIsNavigating(true)
    // Add a small delay for the loading animation
    await new Promise((resolve) => setTimeout(resolve, 800))
    router.push("/chapters/1")
  }

  return (
    <main className="flex min-h-screen">
      {/* Left side - Hospital Image */}
      <div className="relative hidden md:block w-[40%] bg-gray-50">
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/placeholder.svg?height=1080&width=720')",
              filter: "brightness(0.9)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent opacity-50" />

          {/* Animated clouds */}
          <div className="absolute top-0 left-0 w-full h-32 opacity-20">
            <div className="cloud-animation" />
          </div>
        </div>
      </div>

      {/* Right side - Content */}
      <div className="w-full md:w-[60%] flex items-center justify-center p-8">
        <div className="max-w-2xl space-y-8">
          <motion.h1
            className="text-5xl md:text-7xl font-serif tracking-[0.5px] text-center text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 20 }}
            transition={{ duration: 1 }}
          >
            Blue Sky
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-center text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: loaded ? 1 : 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Between falling and flying lies the truth
          </motion.p>

          {/* Background excerpts */}
          <div className="relative h-32">
            <motion.div
              className="absolute inset-0 flex items-center justify-center text-gray-400 opacity-20 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: loaded ? 0.2 : 0 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <p className="text-sm italic">
                The hospital roof was my sanctuary, where the sky felt close enough to touch...
              </p>
            </motion.div>
          </div>

          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 20 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <Button
              variant="outline"
              size="lg"
              className="text-lg relative overflow-hidden group border-gray-300"
              onClick={handleBeginReading}
              disabled={isNavigating}
            >
              {isNavigating ? (
                <span className="flex items-center gap-2">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Opening Chapter 1
                </span>
              ) : (
                <>
                  <span className="relative z-10">Begin Reading</span>
                  <div className="absolute inset-0 bg-gray-100 opacity-20 group-hover:opacity-30 transition-opacity" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-200 to-transparent opacity-0 group-hover:opacity-20 animate-shine" />
                </>
              )}
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Page transition overlay */}
      <motion.div
        className="fixed inset-0 bg-black pointer-events-none z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: isNavigating ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      />
    </main>
  )
}

