'use client';

import { Twitter } from 'lucide-react';

import { TwitterChat } from '@/components/twitter-checker/twitter-chat';

export default function TwitterCheckerPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header Section */}
      <div className="mx-auto w-full max-w-3xl px-6 py-12">
        <div className="space-y-8">
          {/* Badge */}
          <div className="flex justify-center">
            <div className="inline-flex items-center rounded-full bg-gradient-to-r from-[#FF4D4D]/10 to-[#FFB347]/10 px-5 py-2">
              <Twitter className="mr-2 h-5 w-5 text-[#FF4D4D]" />
              <span className="bg-gradient-to-r from-[#FF4D4D] to-[#FFB347] bg-clip-text text-lg font-medium text-transparent">
                Twitter Checker
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="text-lg text-white/60">
            Check any Twitter username&apos;s history instantly - usernames,
            display names, bios &amp; more.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 px-6 pb-12">
        <div className="mx-auto w-full max-w-3xl">
          <div className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-black/20 backdrop-blur-xl">
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF4D4D]/5 via-transparent to-transparent opacity-50" />

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
  );
}
