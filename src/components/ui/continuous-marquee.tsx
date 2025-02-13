'use client';

import { cn } from "@/lib/utils";

interface MarqueeProps {
  children: React.ReactNode;
  direction?: 'left' | 'right';
  speed?: number;
  className?: string;
}

export function ContinuousMarquee({ 
  children, 
  direction = 'left', 
  speed = 40, 
  className 
}: MarqueeProps) {
  return (
    <div className={cn("relative flex overflow-hidden", className)}>
      <div
        className="animate-marquee flex min-w-full shrink-0 items-center justify-around gap-6"
        style={{
          animationDirection: direction === 'left' ? 'normal' : 'reverse',
          animationDuration: `${speed}s`,
        }}
      >
        {children}
      </div>
      <div
        className="animate-marquee flex min-w-full shrink-0 items-center justify-around gap-6"
        style={{
          animationDirection: direction === 'left' ? 'normal' : 'reverse',
          animationDuration: `${speed}s`,
        }}
      >
        {children}
      </div>
    </div>
  );
}