"use client";

import ChapterLayout, {
  Section,
  EnhancedMarginNote,
  EnhancedBlockQuote,
  SectionDivider,
  InteractiveFootnote,
} from "@/components/ChapterLayout";
import { motion } from "framer-motion";

// New MemorySection component for past reflections
function MemorySection({ children, delay }: { children: React.ReactNode; delay: number }) {
  return (
    <motion.div
      className="mb-16 bg-[url('https://img.freepik.com/free-photo/old-paper-texture_1194-6020.jpg')] bg-cover p-8 rounded-lg shadow-lg border border-blue-200/30 opacity-90 hover:opacity-100 transition-opacity duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay }}
      style={{ fontFamily: "'EB Garamond', serif", fontSize: "1.1rem", lineHeight: "1.7rem" }}
    >
      <div className="text-gray-800 max-w-3xl mx-auto italic">
        {children}
      </div>
    </motion.div>
  );
}

export default function ChapterSix() {
  return (
    <ChapterLayout
      chapterNumber={6}
      chapterTitle="The Weight of Silence"
      previousChapter={5}
      soundMode="single"
      repeat={true}
      sounds={["/sounds/6.mp3"]}
    >
      {/* Cafeteria Scene */}
      <Section delay={0.2}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
          <p className="text-lg leading-relaxed text-gray-800">
            It is already late morning; breakfast was about to be served. Nurse Lisa is on the day shift, and I managed to convince her to walk with me to the cafeteria. She agreed, which was unusual for me; I am quite shy and rarely invite anyone for meals. But Lisa agreed, perhaps having her own reasons.
          </p>
          <br />
          <p className="text-lg leading-relaxed text-gray-800">
            I ordered an omelette and a cup of coffee. As we sat down, I tried to break the ice. <br /> "Feels like I'm on a date," I laughed nervously.
          </p>
          <p className="text-lg leading-relaxed text-gray-800">
            “Sure, feels so!" Her tone light and playful, which caught me off guard. I didn't know how to react, so I just nodded and took a bite of my omelette. We exchanged casual thoughts, and for a moment, it felt almost normal.
          </p>
          <EnhancedMarginNote side="right">A fleeting normalcy</EnhancedMarginNote>
        </motion.div>
      </Section>

      <SectionDivider />

      {/* Tension with Lisa */}
      <Section delay={0.4}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
          <p className="text-lg leading-relaxed text-gray-800">
            Suddenly, she interrupted with a deeper, more serious voice. <br /> "Hey."
          </p>
          <p className="text-lg leading-relaxed text-gray-800">
            I glanced at her, surprised by the change in her tone. <br /> "Yeah?" I replied, trying not to laugh at her hushed, dramatic manner.
          </p>
          <p className="text-lg leading-relaxed text-gray-800">
            “Your{" "}
            <InteractiveFootnote
              note="The narrator's strained relationship with their parents is a recurring source of emotional conflict, rooted in years of misunderstanding."
            >
              parents
            </InteractiveFootnote>
            ," she said, her words immediately breaking the moment. Just the mention of them made the whole atmosphere bitter. My relationship with my parents was strained, to say the least. “They’ve requested you to join the therapy class," she continued.
          </p>
          <p className="text-lg leading-relaxed text-gray-800">
            “What? For what, my arms?” I shot back defensively, my voice rising.
          </p>
          <p className="text-lg leading-relaxed text-gray-800">
            “No, psychotherapy,” she clarified softly.
          </p>
          <br />
          <EnhancedBlockQuote>
            “Do you think there’s something wrong with me too? Huh?”
          </EnhancedBlockQuote>
          <p className="text-lg leading-relaxed text-gray-800">
            This is just my parents’ typical behaviour, always trying to control me, to fix what they think is wrong with me. I felt anger bubbling up.
          </p>
          <p className="text-lg leading-relaxed text-gray-800">
            Lisa looked taken aback, unsure how to handle my outburst. <br /> "No, I just want you to be fine again," her voice sinking, a genuine concern.
          </p>
          <p className="text-lg leading-relaxed text-gray-800">
            "So, you also think I’m not okay," I said, feeling the frustration and anger surge. I lashed out, smashing the coffee pot on the cafeteria floor. I bolted from the cafeteria, running as fast as I could, trying to escape the mess I felt trapped in.
          </p>
          <EnhancedMarginNote side="left">A surge of defiance</EnhancedMarginNote>
        </motion.div>
      </Section>

      <SectionDivider />

      {/* Introspective Reflection */}
      <MemorySection delay={0.6}>
        <p className="text-lg leading-relaxed text-gray-800">
          I know my worst antidote to sadness is to hide it in silence. I know how my heart lusts to get stabbed for the stings that rumble away in each of its pulses, like how I suffocate my lungs; or my head out of oxygen to keep going: Words betray to understand how I bleed. So, this is how I heal, drown in my own thoughts, and float until I make it to the coast.
        </p>
        <br />
        <p className="text-lg leading-relaxed text-gray-800">
          Again, I’m looking afar, wishing for something I’m not sure of. Am I waiting for the dawn? Perhaps the sunset? I’m unsure…
        </p>
        <EnhancedMarginNote side="right">A restless yearning</EnhancedMarginNote>
      </MemorySection>

      <SectionDivider />

      {/* Therapy Class Scene */}
      <Section delay={0.8}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
          <p className="text-lg leading-relaxed text-gray-800">
            I somehow joined my first therapy class. <br /> Am I here expecting something? Somewhere deep down, am I asking for someone to understand me?
          </p>
          <p className="text-lg leading-relaxed text-gray-800">
            Rounded tables, flat seats. It’s like a room filled with moths wishing to be addressed as butterflies. Am I here for the same reason? This chosen crowd—are they here to judge me too? Am I supposed to accept their actions? Am I supposed to make them feel accepted, am I supposed to be …
          </p>
          <EnhancedMarginNote side="left">A room of strangers</EnhancedMarginNote>
        </motion.div>
      </Section>

      <SectionDivider />

      {/* Past Reflections */}
      <MemorySection delay={1.0}>
        <p className="text-lg leading-relaxed text-gray-800">
          Perhaps it's me and my thoughts again...
        </p>
        <p className="text-lg leading-relaxed text-gray-800">
          Like those days when I had to hide from demons in my so-called home. Like those days when I had to endure the so-called love of my{" "}
          <InteractiveFootnote
            note="The narrator's parents represent a source of emotional neglect, leaving lasting scars that shape their distrust."
          >
            parents
          </InteractiveFootnote>
          . How I’d witness all the fights down the hall, running my mind ragged, searching for reasons behind their actions. No! Of course they love me! Like how I used to burn my emotions thinking everything would be alright when I didn’t even know what "alright" even meant. I wonder... Is it a time or a feeling? Is it weird to miss something when you never had it? Am I trying to contextualize my dreams?
        </p>
        <br />
        <p className="text-lg leading-relaxed text-gray-800">
          I still remember the warm jet of air brushing my tears off when I used to jump off the window in despair of something I didn’t know. Am I supposed to open? I remember sitting in the night of the yard where I wasn’t myself.
        </p>
        <EnhancedBlockQuote>
          “Child, are you okay?”
        </EnhancedBlockQuote>
        <p className="text-lg leading-relaxed text-gray-800">
          Even the hippies used to say, Words I never heard under my own roof. I was always looking for a better place, a place where I would be accepted as I am…
        </p>
        <EnhancedMarginNote side="right">A lost refuge</EnhancedMarginNote>
      </MemorySection>

      <SectionDivider />

      {/* Final Confession */}
      <MemorySection delay={1.2}>
        <p className="text-lg leading-relaxed text-gray-800">
          Am I supposed to share what I used to see with my hands holding{" "}
          <InteractiveFootnote
            note="Adderall, often used for ADHD, here symbolizes the narrator's attempt to cope with their chaotic mental state."
          >
            Adderall
          </InteractiveFootnote>
          . Am I supposed to share how I tried to sleep with Xanax under my pillow… imagining a better place? Am I supposed to confess how the shoots of cigarettes defined me? Am I supposed to reveal how I’ve never smiled with my eyes wide open? Am I supposed to… <br /> “what am I supposed to do?” I don’t know…
        </p>
        <EnhancedBlockQuote>
          “What am I supposed to do?”
        </EnhancedBlockQuote>
        <p className="text-lg leading-relaxed text-gray-800">
          When life comes close to me, I’m confused. Unaware of the depth of my own position. Even the wind starts thinning. Like influences keep taking over my life. I wonder why I am not even complaining anymore.
        </p>
        <hr />
        <EnhancedMarginNote side="left">Echoes of pain</EnhancedMarginNote>
      </MemorySection>
    </ChapterLayout>
  );
}