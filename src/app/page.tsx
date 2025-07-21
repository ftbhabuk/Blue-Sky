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
      skyColor: '#ffeaa7', // warm golden for hope
      sunPosition: [8, 8, -10],
      cloudColor: '#fff3cd',
      envPreset: 'sunset',
    },
    {
      skyColor: '#4b6cb7', // dusk
      sunPosition: [0, 2, -20],
      cloudColor: '#ccdfff',
      envPreset: 'night',
    },
  ];

  // Interpolate between palettes based on sectionIndex
  const paletteA = skyPalettes[sectionIndex] || skyPalettes[0];
  const paletteB = skyPalettes[sectionIndex + 1] || skyPalettes[sectionIndex] || skyPalettes[0];
  const sectionScroll = Math.min((scrollY % window.innerHeight) / window.innerHeight, 1);
  const lerp = (a: string, b: string, t: number) => {
    const ca = new THREE.Color(a);
    const cb = new THREE.Color(b);
    return ca.lerp(cb, t).getStyle();
  };
  const skyColor = lerp(paletteA.skyColor, paletteB.skyColor, sectionScroll);
  const cloudColor = lerp(paletteA.cloudColor, paletteB.cloudColor, sectionScroll);
  const sunPosition: [number, number, number] = [
    paletteA.sunPosition[0] + ((paletteB.sunPosition[0] - paletteA.sunPosition[0]) * sectionScroll),
    paletteA.sunPosition[1] + ((paletteB.sunPosition[1] - paletteA.sunPosition[1]) * sectionScroll),
    paletteA.sunPosition[2] + ((paletteB.sunPosition[2] - paletteA.sunPosition[2]) * sectionScroll),
  ];
  const allowedPresets = ["dawn", "sunset", "night"] as const;
  const envPreset = allowedPresets[sectionIndex] || "dawn";

  useFrame((state, delta) => {
    const time = state.clock.elapsedTime;

    if (cloudsRef.current) {
      cloudsRef.current.rotation.y = Math.sin(time * 0.035) * 0.08 + Math.cos(time * 0.058) * 0.03 + scrollY * 0.0003;
      cloudsRef.current.rotation.x = Math.cos(time * 0.042) * 0.035 + Math.sin(time * 0.067) * 0.015 + scrollY * 0.0001;
      const groupScale = 1 + Math.sin(time * 0.06) * 0.01 + Math.cos(time * 0.089) * 0.008;
      cloudsRef.current.scale.set(groupScale, groupScale, groupScale);
    }

    const scrollProgress = Math.min(scrollY / 2000, 1);
    const smoothScrollProgress = scrollProgress * scrollProgress * (3 - 2 * scrollProgress);
    const baseColor = new THREE.Color(cloudColor);
    const targetColor = new THREE.Color('#4b6cb7');
    const interpolatedColor = baseColor.clone().lerp(targetColor, smoothScrollProgress * 0.3);

    let atmosphereIntensity = 1;
    let windPattern = 'gentle';
    
    switch(sectionIndex) {
      case 0:
        atmosphereIntensity = 0.8;
        windPattern = 'dawn';
        break;
      case 1:
        atmosphereIntensity = 1.2;
        windPattern = 'active';
        break;
      default:
        atmosphereIntensity = 0.6;
        windPattern = 'still';
        break;
    }

    let disperse = 0;
    let windTime = 0;
    if (sectionIndex === 1) {
      windTime = (Math.sin(time * 0.08) + Math.cos(time * 0.15) + 1) / 3;
      disperse = 0.6 + 0.4 * windTime;
    } else if (sectionIndex === 0) {
      disperse = sectionScroll * 0.8;
    } else {
      disperse = 0.05 + 0.08 * Math.sin(time * 0.06);
    }

    const parallaxFactors = [1.0, 0.7, 0.5, 0.3, 0.8];

    function animateCloudAdvanced(
      cloudRef: React.RefObject<THREE.Group | null>,
      baseX: number,
      baseY: number,
      baseZ: number,
      baseOpacity: number,
      cloudIndex: number
    ) {
      if (
        cloudRef.current &&
        cloudRef.current.children.length > 0 &&
        cloudRef.current.children[0] instanceof THREE.Mesh &&
        (cloudRef.current.children[0] as THREE.Mesh).material
      ) {
        const parallaxFactor = parallaxFactors[cloudIndex] || 0.5;
        const personalityOffset = cloudIndex * 1.7;
        
        const primaryDrift = Math.sin(time * 0.04 + personalityOffset) * 1.8 * parallaxFactor;
        const secondaryDrift = Math.cos(time * 0.076 + personalityOffset * 0.5) * 0.8 * parallaxFactor;
        const crossWind = Math.sin(time * 0.032 + personalityOffset * 1.3) * 0.4;
        
        const breathingY = Math.cos(time * 0.058 + personalityOffset) * 0.6 * parallaxFactor;
        const floatY = Math.sin(time * 0.021 + personalityOffset * 0.8) * 0.3;
        
        const morphX = 1 + Math.sin(time * 0.045 + personalityOffset) * 0.08;
        const morphY = 1 + Math.cos(time * 0.067 + personalityOffset * 0.6) * 0.05;
        const morphZ = 1 + Math.sin(time * 0.056 + personalityOffset * 1.2) * 0.06;
        
        const resistance = 0.6 + (cloudIndex * 0.1) % 0.4;
        const windAmount = 8 * disperse * resistance * atmosphereIntensity;
        const stretchAmount = 1 + 0.25 * disperse * resistance;
        
        cloudRef.current.position.x = baseX + windAmount + primaryDrift + secondaryDrift;
        cloudRef.current.position.y = baseY + breathingY + floatY + crossWind;
        cloudRef.current.position.z = baseZ + Math.sin(time * 0.028 + personalityOffset) * 0.8;
        
        cloudRef.current.scale.x = stretchAmount * morphX;
        cloudRef.current.scale.y = morphY;
        cloudRef.current.scale.z = morphZ;
        
        const fadeAmount = 0.25 * disperse * resistance;
        const opacity = Math.max(0.1, baseOpacity - fadeAmount);
        
        const material = (cloudRef.current.children[0] as THREE.Mesh).material as THREE.MeshPhysicalMaterial;
        material.opacity = opacity;
        material.color.copy(interpolatedColor);
      }
    }

    animateCloudAdvanced(cloud1Ref, 0, 30, 0, 0.6, 0);
    animateCloudAdvanced(cloud2Ref, 15, 4, -12, 0.55, 1);
    animateCloudAdvanced(cloud3Ref, -12, 3.5, -10, 0.5, 2);
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
        // @ts-expect-error SkyImpl does not accept a color prop, but we want to override it for custom sky color
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

// SectionBlock component for animated full-page sections
function SectionBlock({ title, quote, description, index, currentSection }: { title: string; quote: string; description: string; index: number; currentSection: number }) {
  const isActive = currentSection === index;

  return (
    <section
      className="h-screen flex flex-col items-center justify-center snap-center transition-all duration-1000 relative"
      style={{
        opacity: isActive ? 1 : 0,
        transform: isActive ? 'translateY(0px) scale(1)' : 'translateY(50px) scale(0.98)',
        pointerEvents: isActive ? 'auto' : 'none',
        transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
      }}
    >
      <div className="text-center max-w-xl mx-auto px-4 relative z-10">
        <h2 
          className="text-3xl md:text-4xl font-light text-slate-800 tracking-tight mb-6" 
          style={{ 
            fontFamily: "'Playfair Display', serif",
            opacity: isActive ? 1 : 0,
            transform: isActive ? 'translateY(0px)' : 'translateY(20px)',
            transition: 'opacity 1s ease-out 0.2s, transform 1s ease-out 0.2s'
          }}
        >
          {title}
        </h2>
        
        <blockquote 
          className="text-lg md:text-xl text-slate-600/90 font-light italic leading-relaxed mb-6"
          style={{ 
            fontFamily: "'Cormorant Garamond', serif",
            opacity: isActive ? 1 : 0,
            transform: isActive ? 'translateY(0px)' : 'translateY(20px)',
            transition: 'opacity 1.2s ease-out 0.4s, transform 1.2s ease-out 0.4s'
          }}
        >
          "{quote}"
        </blockquote>

        <div 
          className="w-20 h-px bg-slate-300 mx-auto mb-6"
          style={{
            opacity: isActive ? 1 : 0,
            transform: isActive ? 'scaleX(1)' : 'scaleX(0)',
            transition: 'opacity 1s ease-out 0.6s, transform 1s ease-out 0.6s',
            transformOrigin: 'center'
          }}
        />
          
        <p 
          className="text-slate-500 font-light text-base leading-relaxed max-w-md mx-auto"
          style={{ 
            fontFamily: "'Cormorant Garamond', serif",
            opacity: isActive ? 1 : 0,
            transform: isActive ? 'translateY(0px)' : 'translateY(20px)',
            transition: 'opacity 1s ease-out 0.8s, transform 1s ease-out 0.8s'
          }}
        >
          {description}
        </p>
      </div>
    </section>
  );
}

export default function BlueSkyLanding() {
  const [isLoaded, setIsLoaded] = useState(false);
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
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const offsets = sectionRefs.map(ref => ref.current ? ref.current.getBoundingClientRect().top : Infinity);
      const active = offsets.findIndex(offset => offset > window.innerHeight * -0.5 && offset < window.innerHeight * 0.5);
      setCurrentSection(active === -1 ? 0 : active);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionRefs]);

  return (
    <div className="bg-gradient-to-br from-blue-50/50 via-indigo-50/20 to-white overflow-auto relative snap-y snap-mandatory">
      <div className="fixed inset-0 z-0">
        <Canvas camera={{ position: [0, -10, 20], fov: 75 }} style={{ background: "transparent" }}>
          <Suspense fallback={null}>
            <CloudScene scrollY={scrollY} sectionIndex={currentSection} />
          </Suspense>
        </Canvas>
      </div>
      <div className="fixed inset-0 bg-gradient-to-b from-blue-100/10 via-white/5 to-blue-50/15 z-5 pointer-events-none" />
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="flex flex-col items-center justify-center min-h-screen max-w-5xl mx-auto">
          <div className="space-y-11 text-center">
            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-light text-blue-950 tracking-tight transition-all duration-1200 ease-in-out"
              style={{
                fontFamily: "'Playfair Display', serif",
                opacity: 1 - Math.min(scrollY / 200, 1),
                transform: `translateY(${30 - Math.min(scrollY / 4, 30)}px)`,
                transition: 'opacity 0.8s, transform 0.8s',
              }}
            >
              Blue Sky
            </h1>
            <div
              className="text-lg md:text-xl text-blue-800/90 font-light leading-relaxed transition-all duration-1200 ease-in-out delay-200"
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
            <p
              className="text-base text-blue-700/80 font-light transition-all duration-1200 ease-in-out delay-400"
              style={{
                fontFamily: "'Inter', sans-serif",
                opacity: 1 - Math.min(Math.max((scrollY - 120) / 200, 0), 1),
                transform: `translateY(${30 - Math.min(Math.max((scrollY - 120) / 4, 0), 30)}px)`,
                transition: 'opacity 0.8s, transform 0.8s',
              }}
            >
              — Bhabuk
            </p>
            <div
              className="w-28 h-px bg-gradient-to-r from-transparent via-blue-200/50 to-transparent mx-auto transition-all duration-1200 ease-in-out delay-600"
              style={{
                opacity: 1 - Math.min(Math.max((scrollY - 180) / 200, 0), 1),
                transform: `scaleX(${1 - Math.min(Math.max((scrollY - 180) / 2, 0), 1)})`,
                transition: 'opacity 0.8s, transform 0.8s',
              }}
            />
            <div
              className="max-w-sm mx-auto transition-all duration-1200 ease-in-out delay-800"
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
            <div
              className="transition-all duration-1200 ease-in-out delay-1000"
              style={{
                marginTop: '-1.5rem',
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

        <div className="w-full">
          <div ref={sectionRefs[0]}>
            <SectionBlock 
              title="Wander the Horizon" 
              quote="Within these walls, the sky is a promise I'm learning to believe."
              description="Unfold a story written in cloud and light, where every word is a breath of the sky's boundless wonder." 
              index={0} 
              currentSection={currentSection} 
            />
          </div>
          <div ref={sectionRefs[1]}>
            <SectionBlock 
              title="Echoes of the Firmament" 
              quote="I was shown a sky filled with colors I never knew how to name."
              description="Let the whispers of the cosmos guide you through a quiet reflection on hope, seen through a new spectrum." 
              index={1} 
              currentSection={currentSection} 
            />
          </div>
        </div>

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