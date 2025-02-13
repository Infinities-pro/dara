'use client';

import Link from 'next/link';
import { LineChart } from 'lucide-react';
import { RiTwitterXFill } from '@remixicon/react';

export function FeaturesSection() {
  return (
    <section className="pb-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Twitter Checker Card */}
          <Link
            href="/twitter-checker"
            className="group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.02] p-8 backdrop-blur-xl transition-all hover:border-[#14F195]"
          >
            <div className="relative z-10 flex flex-col gap-4">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10">
                <RiTwitterXFill className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-medium text-white">Twitter Checker</h3>
              <p className="text-white/60">
                Check any Twitter username's history instantly - usernames, display names, bios & more.
              </p>
            </div>
            <div className="absolute right-0 top-0 h-full w-full bg-[url('/library.jpg')] bg-cover bg-center opacity-10 transition-opacity group-hover:opacity-20" />
          </Link>

          {/* Trading Floor Card */}
          <Link
            href="/trading-agent"
            className="group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.02] p-8 backdrop-blur-xl transition-all hover:border-[#14F195]"
          >
            <div className="relative z-10 flex flex-col gap-4">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10">
                <LineChart className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-medium text-white">Trading Agent</h3>
              <p className="text-white/60">
                Get intelligent market insights and real-time analysis to enhance your trading strategy.
              </p>
            </div>
            <div className="absolute right-0 top-0 h-full w-full bg-[url('/trading.jpg')] bg-cover bg-center opacity-10 transition-opacity group-hover:opacity-20" />
          </Link>
        </div>
      </div>
    </section>
  );
} 