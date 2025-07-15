
// ./src/app/page.tsx
"use client";

import { useEffect, useState, useRef, Suspense } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { Clouds, Cloud, Sky as SkyImpl, Environment } from "@react-three/drei";

// Cloud Scene Component
interface CloudSceneProps {
  scrollY: number;
}

function CloudScene({ scrollY }: CloudSceneProps) {
  const cloudsRef = useRef<THREE.Group>(null);
  const cloud1Ref = useRef<THREE.Group>(null);
  const cloud2Ref = useRef<THREE.Group>(null);
  const cloud3Ref = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (cloudsRef.current) {
      cloudsRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.02) * 0.05 + scrollY * 0.0003;
      cloudsRef.current.rotation.x = Math.cos(state.clock.elapsedTime * 0.02) * 0.02 + scrollY * 0.0001;
    }

    // Calculate scroll progress (normalize scrollY to 0-1 range, max 2000px)
    const scrollProgress = Math.min(scrollY / 2000, 1);

    // Define start and end colors for interpolation
    const startColor = new THREE.Color("#e6f0ff"); // Faded blue/white
    const endColor = new THREE.Color("#4b6cb7"); // Deep blue

    // Safely update cloud colors
    if (cloud1Ref.current && cloud1Ref.current.children.length > 0 && cloud1Ref.current.children[0].material) {
      cloud1Ref.current.rotation.y += delta * 0.01;
      cloud1Ref.current.position.y += Math.sin(state.clock.elapsedTime * 0.1) * 0.005;
      cloud1Ref.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 0.3) * 0.02);
      cloud1Ref.current.children[0].material.color.lerpColors(startColor, endColor, scrollProgress);
    }
    if (cloud2Ref.current && cloud2Ref.current.children.length > 0 && cloud2Ref.current.children[0].material) {
      cloud2Ref.current.rotation.y -= delta * 0.008;
      cloud2Ref.current.position.y += Math.cos(state.clock.elapsedTime * 0.08) * 0.004;
      cloud2Ref.current.scale.setScalar(1 + Math.cos(state.clock.elapsedTime * 0.25) * 0.015);
      cloud2Ref.current.children[0].material.color.lerpColors(startColor, endColor, scrollProgress);
    }
    if (cloud3Ref.current && cloud3Ref.current.children.length > 0 && cloud3Ref.current.children[0].material) {
      cloud3Ref.current.rotation.y += delta * 0.006;
      cloud3Ref.current.position.y += Math.sin(state.clock.elapsedTime * 0.05) * 0.003;
      cloud3Ref.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 0.2) * 0.01);
      cloud3Ref.current.children[0].material.color.lerpColors(startColor, endColor, scrollProgress);
    }
  });

  return (
    <>
      <SkyImpl
        distance={450000}
        sunPosition={[5, 3, -10]}
        inclination={0.65}
        azimuth={0.3}
        mieCoefficient={0.004}
        mieDirectionalG={0.8}
        rayleigh={2.5}
        turbidity={6}
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
      <Environment preset="dawn" />

      <group ref={cloudsRef}>
        <Clouds material={THREE.MeshPhysicalMaterial} limit={300}>
          <Cloud
            ref={cloud1Ref}
            seed={1}
            segments={50}
            bounds={[12, 4, 12]}
            volume={12}
            color="#e6f0ff"
            opacity={0.6}
            position={[0, 30, 0]}
            speed={0.03}
            growth={5}
            fade={25}
            materialProps={{
              roughness: 0.8,
              metalness: 0.05,
              transmission: 0.5,
              thickness: 0.7,
            }}
          />
          <Cloud
            ref={cloud2Ref}
            seed={2}
            segments={45}
            bounds={[10, 3.5, 10]}
            volume={10}
            color="#d9e5ff"
            opacity={0.55}
            position={[15, 4, -12]}
            speed={0.025}
            growth={4.5}
            fade={30}
            materialProps={{
              roughness: 0.8,
              metalness: 0.05,
              transmission: 0.5,
              thickness: 0.7,
            }}
          />
          <Cloud
            ref={cloud3Ref}
            seed={3}
            segments={40}
            bounds={[11, 3.8, 11]}
            volume={11}
            color="#ccdfff"
            opacity={0.5}
            position={[-12, 3.5, -10]}
            speed={0.02}
            growth={4}
            fade={35}
            materialProps={{
              roughness: 0.8,
              metalness: 0.05,
              transmission: 0.5,
              thickness: 0.7,
            }}
          />
          <Cloud
            seed={4}
            segments={30}
            bounds={[8, 2, 8]}
            volume={8}
            color="#c2d6ff"
            opacity={0.45}
            position={[10, 1, 14]}
            speed={0.015}
            growth={3}
            fade={40}
            materialProps={{
              roughness: 0.8,
              metalness: 0.05,
              transmission: 0.5,
              thickness: 0.7,
            }}
          />
          <Cloud
            seed={5}
            segments={45}
            bounds={[13, 4, 13]}
            volume={13}
            color="#e6f0ff"
            opacity={0.65}
            position={[-18, 5, 12]}
            speed={0.04}
            growth={5.5}
            fade={28}
            materialProps={{
              roughness: 0.8,
              metalness: 0.05,
              transmission: 0.5,
              thickness: 0.7,
            }}
         _pretrained
          />
          <Cloud
            concentrate="outside"
            growth={100}
            color="#e6eeff"
            opacity={0.3}
            seed={0.6}
            bounds={200}
            volume={200}
            positionlettere
            position={[0, -30, -80]}
            fade={150}
            materialProps={{
              roughness: 0.9,
              metalness: 0,
              transmission: 0.4,
              thickness: 0.6,
            }}
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

export default function BlueSkyLanding() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

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

  return (
    <div className="bg-gradient-to-br from-blue-50/50 via-indigo-50/20 to-white overflow-auto relative">
      {/* Three.js Cloud Background */}
      <div className="fixed inset-0 z-0">
        <Canvas camera={{ position: [0, -10, 20], fov: 75 }} style={{ background: "transparent" }}>
          <Suspense fallback={null}>
            <CloudScene scrollY={scrollY} />
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
              className={`text-5xl md:text-6xl lg:text-7xl font-light text-blue-950 tracking-tight transition-all duration-1200 ease-in-out ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Blue Sky
            </h1>

            {/* Subtitle */}
            <div
              className={`text-lg md:text-xl text-blue-800/90 font-light leading-relaxed transition-all duration-1200 ease-in-out delay-200 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              <p className="mb-2 italic">Drifting softly,</p>
              <p className="italic">where dreams touch the stars...</p>
            </div>

            {/* Author */}
            <p
              className={`text-base text-blue-700/80 font-light transition-all duration-1200 ease-in-out delay-400 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              — Bhabuk
            </p>

            {/* Elegant divider */}
            <div
              className={`w-28 h-px bg-gradient-to-r from-transparent via-blue-200/50 to-transparent mx-auto transition-all duration-1200 ease-in-out delay-600 ${
                isLoaded ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
              }`}
            />

            {/* Description */}
            <div
              className={`max-w-sm mx-auto transition-all duration-1200 ease-in-out delay-800 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
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

            {/* CTA Button */}
            <div
              className={`transition-all duration-1200 ease-in-out delay-1000 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <button
                className="group relative inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-900/80 to-indigo-900/80 hover:from-blue-800 hover:to-indigo-800 text-white font-medium rounded-full transition-all duration-500 ease-in-out hover:shadow-lg hover:scale-105"
                onClick={() => window.location.href = "/chapters/1"}
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                <span>Discover the Sky</span>
                <span className="ml-2 w-4 h-4 relative overflow-hidden">
                  <span className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>
                  <svg
                    className="relative w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5-5 5M6 12h12" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Additional content */}
        <div className="max-w-5xl mx-auto py-20 space-y-20">
          <div className="text-center">
            <h2
              className="text-3xl font-light text-blue-950"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Wander the Horizon
            </h2>
            <p
              className="mt-4 text-blue-800/85 font-light text-sm max-w-md mx-auto"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Unfold the delicate layers of a story where each word breathes with the sky's endless wonder.
            </p>
          </div>
          <div className="text-center">
            <h2
              className="text-3xl font-light text-blue-950"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Echoes of Dreams
            </h2>
            <p
              className="mt-4 text-blue-800/85 font-light text-sm max-w-md mx-auto"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Let the whispers of the boundless sky guide you through a tale of hope and silent reflection.
            </p>
          </div>
          <div className="h-64" />
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
