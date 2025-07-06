"use client";

import ChapterLayout, {
  Section,
  EnhancedMarginNote,
  EnhancedBlockQuote,
  SectionDivider,
  InteractiveFootnote,
} from "@/components/ChapterLayout";
import { motion } from "framer-motion";
// import { NovelImage } from "@/components/novel-images";

export default function ChapterThree() {
  return (
    <ChapterLayout
      chapterNumber={3}
      chapterTitle="Heaven Wait"
      previousChapter={2}
      soundMode="scroll"
      repeat={true}
      sounds={["/sounds/3.mp3", "/sounds/wind.wav", "/sounds/heartbeat.mp3"]}
    >
      {/* Liberation Scene */}
      <Section delay={0.2}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-lg leading-relaxed text-gray-800">
            Today feels different, a step closer to normalcy... My body is
            starting to heal, and they&apos;ve finally removed my{" "}
            <InteractiveFootnote
              note="The removal of IV lines and syringes marks a significant milestone in hospital recovery, both physically and psychologically."
            >
              syringes and IV lines
            </InteractiveFootnote>
            . The sensation of those needles leaving my skin was liberating.
            Gosh, that felt so good.
          </p>

          <EnhancedMarginNote side="right">
            A step closer to normalcy
          </EnhancedMarginNote>
        </motion.div>
      </Section>

      {/* Suffocation & Evening Setting */}
      <Section delay={0.4}>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg leading-relaxed text-gray-800">
            It&apos;s already evening. The air inside the hall suffocating me.
            I don&apos;t know why. I feel like I need a breeze of fresh air. The
            room shrouded in a sterile stillness, my eyes hardly fluttering to
            keep them open, the harsh overhead lights glooming my already
            weakened haze.
          </p>
          <EnhancedBlockQuote>
            My throat dry, the crunch of metal on my bed and nothingness…
          </EnhancedBlockQuote>

          <EnhancedMarginNote side="left">
            Suffocating sterile stillness
          </EnhancedMarginNote>
        </motion.div>
      </Section>

      <SectionDivider />

      {/* The Escape to Rooftop */}
      <Section delay={0.6}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          <p className="text-lg leading-relaxed text-gray-800">
            I swung my legs over the side of the bed, the cold tile floor
            shivering my spine. I clutched through the sallow hallway to the
            elevator. A promising escape to the{" "}
            <InteractiveFootnote
              note="Hospital rooftops often serve as unexpected sanctuaries for patients seeking solitude and fresh air."
            >
              rooftop
            </InteractiveFootnote>
            .
          </p>
          <p className="text-lg leading-relaxed text-gray-800">
            Ah. Blinding lights. A gentle breeze caressed my wakened body as I
            made my way to the edge, leaning against the concrete railing. My
            thoughts crumbled.
          </p>

          <EnhancedMarginNote side="right">A promising escape</EnhancedMarginNote>
        </motion.div>
      </Section>

      {/* The Cigarette Moment */}
      <Section delay={0.8}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-lg leading-relaxed text-gray-800">
            With trembling hands, I pulled out a cigarette, a lifeline in chaos.
            I turned against the city, lit it. The warmth reached between my
            lips, a familiar burn. My thoughts froze.
          </p>
          <p className="text-lg leading-relaxed text-gray-800">
            Against the wall I stood. This wind aggressively blowing against
            me… Another drag of smoke filled my lungs with a familiar burn. No
            urgency, yet no clarity within me.
          </p>

          <EnhancedMarginNote side="left">A lifeline in chaos</EnhancedMarginNote>
        </motion.div>
      </Section>

      <SectionDivider />

      {/* Emily's Intervention */}
      <Section delay={1.0}>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <EnhancedBlockQuote>
            &quot;What do you think you are doing? Get down from there!!&quot;
          </EnhancedBlockQuote>
          <p className="text-lg leading-relaxed text-gray-800">
            A screaming voice echoed far back from the door. I wasn&apos;t
            bothered at all. I could care any less.
          </p>
          <p className="text-lg leading-relaxed text-gray-800">
            &quot;HEYY! Get down from there you&apos;re going to fall.
            You&apos;re scaring me. What are you thinking?&quot;
          </p>
          <p className="text-lg leading-relaxed text-gray-800">
            The voice grew closer, more insistent, but I could hardly muster a
            response.
          </p>

          <EnhancedMarginNote side="right">
            Voice from the darkness
          </EnhancedMarginNote>
        </motion.div>
      </Section>

      {/* Poetic Reflection */}
      <Section delay={1.2}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <p className="text-lg leading-relaxed text-gray-800 italic">
            &quot;There&apos;s something about this unsettling air… don&apos;t
            you think so?... Like the way it melts effortlessly with the smoke.
            I wish I could fly away... far, afar... just like the smoke... I
            envy this wind so much.&quot;
          </p>
          <EnhancedBlockQuote>
            &quot;Is it a dream? Gloomy as if I&apos;ve never seen. Clot of
            blood, yearning for a movement. A scene painted in green.&quot;
          </EnhancedBlockQuote>

          <EnhancedMarginNote side="left">
            Envy this wind so much
          </EnhancedMarginNote>
        </motion.div>
      </Section>

      {/* The Rescue */}
      <Section delay={1.4}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-lg leading-relaxed text-gray-800">
            &quot;Get down here. We&apos;ll talk.&quot;
          </p>
          <p className="text-lg leading-relaxed text-gray-800">
            A hand reached out to me. Against those strong grips I was helpless
            as the cigarette burned down to the filter, I flicked it over the
            edge, watching as it tumbled into the abyss as I got dragged away
            from the edge.
          </p>
          <p className="text-lg leading-relaxed text-gray-800">
            &quot;You idiot! What were you just thinking huh?&quot; She&apos;s a
            girl. I just noticed.
          </p>

          <EnhancedMarginNote side="right">Strong grips, helpless</EnhancedMarginNote>
        </motion.div>
      </Section>

      <SectionDivider />

      {/* Meeting Emily */}
      <Section delay={1.6}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg leading-relaxed text-gray-800">
            &quot;Nothing really!&quot; I mummer.
          </p>
          <p className="text-lg leading-relaxed text-gray-800">
            She sighed, her grip on my arm loosening but not letting go.
            &quot;Come on, we need to talk.&quot;
          </p>
          <p className="text-lg leading-relaxed text-gray-800">
            I took a deep breath, the smoke still lingering in my lungs.
            &quot;I don&apos;t know,&quot; I admitted. &quot;I needed to feel
            something different. The hospital room…it&apos;s
            suffocating.&quot;
          </p>
          <p className="text-lg leading-relaxed text-gray-800">
            She nodded; her gaze fixed on the horizon. &quot;It looked like you
            were ready to jump!&quot;
          </p>
          <EnhancedMarginNote side="left">
            Needed to feel something different
          </EnhancedMarginNote>
        </motion.div>
      </Section>

      {/* Emily's Introduction */}
      <Section delay={1.8}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-lg leading-relaxed text-gray-800">
            &quot;I wasn&apos;t&quot; I said quickly, though the truth of the
            statement felt murky even to me. &quot;I just wanted to feel the
            air, to be away from everything for a moment.&quot;
          </p>
          <p className="text-lg leading-relaxed text-gray-800">
            Her eyes searching for something in my expression. &quot;What
            happened to you? Why are you here?&quot;
          </p>
          <p className="text-lg leading-relaxed text-gray-800">
            &quot;An accident! Nothing too much.&quot;
          </p>
          <p className="text-lg leading-relaxed text-gray-800">
            &quot;Care to explain?&quot; She seemed eager to hear....{" "}
            <InteractiveFootnote
              note="Emily's introduction marks a pivotal moment - the first genuine human connection outside the sterile hospital environment."
            >
              &quot;I&apos;m Emily by the way.&quot;
            </InteractiveFootnote>
          </p>

          <EnhancedMarginNote side="right">
            Eyes searching for something
          </EnhancedMarginNote>
        </motion.div>
      </Section>

      {/* Final Exchange */}
      <Section delay={2.0}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-lg leading-relaxed text-gray-800">
            &quot;It&apos;s all blurry. I don&apos;t know much.&quot;
          </p>
          <p className="text-lg leading-relaxed text-gray-800">
            &quot;Mr cool guy huh what&apos;s your name?&quot; I felt a bit of
            tease in her voice.
          </p>
          <EnhancedBlockQuote>
            &quot;….&quot; I replied, feeling the weight of the evening lifting
            slightly.
          </EnhancedBlockQuote>
          <p className="text-lg leading-relaxed text-gray-800 italic">
            In the space between words, something shifted. The rooftop no longer
            felt like an escape from the world, but a bridge to it.
          </p>
          <EnhancedMarginNote side="left">
            The weight lifting slightly
          </EnhancedMarginNote>
        </motion.div>
      </Section>
    </ChapterLayout>
  );
}