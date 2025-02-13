'use client';

import { useEffect, useRef, useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import { AlertCircle, Loader2, SendHorizontal, X } from 'lucide-react';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Textarea } from '@/components/ui/textarea';
import { useTwitterCheckerStore } from '@/hooks/store/twitter-checker';

interface TwitterHistoryData {
  username_history?: [string, number][];
  name_history?: [string, number][];
  bio_history?: [string, number][];
  location_history?: [string, number][];
}

export function TwitterChat() {
  const [input, setInput] = useState('');
  const [searchHistory, setSearchHistory] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<TwitterHistoryData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isLoading) return;

    const username = input.trim().replace('@', '');
    setIsLoading(true);
    setError(null);
    setResults(null);

    try {
      const response = await fetch(
        `/api/twitter/search-username?username=${encodeURIComponent(username)}`,
      );

      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('User not found');
        }
        if (response.status === 429) {
          throw new Error('Rate limit exceeded. Please try again later.');
        }
        throw new Error(`Failed to fetch Twitter data (${response.status})`);
      }

      const text = await response.text();

      if (!text) {
        // Valid empty response - user exists but no history
        setResults({
          username_history: [],
          name_history: [],
          bio_history: [],
          location_history: [],
        });
        return;
      }

      try {
        const data = JSON.parse(text);

        if ('error' in data) {
          throw new Error(data.error);
        }

        // Add to search history
        setSearchHistory((prev) => {
          const newHistory = [
            username,
            ...prev.filter((h) => h !== username),
          ].slice(0, 5);
          localStorage.setItem(
            'twitter-search-history',
            JSON.stringify(newHistory),
          );
          return newHistory;
        });

        setResults({
          username_history: [],
          name_history: [],
          bio_history: [],
          location_history: [],
          ...data,
        });
      } catch (parseError) {
        console.error('JSON Parse Error:', parseError);
        throw new Error('Invalid response from server');
      }
    } catch (error) {
      const message =
        error instanceof Error ? error.message : 'Failed to fetch Twitter data';
      setError(message);
      toast.error(message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClear = () => {
    setInput('');
    setResults(null);
  };

  // Auto-resize textarea
  useEffect(() => {
    const textarea = textareaRef.current;
    if (!textarea) return;
    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;
  }, [input]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Clear results with Escape
      if (e.key === 'Escape') {
        handleClear();
      }
      // Focus input with / key
      if (e.key === '/' && !input) {
        e.preventDefault();
        textareaRef.current?.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [input]);

  // Load search history on mount
  useEffect(() => {
    const saved = localStorage.getItem('twitter-search-history');
    if (saved) {
      try {
        setSearchHistory(JSON.parse(saved));
      } catch (e) {
        localStorage.removeItem('twitter-search-history');
      }
    }
  }, []);

  const hasAnyHistory = (results: TwitterHistoryData) => {
    return Boolean(
      (results.username_history && results.username_history.length) ||
        (results.name_history && results.name_history.length) ||
        (results.bio_history && results.bio_history.length) ||
        (results.location_history && results.location_history.length),
    );
  };

  return (
    <div className="flex flex-col">
      <form onSubmit={handleSubmit} className="flex-shrink-0">
        <div className="relative">
          <Textarea
            ref={textareaRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) =>
              e.key === 'Enter' && !e.shiftKey && handleSubmit(e)
            }
            placeholder="Enter a Twitter username to check history..."
            className="min-h-[60px] w-full resize-none border-0 bg-transparent px-4 py-4 text-lg text-white placeholder:text-white/50 focus-visible:ring-0"
          />
          {input && !isLoading && (
            <Button
              type="button"
              size="icon"
              variant="ghost"
              onClick={handleClear}
              className="absolute right-3 top-3 h-6 w-6 text-white/60 hover:text-white"
            >
              <X className="h-4 w-4" />
            </Button>
          )}
          {isLoading && (
            <div className="absolute right-4 top-4">
              <Loader2 className="h-4 w-4 animate-spin text-[#FF4D4D]" />
            </div>
          )}
        </div>
      </form>

      <AnimatePresence mode="wait">
        {results ? (
          <motion.div
            key="results"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-white/[0.08] bg-gradient-to-r from-[#FF4D4D]/5 to-[#FFB347]/5"
          >
            <ScrollArea className="max-h-[600px] overflow-y-auto p-4">
              {hasAnyHistory(results) ? (
                <div className="space-y-6">
                  {Object.entries({
                    'Username History': results.username_history?.map(
                      ([u, t]) => [
                        `@${u}`,
                        typeof t === 'string' ? parseInt(t, 10) : t,
                      ],
                    ),
                    'Display Name History': results.name_history,
                    'Bio History': results.bio_history?.map(([b, t]) => [
                      b || '[empty]',
                      typeof t === 'string' ? parseInt(t, 10) : t,
                    ]),
                    'Location History': results.location_history?.map(
                      ([l, t]) => [
                        l || '[empty]',
                        typeof t === 'string' ? parseInt(t, 10) : t,
                      ],
                    ),
                  }).map(
                    ([title, items]) =>
                      items &&
                      items.length > 0 && (
                        <HistorySection
                          key={title}
                          title={title}
                          items={items.map(([value, timestamp]) => ({
                            value: String(value),
                            timestamp:
                              typeof timestamp === 'string'
                                ? parseInt(timestamp, 10)
                                : timestamp,
                          }))}
                        />
                      ),
                  )}
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col items-center justify-center py-8 text-center"
                >
                  <div className="mb-4 rounded-full bg-gradient-to-r from-[#FF4D4D]/10 to-[#FFB347]/10 p-3">
                    <AlertCircle className="h-6 w-6 text-[#FF4D4D]" />
                  </div>
                  <h3 className="mb-2 text-lg font-medium text-white/80">
                    No History Found
                  </h3>
                  <p className="max-w-[300px] text-sm text-white/50">
                    This user exists but hasn&apos;t changed their username,
                    display name, bio, or location.
                  </p>
                </motion.div>
              )}
            </ScrollArea>
          </motion.div>
        ) : searchHistory.length > 0 ? (
          <motion.div
            key="history"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="border-t border-white/[0.08] p-4"
          >
            <h3 className="mb-3 text-sm font-medium text-white/60">
              Recent Searches
            </h3>
            <div className="flex flex-wrap gap-2">
              {searchHistory.map((username) => (
                <Button
                  key={username}
                  variant="ghost"
                  size="sm"
                  onClick={() => setInput(username)}
                  className="rounded-full bg-gradient-to-r from-[#FF4D4D]/5 to-[#FFB347]/5 px-3 py-1 text-sm 
                    hover:from-[#FF4D4D]/10 hover:to-[#FFB347]/10 hover:text-white"
                >
                  @{username}
                </Button>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

interface HistoryItem {
  value: string;
  timestamp: number;
}

function HistorySection({
  title,
  items,
}: {
  title: string;
  items: HistoryItem[];
}) {
  return (
    <div className="space-y-2">
      <motion.h3
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex items-center gap-2 text-lg font-medium text-white"
      >
        {title}
        <span className="text-sm text-white/40">({items.length})</span>
      </motion.h3>
      <div className="space-y-2">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="group flex items-center justify-between rounded-lg bg-gradient-to-r from-[#FF4D4D]/5 to-[#FFB347]/5 
              px-4 py-2 transition-colors hover:from-[#FF4D4D]/10 hover:to-[#FFB347]/10"
          >
            <span className="break-all text-white/80">{item.value}</span>
            <span className="ml-4 shrink-0 text-sm text-white/60">
              {new Intl.DateTimeFormat('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              }).format(item.timestamp * 1000)}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
