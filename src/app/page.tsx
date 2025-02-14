import { Background } from '@/components/background';
import { Header } from '@/components/header';
import { HeroSection } from '@/components/hero-section';
import { FeaturesGrid } from '@/components/features-grid';
import { PartnersSection } from '@/components/partners-section';
import { FaqSection } from '@/components/faq-section';
import { StatsSection } from '@/components/stats-section';

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col bg-[#07071C] text-white">
      <Background />
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <PartnersSection />
        <FeaturesGrid />
        <StatsSection />
        <FaqSection />
      </main>
    </div>
  );
}
