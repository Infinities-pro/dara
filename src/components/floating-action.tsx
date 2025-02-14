'use client';

import { Button } from '@/components/ui/button';
import { ArrowUp } from 'lucide-react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';

export function FloatingAction() {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setVisible(latest > 400);
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: visible ? 1 : 0 }}
      className="fixed bottom-8 right-8 z-50"
    >
      <Button
        size="icon"
        variant="secondary"
        onClick={scrollToTop}
        className="rounded-full shadow-lg bg-white/10 backdrop-blur-sm"
      >
        <ArrowUp className="h-5 w-5" />
      </Button>
    </motion.div>
  );
} 