import { Github } from "lucide-react";

interface FooterProps {
  isLoaded?: boolean;
}

export default function Footer({ isLoaded = true }: FooterProps) {
  return (
    <footer
      className={`w-full bg-white/95 backdrop-blur-sm border-t border-gray-100 py-6 mt-12 transition-all duration-1200 ease-in-out ${
        isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
      style={{ zIndex: 30 }}
    >
      <div className="max-w-4xl mx-auto px-6">
        {/* Story verse */}
        <div className="text-center mb-6">
          <blockquote
            className="text-base text-gray-700 font-light italic leading-relaxed max-w-2xl mx-auto"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            "In the silence between heartbeats, I found a sky that remembers
            every dream we've forgotten to chase."
          </blockquote>
        </div>

        <div className="w-20 h-px bg-gray-200 mx-auto mb-6"></div>

        {/* About sections side by side */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* About Blue Sky - Origins */}
          <div className="text-left">
            <h3
              className="text-sm font-medium text-gray-800 mb-2 tracking-wide"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Origins
            </h3>
            <p
              className="text-base text-gray-600 font-light leading-normal"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Born from late-night conversations with the ceiling in Pokhara,
              where the world feels too loud yet skips you completely. Written
              while grasping onto anything—pills, cigarettes, fleeting
              connections—trying to pass through phases of loving someone who
              was never really there.
            </p>
          </div>

          {/* About Blue Sky - Essence */}
          <div className="text-left">
            <h3
              className="text-sm font-medium text-gray-800 mb-2 tracking-wide"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Essence
            </h3>
            <p
              className="text-base text-gray-600 font-light leading-normal"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              This story emerged from the quiet chaos of addiction, family
              distance, and forgetting how to care for yourself. A meditation on
              finding beauty in brokenness, when the sky becomes the only thing
              that doesn't judge.
            </p>
          </div>

          {/* About Bhabuk - Expanded */}
          <div className="text-left">
            <h3
              className="text-sm font-medium text-gray-800 mb-2 tracking-wide"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              About Me
            </h3>
            <p
              className="text-base text-gray-600 font-light leading-normal"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              I am a wandering soul, collecting forgotten dreams and star-dusted tales. I find poetry in parking lots and philosophy in passing clouds, weaving stories from strangers, stars, and sleepless nights.
            </p>
          </div>
        </div>

        {/* Contact & Collaboration */}
        <div className="text-center mb-6">
          <p
            className="text-sm text-gray-600 font-light mb-3"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Open for writing collaborations, conversations, or just sharing what
            the sky told you today.
          </p>

          <div className="flex justify-center space-x-6">
            <a
              href="https://x.com/FellowTravell20"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-700 transition-colors duration-300"
              aria-label="X"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            <a
              href="https://github.com/ftbhabuk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-700 transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Final signature */}
        <div className="text-center">
          <p
            className="text-xs text-gray-400 font-light"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            © 2025 Bhabuk • From "Uperhaps" an unpublished collection
          </p>
        </div>
      </div>
    </footer>
  );
}