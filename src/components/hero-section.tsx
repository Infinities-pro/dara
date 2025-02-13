'use client';

import { useRouter } from 'next/navigation';

import { useLogin } from '@privy-io/react-auth';

import BlurFade from '@/components/ui/blur-fade';
import { Button } from '@/components/ui/button';
import { RainbowButton } from '@/components/ui/rainbow-button';
import { createChat } from '@/server/actions/chat';

export function HeroSection() {
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
    <main className="relative pb-20 pt-52">
      <div className="mx-auto max-w-7xl px-6">
        <BlurFade className="text-center">
          <h1 className="animate-fade-in text-4xl font-bold tracking-tight md:text-6xl">
            Your AI Copilot for{' '}
            <span className="animate-gradient bg-300% bg-gradient-to-r from-[#FF4D4D] via-[#FF8F3F] to-[#FFB347] bg-clip-text text-transparent">
              Solana Trading
            </span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg text-white/60 transition-opacity duration-300 hover:text-white/80 md:text-xl">
            Get intelligent market insights, real-time analysis, and smart
            trading suggestions. Let AI enhance your Solana trading strategy.
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <RainbowButton
              onClick={() => login()}
              className="group w-full px-8 py-3 text-lg font-medium transition-transform hover:scale-105 sm:w-auto"
            >
              Start Trading
            </RainbowButton>
            <Button
              variant="outline"
              className="w-full border-white/10 bg-white/5 px-8 py-3 text-lg font-medium text-white backdrop-blur-sm transition-all hover:scale-105 hover:border-white/20 hover:bg-white/10 sm:w-auto"
              onClick={() =>
                window.open('https://docs.heysolana.xyz', '_blank')
              }
            >
              Read Docs
            </Button>
          </div>
        </BlurFade>
      </div>

      {/* Add decorative elements */}
      <div className="pointer-events-none absolute left-0 right-0 top-0 -z-10 mx-auto max-w-7xl overflow-hidden">
        <div className="absolute -left-4 top-0 h-72 w-72 rounded-full bg-[#FF4D4D] opacity-20 blur-[100px]" />
        <div className="absolute -right-4 top-0 h-72 w-72 rounded-full bg-[#FFB347] opacity-20 blur-[100px]" />
      </div>
    </main>
  );
}
