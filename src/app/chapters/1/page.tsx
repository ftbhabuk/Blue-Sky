"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Caveat } from "next/font/google";
import { Crimson_Pro } from "next/font/google";
import { CloudBackground } from "@/app/components/cloud-background";
import { ChapterNavigation } from "@/app/components/chapter-navigation";

// Fonts
const caveat = Caveat({ subsets: ["latin"] });
const crimson = Crimson_Pro({ subsets: ["latin"], weight: ["400", "700"] });

export default function ChapterOne() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start", "end"],
  });

  // Subtle background color transition based on scroll (keeping the original
  // light theme)
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6, 1],
    ["#ffffff", "#f8f8f8", "#f5f5f5", "#ffffff"]
  );

  return (
    <motion.div
      ref={containerRef}
      className="min-h-screen relative"
      style={{ backgroundColor }}
    >
      <CloudBackground />

      <div className="max-w-3xl mx-auto px-6 py-20 relative">
        {/* Chapter Title with enhanced but subtle background */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-16 space-y-2 relative"
        >
          {/* Subtle gradient background for title */}
          <motion.div
            className="absolute -inset-6 rounded-lg opacity-10 \
bg-gradient-to-r from-blue-100 via-purple-100 to-blue-100"
            animate={{
              opacity: [0.05, 0.1, 0.05],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />

          <h1
            className={`text-5xl md:text-6xl tracking-tight text-gray-800 \
relative ${crimson.className}`}
          >
            Chapter One
          </h1>
          <h2
            className={`text-3xl md:text-4xl text-gray-600 relative \
${crimson.className}`}
          >
            Chaos
          </h2>
        </motion.div>

        {/* Opening Section */}
        <Section delay={0.2}>
          <p
            className={`text-lg leading-relaxed text-gray-800 \
${crimson.className}`}
          >
            The world before me, sober and still, offers me no place to go. I
            don't fool myself-- I'm a heartache from the moment I'm born. My
            heart, frozen, as I find the will to forget. Somewhere out there,
            I exist. Somewhere. I'm uncertain, like a rose pale and dying,
            dropping its petals. This world before me…. Is unsure. I'm living
            too much inside of myself again.
          </p>
          <EnhancedMarginNote side="right">
            Living too much inside myself again
          </EnhancedMarginNote>
          <EnhancedBlockQuote>
            I wonder: if I dismantle my horizon, will my walls crumble? If I
            bend these fences and scrape off layers of my cocoon….
          </EnhancedBlockQuote>
        </Section>

        {/* Hospital Scene */}
        <Section delay={0.4}>
          <p
            className={`text-lg leading-relaxed text-gray-800 \
${crimson.className}`}
          >
            A haunting voice echoes around my ears as I impulsively open my
            eyes. Murmuring voices blend into the background noise. "He'll be
            alright." The room swims into focus, revealing some familiar faces,
            their expressions soaked in sorrow. I have no Idea what's going on.
            Where I am? Who are they? I feet incompetent. Lost. All at once.
            My mind feels foggy, detached. It's all a blur. I remember feeling
            overwhelmed, and everything just spiralled out of control.
          </p>
          <EnhancedMarginNote side="left">
            Everything spiralled out of control
          </EnhancedMarginNote>
        </Section>

        {/* Clinical Environment */}
        <Section delay={0.6}>
          <p
            className={`text-lg leading-relaxed text-gray-800 \
${crimson.className}`}
          >
            Gradually, I realise I'm in a clinical ward. my body aches and
            stings, as I'm drenched in medical solution. I can hardly feel my
            limbs… The smell of hospital floors—bleach and antiseptic—irritates
            me. I glanced at myself: bandages wrap all around my body, laid
            lifelessly on the bed, I tried to move but can't. Maybe I'm too
            feeble. I have never been physically strong. Throughout my
            childhood, I rarely went outside. Even in schools, I used to slip
            in and out of PE classes.
          </p>
          <EnhancedMarginNote side="right">
            Never been physically strong
          </EnhancedMarginNote>
        </Section>

        {/* Nurse Interaction */}
        <Section delay={0.8}>
          <p
            className={`text-lg leading-relaxed text-gray-800 \
${crimson.className}`}
          >
            The door creaks open, and a nurse walks in, moving slowly, as if
            she's in no hurry. "What's the problem with these people?" I mutter
            to myself. "How are you feeling now?" she asks, her tone familiar
            as if she knows me. I have no idea how long I've been here. Maybe
            she knows, but she keeps inspecting my bandages making me
            uncomfortable. "A little bit better, I guess," I reply. She
            remains neutral and just walks away. "Well, that's awkward," I said
            to myself.
          </p>
          <EnhancedMarginNote side="left">
            How long have I been here?
          </EnhancedMarginNote>
        </Section>

        {/* Family Scene */}
        <Section delay={1.0}>
          <h3 className={`text-2xl text-gray-700 mb-6 ${crimson.className}`}>
            Am I wishing for less time...
          </h3>
          <p
            className={`text-lg leading-relaxed text-gray-800 \
${crimson.className}`}
          >
            As the door swings open, and suddenly, a flood of people rushes in.
            "Are you alright, my dear? Are you okay? Why would you do such
            things to us? Have you lost your mind? Why won't you ever think of
            us?" I question myself--Am I wishing for less time… I freeze,
            overwhelmed. They're my parents, but I don't utter a single word.
            They stare at me as if this is a scene from a movie. I turn my head
            awkwardly to the white pillowcase and rest my head on it. "He was
            never like this. What is wrong with him?" I hear them complain.
          </p>
          <EnhancedMarginNote side="right">
            A scene from a movie
          </EnhancedMarginNote>
        </Section>

        {/* Final Thoughts */}
        <Section delay={1.2}>
          <p
            className={`text-lg leading-relaxed text-gray-800 \
${crimson.className}`}
          >
            I'm so congested, my mind drifts away. I can barely move. I hate
            myself…Have I decided not to expect too much at the end of the
            world? Time afire against my will....my lungs get drunken on
            flood...my feet petrified...
          </p>
          <EnhancedBlockQuote>
            Can I wait until my heart doesn't swells anymore; in random
            places...Will I collapse inside as my world is...
          </EnhancedBlockQuote>
          <p
            className={`text-lg leading-relaxed text-gray-800 \
${crimson.className}`}
          >
            Can I stay--still and watch again how the rain drips at the ending
            tip of the roof and awaits its blue sky?
          </p>
          <EnhancedMarginNote side="left">
            Awaiting its blue sky
          </EnhancedMarginNote>
        </Section>
      </div>

      <ChapterNavigation currentChapter={1} />
    </motion.div>
  );
}

// Section component with simple animation
function Section({
  children,
  delay,
}: {
  children: React.ReactNode;
  delay: number;
}) {
  return (
    <motion.div
      className="mb-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay }}
    >
      {children}
    </motion.div>
  );
}

// Enhanced margin note with subtle hover effect
function EnhancedMarginNote({
  children,
  side,
}: {
  children: React.ReactNode;
  side: "left" | "right";
}) {
  const leftOffset = side === "left" ? "auto" : "auto"; // Add a small offset for left
  // side

  return (
    <motion.div
      className={`absolute ${side}-0 w-48 ${caveat.className} text-lg \
text-gray-500 opacity-75 hidden md:block`}
      style={{
        transform: "none", // Override any transform
        right: side === "right" ? "0" : "auto", // Ensure correct positioning
        left: side === "left" ? leftOffset : "auto", // Apply offset here
      }}
      whileHover={{
        scale: 1.05,
        color: "#6d28d9", // Subtle purple color on hover
        opacity: 1,
      }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
}

// Enhanced blockquote with subtle hover effect
function EnhancedBlockQuote({ children }: { children: React.ReactNode }) {
  return (
    <motion.blockquote
      className="text-xl italic text-gray-600 my-8 pl-6 border-l-2 \
border-gray-300"
      whileHover={{
        x: 4,
        borderLeftColor: "#6d28d9", // Subtle purple on hover
        color: "#4c1d95", // Darker purple for text
      }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.blockquote>
  );
}
