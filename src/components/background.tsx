'use client';

import { GradientBlock } from '@/components/ui/gradient-block';

function StarryBackground() {
  // Increased number of stars and adjusted their properties
  const stars = Array.from({ length: 100 }, (_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: Math.random() * 2.5 + 1.5, // Size between 1.5-4px (slightly larger)
    opacity: Math.random() * 0.7 + 0.3, // Opacity between 0.3-1.0 (brighter)
  }));

  return (
    <div className="absolute inset-0 overflow-hidden">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white/90" // Made white more solid
          style={{
            top: star.top,
            left: star.left,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            boxShadow: '0 0 4px rgba(255, 255, 255, 0.5)', // Added subtle glow
          }}
        />
      ))}
    </div>
  );
}

export function Background() {
  return (
    <div className="pointer-events-none fixed inset-0">
      <div className="absolute inset-0 bg-gradient-to-b from-[#07071C] via-[#14154F] to-[#07071C]" />
      <StarryBackground />
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]" />

      <GradientBlock />

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-1/2 top-1/4 h-[1000px] w-[1000px] animate-pulse bg-[#14F195] opacity-[0.015] blur-[100px]" />
        <div className="absolute -right-1/2 bottom-1/4 h-[1000px] w-[1000px] animate-pulse bg-[#9945FF] opacity-[0.015] blur-[100px] delay-1000" />
      </div>
    </div>
  );
}
