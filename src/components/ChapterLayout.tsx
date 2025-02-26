// /components/ChapterLayout.tsx
"use client";

import { ReactNode, useRef, } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Caveat } from "next/font/google";
import { Crimson_Pro } from "next/font/google";
import { ChapterNavigation } from "@/app/components/chapter-navigation";

// Fonts
const caveat = Caveat({ subsets: ["latin"] });
const crimson = Crimson_Pro({ subsets: ["latin"], weight: ["400", "700"] });

interface SectionProps {
  children: ReactNode;
  delay: number;
}

interface MarginNoteProps {
  children: ReactNode;
  side: "left" | "right";
}

interface BlockQuoteProps {
  children: ReactNode;
}

export interface ChapterLayoutProps {
  chapterNumber: number;
  chapterTitle: string;
  backgroundElements?: ReactNode;
  children: ReactNode;
  gradientColors?: string[];
  backgroundColorStops?: string[];
  fixedElement?: ReactNode;
}

// Section component with simple animation
export function Section({ children, delay }: SectionProps) {
  return (
    <motion.div
      className="mb-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay }}
    >
      {children}
    </motion.div>
  );
}

// Enhanced margin note with subtle hover effect
export function EnhancedMarginNote({ children, side }: MarginNoteProps) {
  const leftOffset = side === "left" ? "auto" : "auto";

  return (
    <motion.div
      className={`absolute ${side}-0 w-48 ${caveat.className} text-lg \
text-gray-500 opacity-75 hidden md:block`}
      style={{
        transform: "none",
        right: side === "right" ? "0" : "auto",
        left: side === "left" ? leftOffset : "auto",
      }}
      whileHover={{
        scale: 1.05,
        color: "#6d28d9",
        opacity: 1,
      }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
}

// Enhanced blockquote with subtle hover effect
export function EnhancedBlockQuote({ children }: BlockQuoteProps) {
  return (
    <motion.blockquote
      className="text-xl italic text-gray-600 my-8 pl-6 border-l-2 \
border-gray-300"
      whileHover={{
        x: 4,
        borderLeftColor: "#6d28d9",
        color: "#4c1d95",
      }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.blockquote>
  );
}

export default function ChapterLayout({
  chapterNumber,
  chapterTitle,
  backgroundElements,
  children,
  gradientColors = ["from-blue-100", "via-purple-100", "to-blue-100"],
  backgroundColorStops = ["#ffffff", "#f8f8f8", "#f5f5f5", "#ffffff"],
  fixedElement,
}: ChapterLayoutProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start", "end"],
  });

  // Subtle background color transition based on scroll
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6, 1],
    backgroundColorStops
  );

  const chapterNumberText = 
    chapterNumber === 1 ? "One" : 
    chapterNumber === 2 ? "Two" : 
    chapterNumber === 3 ? "Three" :
    chapterNumber === 4 ? "Four" :
    chapterNumber === 5 ? "Five" :
    chapterNumber === 6 ? "Six" :
    chapterNumber === 7 ? "Seven" :
    chapterNumber === 8 ? "Eight" :
    chapterNumber === 9 ? "Nine" :
    chapterNumber === 10 ? "Ten" : 
    chapterNumber.toString();

  return (
    <motion.div
      ref={containerRef}
      className="min-h-screen relative"
      style={{ backgroundColor }}
    >
      {/* Background Elements */}
      {backgroundElements && (
        <div className="absolute inset-0 overflow-hidden">
          {backgroundElements}
        </div>
      )}

      <div className="max-w-3xl mx-auto px-6 py-20 relative">
        {/* Chapter Title with enhanced but subtle background */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-16 space-y-2 relative"
        >
          {/* Subtle gradient background for title */}
          <motion.div
            className={`absolute -inset-6 rounded-lg opacity-10 \
bg-gradient-to-r ${gradientColors.join(' ')}`}
            animate={{
              opacity: [0.05, 0.1, 0.05],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />

          <h1
            className={`text-5xl md:text-6xl tracking-tight text-gray-800 \
relative ${crimson.className}`}
          >
            Chapter {chapterNumberText}
          </h1>
          <h2
            className={`text-3xl md:text-4xl text-gray-600 relative \
${crimson.className}`}
          >
            {chapterTitle}
          </h2>
        </motion.div>

        {/* Chapter Content */}
        {children}
      </div>

      {/* Fixed Element (like cigarette) */}
      {fixedElement}

      <ChapterNavigation currentChapter={chapterNumber} />
    </motion.div>
  );
}