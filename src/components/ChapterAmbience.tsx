"use client";

import { useEffect, useRef } from "react";

interface ChapterAmbienceProps {
  soundUrl: string;
  repeat: boolean;
  isPlaying: boolean;
  volume: number;
  onTimeUpdate?: (currentTime: number, duration: number) => void;
  audioRef?: React.MutableRefObject<HTMLAudioElement | null>;
}

export function ChapterAmbience({
  soundUrl,
  repeat,
  isPlaying,
  volume,
  onTimeUpdate,
  audioRef: externalAudioRef,
}: ChapterAmbienceProps) {
  const internalAudioRef = useRef<HTMLAudioElement | null>(null);
  const onTimeUpdateRef = useRef(onTimeUpdate);
  onTimeUpdateRef.current = onTimeUpdate;

  const setAudioRef = (audio: HTMLAudioElement | null) => {
    internalAudioRef.current = audio;
    if (externalAudioRef) {
      externalAudioRef.current = audio;
    }
  };

  useEffect(() => {
    if (internalAudioRef.current) {
      internalAudioRef.current.pause();
      setAudioRef(null);
    }

    if (soundUrl && isPlaying) {
      const audio = new Audio(soundUrl);
      audio.loop = repeat;
      audio.volume = volume;
      audio.addEventListener("timeupdate", () => {
        if (onTimeUpdateRef.current && audio) {
          onTimeUpdateRef.current(audio.currentTime, audio.duration);
        }
      });
      audio.play().catch((e) => console.log("Audio play failed:", e));
      setAudioRef(audio);
    }

    return () => {
      if (internalAudioRef.current) {
        internalAudioRef.current.pause();
        setAudioRef(null);
      }
    };
  }, [soundUrl, repeat, isPlaying, volume]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (internalAudioRef.current) {
      internalAudioRef.current.volume = volume;
    }
  }, [volume]);

  return null;
}