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
          <h2 className="mb-16 text-center text-4xl font-medium tracking-tight">
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
            {/* Bundle Checker Card */}
            <div className="group relative mx-4 flex h-[240px] w-[340px] shrink-0 flex-col overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-white/[0.08] p-6 shadow-2xl backdrop-blur-md transition-all duration-500 hover:border-white/20 hover:shadow-[#FFB347]/5">
              {/* Subtle gradient orb */}
              <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-gradient-to-r from-[#FF5E5E]/20 to-[#FFB956]/20 blur-[32px] transition-opacity group-hover:opacity-70" />

              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-xl bg-gradient-to-br from-[#FF5E5E] to-[#FFB956] p-2.5 shadow-lg">
                  <svg
                    className="h-5 w-5 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-base font-medium text-white">
                  Bundle Checker
                </h3>
              </div>

              <div className="relative flex flex-1 flex-col justify-between">
                <p className="text-base leading-relaxed text-white/70 transition-colors group-hover:text-white/80">
                  Detect token bundles and analyze launch patterns.
                </p>
                <p className="mt-auto text-sm text-white/40 transition-colors group-hover:text-white/50">
                  Scan for suspicious block activity, insider trading signals,
                  and token distribution anomalies at launch.
                </p>
              </div>
            </div>

            {/* Twitter History Card */}
            <div className="group relative mx-4 flex h-[240px] w-[340px] shrink-0 flex-col overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-white/[0.08] p-6 shadow-2xl backdrop-blur-md transition-all duration-500 hover:border-white/20 hover:shadow-[#FFB347]/5">
              {/* Subtle gradient orb */}
              <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-gradient-to-r from-[#FF5E5E]/20 to-[#FFB956]/20 blur-[32px] transition-opacity group-hover:opacity-70" />

              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-xl bg-gradient-to-br from-[#FF5E5E] to-[#FFB956] p-2.5 shadow-lg">
                  <svg
                    className="h-5 w-5 text-white"
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
                <h3 className="text-base font-medium text-white">
                  Get twitter handle history
                </h3>
              </div>

              <div className="relative flex flex-1 flex-col justify-between">
                <p className="text-base leading-relaxed text-white/70 transition-colors group-hover:text-white/80">
                  Track username changes and account history.
                </p>
                <p className="mt-auto text-sm text-white/40 transition-colors group-hover:text-white/50">
                  Dara leverages Twitter (X) APIs to reveal the complete history
                  and evolution of any handle over time.
                </p>
              </div>
            </div>

            {/* Whale Info Card */}
            <div className="group relative mx-4 flex h-[240px] w-[340px] shrink-0 flex-col overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-white/[0.08] p-6 shadow-2xl backdrop-blur-md transition-all duration-500 hover:border-white/20 hover:shadow-[#FFB347]/5">
              {/* Subtle gradient orb */}
              <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-gradient-to-r from-[#FF5E5E]/20 to-[#FFB956]/20 blur-[32px] transition-opacity group-hover:opacity-70" />

              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-xl bg-gradient-to-br from-[#FF5E5E] to-[#FFB956] p-2.5 shadow-lg">
                  <svg
                    className="h-5 w-5 text-white"
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
                <h3 className="text-base font-medium text-white">
                  Retrieve whale info
                </h3>
              </div>

              <div className="relative flex flex-1 flex-col justify-between">
                <p className="text-base leading-relaxed text-white/70 transition-colors group-hover:text-white/80">
                  Deep dive into token holder analytics.
                </p>
                <p className="mt-auto text-sm text-white/40 transition-colors group-hover:text-white/50">
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
