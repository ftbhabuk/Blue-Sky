"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ComparisonImageProps {
  beforeImage: string;
  afterImage: string;
  beforeAlt: string;
  afterAlt: string;
  width: number;
  height: number;
  style?: "classic" | "polaroid" | "vintage" | "modern";
  effect?: "fade" | "slide" | "zoom" | "none";
}

export default function ImageComparison({
  beforeImage,
  afterImage,
  beforeAlt,
  afterAlt,
  width,
  height,
  style = "classic",
  effect = "fade",
}: ComparisonImageProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (event: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    const container = event.currentTarget.getBoundingClientRect();
    const x = "touches" in event ? event.touches[0].clientX - container.left : event.clientX - container.left;
    const position = Math.max(0, Math.min(100, (x / container.width) * 100));
    setSliderPosition(position);
  };

  // Style variants (mirrored from NovelImage)
  const styleVariants = {
    classic: "rounded-lg shadow-lg",
    polaroid: "rounded-sm p-4 bg-white shadow-xl",
    vintage: "sepia brightness-95 rounded-sm shadow-md border-8 border-white",
    modern: "rounded-xl shadow-2xl",
  };

  // Effect variants
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
      className={cn("relative overflow-hidden cursor-ew-resize", styleVariants[style])}
      style={{ width: `${width}px`, height: `${height}px` }}
      variants={effectVariants[effect]}
      initial="initial"
      animate="animate"
      exit="exit"
      onMouseDown={() => setIsDragging(true)}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
      onMouseMove={handleMove}
      onTouchStart={() => setIsDragging(true)}
      onTouchEnd={() => setIsDragging(false)}
      onTouchMove={handleMove}
    >
      {/* Mirror Frame Overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          border: "10px solid #d4af37", // Gold-ish mirror frame
          borderImage: "linear-gradient(45deg, #d4af37, #8b5a2b) 1",
          boxShadow: "inset 0 0 10px rgba(0,0,0,0.5)",
          borderRadius: "12px",
        }}
      />

      {/* Before Image (Clear Reality) */}
      <div className="absolute inset-0">
        <Image
          src={beforeImage || "/placeholder.svg"}
          alt={beforeAlt}
          className="object-cover"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>

      {/* After Image (Foggy Chaos) */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <Image
          src={afterImage || "/placeholder.svg"}
          alt={afterAlt}
          className="object-cover"
          fill
          style={{ objectFit: "cover" }}
        />
        {/* Cracked/Foggy Mirror Effect on Right Side */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "rgba(255,255,255,0.1)",
            filter: "blur(2px)",
            borderRight: "2px dotted #8b5a2b",
          }}
        />
      </div>

      {/* Slider Handle */}
      <div className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize" style={{ left: `${sliderPosition}%` }}>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center"></div>
      </div>
    </motion.div>
  );
}