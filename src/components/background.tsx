'use client';

import ShootingStars from '@/components/ui/shooting-stars';
import { GradientBlock } from '@/components/ui/gradient-block';

export function Background() {
  return (
    <div className="fixed inset-0 pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-b from-[#07071C] via-[#14154F] to-[#07071C]" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]" />
      <ShootingStars />
      
      <GradientBlock />
      
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-1/2 top-1/4 w-[1000px] h-[1000px] bg-[#14F195] opacity-[0.015] blur-[100px] animate-pulse" />
        <div className="absolute -right-1/2 bottom-1/4 w-[1000px] h-[1000px] bg-[#9945FF] opacity-[0.015] blur-[100px] animate-pulse delay-1000" />
      </div>
    </div>
  );
} 