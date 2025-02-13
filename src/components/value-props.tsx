'use client';

import BlurFade from '@/components/ui/blur-fade';
import ScrollReveal from '@/components/ui/scroll-reveal';

export function ValueProps() {
  return (
    <div className="mt-32">
      <BlurFade className="mb-16 text-center">
        <div className="mx-auto mb-8 h-px w-24 bg-gradient-to-r from-transparent via-[#FFB347]/30 to-transparent" />

        <div className="mb-4 inline-block rounded-full bg-gradient-to-r from-[#FF4D4D]/10 to-[#FFB347]/10 px-4 py-1.5 backdrop-blur-sm">
          <span className="bg-gradient-to-r from-[#FF4D4D] to-[#FFB347] bg-clip-text text-sm font-medium text-transparent">
            FEATURES
          </span>
        </div>
        <h2 className="relative mx-auto max-w-2xl text-4xl font-bold">
          <span className="relative inline-block">
            Dara handles everything for you
            <span className="text-[#FFB347]">.</span>
            <div className="absolute inset-0 -z-10 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/5 to-transparent transition-transform duration-1000 group-hover:translate-x-[100%]" />
          </span>
        </h2>
      </BlurFade>

      <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2">
        <ScrollReveal>
          <div className="motion-safe:animate-fade-in motion-safe:animate-delay-200 group relative h-full overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-br from-[#FF4D4D]/5 via-[#FF8F3F]/5 to-[#FFB347]/5 p-12 shadow-2xl backdrop-blur-md transition-all duration-500 hover:translate-y-[-2px] hover:border-white/[0.12] hover:shadow-[#FFB347]/5">
            <div className="pointer-events-none absolute inset-0 bg-[url('/mesh.png')] opacity-[0.02] mix-blend-overlay" />
            <div className="pointer-events-none absolute inset-0 bg-[url('/grid.png')] opacity-[0.01] mix-blend-overlay" />

            <div className="relative">
              <div className="animate-gradient-x mb-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#FF4D4D]/10 via-[#FFB347]/10 to-[#FF4D4D]/10 bg-[length:200%_100%] px-3 py-1">
                <div className="h-2 w-2 rounded-full bg-[#FFB347] shadow-[0_0_8px_rgba(255,179,71,0.5)] transition-all duration-300 group-hover:shadow-[0_0_12px_rgba(255,179,71,0.7)]" />
                <span className="text-sm font-medium text-white/80 transition-all duration-300 group-hover:tracking-wide group-hover:text-white">
                  AI Assistant
                </span>
              </div>

              <h3 className="mb-3 text-3xl font-semibold transition-all duration-300 group-hover:text-[#FFB347]">
                Dara is the whole package
                <span className="text-[#FFB347] transition-opacity group-hover:opacity-80">
                  .
                </span>
              </h3>
              <p className="text-lg text-white/60 transition-colors group-hover:text-white/70">
                it&apos;s the only companion you need.
              </p>

              <div className="mt-8 rounded-2xl bg-white/[0.95] p-6 shadow-lg backdrop-blur-sm transition-all duration-300 group-hover:scale-[1.01] group-hover:bg-white group-hover:shadow-xl group-hover:ring-1 group-hover:ring-white/20">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-black text-2xl font-bold text-white">
                      N
                    </div>
                    <div className="flex flex-col">
                      <span className="text-black">$NEUR</span>
                      <span className="text-xs text-black/60">
                        3N2ETkNpPNAkxcaXgkHkoYyDnQfs41Wmxxx5
                      </span>
                    </div>
                  </div>

                  <div className="space-y-4 text-black">
                    <div className="flex items-center justify-between border-b border-black/10 pb-4">
                      <span>Trust Score</span>
                      <span className="rounded-full bg-black px-3 py-1 text-sm text-white">
                        85/100
                      </span>
                    </div>

                    <div className="flex items-center justify-between border-b border-black/10 pb-4">
                      <span>Dev Buys</span>
                      <span className="text-black/60">
                        Moved tokens to 2 separate wallets.
                      </span>
                    </div>

                    <div className="flex items-center justify-between border-b border-black/10 pb-4">
                      <span>Block Analysis</span>
                      <span className="text-black/60">
                        Dev bought on the same block. All tokens moved.
                      </span>
                    </div>

                    <div className="flex items-center justify-between pb-4">
                      <span>Initial Buys Analysis</span>
                      <span className="text-black/60">
                        All moved tokens have been locked or burnt.
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-black/60">
                    $NEUR does not seem to be bundled.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="motion-safe:animate-fade-in motion-safe:animate-delay-200 group relative h-full overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-br from-[#FF4D4D]/5 via-[#FF8F3F]/5 to-[#FFB347]/5 p-12 shadow-2xl backdrop-blur-md transition-all duration-500 hover:translate-y-[-2px] hover:border-white/[0.12] hover:shadow-[#FFB347]/5">
            <div className="relative">
              <div className="mb-4 inline-block rounded-full bg-gradient-to-r from-[#FF4D4D]/10 to-[#FFB347]/10 px-3 py-1">
                <span className="text-sm font-medium text-white/80">
                  Analytics
                </span>
              </div>

              <h3 className="mb-3 text-3xl font-semibold transition-colors group-hover:text-[#FFB347]">
                Twitter Checker
                <span className="text-[#FFB347]">.</span>
              </h3>
              <p className="text-lg text-white/60">
                Check any Twitter username&apos;s history instantly - usernames,
                display names, bios & more.
              </p>

              <div className="mt-8 rounded-2xl bg-white/[0.95] p-6 shadow-lg backdrop-blur-sm">
                <div className="flex h-full flex-col justify-between">
                  <div className="space-y-6 text-black">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between border-b border-black/10 pb-4">
                        <span>Username History (1)</span>
                        <span className="text-black/60">
                          @elonmusk • Dec 30, 2011
                        </span>
                      </div>

                      <div>
                        <div className="space-y-3">
                          {[
                            ['Elon Musk', 'Sep 14, 2022'],
                            ['Naughtius Maximus', 'Sep 13, 2022'],
                            ['Lorde Edge', 'Nov 8, 2021'],
                            ['Harry Bōlz', 'Feb 11, 2024'],
                            ['Daddy DotCom', 'Jun 17, 2019'],
                          ].map(([name, date]) => (
                            <div
                              key={date}
                              className="flex items-center justify-between border-b border-black/10 pb-4"
                            >
                              <span>{name}</span>
                              <span className="text-black/60">{date}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-black/60">
                    Elon Musk has changed his Twitter name 128 times.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      <div className="pointer-events-none mt-16">
        <div className="mx-auto h-px w-48 bg-gradient-to-r from-transparent via-[#FFB347]/20 to-transparent" />
      </div>
    </div>
  );
}
