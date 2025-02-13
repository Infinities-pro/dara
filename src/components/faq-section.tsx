'use client';

import { ChevronDownIcon } from 'lucide-react';
import * as Accordion from '@radix-ui/react-accordion';
import { cn } from '@/lib/utils';

const faqs = [
  {
    question: 'What is Dara',
    answer: "Dara is an AI-powered automation platform designed to enhance Solana trading, Twitter monitoring, and staking with custom AI agents. Whether you're a trader, developer, or investor, Dara gives you the edge you need to automate workflows, track key market movements, and make smarter decisions—all powered by AI"
  },
  {
    question: 'How do I create a custom AI agent?',
    answer: "Simply use the AI Agent Builder in the Dara dashboard to configure your agent's behavior. Advanced users can also use Dara's API for more complex setups."
  },
  {
    question: 'What does the Twitter Monitoring Agent do?',
    answer: (
      <div className="flex flex-col gap-2">
        <p>The Twitter Monitoring Agent tracks:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Username and display name changes.</li>
          <li>Deleted tweets mentioning Solana contract addresses (CAs).</li>
          <li>Influencer activities and suspicious behaviors.</li>
        </ul>
      </div>
    )
  },
  {
    question: 'Is Dara free to use?',
    answer: "Dara offers a free tier with limited access to features. Premium plans unlock advanced features like API usage, real-time whale tracking, and staking automation."
  }
];

export function FaqSection() {
  return (
    <section className="pb-12">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-12 text-2xl font-medium text-blue-300">FAQs: Happy Customer</h2>
        
        <Accordion.Root type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <Accordion.Item
              key={index}
              value={`item-${index}`}
              className="rounded-2xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl overflow-hidden"
            >
              <Accordion.Trigger className="group flex w-full items-center justify-between px-6 py-4">
                <span className="text-lg text-white">{faq.question}</span>
                <ChevronDownIcon 
                  className="h-5 w-5 text-white/60 transition-transform duration-300 group-data-[state=open]:rotate-180" 
                />
              </Accordion.Trigger>
              
              <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                <div className="px-6 pb-4 text-white/60">
                  {faq.answer}
                </div>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
} 