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
  style?: "classic" | "polaroid" | "vintage" | "modern" | "noir" | "dreamy" | "retro" | "minimal" | "blur" | "glassScatter" | "colorSplash" | "inkBleed" | "rippedEdge";
  effect?: "fade" | "slide" | "zoom" | "none" | "reveal" | "elastic";
  priority?: boolean;
  className?: string;
}

const styleVariants = {
  // Existing (unchanged)
  classic: "rounded-lg shadow-lg",
  polaroid: "rounded-sm p-4 bg-white shadow-xl rotate-1 hover:rotate-0 transition-transform",
  vintage: "sepia brightness-95 rounded-sm shadow-md border-8 border-white",
  modern: "rounded-xl shadow-2xl",
  noir: "grayscale contrast-125 rounded-lg shadow-xl",
  dreamy: "rounded-lg shadow-lg brightness-105 contrast-75 saturate-150",
  retro: "rounded-none border-4 border-orange-300 sepia brightness-90",
  minimal: "rounded-xl border border-gray-200 shadow-sm",
  blur: "rounded-lg shadow-xl backdrop-blur-md bg-white/30 border border-white/50 saturate-200",
  glassScatter: "rounded-md shadow-2xl bg-gradient-to-br from-white/20 to-gray-100/20 backdrop-blur-lg border border-gray-300/50 overflow-hidden relative before:content-[''] before:absolute before:inset-0 before:bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBvcGFjaXR5PSIwLjEiPjxwYXRoIGQ9Ik0wIDBMMjAwIDIwMEwxNTAgMjAwTDE1MCAxNTBMMjAwIDE1MEwxNTAgMTAwTDEwMCAxMDBMMTAwIDE1MEw1MCAxNTBMNTAgMTAwTDEwMCA1MEw1MCA1MEw1MCAwWiIgZmlsbD0iIzAwMDAwMCIvPjxwYXRoIGQ9Ik0yMDAgMEwxNTAgNTBMMTUwIDEwMEwxMDAgMTAwTDEwMCAxNTBMNTAgMTUwTDAgMjAwTDUwIDIwMEw1MCAxNTBMMTAgMTAwTDEwMCA1MEw1MCA1MEwyMDAgMFoiIGZpbGw9IiMwMDAwMDAiLz48L2c+PC9zdmc+')] before:bg-[length:50px_50px] before:opacity-30",
  colorSplash: "rounded-lg shadow-xl relative overflow-hidden bg-white isolate before:content-[''] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_20%_20%,_rgba(100,100,255,0.3)_0%,_transparent_60%),_radial-gradient(circle_at_80%_80%,_rgba(255,100,100,0.3)_0%,_transparent_60%)] before:blur-md before:opacity-70 after:content-[''] after:absolute after:inset-0 after:bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBvcGFjaXR5PSIwLjIiPjxjaXJjbGUgY3g9IjUwIiBjeT0iNTAiIHI9IjMwIiBmaWxsPSIjZmY2NjY2Ii8+PGNpcmNsZSBjeD0iMTUwIiBjeT0iMTUwIiByPSIyMCIgZmlsbD0iIzY2NjZmZiIvPjwvZz48L3N2Zz4=')] after:bg-[length:100px_100px] after:opacity-40",
  inkBleed: "rounded-md shadow-lg bg-white relative overflow-hidden border-2 border-gray-800 before:content-[''] before:absolute before:inset-0 before:bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZyBvcGFjaXR5PSIwLjMiPjxwYXRoIGQ9Ik0wIDBIMjAwVjIwMkgwVjBaTTUwIDUwQzUwIDcwIDcwIDcwIDcwIDUwQzcwIDMwIDUwIDMwIDUwIDUwWk0xNTAgMTUwQzE1MCAxNzAgMTcwIDE3MCAxNzAgMTUwQzE3MCAxMzAgMTUwIDEzMCAxNTAgMTUwWiIgZmlsbD0iIzAwMDAwMCIvPjwvZz48L3N2Zz4=')] before:bg-[length:80px_80px] before:blur-sm before:opacity-60",

  // New style incorporating your snippets
  rippedEdge: "rounded-none shadow-md bg-white relative overflow-hidden border-[20px_0] border-solid [border-image:url('https://i.postimg.cc/DZYqPDTD/bordernew.png')_50_0_50_0_repeat] [border-image-slice:50_0_50_0_fill] before:content-[''] before:absolute before:inset-x-[-500px] before:top-[-80px] before:h-[65px] before:bg-[url('https://ecorelos.com/wp-content/uploads/2020/04/torn-border2upside.png')] before:bg-cover before:bg-no-repeat after:content-[''] after:absolute after:inset-x-[-500px] after:bottom-[-15px] after:h-[45px] after:bg-[url('https://ecorelos.com/wp-content/uploads/2020/04/torn-border2.png')] after:bg-cover after:bg-no-repeat",
};

const effectVariants = {
  fade: {
    // Old: Simple opacity fade
    // New: Dreamy dissolve with a shimmer
    initial: { opacity: 0, filter: "blur(5px)", scale: 0.95 },
    animate: {
      opacity: 1,
      filter: "blur(0px)",
      scale: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut",
        opacity: { duration: 1 },
        filter: { delay: 0.3, duration: 0.8 },
      },
    },
    exit: {
      opacity: 0,
      filter: "blur(5px)",
      transition: { duration: 0.8 },
    },
  },
  slide: {
    // Old: Basic left-to-right slide
    // New: Glitchy horizontal swipe with distortion
    initial: { x: "-100%", opacity: 0, skewX: 10 },
    animate: {
      x: 0,
      opacity: 1,
      skewX: 0,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
        opacity: { duration: 0.4 },
        skewX: { duration: 0.6, ease: "backOut" },
        // Glitchy stutter
        x: {
          duration: 0.8,
          times: [0, 0.3, 0.35, 0.6, 0.65, 1],
          values: ["-100%", "-10%", "-15%", "5%", "2%", "0%"],
        },
      },
    },
    exit: { x: "100%", opacity: 0, skewX: -10, transition: { duration: 0.6 } },
  },
  zoom: {
    // Old: Subtle scale up
    // New: Heartbeat pulse with overshoot
    initial: { scale: 0.5, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10,
        mass: 0.5,
        // Overshoot and bounce back
        scale: { duration: 1, times: [0, 0.7, 0.85, 1], values: [0.5, 1.1, 0.95, 1] },
        opacity: { duration: 0.6 },
      },
    },
    exit: { scale: 0.5, opacity: 0, transition: { duration: 0.6 } },
  },
  none: {
    // Keep this as a no-effect baseline
    initial: {},
    animate: {},
    exit: {},
  },
  reveal: {
    // Old: Simple vertical slide
    // New: Polaroid develop effect with shake
    initial: { y: "50%", opacity: 0, filter: "brightness(0)" },
    animate: {
      y: 0,
      opacity: 1,
      filter: "brightness(1)",
      transition: {
        duration: 1.5,
        ease: "easeOut",
        // Shake effect
        rotate: {
          times: [0, 0.4, 0.6, 0.8, 1],
          values: [0, 2, -2, 1, 0],
          duration: 1,
        },
      },
    },
    exit: { y: "-50%", opacity: 0, filter: "brightness(0)", transition: { duration: 0.8 } },
  },
  elastic: {
    // Old: Basic spring bounce
    // New: CRT flicker with warp
    initial: { scaleX: 0.9, scaleY: 0.9, opacity: 0 },
    animate: {
      scaleX: 1,
      scaleY: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15,
        // Flicker effect via opacity
        opacity: {
          duration: 0.8,
          times: [0, 0.2, 0.25, 0.3, 0.5, 1],
          values: [0, 1, 0.5, 1, 0.8, 1],
        },
      },
    },
    exit: {
      scaleX: 0.9,
      scaleY: 0.9,
      opacity: 0,
      transition: { duration: 0.6 },
    },
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
      className="relative min-h-[250px] p-16 my-12 rounded-xl shadow-lg overflow-hidden"
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