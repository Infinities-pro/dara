'use client';

import { Lock, LucideIcon, Binoculars, ShieldAlert, Droplets, ArrowLeftRight } from 'lucide-react';
import { Button } from './button';
import BlurFade from './blur-fade';

// Create an icon map
const ICON_MAP = {
  'lock': Lock,
  'binoculars': Binoculars,
  'shield-alert': ShieldAlert,
  'droplets': Droplets,
  'arrow-left-right': ArrowLeftRight,
} as const;

type IconName = keyof typeof ICON_MAP;

interface LockedFeatureProps {
  title: string;
  description: string;
  iconName?: IconName;
}

export function LockedFeature({ title, description, iconName = 'lock' }: LockedFeatureProps) {
  const Icon = ICON_MAP[iconName];
  
  return (
    <div className="flex h-[calc(100vh-4rem)] flex-col items-center justify-center">
      {/* Background effects */}
      <div className="fixed inset-0 bg-gradient-to-b from-[#0A0A0B] via-[#0D0B1F] to-[#0A0A0B]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#4F46E5]/10 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[url('/mesh.png')] opacity-[0.015] mix-blend-screen" />
        <div className="absolute inset-0 bg-[url('/grid.png')] opacity-[0.02]" />
      </div>

      <BlurFade className="relative z-10 flex max-w-md flex-col items-center px-6 text-center">
        <div className="group relative overflow-hidden rounded-2xl border-2 border-white/[0.15] bg-black/20 p-8 shadow-2xl backdrop-blur-md transition-all duration-300 hover:border-white/30 hover:bg-black/30">
          {/* Gradient effects */}
          <div className="absolute inset-px rounded-2xl bg-gradient-to-r from-[#4F46E5]/20 to-purple-500/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <div className="absolute -right-32 -top-32 h-64 w-64 rounded-full bg-[#4F46E5]/5 blur-[64px] animate-pulse" />
          <div className="absolute -left-32 -bottom-32 h-64 w-64 rounded-full bg-purple-500/5 blur-[64px] animate-pulse delay-700" />

          <div className="relative">
            <Icon className="mx-auto mb-6 h-12 w-12 text-white/90" />
            
            <h1 className="mb-3 bg-gradient-to-b from-white to-white/70 bg-clip-text text-2xl font-bold tracking-tight text-transparent">
              {title}
            </h1>
            
            <p className="mb-8 text-white/60">
              {description}
            </p>

            <Button
              variant="outline"
              className="group/btn relative w-full border-white/20 bg-black/50 transition-all duration-300 hover:border-white/40 hover:bg-black/60"
            >
              <div className="absolute inset-0 rounded-md bg-gradient-to-r from-[#4F46E5]/10 to-purple-500/10 opacity-0 transition-opacity duration-300 group-hover/btn:opacity-100" />
              <span className="relative">Coming Soon</span>
            </Button>
          </div>
        </div>
      </BlurFade>
    </div>
  );
} 