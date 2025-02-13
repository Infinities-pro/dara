import { useEffect, useRef } from 'react';

import { SendHorizontal } from 'lucide-react';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

interface ConversationInputProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: (value: string) => Promise<void>;
}

const MAX_CHARS = 2000;

export function ConversationInput({
  value,
  onChange,
  onSubmit,
}: ConversationInputProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!value.trim()) return;
    await onSubmit(value);
  };

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    if (newValue.length <= MAX_CHARS) {
      onChange(newValue);
      return;
    }
    toast.error('Maximum character limit reached');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  useEffect(() => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;
  }, [value]);

  return (
    <div className="relative duration-500 animate-in fade-in slide-in-from-bottom-4">
      <div className="group relative overflow-hidden rounded-2xl border-2 border-white/[0.25] bg-white/[0.03] shadow-2xl backdrop-blur-md transition-all duration-300 hover:border-white/40 hover:bg-white/[0.05]">
        {/* Moving glow effect - more subtle and varied colors */}
        <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-transparent via-rose-500/10 to-transparent blur-sm animate-glow" />
        <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-transparent via-violet-500/10 to-transparent blur-sm animate-glow-delayed" />
        
        {/* Refined gradient effects */}
        <div className="absolute inset-px rounded-2xl bg-gradient-to-r from-rose-500/10 to-violet-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        
        {/* Ambient glow */}
        <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-rose-500/5 blur-[100px] animate-pulse" />
        <div className="absolute -left-32 -bottom-32 h-80 w-80 rounded-full bg-violet-500/5 blur-[100px] animate-pulse delay-700" />
        
        {/* Enhanced background effects */}
        <div className="absolute inset-0 bg-[url('/grid.png')] opacity-[0.02]" />
        <div className="absolute inset-0 bg-[url('/mesh.png')] opacity-[0.02] mix-blend-screen" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-white/[0.04]" />

        <form onSubmit={handleSubmit} className="relative flex flex-col">
          <Textarea
            ref={textareaRef}
            value={value}
            onChange={handleTextareaChange}
            onKeyDown={handleKeyDown}
            maxLength={MAX_CHARS}
            placeholder="Ask me anything about Solana..."
            className="min-h-[120px] w-full resize-none overflow-hidden border-0 bg-transparent px-7 py-6 text-base leading-relaxed tracking-wide focus-visible:ring-0 placeholder:text-white/50 [&::-webkit-scrollbar]:hidden"
          />

          <div className="relative flex items-center justify-between border-t border-white/[0.25] px-7 py-4">
            {/* Refined separator gradient */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-rose-500/[0.1] via-white/[0.25] to-violet-500/[0.1]" />

            <span className="text-xs font-medium text-white/40 transition-colors duration-200 group-hover:text-white/50">
              {value.length}/{MAX_CHARS}
            </span>

            <Button
              type="submit"
              size="icon"
              variant="ghost"
              disabled={!value.trim()}
              className="group/btn relative flex h-11 w-11 items-center justify-center rounded-xl 
                border-2 border-white/20 bg-white/[0.02] transition-all duration-300 
                hover:border-white/30 hover:bg-white/[0.05] hover:scale-105
                disabled:cursor-not-allowed disabled:opacity-50"
            >
              {/* Gradient background effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-rose-500/10 to-violet-500/10 opacity-0 transition-opacity duration-300 group-hover/btn:opacity-100" />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-white/[0.05] to-transparent opacity-0 transition-opacity duration-300 group-hover/btn:opacity-100" />
              
              {/* Glow effect */}
              <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 blur-sm transition-opacity duration-300 group-hover/btn:opacity-100" />
              
              {/* Icon */}
              <SendHorizontal className="relative h-5 w-5 text-white/70 transition-all duration-300 ease-out group-hover/btn:scale-110 group-hover/btn:text-white" />
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
