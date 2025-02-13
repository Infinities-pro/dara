'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedShinyText from './animated-shiny-text';

interface TypingAnimationProps {
  segments: {
    text: string;
    isShiny?: boolean;
  }[];
  className?: string;
  delay?: number;
  speed?: number;
  duration?: number;
}

export default function TypingAnimation({ 
  segments = [],
  className, 
  delay = 0, 
  speed = 50 
}: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState<string[]>(() => 
    segments?.map(() => '') ?? []
  );
  const [currentSegment, setCurrentSegment] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);

  useEffect(() => {
    if (!segments?.length) return;

    const timer = setTimeout(() => {
      if (currentSegment < segments.length) {
        if (currentChar < segments[currentSegment].text.length) {
          setDisplayedText(prev => {
            const newText = [...prev];
            newText[currentSegment] = segments[currentSegment].text.slice(0, currentChar + 1);
            return newText;
          });
          setCurrentChar(prev => prev + 1);
        } else {
          setCurrentSegment(prev => prev + 1);
          setCurrentChar(0);
        }
      }
    }, currentSegment === 0 && currentChar === 0 ? delay : speed);

    return () => clearTimeout(timer);
  }, [currentSegment, currentChar, segments, delay, speed]);

  return (
    <motion.div 
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {segments?.map((segment, index) => (
        <span key={index}>
          {segment.isShiny ? (
            <AnimatedShinyText className="inline">
              <span>{displayedText[index]}</span>
            </AnimatedShinyText>
          ) : (
            displayedText[index]
          )}
          {' '}
        </span>
      ))}
    </motion.div>
  );
}
