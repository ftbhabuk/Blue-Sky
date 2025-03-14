"use client";

import { type ReactNode, useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Caveat } from "next/font/google";
import { ChapterNavigation } from "@/app/components/chapter-navigation";
import { ChapterAmbience } from "@/components/ChapterAmbience";
import Link from "next/link";

const caveat = Caveat({ subsets: ["latin"] });

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
  chapterTitle: string;
  chapterSubtitle?: string;
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
      className={`absolute ${side}-0 w-48 ${caveat.className} text-lg text-blue-500 opacity-75 hidden md:block`}
      style={{
        transform: "none",
        right: side === "right" ? "0" : "auto",
        left: side === "left" ? leftOffset : "auto",
      }}
      whileHover={{
        scale: 1.05,
        color: "#1e40af",
        opacity: 1,
      }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
}

// Updated EnhancedBlockQuote to use globals.css styling
export function EnhancedBlockQuote({ children }: BlockQuoteProps) {
  return (
    <motion.blockquote
      className="enhanced-blockquote text-xl italic my-8 pl-6 border-l-2 border-blue-200" // Reuse globals.css class
      whileHover={{
        x: 4,
        borderLeftColor: "#3b82f6",
        color: "#1e40af",
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
        className="text-blue-600 cursor-pointer underline decoration-dotted"
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
          className={`absolute z-10 bottom-full mb-2 p-3 rounded-md bg-white shadow-lg border border-blue-200 w-64 ${caveat.className} text-sm inline-block`}
        >
          {note}
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-white border-r border-b border-blue-200"></span>
        </motion.span>
      )}
    </span>
  );
}

export function SectionDivider() {
  return (
    <div className="flex items-center justify-center my-8">
      <div className="flex-grow h-[1px] bg-blue-200/50"></div>
      <div className="mx-4 text-blue-300">❦</div>
      <div className="flex-grow h-[1px] bg-blue-200/50"></div>
    </div>
  );
}

export default function ChapterLayout({
  chapterNumber,
  chapterTitle,
  chapterSubtitle,
  backgroundElements,
  children,
  backgroundColorStops = ["#f8fafc", "#f0f7ff", "#e6f2ff", "#f8fafc"],
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

  const [isLoaded, setIsLoaded] = useState(false);
  const [currentSound, setCurrentSound] = useState<string>(
    soundMode === "single" ? (Array.isArray(sounds) ? sounds[0] : sounds) : Array.isArray(sounds) ? sounds[0] : sounds
  );

  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Pinyon+Script&family=Playfair+Display:ital,wght@0,400;0,500;1,400&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=EB+Garamond:ital,wght@0,400;0,500;1,400&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    setTimeout(() => setIsLoaded(true), 100);

    const unsubscribe = scrollYProgress.on("change", (progress) => {
      if (soundMode === "single") {
        setCurrentSound(Array.isArray(sounds) ? sounds[0] : sounds);
      } else if (soundMode === "scroll") {
        const soundArray = Array.isArray(sounds) ? sounds : [sounds];
        const numSounds = soundArray.length;
        const segment = 1 / Math.max(numSounds, 1);

        if (progress < 0.2) {
          setCurrentSound(soundArray[0]);
        } else {
          const index = Math.min(
            Math.floor((progress - 0.2) / segment),
            numSounds - 1
          );
          setCurrentSound(soundArray[index] || soundArray[0]);
        }
      }
    });

    return () => {
      document.head.removeChild(link);
      unsubscribe();
    };
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
      className="min-h-screen mx-auto relative bg-white overflow-x-hidden w-full"
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
      {/* Progress bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <motion.div
          className="h-full bg-blue-600"
          style={{ scaleX: scrollYProgress, transformOrigin: "left" }}
        />
      </div>

      {/* Paper texture overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="w-full h-full bg-[url('https://img.freepik.com/free-photo/white-paper-texture_1194-5998.jpg?w=2000')] bg-cover"></div>
      </div>

      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {backgroundElements}
      </div>

      {/* Navigation header */}
      <header className="sticky top-0 z-20 bg-white/80 backdrop-blur-sm border-b border-blue-100 w-full">
        <div className="px-4 md:px-8 py-4 flex items-center justify-between max-w-4xl mx-auto">
          <Link
            href="/"
            className={`text-blue-900 text-lg font-medium transition-all duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Blue Sky
          </Link>
        </div>
      </header>

      {/* Main content */}
      <main className="px-4 md:px-8 py-8 max-w-4xl mx-auto relative">
        <div
          className={`mb-8 transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <div className="flex items-center justify-between mb-2">
            <p
              className="text-sm uppercase tracking-wider text-blue-900/60"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Chapter {chapterNumber}
            </p>
          </div>
          <h1
            className="text-3xl md:text-4xl text-blue-900 mb-2"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {chapterTitle}
          </h1>
          {chapterSubtitle && (
            <p
              className="text-lg text-blue-900/70 italic"
              style={{ fontFamily: "'EB Garamond', serif" }}
            >
              {chapterSubtitle}
            </p>
          )}
          <SectionDivider />
        </div>

        <div
          className={`transition-all duration-1000 delay-500 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          style={{ fontFamily: "'EB Garamond', serif" }}
        >
          <div
            className="prose prose-lg max-w-none prose-p:text-blue-900/90 prose-p:leading-relaxed first-letter:text-7xl first-letter:text-blue-900 first-letter:mr-3 first-letter:float-left first-letter:leading-[0.8] first-letter:font-[IM_Fell_English]"
          >
            {children}
          </div>
        </div>

        <div
          className={`mt-6 text-center transition-all duration-1000 delay-1200 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <p className="text-blue-300 text-2xl">❧</p>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-blue-100 py-4 w-full">
        <div className="px-4 md:px-8 text-center max-w-4xl mx-auto">
          <p
            className={`text-xs text-blue-900/40 transition-all duration-1000 delay-1500 ${isLoaded ? "opacity-100" : "opacity-0"}`}
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Blue Sky • A journey through words and emotions
          </p>
        </div>
      </footer>

      <ChapterAmbience soundUrl={currentSound} repeat={repeat} />
      {fixedElement}
      <ChapterNavigation currentChapter={chapterNumber} />
    </motion.div>
  );
}