"use client";

import ChapterLayout, {  Section, EnhancedMarginNote, EnhancedBlockQuote } from "@/components/ChapterLayout";
import { CloudBackground } from "@/app/components/cloud-background";


// import { ChapterLayout, Section, EnhancedMarginNote, EnhancedBlockQuote } from "@/app/components/ChapterLayout";
// import { HospitalBackground } from "@/app/components/hospital-background"; // Placeholder for a hospital-themed background

export default function ChapterTwo() {
  return (
    <ChapterLayout
      chapterNumber={2}
      chapterTitle="Liar"
    //   backgroundElements={<HospitalBackground />} // Adjust this later if you have a specific component
      gradientColors={["from-gray-100", "via-blue-100", "to-gray-200"]} // Placeholder: muted hospital tones
      backgroundColorStops={["#f7f7f7", "#e8ecef", "#dfe6e9", "#f7f7f7"]} // Subtle sterile shifts
    >
      {/* Wake-Up Scene */}
      <Section delay={0.2}>
        <p className="text-lg leading-relaxed text-gray-800">
          The room wakes up, slowly the hum of machinery and soft footsteps blending into a symphony of monotony. I lie here, feeling a dull ache in my body, each breath a reminder of my fragility. Yesterday passed in a haze: a blur of voices, faces, and questions I don’t have answers to. The clock reads 7 AM. I stir, feeling the weight of another sleepless night. How can one sleep with these relentless fluorescent lights glaring down, turning night into day?
        </p>
        <EnhancedMarginNote side="right">
          Relentless fluorescent lights
        </EnhancedMarginNote>
      </Section>

      {/* Nurse Interaction */}
      <Section delay={0.4}>
        <p className="text-lg leading-relaxed text-gray-800">
          The door creaks open, a different nurse walks in, her steps brisk and purposeful. She’s new, unfamiliar, and I watch her with cautious curiosity. “Good morning!” her voice bright but impersonal. “Time for breakfast.” I glance at the tray she sets beside me. It’s the same unappetizing mush. I poke at it with a spoon, the smell turning my stomach. I have no appetite, but I force a few bites down. The food tastes like cardboard, and I quickly give up and push it away.
        </p>
        <EnhancedMarginNote side="left">
          Unappetizing mush
        </EnhancedMarginNote>
      </Section>

      {/* Inner Reflection */}
      <Section delay={0.6}>
        <p className="text-lg leading-relaxed text-gray-800">
          Why am I feeling surreal? This intrusion of the outside world slips into the sterile bubble of my mind. I wonder—my words: balm with restless monotony. I’m feeling emptier… Elusive time? Perhaps a distant dream, I’m unanswered!
        </p>
        <EnhancedBlockQuote>
          A knock on the door jolts me back to the present.
        </EnhancedBlockQuote>
      </Section>

      {/* Lisa’s Visit */}
      <Section delay={0.8}>
        <p className="text-lg leading-relaxed text-gray-800">
          It’s Lisa, her smile a welcome sight. “Hey, how’s it going?” her voice warm and soothing. I manage a small smile. “Could be worse.” She laughs softly, pulling up a chair next to my bed. “That’s the spirit.” For a moment, we sit in comfortable silence. Her presence is calming, a small island of normalcy in this sea of chaos. I want to say something, to ask her about her day, her life, but the words won’t come.
        </p>
        <EnhancedMarginNote side="right">
          A small island of normalcy
        </EnhancedMarginNote>
      </Section>

      {/* Lisa’s Exit */}
      <Section delay={1.0}>
        <p className="text-lg leading-relaxed text-gray-800">
          “Well, who would have thought you’d be good with words,” she laughs, the sound light and teasing as she walks away. I watch her go, feeling a strange mix of relief and regret. Maybe I was becoming too formal, too stiff.
        </p>
      </Section>

      {/* Mir Introduction */}
      <Section delay={1.2}>
        <p className="text-lg leading-relaxed text-gray-800">
          I sense eyes on me and turn to see the guy in the next bed watching us. His legs are in casts, propped up awkwardly. He has that look of someone who’d been through hell and was still trying to make sense of it. “What’s your name?” I ask, more out of politeness than genuine interest. But in this sterile prison, even small talk feels like a lifeline. He hesitates, then offers a faint smile. “It’s Mir. And you?” “…..,” I reply, the name feeling strange on my tongue, like it belongs to someone else. We lapse into a comfortable silence, each adrift in our own thoughts.
        </p>
        <EnhancedMarginNote side="left">
          A lifeline in a sterile prison
        </EnhancedMarginNote>
      </Section>

      {/* Final Reflection */}
      <Section delay={1.4}>
        <p className="text-lg leading-relaxed text-gray-800">
          I’m lost in an abyss again… What do I owe myself? I’m trying, trying to get somewhere: to travel even if it’s just in my mind… I’ve lost the touch… I’ve lost the sense of a flower… I can hardly hear the waves or feel the sand… I’m dreaming, dreaming of a better place…
        </p>
        <EnhancedBlockQuote>
          Here we are, I’m sure time will eventually catch us… and I’ll finally get to thank you, though I’m on a sailboat, slowly floating nowhere, hoping someday I’ll wash up on someone else’s shore.
        </EnhancedBlockQuote>
      </Section>
    </ChapterLayout>
  );
}