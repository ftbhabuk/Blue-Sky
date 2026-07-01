"use client";

import ChapterLayout, {
  Section,
  EnhancedMarginNote,
  EnhancedBlockQuote,
  SectionDivider,
  InteractiveFootnote,
} from "@/components/ChapterLayout";
import { motion } from "framer-motion";

export default function ChapterEight() {
  return (
    <ChapterLayout
      chapterNumber={8}
      chapterTitle="No Longer a Human"
      previousChapter={7}
      soundMode="single"
      repeat={true}
      sounds={["/sounds/8.mp3"]}
    >
      {/* Opening Scene */}
      <Section delay={0.2}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
          <p className="text-lg leading-relaxed text-gray-800">Lisa’s shift changed weeks ago. I don’t ask why I haven’t seen her since — some doors close quieter than others.</p>
          <br />
          <p className="text-lg leading-relaxed text-gray-800">Lately, mornings arrive like accusations.</p>
          <p className="text-lg leading-relaxed text-gray-800">Every mundane task sits undone around me, patient as unpaid debts. Interactions with people have become rare — hell, I don’t remember the last time I spoke to anyone without calculating the words first. Everything is louder than the words I manage inside my head. From waking up to even having a coffee, I’ve somehow lost touch with the sequence of things. Normal seems too distant. And yet silence cuts straight through.</p>
          <p className="text-lg leading-relaxed text-gray-800">Everything is louder than it should be. The hallway. The hum of the ward. The sound of my own breathing, which I’ve started noticing too much.</p>
          <EnhancedMarginNote side="right">A quiet unraveling</EnhancedMarginNote>
        </motion.div>
      </Section>

      <SectionDivider />

      {/* Window Scene */}
      <Section delay={0.4}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
          <p className="text-lg leading-relaxed text-gray-800">I lean against the window with my meds in my hand — the prescribed kind now, counted out by someone else instead of me. The glass is cool. Outside — the city, the movement, the ordinary machinery of people. In here, me, and my reflection laid over all of it. Superimposed. Like I exist only as a layer over the real world, never quite in it.</p>
          <EnhancedBlockQuote>
            “I take the pill. Watch myself do it. 
            Two versions of the same gesture — one of them free.”
          </EnhancedBlockQuote>
          <p className="text-lg leading-relaxed text-gray-800 italic">I feel a certain kind of terror in the ritual now. Like performing something I no longer believe in. I’ve slowly become numb to the outside noise, and yet somehow every shortness of breath arrives like an emergency. I’ve lost count of the loops of the same song. Sleep doesn’t come the right way. This constant struggle to find some kind of relief has made a ruin of my nights.</p>
          {/* <EnhancedMarginNote side="right">Ritual without belief</EnhancedMarginNote> */}
        </motion.div>
      </Section>

      {/* <SectionDivider /> */}

      {/* The Form Begins */}
      <Section delay={0.6}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
          <p className="text-lg leading-relaxed text-gray-800">Now, I’m supposed to put these thoughts on a form.</p>
          <br />
          <p className="text-lg leading-relaxed text-gray-800">
            Across the circle,{" "}
            <InteractiveFootnote note="A first, unremarkable appearance — the recognition comes later, at the end of the hour.">
              a boy about my age
            </InteractiveFootnote>{" "}
            holds his pen like it might go off in his hand. He hasn’t written a word either.
          </p>
          {/* <p className="text-sm tracking-[0.3em] uppercase text-gray-500 italic text-center mt-4">The Conflicted</p> */}
        </motion.div>
      </Section>

      <SectionDivider />

      {/* Intake Form */}
      <Section delay={0.8}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
          {/* Intake form fields */}
          <div className="space-y-3 mt-4">
            <div className="border-b border-dotted border-gray-300 pb-0.5">
              <span className="text-sm tracking-[0.3em] uppercase text-gray-500 italic">Name</span>
            </div>
            <div className="border-b border-dotted border-gray-300 pb-0.5">
              <span className="text-sm tracking-[0.3em] uppercase text-gray-500 italic">Date of birth</span>
            </div>
            <div className="border-b border-dotted border-gray-300 pb-0.5">
              <span className="text-sm tracking-[0.3em] uppercase text-gray-500 italic">Reason for visit</span>
            </div>
          </div>

          <p className="text-sm tracking-[0.3em] uppercase text-gray-500 italic text-left mt-4">On a scale of one to ten—</p>
          <p className="text-lg leading-relaxed text-gray-800">I set the paper down. Look at the question. Pick the pen back up.</p>
          <div className="border-b border-dotted border-gray-300 pb-0.5 mt-3">
            <span className="text-sm tracking-[0.3em] uppercase text-gray-500 italic">—how often do you feel hopeless?</span>
          </div>
          <br />
          <p className="text-lg leading-relaxed text-gray-800 italic">
            Dear{" "}
            <InteractiveFootnote note="The imagined confidante the narrator has written to since childhood — equal parts diary and coping mechanism.">
              Silvy
            </InteractiveFootnote>
            ,
          </p>
          <p className="text-lg leading-relaxed text-gray-800 italic">The questions blur together. Another scale. Another checkbox. I’ve seen this before — not lived it, but seen it. On screens, in films. The compassionate lean. The deliberate pause. The room arranged to feel safe. I know the architecture of this before I even arrived.</p>
          <p className="text-lg leading-relaxed text-gray-800">But what if there was no event? What if it was just — everything. All the time. Slow. Quiet.</p>
          <EnhancedBlockQuote>
            “What if the violence was silence itself?”
          </EnhancedBlockQuote>
          {/* <p className="text-sm tracking-[0.3em] uppercase text-gray-500 italic text-center mt-4">The Pretense</p> */}
        </motion.div>
      </Section>

      <SectionDivider />

      {/* Dinner Table Flashback */}
      <Section delay={1.0}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
          <p className="text-sm tracking-[0.3em] uppercase text-gray-500 italic text-left mt-4">Describe the atmosphere of your home growing up.</p>
          <br />
          <p className="text-lg leading-relaxed text-gray-800">He didn’t need to hit anyone.</p>
          <p className="text-lg leading-relaxed text-gray-800">Dinner table. Age twelve. The sound of my own chewing fills the room. My mother’s fork frozen mid-air. My father’s jaw working slowly, his eyes flat and still. The vein in his temple. My sister not breathing. I stop chewing. We finish the meal without a word and call it a family.</p>
          <br />
          <p className="text-lg leading-relaxed text-gray-800 italic">Dear Silvy, why does it feel like I’m always doing something wrong, even when I’m doing nothing at all?</p>
          <EnhancedMarginNote side="right">A house without raised voices</EnhancedMarginNote>
        </motion.div>
      </Section>

      <SectionDivider />

      {/* Scripted Childhood + Confiscation */}
      <Section delay={1.2}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
          <p className="text-sm tracking-[0.3em] uppercase text-gray-500 italic text-left mt-4">Have you ever felt your life was decided for you?</p>
          <br />
          <p className="text-lg leading-relaxed text-gray-800">I stopped listening around fourteen.</p>
          <EnhancedBlockQuote>
            “You’ll be a doctor.” Age eight. Not a question — a fact, 
            delivered the way you’d say the sky is blue. 
            “You’ll join the debate team. You’ll take advanced mathematics. 
            You’ll attend this university. You’ll major in—”
          </EnhancedBlockQuote>
          <p className="text-lg leading-relaxed text-gray-800">My childhood was a script authored by someone else. I was only the actor, hitting marks, delivering lines, waiting for the director to call cut. The cameras never stopped rolling. Every dream I had was corrected: <em>that’s not practical. That’s not realistic. That’s just not right for you.</em></p>
          <p className="text-lg leading-relaxed text-gray-800">I learned to stop dreaming altogether.</p>
          <p className="text-lg leading-relaxed text-gray-800 italic">I didn’t know dreaming was supposed to be free until I’d already paid too much for thinking.</p>
          {/* <p className="text-sm tracking-[0.3em] uppercase text-gray-500 italic text-center mt-4">The Cost of Thoughts</p> */}

          <br />
          <p className="text-lg leading-relaxed text-gray-800">Age fifteen. My mother finds cigarettes in my room. She doesn’t confront me directly — that’s not how it works in our house. Instead, at dinner, she says casually: <em>I was cleaning your room today.</em> My stomach drops. <em>Found something interesting</em> — she slides the pack across the table, cutting her chicken with surgical precision. Marlboro Reds. Half empty.</p>
          <p className="text-lg leading-relaxed text-gray-800">My father’s voice goes quiet first. The dangerous kind.</p>
          <EnhancedBlockQuote>
            “What the fuck is this? You’re fifteen years old. 
            What tension do you have? What problems could you possibly have? 
            You live in a perfect world.”
          </EnhancedBlockQuote>
          <p className="text-lg leading-relaxed text-gray-800">My mother, almost crying: <em>We sacrifice everything. And you’re killing yourself for what? To rebel?</em></p>
          <p className="text-lg leading-relaxed text-gray-800">My sister stares at her plate.</p>
          <p className="text-lg leading-relaxed text-gray-800">I don’t defend myself. What would be the point.</p>
          <p className="text-lg leading-relaxed text-gray-800">They threw them away that night. I bought more the next day. Just hid them better.</p>
          {/* <p className="text-sm tracking-[0.3em] uppercase text-gray-500 italic text-center mt-4">The Confiscation</p> */}
        </motion.div>
      </Section>

      <SectionDivider />

      {/* Root Cause */}
      <Section delay={1.4}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
          <p className="text-sm tracking-[0.3em] uppercase text-gray-500 italic text-left mt-4">What do you believe is the root cause?</p>
          <br />
          <p className="text-lg leading-relaxed text-gray-800">I press the pen into the paper.</p>
          <p className="text-lg leading-relaxed text-gray-800">Not one thing. Everything. All the time. Slow. Quiet. A thousand mornings of being corrected into someone smaller. They didn’t break anything visible — nothing you could point to. Just erased. Carefully. Until I forgot I was supposed to exist as anything other than their version of me.</p>
          <p className="text-lg leading-relaxed text-gray-800">Age seventeen. Engineering. Not literature. Not anything resembling who I thought I might be, if someone had ever let me find out.</p>
          <EnhancedBlockQuote>
            “Make this family proud” — as if I hadn’t spent every year 
            of my life trying to do exactly that. As if their pride 
            wasn’t the cage I was already dying inside.
          </EnhancedBlockQuote>
          <p className="text-lg leading-relaxed text-gray-800">That night, three instead of one.</p>
          <p className="text-lg leading-relaxed text-gray-800 italic">Dear Silvy, I’m disappearing. Piece by piece. Day by day. Soon there won’t be anything left of me that’s actually me.</p>
          {/* <p className="text-sm tracking-[0.3em] uppercase text-gray-500 italic text-center mt-4">The Erasure</p> */}
        </motion.div>
      </Section>

      <SectionDivider />

      {/* Insomnia */}
      <Section delay={1.6}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
          <p className="text-sm tracking-[0.3em] uppercase text-gray-500 italic text-left mt-4">When did you first begin to feel this way?</p>
          <br />
          <p className="text-lg leading-relaxed text-gray-800">I developed insomnia around eighteen. Not the kind where you can’t fall asleep — the kind where sleep feels like surrendering the only control you have left.</p>
          <p className="text-lg leading-relaxed text-gray-800">I’d lie awake listening to them argue through the walls. Never screaming — screaming would have been too honest. Just low, venomous hissing. The sound of something rotting quietly, on schedule.</p>
          <EnhancedBlockQuote>
            “This is your fault. I gave up everything. Don’t you dare—”
          </EnhancedBlockQuote>
          <p className="text-lg leading-relaxed text-gray-800">I’d put in headphones. Loop the same song until the words lost meaning. Until I lost meaning.</p>
          <p className="text-lg leading-relaxed text-gray-800 italic">Dear Silvy, I’m afraid of my own voice. I’m afraid if I speak they’ll hear how hollow I am.</p>
          {/* <p className="text-sm tracking-[0.3em] uppercase text-gray-500 italic text-center mt-4">The Silencing</p> */}
        </motion.div>
      </Section>

      <SectionDivider />

      {/* Final Letter */}
      <Section delay={1.8}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
          <p className="text-lg leading-relaxed text-gray-800 italic">Dear Silvy,</p>
          <p className="text-lg leading-relaxed text-gray-800 italic">I don’t know what normal feels like anymore. I don’t know if I ever did or just performed it well enough that no one checked. I’ve lost count of the loops. My head is a room I can’t hear myself in anymore.</p>
          <p className="text-lg leading-relaxed text-gray-800 italic">Even ordinary things frighten me now. Mornings. Doorways. The idea of continuing.</p>
          <p className="text-lg leading-relaxed text-gray-800 italic">I’m scared that what’s keeping me here might be imaginary. I’m scared.</p>
          <EnhancedMarginNote side="right">The letters that never get sent</EnhancedMarginNote>
        </motion.div>
      </Section>

      <SectionDivider />

      {/* Closing Scene */}
      <Section delay={2.0}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
          <p className="text-lg leading-relaxed text-gray-800">The hour ends. Chairs scrape back.</p>
          <p className="text-lg leading-relaxed text-gray-800">The boy looks up briefly and our eyes meet — and there is something in that. A recognition without language, without history, without any of the paperwork.</p>
          <br />
          <p className="text-lg leading-relaxed text-gray-800">I fold the intake form in half. Slide it into my pocket.</p>
          <p className="text-lg leading-relaxed text-gray-800">I keep walking.</p>
          <br />
          <EnhancedBlockQuote>
            “I’m sorry for any way I might have hurt you. 
            But mostly, I’m sorry I couldn’t save myself.”
          </EnhancedBlockQuote>
          <p className="text-lg leading-relaxed text-gray-800 italic">The apology I owe to the child I used to be — the one who still believed dreaming was free.</p>
          {/* <p className="text-sm tracking-[0.3em] uppercase text-gray-500 italic mt-4">The Surrender</p> */}
        </motion.div>
      </Section>
    </ChapterLayout>
  );
}