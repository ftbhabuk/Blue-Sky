"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Menu } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const chapters = [
  { id: 1, title: "Chaos", route: "/chapters/1" },
  { id: 2, title: "Liar", route: "/chapters/2" },
  { id: 3, title: "Heaven Wait", route: "/chapters/3" },
  { id: 4, title: "A Gentle Wind", route: "/chapters/4" },
  { id: 5, title: "Unravelled Nights", route : "/chapters/5"},
  { id: 6, title: "The Weight of Silence", route : "/chapters/6"},
  { id: 7, title: "The Place Dreams Dare Not Speak", route : "/chapters/7"},
  
];

export function ChapterNavigation({
  currentChapter,
  // isAmbiencePlaying, // Removed as it's not directly used here
  setIsAmbiencePlaying,
  ambienceVolume,
  setAmbienceVolume,
}: {
  currentChapter: number;
  isAmbiencePlaying: boolean; // Still in type definition as it's part of the API, even if not used in this component's logic
  setIsAmbiencePlaying: (v: boolean) => void;
  ambienceVolume: number;
  setAmbienceVolume: (v: number) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const prevChapter = chapters.find((ch) => ch.id === currentChapter - 1);
  const nextChapter = chapters.find((ch) => ch.id === currentChapter + 1);

  return (
    <>
      {/* Fixed Navigation */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-4 z-40">
        {/* Always show ChevronLeft on Chapter 1 to go to homepage, otherwise prevChapter */}
        {currentChapter === 1 ? (
          <Link href="/">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-gray-300 bg-white hover:bg-gray-50"
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
                className="rounded-full border-gray-300 bg-white hover:bg-gray-50"
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
              className="rounded-full border-gray-300 bg-white"
            >
              <Menu className="h-4 w-4 text-gray-600" />
            </Button>
          </SheetTrigger>
          <SheetContent className="bg-white">
            <SheetHeader>
              <SheetTitle className="text-gray-800">Chapters</SheetTitle>
            </SheetHeader>
            <div className="mt-8 space-y-4">
              {chapters.map((chapter) => (
                <Link
                  key={chapter.id}
                  href={chapter.route}
                  onClick={() => setIsOpen(false)}
                >
                  <motion.div
                    className={`p-4 rounded-lg transition-colors ${
                      chapter.id === currentChapter
                        ? "bg-gray-100 text-gray-800"
                        : "hover:bg-gray-50 text-gray-600"
                    }`}
                    whileHover={{ x: 4 }}
                  >
                    <div className="text-sm font-medium">
                      Chapter {chapter.id}
                    </div>
                    <div className="text-lg">{chapter.title}</div>
                  </motion.div>
                </Link>
              ))}
            </div>
            {/* Ambient Music Controls */}
            <div className="mt-8 border-t pt-6">
              <div className="flex items-center justify-between mb-2">
                <span
                  className="text-gray-700 font-medium"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Ambient Music
                </span>
                <span
                  className="text-xs text-gray-500 font-serif"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {Math.round(ambienceVolume * 100)}%
                </span>
              </div>
              <div className="relative flex items-center gap-3 p-3 rounded-full bg-white border border-gray-200 shadow-sm">
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  value={ambienceVolume}
                  onChange={(e) => {
                    const v = parseFloat(e.target.value);
                    setAmbienceVolume(v);
                    setIsAmbiencePlaying(v > 0);
                  }}
                  className="w-full h-3 bg-transparent focus:outline-none slider-music-pill"
                  aria-label="Ambient music volume"
                />
                <style jsx>{`
                  .slider-music-pill {
                    --track-height: 18px;
                    --thumb-size: 28px;
                  }
                  .slider-music-pill::-webkit-slider-runnable-track {
                    height: var(--track-height);
                    border-radius: 999px;
                    background: linear-gradient(
                      90deg,
                      #e5e7eb 0%,
                      #f3f4f6 100%
                    );
                    box-shadow: 0 1px 4px 0 #e5e7eb55;
                  }
                  .slider-music-pill::-webkit-slider-thumb {
                    -webkit-appearance: none;
                    appearance: none;
                    width: var(--thumb-size);
                    height: var(--thumb-size);
                    border-radius: 50%;
                    background: #fff;
                    border: 2px solid #d1d5db;
                    box-shadow: 0 2px 8px 0 #e5e7eb55;
                    transition: border-color 0.2s, box-shadow 0.2s;
                  }
                  .slider-music-pill:focus::-webkit-slider-thumb {
                    border-color: #a3a3a3;
                    box-shadow: 0 0 0 3px #e5e7eb88;
                  }
                  .slider-music-pill::-webkit-slider-thumb:active {
                    border-color: #6b7280;
                  }
                  .slider-music-pill::-webkit-slider-runnable-track {
                    position: relative;
                  }
                  .slider-music-pill::-moz-range-thumb {
                    width: var(--thumb-size);
                    height: var(--thumb-size);
                    border-radius: 50%;
                    background: #fff;
                    border: 2px solid #d1d5db;
                    box-shadow: 0 2px 8px 0 #e5e7eb55;
                    transition: border-color 0.2s, box-shadow 0.2s;
                  }
                  .slider-music-pill:focus::-moz-range-thumb {
                    border-color: #a3a3a3;
                    box-shadow: 0 0 0 3px #e5e7eb88;
                  }
                  .slider-music-pill::-moz-range-thumb:active {
                    border-color: #6b7280;
                  }
                  .slider-music-pill::-ms-thumb {
                    width: var(--thumb-size);
                    height: var(--thumb-size);
                    border-radius: 50%;
                    background: #fff;
                    border: 2px solid #d1d5db;
                    box-shadow: 0 2px 8px 0 #e5e7eb55;
                    transition: border-color 0.2s, box-shadow 0.2s;
                  }
                  .slider-music-pill:focus::-ms-thumb {
                    border-color: #a3a3a3;
                    box-shadow: 0 0 0 3px #e5e7eb88;
                  }
                  .slider-music-pill::-ms-thumb:active {
                    border-color: #6b7280;
                  }
                  .slider-music-pill::-ms-fill-lower {
                    background: #e5e7eb;
                    border-radius: 999px;
                  }
                  .slider-music-pill::-ms-fill-upper {
                    background: #f3f4f6;
                    border-radius: 999px;
                  }
                  .slider-music-pill:focus {
                    outline: none;
                  }
                  input[type='range'].slider-music-pill {
                    width: 100%;
                  }
                `}</style>
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
              className="rounded-full border-gray-300 bg-white hover:bg-gray-50"
            >
              <ChevronRight className="h-4 w-4 text-gray-600" />
            </Button>
          </Link>
        )}
      </div>
    </>
  );
}