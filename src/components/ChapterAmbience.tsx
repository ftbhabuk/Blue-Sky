"use client";

import { useEffect, useRef } from "react";

interface ChapterAmbienceProps {
  soundUrl: string;
  repeat: boolean;
  isPlaying: boolean;
  volume: number;
}

export function ChapterAmbience({
  soundUrl,
  repeat,
  isPlaying,
  volume, // Added volume to the dependency array of the first useEffect
}: ChapterAmbienceProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }

    if (soundUrl && isPlaying) {
      audioRef.current = new Audio(soundUrl);
      audioRef.current.loop = repeat;
      audioRef.current.volume = volume; // Accessing volume here
      audioRef.current.play().catch((e) => console.log("Audio play failed:", e));
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [soundUrl, repeat, isPlaying, volume]); // 'volume' added here

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  return null;
}