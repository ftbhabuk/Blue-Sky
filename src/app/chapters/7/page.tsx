"use client";

import ChapterLayout, {
  Section,
  EnhancedMarginNote,
  EnhancedBlockQuote,
  SectionDivider,
  InteractiveFootnote,
} from "@/components/ChapterLayout";
import { motion } from "framer-motion";

export default function ChapterSeven() {
  return (
    <ChapterLayout
      chapterNumber={7}
      chapterTitle="The Place Dreams Dare Not Speak"
      previousChapter={6}
      soundMode="single"
      repeat={true}
      sounds={["/sounds/7.mp3"]}
    >
      {/* Silvy's Whisper Scene */}
      <Section delay={0.2}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
          <p className="text-lg leading-relaxed text-gray-800">Somewhere, there’s a stairway leading to the basement of another world. Silvy insists, urging me again and again, her voice a whisper in the wind, a siren’s call I can’t seem to resist. She promises that everything I wish for will come true there—things I’ve never even dared to imagine.</p>
          <br />
          <p className="text-lg leading-relaxed text-gray-800 italic">A place: where silence reigns, unbroken by the rumble of footsteps, where the walls are dyed in hues of pink with no shadows to linger. A place where you can hold sunlight in your hands and tuck it safely into your pillowcase. A place with no fireflies or shooting stars and yet as intoxicating as the first shot of espresso.</p>
          <EnhancedBlockQuote>
            “A place where rain pours endlessly, 
            washing away desires 
            and leaving behind gentle waves under the moonlit sky…”
          </EnhancedBlockQuote>
          <p className="text-lg leading-relaxed text-gray-800 italic">A place where you could lie awake like the sand on the shore, forever still—frozen.</p>
          <EnhancedMarginNote side="right">A dreamlike promise</EnhancedMarginNote>
        </motion.div>
      </Section>

      <SectionDivider />

      {/* Ethereal Description Scene */}
      <Section delay={0.4}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
          <p className="text-lg leading-relaxed text-gray-800">A place: where, with the weaver’s passage of time, melody soothes, and you become as fleeting as morning dew on autumn leaves, each moment a tender firewall. A place that feels like the edge of existence, where you could be your own northern star and yet escape as far as you please.</p>
          <br />
          <p className="text-lg leading-relaxed text-gray-800 italic">A place without the misery of Mondays, where you could be your favorite cookie. A place where you can scrawl across the margins and adore every ink drop freely in an endless bypass. A place where you could embody the warmth of the sun and still long for the soft sensation of winter baths.</p>
          <EnhancedMarginNote side="left">An unattainable haven</EnhancedMarginNote>
          <InteractiveFootnote
            note="The description of this place reflects the narrator’s yearning for escape, a sanctuary from their inner turmoil."
          >
            an endless bypass
          </InteractiveFootnote>
          <p className="text-lg leading-relaxed text-gray-800">But does such a place truly exist?</p>
        </motion.div>
      </Section>

      <SectionDivider />

      {/* Balcony Scene */}
      <Section delay={0.6}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
          <p className="text-lg leading-relaxed text-gray-800">The night is still, yet the city beneath me thrums with a quiet, restless energy. I stand by the balcony wall, my shirt tossed aside, the cold air seeping into my skin.</p>
          <p className="text-lg leading-relaxed text-gray-800">“I feel like taking a blunt today,” I say to myself. I look out over the lights below, flickering like distant stars, and try to lose myself in the vastness of it all.</p>
          <EnhancedBlockQuote>
            “The truth is I’m hollow inside.”
          </EnhancedBlockQuote>
          <p className="text-lg leading-relaxed text-gray-800">But the darkness has a way of amplifying thoughts, making them louder, clearer.</p>
          <EnhancedMarginNote side="right">A raw confession</EnhancedMarginNote>
        </motion.div>
      </Section>

      <SectionDivider />

      {/* Lisa’s Entrance Scene */}
      <Section delay={0.8}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
          <p className="text-lg leading-relaxed text-gray-800">Then, amidst my thoughts, Lisa’s voice cuts through the quiet—sharp and teasing.</p>
          <p className="text-lg leading-relaxed text-gray-800">“I’m going to push you off here myself, how arousing and frustrating.”</p>
          <br />
          <p className="text-lg leading-relaxed text-gray-800">I turn to look at her and slip my shirt back on. The moonlight paints her in hues of mystery, her eyes glinting with a mixture of mischief and something else, something unreadable.</p>
          <p className="text-lg leading-relaxed text-gray-800">She’s the kind of beautiful that hurts to look at for too long, like staring directly at the sun. Sweet and alluring, aloof yet truly gentle.</p>
          <EnhancedMarginNote side="left">A magnetic presence</EnhancedMarginNote>
          <p className="text-lg leading-relaxed text-gray-800">But it isn’t just her beauty that gets to me—it’s the way she sees through the walls I’ve built, the way she touches my world without even laying a finger on it.</p>
        </motion.div>
      </Section>

      <SectionDivider />

      {/* Therapy Discussion Scene */}
      <Section delay={1.0}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
          <p className="text-lg leading-relaxed text-gray-800">She smiles, her tone softer, almost tender. “You know,” she whispers, “naked truth.”</p>
          <br />
          <p className="text-lg leading-relaxed text-gray-800">I hesitate, uncertain how to respond. But this is Lisa—I shouldn’t have to explain myself.</p>
          <p className="text-lg leading-relaxed text-gray-800">“I finally joined therapy,” I say, feigning nonchalance. “It wasn’t my choice, really. Family and the hospital, they insisted.”</p>
          <br />
          <p className="text-lg leading-relaxed text-gray-800">She nods, her gaze unwavering. “And how’s that going for you? Have you started being honest with yourself?”</p>
          <p className="text-lg leading-relaxed text-gray-800">I toss my hands in the air, glancing away. “I’m trying.”</p>
          <EnhancedBlockQuote>
            “Trying…”
          </EnhancedBlockQuote>
          <p className="text-lg leading-relaxed text-gray-800 italic">I let the word linger. It’s like chasing echoes; each step forward only makes the silence louder. When did I lose that? When did the world turn from a symphony to a single, drawn-out note?</p>
          <EnhancedMarginNote side="right">A fleeting effort</EnhancedMarginNote>
        </motion.div>
      </Section>

      <SectionDivider />

      {/* Lisa’s Comfort Scene */}
      <Section delay={1.2}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
          <p className="text-lg leading-relaxed text-gray-800">Lisa steps closer, her voice barely above a whisper. “I want your naked truth,” she says, softly.</p>
          <br />
          <p className="text-lg leading-relaxed text-gray-800">For a moment, I freeze. The air between us thickens, unspoken tension swirling in the silence.</p>
          <p className="text-lg leading-relaxed text-gray-800">She reaches for the hem of my shirt, slowly pulling it off and letting it fall to the ground. Her gaze traces over the scars marking my skin, her fingers trembling as they graze the edges.</p>
          <br />
          <EnhancedBlockQuote>
            “You’re going to be alright… 
            It’s just a stumble, 
            like tripping over a stone in the street.”
          </EnhancedBlockQuote>
          <p className="text-lg leading-relaxed text-gray-800">“It’s not a big deal at all. The place you’re headed… it’s far beyond this, right? You’ll be fine—you’ll get back on your feet and start walking again… before you know it.”</p>
          <p className="text-lg leading-relaxed text-gray-800">Her hands barely hold me, her eyes misty with the weight of her words.</p>
          <EnhancedMarginNote side="left">A gentle reassurance</EnhancedMarginNote>
        </motion.div>
      </Section>

      <SectionDivider />

      {/* Emotional Confession Scene */}
      <Section delay={1.4}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
          <p className="text-lg leading-relaxed text-gray-800">“Don’t be this filthy. You’re such an idiot… Why do this to yourself?” Lisa’s voice trembles with concern.</p>
          <br />
          <p className="text-lg leading-relaxed text-gray-800 italic">If only it were that simple. If only I could alter the way my heart feels. It would make everything easier. Maybe then, I wouldn’t just talk—I’d actually mean something to someone.</p>
          <br />
          <p className="text-lg leading-relaxed text-gray-800">I sigh, feeling the weight of it all pressing down. “Yes, if only time could stand still right now…”</p>
          <p className="text-lg leading-relaxed text-gray-800">Lisa tilts her head, her gaze tender but probing. “It pains me to see you so overwhelmed. You won’t tell me what’s really going on, will you?”</p>
          <br />
          <p className="text-lg leading-relaxed text-gray-800">I look away, feeling the familiar emptiness. “Well, I’m totally fine,” I respond, forcing a smile that doesn’t reach my eyes.</p>
          <p className="text-lg leading-relaxed text-gray-800">“Are you troubled?” she asks, her tone soft, laced with concern. Her eyes hold a sadness I can’t ignore. “It’s been rough, hasn’t it?”</p>
          <p className="text-lg leading-relaxed text-gray-800">Her voice is barely audible, yet it’s all I can hear.</p>
          <EnhancedMarginNote side="right">A heavy heart</EnhancedMarginNote>
          <InteractiveFootnote
            note="The narrator’s longing for connection is palpable, yet their self-doubt keeps them tethered to despair."
          >
            mean something to someone
          </InteractiveFootnote>
        </motion.div>
      </Section>

      <SectionDivider />

      {/* Flashback Scene */}
      <Section delay={1.6}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
          <p className="text-lg leading-relaxed text-gray-800 italic">Flashbacks. It was all pain, an unyielding haze of roughness. I was so scared, so sad. It hurt so much; every fiber of my being stretched to its breaking point.</p>
          <br />
          <p className="text-lg leading-relaxed text-gray-800 italic">I tried so hard not to die, not to let go of whatever slivers of light I could find. I was desperate to give back, to matter. I was terrified, haunted by memories and faces that would never leave me.</p>
          <p className="text-lg leading-relaxed text-gray-800 italic">And I hated myself for feeling that way, for letting those memories scar me so deeply.</p>
          <EnhancedBlockQuote>
            “Ah, man… talk about unequal compensation.”
          </EnhancedBlockQuote>
          <EnhancedMarginNote side="left">A scarred past</EnhancedMarginNote>
        </motion.div>
      </Section>

      <SectionDivider />

      {/* Intimate Moment Scene */}
      <Section delay={1.8}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
          <p className="text-lg leading-relaxed text-gray-800">Lisa’s laughter breaks through the silence, soft but filled with warmth. “You are kind of adorable when you’re panicking,” she whispers, her eyes glinting with a playful light that cuts through my dark thoughts.</p>
          <br />
          <p className="text-lg leading-relaxed text-gray-800">She leans in just a little closer, brushing her arm against mine. “I wish we could talk until our voices turn hoarse…”</p>
          <br />
          <p className="text-lg leading-relaxed text-gray-800">Her words feel like an invitation, a lifeline. “If you keep being this nice to me,” I murmur, my voice barely above a whisper, “I’m going to fall in love with you.”</p>
          <br />
          <EnhancedBlockQuote>
            “Ten centimetres…”
          </EnhancedBlockQuote>
          <p className="text-lg leading-relaxed text-gray-800 italic">The thought lingers, heavy with significance. Once we touch, I won’t want to let go. If I get closer, I won’t want to distance ourselves.</p>
          <p className="text-lg leading-relaxed text-gray-800 italic">The world around us fades.</p>
          <EnhancedMarginNote side="right">A fragile connection</EnhancedMarginNote>
          <InteractiveFootnote
            note="The ten-centimetre distance symbolizes the emotional barrier between connection and isolation."
          >
            ten centimetres
          </InteractiveFootnote>
        </motion.div>
      </Section>
    </ChapterLayout>
  );
}