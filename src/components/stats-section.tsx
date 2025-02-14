'use client';

import { motion } from 'framer-motion';
import BlurFade from '@/components/ui/blur-fade';

const stats = [
  {
    value: '10M+',
    label: 'Increase in Progress Tracking',
  },
  {
    value: '10K+',
    label: 'Worldwide users in whitelist',
  },
  {
    value: '100%',
    label: 'Satisfaction Rate Among Users',
  },
];

export function StatsSection() {
  return (
    <section className="py-16 relative mb-0">
      <div className="mx-auto max-w-7xl px-6">
        <div className="bg-white/5 rounded-3xl p-8">
          <BlurFade>
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="w-5 h-5 text-emerald-400">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                  </svg>
                </div>
                <span className="text-emerald-400 font-medium">Global Presence</span>
              </div>
              <h2 className="text-4xl font-bold mb-4">
                Creating Worldwide AI Agents
              </h2>
              <p className="text-white/60 text-lg max-w-2xl mx-auto">
                Empowering AI Agents across the globe to collaborate seamlessly, driving
                innovation and success everywhere.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="text-center"
                >
                  <div className="text-6xl font-bold mb-4">{stat.value}</div>
                  <div className="text-white/60 text-lg">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </BlurFade>
        </div>

        {/* Decorative elements */}
        <div className="pointer-events-none absolute left-0 right-0 top-0 -z-10 mx-auto max-w-7xl overflow-hidden">
          <div className="absolute -left-4 top-0 h-72 w-72 rounded-full bg-emerald-500/20 opacity-20 blur-[100px]" />
          <div className="absolute -right-4 top-0 h-72 w-72 rounded-full bg-blue-500/20 opacity-20 blur-[100px]" />
        </div>
      </div>
    </section>
  );
} 