"use client";

import { motion } from "framer-motion";
import ChapterLayout, {
  Section,
  EnhancedMarginNote,
  EnhancedBlockQuote,
  SectionDivider,
  InteractiveFootnote,
} from "@/components/ChapterLayout";
import { NovelImage } from "@/components/novel-images";
import ImageComparison from "@/components/ImageComparision";

export default function ChapterOne() {
  return (
    <>
      <ChapterLayout
        chapterNumber={1}
        chapterTitle="Chaos"
        soundMode="single"
        repeat={true}
        sounds={["/sounds/2.mp3", "/sounds/1.wav"]}
      >
        <Section delay={0.2}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
            <p className="text-lg leading-relaxed text-gray-800">
              The world before me, sober and still, offers me no place to go. I don’t fool myself—I’m a heartache from the moment I’m born. My heart, frozen, as I find the will to forget. Somewhere out there, I exist. Somewhere.
            </p>
            <p className="text-lg leading-relaxed text-gray-800">
              I’m uncertain, like a rose pale and dying, dropping its petals. This world before me… is unsure. I’m living too much inside of myself again.
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
              A haunting voice echoes around my ears as I impulsively open my eyes. Murmuring voices blend into the background noise. “He’ll be alright.” The room swims into focus, revealing some familiar faces, their expressions soaked in sorrow.
            </p>
            <p className="text-lg leading-relaxed text-gray-800">
              I have no idea what’s going on. Where am I? Who are they? I feel incompetent. Lost. All at once. My mind feels foggy, detached. It’s all{" "}
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
              Gradually, I realise I’m in a clinical ward. My body aches and stings, drenched in medical solution. I can hardly feel my limbs. The smell of hospital floors—bleach and antiseptic—irritates me.
            </p>
            {/* <NovelImage
              src="https://plus.unsplash.com/premium_photo-1728058959928-ce48533016b7?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Hospital room at night"
              width={1200}
              height={800}
              caption="Room 107"
              description="My temporary prison, where shadows dance on sterile walls"
              style="dreamy"
              effect="elastic"
            /> */}
            <p className="text-lg leading-relaxed text-gray-800">
              I glance at myself: bandages wrap all around my body, laid lifelessly on the bed. I try to move but can’t. Maybe I’m too feeble. I’ve never been physically strong. Throughout my childhood, I rarely went outside. Even in school, I used to slip in and out of PE classes.
            </p>
            <EnhancedMarginNote side="right">Never been physically strong</EnhancedMarginNote>
          </motion.div>
        </Section>

        <SectionDivider />

        <Section delay={0.8}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
            <p className="text-lg leading-relaxed text-gray-800">
              The door creaks open, and a nurse walks in, moving slowly, as if she’s in no hurry. “What’s the problem with these people?” I mutter to myself.
            </p>
            <p className="text-lg leading-relaxed text-gray-800">
              “How are you feeling now?” she asks, her tone familiar, as if she knows me. I have{" "}
              <InteractiveFootnote
                note="Time distorts in sterile rooms—minutes stretch into hours, and days lose their edges."
              >
                no idea how long
              </InteractiveFootnote>
              {" "} I’ve been here. Maybe she does, but she keeps inspecting my bandages, making me uncomfortable.
            </p>
            <p className="text-lg leading-relaxed text-gray-800">
              “A little bit better, I guess,” I reply. She remains neutral and just walks away. “Well, that’s awkward,” I say to myself.
            </p>
            <EnhancedMarginNote side="right">How long have I been here?</EnhancedMarginNote>
          </motion.div>
        </Section>

        <Section delay={1.0}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
            <h3 className="text-lg leading-relaxed text-gray-800 mb-6">Am I wishing for less time...</h3>
            <p className="text-lg leading-relaxed text-gray-800">
              The door swings open, and suddenly a flood of people rushes in. “Are you alright, my dear? Are you okay? Why would you do such things to us? Have you lost your mind? Why won’t you ever think of us?” I question myself—Am I wishing for less time?
            </p>
            <p className="text-lg leading-relaxed text-gray-800">
              I freeze, overwhelmed. They’re my parents, but I don’t utter a single word. They stare at me as if this is a scene from a movie. I turn my head awkwardly to the white pillowcase and rest my head on it. “He was never like this. What is wrong with him?” I hear them complain.
            </p>
            <EnhancedMarginNote side="right">A scene from a movie</EnhancedMarginNote>
          </motion.div>
        </Section>

        <SectionDivider />

        <Section delay={1.2}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
            <p className="text-lg leading-relaxed text-gray-800">
              I’m so congested, my mind drifts away. I can barely move. I hate myself… Have I decided not to expect too much at the end of the world? Time afire against my will… my lungs get drunken on flood… my feet petrified…
            </p>
            <ImageComparison
              beforeImage="https://images.unsplash.com/photo-1620065692460-d8e110a47ffb?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              // afterImage="https://images.unsplash.com/photo-1574920822400-544968a39fbb?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG
              afterImage="https://images.unsplash.com/photo-1620065692460-d8e110a47ffb?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              
              beforeAlt="Clear Memory"
              afterAlt="Foggy Memory"
              beforeText="All I find at most is myself to blame!"
              afterText="Lost in Haze...the way it was!"
              width={600}
              height={400}
              beforeStyle="polaroid"
              afterStyle="noir"
              beforeEffect="elastic"
              afterEffect="reveal"
            />
            <EnhancedBlockQuote>
              Can I wait until my heart doesn’t swell anymore; in random places… Will I collapse inside as my world is…
            </EnhancedBlockQuote>
            <p className="text-lg leading-relaxed text-gray-800">
              Can I stay—still—and watch again how the{" "}
              <InteractiveFootnote
                note="The rain mirrors the narrator’s stasis—a quiet longing trapped beneath the chaos."
              >
                rain drips
              </InteractiveFootnote>
              {" "} at the ending tip of the roof and awaits its blue sky?
            </p>
            <EnhancedMarginNote side="left">Awaiting its blue sky</EnhancedMarginNote>
          </motion.div>
        </Section>
      </ChapterLayout>
    </>
  );
}