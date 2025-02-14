'use client';

import Link from 'next/link';
import { Brand } from '@/components/logo';
import { RiTwitterXFill, RiGithubFill, RiDiscordFill } from '@remixicon/react';

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.08] bg-[#07071C]/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Left - Brand */}
          <Link href="/" className="flex items-center">
            <Brand className="h-6" />
          </Link>

          {/* Center - Navigation */}
          <div className="flex items-center gap-6">
            <Link 
              href="/autonomous-ai-agent" 
              className="text-sm text-white/60 hover:text-white transition-colors"
            >
              Autonomous AI Agent
            </Link>
            <Link 
              href="/terms" 
              className="text-sm text-white/60 hover:text-white transition-colors"
            >
              Terms
            </Link>
          </div>

          {/* Right - Copyright and Social */}
          <div className="flex items-center gap-6">
            <span className="text-sm text-white/60">
              © 2025 AskJimmy, Inc. All rights reserved.
            </span>
            <div className="flex items-center gap-4">
              <Link
                href="https://twitter.com/askjimmy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors"
              >
                <RiTwitterXFill className="h-5 w-5" />
              </Link>
              <Link
                href="https://github.com/askjimmy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors"
              >
                <RiGithubFill className="h-5 w-5" />
              </Link>
              <Link
                href="https://discord.gg/askjimmy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors"
              >
                <RiDiscordFill className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
