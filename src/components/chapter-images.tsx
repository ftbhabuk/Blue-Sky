"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import { X, ZoomIn } from "lucide-react"
import { cn } from "@/lib/utils"

interface ImageProps {
  src: string
  alt: string
  width: number
  height: number
  caption?: string
  description?: string
  layout?: "full" | "left" | "right" | "center"
  priority?: boolean
  className?: string
}

// Elegant image component with zoom functionality
export function ChapterImage({
  src,
  alt,
  width,
  height,
  caption,
  description,
  layout = "center",
  priority = false,
  className,
}: ImageProps) {
  const [isZoomed, setIsZoomed] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  const layoutClasses = {
    full: "w-full",
    left: "float-left mr-8 mb-4",
    right: "float-right ml-8 mb-4",
    center: "mx-auto",
  }

  return (
    <>
      <motion.div
        className={cn("relative group mb-6", layoutClasses[layout], className)}
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Image Container */}
        <div className="relative overflow-hidden rounded-lg bg-gray-100">
          <Image
            src={src || "/placeholder.svg"}
            alt={alt}
            width={width}
            height={height}
            priority={priority}
            onLoad={() => setIsLoaded(true)}
            className={cn("transition-transform duration-300 ease-out", !isLoaded && "blur-sm", "hover:scale-[1.02]")}
          />

          {/* Zoom Button */}
          <button
            onClick={() => setIsZoomed(true)}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/80 backdrop-blur-sm 
                     opacity-0 group-hover:opacity-100 transition-opacity duration-200
                     hover:bg-white"
            aria-label="Zoom image"
          >
            <ZoomIn className="w-4 h-4 text-gray-700" />
          </button>

          {/* Loading Overlay */}
          {!isLoaded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin" />
            </div>
          )}
        </div>

        {/* Caption and Description */}
        {(caption || description) && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-3 space-y-1"
          >
            {caption && <p className="text-sm font-medium text-gray-900">{caption}</p>}
            {description && <p className="text-sm text-gray-500 italic">{description}</p>}
          </motion.div>
        )}
      </motion.div>

      {/* Fullscreen Preview */}
      <AnimatePresence>
        {isZoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
            onClick={() => setIsZoomed(false)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-[90vw] max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={src || "/placeholder.svg"}
                alt={alt}
                width={width * 1.5}
                height={height * 1.5}
                className="rounded-lg"
              />

              {/* Close Button */}
              <button
                onClick={() => setIsZoomed(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/80 backdrop-blur-sm
                         hover:bg-white transition-colors duration-200"
                aria-label="Close preview"
              >
                <X className="w-4 h-4 text-gray-700" />
              </button>

              {/* Caption in Preview */}
              {caption && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute bottom-4 left-4 right-4 text-center"
                >
                  <div className="inline-block px-4 py-2 rounded-lg bg-white/80 backdrop-blur-sm">
                    <p className="text-sm text-gray-900">{caption}</p>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

// Image Gallery Component
interface GalleryProps {
  images: {
    src: string
    alt: string
    width: number
    height: number
    caption?: string
  }[]
  columns?: 2 | 3 | 4
}

export function ImageGallery({ images, columns = 3 }: GalleryProps) {
  return (
    <div
      className={cn(
        "grid gap-4 my-8",
        columns === 2 && "grid-cols-1 md:grid-cols-2",
        columns === 3 && "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
        columns === 4 && "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
      )}
    >
      {images.map((image, index) => (
        <ChapterImage key={index} {...image} />
      ))}
    </div>
  )
}

// Parallax Image Component
interface ParallaxImageProps extends ImageProps {
  speed?: number
}

export function ParallaxImage({ speed = 0.5, ...props }: ParallaxImageProps) {
  return (
    <motion.div
      className="relative overflow-hidden rounded-lg"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.div
        style={{
          y: useTransform(useScroll().scrollY, [0, 500], [0, 100 * speed]),
        }}
      >
        <ChapterImage {...props} />
      </motion.div>
    </motion.div>
  )
}

// Image Comparison Slider
interface ComparisonImageProps {
  beforeImage: string
  afterImage: string
  beforeAlt: string
  afterAlt: string
  width: number
  height: number
}

export function ImageComparison({ beforeImage, afterImage, beforeAlt, afterAlt, width, height }: ComparisonImageProps) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)

  const handleMove = (event: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return

    const container = event.currentTarget.getBoundingClientRect()
    const x = "touches" in event ? event.touches[0].clientX - container.left : event.clientX - container.left

    const position = Math.max(0, Math.min(100, (x / container.width) * 100))
    setSliderPosition(position)
  }

  return (
    <div
      className="relative overflow-hidden rounded-lg cursor-ew-resize"
      onMouseDown={() => setIsDragging(true)}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
      onMouseMove={handleMove}
      onTouchStart={() => setIsDragging(true)}
      onTouchEnd={() => setIsDragging(false)}
      onTouchMove={handleMove}
    >
      {/* Before Image */}
      <div className="absolute inset-0">
        <Image
          src={beforeImage || "/placeholder.svg"}
          alt={beforeAlt}
          width={width}
          height={height}
          className="object-cover"
        />
      </div>

      {/* After Image */}
      <div
        className="absolute inset-0"
        style={{
          clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
        }}
      >
        <Image
          src={afterImage || "/placeholder.svg"}
          alt={afterAlt}
          width={width}
          height={height}
          className="object-cover"
        />
      </div>

      {/* Slider Handle */}
      <div className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize" style={{ left: `${sliderPosition}%` }}>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                      w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center"
        >
          <ZoomIn className="w-4 h-4 text-gray-700" />
        </div>
      </div>
    </div>
  )
}

