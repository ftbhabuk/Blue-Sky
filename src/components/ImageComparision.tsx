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
  beforeText?: string;
  afterText?: string;
  width?: number;
  height?: number;
  beforeStyle?: "classic" | "polaroid" | "vintage" | "modern" | "noir" | "dreamy" | "retro" | "minimal";
  afterStyle?: "classic" | "polaroid" | "vintage" | "modern" | "noir" | "dreamy" | "retro" | "minimal";
  beforeEffect?: "fade" | "slide" | "zoom" | "none" | "reveal" | "elastic";
  afterEffect?: "fade" | "slide" | "zoom" | "none" | "reveal" | "elastic";
}

export default function ImageComparison({
  beforeImage,
  afterImage,
  beforeAlt,
  afterAlt,
  beforeText,
  afterText,
  width = 600,
  height = 400,
  beforeStyle = "classic",
  afterStyle = "classic",
  beforeEffect = "none",
  afterEffect = "none",
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

  const styleVariants = {
    classic: "rounded-lg shadow-lg",
    polaroid: "rounded-sm p-4 bg-white shadow-xl",
    vintage: "sepia brightness-95 rounded-sm shadow-md border-8 border-white",
    modern: "rounded-xl shadow-2xl",
    noir: "grayscale contrast-125 rounded-lg shadow-xl",
    dreamy: "rounded-lg shadow-lg brightness-105 contrast-75 saturate-150",
    retro: "rounded-none border-4 border-orange-300 sepia brightness-90",
    minimal: "rounded-xl border border-gray-200 shadow-sm",
  };

  const effectVariants = {
    fade: { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } },
    slide: { initial: { x: -20, opacity: 0 }, animate: { x: 0, opacity: 1 }, exit: { x: 20, opacity: 0 } },
    zoom: { initial: { scale: 0.8, opacity: 0 }, animate: { scale: 1, opacity: 1 }, exit: { scale: 1.2, opacity: 0 } },
    none: { initial: {}, animate: {}, exit: {} },
    reveal: { initial: { y: 50, opacity: 0 }, animate: { y: 0, opacity: 1, transition: { duration: 0.8 } }, exit: { y: -50, opacity: 0 } },
    elastic: { initial: { scale: 0, opacity: 0 }, animate: { scale: 1, opacity: 1, transition: { type: "spring", stiffness: 300, damping: 15 } }, exit: { scale: 0, opacity: 0 } },
  };

  return (
    <div
      className="relative overflow-hidden cursor-ew-resize my-6 mx-auto"
      style={{ width: `${width}px`, height: `${height}px`, maxWidth: "100%" }}
      onMouseDown={() => setIsDragging(true)}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
      onMouseMove={handleMove}
      onTouchStart={() => setIsDragging(true)}
      onTouchEnd={() => setIsDragging(false)}
      onTouchMove={handleMove}
    >
      {/* Before Image */}
      <motion.div
        className={cn("absolute inset-0", styleVariants[beforeStyle])}
        variants={effectVariants[beforeEffect]}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <Image
          src={beforeImage || "/placeholder.svg"}
          alt={beforeAlt}
          className="object-cover"
          fill
          style={{ objectFit: "cover" }}
        />
        {/* Before Text Overlay with Clipping */}
        {beforeText && (
          <div
            className="absolute top-2 left-2 right-2 text-center pointer-events-none"
            style={{
              fontFamily: "'Courier New', monospace",
              fontSize: "14px",
              color: "white",
              textShadow: "0 0 4px rgba(0, 0, 0, 0.8)",
              padding: "4px 8px",
              background: "rgba(0, 0, 0, 0.5)",
              borderRadius: "4px",
              clipPath: `inset(0 0 0 ${sliderPosition}%)`, // Clips text to left of slider
            }}
          >
            {beforeText}
          </div>
        )}
      </motion.div>

      {/* After Image */}
      <motion.div
        className={cn("absolute inset-0", styleVariants[afterStyle])}
        variants={effectVariants[afterEffect]}
        initial="initial"
        animate="animate"
        exit="exit"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <Image
          src={afterImage || "/placeholder.svg"}
          alt={afterAlt}
          className="object-cover"
          fill
          style={{ objectFit: "cover" }}
        />
        {/* After Text Overlay */}
        {afterText && (
          <div
            className="absolute bottom-2 left-2 right-2 text-center pointer-events-none"
            style={{
              fontFamily: "'Courier New', monospace",
              fontSize: "14px",
              color: "white",
              textShadow: "0 0 4px rgba(0, 0, 0, 0.8)",
              padding: "4px 8px",
              background: "rgba(0, 0, 0, 0.5)",
              borderRadius: "4px",
            }}
          >
            {afterText}
          </div>
        )}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "rgba(255,255,255,0.1)",
            filter: "blur(2px)",
          }}
        />
      </motion.div>

      {/* Slider Handle */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white/80"
        style={{ left: `${sliderPosition}%` }}
      >
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full shadow-md"
        />
      </div>
    </div>
  );
}