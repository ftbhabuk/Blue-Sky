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
  const intervalRef = useRef<NodeJS.Timeout>();

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
              backgroundImage: "url('/placeholder.svg?height=1080&width=720')",
              filter: "brightness(0.9)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent opacity-50" />

          {/* Animated clouds */}
          <div className="absolute top-0 left-0 w-full h-32 opacity-20">
            <div className="cloud-animation" />
          </div>
        </div>
      </div>

      {/* Atmospheric Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white" />
        <motion.div
          className="absolute inset-0"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
          style={{
            backgroundImage:
              "radial-gradient(circle at center, rgba(0,0,0,0.03) 0%, transparent 70%)",
            backgroundSize: "100% 100%",
          }}
        />
      </div>

      {/* Right side - Content */}
      <div className="relative w-full md:w-[60%] flex flex-col items-center justify-center p-8">
        {/* Main Content */}
        <div className="max-w-3xl w-full space-y-16 text-center">
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
            <div className="h-px w-24 mx-auto bg-gradient-to-r from-transparent via-gray-400 to-transparent" />
          </motion.div>

          {/* Quotes Section */}
          <div className="h-32 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentQuote}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-center space-y-3"
              >
                <p className="text-xl md:text-2xl text-gray-600 italic">
                  "{quotes[currentQuote].text}"
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
              className="relative overflow-hidden group border-gray-300"
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
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-200 to-transparent opacity-0 group-hover:opacity-20 animate-shine" />
                </>
              )}
            </Button>

            {/* Chapter Preview */}
            <div className="text-sm text-gray-500 space-y-2">
              <p className="font-serif">Chapter One: Chaos</p>
              <motion.div
                className="h-px w-16 mx-auto bg-gray-200"
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
            "In the space between heartbeats, stories unfold"
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
