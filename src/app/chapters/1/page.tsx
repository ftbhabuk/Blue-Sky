"use client";

import ChapterLayout, {
  Section,
  EnhancedMarginNote,
  EnhancedBlockQuote,
  SectionDivider,
  InteractiveFootnote,
} from "@/components/ChapterLayout";
import { CloudBackground } from "@/app/components/cloud-background";
import { motion } from "framer-motion";
import { NovelImage, NovelGallery, MemoryWall } from "@/components/novel-images";
import ImageComparison from "@/components/ImageComparision";


export default function ChapterOne() {
  const hospitalMemories = [
    {
      src: "https://plus.unsplash.com/premium_photo-1717600428310-e60a32603941?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQzfHx8ZW58MHx8fHx8",
      alt: "Hospital Window View",
      title: "First Light",
      height: 200,
      style: "modern" as const, // Default polaroid look with a slight rotation
      effect: "reveal" as const,   // Fades in gently
      annotations: [
        { x: 30, y: 40, text: "Where birds gather each morning" },
       
      ],
    },
    {
      src: "https://images.unsplash.com/photo-1740676176364-03eb7bdb2bb4?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8",
      alt: "Medical Equipment",
      title: "loosing States",
      height: 200,
      style: "glassScatter" as const,    // Black-and-white, high-contrast look
      effect: "reveal" as const,   // Zooms in for a dramatic entrance
      annotations: [
        { x: 30, y: 40, text: "The machines keeping me alive" },    
      ],
    },
    
    {
      src: "https://images.unsplash.com/photo-1516574290314-5a56c5acdd4e?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGhvc3BpdGFsJTIwcm9vbSUyMHN1bnxlbnwwfHwwfHx8MA%3D%3D",
      alt: "Hospital Clock",
      title: "3:47 AM",
      height: 200,
      style: "colorSplash" as const, // Sepia-toned, old-fashioned feel
      effect: "reveal" as const, // Bounces in with a springy effect
      annotations: [
        { x: 30, y: 40, text: "The hour of ghosts" },
       
      ]
    },
    
  ];

  return (
    <ChapterLayout
      chapterNumber={1}
      chapterTitle="Chaos"
      backgroundElements={<CloudBackground />}
      soundMode="single"
      repeat={true}
      sounds={["/sounds/2.mp3", "/sounds/1.wav"]}
    >
      <Section delay={0.2}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
          <p className="text-lg leading-relaxed text-gray-800">
            The world before me, sober and still, offers me no place to go. I don&apos;t fool myself—I&apos;m a heartache from the moment I&apos;m born. My heart, frozen, as I find the will to forget. Somewhere out there, I exist. Somewhere.
          </p>
          <NovelImage
            src="https://images.unsplash.com/photo-1485848395967-65dff62dc35b?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvc3BpdGFsfGVufDB8fDB8fHww"
            alt="Long hospital corridor at dawn"
            width={1200}
            height={800}
            caption="The Endless Corridor"
            description="Where time stretches like an infinite line"
            style="minimal"
            effect="none"
          />
          <p className="text-lg leading-relaxed text-gray-800">
            I&apos;m uncertain, like a rose pale and dying, dropping its petals. This world before me… is unsure. I&apos;m living too much inside of myself again.
          </p>
          <EnhancedMarginNote side="right">Living too much inside myself</EnhancedMarginNote>
          <EnhancedBlockQuote>
            I wonder: if I dismantle my horizon, will my walls crumble? If I bend these fences and scrape off layers of my cocoon…
          </EnhancedBlockQuote>
        </motion.div>
      </Section>

      <SectionDivider />

      <Section delay={0.4}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
          <p className="text-lg leading-relaxed text-gray-800">
            A haunting voice echoes around my ears as I impulsively open my eyes. Murmuring voices blend into the background noise. &quot;He&apos;ll be alright.&quot; The room swims into focus, revealing some familiar faces, their expressions soaked in sorrow.
          </p>
          <MemoryWall memories={hospitalMemories} />
          <p className="text-lg leading-relaxed text-gray-800">
            I have no idea what&apos;s going on. Where am I? Who are they? I feel incompetent. Lost. All at once. My mind feels foggy, detached. It&apos;s all{" "}
            <InteractiveFootnote
              note="The blur of memory often accompanies sudden trauma, leaving gaps that feel like missing pieces."
            >
              a blur
            </InteractiveFootnote>
            . I remember feeling overwhelmed, and everything just spiralled out of control.
          </p>
          <EnhancedMarginNote side="left">Everything spiralled out of control</EnhancedMarginNote>
        </motion.div>
      </Section>

      <Section delay={0.6}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
          <p className="text-lg leading-relaxed text-gray-800">
            Gradually, I realise I&apos;m in a clinical ward. My body aches and stings, drenched in medical solution. I can hardly feel my limbs. The smell of hospital floors—bleach and antiseptic—irritates me.
          </p>
          <NovelImage
            src="https://plus.unsplash.com/premium_photo-1728058959928-ce48533016b7?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Hospital room at night"
            width={1200}
            height={800}
            caption="Room 107"
            description="My temporary prison, where shadows dance on sterile walls"
            style="polaroid"
            effect="elastic"
          />
          <p className="text-lg leading-relaxed text-gray-800">
            I glance at myself: bandages wrap all around my body, laid lifelessly on the bed. I try to move but can&apos;t. Maybe I&apos;m too feeble. I&apos;ve never been physically strong. Throughout my childhood, I rarely went outside. Even in school, I used to slip in and out of PE classes.
          </p>
          <EnhancedMarginNote side="right">Never been physically strong</EnhancedMarginNote>
        </motion.div>
      </Section>

      <Section delay={0.7}>
        <NovelGallery
          images={[
            {
              src: "https://images.unsplash.com/photo-1648224394449-d10dbff84b8e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              alt: "Medical equipment in the darkness",
              width: 800,
              height: 600,
              caption: "Life Support",
              description: "The machines keeping me tethered to this world",
              style: "dreamy",
            },
            {
              src: "https://images.unsplash.com/photo-1472448715764-c30bf8bc2cf4?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              alt: "Hospital window view at sunset",
              width: 800,
              height: 600,
              caption: "My Window to the World",
              description: "Each sunset brings another day closer to freedom",
              style: "glassScatter",
            },
            
          ]}
          layout="carousel"
          spacing="normal"
        />
      </Section>

      <SectionDivider />

      <Section delay={0.8}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
          <p className="text-lg leading-relaxed text-gray-800">
            The door creaks open, and a nurse walks in, moving slowly, as if she&apos;s in no hurry. &quot;What&apos;s the problem with these people?&quot; I mutter to myself.
          </p>
          <p className="text-lg leading-relaxed text-gray-800">
            &quot;How are you feeling now?&quot; she asks, her tone familiar, as if she knows me. I have{" "}
            <InteractiveFootnote
              note="Time distorts in sterile rooms—minutes stretch into hours, and days lose their edges."
            >
              no idea how long
            </InteractiveFootnote>
            {" "} I&apos;ve been here. Maybe she does, but she keeps inspecting my bandages, making me uncomfortable.
          </p>
          <p className="text-lg leading-relaxed text-gray-800">
            &quot;A little bit better, I guess,&quot; I reply. She remains neutral and just walks away. &quot;Well, that&apos;s awkward,&quot; I say to myself.
          </p>
          <EnhancedMarginNote side="right">How long have I been here?</EnhancedMarginNote>
        </motion.div>
      </Section>

      <Section delay={1.0}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
          <h3 className="text-2xl text-gray-700 mb-6">Am I wishing for less time...</h3>
          <p className="text-lg leading-relaxed text-gray-800">
            The door swings open, and suddenly a flood of people rushes in. &quot;Are you alright, my dear? Are you okay? Why would you do such things to us? Have you lost your mind? Why won&apos;t you ever think of us?&quot; I question myself—Am I wishing for less time?
          </p>
          <p className="text-lg leading-relaxed text-gray-800">
            I freeze, overwhelmed. They&apos;re my parents, but I don&apos;t utter a single word. They stare at me as if this is a scene from a movie. I turn my head awkwardly to the white pillowcase and rest my head on it. &quot;He was never like this. What is wrong with him?&quot; I hear them complain.
          </p>
          <EnhancedMarginNote side="right">A scene from a movie</EnhancedMarginNote>
        </motion.div>
      </Section>
      <SectionDivider />
 
      <Section delay={1.2}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
          <p className="text-lg leading-relaxed text-gray-800">
            I&apos;m so congested, my mind drifts away. I can barely move. I hate myself… Have I decided not to expect too much at the end of the world? Time afire against my will… my lungs get drunken on flood… my feet petrified…
          </p>
          <ImageComparison
  beforeImage="https://images.unsplash.com/photo-1620065692460-d8e110a47ffb?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  afterImage="https://images.unsplash.com/photo-1574920822400-544968a39fbb?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  beforeAlt="Clear Memory"
  afterAlt="Foggy Memory"
  beforeText="The Way It Was" // Unique text for before
  afterText="Lost in Haze"    // Unique text for after
  width={600} // Override default if needed
  height={400} // Override default if needed
  beforeStyle="dreamy" // Sepia-toned clear memory
  afterStyle="modern" // Grayscale foggy memory
  beforeEffect="fade" // Fades in the before image
  afterEffect="zoom" // Slides in the after image
/>
          <EnhancedBlockQuote>
            Can I wait until my heart doesn&apos;t swell anymore; in random places… Will I collapse inside as my world is…
          </EnhancedBlockQuote>
          
          <p className="text-lg leading-relaxed text-gray-800">
            Can I stay—still—and watch again how the{" "}
            <InteractiveFootnote
              note="The rain mirrors the narrator&apos;s stasis—a quiet longing trapped beneath the chaos."
            >
              {" "} rain drips
            </InteractiveFootnote>
            {" "} at the ending tip of the roof and awaits its blue sky?
          </p>
          <EnhancedMarginNote side="left">Awaiting its blue sky</EnhancedMarginNote>
        </motion.div>
      </Section>
    </ChapterLayout>
  );
}