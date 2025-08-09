"use client";

import ChapterLayout, {
  Section,
  EnhancedMarginNote,
  EnhancedBlockQuote,
  SectionDivider,
  InteractiveFootnote,
} from "@/components/ChapterLayout";
import { motion } from "framer-motion";
import { Caveat } from "next/font/google";

const caveat = Caveat({ subsets: ["latin"] });

// New LetterSection component for the letter to Silvy
function LetterSection({ children, delay }: { children: React.ReactNode; delay: number }) {
  return (
    <motion.div
      className="mb-16 p-8 rounded-lg shadow-lg border border-blue-200/50"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay }}
      style={{ fontFamily: caveat.style.fontFamily, fontSize: "1.2rem", lineHeight: "1.8rem", background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)" }}
    >
      <div className="italic text-gray-800 max-w-3xl mx-auto">
        {children}
      </div>
    </motion.div>
  );
}

export default function ChapterFive() {
  return (
    <ChapterLayout
      chapterNumber={5}
      chapterTitle="Unravelled Nights"
      previousChapter={4}
      soundMode="single"
      repeat={true}
      sounds={["/sounds/5.mp3"]}
    >
      {/* Opening Reflection */}
      <Section delay={0.2}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
          <p className="text-lg leading-relaxed text-gray-800">
            If life were a boat, I was never the rudder. From unexpected twists,
            I&rsquo;ve always found myself in the middle of chaos. But yesterday
            was different, different in a sense I have never felt. Different in
            a sense there I was calm. Different&hellip;
          </p>
          <br />
          <p className="text-lg leading-relaxed text-gray-800">
            This habit, I&rsquo;ve developed myself wanting to share my
            feelings behind the closed pages from since I was younger. Whenever
            I&rsquo;ve felt overwhelmed or inadequate I tend to write. From the
            day of my parents arguing in the basement, to the day my whole world
            collapsing, I&rsquo;ve always written for{" "}
            <InteractiveFootnote note="Silvy is an imagined confidante, a vessel for the narrator's deepest fears and desires, possibly a manifestation of their inner demons.">
              Silvy
            </InteractiveFootnote>
            . Yes, that&rsquo;s whom I&rsquo;m addressing all my feelings to.
          </p>
          <br />
          <p className="text-lg leading-relaxed text-gray-800">
            It&rsquo;s almost time, she is always troubled, promising me to heal
            everything. She tries to dissipate my anxiety and promises to heal
            everything. With each passing day &ldquo;Silvy&rdquo; has something
            new to offer. She knows everything about me, my problems, my
            worries, my difficulties, my troubles, all my dilemmas, everything,
            inside out, she knows me.
          </p>
          <EnhancedMarginNote side="left">A fragile muse</EnhancedMarginNote>
        </motion.div>
      </Section>

      <SectionDivider />

      {/* Letter to Silvy */}
      <LetterSection delay={0.4}>
        <p className="text-lg leading-relaxed text-gray-800">Dear Silvy,</p>
        <br />
        <p className="text-lg leading-relaxed text-gray-800">
          There&rsquo;s something uncanny about &ldquo;Emily&rdquo;. She keeps
          talking about me but never reveals herself, it seems she likes to
          dwell in the shadows, like an ally of darkness, much like you.
        </p>
        <p className="text-lg leading-relaxed text-gray-800">
          She is adorned with murk; her face resembles something far greater,
          perhaps a saint? A saint who knows how to be lost! Instead of
          searching for light she embraces my night. Is there a favour I need in
          return? Perhaps, I may never know.
        </p>
        <br />
        <EnhancedBlockQuote>
          &ldquo;No, I deny it.&rdquo;
        </EnhancedBlockQuote>
        <p className="text-lg leading-relaxed text-gray-800">
          But I do realise my eyes do lighten up whenever I see her. She
          doesn&rsquo;t need to know, either. Some things are better left unsaid
          than ruined. There&rsquo;s more than enough reason for me to cherish
          her. No, I don&rsquo;t need a reason&mdash;I just do!
        </p>
        <p className="text-lg leading-relaxed text-gray-800">
          There is no reason for me to get hold onto her! I like the way she is,
          mysterious!
        </p>
        <EnhancedMarginNote side="right">A shadowed allure</EnhancedMarginNote>
        <br />
        <p className="text-lg leading-relaxed text-gray-800">
          I&rsquo;m hearing the{" "}
          <InteractiveFootnote note="The bells symbolize an ambiguous call, possibly to hope, despair, or a ritualistic moment, grounding the narrator's fleeting thoughts.">
            bells
          </InteractiveFootnote>{" "}
          again. I wonder if it is a church, a wedding, perhaps a cemetery...
        </p>
        <p className="text-lg leading-relaxed text-gray-800">
          Maybe I&rsquo;ve skipped my supplements... I&rsquo;m too fragile to
          keep track of my meds...
        </p>
        <br />
        <p className="text-lg leading-relaxed text-gray-800">
          Why must I lay here awake when I could be dreaming of your face...
          &quot;where&rsquo;s my Xanax?&quot; I question myself.
        </p>
        <hr />
        <br />
        <p className="text-lg leading-relaxed text-gray-800">
          I&rsquo;m stomping my feet again, this symphonia... will I ever see
          you again? I&rsquo;m scared, scared of this night, scared of how you
          might have portrayed me. I&rsquo;m scared that I might not wake up
          tomorrow and forget everything. I&rsquo;m scared, scared that you
          might have been just my illusion after all. I&rsquo;m scared I might
          forget the thing that&rsquo;s keeping me alive. I&rsquo;m afraid,
          &ldquo;Silvy&rdquo;, am I daydreaming?
        </p>
        <EnhancedMarginNote side="left">Whispers of despair</EnhancedMarginNote>
        <br />
        <p className="text-lg leading-relaxed text-gray-800">
          I hope there is nothing as of empty dreams, for I crave the touch of
          your wonders, the sense of silence over my dry skin... I want my
          senses to be drowned over your beauty... Unable to depict you into
          words, I desire to be splashed by your fragrance and burn my senses in
          the aftermath. I despair for intimacy, your impeccable touch...I&rsquo;m
          ashamed of the misery that flows through my veins, for I want them to
          be frozen with every mention of your presence. I want to be brainwashed
          by the sprout of your last kiss...For the haste to have you, I want to
          be the curse that pricked your fingers... I want you to be the home
          I&rsquo;m afraid to even think of...For I want my veins to be clunked
          off your residue and reign my heart... For I want you to be enemy of
          my weakness and yet overflow my void&hellip;
        </p>
        <br />
        <p className="text-lg leading-relaxed text-gray-800">
          I&rsquo;m afraid I&rsquo;d cling to you...Impatience seething through
          the coarseness of stone, I want to follow your footsteps; dance over
          crystal balls, kiss till your collarbone rusts and my lips decay...
        </p>
        <EnhancedBlockQuote>
          &ldquo;In morning, I&rsquo;d wake up on the floor, bedsheets stained
          with red wine secretes...&rdquo;
        </EnhancedBlockQuote>
        <p className="text-lg leading-relaxed text-gray-800">
          and settle in silence of your dead incenses...
        </p>
        <br />
        <p className="text-lg leading-relaxed text-gray-800">
          Time bounding over silver clouds, there&rsquo;s something about you;
          under your gaze like how I&rsquo;ll adore your every growing
          curve...and linger to taste your darkness&rsquo; tongue...
        </p>
        <p className="text-lg leading-relaxed text-gray-800">
          Something so dim, so obscure...you&rsquo;re my only clarity, darling...
          you&rsquo;re my fatal rendezvous, my safe zone.
        </p>
        <EnhancedBlockQuote>
          &ldquo;You&rsquo;re my fatal rendezvous&rdquo;
        </EnhancedBlockQuote>
        <p className="text-lg leading-relaxed text-gray-800">
          I&rsquo;ll memorize you, with every rambling of my insomnia mind,
          mimic every move on our way to destruction&mdash;sinking us...I&rsquo;ll
          wait, for every star to fall apart&hellip;till I might not wake up.
        </p>
        <EnhancedMarginNote side="right">A doomed devotion</EnhancedMarginNote>
      </LetterSection>

      <SectionDivider />
    </ChapterLayout>
  );
}