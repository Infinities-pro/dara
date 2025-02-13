'use client';

import { LockedFeature } from '@/components/ui/locked-feature';

export default function WhaleTrackerPage() {
  return (
    <LockedFeature
      iconName="binoculars"
      title="Whale Tracker"
      description="Track large transactions and wallet movements across multiple chains to identify significant market players and trends."
    />
  );
} 