'use client';

import { LockedFeature } from '@/components/ui/locked-feature';

export default function LiquidityManagerPage() {
  return (
    <LockedFeature
      iconName="droplets"
      title="Liquidity Manager"
      description="Advanced tools for managing and monitoring liquidity positions across multiple DEXs and pools."
    />
  );
} 