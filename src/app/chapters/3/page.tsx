"use client";

import ChapterLayout, {
  Section,
  EnhancedMarginNote,
  EnhancedBlockQuote,
  SectionDivider,
  InteractiveFootnote,
} from "@/components/ChapterLayout";
import { motion } from "framer-motion";
import { NovelImage } from "@/components/novel-images";

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
            Today feels different, a step closer to normalcy... My body is starting to heal, and they've finally removed my{" "}
            <InteractiveFootnote
              note="The removal of IV lines and syringes marks a significant milestone in hospital recovery, both physically and psychologically."
            >
              syringes and IV lines
            </InteractiveFootnote>
            . The sensation of those needles leaving my skin was liberating. Gosh, that felt so good.
          </p>

          <EnhancedMarginNote side="right">A step closer to normalcy</EnhancedMarginNote>
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
            It's already evening. The air inside the hall suffocating me. I don't know why. I feel like I need a breeze of fresh air. The room shrouded in a sterile stillness, my eyes hardly fluttering to keep them open, the harsh overhead lights glooming my already weakened haze.
          </p>
          <EnhancedBlockQuote>
            My throat dry, the crunch of metal on my bed and nothingness…
          </EnhancedBlockQuote>

          <EnhancedMarginNote side="left">Suffocating sterile stillness</EnhancedMarginNote>
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
            I swung my legs over the side of the bed, the cold tile floor shivering my spine. I clutched through the sallow hallway to the elevator. A promising escape to the{" "}
            <InteractiveFootnote
              note="Hospital rooftops often serve as unexpected sanctuaries for patients seeking solitude and fresh air."
            >
              rooftop
            </InteractiveFootnote>
            .
          </p>
          <p className="text-lg leading-relaxed text-gray-800">
            Ah. Blinding lights. A gentle breeze caressed my wakened body as I made my way to the edge, leaning against the concrete railing. My thoughts crumbled.
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
            With trembling hands, I pulled out a cigarette, a lifeline in chaos. I turned against the city, lit it. The warmth reached between my lips, a familiar burn. My thoughts froze.
          </p>
          <p className="text-lg leading-relaxed text-gray-800">
            Against the wall I stood. This wind aggressively blowing against me… Another drag of smoke filled my lungs with a familiar burn. No urgency, yet no clarity within me.
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
            "What do you think you are doing? Get down from there!!"
          </EnhancedBlockQuote>
          <p className="text-lg leading-relaxed text-gray-800">
            A screaming voice echoed far back from the door. I wasn't bothered at all. I could care any less.
          </p>
          <p className="text-lg leading-relaxed text-gray-800">
            "HEYY! Get down from there you're going to fall. You're scaring me. What are you thinking?"
          </p>
          <p className="text-lg leading-relaxed text-gray-800">
            The voice grew closer, more insistent, but I could hardly muster a response.
          </p>
          
          <EnhancedMarginNote side="right">Voice from the darkness</EnhancedMarginNote>
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
            "There's something about this unsettling air… don't you think so?... Like the way it melts effortlessly with the smoke. I wish I could fly away... far, afar... just like the smoke... I envy this wind so much."
          </p>
          <EnhancedBlockQuote>
            "Is it a dream? Gloomy as if I've never seen. Clot of blood, yearning for a movement. A scene painted in green."
          </EnhancedBlockQuote>
          
          <EnhancedMarginNote side="left">Envy this wind so much</EnhancedMarginNote>
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
            "Get down here. We'll talk."
          </p>
          <p className="text-lg leading-relaxed text-gray-800">
            A hand reached out to me. Against those strong grips I was helpless as the cigarette burned down to the filter, I flicked it over the edge, watching as it tumbled into the abyss as I got dragged away from the edge.
          </p>
          <p className="text-lg leading-relaxed text-gray-800">
            "You idiot! What were you just thinking huh?" She's a girl. I just noticed.
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
            "Nothing really!" I mummer.
          </p>
          <p className="text-lg leading-relaxed text-gray-800">
            She sighed, her grip on my arm loosening but not letting go. "Come on, we need to talk."
          </p>
          <p className="text-lg leading-relaxed text-gray-800">
            I took a deep breath, the smoke still lingering in my lungs. "I don't know," I admitted. "I needed to feel something different. The hospital room…it's suffocating."
          </p>
          <p className="text-lg leading-relaxed text-gray-800">
            She nodded; her gaze fixed on the horizon. "It looked like you were ready to jump!"
          </p>
          <EnhancedMarginNote side="left">Needed to feel something different</EnhancedMarginNote>
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
            "I wasn't" I said quickly, though the truth of the statement felt murky even to me. "I just wanted to feel the air, to be away from everything for a moment."
          </p>
          <p className="text-lg leading-relaxed text-gray-800">
            Her eyes searching for something in my expression. "What happened to you? Why are you here?"
          </p>
          <p className="text-lg leading-relaxed text-gray-800">
            "An accident! Nothing too much."
          </p>
          <p className="text-lg leading-relaxed text-gray-800">
            "Care to explain?" She seemed eager to hear....{" "}
            <InteractiveFootnote
              note="Emily's introduction marks a pivotal moment - the first genuine human connection outside the sterile hospital environment."
            >
              "I'm Emily by the way."
            </InteractiveFootnote>
          </p>
          
          <EnhancedMarginNote side="right">Eyes searching for something</EnhancedMarginNote>
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
            "It's all blurry. I don't know much."
          </p>
          <p className="text-lg leading-relaxed text-gray-800">
            "Mr cool guy huh what's your name?" I felt a bit of tease in her voice.
          </p>
          <EnhancedBlockQuote>
            "…." I replied, feeling the weight of the evening lifting slightly.
          </EnhancedBlockQuote>
          <p className="text-lg leading-relaxed text-gray-800 italic">
            In the space between words, something shifted. The rooftop no longer felt like an escape from the world, but a bridge to it.
          </p>
          <EnhancedMarginNote side="left">The weight lifting slightly</EnhancedMarginNote>
        </motion.div>
      </Section>
    </ChapterLayout>
  );
}