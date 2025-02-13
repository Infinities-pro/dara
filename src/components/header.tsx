'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { useLogin } from '@privy-io/react-auth';
import { GitHubLogoIcon } from '@radix-ui/react-icons';
import { RiDiscordFill, RiTwitterXFill } from '@remixicon/react';
import { BookOpenIcon } from 'lucide-react';

import { Brand } from '@/components/logo';
import { RainbowButton } from '@/components/ui/rainbow-button';
import { createChat } from '@/server/actions/chat';

const navItems = [
  {
    label: 'GitHub',
    href: 'https://github.com/hey-solana',
    icon: GitHubLogoIcon,
    external: true,
  },
  {
    label: 'Docs',
    href: 'https://docs.heysolana.xyz',
    icon: BookOpenIcon,
    external: true,
  },
  {
    label: 'Discord',
    href: 'https://discord.gg/heysolana',
    icon: RiDiscordFill,
    external: true,
  },
  {
    label: '',
    href: 'https://x.com/heysolana',
    icon: RiTwitterXFill,
    external: true,
  },
];

export function Header() {
  const router = useRouter();
  const { login } = useLogin({
    onComplete: async () => {
      const params = new URLSearchParams(window.location.search);
      const redirectUri = params.get('redirect_uri');

      if (!redirectUri) {
        router.push('/home');
      } else {
        router.push(redirectUri);
      }
    },
  });

  return (
    <header className="fixed left-0 right-0 top-0 z-50">
      <nav className="mx-auto max-w-7xl px-6 py-4">
        <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl">
          <div className="relative flex items-center justify-between px-6 py-3">
            <Link href="/" className="flex items-center gap-3">
              <Brand className="h-8 w-8" />
              <span className="text-xl font-bold text-white">Dara</span>
            </Link>

            <div className="hidden items-center gap-6 md:flex">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </a>
              ))}
            </div>

            <RainbowButton
              onClick={() => login()}
              className="px-6 py-2 text-sm font-medium"
            >
              Connect Wallet
            </RainbowButton>
          </div>
        </div>
      </nav>
    </header>
  );
}
