"use client"

import { motion } from "framer-motion"

export function CloudBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Multiple animated cloud layers with different speeds and patterns */}
      <motion.div
        className="absolute inset-0 opacity-[0.07]"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 25,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        style={{
          backgroundImage: `
            radial-gradient(circle at 15% 25%, rgba(237, 10, 10, 0.2) 0%, transparent 40%),
            radial-gradient(circle at 85% 30%, rgba(0, 50, 255, 0.15) 0%, transparent 45%),
            radial-gradient(circle at 50% 80%, rgba(255, 180, 0, 0.1) 0%, transparent 50%)
          `,
          backgroundSize: "120% 120%",
        }}
      />
      
      {/* Slower moving subtle cloud layer */}
      <motion.div
        className="absolute inset-0 opacity-[0.05]"
        animate={{
          backgroundPosition: ["0% 0%", "100% 0%"],
        }}
        transition={{
          duration: 40,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
        style={{
          backgroundImage: `
            radial-gradient(ellipse at 70% 40%, rgba(159, 0, 255, 0.12) 0%, transparent 60%),
            radial-gradient(circle at 30% 60%, rgba(0, 200, 255, 0.08) 0%, transparent 55%)
          `,
          backgroundSize: "150% 150%",
        }}
      />
      
      {/* Faster moving highlights */}
      <motion.div
        className="absolute inset-0 opacity-[0.04]"
        animate={{
          backgroundPosition: ["0% 100%", "100% 0%"],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 85%, rgba(255, 255, 255, 0.2) 0%, transparent 30%),
            radial-gradient(circle at 80% 15%, rgba(255, 255, 255, 0.15) 0%, transparent 25%)
          `,
          backgroundSize: "120% 120%",
        }}
      />
    </div>
  )
}