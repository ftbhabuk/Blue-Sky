"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function BlueSkyTeaser() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Pinyon+Script&family=Playfair+Display:ital,wght@0,400;0,500;1,400&family=Cormorant+Garamond:ital,wght@0,300;1,300&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    setTimeout(() => setIsLoaded(true), 100);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-white">
      {/* Paper texture overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <Image
          src="https://img.freepik.com/free-photo/white-paper-texture_1194-5998.jpg?w=2000"
          alt="Paper texture background"
          fill
          className="object-cover"
        />
      </div>

      {/* Background geometric shapes with subtle animations */}
      <div className="absolute top-0 right-0 w-full h-screen overflow-hidden">
        <div
          className={`absolute -top-[5%] right-[8%] w-[55%] h-[55%] rounded-[40%] bg-blue-500/40 blur-3xl rotate-12 transition-all duration-[3000ms] ease-in-out delay-300 ${isLoaded ? "opacity-100" : "opacity-0 translate-y-10"}`}
        ></div>
        <div
          className={`absolute top-[28%] right-[15%] w-[40%] h-[50%] rounded-[60%] bg-blue-700/30 blur-2xl -rotate-6 transition-all duration-[3000ms] ease-in-out delay-500 ${isLoaded ? "opacity-100" : "opacity-0 translate-x-10"}`}
        ></div>
        <div
          className={`absolute top-[10%] left-[55%] w-[30%] h-[30%] rounded-full bg-blue-300/20 blur-xl transition-all duration-[3000ms] ease-in-out delay-700 ${isLoaded ? "opacity-100" : "opacity-0 -translate-y-10"}`}
        ></div>
        <div
          className={`absolute bottom-[10%] right-[25%] w-[25%] h-[25%] rounded-[30%] bg-blue-400/25 blur-md transition-all duration-[3000ms] ease-in-out delay-900 ${isLoaded ? "opacity-100" : "opacity-0 translate-x-10"}`}
        ></div>
      </div>

      {/* Watercolor brush stroke */}
      <div className="absolute bottom-[15%] right-[5%] w-[100px] h-[50px] opacity-10 pointer-events-none rotate-180">
        <Image
          src="https://img.freepik.com/free-vector/blue-brush-stroke-watercolor-texture-background_1017-36754.jpg"
          alt="Watercolor brush stroke"
          fill
          className="object-cover"
        />
      </div>

      {/* Decorative lines */}
      <div
        className={`absolute top-1/4 left-1/2 w-[1px] h-[180px] bg-blue-200/50 transition-all duration-[2000ms] ease-in-out delay-1000 ${isLoaded ? "opacity-100 h-[180px]" : "opacity-0 h-0"}`}
      ></div>
      <div
        className={`absolute top-[40%] left-[32%] w-[1px] h-[130px] bg-blue-200/30 rotate-45 transition-all duration-[2000ms] ease-in-out delay-[1200ms] ${isLoaded ? "opacity-100 h-[130px]" : "opacity-0 h-0"}`}
      ></div>
      <div
        className={`absolute bottom-[20%] left-[40%] w-[90px] h-[1px] bg-blue-200/30 transition-all duration-[2000ms] ease-in-out delay-[1400ms] ${isLoaded ? "opacity-100 w-[90px]" : "opacity-0 w-0"}`}
      ></div>

      {/* Floating quotes */}
      <div
        className={`absolute top-[15%] left-[12%] -rotate-6 opacity-20 pointer-events-none transition-all duration-[2000ms] ease-in-out delay-[1600ms] ${isLoaded ? "opacity-20 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <p className="text-blue-900 text-sm italic" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
        &quot;The sky stretched wide, whispering secrets...&quot;
        </p>
      </div>
      <div
        className={`absolute bottom-[25%] right-[12%] rotate-3 opacity-20 pointer-events-none transition-all duration-[2000ms] ease-in-out delay-[1800ms] ${isLoaded ? "opacity-20 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <p className="text-blue-900 text-sm italic" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
          &quot;In its blue embrace, I wandered free...&quot;
        </p>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center w-full min-h-screen px-4 md:px-8 max-w-6xl mx-auto">
        {/* Left side - Text */}
        <div className="w-full md:w-1/2 flex flex-col items-start justify-center mb-12 md:mb-0 md:pr-6">
          <h1
            className={`text-5xl md:text-6xl lg:text-7xl font-script text-black mb-4 transition-all duration-[1500ms] ease-out ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            style={{ fontFamily: "'Pinyon Script', cursive" }}
          >
            Blue Sky
          </h1>
          <div
            className={`text-xl md:text-2xl text-black font-serif max-w-md transition-all duration-[1500ms] ease-out delay-300 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            <p>Will I falter</p>
            <p>as my world drifts...</p>
          </div>
          <p
            className={`mt-6 text-lg text-black font-serif transition-all duration-[1500ms] ease-out delay-500 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            - Bhabuk
          </p>

          {/* Divider */}
          <div
            className={`w-24 h-[1px] bg-blue-900/30 my-6 transition-all duration-[1500ms] ease-out delay-700 ${isLoaded ? "opacity-100 w-24" : "opacity-0 w-0"}`}
          ></div>

          {/* Review */}
          <div
            className={`max-w-xs transition-all duration-[1500ms] ease-out delay-900 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <p
              className="text-xs uppercase tracking-wider text-blue-900/70 mb-2"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Reader’s Praise
            </p>
            <p className="text-sm italic text-blue-900/80 mb-3" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            &quot;A soulful exploration of longing and light, painted in shades of blue.quot;
            </p>
            <p className="text-xs text-blue-900/60" style={{ fontFamily: "'Playfair Display', serif" }}>
              — A Fellow Dreamer
            </p>
          </div>

          {/* Button */}
          <Link
            href="/chapters/1"
            className={`mt-8 inline-flex items-center px-6 py-3 border border-blue-900/20 rounded-sm bg-white hover:bg-blue-50 transition-all duration-300 group delay-[1100ms] ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <span className="text-sm text-blue-900" style={{ fontFamily: "'Playfair Display', serif" }}>
              Read Sample
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </Link>
        </div>

        {/* Right side - Book cover */}
        <div className="w-full md:w-1/2 flex justify-center items-center md:pl-6">
          <div
            className={`relative w-[250px] h-[340px] shadow-xl rotate-1 transition-all duration-[2000ms] ease-out ${isLoaded ? "opacity-100 translate-y-0 rotate-1" : "opacity-0 translate-y-10 rotate-0"}`}
          >
            <div className="absolute inset-0 bg-white rounded-sm">
              <div className="absolute inset-[3px] border border-gray-100 rounded-sm overflow-hidden">
                <Image
                  src="https://imagedelivery.net/1KomXrSWiTojGGip43n0SQ/f5590761-03c5-4cb9-f358-e9afc77f1700/public"
                  alt="Blue Sky sample cover"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <div className="absolute top-0 right-0 w-[30px] h-full bg-gradient-to-l from-black/5 to-transparent"></div>
            <div className="absolute bottom-0 right-0 w-[30px] h-[30px] bg-gradient-to-tl from-black/10 to-transparent rounded-bl-sm"></div>
          </div>

          {/* Sample details card */}
          <div
            className={`absolute bottom-[10%] md:bottom-auto md:top-[60%] md:right-[18%] bg-white/80 backdrop-blur-sm p-3 shadow-sm border border-blue-50 rounded-sm -rotate-2 max-w-[180px] hidden md:block transition-all duration-[2000ms] ease-out delay-500 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <p
              className="text-xs uppercase tracking-wider text-blue-900/70 mb-1"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Sample Release
            </p>
            <p className="text-sm text-blue-900/90 mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
              Available now in digital format
            </p>
            <p className="text-xs italic text-blue-900/60" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            &quot;A glimpse into a world of quiet wonder&quot;
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        className={`absolute bottom-4 w-full text-center text-xs text-blue-900/40 transition-all duration-[2000ms] ease-out delay-[2000ms] ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        style={{ fontFamily: "'Cormorant Garamond', serif" }}
      >
        <p>A taste of words and emotions • Digital Sample 2025</p>
      </div>
    </div>
  );
}