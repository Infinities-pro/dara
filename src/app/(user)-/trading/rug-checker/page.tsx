'use client';

import { LockedFeature } from '@/components/ui/locked-feature';

export default function RugCheckerPage() {
  return (
    <LockedFeature
      iconName="shield-alert"
      title="Rug Checker"
      description="Analyze smart contracts and token metrics to identify potential risks and suspicious patterns in crypto projects."
    />
  );
} 