'use client';

import { Background } from '@/components/background';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { HeroSection } from '@/components/hero-section';
import { FeaturesSection } from '@/components/features-section';
import { StatsSection } from '@/components/stats-section';
import { FaqSection } from '@/components/faq-section';

export function LandingPage() {
  return (
    <div className="relative min-h-screen flex flex-col bg-[#07071C] text-white">
      <Background />
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection />
        <StatsSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}
