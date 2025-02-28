"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, PinIcon, X } from "lucide-react";
import { cn } from "@/lib/utils";

// Types for NovelImage
interface NovelImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
  description?: string;
  style?: "classic" | "polaroid" | "vintage" | "modern" | "noir" | "dreamy" | "retro" | "minimal";
  effect?: "fade" | "slide" | "zoom" | "none" | "reveal" | "elastic";
  priority?: boolean;
  className?: string;
  annotations?: Array<{
    x: number;
    y: number;
    text: string;
  }>;
}

// Style and effect variants
const styleVariants = {
  classic: "rounded-lg shadow-lg",
  polaroid: "rounded-sm p-4 bg-white shadow-xl rotate-1 hover:rotate-0 transition-transform",
  vintage: "sepia brightness-95 rounded-sm shadow-md border-8 border-white",
  modern: "rounded-xl shadow-2xl",
  noir: "grayscale contrast-125 rounded-lg shadow-xl",
  dreamy: "rounded-lg shadow-lg brightness-105 contrast-75 saturate-150",
  retro: "rounded-none border-4 border-orange-300 sepia brightness-90",
  minimal: "rounded-xl border border-gray-200 shadow-sm",
};

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
  reveal: {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.8 } },
    exit: { y: -50, opacity: 0 },
  },
  elastic: {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1, transition: { type: "spring", stiffness: 300, damping: 15 } },
    exit: { scale: 0, opacity: 0 },
  },
};

// Improved Image Component
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
  const [isLoaded, setIsLoaded] = useState(false);
  const [showAnnotations, setShowAnnotations] = useState(false);
  const [activeAnnotation, setActiveAnnotation] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setActiveAnnotation(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <motion.div
      ref={containerRef}
      className={cn("relative group mt-7 mb-6", className)}
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        className={cn("relative overflow-hidden", styleVariants[style], "transition-all duration-500")}
        variants={effectVariants[effect]}
        initial="initial"
        animate="animate"
        exit="exit"
      >
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
              style === "vintage" && "sepia"
            )}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          {annotations.length > 0 && (
            <button
              onClick={() => {
                setShowAnnotations(!showAnnotations);
                setActiveAnnotation(null);
              }}
              className="absolute top-3 right-3 p-2 bg-white/90 rounded-full hover:bg-white transition-colors duration-200 shadow-lg opacity-0 group-hover:opacity-100"
              aria-label="Toggle annotations"
            >
              <Eye className="w-4 h-4 text-gray-700" />
            </button>
          )}
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
                  <button
                    className={cn(
                      "w-6 h-6 bg-white rounded-full border-2 flex items-center justify-center text-xs font-bold cursor-pointer shadow-md",
                      activeAnnotation === index ? "border-blue-500" : "border-gray-800"
                    )}
                    onClick={() => setActiveAnnotation(activeAnnotation === index ? null : index)}
                  >
                    !
                  </button>
                </motion.div>
              ))}
          </AnimatePresence>
          <AnimatePresence>
            {activeAnnotation !== null && annotations[activeAnnotation] && (
              <motion.div
                className="absolute left-1/2 bottom-4 transform -translate-x-1/2 z-20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
              >
                <div className="bg-white/95 backdrop-blur-sm px-4 py-3 rounded-lg shadow-lg max-w-xs w-64 relative">
                  <button 
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                    onClick={() => setActiveAnnotation(null)}
                  >
                    <X size={14} />
                  </button>
                  <p className="text-sm text-gray-800 pr-4">{annotations[activeAnnotation].text}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        {(caption || description) && (
          <div className="p-3 space-y-1">
            {caption && <p className="text-base font-serif text-gray-800">{caption}</p>}
            {description && <p className="text-xs italic text-gray-600">{description}</p>}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}

// Gallery Component
interface NovelGalleryProps {
  images: Array<NovelImageProps>;
  layout?: "grid" | "masonry" | "carousel" | "stacked";
  spacing?: "tight" | "normal" | "loose";
}

export function NovelGallery({ images, layout = "grid", spacing = "normal" }: NovelGalleryProps) {
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

// Enhanced Memory Wall
interface MemoryWallProps {
  memories: Array<{
    src: string;
    alt: string;
    title?: string;
    height?: number;
    width?: number;
    style?: keyof typeof styleVariants;
    effect?: keyof typeof effectVariants;
    annotations?: Array<{
      x: number;
      y: number;
      text: string;
    }>;
  }>;
}

export function MemoryWall({ memories }: MemoryWallProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [showAnnotation, setShowAnnotation] = useState<number | null>(null);
  const wallRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wallRef.current && !wallRef.current.contains(event.target as Node)) {
        setShowAnnotation(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const getPositions = () => {
    return memories.map((_, index) => {
      const column = index % 3;
      const row = Math.floor(index / 3);
      const baseLeft = column * 30 + 10;
      const baseTop = row * 30 + 10;
      const randomSeed = index * 3.14159;
      const randomLeft = baseLeft + (Math.sin(randomSeed) * 6);
      const randomTop = baseTop + (Math.cos(randomSeed) * 6);
      const randomRotate = Math.sin(randomSeed * 2) * 10;
      return { left: randomLeft, top: randomTop, rotate: randomRotate };
    });
  };

  const positions = getPositions();

  const getPinPosition = (index: number) => {
    const randomSeed = index * 2.71828;
    return {
      left: 50 + Math.sin(randomSeed) * 30,
      top: -15,
      rotation: Math.sin(randomSeed * 1.5) * 15,
    };
  };

  return (
    <div 
      ref={wallRef}
      className="relative min-h-[200px] p-16 my-12 rounded-xl overflow-hidden bg-texture"
    >
      <div 
        className="absolute inset-0 z-0" 
        style={{
          backgroundColor: "#e0c9a6",
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23c4a97e' fill-opacity='0.3' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }}
      />
      {memories.map((memory, index) => {
        const position = positions[index];
        const pinPosition = getPinPosition(index);
        const memoryStyle = memory.style || "polaroid";
        const memoryEffect = memory.effect || "none";

        return (
          <motion.div
            key={index}
            className="absolute"
            style={{
              left: `${position.left}%`,
              top: `${position.top}%`,
              rotate: position.rotate,
              zIndex: hoveredIndex === index ? memories.length + 1 : memories.length - index,
            }}
            whileHover={{
              scale: 1.05,
              rotate: 0,
              zIndex: memories.length + 1,
              transition: { duration: 0.2, type: "spring", stiffness: 300, damping: 25 },
            }}
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
            variants={effectVariants[memoryEffect]}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <div 
              className="absolute z-10" 
              style={{
                left: `${pinPosition.left}%`, 
                top: pinPosition.top, 
                transform: `rotate(${pinPosition.rotation}deg)`
              }}
            >
              <svg width="18" height="30" viewBox="0 0 18 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 12C11.7614 12 14 9.76142 14 7C14 4.23858 11.7614 2 9 2C6.23858 2 4 4.23858 4 7C4 9.76142 6.23858 12 9 12Z" fill="#e53935" />
                <path d="M9 12L9 28" stroke="#d32f2f" strokeWidth="2" strokeLinecap="round" />
                <circle cx="9" cy="7" r="2.5" fill="#ffcdd2" />
              </svg>
            </div>
            <div className={cn(
              "memory-item relative bg-white p-3 transform transition-shadow duration-200 hover:shadow-xl",
              styleVariants[memoryStyle]
            )}>
              <div 
                className="absolute inset-0 pointer-events-none opacity-10" 
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M77 63a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 3a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm-50-3a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 3a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm14-12a3 3 0 1 0-6 0 3 3 0 0 0 6 0zm3 0a6 6 0 1 1-12 0 6 6 0 0 1 12 0zM32 63a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 3a6 6 0 1 1 0-12 6 6 0 0 1 0 12z' fill='%23000000' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                }}
              />
              <Image
                src={memory.src || "/placeholder.svg"}
                alt={memory.alt}
                width={memory.width || 240}
                height={memory.height || 240}
                className={cn(
                  "rounded-sm",
                  memoryStyle === "vintage" && "sepia",
                  memoryStyle === "noir" && "grayscale contrast-125",
                  memoryStyle === "dreamy" && "brightness-105 contrast-75 saturate-150",
                  memoryStyle === "retro" && "sepia brightness-90"
                )}
              />
              {memory.title && (
                <div className="absolute bottom-4 left-0 right-0 text-center px-3">
                  <p className="font-serif text-gray-800 text-sm bg-white/90 py-1 px-2 rounded-full inline-block shadow-sm"
                    style={{ fontFamily: "Segoe Script, Brush Script MT, cursive" }}>
                    {memory.title}
                  </p>
                </div>
              )}
              {memory.annotations && memory.annotations.length > 0 && (
                <button 
                  className="absolute top-2 right-2 p-1 bg-white/90 rounded-full shadow-sm z-10"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowAnnotation(showAnnotation === index ? null : index);
                  }}
                >
                  <div className="w-5 h-5 flex items-center justify-center">
                    <span className="text-xs font-bold">!</span>
                  </div>
                </button>
              )}
              <AnimatePresence>
                {showAnnotation === index && memory.annotations && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    className="absolute left-1/2 -bottom-16 transform -translate-x-1/2 z-20 w-64"
                  >
                    <div className="bg-yellow-50 p-3 rounded shadow-lg border border-yellow-200">
                      <button 
                        className="absolute top-1 right-1 text-gray-500 hover:text-gray-700"
                        onClick={(e) => {
                          e.stopPropagation();
                          setShowAnnotation(null);
                        }}
                      >
                        <X size={14} />
                      </button>
                      <ul className="text-sm list-disc pl-5 pr-3 text-gray-800"
                          style={{ fontFamily: "Segoe Script, Brush Script MT, cursive" }}>
                        {memory.annotations.map((annotation, i) => (
                          <li key={i} className="mb-1">{annotation.text}</li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        );
      })}
      <div className="absolute z-0 bottom-4 right-4 text-right opacity-40 transform rotate-3">
        <p className="text-xl italic text-gray-700" 
           style={{ fontFamily: "Segoe Script, Brush Script MT, cursive" }}>
          Memories...
        </p>
      </div>
      <div className="absolute top-12 left-12 transform -rotate-12 z-0 opacity-70">
        <svg width="40" height="18" viewBox="0 0 40 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M37.5 3H10C5.5 3 5.5 15 10 15H30" stroke="#888" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>
      <div className="absolute bottom-16 right-16 transform rotate-15 z-0 opacity-70">
        <svg width="40" height="18" viewBox="0 0 40 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M37.5 3H10C5.5 3 5.5 15 10 15H30" stroke="#888" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>
    </div>
  );
}