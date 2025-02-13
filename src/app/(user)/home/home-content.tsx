'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';

import { usePathname } from 'next/navigation';

import { JSONValue } from 'ai';
import { useChat } from 'ai/react';
import { Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import { v4 as uuidv4 } from 'uuid';

import ChatInterface from '@/app/(user)/chat/[id]/chat-interface';
import AnimatedShinyText from '@/components/ui/animated-shiny-text';
import { Badge } from '@/components/ui/badge';
import BlurFade from '@/components/ui/blur-fade';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import ShootingStars from '@/components/ui/shooting-stars';
import TypingAnimation from '@/components/ui/typing-animation';
import { useConversations } from '@/hooks/use-conversations';
import { useUser } from '@/hooks/use-user';
import { cn } from '@/lib/utils';

import { IntegrationsGrid } from './components/integrations-grid';
import { ConversationInput } from './conversation-input';
import { getRandomSuggestions } from './data/suggestions';
import { SuggestionCard } from './suggestion-card';

interface SectionTitleProps {
  children: React.ReactNode;
}

function SectionTitle({ children }: SectionTitleProps) {
  return (
    <h2 className="mb-2 px-1 text-sm font-medium text-muted-foreground/80">
      {children}
    </h2>
  );
}

const quickActions = [
  { label: 'Market Trends', icon: '📊' },
  { label: 'Token Search', icon: '🔎' },
  { label: 'Snipe', icon: '🎯' },
  { label: 'Audit Token', icon: '🔒' },
  { label: 'Launch Token', icon: '🚀' },
];

export function HomeContent() {
  const pathname = usePathname();
  const suggestions = useMemo(() => getRandomSuggestions(6), []);
  const [showChat, setShowChat] = useState(false);
  const [chatId, setChatId] = useState(() => uuidv4());
  const { user, isLoading } = useUser();

  const { conversations, refreshConversations } = useConversations(user?.id);

  const resetChat = useCallback(() => {
    setShowChat(false);
    setChatId(uuidv4());
  }, []);

  const { messages, input, handleSubmit, setInput } = useChat({
    id: chatId,
    initialMessages: [],
    body: { id: chatId },
    onFinish: () => {
      // Only refresh if we have a new conversation that's not in the list
      if (chatId && !conversations?.find((conv) => conv.id === chatId)) {
        refreshConversations();
      }
    },
    experimental_prepareRequestBody: ({ messages }) => {
      return {
        message: messages[messages.length - 1],
        id: chatId,
      } as unknown as JSONValue;
    },
  });

  const handleSend = async (value: string) => {
    if (!value.trim()) return;

    const fakeEvent = new Event('submit') as any;
    fakeEvent.preventDefault = () => {};

    await handleSubmit(fakeEvent, { data: { content: value } });
    setShowChat(true);
    window.history.replaceState(null, '', `/chat/${chatId}`);
  };

  // Reset chat when pathname changes to /home
  useEffect(() => {
    if (pathname === '/home') {
      resetChat();
    }
  }, [pathname, resetChat]);

  // 监听浏览器的前进后退
  useEffect(() => {
    const handlePopState = () => {
      if (location.pathname === '/home') {
        resetChat();
      } else if (location.pathname === `/chat/${chatId}`) {
        setShowChat(true);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [chatId, resetChat]);

  if (isLoading) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
      </div>
    );
  }

  const mainContent = (
    <div className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col items-center justify-center px-6 py-12">
      {/* Background elements */}
      <div className="fixed inset-0">
        {/* Dark gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#07071C] via-[#0D0B1F] to-[#07071C]" />

        {/* Animated gradient overlay */}
        <div className="absolute inset-0 animate-pulse bg-gradient-to-b from-transparent via-[#FF4D4D]/5 to-transparent" />

        {/* Mesh texture */}
        <div className="absolute inset-0 bg-[url('/mesh.png')] opacity-[0.015] mix-blend-screen" />

        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[url('/grid.png')] opacity-[0.02]" />

        {/* Gradient orbs */}
        <div className="absolute -left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-gradient-to-r from-[#FF4D4D] to-[#FFB347] opacity-20 blur-[120px]" />
        <div className="absolute -right-1/4 top-1/3 h-[500px] w-[500px] rounded-full bg-gradient-to-r from-[#FF4D4D] to-[#FFB347] opacity-20 blur-[120px]" />

        {/* Shooting stars effect */}
        <ShootingStars />
      </div>

      {/* Content */}
      <div className="relative mx-auto w-full max-w-3xl space-y-8">
        {/* Header Card */}
        <div className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-br from-[#FF4D4D]/5 via-[#FF8F3F]/5 to-[#FFB347]/5 p-6 shadow-2xl backdrop-blur-md transition-all duration-300 hover:border-white/[0.12]">
          <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-gradient-to-r from-[#FF4D4D] to-[#FFB347] opacity-20 blur-[50px] transition-opacity group-hover:opacity-30" />
          <h3 className="text-2xl font-semibold">
            Dara&apos;s got your back in the Solana world.
          </h3>
          <p className="text-white/60">
            get token info, swap assets, set alerts, investigate, audit & more -
            all in one.
          </p>
        </div>

        {/* Suggestions Grid */}
        <div className="grid grid-cols-2 gap-3">
          {suggestions.map((suggestion, index) => (
            <SuggestionCard
              key={suggestion.title}
              {...suggestion}
              delay={0.1 + index * 0.1}
              onSelect={setInput}
            />
          ))}
        </div>

        {/* Chat Input */}
        <div className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-br from-[#FF4D4D]/5 via-[#FF8F3F]/5 to-[#FFB347]/5 p-4 shadow-2xl backdrop-blur-md transition-all duration-300 hover:border-white/[0.12]">
          <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-gradient-to-r from-[#FF4D4D] to-[#FFB347] opacity-20 blur-[50px] transition-opacity group-hover:opacity-30" />
          <div className="relative">
            <ConversationInput
              value={input}
              onChange={setInput}
              onSubmit={handleSend}
              placeholder="What can I do for you?"
            />

            {/* Quick Actions */}
            <div className="mt-4 flex gap-2 overflow-x-auto py-2">
              {quickActions.map((action) => (
                <button
                  key={action.label}
                  type="button"
                  className="flex items-center gap-2 rounded-full border border-white/[0.08] bg-gradient-to-r from-[#FF4D4D]/5 to-[#FFB347]/5 px-4 py-2 text-sm shadow-lg backdrop-blur-md transition-all duration-300 hover:border-white/[0.12] hover:from-[#FF4D4D]/10 hover:to-[#FFB347]/10"
                >
                  <span>{action.icon}</span>
                  <span>{action.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="relative h-screen">
      {!showChat && (
        <div
          className={cn(
            'absolute inset-0 overflow-y-auto overflow-x-hidden transition-opacity duration-300 ',
            showChat ? 'pointer-events-none opacity-0' : 'opacity-100',
          )}
        >
          {mainContent}
        </div>
      )}
      {showChat && (
        <div
          className={cn(
            'absolute inset-0 transition-opacity duration-300',
            showChat ? 'opacity-100' : 'pointer-events-none opacity-0',
          )}
        >
          <ChatInterface id={chatId} initialMessages={messages} />
        </div>
      )}
    </div>
  );
}
