"use client"

import { motion } from "framer-motion"

export function CloudBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <motion.div
        className="absolute inset-0 opacity-[0.03]"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 30,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
        style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(0,0,0,0.1) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(0,0,0,0.1) 0%, transparent 50%)
          `,
          backgroundSize: "100% 100%",
        }}
      />
    </div>
  )
}

