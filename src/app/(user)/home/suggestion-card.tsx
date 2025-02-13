import { motion } from 'framer-motion';

import type { Suggestion } from './data/suggestions';

interface SuggestionCardProps extends Suggestion {
  delay?: number;
  onSelect: (text: string) => void;
}

export function SuggestionCard({
  title,
  subtitle,
  delay = 0,
  onSelect,
}: SuggestionCardProps) {
  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, delay }}
      whileHover={{
        scale: 1.01,
        transition: { duration: 0.2 },
      }}
      whileTap={{ scale: 0.99 }}
      onClick={() => onSelect(title)}
      className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-br from-[#FF4D4D]/5 via-[#FF8F3F]/5 to-[#FFB347]/5 p-4 text-left shadow-2xl backdrop-blur-md transition-all duration-300 hover:border-white/[0.12] hover:bg-gradient-to-br hover:from-[#FF4D4D]/10 hover:via-[#FF8F3F]/10 hover:to-[#FFB347]/10"
    >
      <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-gradient-to-r from-[#FF4D4D] to-[#FFB347] opacity-20 blur-[50px] transition-opacity group-hover:opacity-30" />
      <div className="relative">
        <div className="font-medium">{title}</div>
        <div className="text-sm text-white/60">{subtitle}</div>
      </div>
    </motion.button>
  );
}
