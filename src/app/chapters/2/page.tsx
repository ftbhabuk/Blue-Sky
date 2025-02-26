"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Caveat } from "next/font/google";
import { Crimson_Pro } from "next/font/google";
import { useState } from "react";
import { ChapterNavigation } from "@/app/components/chapter-navigation";
// Fonts
const caveat = Caveat({ subsets: ["latin"] });
const crimson = Crimson_Pro({ subsets: ["latin"], weight: ["400", "700"] });

export default function ChapterTwo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start", "end"],
  });

  // Subtle background color transition based on scroll (muted colors for hospital theme)
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6, 1],
    ["#f8f8f8", "#f2f2f2", "#f5f5f5", "#f8f8f8"]
  );

  // Cigarette quote state
  const [showQuote, setShowQuote] = useState(false);
  const [currentQuote, setCurrentQuote] = useState(0);
  const [showSmoke, setShowSmoke] = useState(false);

  const quotes = [
    "I feel emptier... elusive time?",
    "Truth dissolves like smoke between my fingers.",
    "The clock lies. I lie. We all lie.",
    "White walls contain nothing but echoes.",
    "Memory fails where reality bends."
  ];

  // Handle cigarette click for quote reveal
  const handleCigaretteClick = () => {
    setShowQuote(true);
    setShowSmoke(true);
    setCurrentQuote((prev) => (prev + 1) % quotes.length);
    
    // Reset smoke animation after a few seconds
    setTimeout(() => {
      setShowSmoke(false);
    }, 4000);
  };

  return (
    <motion.div
      ref={containerRef}
      className="min-h-screen relative"
      style={{ backgroundColor }}
    >
      {/* Hospital Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Clock */}
        <motion.div 
          className="absolute top-20 right-12 w-16 h-16 rounded-full bg-gray-100 border-2 border-gray-300 flex items-center justify-center"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        >
          <div className="relative w-14 h-14 rounded-full">
            <div className="absolute top-1/2 left-1/2 w-6 h-1 bg-gray-600 origin-left transform -translate-y-1/2 rotate-45"></div>
            <div className="absolute top-1/2 left-1/2 w-4 h-1 bg-gray-800 origin-left transform -translate-y-1/2 rotate-180"></div>
          </div>
        </motion.div>
        
        {/* Window */}
        <div className="absolute top-24 left-12 w-32 h-40 bg-gray-200 border border-gray-300">
          <div className="grid grid-cols-2 grid-rows-2 h-full">
            <div className="border-b border-r border-gray-300 bg-gray-100"></div>
            <div className="border-b border-gray-300 bg-gray-100"></div>
            <div className="border-r border-gray-300 bg-gray-100"></div>
            <div className="bg-gray-100"></div>
          </div>
        </div>

        {/* IV Stand */}
        <div className="absolute top-40 right-20 w-1 h-64 bg-gray-300">
          <div className="absolute -top-2 w-6 h-1 bg-gray-400 left-1/2 transform -translate-x-1/2"></div>
          <div className="absolute top-4 w-4 h-8 border border-gray-400 left-1/2 transform -translate-x-1/2 bg-gray-50"></div>
        </div>
      </div>

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
            className="absolute -inset-6 rounded-lg opacity-10 \
bg-gradient-to-r from-gray-100 via-yellow-50 to-gray-100"
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
            Chapter Two
          </h1>
          <h2
            className={`text-3xl md:text-4xl text-gray-600 relative \
${crimson.className}`}
          >
            Liar
          </h2>
        </motion.div>

        {/* Opening Section */}
        <Section delay={0.2}>
          <p
            className={`text-lg leading-relaxed text-gray-800 \
${crimson.className}`}
          >
            I woke up in a room that wasn't mine. Sterile white walls encased me like a confession. The doctor said I've been here for weeks, but that can't be right. My memories feel shredded, pieced together by unreliable hands. Time here moves strangely—the clock ticks but the hands never seem to change position.
          </p>
          <EnhancedMarginNote side="right">
            Time moves strangely here
          </EnhancedMarginNote>
        </Section>

        {/* Doctor Interaction */}
        <Section delay={0.4}>
          <p
            className={`text-lg leading-relaxed text-gray-800 \
${crimson.className}`}
          >
            "You're improving," the doctor tells me with practiced sincerity. His smile never reaches his eyes. I don't believe him. Nobody here tells the truth. Not the nurses with their mechanical kindness. Not the orderlies who pretend not to watch me. Not the visitors who claim to know me but feel like strangers.
          </p>
          <EnhancedBlockQuote>
            What if the lies are the medicine? What if truth is the disease they're treating me for?
          </EnhancedBlockQuote>
          <EnhancedMarginNote side="left">
            Nobody tells the truth
          </EnhancedMarginNote>
        </Section>

        {/* Medication Scene */}
        <Section delay={0.6}>
          <p
            className={`text-lg leading-relaxed text-gray-800 \
${crimson.className}`}
          >
            They bring pills in paper cups. Different colors, different sizes. "These will help you," they say, but their words echo hollow in my mind. The medication makes everything fuzzy, distant. My thoughts drift apart like smoke. Sometimes I hide the pills under my tongue, saving them. For what? I'm not sure yet.
          </p>
          <EnhancedMarginNote side="right">
            Thoughts drift like smoke
          </EnhancedMarginNote>
        </Section>

        {/* Visitor Section */}
        <Section delay={0.8}>
          <h3 className={`text-2xl text-gray-700 mb-6 ${crimson.className}`}>
            Ghosts in familiar skin...
          </h3>
          <p
            className={`text-lg leading-relaxed text-gray-800 \
${crimson.className}`}
          >
            A woman visits me on Tuesdays. She says she's my sister, but her eyes hold no shared memories. When she speaks, her voice sounds rehearsed. "Remember that summer at the lake house?" she asks, but I've never been to a lake house. At least, I don't think I have. The memories she describes feel planted, foreign seeds in the soil of my mind.
          </p>
          <EnhancedMarginNote side="left">
            Foreign seeds in my mind
          </EnhancedMarginNote>
        </Section>

        {/* Final Thoughts */}
        <Section delay={1.0}>
          <p
            className={`text-lg leading-relaxed text-gray-800 \
${crimson.className}`}
          >
            I've started keeping notes—hidden between the mattress and frame. Little truths to remind myself who I am. Or who I think I am. The hospital staff say I was in an accident, but my body shows no scars. They say I'm getting better, but better than what? I don't remember being sick.
          </p>
          <EnhancedBlockQuote>
            What if I'm not the patient? What if I'm the disease they're trying to cure?
          </EnhancedBlockQuote>
          <p
            className={`text-lg leading-relaxed text-gray-800 \
${crimson.className}`}
          >
            Tomorrow I'll try to find the door they use when they think I'm sleeping. Maybe there's a way out of this fabricated reality. Or maybe I'm the fabrication, a lie told so convincingly that even I believed it.
          </p>
          <EnhancedMarginNote side="right">
            Maybe I'm the fabrication
          </EnhancedMarginNote>
        </Section>

        {/* Interactive Cigarette Element */}
        <motion.div 
          className="fixed bottom-20 right-10 flex flex-col items-center cursor-pointer"
          whileHover={{ scale: 1.05 }}
          onClick={handleCigaretteClick}
        >
          <div className="w-6 h-24 relative">
            <div className="absolute bottom-0 w-6 h-20 bg-yellow-50 border border-gray-300 rounded-sm"></div>
            <div className="absolute bottom-20 w-6 h-4 bg-gray-400 border border-gray-500 rounded-sm"></div>
            
            {/* Smoke animation */}
            {showSmoke && (
              <>
                <motion.div 
                  className={`absolute -top-4 left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full bg-gray-200 opacity-40`}
                  animate={{ y: -60, x: -10, opacity: 0 }}
                  transition={{ duration: 4, ease: "easeOut" }}
                />
                <motion.div 
                  className={`absolute -top-4 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gray-200 opacity-30`}
                  animate={{ y: -80, x: 5, opacity: 0 }}
                  transition={{ duration: 4, delay: 0.2, ease: "easeOut" }}
                />
                <motion.div 
                  className={`absolute -top-4 left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-gray-200 opacity-20`}
                  animate={{ y: -100, x: -15, opacity: 0 }}
                  transition={{ duration: 4, delay: 0.4, ease: "easeOut" }}
                />
              </>
            )}
          </div>
          
          {/* Quote reveal */}
          {showQuote && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className={`mt-2 p-3 bg-gray-100 text-sm italic text-gray-700 w-48 ${crimson.className}`}
            >
              "{quotes[currentQuote]}"
            </motion.div>
          )}
        </motion.div>
      </div>

      <ChapterNavigation currentChapter={2} />
    </motion.div>
  );
}

// Section component with simple animation
function Section({
  children,
  delay,
}: {
  children: React.ReactNode;
  delay: number;
}) {
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
function EnhancedMarginNote({
  children,
  side,
}: {
  children: React.ReactNode;
  side: "left" | "right";
}) {
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
function EnhancedBlockQuote({ children }: { children: React.ReactNode }) {
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