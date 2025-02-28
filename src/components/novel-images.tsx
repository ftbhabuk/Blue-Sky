"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from "framer-motion";
import { X, ZoomIn, ChevronLeft, ChevronRight, Eye } from "lucide-react";
import { cn } from "@/lib/utils";

// Types
interface NovelImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
  description?: string;
  style?: "classic" | "polaroid" | "vintage" | "modern";
  effect?: "fade" | "slide" | "zoom" | "none";
  priority?: boolean;
  className?: string;
  annotations?: Array<{
    x: number;
    y: number;
    text: string;
  }>;
}

// Artistic Image Component
export function NovelImage({
  src,
  alt,
  width,
  height,
  caption,
  description,
  style = "classic",
  effect = "fade",
  priority = false,
  className,
  annotations = [],
}: NovelImageProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showAnnotations, setShowAnnotations] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentRotation, setCurrentRotation] = useState(0);

  // Smooth spring animation for hover effect
  const scale = useSpring(1, {
    stiffness: 200,
    damping: 20,
  });

  // Parallax effect on scroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  // Style variations
  const styleVariants = {
    classic: "rounded-lg shadow-lg",
    polaroid: "rounded-sm p-4 bg-white shadow-xl rotate-1 hover:rotate-0 transition-transform",
    vintage: "sepia brightness-95 rounded-sm shadow-md border-8 border-white",
    modern: "rounded-xl shadow-2xl",
  };

  // Effect variations
  const effectVariants = {
    fade: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
    },
    slide: {
      initial: { x: -20, opacity: 0 },
      animate: { x: 0, opacity: 1 },
      exit: { x: 20, opacity: 0 },
    },
    zoom: {
      initial: { scale: 0.8, opacity: 0 },
      animate: { scale: 1, opacity: 1 },
      exit: { scale: 1.2, opacity: 0 },
    },
    none: {
      initial: {},
      animate: {},
      exit: {},
    },
  };

  return (
    <motion.div
      ref={containerRef}
      className={cn("relative group cursor-pointer", className)}
      style={{ y, perspective: 1000 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* Main Image Container */}
      <motion.div
        className={cn("relative overflow-hidden", styleVariants[style], "transition-all duration-500")}
        variants={effectVariants[effect]}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {/* Image */}
        <div className="relative">
          <Image
            src={src || "/placeholder.svg"}
            alt={alt}
            width={width}
            height={height}
            priority={priority}
            onLoad={() => setIsLoaded(true)}
            className={cn(
              "transition-all duration-700",
              !isLoaded && "blur-sm scale-105",
              style === "vintage" && "sepia",
            )}
          />

          {/* Artistic Overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={false}
            animate={{ opacity: isExpanded ? 0.3 : 0 }}
          />

          {/* Interactive Elements */}
          <div className="absolute top-4 right-4 space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button
              onClick={() => setIsExpanded(true)}
              className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors duration-200 shadow-lg"
              aria-label="Expand image"
            >
              <ZoomIn className="w-4 h-4 text-gray-700" />
            </button>
            <button
              onClick={() => setShowAnnotations(!showAnnotations)}
              className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors duration-200 shadow-lg"
              aria-label="Toggle annotations"
            >
              <Eye className="w-4 h-4 text-gray-700" />
            </button>
          </div>

          {/* Annotations */}
          <AnimatePresence>
            {showAnnotations &&
              annotations.map((annotation, index) => (
                <motion.div
                  key={index}
                  className="absolute"
                  style={{ left: `${annotation.x}%`, top: `${annotation.y}%` }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                >
                  <div className="relative group">
                    <div className="w-4 h-4 bg-white rounded-full border-2 border-gray-800 cursor-pointer" />
                    <div className="absolute left-6 top-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <div className="bg-white px-4 py-2 rounded-lg shadow-lg text-sm">{annotation.text}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
          </AnimatePresence>
        </div>

        {/* Caption with artistic styling */}
        {(caption || description) && (
          <motion.div
            className="p-4 space-y-1"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {caption && <p className="text-base font-serif text-gray-800">{caption}</p>}
            {description && <p className="text-sm italic text-gray-600">{description}</p>}
          </motion.div>
        )}
      </motion.div>

      {/* Cinematic Fullscreen View */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsExpanded(false)}
          >
            <motion.div
              className="relative max-w-[90vw] max-h-[90vh]"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Navigation Arrows */}
              <button
                className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentRotation(currentRotation - 90);
                }}
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <button
                className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentRotation(currentRotation + 90);
                }}
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>

              {/* Expanded Image */}
              <motion.div style={{ rotate: currentRotation }} transition={{ type: "spring", damping: 15 }}>
                <Image
                  src={src || "/placeholder.svg"}
                  alt={alt}
                  width={width * 1.5}
                  height={height * 1.5}
                  className="rounded-lg shadow-2xl"
                />
              </motion.div>

              {/* Controls */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
                <button
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                  onClick={() => setIsExpanded(false)}
                >
                  <X className="w-5 h-5 text-white" />
                </button>
                <button
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                  onClick={() => setShowAnnotations(!showAnnotations)}
                >
                  <Eye className="w-5 h-5 text-white" />
                </button>
              </div>

              {/* Caption Overlay */}
              {caption && (
                <motion.div
                  className="absolute bottom-16 left-4 right-4 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                >
                  <div className="inline-block px-6 py-3 rounded-lg bg-black/50 backdrop-blur-sm">
                    <p className="text-white text-lg font-serif">{caption}</p>
                    {description && <p className="text-gray-300 text-sm mt-1 italic">{description}</p>}
                  </div>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// Artistic Gallery Component
interface NovelGalleryProps {
  images: Array<NovelImageProps>;
  layout?: "grid" | "masonry" | "carousel" | "stacked";
  spacing?: "tight" | "normal" | "loose";
}

export function NovelGallery({ images, layout = "grid", spacing = "normal" }: NovelGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const spacingClasses = {
    tight: "gap-2",
    normal: "gap-4",
    loose: "gap-8",
  };

  const layoutComponents = {
    grid: (
      <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3", spacingClasses[spacing])}>
        {images.map((image, index) => (
          <NovelImage key={index} {...image} />
        ))}
      </div>
    ),
    masonry: (
      <div className={cn("columns-1 md:columns-2 lg:columns-3", spacingClasses[spacing])}>
        {images.map((image, index) => (
          <div key={index} className="break-inside-avoid mb-4">
            <NovelImage {...image} />
          </div>
        ))}
      </div>
    ),
    carousel: (
      <div className="relative overflow-hidden">
        <div className="flex snap-x snap-mandatory overflow-x-auto">
          {images.map((image, index) => (
            <div key={index} className="snap-center shrink-0 first:pl-4 last:pr-4" style={{ width: "80%" }}>
              <NovelImage {...image} />
            </div>
          ))}
        </div>
      </div>
    ),
    stacked: (
      <div className={cn("space-y-8", spacingClasses[spacing])}>
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <NovelImage {...image} />
          </motion.div>
        ))}
      </div>
    ),
  };

  return layoutComponents[layout];
}

// Memory Wall Component
interface MemoryWallProps {
  memories: Array<NovelImageProps & { title?: string }>;
}

export function MemoryWall({ memories }: MemoryWallProps) {
  const [positions, setPositions] = useState<{ left: number; top: number; rotate: number }[]>([]);

  useEffect(() => {
    // Calculate positions only on client-side after mount
    const newPositions = memories.map((_, index) => {
      const column = index % 3;
      const row = Math.floor(index / 3);
      const baseLeft = column * 30 + 10;
      const baseTop = row * 30 + 10;
      const randomLeft = baseLeft + (Math.random() * 10 - 5);
      const randomTop = baseTop + (Math.random() * 10 - 5);
      const randomRotate = Math.random() * 16 - 8;
      return { left: randomLeft, top: randomTop, rotate: randomRotate };
    });
    setPositions(newPositions);
  }, [memories]);

  return (
    <div className="relative min-h-[500px] p-8">
      {memories.map((memory, index) => {
        // Use fallback positions if not yet calculated (server render)
        const position = positions[index] || {
          left: (index % 3) * 30 + 10,
          top: Math.floor(index / 3) * 30 + 10,
          rotate: 0,
        };

        return (
          <motion.div
            key={index}
            className="absolute"
            style={{
              left: `${position.left}%`,
              top: `${position.top}%`,
              rotate: position.rotate,
              zIndex: memories.length - index,
            }}
            whileHover={{
              scale: 1.05,
              rotate: 0,
              zIndex: memories.length + 1,
              transition: { duration: 0.2 },
            }}
          >
            <div className="relative bg-white p-3 shadow-lg rounded-sm transform transition-shadow duration-200 hover:shadow-xl">
              <NovelImage {...memory} style="classic" width={240} height={240} className="rounded-sm" />
              {memory.title && (
                <div className="absolute bottom-4 left-0 right-0 text-center px-3">
                  <p className="font-handwritten text-gray-800 text-sm bg-white/90 py-1 px-2 rounded-full inline-block shadow-sm">
                    {memory.title}
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}