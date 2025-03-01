"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

// Literary quotes that capture the essence of the story
const quotes = [
  {
    text: "Between falling and flying lies the truth",
    author: "Blue Sky",
  },
  {
    text: "The hospital roof was my sanctuary, where the sky felt close enough to touch",
    author: "Chapter One",
  },
  {
    text: "Time moves differently here, seconds stretch into hours",
    author: "Chapter Two",
  },
];

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);
  const [currentQuote, setCurrentQuote] = useState(0);
  const [isQuoteChanging, setIsQuoteChanging] = useState(false);
  const router = useRouter();
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setLoaded(true);
    // Start quote rotation
    intervalRef.current = setInterval(() => {
      setIsQuoteChanging(true);
      setTimeout(() => {
        setCurrentQuote((prev) => (prev + 1) % quotes.length);
        setIsQuoteChanging(false);
      }, 500);
    }, 5000);
    intervalRef.current = setInterval(() => {
      setIsQuoteChanging(true);
      setTimeout(() => {
        setCurrentQuote((prev) => (prev + 1) % quotes.length);
        setIsQuoteChanging(false);
      }, 500);
    }, 5000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const handleBeginReading = async () => {
    setIsNavigating(true);
    await new Promise((resolve) => setTimeout(resolve, 800));
    router.push("/chapters/1");
  };

  return (
    <main className="flex min-h-screen bg-white">
      {/* Left side - Hospital Image */}
      <div className="relative hidden md:block w-[40%] bg-gray-50">
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1584968153986-3f5fe523b044?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJsdWUlMjBwYWludHxlbnwwfHwwfHx8MA%3D%3D')",
              filter: "brightness(100.9) hue-rotate(20deg)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent opacity-70" />
          {/* Right edge fade gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white opacity-70" />
          {/* Blur effect on the right edge */}
          <div className="absolute top-0 bottom-0 right-0 w-[11%]" 
               style={{
                 backdropFilter: "blur(2px)",
                 WebkitBackdropFilter: "blur(1px)",
                 background: "linear-gradient(to right, rgba(255,255,255,0), rgba(255,255,255,0.8))"
               }}
          />
         
          
        </div>
      </div>

      {/* Right side - Content */}
      <div className="relative w-full md:w-[60%] flex flex-col items-center justify-center p-8"
      style={{ background: "linear-gradient(to bottom, #F0F8FF, #FFFFFF)" }} 
      >
        {/* Subtle cloud-like texture */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            className="absolute inset-0 opacity-30"
            animate={{
              x: [0, -20, 0],
              y: [0, 10, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(1,1,1,1.05) 0.5px, transparent 0.9px)",
              backgroundSize: "50px 50px",
            }}
          />
          {/* Atmospheric shimmer */}
          <motion.div
            className="absolute inset-0 opacity-10"
            animate={{
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{
              backgroundImage:
                "linear-gradient(45deg, rgba(0,0,0,0.05), transparent)",
            }}
          />
        </div>

        {/* Main Content */}
        <div className="max-w-3xl w-full space-y-16 text-center relative z-10">
          {/* Title Section */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 20 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif tracking-tight text-gray-900">
              Blue Sky
            </h1>
            <div className="h-px w-24 mx-auto bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
          </motion.div>

          {/* Quotes Section */}
          <div className="h-32 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentQuote}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isQuoteChanging ? 0.5 : 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-center space-y-3"
              >
                <p className="text-xl md:text-2xl text-gray-900 italic">
                  &quot;{quotes[currentQuote].text}&quot;
                </p>
                <p className="text-sm text-gray-400 font-serif">
                  — {quotes[currentQuote].author}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Interactive Elements */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: loaded ? 1 : 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <Button
              variant="outline"
              size="lg"
              className="relative overflow-hidden group border-blue-400 hover:border-blue-600 transition-all duration-300"
              onClick={handleBeginReading}
              disabled={isNavigating}
            >
              {isNavigating ? (
                <span className="flex items-center gap-2">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Opening Chapter 1
                </span>
              ) : (
                <>
                  <span className="relative z-10 text-lg">Begin Reading</span>
      {/* Base gradient - subtle blue-to-orange fade on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-orange-100 opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
      {/* Shine effect - orange sweep on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-200 to-transparent opacity-0 group-hover:opacity-40 animate-shine" />
    </>
              )}
            </Button>

            {/* Chapter Preview */}
            <div className="text-sm text-gray-500 space-y-2">
              <p className="font-serif">Chapter One: Chaos</p>
              <motion.div
                className="h-px w-16 mx-auto bg-blue-200"
                animate={{
                  width: ["0%", "100%", "0%"],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>
        </div>

        {/* Footer Quote */}
        <motion.div
          className="absolute bottom-8 left-0 right-0 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: loaded ? 0.5 : 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <p className="text-sm text-gray-400 font-serif italic">
            &quot;In the space between heartbeats, stories unfold&quot;
          </p>
        </motion.div>
      </div>

      {/* Page transition overlay */}
      <motion.div
        className="fixed inset-0 bg-white pointer-events-none z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: isNavigating ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      />
    </main>
  );
}