"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface ChapterAmbienceProps {
  soundUrl: string;
  repeat: boolean;
}

export function ChapterAmbience({ soundUrl, repeat }: ChapterAmbienceProps) {
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.01); // Start low for fade-in
  const [showVolume, setShowVolume] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const targetVolume = 0.02; // Constant volume after fade-in

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }

    if (soundUrl) {
      audioRef.current = new Audio(soundUrl);
      audioRef.current.loop = repeat;
      audioRef.current.volume = isMuted ? 0 : volume;
      audioRef.current.play().catch((e) => console.log("Audio play failed:", e));

      // Fade in volume
      if (!isMuted) {
        const fadeDuration = 3000; // 3 seconds
        const steps = 20; // Number of increments
        const increment = (targetVolume - volume) / steps;
        let currentStep = 0;

        const fadeInterval = setInterval(() => {
          currentStep++;
          const newVolume = Math.min(volume + increment * currentStep, targetVolume);
          setVolume(newVolume);
          if (audioRef.current) audioRef.current.volume = newVolume;
          if (currentStep >= steps) clearInterval(fadeInterval);
        }, fadeDuration / steps);
      }
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [soundUrl, repeat]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [isMuted, volume]);

  const toggleMute = () => {
    setIsMuted(!isMuted);
    setShowVolume(!isMuted); // Show volume slider when unmuting
  };

  return (
    <motion.div
      className="fixed bottom-5 right-5 z-40 flex items-center"
      initial={{ opacity: 0.3 }}
      whileHover={{ opacity: 1 }}
      onMouseEnter={() => setShowVolume(!isMuted)}
      onMouseLeave={() => setShowVolume(false)}
    >
      <span
        className="text-2xl cursor-pointer"
        onClick={toggleMute}
      >
        {isMuted ? "🔇" : "🎵"}
      </span>

      {showVolume && !isMuted && (
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: "auto", opacity: 1 }}
          exit={{ width: 0, opacity: 0 }}
          className="ml-2 overflow-hidden"
        >
          <input
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={volume}
            onChange={(e) => setVolume(parseFloat(e.target.value))}
            className="w-24 accent-purple-500"
          />
        </motion.div>
      )}
    </motion.div>
  );
}