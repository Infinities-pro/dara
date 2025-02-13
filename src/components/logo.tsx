'use client';

import { cn } from '@/lib/utils';

interface BrandProps {
  className?: string;
}

export function Brand({ className }: BrandProps) {
  return (
    <span className={cn("text-xl font-semibold ml-4", className)}>
      Dara
    </span>
  );
}
