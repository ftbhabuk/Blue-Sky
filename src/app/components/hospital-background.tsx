"use client";

import React from 'react';

export function HospitalBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base Gradient Layer - Sterile hospital tones */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-100 via-blue-50 to-gray-200 opacity-90" />

      {/* Fluorescent Light Effect - Subtle horizontal glow */}
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/30 to-transparent animate-flicker" />

      {/* Tiled Floor Effect - Faint grid */}
      <div className="absolute inset-0 bg-repeat opacity-10" 
           style={{
             backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px), 
                              linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px)`,
             backgroundSize: '40px 40px', // Mimics hospital floor tiles
           }} />

      {/* Curtain Shadow - Soft vertical hint */}
      <div className="absolute right-0 top-0 bottom-0 w-1/4 bg-gradient-to-l from-gray-300/20 to-transparent" />

      {/* Subtle Equipment Silhouette - Optional */}
      <div className="absolute bottom-10 left-10 w-20 h-40 bg-gray-400/10 rounded-md blur-sm" />
    </div>
  );
}

// CSS Animation for flickering light effect
const styles = `
  @keyframes flicker {
    0%, 100% { opacity: 0.3; }
    50% { opacity: 0.5; }
  }
  .animate-flicker {
    animation: flicker 3s infinite ease-in-out;
  }
`;

// Inject styles into the document (you can move this to a CSS file if preferred)
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
}