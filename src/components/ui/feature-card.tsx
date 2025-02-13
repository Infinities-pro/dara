'use client';

import { cn } from '@/lib/utils';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

export function FeatureCard({
  icon,
  title,
  description,
  className,
}: FeatureCardProps) {
  return (
    <div
      className={cn(
        'group relative overflow-hidden transition-all',
        // Remove rounded corners and add larger blur
        'before:absolute before:inset-0 before:-z-10',
        'before:bg-black/20 before:backdrop-blur-2xl',
        // Gradient borders that fade out
        'after:absolute after:inset-0 after:-z-10',
        'after:bg-gradient-to-b after:p-[1px]',
        'after:from-white/10 after:via-white/[0.05] after:to-transparent',
        className,
      )}
    >
      {/* Soft glow effect */}
      <div className="absolute -inset-[1px] bg-gradient-to-b from-white/[0.02] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Main content with glass effect */}
      <div className="relative z-10 flex flex-col gap-4 bg-black/10 p-6 backdrop-blur-xl">
        {icon}
        <div>
          <h3 className="text-base font-medium text-white">{title}</h3>
          <p className="mt-1 text-sm text-neutral-400">{description}</p>
        </div>
      </div>

      {/* Background blur for better blending */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-black/20 to-transparent backdrop-blur-3xl" />
    </div>
  );
}
