'use client';

import { Twitter } from 'lucide-react';

import { TwitterChat } from '@/components/twitter-checker/twitter-chat';

export default function TwitterCheckerPage() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-[#0A0A0B] via-[#1a1b1e] to-[#0A0A0B]">
      {/* Header Section */}
      <div className="mx-auto w-full max-w-3xl px-6 py-12">
        <div className="space-y-6">
          {/* Badge */}
          <div className="flex gap-2">
            <div className="inline-flex items-center rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-500">
              <Twitter className="mr-1 h-3.5 w-3.5" />
              THE LIGHTNING FAST TWITTER CHECKER
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            twitter history checker
            <span className="text-neutral-400">.</span>
          </h1>

          {/* Description */}
          <p className="text-lg text-neutral-400">
            Check any Twitter username&apos;s history instantly - usernames,
            display names, bios & more.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 px-6 pb-12">
        <div className="mx-auto w-full max-w-3xl">
          <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-black/40 backdrop-blur-xl">
            <div className="relative">
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-transparent opacity-50" />

              {/* Grid Pattern */}
              <div className="absolute inset-0 bg-[url('/grid.png')] opacity-[0.02]" />

              {/* Main Content */}
              <div className="relative">
                <TwitterChat />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
