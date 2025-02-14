'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Twitter, LineChart, Coins, Bot } from 'lucide-react';

const features = [
  {
    title: 'Twitter Monitoring Agent',
    description: 'Monitor Twitter accounts and get real-time alerts for trading-related signals and market sentiment.',
    icon: Twitter,
    href: '/trading/twitter-checker',
    iconClassName: 'text-blue-400'
  },
  {
    title: 'Solana Trading Agent',
    description: 'Get intelligent market insights and real-time analysis to enhance your trading strategy.',
    icon: LineChart,
    href: '/trading/agent',
    iconClassName: 'text-green-400'
  },
  {
    title: 'Solana Staking Automation',
    description: 'Automate your staking operations with intelligent yield optimization and risk management.',
    icon: Coins,
    href: '/staking',
    iconClassName: 'text-purple-400'
  },
  {
    title: 'Custom AI Agents',
    description: 'Create and customize AI agents tailored to your specific trading and investment strategies.',
    icon: Bot,
    href: '/agents',
    iconClassName: 'text-orange-400'
  }
];

export function FeaturesGrid() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature) => (
            <Link
              key={feature.title}
              href={feature.href}
              className="group relative rounded-3xl bg-white/5 p-6 hover:bg-white/10 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className={`rounded-2xl bg-white/10 p-3 ${feature.iconClassName}`}>
                  <feature.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-white/60">
                    {feature.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
} 