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
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
          <p className="text-lg leading-relaxed text-gray-800">
            How would I describe last night? Dramatic, for sure. All those
            awkward interactions with Emily replayed in my mind, a mix of
            confusion and a strange comfort. Today, though, I had something else
            to focus on: getting my right-hand plaster removed. Lisa had just
            told me.
          </p>
          <EnhancedBlockQuote>
            &ldquo;At least that&rsquo;s some good news.&rdquo;
          </EnhancedBlockQuote>
          <p className="text-lg leading-relaxed text-gray-800">
            &ldquo;Are you being sarcastic or what?&rdquo; I asked, my voice
            laced with a bit of skepticism.
          </p>
          <p className="text-lg leading-relaxed text-gray-800">
            &ldquo;No, I&rsquo;m genuinely happy,&rdquo; She replied with a
            smile. She transferred me to another room and started prepping for
            my treatment.
          </p>
          <br />
          <p className="text-lg leading-relaxed text-gray-800">
            &quot;Hey,&quot; my voice barely above a whisper.
          </p>
          <p className="text-lg leading-relaxed text-gray-800">
            &quot;Hmm hm?&quot; her response soft, not looking at me at all.
          </p>
          <p className="text-lg leading-relaxed text-gray-800">
            &quot;Will it hurt?&quot; Such stupid question...
          </p>
          <p className="text-lg leading-relaxed text-gray-800">
            &quot;I haven&rsquo;t tried yet,&quot; That&rsquo;s not the kind of
            answer I expected from a nurse.
          </p>
          <p className="text-lg leading-relaxed text-gray-800">
            &quot;Hey! Come on,&quot; she laughed and reassured me,
            &quot;No, it won&rsquo;t. You&rsquo;ll be just fine.&quot;
          </p>
          <EnhancedMarginNote side="right">A small relief</EnhancedMarginNote>
        </motion.div>
      </Section>

      <SectionDivider />

      {/* Post-Surgery Scene */}
      <Section delay={0.4}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
          <p className="text-lg leading-relaxed text-gray-800">
            Finally, the removal of bandages went well, and I was able to move
            my hand freely. As I was in surgery, I missed the regular checkup
            and breakfast. Lisa&rsquo;s shift had already ended by the time I
            woke up. They had already transferred me back to my previous ward.
          </p>
          <br />
          <p className="text-lg leading-relaxed text-gray-800">
            The person next to me was waving with curiosity. I waved back.
            &quot;How did it go?&quot; he asked, probably already having asked
            the nurse about my surgery. I was a little surprised by his concern.
          </p>
          <p className="text-lg leading-relaxed text-gray-800">
            &quot;Better than I expected,&quot;
          </p>
          <EnhancedMarginNote side="left">
            Unexpected camaraderie
          </EnhancedMarginNote>
        </motion.div>
      </Section>

      <SectionDivider />

      {/* Ward Conversation */}
      <Section delay={0.6}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
          <p className="text-lg leading-relaxed text-gray-800">
            As usual, our conversation started randomly. &quot;So, why are you
            here?&quot; he asked.
          </p>
          <p className="text-lg leading-relaxed text-gray-800">
            &quot;You clearly can&rsquo;t see, right?&quot; I replied
            sarcastically, trying to deflect his curiosity. But the truth was, I
            didn&rsquo;t want to delve into my own story.
          </p>
          <br />
          <p className="text-lg leading-relaxed text-gray-800">
            &quot;You&rsquo;ve got an extra for me today?&quot; Of course, I was
            talking about the{" "}
            <InteractiveFootnote note="Cigarettes are a recurring motif, symbolizing a fleeting escape from the hospital's confines.">
              cigarettes
            </InteractiveFootnote>
            . He was the one who supplied me with one last night. I can&rsquo;t
            be seen lurking and searching for it.
          </p>
          <p className="text-lg leading-relaxed text-gray-800">
            &quot;A little,&quot; he said, casually passing me one.
          </p>
          <EnhancedMarginNote side="right">A shared vice</EnhancedMarginNote>
        </motion.div>
      </Section>

      <SectionDivider />

      {/* Evening Scene */}
      <Section delay={0.8}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
          <p className="text-lg leading-relaxed text-gray-800">
            The sun had already set, casting long shadows across the ward. The
            quiet had settled in, giving the place of a creepy vibe. If someone
            turned off these fluorescent bulbs, it would surely feel like a
            haunted house. The nurse&rsquo;s station was almost deserted,
            making it easy to slip unnoticed.
          </p>
          <br />
          <p className="text-lg leading-relaxed text-gray-800">
            I&rsquo;m at the top again, I am not sure what I am thinking but
            feel like I am expecting something, someone perhaps. A familiar face
            in the shadow, there she is; her silhouette outlined against the dim
            glow of the{" "}
            <InteractiveFootnote note="The city lights represent a world beyond the hospital, both alluring and unattainable.">
              city lights
            </InteractiveFootnote>
            .
          </p>
          <EnhancedMarginNote side="left">
            A haunting stillness
          </EnhancedMarginNote>
        </motion.div>
      </Section>

      <SectionDivider />

      {/* Rooftop Encounter */}
      <Section delay={1.0}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
          <p className="text-lg leading-relaxed text-gray-800">
            &ldquo;Oh! Aren&rsquo;t you going to try and jump off the roof
            today?&rdquo;
          </p>
          <br />
          <p className="text-lg leading-relaxed text-gray-800">
            Her tone light but with an undercurrent of something else concern
            perhaps, or curiosity. An awkward silence settled between us.
            &ldquo;Go on. I won&rsquo;t stop you!&rdquo; Her voice carrying a
            strange mix of challenge and indifference.
          </p>
          <p className="text-lg leading-relaxed text-gray-800">
            &ldquo;And why would you think of Mr nobody ha-ha&rdquo; With a bit
            of lifelessness, I responded.
          </p>
          <br />
          <p className="text-lg leading-relaxed text-gray-800">
            I laid, slowly next to the floor where she was sitting. I shuddered,
            against the gust of wind blowing against us, so cold: it could
            shiver my roots. Restless: my bones straining against the weight of
            silence. These arbitrary terms, oh such harshness! Deceiving
            sunshine, untouched shadows. How should I begin to explain.
          </p>
          <EnhancedBlockQuote>
            &ldquo;Emily, you&rsquo;re the only exception I&rsquo;ve have!!&rdquo;
          </EnhancedBlockQuote>
          <EnhancedMarginNote side="right">
            A chilling confession
          </EnhancedMarginNote>
        </motion.div>
      </Section>

      <SectionDivider />

      {/* Emotional Exchange */}
      <Section delay={1.2}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
          <p className="text-lg leading-relaxed text-gray-800">
            &ldquo;Hey!&rdquo; I murmured, subtly trying to catch her eyes.
          </p>
          <p className="text-lg leading-relaxed text-gray-800">
            &ldquo;Naked truth?&rdquo; Her expression, unreadable. The question
            hung in the air. I don&rsquo;t know what she was expecting me to
            say. I&rsquo;m even unsure of myself.
          </p>
          <br />
          <p className="text-lg leading-relaxed text-gray-800">
            &ldquo;That night I thought giving up. If you weren&rsquo;t there I
            surely would have jumped.&rdquo;
          </p>
          <br />
          <p className="text-lg leading-relaxed text-gray-800">
            I reached my hands into my pockets, grabbed barely squeezed
            cigarette, my hands barely shaking, holding midway in the air I lit
            it. As I exhaled, the first puff of smoke escaping my lungs,
          </p>
          <p className="text-lg leading-relaxed text-gray-800">
            &ldquo;You know, I feel like I have nothing to lose.&rdquo; Her
            expression, unreadable again.
          </p>
          <p className="text-lg leading-relaxed text-gray-800">
            &ldquo;You know, you are kind of a mystery, Emily!&rdquo;
          </p>
          <br />
          <p className="text-lg leading-relaxed text-gray-800">
            &ldquo;Says the guy who wanted to jump off yesterday!&rdquo; She
            casually laughed off my seriousness.
          </p>
          <p className="text-lg leading-relaxed text-gray-800">
            I wasn&rsquo;t looking for any kind of agony or something, but I
            feel like being honest at once. &ldquo;Naked truth?&rdquo; I
            whispered; my voice barely heard over the wind as I tried to dismiss
            this gloominess.
          </p>
          <EnhancedMarginNote side="right">A fragile honesty</EnhancedMarginNote>
        </motion.div>
      </Section>

      <SectionDivider />

      {/* Emily's Revelation */}
      <Section delay={1.4}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
          <p className="text-lg leading-relaxed text-gray-800">
            &ldquo;I feel like a face in the crowd, unnoticed! I&rsquo;m no one
            special, you know,&rdquo; Her voice tingling with a sadness.
            &ldquo;Close your eyes,&rdquo; Emily, her tone softening. I&rsquo;m
            trembling as I&rsquo;m unable to make any jest of her words.
          </p>
          <br />
          <p className="text-lg leading-relaxed text-gray-800">
            &ldquo;I shouldn&rsquo;t let someone order me when I&rsquo;m not
            even sure who they are.&rdquo; I said!
          </p>
          <p className="text-lg leading-relaxed text-gray-800">
            &ldquo;I&rsquo;m not the kind of person you think I am either!!&rdquo; For
            a moment, I hesitated, I wonder what she is talking about&hellip;.
          </p>
          <EnhancedBlockQuote>
            &ldquo;For countless nights, I&rsquo;ve slinked into the floor and
            fused with shadows&hellip;&rdquo;
          </EnhancedBlockQuote>
          <p className="text-lg leading-relaxed text-gray-800">
            &ldquo;Please dare me give two seconds, for these eyes are far too
            deprived of light, how can I not let go of what&rsquo;s in front of
            me when I&rsquo;ve losing grip on reality&hellip; I&rsquo;m sure
            you&rsquo;ll be gone in the morning when I wake up, I&rsquo;ve
            forgotten sense of reality. I don&rsquo;t know if I&rsquo;m even
            real or not either, Emily.&rdquo;
          </p>
          <EnhancedMarginNote side="right">
            A shared vulnerability
          </EnhancedMarginNote>
          <InteractiveFootnote note="Emily's confession reveals her own struggle with identity, mirroring the narrator's inner turmoil.">
            you are the only exception!!
          </InteractiveFootnote>
        </motion.div>
      </Section>

      <SectionDivider />

      {/* Final Confession */}
      <Section delay={1.6}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
          <p className="text-lg leading-relaxed text-gray-800">
            &ldquo;What do I owe myself? I&rsquo;m scared! Scared to dig too
            deep into myself&hellip; If only I could do things differently&hellip;
            I&rsquo;m scared, Emily&rdquo;
          </p>
          <p className="text-lg leading-relaxed text-gray-800">
            &ldquo;You are the only exception&hellip; I don&rsquo;t even know
            what normal means anymore&hellip; will things ever go back to
            normal?&rdquo;
          </p>
          <br />
          <p className="text-lg leading-relaxed text-gray-800">
            &ldquo;You shouldn&rsquo;t let someone do this if you&rsquo;re not
            even sure who they are.&rdquo; She responded. &ldquo;I may not be
            the kind of person you think I am.&rdquo;
          </p>
          <br />
          <p className="text-lg leading-relaxed text-gray-800 italic">
            Eyes to the wind and my miserable days are left behind&hellip; I&rsquo;m
            ghosted, stuck decoding what she is referring to&hellip; I want to
            sleep quietly; somewhere absolutely no sound can reach &hellip;
          </p>
          <EnhancedMarginNote side="right">A silent yearning</EnhancedMarginNote>
          <hr />
          <br />
          <p className="text-lg leading-relaxed text-gray-800 italic">
            She whispers; over my senses&hellip; humming sound as gentle as the
            rain&hellip; there&rsquo;s something about her; so strange the way
            her fingernails trembles over my dry skin &hellip; different
            timelines.
          </p>
          <br />
          <p className="text-lg leading-relaxed text-gray-800 italic">
            I don&rsquo;t know&hellip;The dampness of my uniform&rsquo;s hem,
            soaked by her sadness&hellip; The smell of naphthalene, clinging from
            her white suit&hellip; Her warm body pushing me backwards&hellip; A
            chill breeze of air with fragment smell of conditioner from her dyed
            hair&hellip; Suddenly, the sky seemed a bit closer as I&rsquo;m
            getting lost in garden of her words&hellip; My heartbeat drives me
            mad. In the stillness of wishing what I want with me, and what
            I&rsquo;ve lost&hellip; I&rsquo;ve forgotten myself.
          </p>
          <EnhancedMarginNote side="right">
            A moment suspended
          </EnhancedMarginNote>
        </motion.div>
      </Section>

      <SectionDivider />

      {/* Climactic Moment */}
      <Section delay={1.8}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
          <p className="text-lg leading-relaxed text-gray-800">
            &ldquo;I&rsquo;ve ruined so many things I&rsquo;ve touched Emily.
            I&rsquo;ve seen nightmares turning into reality.&rdquo;
          </p>
          <p className="text-lg leading-relaxed text-gray-800">
            &ldquo;Emily, I&rsquo;m not the kind of person you think I am
            either.&rdquo;
          </p>
          <p className="text-lg leading-relaxed text-gray-800">
            Emily, unbothered anticipating my every move, she moves closer. Her
            grips; strong against my bare hands, the wind seemed still as she
            leans forward, her lips brushing against mine in a gentle, a sudden
            kiss.
          </p>
          <EnhancedBlockQuote>
            &ldquo;You idiot!&rdquo; She whispers.
          </EnhancedBlockQuote>
          <EnhancedMarginNote side="right">A whispered truth</EnhancedMarginNote>
          <InteractiveFootnote note="The kiss marks a turning point, blending vulnerability with a fleeting sense of connection.">
            a sudden kiss
          </InteractiveFootnote>
        </motion.div>
      </Section>
    </ChapterLayout>
  );
}