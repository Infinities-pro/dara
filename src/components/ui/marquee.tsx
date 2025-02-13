'use client';

import { useEffect, useRef, useState } from 'react';

import {
  motion,
  useAnimationControls,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';

import { cn } from '@/lib/utils';

interface MarqueeProps {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children?: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
  speed?: number;
  delay?: number;
}

export function Marquee({
  className,
  reverse = false,
  pauseOnHover = true,
  children,
  vertical = false,
  repeat = 2,
  speed = 25,
  delay = 0,
}: MarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimationControls();
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentWidth, setContentWidth] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setContentWidth(contentRef.current.scrollWidth);
    }
  }, [children]);

  const baseVelocity = -speed;

  return (
    <div
      ref={containerRef}
      className={cn(
        'group relative flex overflow-hidden',
        {
          'hover:pause-animation': pauseOnHover,
        },
        className,
      )}
    >
      <motion.div
        ref={contentRef}
        className="flex min-w-full items-center gap-12 px-6"
        animate={{
          x: reverse ? [0, -contentWidth] : [-contentWidth, 0],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 20,
            ease: 'linear',
          },
        }}
        onHoverStart={() => pauseOnHover && controls.stop()}
        onHoverEnd={() =>
          pauseOnHover &&
          controls.start({
            x: reverse ? [0, -contentWidth] : [-contentWidth, 0],
            transition: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 20,
              ease: 'linear',
            },
          })
        }
      >
        {Array(repeat)
          .fill(0)
          .map((_, i) => (
            <motion.div
              key={i}
              className="flex shrink-0 items-center gap-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {children}
            </motion.div>
          ))}
      </motion.div>

      <motion.div
        className="absolute top-0 flex min-w-full items-center gap-12 px-6"
        animate={{
          x: reverse ? [-contentWidth, 0] : [0, contentWidth],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 20,
            ease: 'linear',
          },
        }}
      >
        {Array(repeat)
          .fill(0)
          .map((_, i) => (
            <motion.div
              key={i}
              className="flex shrink-0 items-center gap-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {children}
            </motion.div>
          ))}
      </motion.div>
    </div>
  );
}
