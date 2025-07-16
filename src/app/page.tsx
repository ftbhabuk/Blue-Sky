
// ./src/app/page.tsx
"use client";

import { useEffect, useState, useRef, Suspense } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { Clouds, Cloud, Sky as SkyImpl, Environment } from "@react-three/drei";

// Cloud Scene Component
interface CloudSceneProps {
  scrollY: number;
  sectionIndex: number;
}

function CloudScene({ scrollY, sectionIndex }: CloudSceneProps) {
  const cloudsRef = useRef<THREE.Group>(null);
  const cloud1Ref = useRef<THREE.Group>(null);
  const cloud2Ref = useRef<THREE.Group>(null);
  const cloud3Ref = useRef<THREE.Group>(null);

  // Define color palettes for each section
  const skyPalettes = [
    {
      skyColor: '#e6f0ff', // dawn
      sunPosition: [5, 3, -10],
      cloudColor: '#e6f0ff',
      envPreset: 'dawn',
    },
    {
      skyColor: '#b3c6ff', // day
      sunPosition: [10, 10, -10],
      cloudColor: '#d9e5ff',
      envPreset: 'sunset',
    },
    {
      skyColor: '#4b6cb7', // dusk
      sunPosition: [0, 2, -20],
      cloudColor: '#ccdfff',
      envPreset: 'night',
    },
  ];

  // Interpolate between palettes based on sectionIndex (and scrollY for smoothness)
  const paletteA = skyPalettes[sectionIndex] || skyPalettes[0];
  const paletteB = skyPalettes[sectionIndex + 1] || skyPalettes[sectionIndex] || skyPalettes[0];
  // Calculate local progress between sections (0-1)
  const sectionScroll = Math.min((scrollY % window.innerHeight) / window.innerHeight, 1);
  // Only interpolate if not on last section
  const lerp = (a: string, b: string, t: number) => {
    const ca = new THREE.Color(a);
    const cb = new THREE.Color(b);
    return ca.lerp(cb, t).getStyle();
  };
  const skyColor = lerp(paletteA.skyColor, paletteB.skyColor, sectionScroll);
  const cloudColor = lerp(paletteA.cloudColor, paletteB.cloudColor, sectionScroll);
  // Ensure sunPosition is always a tuple of 3 numbers
  const sunPosition: [number, number, number] = [
    paletteA.sunPosition[0] + ((paletteB.sunPosition[0] - paletteA.sunPosition[0]) * sectionScroll),
    paletteA.sunPosition[1] + ((paletteB.sunPosition[1] - paletteA.sunPosition[1]) * sectionScroll),
    paletteA.sunPosition[2] + ((paletteB.sunPosition[2] - paletteA.sunPosition[2]) * sectionScroll),
  ];
  // Only use allowed Environment presets
  const allowedPresets = ["dawn", "sunset", "night"] as const;
  const envPreset = allowedPresets[sectionIndex] || "dawn";

  useFrame((state, delta) => {
    if (cloudsRef.current) {
      cloudsRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.02) * 0.05 + scrollY * 0.0003;
      cloudsRef.current.rotation.x = Math.cos(state.clock.elapsedTime * 0.02) * 0.02 + scrollY * 0.0001;
    }

    // Calculate scroll progress (normalize scrollY to 0-1 range, max 2000px)
    const scrollProgress = Math.min(scrollY / 2000, 1);

    // Interpolated cloud color
    const startColor = new THREE.Color(cloudColor); // Use dynamic cloud color
    const endColor = new THREE.Color('#4b6cb7'); // Deep blue for fade

    // Safely update cloud colors
    if (
      cloud1Ref.current &&
      cloud1Ref.current.children.length > 0 &&
      cloud1Ref.current.children[0] instanceof THREE.Mesh &&
      (cloud1Ref.current.children[0] as THREE.Mesh).material
    ) {
      cloud1Ref.current.rotation.y += delta * 0.01;
      cloud1Ref.current.position.y += Math.sin(state.clock.elapsedTime * 0.1) * 0.005;
      cloud1Ref.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 0.3) * 0.02);
      ((cloud1Ref.current.children[0] as THREE.Mesh).material as THREE.MeshPhysicalMaterial).color.lerpColors(startColor, endColor, scrollProgress);
    }
    if (
      cloud2Ref.current &&
      cloud2Ref.current.children.length > 0 &&
      cloud2Ref.current.children[0] instanceof THREE.Mesh &&
      (cloud2Ref.current.children[0] as THREE.Mesh).material
    ) {
      cloud2Ref.current.rotation.y -= delta * 0.008;
      cloud2Ref.current.position.y += Math.cos(state.clock.elapsedTime * 0.08) * 0.004;
      cloud2Ref.current.scale.setScalar(1 + Math.cos(state.clock.elapsedTime * 0.25) * 0.015);
      ((cloud2Ref.current.children[0] as THREE.Mesh).material as THREE.MeshPhysicalMaterial).color.lerpColors(startColor, endColor, scrollProgress);
    }
    if (
      cloud3Ref.current &&
      cloud3Ref.current.children.length > 0 &&
      cloud3Ref.current.children[0] instanceof THREE.Mesh &&
      (cloud3Ref.current.children[0] as THREE.Mesh).material
    ) {
      cloud3Ref.current.rotation.y += delta * 0.006;
      cloud3Ref.current.position.y += Math.sin(state.clock.elapsedTime * 0.05) * 0.003;
      cloud3Ref.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 0.2) * 0.01);
      ((cloud3Ref.current.children[0] as THREE.Mesh).material as THREE.MeshPhysicalMaterial).color.lerpColors(startColor, endColor, scrollProgress);
    }
  });

  return (
    <>
      <SkyImpl
        distance={450000}
        sunPosition={sunPosition}
        inclination={0.65}
        azimuth={0.3}
        mieCoefficient={0.004}
        mieDirectionalG={0.8}
        rayleigh={2.5}
        turbidity={6}
        // @ts-ignore
        color={skyColor}
      />
      <ambientLight intensity={0.8} />
      <directionalLight
        position={[10, 20, 10]}
        intensity={1.1}
        color="#f9e8d0"
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <pointLight position={[-10, -5, -15]} intensity={0.5} color="#b0dbff" />
      <Environment preset={envPreset} />
      <group ref={cloudsRef}>
        <Clouds material={THREE.MeshPhysicalMaterial} limit={300}>
          <Cloud
            ref={cloud1Ref}
            seed={1}
            segments={50}
            bounds={[12, 4, 12]}
            volume={12}
            color={cloudColor}
            opacity={0.6}
            position={[0, 30, 0]}
            speed={0.03}
            growth={5}
            fade={25}
          />
          <Cloud
            ref={cloud2Ref}
            seed={2}
            segments={45}
            bounds={[10, 3.5, 10]}
            volume={10}
            color={cloudColor}
            opacity={0.55}
            position={[15, 4, -12]}
            speed={0.025}
            growth={4.5}
            fade={30}
          />
          <Cloud
            ref={cloud3Ref}
            seed={3}
            segments={40}
            bounds={[11, 3.8, 11]}
            volume={11}
            color={cloudColor}
            opacity={0.5}
            position={[-12, 3.5, -10]}
            speed={0.02}
            growth={4}
            fade={35}
          />
          <Cloud
            seed={4}
            segments={30}
            bounds={[8, 2, 8]}
            volume={8}
            color={cloudColor}
            opacity={0.45}
            position={[10, 1, 14]}
            speed={0.015}
            growth={3}
            fade={40}
          />
          <Cloud
            seed={5}
            segments={45}
            bounds={[13, 4, 13]}
            volume={13}
            color={cloudColor}
            opacity={0.65}
            position={[-18, 5, 12]}
            speed={0.04}
            growth={5.5}
            fade={28}
          />
          <Cloud
            concentrate="outside"
            growth={100}
            color={cloudColor}
            opacity={0.3}
            seed={6}
            bounds={[200, 200, 200]}
            volume={200}
            position={[0, -30, -80]}
            fade={150}
          />
        </Clouds>
      </group>
    </>
  );
}

// Loading fallback
function CloudsLoading() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="text-blue-200 text-sm font-light" style={{ fontFamily: "'Inter', sans-serif" }}>
        Weaving dreams in the sky...
      </div>
    </div>
  );
}

// SectionBlock component for animated full-page sections
function SectionBlock({ title, description, index, currentSection }: { title: string; description: string; index: number; currentSection: number }) {
  // Animate in if currentSection === index
  const isActive = currentSection === index;
  return (
    <section
      className="h-screen flex flex-col items-center justify-center snap-center transition-all duration-1000"
      style={{
        opacity: isActive ? 1 : 0,
        transform: isActive ? 'translateY(0px) scale(1)' : 'translateY(60px) scale(0.98)',
        pointerEvents: isActive ? 'auto' : 'none',
        transition: 'opacity 0.8s, transform 0.8s',
      }}
    >
      <h2 className="text-3xl font-light text-blue-950 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>{title}</h2>
      <p className="mt-4 text-blue-800/85 font-light text-lg max-w-md mx-auto" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{description}</p>
    </section>
  );
}

export default function BlueSkyLanding() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [currentSection, setCurrentSection] = useState(0);
  const sectionRefs = [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)];

  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Cormorant+Garamond:ital,wght@0,300;1,300&family=Inter:wght@300;400;500&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    const timer = setTimeout(() => setIsLoaded(true), 800);
    return () => {
      document.head.removeChild(link);
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scroll snap and section tracking
  useEffect(() => {
    const handleScroll = () => {
      const offsets = sectionRefs.map(ref => ref.current ? ref.current.getBoundingClientRect().top : Infinity);
      const active = offsets.findIndex(offset => offset > window.innerHeight * -0.5 && offset < window.innerHeight * 0.5);
      setCurrentSection(active === -1 ? 0 : active);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-gradient-to-br from-blue-50/50 via-indigo-50/20 to-white overflow-auto relative snap-y snap-mandatory">
      {/* Three.js Cloud Background */}
      <div className="fixed inset-0 z-0">
        <Canvas camera={{ position: [0, -10, 20], fov: 75 }} style={{ background: "transparent" }}>
          <Suspense fallback={null}>
            <CloudScene scrollY={scrollY} sectionIndex={currentSection} />
          </Suspense>
        </Canvas>
      </div>
      {/* Subtle overlay for depth */}
      <div className="fixed inset-0 bg-gradient-to-b from-blue-100/10 via-white/5 to-blue-50/15 z-5 pointer-events-none" />
      {/* Main content container */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="flex flex-col items-center justify-center min-h-screen max-w-5xl mx-auto">
          {/* Left side - Content */}
          <div className="space-y-12 text-center">
            {/* Title */}
            <h1
              className={`text-5xl md:text-6xl lg:text-7xl font-light text-blue-950 tracking-tight transition-all duration-1200 ease-in-out`}
              style={{
                fontFamily: "'Playfair Display', serif",
                opacity: 1 - Math.min(scrollY / 200, 1),
                transform: `translateY(${30 - Math.min(scrollY / 4, 30)}px)`,
                transition: 'opacity 0.8s, transform 0.8s',
              }}
            >
              Blue Sky
            </h1>

            {/* Subtitle */}
            <div
              className={`text-lg md:text-xl text-blue-800/90 font-light leading-relaxed transition-all duration-1200 ease-in-out delay-200`}
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                opacity: 1 - Math.min(Math.max((scrollY - 60) / 200, 0), 1),
                transform: `translateY(${30 - Math.min(Math.max((scrollY - 60) / 4, 0), 30)}px)`,
                transition: 'opacity 0.8s, transform 0.8s',
              }}
            >
              <p className="mb-2 italic">Drifting softly,</p>
              <p className="italic">where dreams touch the stars...</p>
            </div>

            {/* Author */}
            <p
              className={`text-base text-blue-700/80 font-light transition-all duration-1200 ease-in-out delay-400`}
              style={{
                fontFamily: "'Inter', sans-serif",
                opacity: 1 - Math.min(Math.max((scrollY - 120) / 200, 0), 1),
                transform: `translateY(${30 - Math.min(Math.max((scrollY - 120) / 4, 0), 30)}px)`,
                transition: 'opacity 0.8s, transform 0.8s',
              }}
            >
              — Bhabuk
            </p>

            {/* Elegant divider */}
            <div
              className={`w-28 h-px bg-gradient-to-r from-transparent via-blue-200/50 to-transparent mx-auto transition-all duration-1200 ease-in-out delay-600`}
              style={{
                opacity: 1 - Math.min(Math.max((scrollY - 180) / 200, 0), 1),
                transform: `scaleX(${1 - Math.min(Math.max((scrollY - 180) / 2, 0), 1)})`,
                transition: 'opacity 0.8s, transform 0.8s',
              }}
            />

            {/* Description */}
            <div
              className={`max-w-sm mx-auto transition-all duration-1200 ease-in-out delay-800`}
              style={{
                opacity: 1 - Math.min(Math.max((scrollY - 240) / 200, 0), 1),
                transform: `translateY(${30 - Math.min(Math.max((scrollY - 240) / 4, 0), 30)}px)`,
                transition: 'opacity 0.8s, transform 0.8s',
              }}
            >
              <p
                className="text-xs uppercase tracking-widest text-blue-300 mb-3 font-medium"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                A Whispered Tale
              </p>
              <p
                className="text-blue-800/85 leading-relaxed mb-4 font-light text-sm"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                A journey woven with threads of longing, where the sky's embrace unveils the heart's quiet dreams.
              </p>
              <p
                className="text-xs text-blue-600/80 font-light italic"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                — A Wandering Soul
              </p>
            </div>

            {/* CTA Button - Elegant, inviting, poetic */}
            <div
              className={`transition-all duration-1200 ease-in-out delay-1000`}
              style={{
                opacity: 1 - Math.min(Math.max((scrollY - 320) / 200, 0), 1),
                transform: `translateY(${30 - Math.min(Math.max((scrollY - 320) / 4, 0), 30)}px)`,
                transition: 'opacity 0.8s, transform 0.8s',
              }}
            >
              <button
                className="group relative inline-flex items-center px-8 py-3 bg-white/30 backdrop-blur-md border border-blue-200 hover:bg-white/60 hover:border-blue-400 text-blue-900 font-medium rounded-full transition-all duration-500 ease-in-out shadow-md hover:shadow-xl hover:scale-105"
                onClick={() => window.location.href = "/chapters/1"}
                style={{ fontFamily: "'Inter', sans-serif", letterSpacing: '0.04em' }}
              >
                <span className="pr-3">Begin Your Journey</span>
                <span className="w-6 h-6 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-blue-700 group-hover:text-blue-900 transition-colors duration-500"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 12h14M12 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </button>
              <div className="mt-2 text-xs text-blue-400/80 font-light italic transition-all duration-700" style={{fontFamily: "'Cormorant Garamond', serif"}}>
                Let your story take flight — scroll and explore the sky.
              </div>
            </div>
          </div>
        </div>

        {/* Animated full-page sections */}
        <div className="w-full">
          <div ref={sectionRefs[0]}><SectionBlock title="Wander the Horizon" description="Unfold the delicate layers of a story where each word breathes with the sky's endless wonder." index={0} currentSection={currentSection} /></div>
          <div ref={sectionRefs[1]}><SectionBlock title="Echoes of Dreams" description="Let the whispers of the boundless sky guide you through a tale of hope and silent reflection." index={1} currentSection={currentSection} /></div>
        </div>

        {/* Floating quotes */}
        <div
          className={`absolute top-[10%] left-[10%] -rotate-3 opacity-15 pointer-events-none transition-all duration-1500 ease-in-out delay-1200 ${
            isLoaded ? "opacity-15 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-95"
          }`}
        >
          <p
            className="text-blue-900/80 text-sm italic leading-relaxed"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            "The sky unfolds,<br />whispering dreams..."
          </p>
        </div>
        <div
          className={`absolute top-[45%] right-[10%] rotate-2 opacity-15 pointer-events-none transition-all duration-1500 ease-in-out delay-1400 ${
            isLoaded ? "opacity-15 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-95"
          }`}
        >
          <p
            className="text-blue-900/80 text-sm italic leading-relaxed"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            "In its embrace,<br />my heart soars free..."
          </p>
        </div>

        {/* Footer */}
        <div
          className={`relative text-center py-10 transition-all duration-1200 ease-in-out delay-1600 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <p
            className="text-xs text-blue-300/80 font-light"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            A dance of words and dreams • Digital Journey 2025
          </p>
        </div>
      </div>
    </div>
  );
}
