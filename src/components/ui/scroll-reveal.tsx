'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
}

export default function ScrollReveal({ children, delay = 0 }: ScrollRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{
        duration: 0.8,
        delay: delay,
        ease: [0.17, 0.55, 0.55, 1]
      }}
    >
      {children}
    </motion.div>
  );
} 