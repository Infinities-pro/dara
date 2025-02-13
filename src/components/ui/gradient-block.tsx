'use client';

import { motion } from 'framer-motion';

export function GradientBlock() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <motion.div
        className="relative w-[600px] h-[600px]"
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        {/* Main gradient block */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-20 blur-[100px]" />
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-teal-500 via-purple-500 to-orange-500 opacity-20 blur-[100px]" />
        
        {/* Animated overlay */}
        <motion.div
          className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 opacity-30 blur-[50px]"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, -180, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </motion.div>
    </div>
  );
} 