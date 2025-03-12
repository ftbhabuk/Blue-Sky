"use client";

import { ReactNode, useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Caveat } from "next/font/google";
// import { Crimson_Pro } from "next/font/google";
import { ChapterNavigation } from "@/app/components/chapter-navigation";
import { ChapterAmbience } from "@/components/ChapterAmbience";

const caveat = Caveat({ subsets: ["latin"] });
// const crimson = Crimson_Pro({ subsets: ["latin"], weight: ["400", "700"] });

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

interface FootnoteProps {
  children: ReactNode;
  note: string;
}

export interface ChapterLayoutProps {
  chapterNumber: number;
  chapterTitle: ReactNode;
  backgroundElements?: ReactNode;
  children: ReactNode;
  gradientColors?: string[];
  backgroundColorStops?: string[];
  fixedElement?: ReactNode;
  previousChapter?: number;
  soundMode?: "single" | "scroll";
  repeat?: boolean;
  sounds?: string | string[];
}

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
const textStyling = `
  font-['IM_Fell_English',Georgia,serif]
  text-[#1a1a1a]
  opacity-95
  [text-shadow:0.5px_0.5px_1px_rgba(0,0,0,0.1),-0.5px_-0.5px_1px_rgba(0,0,0,0.1)]
  [filter:contrast(1.1)_blur(0.02px)]
`;

export function EnhancedBlockQuote({ children }: BlockQuoteProps) {
  return (
    <motion.blockquote
      className={`text-xl italic text-gray-600 my-8 pl-6 border-l-2 \
border-gray-300 ${textStyling}`}
      whileHover={{
        x: 4,
        borderLeftColor: "#6d28d9",
        color: "gray-700",
      }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.blockquote>
  );
}

export function InteractiveFootnote({ children, note }: FootnoteProps) {
  const [isOpen, setIsOpen] = useState(false);
  const footnoteRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        footnoteRef.current &&
        !footnoteRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <span className="relative inline-block">
      <span
        className="text-purple-600 cursor-pointer underline decoration-dotted"
        onClick={() => setIsOpen(!isOpen)}
      >
        {children}
      </span>
      {isOpen && (
        <motion.span
          ref={footnoteRef}
          initial={{ opacity: 0, y: 10, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.9 }}
          className={`absolute z-10 bottom-full mb-2 p-3 rounded-md bg-white shadow-lg border border-purple-200 w-64 ${caveat.className} text-sm inline-block`}
        >
          {note}
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-white border-r border-b border-purple-200"></span>
        </motion.span>
      )}
    </span>
  );
}

export function SectionDivider() {
  return (
    <div className="flex items-center justify-center my-12">
      <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent w-1/3"></div>
      <motion.div
        className="mx-4 text-gray-400"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        ✦
      </motion.div>
      <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent w-1/3"></div>
    </div>
  );
}

export default function ChapterLayout({
  chapterNumber,
  chapterTitle,
  backgroundElements,
  children,
  // gradientColors = ["from-[#f5f5f0]", "via-[#e0e0d8]", "to-[#f5f5f0]"],
  backgroundColorStops = ["#f5f5f0", "#f0f0ea", "#e8e8e2", "#f5f5f0"],
  fixedElement,
  previousChapter,
  soundMode = "scroll",
  repeat = true,
  sounds = ["/sounds/1.wav"],
}: ChapterLayoutProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start", "end"],
  });

  const [currentSound, setCurrentSound] = useState<string>(
    soundMode === "single"
      ? Array.isArray(sounds)
        ? sounds[0]
        : sounds
      : Array.isArray(sounds)
        ? sounds[0]
        : sounds // Start with first sound
  );

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (progress) => {
      if (soundMode === "single") {
        setCurrentSound(Array.isArray(sounds) ? sounds[0] : sounds);
      } else if (soundMode === "scroll") {
        const soundArray = Array.isArray(sounds) ? sounds : [sounds];
        const numSounds = soundArray.length;
        const segment = 1 / Math.max(numSounds, 1);

        if (progress < 0.2) {
          setCurrentSound(soundArray[0]); // Start with first sound even at top
        } else {
          const index = Math.min(
            Math.floor((progress - 0.2) / segment),
            numSounds - 1
          );
          setCurrentSound(soundArray[index] || soundArray[0]);
        }
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress, soundMode, sounds]);

  const initialX = previousChapter
    ? previousChapter < chapterNumber
      ? 100
      : -100
    : 0;

  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6, 1],
    backgroundColorStops
  );

  return (
    <motion.div
      ref={containerRef}
      className="min-h-screen w-full relative"
      style={{ backgroundColor }}
      initial={{ opacity: 0, x: initialX }}
      animate={{ opacity: 1, x: 0 }}
      exit={{
        opacity: 0,
        x: previousChapter
          ? previousChapter > chapterNumber
            ? 100
            : -100
          : 0,
      }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      {/* Background progress bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <motion.div
          className="h-full bg-gray-600"
          style={{ scaleX: scrollYProgress, transformOrigin: "left" }}
        />
      </div>

      {/* Background elements (if any) */}
      {backgroundElements && (
        <div className="absolute inset-0 overflow-hidden">
          {backgroundElements}
        </div>
      )}

      {/* Main content container */}
      <div className="max-w-4xl mx-auto px-6 py-1 relative">
        {/* Chapter title */}
        <div className="w-100 ">
          {chapterTitle}
        </div>

        {/* Chapter content */}
        <div className="relative">
          {children}
        </div>
      </div>

      {/* Additional elements */}
      <ChapterAmbience soundUrl={currentSound} repeat={repeat} />
      {fixedElement}
      <ChapterNavigation currentChapter={chapterNumber} />
    </motion.div>
  );
}