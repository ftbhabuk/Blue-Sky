"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"

const chapters = [
  { id: 1, title: "Chaos", route: "/chapters/1" },
  { id: 2, title: "Whispers", route: "/chapters/2" },
  { id: 3, title: "Echoes", route: "/chapters/3" },
  { id: 4, title: "Drift", route: "/chapters/4" },
  
]

export function ChapterNavigation({ currentChapter }: { currentChapter: number }) {
  const [isHovered, setIsHovered] = useState(false)
  const { scrollY, scrollYProgress } = useScroll()
  const [windowHeight, setWindowHeight] = useState(0)
  const [documentHeight, setDocumentHeight] = useState(0)

  useEffect(() => {
    // Get initial window and document heights
    setWindowHeight(window.innerHeight)
    setDocumentHeight(document.documentElement.scrollHeight)
    
    const handleResize = () => {
      setWindowHeight(window.innerHeight)
      setDocumentHeight(document.documentElement.scrollHeight)
    }
    
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Calculate chapter heights dynamically
  const chapterHeight = documentHeight / chapters.length
  
  // Current chapter progress (0 to 1)
  const currentProgress = useTransform(
    scrollY, 
    [(currentChapter - 1) * chapterHeight, currentChapter * chapterHeight], 
    [0, 1]
  )
  
  // Calculate overall reading progress for thread animation
  const overallProgress = useTransform(
    scrollY,
    [0, documentHeight],
    [0, 1]
  )
  
  // Thread height grows based on overall progress
  const threadHeight = useTransform(
    overallProgress,
    [0, 1],
    ["0%", "100%"]
  )
  
  // Reveal chapters based on progress
  const scrollProgress = useTransform(
    scrollY, 
    [0, documentHeight], 
    [0, chapters.length]
  )

  return (
    <motion.div
      className="fixed top-0 right-0 h-full w-32 flex flex-col items-center justify-center py-16 z-40"
      initial={{ opacity: 0.8 }}
      animate={{ opacity: isHovered ? 1 : 0.8 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Thread Container */}
      <div className="absolute top-0 h-full flex items-center justify-center">
        {/* Full Thread Background (faded) */}
        <motion.div
          className="absolute h-full w-0.5 bg-gradient-to-b from-transparent via-gray-200 to-transparent opacity-10"
        />
        
        {/* Growing Thread Based on Progress - more subtle color */}
        <motion.div 
          className="absolute top-0 w-0.5 bg-gradient-to-b from-transparent via-gray-100 to-gray-200 origin-top"
          style={{ 
            height: threadHeight,
            opacity: useTransform(overallProgress, [0, 1], [0.2, 0.5])
          }}
        >
          {/* Glowing Tip at Thread's End */}
          <motion.div
            className="absolute bottom-0 w-2 h-2 bg-gray-100 rounded-full"
            style={{
              boxShadow: "0 0 8px 2px rgba(255, 255, 255, 0.25)",
              translateX: "-50%"
            }}
            animate={{ 
              scale: [1, 1.5, 1],
              opacity: [0.5, 0.7, 0.5]
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>

      {/* Chapter Links */}
      <div className="relative flex flex-col items-center space-y-16">
        {chapters.map((chapter, index) => {
          const isCurrent = chapter.id === currentChapter
          const isCompleted = chapter.id < currentChapter
          const isNext = chapter.id === currentChapter + 1
          
          // Reveal logic: completed and current chapters visible, next chapter fading in only when progress bar touches it
          const visibilityThreshold = chapter.id - 0.2  // When progress is close to this chapter
          
          // Calculate if progress bar has touched this chapter
          const isReached = useTransform(
            scrollProgress,
            [visibilityThreshold - 0.8, visibilityThreshold], 
            [0, 1]
          )
          
          // Only blur chapters that are not current AND (not next OR not yet reached by progress)
          const shouldBeBlurred = !isCurrent && (!isNext || isReached.get() < 0.9)
          
          // Determine blur state - don't unblur next chapters on hover - only unblur when reached
          const blur = shouldBeBlurred && !isCompleted ? "blur(2px)" : "blur(0px)"
          
          // Hide future chapters until progress bar nearly touches them
          const opacityValue = useTransform(
            scrollProgress,
            [chapter.id - 1.8, chapter.id - 1, chapter.id - 0.2],
            [0, isCompleted || isCurrent ? 1 : 0.6, 1]
          )

          return (
            <motion.div
              key={chapter.id}
              className="relative flex flex-col items-center"
              style={{ 
                opacity: opacityValue,
                filter: blur
              }}
            >
              {/* Completion Indicator for Past Chapters */}
              {isCompleted && (
                <motion.div
                  className="absolute w-3 h-3 -left-6 rounded-full bg-gray-200 opacity-30"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                />
              )}
              
              {/* Floating Particles for Current Chapter */}
              {isCurrent && (
                <>
                  <motion.div
                    className="absolute w-1.5 h-1.5 bg-gray-200 rounded-full opacity-30"
                    initial={{ x: 0, y: 0 }}
                    animate={{ x: [0, 8, -5, 0], y: [0, -5, 8, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <motion.div
                    className="absolute w-1 h-1 bg-gray-300 rounded-full opacity-20"
                    initial={{ x: 0, y: 0 }}
                    animate={{ x: [-5, 3, -8, -5], y: [5, -8, 3, 5] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  />
                </>
              )}

              {/* Pulsing Ring for Next Chapter - only when progress is close */}
              {isNext && (
                <motion.div
                  className="absolute w-6 h-6 border border-gray-300 rounded-full"
                  style={{
                    opacity: useTransform(
                      scrollProgress,
                      [currentChapter + 0.5, currentChapter + 0.9],
                      [0, 0.15]
                    )
                  }}
                  animate={{ 
                    scale: [0, 1.2, 0],
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    repeatDelay: 2
                  }}
                />
              )}

              {/* Chapter Title */}
              <Link href={chapter.route}>
                <motion.div
                  className={`text-xl font-extralight ${
                    isCurrent ? "text-gray-900" : isCompleted ? "text-gray-500" : "text-gray-400"
                  }`}
                  style={{ fontFamily: "Playfair Display, serif" }}
                  whileHover={{ scale: 1.15, color: "#111827" }}
                  transition={{ duration: 0.3 }}
                >
                  {chapter.title}
                </motion.div>
              </Link>

              {/* Progress Indicator for Current Chapter - more subtle color */}
              {isCurrent && (
                <motion.div
                  className="mt-2 w-8 h-0.5 bg-gray-100 origin-left"
                  style={{ 
                    scaleX: currentProgress,
                    opacity: useTransform(currentProgress, [0, 1], [0.2, 0.5])
                  }}
                />
              )}

              {/* Ripple Effect on Current Chapter - more subtle */}
              {isCurrent && (
                <motion.div
                  className="absolute w-8 h-8 border border-gray-200 rounded-full opacity-15"
                  initial={{ scale: 0, opacity: 0.3 }}
                  animate={{ scale: 1.5, opacity: 0 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                />
              )}
            </motion.div>
          )
        })}
      </div>
    </motion.div>
  )
}