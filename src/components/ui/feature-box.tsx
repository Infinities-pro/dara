'use client';

import { motion } from 'framer-motion';

interface FeatureBoxProps {
  title: string;
  description: string;
  children?: React.ReactNode;
  delay?: number;
}

export function FeatureBox({ 
  title, 
  description, 
  children,
  delay = 0 
}: FeatureBoxProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      style={{
        background: 'linear-gradient(135deg, #4F46E5 0%, #0EA5E9 100%)',
      }}
      className="rounded-[32px] p-8 text-white overflow-hidden relative"
    >
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />

      {/* Content */}
      <div className="relative">
        {/* Header */}
        <h2 className="text-[24px] font-bold">
          {title}
        </h2>
        <p className="mt-1 text-[16px] text-white/80">
          {description}
        </p>

        {/* Content Card */}
        <div className="mt-6 bg-white/[0.03] backdrop-blur-sm rounded-[24px] p-6 border border-white/10">
          {children}
        </div>
      </div>
    </motion.div>
  );
}

// Helper components for consistent styling
export function FeatureTag({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-block bg-white/10 rounded-md px-4 py-2 text-[14px] font-medium text-white/90 mb-2 mr-2 backdrop-blur-sm">
      {children}
    </div>
  );
}

export function FeatureBullet({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 text-[14px] text-white/80">
      <span className="w-1 h-1 bg-white/80 rounded-full" />
      <span>{children}</span>
    </div>
  );
}

// Example usage:
/*
<div className="grid md:grid-cols-2 gap-6 p-8 bg-gray-900">
  <FeatureBox
    title="Real-time Analytics"
    description="Monitor your performance with advanced metrics"
  >
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 bg-white/10 rounded-lg backdrop-blur-sm" />
      <div className="space-y-4">
        <div className="h-6 bg-white/5 rounded-md w-24" />
        <div className="space-y-2 text-[14px] text-white/80">
          <div>Performance</div>
          <div>Engagement</div>
          <div>Growth</div>
        </div>
      </div>
    </div>
  </FeatureBox>

  <FeatureBox
    title="Smart Insights"
    description="AI-powered recommendations for better results"
  >
    <div className="space-y-6">
      <div className="space-y-2">
        <FeatureTag>Trending</FeatureTag>
        <FeatureTag>Popular</FeatureTag>
      </div>
      
      <div className="space-y-2">
        <FeatureBullet>Market Analysis</FeatureBullet>
        <FeatureBullet>Growth Opportunities</FeatureBullet>
      </div>

      <div className="pt-4 text-[14px] text-white/80">
        Optimize your strategy
      </div>
    </div>
  </FeatureBox>
</div>
*/ 