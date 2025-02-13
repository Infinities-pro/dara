'use client';

import Link from 'next/link';
import { RiTwitterXFill, RiGithubFill, RiDiscordFill } from '@remixicon/react';

export function Footer() {
  return (
    <footer className="border-t border-white/[0.08] py-4">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between">
          {/* Left side - Links */}
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

          {/* Center - Copyright */}
          <div>
            <p className="text-sm text-white/60">
              © 2025 AskJimmy, Inc. All rights reserved.
            </p>
          </div>

          {/* Right side - Social icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://twitter.com/askjimmy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-colors"
            >
              <RiTwitterXFill className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/askjimmy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-colors"
            >
              <RiGithubFill className="h-5 w-5" />
            </a>
            <a
              href="https://discord.gg/askjimmy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-colors"
            >
              <RiDiscordFill className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
