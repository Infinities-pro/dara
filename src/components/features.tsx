'use client';

import BlurFade from '@/components/ui/blur-fade';
import ScrollReveal from '@/components/ui/scroll-reveal';

const stats = [
  {
    label: 'Lightning speeds',
    value: '250ms',
    unit: 'avg.',
    description: 'Dara is powered by Helius Geyser Plugin & Jito.',
  },
  {
    label: 'Get alpha quickly',
    value: '99%',
    unit: 'uptime',
    description: 'Enjoy reliable service with 99.9% uptime.',
  },
  {
    label: 'Promised SLA',
    value: '99%',
    unit: 'uptime',
    description: 'Enjoy reliable service with 99.9% uptime.',
  },
];

export function Stats() {
  return (
    <div className="mt-32">
      <BlurFade className="mb-16 text-center">
        <div className="mb-4 inline-block rounded-full bg-gradient-to-r from-[#FF4D4D]/10 to-[#FFB347]/10 px-4 py-1.5">
          <span className="bg-gradient-to-r from-[#FF4D4D] to-[#FFB347] bg-clip-text text-sm font-medium text-transparent">
            BY THE NUMBERS
          </span>
        </div>
        <h2 className="text-4xl font-bold">
          Impactful results, proven success
        </h2>
      </BlurFade>

      <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-3">
        {stats.map((stat, index) => (
          <ScrollReveal key={index} delay={index * 0.1}>
            <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur-sm transition-colors hover:bg-white/[0.04]">
              <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-gradient-to-r from-[#FF4D4D] to-[#FFB347] opacity-10 blur-[50px] transition-opacity group-hover:opacity-20" />

              <div className="relative">
                <div className="mb-4 inline-block rounded-full bg-gradient-to-r from-[#FF4D4D]/10 to-[#FFB347]/10 px-3 py-1">
                  <span className="text-sm font-medium text-white/80">
                    {stat.label}
                  </span>
                </div>

                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-bold">{stat.value}</span>
                  <span className="text-lg text-white/60">{stat.unit}</span>
                </div>

                <p className="mt-4 text-white/60">{stat.description}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
