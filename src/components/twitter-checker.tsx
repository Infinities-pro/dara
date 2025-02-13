'use client';

import { TwitterChat } from './twitter-checker/twitter-chat';

export function TwitterChecker() {
  return (
    <div className="h-[400px] rounded-lg border border-white/[0.05] bg-black/20">
      <TwitterChat />
    </div>
  );
} 