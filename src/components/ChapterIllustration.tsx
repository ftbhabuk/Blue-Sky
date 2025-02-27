// components/ChapterIllustration.tsx
"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";

export type IllustrationTheme =
  | "journey"
  | "conflict"
  | "romance"
  | "mystery"
  | "discovery"
  | "loss"
  | "victory";

interface ChapterIllustrationProps {
  theme: IllustrationTheme;
  height?: "sm" | "md" | "lg";
}

// Animation and style mapping for different themes
const themeConfig: Record<
  IllustrationTheme,
  {
    gradientFrom: string;
    gradientTo: string;
    animatedElement: React.ReactNode;
  }
> = {
  journey: {
    gradientFrom: "from-amber-100",
    gradientTo: "to-sky-100",
    animatedElement: (
      <motion.div className="absolute bottom-4 left-0 h-10 w-full" animate={{}}>
        {/* Path/Road Animation */}
        <motion.div
          className="absolute bottom-0 h-3 w-full bg-amber-200 rounded-full"
        />
        {/* Traveler */}
        <motion.div
          className="absolute bottom-4 w-6 h-10"
          animate={{
            x: ["-10%", "110%"],
            y: [0, -5, 0, -3, 0],
          }}
          transition={{
            x: { duration: 20, repeat: Infinity, repeatType: "loop" },
            y: { duration: 2, repeat: Infinity, repeatType: "mirror" },
          }}
        >
          <div className="w-4 h-4 rounded-full bg-indigo-600 mx-auto" />
          <div className="w-6 h-6 bg-indigo-500 rounded-b-full" />
        </motion.div>
      </motion.div>
    ),
  },
  conflict: {
    gradientFrom: "from-red-100",
    gradientTo: "to-orange-100",
    animatedElement: (
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
      >
        {/* Two opposing forces */}
        <div className="relative w-full h-24">
          <motion.div
            className="absolute left-1/4 transform -translate-x-1/2 w-12 h-12 rounded-md bg-red-500"
            animate={{
              x: [0, 30, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
          <motion.div
            className="absolute right-1/4 transform translate-x-1/2 w-12 h-12 rounded-full bg-blue-500"
            animate={{
              x: [0, -30, 0],
              rotate: [0, -5, 5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </div>
      </motion.div>
    ),
  },
  romance: {
    gradientFrom: "from-pink-100",
    gradientTo: "to-purple-100",
    animatedElement: (
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="relative">
          <motion.div
            className="w-12 h-12 rounded-full bg-pink-400 absolute"
            animate={{
              x: [-20, 0],
              y: [0, -10, 0],
            }}
            transition={{
              x: { duration: 3, repeat: Infinity, repeatType: "reverse" },
              y: { duration: 2, repeat: Infinity, repeatType: "reverse" },
            }}
          />
          <motion.div
            className="w-12 h-12 rounded-full bg-purple-400 absolute"
            animate={{
              x: [20, 0],
              y: [0, -10, 0],
            }}
            transition={{
              x: { duration: 3, repeat: Infinity, repeatType: "reverse" },
              y: {
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                delay: 0.5,
              },
            }}
          />
          <motion.div
            className="absolute top-0 left-0 w-full h-full"
            animate={{
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 1.5,
            }}
          >
            <div className="w-16 h-16 bg-pink-200 rounded-full blur-md absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </motion.div>
        </div>
      </motion.div>
    ),
  },
  mystery: {
    gradientFrom: "from-indigo-100",
    gradientTo: "to-purple-100",
    animatedElement: (
      <motion.div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-indigo-900/10 backdrop-blur-sm"
          animate={{
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "mirror",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-purple-300/30 blur-md"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "mirror",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white/50"
          animate={{
            scale: [1, 0.8, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "mirror",
          }}
        />
      </motion.div>
    ),
  },
  discovery: {
    gradientFrom: "from-emerald-100",
    gradientTo: "to-teal-100",
    animatedElement: (
      <motion.div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-20 h-20"
          animate={{
            y: [0, -5, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "mirror",
          }}
        >
          <div className="w-full h-full">
            {/* Sun/Planet */}
            <motion.div
              className="absolute top-0 left-0 w-full h-full rounded-full bg-yellow-300"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 360, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "loop",
              }}
            />
            {/* Rings */}
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full border-2 border-dashed border-emerald-200/50"
              animate={{
                rotate: [0, -360, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
              }}
            />
          </div>
        </motion.div>
        {/* Fog/Mist */}
        <motion.div
          className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-teal-200/50 to-transparent"
          style={{ pointerEvents: "none" }}
        />
      </motion.div>
    ),
  },
  loss: {
    gradientFrom: "from-gray-200",
    gradientTo: "to-gray-400",
    animatedElement: (
      <motion.div className="absolute inset-0 flex items-center justify-center">
        {/* Falling leaf */}
        <motion.div
          className="w-6 h-6 bg-orange-400 rounded-br-full rounded-tl-full absolute"
          style={{ originX: 0, originY: 0 }}
          animate={{
            y: ["-100%", "120%"],
            rotate: [0, 180, 360],
            x: [0, 20, 0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          }}
        />
        {/* Fading circle */}
        <motion.div
          className="w-16 h-16 rounded-full bg-gray-300/50 absolute"
          animate={{
            opacity: [0.8, 0, 0.8],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "loop",
          }}
        />
      </motion.div>
    ),
  },
  victory: {
    gradientFrom: "from-green-200",
    gradientTo: "to-blue-200",
    animatedElement: (
      <motion.div className="absolute inset-0 flex items-center justify-center">
        {/* Rising confetti */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="w-2 h-2 rounded-full absolute"
            style={{
              backgroundColor: `hsl(${i * 36}, 70%, 50%)`,
              top: "100%",
              left: `${i * 10}%`,
            }}
            animate={{
              y: ["100%", "-100%"],
              opacity: [1, 0],
            }}
            transition={{
              duration: 5 + i * 0.5,
              repeat: Infinity,
              repeatType: "loop",
              delay: i * 0.2,
            }}
          />
        ))}
        {/* Pulsing star */}
        <motion.div
          className="w-12 h-12 bg-yellow-400 rounded-full absolute"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.8, 0, 0.8],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "loop",
          }}
        />
      </motion.div>
    ),
  },
};

const ChapterIllustration: React.FC<ChapterIllustrationProps> = ({
  theme,
  height = "md",
}) => {
  const heightClasses = {
    sm: "h-32",
    md: "h-64",
    lg: "h-96",
  };

  return (
    <div
      className={`relative overflow-hidden rounded-md ${heightClasses[height]} bg-gradient-to-br ${themeConfig[theme].gradientFrom} ${themeConfig[theme].gradientTo}`}
    >
      {themeConfig[theme].animatedElement}
    </div>
  );
};

export default ChapterIllustration;
