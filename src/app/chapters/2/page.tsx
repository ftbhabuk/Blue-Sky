"use client";

import ChapterLayout, {
  Section,
  EnhancedMarginNote,
  EnhancedBlockQuote,
  SectionDivider,
  InteractiveFootnote,
} from "@/components/ChapterLayout";
// import { HospitalBackground } from "@/app/components/hospital-background";
import { motion } from "framer-motion";
// import { NovelImage, NovelGallery, MemoryWall } from "@/components/novel-images";
// import ImageComparison from "@/components/ImageComparision";

import { NovelImage } from "@/components/novel-images";

export default function ChapterTwo() {
  // const hospitalMemories = [
  //   {
  //     src: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     alt: "Hospital Window View",
  //     title: "warmth",
  //     height: 200,
  //     style: "polaroid" as const,
  //     effect: "fade" as const,
  //     annotations: [
  //       { x: 30, y: 40, text: "Where birds gather each morning" },
  //       { x: 70, y: 60, text: "The city waking up" },
  //     ],
  //   },
    
  //   {
  //     src: "https://images.unsplash.com/photo-1621862912856-0909fb7f14b7?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     alt: "Medical Equipment",
  //     title: "Remedy",
  //     height: 200,
  //     style: "noir" as const,
  //     effect: "zoom" as const,
  //     annotations: [{ x: 30, y: 40, text: "The hum of survival" }],
  //   },
  //   {
  //     src: "https://images.unsplash.com/photo-1516574290314-5a56c5acdd4e?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGhvc3BpdGFsJTIwcm9vbSUyMHN1bnxlbnwwfHwwfHx8MA%3D%3D",
  //     alt: "Hospital Clock",
  //     title: "Senseless",
  //     height: 200,
  //     style: "vintage" as const,
  //     effect: "elastic" as const,
  //     annotations: [{ x: 30, y: 40, text: "Time drags on" }],
  //   },
  // ];
  return (
    <ChapterLayout
      chapterNumber={2}
      chapterTitle="Liar" // Render the component here!
      // backgroundElements={<HospitalBackground />}
      previousChapter={1}
      soundMode="single"
      repeat={true}
      sounds={["/sounds/2.mp3", "/sounds/1.wav"]}
    >
      {/* Wake-Up Scene */}
      <Section delay={0.2}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
          <p className="text-lg leading-relaxed text-gray-800">
            The room wakes up, slowly—the hum of machinery and soft footsteps blending into a symphony of monotony. I lie here, a dull ache in my body, each breath a reminder of my fragility. Yesterday passed in a haze: voices, faces, questions I don &apos;t have answers to, all blurred together.
          </p>
          {/* <NovelImage
           src="https://images.unsplash.com/photo-1585936033390-69b9e58102fb?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Hospital room at dawn"
            width={1200}
            height={800}
            caption="Morning Haze"
            description="The soft light filters through, carrying the weight of another day"
            style="modern"
            effect="fade"
          /> */}
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

      <SectionDivider />

      {/* Nurse Interaction */}
      <Section delay={0.4}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
          <p className="text-lg leading-relaxed text-gray-800">
            The door creaks open. A different nurse walks in—brisk, purposeful, unfamiliar. I watch her with cautious curiosity as she sets a tray beside me.
          </p>
          {/* <NovelImage
           src="https://plus.unsplash.com/premium_photo-1723618929356-0534888dcb6d?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Hospital tray with food"
            width={1200}
            height={800}
            caption="Breakfast Ritual"
            description="A daily offering of tasteless sustenance"
            style="retro"
            effect="slide"
          /> */}
          <p className="text-lg leading-relaxed text-gray-800">
            &quot;Good morning!&quot; her voice bright but impersonal. &quot;Time for breakfast.&quot; It&apos;s the same unappetizing mush. I poke at it with a spoon, the smell turning my stomach.
          </p>
          <p className="text-lg leading-relaxed text-gray-800">
            I have no appetite, but I force a few bites down. The food tastes like cardboard. I quickly give up and push it away.
          </p>
          <EnhancedMarginNote side="left">Unappetizing mush</EnhancedMarginNote>
        </motion.div>
      </Section>

      {/* Inner Reflection & Lisa's Arrival */}
      <Section delay={0.6}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
          <p className="text-lg leading-relaxed text-gray-800">
            &quot;Why am I feeling surreal, this intrusion of outside world slips into the sterile bubble of my mind, I wonder—my words: balm with restless monotony I&apos;m feeling emptier… Elusive time? Perhaps a distant dream, I&apos;m unanswered!&quot;
          </p>
          <EnhancedBlockQuote>A knock on the door jolts me back to the present.</EnhancedBlockQuote>
          <p className="text-lg leading-relaxed text-gray-800">
            It&apos;s{" "}
            <InteractiveFootnote
              note="Lisa visits every day at the same time, a routine she&apos;s maintained since the accident."
            >
              Lisa
            </InteractiveFootnote>
            , her smile a welcome sight.
          </p>
          {/* <MemoryWall memories={hospitalMemories} /> */}
        </motion.div>
      </Section>

      <SectionDivider />

      {/* Lisa's Visit */}
      <Section delay={0.8}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
          <p className="text-lg leading-relaxed text-gray-800">
            &quot;Hey, how&apos;s it going?&quot; her voice warm and soothing. I manage a small smile. &quot;Could be worse.&quot;
          </p>
          <p className="text-lg leading-relaxed text-gray-800">
            She laughs softly, pulling up a chair next to my bed. &quot;That&apos;s the spirit. &quot. For a moment, we sit in comfortable silence—her presence calming, a small island of normalcy in this sea of chaos.
          </p>
          <NovelImage
            src="https://images.unsplash.com/photo-1592968549899-697ecd43b1bc?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Lisa sitting by the bedside"
            width={1200}
            height={800}
            caption="An Oasis"
            description="Her presence softens the edges of this sterile hell"
            style="retro"
            effect="fade"
          />
          <p className="text-lg leading-relaxed text-gray-800">
            I want to say something, to ask her about her day, her life, but the words won&apos;t come.
          </p>
          <EnhancedMarginNote side="right">A small island of normalcy</EnhancedMarginNote>
        </motion.div>
      </Section>

      {/* Lisa's Exit & Neighbor's Gaze */}
      <Section delay={1.0}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
          <p className="text-lg leading-relaxed text-gray-800">
            &quot;Well, who would have thought you&apos;d be good with words,&quot; she laughed, the sound light and teasing as she walked away. I watched her go, feeling a strange mix of relief and regret. Maybe I was becoming too formal, too stiff.
          </p>
          {/* <ImageComparison
            afterImage="https://images.unsplash.com/photo-1587621012294-2b925a5f260d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"
            beforeImage="https://images.unsplash.com/photo-1589088483612-7160434c9b85?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D"
            beforeAlt="Moment with Lisa"
            afterAlt="After She's Gone"
            beforeText="Clarity"
            afterText="Blur"
            width={600}
            height={400}
            beforeStyle="dreamy"
            afterStyle="retro"
            beforeEffect="fade"
            afterEffect="zoom"
          /> */}
          <p className="text-lg leading-relaxed text-gray-800">
            I sensed eyes on me and turned. The guy in the next bed watched us, legs in casts, propped up awkwardly. He had that look—someone who&apos;d been through hell and was still trying to make sense of it.
          </p>
        </motion.div>
      </Section>

      <SectionDivider />

      {/* Mir Introduction */}
      <Section delay={1.2}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
          <p className="text-lg leading-relaxed text-gray-800">
            &quot;What&apos;s your name?&quot; I asked, more out of politeness than genuine interest. But in this sterile prison, even small talk felt like a lifeline.
          </p>
          <p className="text-lg leading-relaxed text-gray-800">
            He hesitated, then offered a faint smile.{" "}
            <InteractiveFootnote
              note="The name Mir has origins in several cultures, often meaning 'peace' or 'leader' - an interesting contrast to his current broken state."
            >
              &quot;It&apos;s Mir. And you?&quot;
            </InteractiveFootnote>
            &quot;…..,&quot; I replied, the name feeling strange on my tongue, like it belonged to someone else.
          </p>
          <p className="text-lg leading-relaxed text-gray-800">
            We lapsed into a comfortable silence, each in our own thoughts.
          </p>
          {/* <NovelGallery
            images={[
              {
                src: "https://images.unsplash.com/photo-1575191833171-ebb34c7929a6?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                alt: "Broken legs in casts",
                width: 800,
                height: 600,
                caption: "Abstract Burden",
                description: "A silent testament to our own struggles",
                style: "dreamy",
              },
              {
                src: "https://images.unsplash.com/photo-1472448715764-c30bf8bc2cf4?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                alt: "Hospital window at dusk",
                width: 800,
                height: 600,
                caption: "Shared Silence",
                description: "The fading light binds us in quiet understanding",
                style: "modern",
              },
            ]}
            layout="filmStrip"
            spacing="loose"
          /> */}
        </motion.div>
      </Section>

      {/* Final Reflections */}
      <Section delay={1.4}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
          <p className="text-lg leading-relaxed text-gray-800 italic">
            I&apos;m in abyss again… what do I owe myself? I&apos;m trying, trying to get somewhere: to travel even if it&apos;s just in my mind… I&apos;ve lost the touch… I&apos;ve lost the sense of a flower…
          </p>
          <p className="text-lg leading-relaxed text-gray-800 italic">
            I can hardly hear the waves or feel the sand… I&apos;m dreaming, dreaming of a better place… Here we are, I&apos;m sure time will eventually catch us…
          </p>
          <EnhancedBlockQuote>
            and I&apos;ll finally get to thank you, though I&apos;m on a sailboat, slowly floating nowhere, hoping someday I&apos;ll wash up on someone else&apos;s shore.
          </EnhancedBlockQuote>
          <EnhancedMarginNote side="left">Floating nowhere</EnhancedMarginNote>
        </motion.div>
      </Section>
    </ChapterLayout>
  );
}