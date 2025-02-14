'use client';

import Image from 'next/image';

export function PartnersSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 items-start">
          <div className="flex flex-col items-center gap-4">
            <Image
              src="/partners/hyperliquid.svg"
              alt="Hyperliquid"
              width={160}
              height={40}
              className="w-auto h-8 opacity-60 hover:opacity-100 transition-opacity"
            />
            <span className="text-lg text-white font-extrabold tracking-wide drop-shadow-sm">Hyperliquid</span>
          </div>

          <div className="flex flex-col items-center gap-4">
            <Image
              src="/partners/arc.svg"
              alt="Arc.fun"
              width={120}
              height={40}
              className="w-auto h-8 opacity-60 hover:opacity-100 transition-opacity"
            />
            <span className="text-lg text-white font-extrabold tracking-wide drop-shadow-sm">Arc.fun</span>
          </div>

          <div className="flex flex-col items-center gap-4">
            <Image
              src="/partners/drift.svg"
              alt="Drift"
              width={120}
              height={40}
              className="w-auto h-8 opacity-60 hover:opacity-100 transition-opacity"
            />
            <span className="text-lg text-white font-extrabold tracking-wide drop-shadow-sm">Drift</span>
          </div>

          <div className="flex flex-col items-center gap-4">
            <Image
              src="/partners/privy.svg"
              alt="Privy"
              width={140}
              height={40}
              className="w-auto h-8 opacity-60 hover:opacity-100 transition-opacity"
            />
            <span className="text-lg text-white font-extrabold tracking-wide drop-shadow-sm">Privy</span>
          </div>

          <div className="flex flex-col items-center gap-4">
            <Image
              src="/partners/jupiter.svg"
              alt="Jupiter"
              width={120}
              height={40}
              className="w-auto h-8 opacity-60 hover:opacity-100 transition-opacity"
            />
            <span className="text-lg text-white font-extrabold tracking-wide drop-shadow-sm">Jupiter</span>
          </div>

          <div className="flex flex-col items-center gap-4">
            <Image
              src="/partners/nvidia.svg"
              alt="NVIDIA"
              width={160}
              height={40}
              className="w-auto h-8 opacity-60 hover:opacity-100 transition-opacity"
            />
            <span className="text-lg text-white font-extrabold tracking-wide drop-shadow-sm">NVIDIA</span>
          </div>
        </div>
      </div>
    </section>
  );
} 