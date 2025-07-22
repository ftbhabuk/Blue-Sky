"use client";

import ChapterLayout, {
  Section,
  EnhancedMarginNote,
  EnhancedBlockQuote,
  SectionDivider,
  InteractiveFootnote,
} from "@/components/ChapterLayout";
import { motion } from "framer-motion";

export default function ChapterFour() {
  return (
    <ChapterLayout
      chapterNumber={4}
      chapterTitle="A Gentle Wind"
      previousChapter={3}
      soundMode="single"
      repeat={true}
      sounds={["/sounds/4.mp3"]}
    >
      {/* Plaster Removal Scene */}
      <Section delay={0.2}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-lg leading-relaxed text-gray-800"
        >
          <p>
            How would I describe last night? Dramatic, for sure. All those
            awkward interactions with Emily replayed in my mind, a mix of
            confusion and a strange comfort. Today, though, I had something else
            to focus on: getting my right-hand plaster removed. Lisa had just
            told me.
          </p>
          <EnhancedBlockQuote>
            “At least that’s some good news.”
          </EnhancedBlockQuote>
          <p>“Are you being sarcastic or what?” I asked, my voice laced with a bit of skepticism.</p>
          <p>“No, I’m genuinely happy,” She replied with a smile. She transferred me to another room and started prepping for my treatment.</p>
          <br />
          <p>"Hey," my voice barely above a whisper.</p>
          <p>"Hmm hm?" her response soft, not looking at me at all.</p>
          <p>"Will it hurt?" Such stupid question...</p>
          <p>"I haven't tried yet," That's not the kind of answer I expected from a nurse.</p>
          <p>"Hey! Come on," she laughed and reassured me, "No, it won't. You’ll be just fine."</p>
          <EnhancedMarginNote side="right">A small relief</EnhancedMarginNote>
        </motion.div>
      </Section>

      <SectionDivider />

      {/* Post-Surgery Scene */}
      <Section delay={0.4}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-lg leading-relaxed text-gray-800"
        >
          <p>
            Finally, the removal of bandages went well, and I was able to move
            my hand freely. As I was in surgery, I missed the regular checkup
            and breakfast. Lisa's shift had already ended by the time I woke
            up. They had already transferred me back to my previous ward.
          </p>
          <br />
          <p>
            The person next to me was waving with curiosity. I waved back. "How
            did it go?" he asked, probably already having asked the nurse about
            my surgery. I was a little surprised by his concern.
          </p>
          <p>"Better than I expected,"</p>
          <EnhancedMarginNote side="left">
            Unexpected camaraderie
          </EnhancedMarginNote>
        </motion.div>
      </Section>

      <SectionDivider />

      {/* Ward Conversation */}
      <Section delay={0.6}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-lg leading-relaxed text-gray-800"
        >
          <p>
            As usual, our conversation started randomly. "So, why are you here?"
            he asked.
          </p>
          <p>
            "You clearly can’t see, right?" I replied sarcastically, trying to
            deflect his curiosity. But the truth was, I didn’t want to delve
            into my own story.
          </p>
          <br />
          <p>
            "You’ve got an extra for me today?" Of course, I was talking about
            the{" "}
            <InteractiveFootnote
              note="Cigarettes are a recurring motif, symbolizing a fleeting escape from the hospital's confines."
            >
              cigarettes
            </InteractiveFootnote>
            . He was the one who supplied me with one last night. I can’t be
            seen lurking and searching for it.
          </p>
          <p>"A little," he said, casually passing me one.</p>
          <EnhancedMarginNote side="right">A shared vice</EnhancedMarginNote>
        </motion.div>
      </Section>

      <SectionDivider />

      {/* Evening Scene */}
      <Section delay={0.8}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-lg leading-relaxed text-gray-800"
        >
          <p>
            The sun had already set, casting long shadows across the ward. The
            quiet had settled in, giving the place of a creepy vibe. If someone
            turned off these fluorescent bulbs, it would surely feel like a
            haunted house. The nurse’s station was almost deserted, making it
            easy to slip unnoticed.
          </p>
          <br />
          <p>
            I’m at the top again, I am not sure what I am thinking but feel
            like I am expecting something, someone perhaps. A familiar face in
            the shadow, there she is; her silhouette outlined against the dim
            glow of the{" "}
            <InteractiveFootnote
              note="The city lights represent a world beyond the hospital, both alluring and unattainable."
            >
              city lights
            </InteractiveFootnote>
            .
          </p>
          <EnhancedMarginNote side="left">A haunting stillness</EnhancedMarginNote>
        </motion.div>
      </Section>

      <SectionDivider />

      {/* Rooftop Encounter */}
      <Section delay={1.0}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-lg leading-relaxed text-gray-800"
        >
          <p>“Oh! Aren’t you going to try and jump off the roof today?”</p>
          <br />
          <p>
            Her tone light but with an undercurrent of something else concern
            perhaps, or curiosity. An awkward silence settled between us. “Go
            on. I won’t stop you!” Her voice carrying a strange mix of challenge
            and indifference.
          </p>
          <p>
            “And why would you think of Mr nobody ha-ha” With a bit of
            lifelessness, I responded.
          </p>
          <br />
          <p>
            I laid, slowly next to the floor where she was sitting. I shuddered,
            against the gust of wind blowing against us, so cold: it could
            shiver my roots. Restless: my bones straining against the weight of
            silence. These arbitrary terms, oh such harshness! Deceiving
            sunshine, untouched shadows. How should I begin to explain.
          </p>
          <EnhancedBlockQuote>
            “Emily, you’re the only exception I’ve have!!”
          </EnhancedBlockQuote>
          <EnhancedMarginNote side="right">
            A chilling confession
          </EnhancedMarginNote>
        </motion.div>
      </Section>

      <SectionDivider />

      {/* Emotional Exchange */}
      <Section delay={1.2}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-lg leading-relaxed text-gray-800"
        >
          <p>“Hey!” I murmured, subtly trying to catch her eyes.</p>
          <p>
            “Naked truth?” Her expression, unreadable. The question hung in the
            air. I don’t know what she was expecting me to say. I’m even unsure
            of myself.
          </p>
          <br />
          <p>
            “That night I thought giving up. If you weren’t there I surely
            would have jumped.”
          </p>
          <br />
          <p>
            I reached my hands into my pockets, grabbed barely squeezed
            cigarette, my hands barely shaking, holding midway in the air I lit
            it. As I exhaled, the first puff of smoke escaping my lungs,
          </p>
          <p>“You know, I feel like I have nothing to lose.” Her expression, unreadable again.</p>
          <p>“You know, you are kind of a mystery, Emily!”</p>
          <br />
          <p>
            “Says the guy who wanted to jump off yesterday!” She casually
            laughed off my seriousness.
          </p>
          <p>
            I wasn’t looking for any kind of agony or something, but I feel
            like being honest at once. “Naked truth?” I whispered; my voice
            barely heard over the wind as I tried to dismiss this gloominess.
          </p>
          <EnhancedMarginNote side="right">A fragile honesty</EnhancedMarginNote>
        </motion.div>
      </Section>

      <SectionDivider />

      {/* Emily's Revelation */}
      <Section delay={1.4}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-lg leading-relaxed text-gray-800"
        >
          <p>
            “I feel like a face in the crowd, unnoticed! I’m no one special,
            you know,” Her voice tingling with a sadness. “Close your eyes,”
            Emily, her tone softening. I’m trembling as I’m unable to make any
            jest of her words.
          </p>
          <br />
          <p>
            “I shouldn’t let someone order me when I’m not even sure who they
            are.” I said!
          </p>
          <p>
            “I’m not the kind of person you think I am either!!” For a moment, I
            hesitated, I wonder what she is talking about….
          </p>
          <EnhancedBlockQuote>
            “For countless nights, I’ve slinked into the floor and fused with
            shadows…”
          </EnhancedBlockQuote>
          <p>
            “Please dare me give two seconds, for these eyes are far too
            deprived of light, how can I not let go of what’s in front of me
            when I’ve losing grip on reality… I’m sure you’ll be gone in the
            morning when I wake up, I’ve forgotten sense of reality. I don’t
            know if I’m even real or not either, Emily.”
          </p>
          <EnhancedMarginNote side="right">
            A shared vulnerability
          </EnhancedMarginNote>
          <InteractiveFootnote
            note="Emily's confession reveals her own struggle with identity, mirroring the narrator's inner turmoil."
          >
            you are the only exception!!
          </InteractiveFootnote>
        </motion.div>
      </Section>

      <SectionDivider />

      {/* Final Confession */}
      <Section delay={1.6}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-lg leading-relaxed text-gray-800"
        >
          <p>“What do I owe myself? I’m scared! Scared to dig too deep into myself… If only I could do things differently… I’m scared, Emily”</p>
          <p>“You are the only exception… I don’t even know what normal means anymore… will things ever go back to normal?”</p>
          <br />
          <p>“You shouldn’t let someone do this if you’re not even sure who they are.” She responded. “I may not be the kind of person you think I am.”</p>
          <br />
          <p className="italic">Eyes to the wind and my miserable days are left behind… I’m ghosted, stuck decoding what she is referring to… I want to sleep quietly; somewhere absolutely no sound can reach …</p>
          <EnhancedMarginNote side="right">A silent yearning</EnhancedMarginNote>
          <hr />
          <br />
          <p className="italic">She whispers; over my senses… humming sound as gentle as the rain… there’s something about her; so strange the way her fingernails trembles over my dry skin … different timelines.</p>
          <br />
          <p className="italic">I don’t know…The dampness of my uniform’s hem, soaked by her sadness… The smell of naphthalene, clinging from her white suit… Her warm body pushing me backwards… A chill breeze of air with fragment smell of conditioner from her dyed hair… Suddenly, the sky seemed a bit closer as I’m getting lost in garden of her words… My heartbeat drives me mad. In the stillness of wishing what I want with me, and what I’ve lost… I’ve forgotten myself.</p>
          <EnhancedMarginNote side="right">A moment suspended</EnhancedMarginNote>
        </motion.div>
      </Section>

      <SectionDivider />

      {/* Climactic Moment */}
      <Section delay={1.8}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-lg leading-relaxed text-gray-800"
        >
          <p>“I’ve ruined so many things I’ve touched Emily. I’ve seen nightmares turning into reality.”</p>
          <p>“Emily, I’m not the kind of person you think I am either.”</p>
          <p>
            Emily, unbothered anticipating my every move, she moves closer. Her
            grips; strong against my bare hands, the wind seemed still as she
            leans forward, her lips brushing against mine in a gentle, a sudden
            kiss.
          </p>
          <EnhancedBlockQuote>
            “You idiot!” She whispers.
          </EnhancedBlockQuote>
          <EnhancedMarginNote side="right">A whispered truth</EnhancedMarginNote>
          <InteractiveFootnote
            note="The kiss marks a turning point, blending vulnerability with a fleeting sense of connection."
          >
            a sudden kiss
          </InteractiveFootnote>
        </motion.div>
      </Section>
    </ChapterLayout>
  );
}