"use client";

import ChapterLayout, {  Section, EnhancedMarginNote, EnhancedBlockQuote } from "@/components/ChapterLayout";
import { CloudBackground } from "@/app/components/cloud-background";
export default function ChapterOne() {
  
  return (
    <ChapterLayout
      chapterNumber={1}
      chapterTitle="Chaos"
      // backgroundElements={<CloudBackground />}
      // gradientColors={["from-blue-200", "via-purple-200", "to-indigo-200"]} // Cool, chaotic gradient
      // backgroundColorStops={["#f0f7ff", "#e6e0fa", "#e0e7ff", "#f0f7ff"]} // Subtle blue-purple shifts
    >
      {/* Opening Section */}
      <Section delay={0.2}>
        <p className="text-lg leading-relaxed text-gray-800">
          The world before me, sober and still, offers me no place to go. I
          don't fool myself-- I'm a heartache from the moment I'm born. My
          heart, frozen, as I find the will to forget. Somewhere out there,
          I exist. Somewhere. I'm uncertain, like a rose pale and dying,
          dropping its petals. This world before me…. Is unsure. I'm living
          too much inside of myself again.
        </p>
        <EnhancedMarginNote side="right">
          Living too much inside myself again
        </EnhancedMarginNote>
        <EnhancedBlockQuote>
          I wonder: if I dismantle my horizon, will my walls crumble? If I
          bend these fences and scrape off layers of my cocoon….
        </EnhancedBlockQuote>
      </Section>

      {/* Hospital Scene */}
      <Section delay={0.4}>
        <p className="text-lg leading-relaxed text-gray-800">
          A haunting voice echoes around my ears as I impulsively open my
          eyes. Murmuring voices blend into the background noise. "He'll be
          alright." The room swims into focus, revealing some familiar faces,
          their expressions soaked in sorrow. I have no Idea what's going on.
          Where I am? Who are they? I feel incompetent. Lost. All at once.
          My mind feels foggy, detached. It's all a blur. I remember feeling
          overwhelmed, and everything just spiralled out of control.
        </p>
        <EnhancedMarginNote side="left">
          Everything spiralled out of control
        </EnhancedMarginNote>
      </Section>

      {/* Clinical Environment */}
      <Section delay={0.6}>
        <p className="text-lg leading-relaxed text-gray-800">
          Gradually, I realise I'm in a clinical ward. My body aches and
          stings, as I'm drenched in medical solution. I can hardly feel my
          limbs… The smell of hospital floors—bleach and antiseptic—irritates
          me. I glanced at myself: bandages wrap all around my body, laid
          lifelessly on the bed, I tried to move but can't. Maybe I'm too
          feeble. I have never been physically strong. Throughout my
          childhood, I rarely went outside. Even in schools, I used to slip
          in and out of PE classes.
        </p>
        <EnhancedMarginNote side="right">
          Never been physically strong
        </EnhancedMarginNote>
      </Section>

      {/* Nurse Interaction */}
      <Section delay={0.8}>
        <p className="text-lg leading-relaxed text-gray-800">
          The door creaks open, and a nurse walks in, moving slowly, as if
          she's in no hurry. "What's the problem with these people?" I mutter
          to myself. "How are you feeling now?" she asks, her tone familiar
          as if she knows me. I have no idea how long I've been here. Maybe
          she knows, but she keeps inspecting my bandages making me
          uncomfortable. "A little bit better, I guess," I reply. She
          remains neutral and just walks away. "Well, that's awkward," I said
          to myself.
        </p>
        <EnhancedMarginNote side="left">
          How long have I been here?
        </EnhancedMarginNote>
      </Section>

      {/* Family Scene */}
      <Section delay={1.0}>
        <h3 className="text-2xl text-gray-700 mb-6">
          Am I wishing for less time...
        </h3>
        <p className="text-lg leading-relaxed text-gray-800">
          As the door swings open, and suddenly, a flood of people rushes in.
          "Are you alright, my dear? Are you okay? Why would you do such
          things to us? Have you lost your mind? Why won't you ever think of
          us?" I question myself--Am I wishing for less time… I freeze,
          overwhelmed. They're my parents, but I don't utter a single word.
          They stare at me as if this is a scene from a movie. I turn my head
          awkwardly to the white pillowcase and rest my head on it. "He was
          never like this. What is wrong with him?" I hear them complain.
        </p>
        <EnhancedMarginNote side="right">
          A scene from a movie
        </EnhancedMarginNote>
      </Section>

      {/* Final Thoughts */}
      <Section delay={1.2}>
        <p className="text-lg leading-relaxed text-gray-800">
          I'm so congested, my mind drifts away. I can barely move. I hate
          myself…Have I decided not to expect too much at the end of the
          world? Time afire against my will....my lungs get drunken on
          flood...my feet petrified...
        </p>
        <EnhancedBlockQuote>
          Can I wait until my heart doesn't swells anymore; in random
          places...Will I collapse inside as my world is...
        </EnhancedBlockQuote>
        <p className="text-lg leading-relaxed text-gray-800">
          Can I stay--still and watch again how the rain drips at the ending
          tip of the roof and awaits its blue sky?
        </p>
        <EnhancedMarginNote side="left">
          Awaiting its blue sky
        </EnhancedMarginNote>
      </Section>
    </ChapterLayout>
  );
}