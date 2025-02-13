'use client';

import { Background } from '@/components/background';
import { Stats } from '@/components/features';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { HeroSection } from '@/components/hero-section';
import { Marquee } from '@/components/ui/marquee';
import { ValueProps } from '@/components/value-props';

export function LandingPage() {
  return (
    <div className="relative min-h-screen bg-[#07071C] text-white">
      <Background />
      <Header />
      <HeroSection />

      {/* See what I can do section */}
      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-16 text-center text-4xl font-medium text-white">
            see what i can do{' '}
            <span
              role="img"
              aria-label="pointing down"
              className="inline-block animate-bounce"
            >
              👇
            </span>
          </h2>

          <Marquee className="py-4" speed={25}>
            {/* Market Sentiment Card */}
            <div className="group relative flex h-[220px] w-[320px] shrink-0 flex-col overflow-hidden rounded-2xl border-2 border-white/20 bg-black/20 p-4 shadow-2xl backdrop-blur-md transition-all duration-300 hover:border-white/30">
              <div className="mb-2.5 flex items-center gap-2.5">
                <div className="rounded-full bg-gradient-to-br from-[#FF5E5E] to-[#FFB956] p-2">
                  <svg
                    className="h-4 w-4 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      d="M7 7h10M7 12h10m-10 5h10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-sm font-medium text-white">
                  What is the current sentiment?
                </h3>
              </div>
              <div className="flex flex-1 flex-col justify-between">
                <p className="text-sm text-white/60">
                  Real-time sentiment analysis from X and beyond.
                </p>
                <p className="mt-auto text-xs text-white/40">
                  Dara analyzes market sentiment across crypto sectors by
                  monitoring social signals from Twitter (X) and Threads
                  discussions.
                </p>
              </div>
            </div>

            {/* Twitter History Card */}
            <div className="group relative flex h-[220px] w-[320px] shrink-0 flex-col overflow-hidden rounded-2xl border-2 border-white/20 bg-black/20 p-4 shadow-2xl backdrop-blur-md transition-all duration-300 hover:border-white/30">
              <div className="mb-2.5 flex items-center gap-2.5">
                <div className="rounded-full bg-gradient-to-br from-[#FF5E5E] to-[#FFB956] p-2">
                  <svg
                    className="h-4 w-4 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-sm font-medium text-white">
                  Get twitter handle history
                </h3>
              </div>
              <div className="flex flex-1 flex-col justify-between">
                <p className="text-sm text-white/60">
                  Track username changes and account history.
                </p>
                <p className="mt-auto text-xs text-white/40">
                  Dara leverages Twitter (X) APIs to reveal the complete history
                  and evolution of any handle over time.
                </p>
              </div>
            </div>

            {/* Whale Info Card */}
            <div className="group relative flex h-[220px] w-[320px] shrink-0 flex-col overflow-hidden rounded-2xl border-2 border-white/20 bg-black/20 p-4 shadow-2xl backdrop-blur-md transition-all duration-300 hover:border-white/30">
              <div className="mb-2.5 flex items-center gap-2.5">
                <div className="rounded-full bg-gradient-to-br from-[#FF5E5E] to-[#FFB956] p-2">
                  <svg
                    className="h-4 w-4 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z M9 12l2 2 4-4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-sm font-medium text-white">
                  Retrieve whale info
                </h3>
              </div>
              <div className="flex flex-1 flex-col justify-between">
                <p className="text-sm text-white/60">
                  Deep dive into token holder analytics.
                </p>
                <p className="mt-auto text-xs text-white/40">
                  Dara provides detailed insights into whale activity and token
                  distribution patterns with comprehensive analytics.
                </p>
              </div>
            </div>
          </Marquee>
        </div>
      </section>

      <ValueProps />
      <Stats />
      <Footer />
    </div>
  );
}
