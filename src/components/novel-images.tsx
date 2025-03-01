"use client";

import { useState, useRef, } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

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
}

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
}: NovelImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

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

interface MemoryWallProps {
  memories: Array<{
    src: string;
    alt: string;
    title?: string;
    height?: number;
    width?: number;
    style?: keyof typeof styleVariants;
    effect?: keyof typeof effectVariants;
  }>;
}

export function MemoryWall({ memories }: MemoryWallProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const wallRef = useRef<HTMLDivElement>(null);

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
      className="relative min-h-[200px] p-16 my-12 rounded-xl shadow-lg overflow-hidden"
    >
      <div 
        className="absolute inset-0 z-0" 
        style={{
          backgroundColor: "#e0c9a6",
          backgroundImage: `url("https://images.unsplash.com/photo-1541542509806-6371b7b0a265?q=80&w=914&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.7,
        }}
      >
      </div>
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
                <path d="M9 12L9 28" stroke="#d32f2f" strokeWidth="3" strokeLinecap="round" />
                <circle cx="9" cy="7" r="22.5" fill="#ffcdd2" />
              </svg>
            </div>
            <div className={cn(
              "memory-item relative bg-white p-0 transform transition-shadow duration-200 hover:shadow-xl",
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
                <div className="absolute bottom-0 left-0 right-0 text-center px-3">
                  <p className="font-serif text-gray-800 text-sm bg-white/90 py-1 px-2 rounded-full inline-block shadow-sm"
                    style={{ fontFamily: "Segoe Script, Brush Script MT, cursive" }}>
                    {memory.title}
                  </p>
                </div>
              )}
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
      {/* paper clip */}
      <div className="absolute top-12 left-10 transform -rotate-12 z-0 opacity-70">
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