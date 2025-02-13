'use client';

import { motion } from 'framer-motion';

export default function ShootingStars() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {[...Array(20)].map((_, i) => {
        const speed = Math.random() * 5 + 4; // Slower: between 4-9s
        const size = Math.random() * 0.8 + 0.2;
        return (
          <motion.div
            key={i}
            className="absolute bg-gradient-to-r from-white/70 to-transparent" // Changed back to gradient-to-r
            style={{
              height: `${1 * size}px`,
              width: `${100 * size}px`,
            }}
            initial={{
              top: `-${Math.random() * 50}%`, // Start higher up
              left: `${Math.random() * 50}%`, // Start from left half
              rotate: 135, // Adjusted angle to point down-right (135 degrees)
              scale: 0,
              opacity: 0,
            }}
            animate={{
              top: '120%',
              left: `+=${Math.random() * 300 + 400}px`, // Move right more
              scale: [0, 1, 1, 0.5],
              opacity: [0, 0.8, 0.8, 0],
            }}
            transition={{
              duration: speed,
              repeat: Infinity,
              delay: Math.random() * 7,
              ease: [0.4, 0, 0.2, 1],
            }}
          />
        )
      })}
    </div>
  );
} 