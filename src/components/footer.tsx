'use client';

import { GitHubLogoIcon } from '@radix-ui/react-icons';
import { RiDiscordFill, RiTwitterXFill } from '@remixicon/react';
import { BookOpenIcon } from 'lucide-react';

const navItems = [
  {
    label: 'GitHub',
    href: 'https://github.com/darash',
    icon: GitHubLogoIcon,
    external: true,
  },
  {
    label: 'Docs',
    href: 'https://docs.dara.sh',
    icon: BookOpenIcon,
    external: true,
  },
  {
    label: 'Discord',
    href: 'https://discord.gg/darash',
    icon: RiDiscordFill,
    external: true,
  },
  {
    label: '',
    href: 'https://x.com/ask_dara',
    icon: RiTwitterXFill,
    external: true,
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 py-8">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            <span className="text-sm text-white/60">
              © {new Date().getFullYear()} DARA
            </span>
          </div>
          <div className="flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 transition-colors hover:text-white"
              >
                <item.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
