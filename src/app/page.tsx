import { Background } from '@/components/background';
import { Header } from '@/components/header';
import { HeroSection } from '@/components/hero-section';
import { PartnersSection } from '@/components/partners-section';
import { FeaturesSection } from '@/components/features-section';
import { FaqSection } from '@/components/faq-section';

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col bg-[#07071C] text-white">
      <Background />
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <PartnersSection />
        <FeaturesSection />
        <FaqSection />
      </main>
    </div>
  );
}
