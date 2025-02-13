'use client';

import Link from 'next/link';

import { motion } from 'framer-motion';

import { cn } from '@/lib/utils';

import { DynamicImage } from './dynamic-image';

export function Logo() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Gradient definitions */}
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF5E5E" />
          <stop offset="50%" stopColor="#FF9262" />
          <stop offset="100%" stopColor="#FFB956" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feComposite in="blur" in2="SourceGraphic" operator="over" />
        </filter>
      </defs>

      {/* Background with rounded corners */}
      <rect width="32" height="32" rx="8" fill="url(#logoGradient)" />

      {/* Abstract 'D' shape */}
      <path
        d="M10 8C9.44772 8 9 8.44772 9 9V23C9 23.5523 9.44772 24 10 24H18C21.866 24 25 20.866 25 17C25 13.134 21.866 10 18 10H13V22"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        filter="url(#glow)"
      />

      {/* Decorative dots with stronger glow */}
      <circle
        cx="21"
        cy="12"
        r="1.5"
        fill="white"
        opacity="0.9"
        filter="url(#glow)"
      />
      <circle
        cx="23"
        cy="17"
        r="1.5"
        fill="white"
        opacity="0.9"
        filter="url(#glow)"
      />
      <circle
        cx="21"
        cy="22"
        r="1.5"
        fill="white"
        opacity="0.9"
        filter="url(#glow)"
      />
    </svg>
  );
}

interface BrandProps {
  className?: string;
}

export function Brand({ className }: BrandProps) {
  return (
    <svg
      className={className}
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Gradient definitions */}
      <defs>
        <linearGradient id="brandGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF5E5E" />
          <stop offset="50%" stopColor="#FF9262" />
          <stop offset="100%" stopColor="#FFB956" />
        </linearGradient>
        <filter id="brandGlow">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feComposite in="blur" in2="SourceGraphic" operator="over" />
        </filter>
      </defs>

      {/* Background with rounded corners */}
      <rect width="32" height="32" rx="8" fill="url(#brandGradient)" />

      {/* Abstract 'D' shape */}
      <path
        d="M10 8C9.44772 8 9 8.44772 9 9V23C9 23.5523 9.44772 24 10 24H18C21.866 24 25 20.866 25 17C25 13.134 21.866 10 18 10H13V22"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        filter="url(#brandGlow)"
      />

      {/* Decorative dots with stronger glow */}
      <circle
        cx="21"
        cy="12"
        r="1.5"
        fill="white"
        opacity="0.9"
        filter="url(#brandGlow)"
      />
      <circle
        cx="23"
        cy="17"
        r="1.5"
        fill="white"
        opacity="0.9"
        filter="url(#brandGlow)"
      />
      <circle
        cx="21"
        cy="22"
        r="1.5"
        fill="white"
        opacity="0.9"
        filter="url(#brandGlow)"
      />
    </svg>
  );
}
