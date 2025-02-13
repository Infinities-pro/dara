'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';

import { usePathname } from 'next/navigation';

import { JSONValue } from 'ai';
import { useChat } from 'ai/react';
import { toast } from 'sonner';
import { v4 as uuidv4 } from 'uuid';

import ChatInterface from '@/app/(user)/chat/[id]/chat-interface';
import { Badge } from '@/components/ui/badge';
import BlurFade from '@/components/ui/blur-fade';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import TypingAnimation from '@/components/ui/typing-animation';
import { useConversations } from '@/hooks/use-conversations';
import { useUser } from '@/hooks/use-user';
import { cn } from '@/lib/utils';

import { IntegrationsGrid } from './components/integrations-grid';
import { ConversationInput } from './conversation-input';
import { getRandomSuggestions } from './data/suggestions';
import { SuggestionCard } from './suggestion-card';
import { Loader2 } from 'lucide-react';
import ShootingStars from '@/components/ui/shooting-stars';
import AnimatedShinyText from '@/components/ui/animated-shiny-text';

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
      <div className="fixed inset-0 bg-gradient-to-b from-[#0A0A0B] via-[#0D0B1F] to-[#0A0A0B]">
        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#4F46E5]/10 via-transparent to-transparent" />
        
        <ShootingStars />
        
        {/* Background elements */}
        <div className="absolute inset-0 bg-[url('/mesh.png')] opacity-[0.015] mix-blend-screen" />
        <div className="absolute -left-24 top-24 h-48 w-48 rounded-full bg-[#4F46E5]/20 blur-[100px] animate-pulse" />
        <div className="absolute -right-24 bottom-24 h-48 w-48 rounded-full bg-purple-500/20 blur-[100px] animate-pulse delay-1000" />
        <div className="absolute inset-0 bg-[url('/grid.png')] opacity-[0.02]" />
      </div>

      {/* Content */}
      <BlurFade delay={0.2}>
        <TypingAnimation
          className="mb-12 bg-gradient-to-b from-white to-white/70 bg-clip-text text-center text-4xl font-bold tracking-tight text-transparent md:text-5xl lg:text-6xl"
          segments={[
            { text: 'What can I ' },
            { text: 'help', isShiny: true },
            { text: ' with?' }
          ]}
        />
      </BlurFade>

      <div className="relative mx-auto w-full max-w-3xl space-y-8">
        <BlurFade delay={0.1}>
          <div className="relative overflow-hidden rounded-2xl border border-white/[0.05] bg-black/20 shadow-2xl backdrop-blur-md">
            <ConversationInput
              value={input}
              onChange={setInput}
              onSubmit={handleSend}
            />
          </div>
        </BlurFade>

        <div className="space-y-8">
          {/* Existing Suggestions Section */}
          <BlurFade delay={0.2}>
            <div className="space-y-2">
              <SectionTitle>
                <span className="text-white/80">Suggestions</span>
              </SectionTitle>
              <div className="grid grid-cols-2 gap-4">
                {suggestions.map((suggestion, index) => (
                  <SuggestionCard
                    key={suggestion.title}
                    {...suggestion}
                    delay={0.3 + index * 0.1}
                    onSelect={setInput}
                  />
                ))}
              </div>
            </div>
          </BlurFade>

          {/* Existing Integrations Section */}
          <BlurFade delay={0.4}>
            <div className="space-y-2">
              <SectionTitle>
                <span className="text-white/80">Integrations</span>
              </SectionTitle>
              <div className="relative overflow-hidden rounded-2xl border border-white/[0.05] bg-black/20 shadow-2xl backdrop-blur-md">
                <div className="absolute inset-px rounded-2xl bg-gradient-to-r from-[#4F46E5]/20 to-purple-500/20 opacity-0 transition-opacity group-hover:opacity-100" />
                <IntegrationsGrid />
              </div>
            </div>
          </BlurFade>
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
