
import { Github } from "lucide-react";

interface FooterProps {
  isLoaded?: boolean;
}

export default function Footer({ isLoaded = true }: FooterProps) {
  return (
    <footer
      className={`w-full bg-white/60 backdrop-blur-sm border-t border-gray-100 py-6 mt-12 transition-all duration-1200 ease-in-out ${
        isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
      style={{ zIndex: 0 }}
    >
      <div className="max-w-4xl mx-auto px-6">
        {/* <div className="w-20 h-px bg-gray-300 mx-auto mb-8"></div> */}

        {/* Three column layout - Origins, About Me, Connect */}
        <div className="grid grid-cols-1 md:grid-cols-[2fr_2fr_1fr] gap-4 mb-8">
          {/* Origins */}
          <div className="text-left md:border-r border-gray-200/60 pr-8 shadow-sm">
            <h3 className="text-xs font-medium text-slate-600 uppercase tracking-[0.2em] mb-6 flex items-center">
              <span className="w-3 h-3 bg-blue-300 rounded-full mr-3 opacity-70"></span>
              Origins
            </h3>
            <p
              className="text-base text-gray-700 font-normal leading-relaxed mb-4"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Born from late-night conversations with the ceiling in Pokhara,
              where the world feels too loud yet skips you completely.
            </p>
            <p
              className="text-base text-gray-700 font-normal leading-relaxed"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Written while grasping onto anything—pills, cigarettes, fleeting
              connections—trying to pass through phases of loving someone who
              was never really there.
            </p>
          </div>

          {/* About Me */}
          <div className="text-left md:border-r border-gray-200/60 pr-8 shadow-sm">
            <h3 className="text-xs font-medium text-slate-600 uppercase tracking-[0.2em] mb-6 flex items-center">
              <span className="w-3 h-3 bg-blue-300 rounded-full mr-3 opacity-70"></span>
              About Me
            </h3>
            <p
              className="text-base text-gray-700 font-normal leading-relaxed mb-4"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              A wandering soul, collecting forgotten dreams and star-dusted tales,
              finding poetry in parking lots and sadness in passing clouds.
            </p>
            <p
              className="text-base text-gray-700 font-normal leading-relaxed"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Weaving stories from strangers, stars, and sleepless nights.
            </p>
          </div>

          {/* Connect */}
          <div className="text-left">
            <h3 className="text-xs font-medium text-slate-600 uppercase tracking-[0.2em] mb-6 flex items-center">
              <span className="w-3 h-3 bg-blue-300 rounded-full mr-3 opacity-70"></span>
              Connect
            </h3>
            <p
              className="text-sm text-gray-700 font-normal mb-4"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Open for writing collaborations, conversations, or just sharing what
              the sky told you today.
            </p>
            <div className="flex space-x-6">
              <a
                href="https://x.com/FellowTravell20"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-800 transition-colors duration-300"
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
                className="text-gray-600 hover:text-gray-800 transition-colors duration-300"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Final signature */}
        <div className="text-center">
          <p
            className="text-xs text-gray-500 font-light"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            © 2025 Bhabuk • From &quot;Uperhaps-&quot; an unpublished collection
          </p>
        </div>
      </div>
    </footer>
  );
}