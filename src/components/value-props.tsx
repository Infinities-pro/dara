'use client';

import BlurFade from '@/components/ui/blur-fade';
import ScrollReveal from '@/components/ui/scroll-reveal';

export function ValueProps() {
  return (
    <div className="mt-32">
      <BlurFade className="mb-16 text-center">
        <h2 className="text-4xl font-bold">
          Your AI Copilot for Solana Trading
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-white/60">
          Get intelligent market insights, real-time analysis, and smart trading
          suggestions. Let AI enhance your Solana trading strategy.
        </p>
      </BlurFade>

      <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2">
        <ScrollReveal>
          <div className="group relative h-full overflow-hidden rounded-3xl bg-gradient-to-br from-[#FF4D4D]/10 via-[#FF8F3F]/10 to-[#FFB347]/10 p-12 backdrop-blur-sm">
            <div className="relative">
              <h3 className="mb-3 text-3xl font-semibold">
                Dara is the whole package.
              </h3>
              <p className="text-lg text-white/60">
                it&apos;s the only companion you need.
              </p>

              <div className="mt-8 rounded-2xl bg-white p-6">
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
          <div className="group relative h-full overflow-hidden rounded-3xl bg-gradient-to-br from-[#FF4D4D]/10 via-[#FF8F3F]/10 to-[#FFB347]/10 p-12 backdrop-blur-sm">
            <div className="relative">
              <h3 className="mb-3 text-3xl font-semibold">Twitter Checker</h3>
              <p className="text-lg text-white/60">
                Check any Twitter username&apos;s history instantly - usernames,
                display names, bios & more.
              </p>

              <div className="mt-8 rounded-2xl bg-white p-6">
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
    </div>
  );
}
