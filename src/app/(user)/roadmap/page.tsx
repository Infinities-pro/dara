'use client';

import Roadmap from "@/components/roadmap/Roadmap";

export default function RoadmapPage() {
  return (
    <div className="relative min-h-screen">
      <div className="relative z-10 flex min-h-screen items-center justify-center py-12">
        <div className="mx-auto w-full max-w-5xl px-4">
          <div className="relative overflow-hidden rounded-2xl border border-white/[0.05] bg-black/30 p-8 shadow-2xl backdrop-blur-md">
            <div className="absolute -right-32 -top-32 h-64 w-64 rounded-full bg-[#4F46E5]/20 blur-3xl" />
            <div className="absolute -bottom-32 -left-32 h-64 w-64 rounded-full bg-purple-500/20 blur-3xl" />
            <div className="relative">
              <h1 className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-2xl font-semibold text-transparent">
                Roadmap
              </h1>
              <p className="mt-2 text-sm text-white/60">
                This roadmap shows our current plans, but we&apos;re just getting
                started. All completed features are actively maintained and updated.
              </p>
              <div className="mt-8">
                <Roadmap />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
