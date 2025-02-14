'use client';

import Image from 'next/image';

export function PartnersSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 items-start">
          <div className="flex flex-col items-center gap-6">
            <Image
              src="/partners/columbia.svg"
              alt="Columbia University"
              width={160}
              height={40}
              className="w-auto h-8 opacity-60 hover:opacity-100 transition-opacity"
            />
            <span className="text-sm text-white/50">Columbia University</span>
          </div>

          <div className="flex flex-col items-center gap-6">
            <Image
              src="/partners/arc.svg"
              alt="Arc.fun"
              width={120}
              height={40}
              className="w-auto h-8 opacity-60 hover:opacity-100 transition-opacity"
            />
            <span className="text-sm text-white/50">Arc.fun</span>
          </div>

          <div className="flex flex-col items-center gap-6">
            <Image
              src="/partners/drift.svg"
              alt="Drift"
              width={120}
              height={40}
              className="w-auto h-8 opacity-60 hover:opacity-100 transition-opacity"
            />
            <span className="text-sm text-white/50">Drift</span>
          </div>

          <div className="flex flex-col items-center gap-6">
            <Image
              src="/partners/nvidia.svg"
              alt="NVIDIA"
              width={140}
              height={40}
              className="w-auto h-8 opacity-60 hover:opacity-100 transition-opacity"
            />
            <span className="text-sm text-white/50">NVIDIA</span>
          </div>

          <div className="flex flex-col items-center gap-6">
            <Image
              src="/partners/olas.svg"
              alt="Olas"
              width={120}
              height={40}
              className="w-auto h-8 opacity-60 hover:opacity-100 transition-opacity"
            />
            <span className="text-sm text-white/50">Olas</span>
          </div>

          <div className="flex flex-col items-center gap-6">
            <Image
              src="/partners/orderly.svg"
              alt="Orderly"
              width={160}
              height={40}
              className="w-auto h-8 opacity-60 hover:opacity-100 transition-opacity"
            />
            <span className="text-sm text-white/50">Orderly</span>
          </div>
        </div>
      </div>
    </section>
  );
} 