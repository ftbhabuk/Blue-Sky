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
  // { id: 4, title: "A Gentle Wind", route: "/chapters/4" },
];

export function ChapterNavigation({ currentChapter }: { currentChapter: number }) {
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
            <Button variant="outline" size="icon" className="rounded-full border-gray-300 bg-white">
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
                    <div className="text-sm font-medium">Chapter {chapter.id}</div>
                    <div className="text-lg">{chapter.title}</div>
                  </motion.div>
                </Link>
              ))}
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