"use client";

import ChapterLayout, {
  Section,
  EnhancedMarginNote,
  EnhancedBlockQuote,
  SectionDivider,
  InteractiveFootnote,
} from "@/components/ChapterLayout";
import { HospitalBackground } from "@/app/components/hospital-background";
import { motion } from "framer-motion";
import { NovelImage, NovelGallery, MemoryWall } from "@/components/novel-images";
import ImageComparison from "@/components/ImageComparision";

export default function ChapterTwo() {
  const hospitalMemories = [
    {
      src: "/images/s3.png",
      alt: "Hospital Window View",
      title: "First Light",
      height: 200,
      style: "polaroid",
      effect: "fade",
      annotations: [
        { x: 30, y: 40, text: "Where birds gather each morning" },
        { x: 70, y: 60, text: "The city waking up" },
      ],
    },
    {
      src: "/images/s3.png",
      alt: "Medical Equipment",
      title: "Life Support",
      height: 200,
      style: "noir",
      effect: "zoom",
      annotations: [{ x: 30, y: 40, text: "The hum of survival" }],
    },
    {
      src: "/images/s3.png",
      alt: "Hospital Clock",
      title: "3:47 AM",
      height: 200,
      style: "vintage",
      effect: "elastic",
      annotations: [{ x: 30, y: 40, text: "Time drags on" }],
    },
  ];

  return (
    <ChapterLayout
      chapterNumber={2}
      chapterTitle="Liar"
      backgroundElements={<HospitalBackground />}
      previousChapter={1}
      soundMode="single"
      repeat={true}
      sounds={["/sounds/2.mp3", "/sounds/1.wav"]}
    >
      {/* Wake-Up Scene */}
      <Section delay={0.2}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
          <p className="text-lg leading-relaxed text-gray-800">
            The room wakes up, slowly—the hum of machinery and soft footsteps blending into a symphony of monotony. I lie here, a dull ache in my body, each breath a reminder of my fragility. Yesterday passed in a haze: voices, faces, questions I don’t have answers to, all blurred together.
          </p>
          <NovelImage
            src="/images/s3.png"
            alt="Hospital room at dawn"
            width={1200}
            height={800}
            caption="Morning Haze"
            description="The soft light filters through, carrying the weight of another day"
            style="vintage"
            effect="fade"
          />
          <p className="text-lg leading-relaxed text-gray-800">
            The clock reads 7 AM. I stir, weighed down by another sleepless night. How can one sleep with these{" "}
            <InteractiveFootnote
              note="The constant light disrupts melatonin production, making hospital stays particularly difficult for patients trying to recover."
            >
              relentless fluorescent lights
            </InteractiveFootnote>
            {" "} glaring down, turning night into day?
          </p>
          <EnhancedMarginNote side="right">Relentless fluorescent lights</EnhancedMarginNote>
        </motion.div>
      </Section>

      <SectionDivider className="border-t-2 border-dashed border-gray-300 my-8" />

      {/* Nurse Interaction */}
      <Section delay={0.4}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
          <p className="text-lg leading-relaxed text-gray-800">
            The door creaks open. A different nurse walks in—brisk, purposeful, unfamiliar. I watch her with cautious curiosity as she sets a tray beside me.
          </p>
          <NovelImage
            src="/images/s3.png"
            alt="Hospital tray with food"
            width={1200}
            height={800}
            caption="Breakfast Ritual"
            description="A daily offering of tasteless sustenance"
            style="modern"
            effect="slide"
          />
          <p className="text-lg leading-relaxed text-gray-800">
            "Good morning!" her voice bright but impersonal. "Time for breakfast." It’s the same unappetizing mush. I poke at it with a spoon, the smell turning my stomach.
          </p>
          <p className="text-lg leading-relaxed text-gray-800">
            I have no appetite, but I force a few bites down. The food tastes like cardboard. I quickly give up and push it away.
          </p>
          <EnhancedMarginNote side="left">Unappetizing mush</EnhancedMarginNote>
        </motion.div>
      </Section>

      {/* Inner Reflection & Lisa’s Arrival */}
      <Section delay={0.6}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
          <p className="text-lg leading-relaxed text-gray-800">
            "Why am I feeling surreal, this intrusion of outside world slips into the sterile bubble of my mind, I wonder—my words: balm with restless monotony I'm feeling emptier… Elusive time? Perhaps a distant dream, I'm unanswered!"
          </p>
          <EnhancedBlockQuote>A knock on the door jolts me back to the present.</EnhancedBlockQuote>
          <p className="text-lg leading-relaxed text-gray-800">
            It’s{" "}
            <InteractiveFootnote
              note="Lisa visits every day at the same time, a routine she's maintained since the accident."
            >
              Lisa
            </InteractiveFootnote>
            , her smile a welcome sight.
          </p>
          <MemoryWall memories={hospitalMemories} />
        </motion.div>
      </Section>

      <SectionDivider className="border-t-2 border-dashed border-gray-300 my-8" />

      {/* Lisa’s Visit */}
      <Section delay={0.8}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
          <p className="text-lg leading-relaxed text-gray-800">
            "Hey, how’s it going?" her voice warm and soothing. I manage a small smile. "Could be worse."
          </p>
          <p className="text-lg leading-relaxed text-gray-800">
            She laughs softly, pulling up a chair next to my bed. "That’s the spirit." For a moment, we sit in comfortable silence—her presence calming, a small island of normalcy in this sea of chaos.
          </p>
          <NovelImage
            src="/images/s3.png"
            alt="Lisa sitting by the bedside"
            width={1200}
            height={800}
            caption="An Oasis"
            description="Her presence softens the edges of this sterile hell"
            style="polaroid"
            effect="fade"
          />
          <p className="text-lg leading-relaxed text-gray-800">
            I want to say something, to ask her about her day, her life, but the words won’t come.
          </p>
          <EnhancedMarginNote side="right">A small island of normalcy</EnhancedMarginNote>
        </motion.div>
      </Section>

      {/* Lisa’s Exit & Neighbor’s Gaze */}
      <Section delay={1.0}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
          <p className="text-lg leading-relaxed text-gray-800">
            "Well, who would have thought you’d be good with words," she laughed, the sound light and teasing as she walked away. I watched her go, feeling a strange mix of relief and regret. Maybe I was becoming too formal, too stiff.
          </p>
          <ImageComparison
            beforeImage="/images/s3.png"
            afterImage="/images/s3.png"
            beforeAlt="Moment with Lisa"
            afterAlt="After She’s Gone"
            beforeText="Clarity"
            afterText="Blur"
            width={600}
            height={400}
            beforeStyle="modern"
            afterStyle="noir"
            beforeEffect="fade"
            afterEffect="zoom"
          />
          <p className="text-lg leading-relaxed text-gray-800">
            I sensed eyes on me and turned. The guy in the next bed watched us, legs in casts, propped up awkwardly. He had that look—someone who’d been through hell and was still trying to make sense of it.
          </p>
        </motion.div>
      </Section>

      <SectionDivider className="border-t-2 border-dashed border-gray-300 my-8" />

      {/* Mir Introduction */}
      <Section delay={1.2}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
          <p className="text-lg leading-relaxed text-gray-800">
            "What’s your name?" I asked, more out of politeness than genuine interest. But in this sterile prison, even small talk felt like a lifeline.
          </p>
          <p className="text-lg leading-relaxed text-gray-800">
            He hesitated, then offered a faint smile.{" "}
            <InteractiveFootnote
              note="The name Mir has origins in several cultures, often meaning 'peace' or 'leader' - an interesting contrast to his current broken state."
            >
              "It’s Mir. And you?"
            </InteractiveFootnote>
            "…..," I replied, the name feeling strange on my tongue, like it belonged to someone else.
          </p>
          <p className="text-lg leading-relaxed text-gray-800">
            We lapsed into a comfortable silence, each in our own thoughts.
          </p>
          <NovelGallery
            images={[
              {
                src: "/images/s3.png",
                alt: "Broken legs in casts",
               width: 800,
               height: 600,
                caption: "Mir’s Burden",
                description: "A silent testament to his own struggles",
                style: "modern",
              },
              {
                src: "/images/s3.png",
                alt: "Hospital window at dusk",
                width: 800,
                height: 600,
                caption: "Shared Silence",
                description: "The fading light binds us in quiet understanding",
                style: "polaroid",
              },
            ]}
            layout="masonry"
            spacing="normal"
          />
        </motion.div>
      </Section>

      {/* Final Reflections */}
      <Section delay={1.4}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
          <p className="text-lg leading-relaxed text-gray-800 italic">
            I’m in abyss again… what do I owe myself? I’m trying, trying to get somewhere: to travel even if it’s just in my mind… I’ve lost the touch… I’ve lost the sense of a flower…
          </p>
          <p className="text-lg leading-relaxed text-gray-800 italic">
            I can hardly hear the waves or feel the sand… I’m dreaming, dreaming of a better place… Here we are, I’m sure time will eventually catch us…
          </p>
          <EnhancedBlockQuote>
            and I’ll finally get to thank you, though I’m on a sailboat, slowly floating nowhere, hoping someday I’ll wash up on someone else’s shore.
          </EnhancedBlockQuote>
          <EnhancedMarginNote side="left">Floating nowhere</EnhancedMarginNote>
        </motion.div>
      </Section>
    </ChapterLayout>
  );
}