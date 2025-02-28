// "use client"

// import type React from "react"

// import { useState, useEffect, useRef } from "react"
// import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
// import { Bookmark, ChevronLeft, ChevronRight, Menu } from "lucide-react"
// import { cn } from "@/lib/utils"
// import { Button } from "@/components/ui/button"
// import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

// // Page Number Component
// export function PageNumber({ number }: { number: number }) {
//   return (
//     <div className="fixed bottom-8 right-8 font-serif text-gray-400 text-sm">
//       <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
//         {number}
//       </motion.div>
//     </div>
//   )
// }

// // Reading Progress Bar
// export function ReadingProgress() {
//   const [progress, setProgress] = useState(0)

//   useEffect(() => {
//     const updateProgress = () => {
//       const scrolled = window.scrollY
//       const total = document.documentElement.scrollHeight - window.innerHeight
//       setProgress((scrolled / total) * 100)
//     }

//     window.addEventListener("scroll", updateProgress)
//     return () => window.removeEventListener("scroll", updateProgress)
//   }, [])

//   return (
//     <div className="fixed top-0 left-0 w-full h-1 bg-gray-100 z-50">
//       <motion.div
//         className="h-full bg-gradient-to-r from-gray-400 to-gray-600"
//         style={{ width: `${progress}%` }}
//         transition={{ duration: 0.1 }}
//       />
//     </div>
//   )
// }

// // Chapter Navigation with Bookmarks
// interface Chapter {
//   id: number
//   title: string
//   route: string
//   isBookmarked?: boolean
// }

// export function NovelNavigation({
//   chapters,
//   currentChapter,
//   onToggleBookmark,
// }: {
//   chapters: Chapter[]
//   currentChapter: number
//   onToggleBookmark: (chapterId: number) => void
// }) {
//   const [isOpen, setIsOpen] = useState(false)
//   const prevChapter = chapters.find((ch) => ch.id === currentChapter - 1)
//   const nextChapter = chapters.find((ch) => ch.id === currentChapter + 1)

//   return (
//     <>
//       {/* Fixed Navigation */}
//       <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-4 z-40">
//         {prevChapter && (
//           <Button
//             variant="ghost"
//             size="icon"
//             className="rounded-full bg-white/80 backdrop-blur-sm hover:bg-white/90 transition-all duration-200"
//             onClick={() => (window.location.href = prevChapter.route)}
//           >
//             <ChevronLeft className="h-4 w-4" />
//           </Button>
//         )}

//         <Sheet open={isOpen} onOpenChange={setIsOpen}>
//           <SheetTrigger asChild>
//             <Button variant="ghost" size="icon" className="rounded-full bg-white/80 backdrop-blur-sm hover:bg-white/90">
//               <Menu className="h-4 w-4" />
//             </Button>
//           </SheetTrigger>
//           <SheetContent className="w-[400px] bg-white/95 backdrop-blur-md">
//             <SheetHeader>
//               <SheetTitle className="text-2xl font-serif">Chapters</SheetTitle>
//             </SheetHeader>
//             <div className="mt-8 space-y-1">
//               {chapters.map((chapter) => (
//                 <motion.div
//                   key={chapter.id}
//                   className={cn(
//                     "group relative p-4 rounded-lg transition-colors",
//                     chapter.id === currentChapter ? "bg-gray-100 text-gray-900" : "hover:bg-gray-50 text-gray-600",
//                   )}
//                   whileHover={{ x: 4 }}
//                 >
//                   <a href={chapter.route} className="block" onClick={() => setIsOpen(false)}>
//                     <div className="text-sm font-medium opacity-60">Chapter {chapter.id}</div>
//                     <div className="text-lg font-serif">{chapter.title}</div>
//                   </a>
//                   <button
//                     onClick={() => onToggleBookmark(chapter.id)}
//                     className={cn(
//                       "absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity",
//                       chapter.isBookmarked && "opacity-100 text-yellow-500",
//                     )}
//                   >
//                     <Bookmark className="h-4 w-4" />
//                   </button>
//                 </motion.div>
//               ))}
//             </div>
//           </SheetContent>
//         </Sheet>

//         {nextChapter && (
//           <Button
//             variant="ghost"
//             size="icon"
//             className="rounded-full bg-white/80 backdrop-blur-sm hover:bg-white/90 transition-all duration-200"
//             onClick={() => (window.location.href = nextChapter.route)}
//           >
//             <ChevronRight className="h-4 w-4" />
//           </Button>
//         )}
//       </div>
//     </>
//   )
// }

// // Enhanced Footnote
// interface FootnoteProps {
//   children: React.ReactNode
//   note: string
// }

// export function EnhancedFootnote({ children, note }: FootnoteProps) {
//   const [isOpen, setIsOpen] = useState(false)
//   const noteRef = useRef<HTMLDivElement>(null)

//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (noteRef.current && !noteRef.current.contains(event.target as Node)) {
//         setIsOpen(false)
//       }
//     }

//     document.addEventListener("mousedown", handleClickOutside)
//     return () => document.removeEventListener("mousedown", handleClickOutside)
//   }, [])

//   return (
//     <span className="relative inline-block group">
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="text-gray-500 border-b border-dashed border-gray-300 hover:text-gray-700 hover:border-gray-500 transition-colors"
//       >
//         {children}
//       </button>
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             ref={noteRef}
//             className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-50"
//             initial={{ opacity: 0, y: 10, scale: 0.95 }}
//             animate={{ opacity: 1, y: 0, scale: 1 }}
//             exit={{ opacity: 0, y: 10, scale: 0.95 }}
//             transition={{ duration: 0.2 }}
//           >
//             <div className="w-64 bg-white/95 backdrop-blur-sm p-4 rounded-lg shadow-xl border border-gray-100">
//               <p className="text-sm text-gray-600 font-serif italic">{note}</p>
//               <div className="absolute w-3 h-3 bg-white transform rotate-45 left-1/2 -translate-x-1/2 -bottom-1.5 border-r border-b border-gray-100" />
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </span>
//   )
// }

// // Page Transition Effect
// export function PageTransition({ children }: { children: React.ReactNode }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: -20 }}
//       transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
//     >
//       {children}
//     </motion.div>
//   )
// }

// // Chapter Title Display
// export function ChapterTitle({ number, title }: { number: number; title: string }) {
//   const { scrollYProgress } = useScroll()
//   const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0])
//   const y = useTransform(scrollYProgress, [0, 0.1], [0, -50])

//   return (
//     <motion.div className="fixed top-8 left-8 z-40" style={{ opacity, y }}>
//       <div className="font-serif">
//         <div className="text-sm text-gray-400">Chapter {number}</div>
//         <div className="text-xl text-gray-600">{title}</div>
//       </div>
//     </motion.div>
//   )
// }

// // Atmospheric Background Effect
// export function AtmosphericEffect() {
//   return (
//     <div className="fixed inset-0 pointer-events-none">
//       <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-transparent" />
//       <motion.div
//         className="absolute inset-0 opacity-[0.02]"
//         animate={{
//           backgroundPosition: ["0% 0%", "100% 100%"],
//         }}
//         transition={{
//           duration: 20,
//           repeat: Number.POSITIVE_INFINITY,
//           repeatType: "reverse",
//         }}
//         style={{
//           backgroundImage: `
//             radial-gradient(circle at 25% 25%, rgba(0,0,0,0.1) 0%, transparent 50%),
//             radial-gradient(circle at 75% 75%, rgba(0,0,0,0.1) 0%, transparent 50%)
//           `,
//           backgroundSize: "100% 100%",
//         }}
//       />
//     </div>
//   )
// }

// // Reading Time Indicator
// export function ReadingTime({ minutes }: { minutes: number }) {
//   return (
//     <div className="fixed top-8 right-8 text-sm text-gray-400 font-serif">
//       <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
//         {minutes} min read
//       </motion.div>
//     </div>
//   )
// }

