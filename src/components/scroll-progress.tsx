'use client';

import { motion, useScroll } from 'framer-motion';

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#9945FF] to-[#14F195] transform origin-left z-50"
      style={{ scaleX: scrollYProgress }}
    />
  );
} 