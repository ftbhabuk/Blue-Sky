"use client";

import { useState, useRef, useEffect } from "react";
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
  rippedEdge: "rounded-none shadow-md bg-white relative overflow-hidden border-[20px_0] border-solid [border-image:url('https://i.postimg.cc/DZYqPDTD/bordernew.png')_50_0_50_0_repeat] [border-image-slice:50_0_50_0_fill] before:content-[''] before:absolute before:inset-x-[-500px] before:top-[-80px] before:h-[65px] before:bg-[url('https://ecorelos.com/wp-content/uploads/2020/04/torn-border2upside.png')] before:bg-cover before:bg-no-repeat after:content-[''] after:absolute after:inset-x-[-500px] after:bottom-[-15px] after:h-[45px] after:bg-[url('https://ecorelos.com/wp-content/uploads/2020/04/torn-border2.png')] after:bg-cover after:bg-no-repeat",
};

const effectVariants = {
  fade: { initial: { opacity: 0 }, animate: { opacity: 1, transition: { duration: 0.5 } }, exit: { opacity: 0 } },
  slide: { initial: { x: "-100%" }, animate: { x: 0, transition: { duration: 0.5 } }, exit: { x: "100%" } },
  zoom: { initial: { scale: 0.8 }, animate: { scale: 1, transition: { duration: 0.5 } }, exit: { scale: 0.8 } },
  none: { initial: {}, animate: {}, exit: {} },
  reveal: { initial: { y: "50%", opacity: 0 }, animate: { y: 0, opacity: 1, transition: { duration: 0.5 } }, exit: { y: "-50%", opacity: 0 } },
  elastic: { initial: { scale: 0.9 }, animate: { scale: 1, transition: { type: "spring", stiffness: 300, damping: 15 } }, exit: { scale: 0.9 } },
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

  return (
    <motion.div
      className={cn("relative group", className)}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        className={cn("relative overflow-hidden", styleVariants[style])}
        variants={effectVariants[effect]}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          onLoad={() => setIsLoaded(true)}
          className={cn("transition-all duration-500", !isLoaded && "blur-sm scale-105")}
        />
        {(caption || description) && (
          <div className="p-3 space-y-1 bg-black/50 text-white">
            {caption && <p className="text-base font-serif">{caption}</p>}
            {description && <p className="text-xs italic">{description}</p>}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}

interface NovelGalleryProps {
  images: Array<NovelImageProps>;
  layout?: "grid" | "masonry" | "carousel" | "stacked" | "polaroidWall" | "filmStrip" | "collage";
  spacing?: "tight" | "normal" | "loose";
}

export function NovelGallery({ images, layout = "grid", spacing = "normal" }: NovelGalleryProps) {
  const spacingClasses = {
    tight: "gap-2",
    normal: "gap-4",
    loose: "gap-8",
  };
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

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
        <motion.div
          ref={carouselRef}
          className="flex snap-x snap-mandatory"
          animate={{ x: `-${currentIndex * 100}%` }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {images.map((image, index) => (
            <div key={index} className="snap-center shrink-0 w-full" style={{ minWidth: "100%" }}>
              <NovelImage {...image} />
            </div>
          ))}
        </motion.div>
        <div className="flex justify-center mt-4 space-x-2">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className={cn(
                "p-1 bg-white shadow-md rotate-1 cursor-pointer",
                currentIndex === index && "border-2 border-red-500 -rotate-2"
              )}
              whileHover={{ scale: 1.1, rotate: 0 }}
              onClick={() => setCurrentIndex(index)}
            >
              <Image
                src={image.src}
                alt={`Thumbnail ${index}`}
                width={50}
                height={50}
                className="object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    ),
    stacked: (
      <div className="relative h-[600px] w-full">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="absolute inset-0 mx-auto"
            initial={{ opacity: 0, scale: 0.9, rotate: index % 2 === 0 ? 5 : -5 }}
            animate={{
              opacity: 1,
              scale: 1 - index * 0.1,
              zIndex: images.length - index,
              y: index * 40,
            }}
            whileHover={{ scale: 1.05, zIndex: images.length + 1, rotate: 0 }}
            transition={{ duration: 0.5 }}
          >
            <NovelImage {...image} className="max-w-[80%] mx-auto" />
          </motion.div>
        ))}
      </div>
    ),
    polaroidWall: (
      <div className="relative min-h-[600px] bg-gray-100 p-8 rounded-xl">
        {images.map((image, index) => {
          const randomRotate = (index % 2 === 0 ? 1 : -1) * (Math.random() * 5);
          const column = index % 3;
          const row = Math.floor(index / 3);
          const topOffset = Math.min(row * 35, 70);
          return (
            <motion.div
              key={index}
              className="absolute"
              style={{
                left: `${10 + column * 30}%`,
                top: `${10 + topOffset}%`,
                rotate: randomRotate,
              }}
              whileHover={{ scale: 1.1, rotate: 0, zIndex: 10 }}
            >
              <NovelImage {...image} style="polaroid" />
            </motion.div>
          );
        })}
      </div>
    ),
    filmStrip: (
      <div className="relative bg-black p-8 overflow-x-auto flex space-x-4">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="relative flex-shrink-0"
            whileHover={{ y: -20 }}
          >
            <div className="absolute inset-x-0 top-[-20px] h-[20px] bg-black [background-image:repeating-linear-gradient(90deg,#fff_0_4px,transparent_4px_8px)]" />
            <div className="absolute inset-x-0 bottom-[-20px] h-[20px] bg-black [background-image:repeating-linear-gradient(90deg,#fff_0_4px,transparent_4px_8px)]" />
            <NovelImage {...image} style={image.style || "modern"} />
          </motion.div>
        ))}
      </div>
    ),
    collage: (
      <div className="relative min-h-[500px] w-full bg-gradient-to-br from-gray-200 to-gray-400 p-8 rounded-xl overflow-hidden">
        {images.map((image, index) => {
          const angle = (index * 360) / images.length;
          const radius = Math.min(150, 200 - images.length * 10);
          const x = 50 + Math.cos((angle * Math.PI) / 180) * radius;
          const y = 50 + Math.sin((angle * Math.PI) / 180) * radius;
          return (
            <motion.div
              key={index}
              className="absolute shadow-md"
              style={{
                left: `${x}%`,
                top: `${y}%`,
                translateX: "-50%",
                translateY: "-50%",
                width: "200px",
                maxHeight: "300px",
                overflow: "hidden",
              }}
              whileHover={{ scale: 1.15, zIndex: 10, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: index * 0.2 } }}
            >
              <NovelImage {...image} style={index % 2 === 0 ? "rippedEdge" : "colorSplash"} width={200} height={300} />
            </motion.div>
          );
        })}
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
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [windowWidth, setWindowWidth] = useState<number | null>(null);
  const wallRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const getPositions = () => {
    if (!windowWidth) return memories.map(() => ({ left: 0, top: 0, rotate: 0 }));

    const imageWidth = 240;
    const containerWidth = 100;
    const maxColumns = 3;
    const columnWidth = (containerWidth - 20) / maxColumns;
    const rowHeight = 30;

    return memories.map((_, index) => {
      const column = index % maxColumns;
      const row = Math.floor(index / maxColumns);

      const baseLeft = 10 + column * columnWidth;
      const maxLeft = 90 - (imageWidth / windowWidth) * 100;
      const randomSeed = index * 3.14159;
      const randomLeft = Math.min(baseLeft + Math.sin(randomSeed) * 6, maxLeft);

      const baseTop = row * rowHeight + 10;
      const randomTop = baseTop + Math.cos(randomSeed) * 6;
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
      />
      {memories.map((memory, index) => {
        const position = positions[index];
        const pinPosition = getPinPosition(index);
        const memoryStyle = memory.style || "polaroid";
        const memoryEffect = memory.effect || "none";
        const isActive = activeIndex === index;

        return (
          <motion.div
            key={index}
            className="absolute cursor-pointer"
            style={{
              left: `${position.left}%`,
              top: `${position.top}%`,
              rotate: position.rotate,
              zIndex: isActive ? memories.length + 1 : memories.length - index,
            }}
            whileHover={{
              scale: 1.05,
              rotate: 0,
              zIndex: memories.length + 1,
              transition: { duration: 0.2, type: "spring", stiffness: 300, damping: 25 },
            }}
            onClick={() => setActiveIndex(isActive ? null : index)}
            onHoverStart={() => setActiveIndex(index)}
            onHoverEnd={() => setActiveIndex(null)}
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
                style={{ maxWidth: "240px", maxHeight: "240px", objectFit: "cover" }}
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
      <div className="absolute top-12 left-10 transform -rotate-12 z-0 opacity-70">
        <svg width="40" height="18" viewBox="0 0 40 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M37.5 3H10C5.5 3 5.5 15 10 15H30" stroke="#888" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>
      <div className="absolute bottom-12 right-12 transform rotate-15 z-0 opacity-70">
        <svg width="40" height="18" viewBox="0 0 40 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M37.5 3H10C5.5 3 5.5 15 10 15H30" stroke="#888" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>
    </div>
  );
}