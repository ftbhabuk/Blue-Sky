"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { 
  ChevronLeft, 
  ChevronRight, 
  Menu, 
  VolumeX, 
  Volume1, 
  Volume2,
  Music
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils"; // if you have this, otherwise use clsx or template literals

const chapters = [
  { id: 1, title: "Chaos", route: "/chapters/1" },
  { id: 2, title: "Liar", route: "/chapters/2" },
  { id: 3, title: "Heaven Wait", route: "/chapters/3" },
  { id: 4, title: "A Gentle Wind", route: "/chapters/4" },
  { id: 5, title: "Unravelled Nights", route: "/chapters/5" },
  { id: 6, title: "The Weight of Silence", route: "/chapters/6" },
  { id: 7, title: "The Place Dreams Dare Not Speak", route: "/chapters/7" },
  { id: 8, title: "No Longer A Human", route: "/chapters/8" },
];

// Volume icon helper
function VolumeIcon({ volume, isPlaying, onClick }: { volume: number; isPlaying: boolean; onClick?: () => void }) {
  const Icon = !isPlaying || volume === 0 ? VolumeX : volume < 0.5 ? Volume1 : Volume2;
  return (
    <button
      type="button"
      onClick={onClick}
      className="p-1 -m-1 rounded-md hover:bg-gray-200/60 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
      aria-label={volume === 0 ? "Unmute" : "Mute"}
    >
      <Icon className={cn(
        "w-4 h-4 transition-colors",
        volume === 0 ? "text-gray-400" : "text-gray-600",
        !isPlaying && "text-gray-400"
      )} />
    </button>
  );
}

function formatTime(seconds: number): string {
  if (!isFinite(seconds) || seconds < 0) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export function ChapterNavigation({
  currentChapter,
  currentSound,
  currentTime,
  duration,
  audioRef,
  isAmbiencePlaying,
  setIsAmbiencePlaying,
  ambienceVolume,
  setAmbienceVolume,
}: {
  currentChapter: number;
  currentSound?: string;
  currentTime?: number;
  duration?: number;
  audioRef?: React.MutableRefObject<HTMLAudioElement | null>;
  isAmbiencePlaying: boolean;
  setIsAmbiencePlaying: (v: boolean) => void;
  ambienceVolume: number;
  setAmbienceVolume: (v: number) => void;
}) {
  const soundName = currentSound?.split("/").pop() || "Ambient Sound";
  const [isOpen, setIsOpen] = useState(false);
  const prevVolumeRef = useRef(0.5);

  const prevChapter = chapters.find((ch) => ch.id === currentChapter - 1);
  const nextChapter = chapters.find((ch) => ch.id === currentChapter + 1);

  const seekBarRef = useRef<HTMLDivElement>(null);

  const handleSeekClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!seekBarRef.current || !audioRef?.current || !duration) return;
    const rect = seekBarRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const fraction = Math.max(0, Math.min(1, x / rect.width));
    audioRef.current.currentTime = fraction * duration;
  };

  const toggleMute = () => {
    if (ambienceVolume === 0) {
      setAmbienceVolume(prevVolumeRef.current);
      if (!isAmbiencePlaying) {
        setIsAmbiencePlaying(true);
      }
    } else {
      prevVolumeRef.current = ambienceVolume;
      setAmbienceVolume(0);
    }
  };

  return (
    <>
      {/* Fixed Navigation */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 z-40">
        {/* Previous/Home */}
        {currentChapter === 1 ? (
          <Link href="/">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-gray-300 bg-white/80 backdrop-blur-sm hover:bg-gray-50 shadow-sm"
            >
              <ChevronLeft className="h-4 w-4 text-gray-600" />
            </Button>
          </Link>
        ) : (
          prevChapter && (
            <Link href={prevChapter.route}>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-gray-300 bg-white/80 backdrop-blur-sm hover:bg-gray-50 shadow-sm"
              >
                <ChevronLeft className="h-4 w-4 text-gray-600" />
              </Button>
            </Link>
          )
        )}

        {/* Chapter Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-gray-300 bg-white/80 backdrop-blur-sm hover:bg-gray-50 shadow-sm"
            >
              <Menu className="h-4 w-4 text-gray-600" />
            </Button>
          </SheetTrigger>
          
          <SheetContent 
            side="right" 
            className="w-full sm:max-w-md bg-white flex flex-col h-full p-0"
          >
            {/* Fixed Header */}
            <SheetHeader className="px-6 pt-6 pb-4 border-b shrink-0">
              <SheetTitle className="text-gray-800 font-serif text-xl">
                Chapters
              </SheetTitle>
            </SheetHeader>

            {/* Scrollable Chapter List */}
            <div className="flex-1 overflow-y-auto px-6 py-4">
              <div className="space-y-3">
                {chapters.map((chapter) => (
                  <Link
                    key={chapter.id}
                    href={chapter.route}
                    onClick={() => setIsOpen(false)}
                  >
                    <motion.div
                      className={cn(
                        "p-4 rounded-xl transition-all duration-200 border",
                        chapter.id === currentChapter
                          ? "bg-gray-900 text-white border-gray-900 shadow-md"
                          : "bg-white border-gray-100 text-gray-700 hover:border-gray-300 hover:bg-gray-50"
                      )}
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-baseline gap-2">
                        <span className="text-xs font-medium opacity-70 uppercase tracking-wider">
                          Ch. {chapter.id}
                        </span>
                        <span className="text-sm font-medium truncate">
                          {chapter.title}
                        </span>
                      </div>
                    </motion.div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Fixed Music Player at Bottom */}
            <div className="shrink-0 border-t border-gray-200 bg-gray-50/50 px-6 py-5">
              <div className="space-y-3">
                {/* Header row: filename + mute toggle */}
                <div className="flex items-center gap-2 min-w-0">
                  <Music className={cn(
                    "w-4 h-4 shrink-0 transition-colors",
                    isAmbiencePlaying ? "text-indigo-600" : "text-gray-400"
                  )} />
                  <span className="text-sm font-medium text-gray-700 font-serif truncate">
                    {soundName}
                  </span>
                  {isAmbiencePlaying && (
                    <span className="flex h-2 w-2 shrink-0 rounded-full bg-indigo-500 animate-pulse" />
                  )}
                  <div className="ml-auto flex items-center gap-1.5 shrink-0">
                    <VolumeIcon
                      volume={ambienceVolume}
                      isPlaying={isAmbiencePlaying}
                      onClick={toggleMute}
                    />
                    {ambienceVolume === 0 ? (
                      <span className="text-xs text-gray-400 font-serif italic">Muted</span>
                    ) : (
                      <span className="text-xs text-gray-500 tabular-nums">
                        {Math.round(ambienceVolume * 100)}%
                      </span>
                    )}
                  </div>
                </div>

                {/* Seek bar (clickable) */}
                {duration != null && duration > 0 && (
                  <div className="space-y-1">
                    <div
                      ref={seekBarRef}
                      onClick={handleSeekClick}
                      className="relative w-full h-2 bg-gray-200 rounded-full cursor-pointer group"
                    >
                      <div
                        className="absolute inset-y-0 left-0 bg-gray-900 rounded-full pointer-events-none"
                        style={{ width: `${((currentTime ?? 0) / duration) * 100}%` }}
                      />
                      <div
                        className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-gray-900 rounded-full shadow pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"
                        style={{ left: `calc(${((currentTime ?? 0) / duration) * 100}% - 6px)` }}
                      />
                    </div>
                    <div className="flex justify-between text-xs text-gray-400 tabular-nums">
                      <span>{formatTime(currentTime ?? 0)}</span>
                      <span>{formatTime(duration)}</span>
                    </div>
                  </div>
                )}

                {/* Status Text */}
                <p className="text-xs text-gray-400 text-center font-serif italic">
                  {ambienceVolume === 0
                    ? "Soundscape muted"
                    : isAmbiencePlaying
                      ? "Soundscape active"
                      : "Soundscape paused"}
                </p>
              </div>
            </div>
          </SheetContent>
        </Sheet>

        {/* Next Chapter */}
        {nextChapter && (
          <Link href={nextChapter.route}>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-gray-300 bg-white/80 backdrop-blur-sm hover:bg-gray-50 shadow-sm"
            >
              <ChevronRight className="h-4 w-4 text-gray-600" />
            </Button>
          </Link>
        )}
      </div>
    </>
  );
}