import { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";

function FloatingWords() {
  const words = useMemo(
    () => [
      "chaos",
      "spiral",
      "forgotten",
      "fading",
      "drowning",
      "lost",
      "empty",
    ],
    []
  );

  const [initialPositions, setInitialPositions] = useState([]);
  const movementRange = 0.2; // Adjust this value to control the movement range

  useEffect(() => {
    // Generate initial positions only on the client-side
    if (typeof window !== "undefined") {
      const positions = words.map(() => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
      }));
      setInitialPositions(positions);
    }
  }, [words]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {words.map((word, i) => {
        const initialX = initialPositions[i]?.x || 0;
        const initialY = initialPositions[i]?.y || 0;

        return (
          <motion.div
            key={i}
            className="absolute text-xl text-gray-200"
            style={{ opacity: 0.2 }} // Increased opacity here
            initial={{
              x: initialX,
              y: initialY,
              rotate: Math.random() * 10 - 5,
            }}
            animate={{
              x: [
                initialX +
                  (Math.random() * 2 - 1) * movementRange * window.innerWidth,
                initialX +
                  (Math.random() * 2 - 1) * movementRange * window.innerWidth,
                initialX +
                  (Math.random() * 2 - 1) * movementRange * window.innerWidth,
              ],
              y: [
                initialY +
                  (Math.random() * 2 - 1) * movementRange * window.innerHeight,
                initialY +
                  (Math.random() * 2 - 1) * movementRange * window.innerHeight,
                initialY +
                  (Math.random() * 2 - 1) * movementRange * window.innerHeight,
              ],
            }}
            transition={{
              duration: 30 + Math.random() * 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            {word}
          </motion.div>
        );
      })}
    </div>
  );
}

export default FloatingWords;
