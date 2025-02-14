'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Geist } from 'next/font/google';

const geist = Geist({ subsets: ['latin'] });

export function PartnersSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="bg-white/5 rounded-3xl p-8">
          <h2 className={`text-4xl font-extrabold text-[#FFB347] text-center mb-16 tracking-wide drop-shadow-sm ${geist.className}`}>
            Partners
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 items-start">
            <div className="flex flex-col items-center gap-4">
              <Link href="https://hyperfoundation.org/" target="_blank" rel="noopener noreferrer" className="group">
                <Image
                  src="/partners/hyperliquid.svg"
                  alt="Hyperliquid"
                  width={160}
                  height={40}
                  className="w-auto h-10 opacity-60 group-hover:opacity-100 transition-opacity"
                />
              </Link>
              <Link href="https://hyperfoundation.org/" target="_blank" rel="noopener noreferrer" className="hover:text-white/80 transition-colors">
                <span className="text-lg text-white font-extrabold tracking-wide drop-shadow-sm">Hyperliquid</span>
              </Link>
            </div>

            <div className="flex flex-col items-center gap-4">
              <Link href="https://www.arc.fun/" target="_blank" rel="noopener noreferrer" className="group">
                <Image
                  src="/partners/arc.svg"
                  alt="Arc.fun"
                  width={120}
                  height={40}
                  className="w-auto h-10 opacity-60 group-hover:opacity-100 transition-opacity"
                />
              </Link>
              <Link href="https://www.arc.fun/" target="_blank" rel="noopener noreferrer" className="hover:text-white/80 transition-colors">
                <span className="text-lg text-white font-extrabold tracking-wide drop-shadow-sm">Arc.fun</span>
              </Link>
            </div>

            <div className="flex flex-col items-center gap-4">
              <Link href="https://www.drift.trade/" target="_blank" rel="noopener noreferrer" className="group">
                <Image
                  src="/partners/drift.svg"
                  alt="Drift"
                  width={120}
                  height={40}
                  className="w-auto h-10 opacity-60 group-hover:opacity-100 transition-opacity"
                />
              </Link>
              <Link href="https://www.drift.trade/" target="_blank" rel="noopener noreferrer" className="hover:text-white/80 transition-colors">
                <span className="text-lg text-white font-extrabold tracking-wide drop-shadow-sm">Drift</span>
              </Link>
            </div>

            <div className="flex flex-col items-center gap-4">
              <Link href="https://www.privy.io/" target="_blank" rel="noopener noreferrer" className="group">
                <Image
                  src="/partners/privy.svg"
                  alt="Privy"
                  width={140}
                  height={40}
                  className="w-auto h-10 opacity-60 group-hover:opacity-100 transition-opacity"
                />
              </Link>
              <Link href="https://www.privy.io/" target="_blank" rel="noopener noreferrer" className="hover:text-white/80 transition-colors">
                <span className="text-lg text-white font-extrabold tracking-wide drop-shadow-sm">Privy</span>
              </Link>
            </div>

            <div className="flex flex-col items-center gap-4">
              <Link href="https://jup.ag/" target="_blank" rel="noopener noreferrer" className="group">
                <Image
                  src="/partners/jupiter.svg"
                  alt="Jupiter"
                  width={120}
                  height={40}
                  className="w-auto h-10 opacity-60 group-hover:opacity-100 transition-opacity"
                />
              </Link>
              <Link href="https://jup.ag/" target="_blank" rel="noopener noreferrer" className="hover:text-white/80 transition-colors">
                <span className="text-lg text-white font-extrabold tracking-wide drop-shadow-sm">Jupiter</span>
              </Link>
            </div>

            <div className="flex flex-col items-center gap-4">
              <Link href="https://www.nvidia.com/" target="_blank" rel="noopener noreferrer" className="group">
                <Image
                  src="/partners/nvidia.svg"
                  alt="NVIDIA"
                  width={160}
                  height={40}
                  className="w-auto h-10 opacity-60 group-hover:opacity-100 transition-opacity"
                />
              </Link>
              <Link href="https://www.nvidia.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white/80 transition-colors">
                <span className="text-lg text-white font-extrabold tracking-wide drop-shadow-sm">NVIDIA</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 