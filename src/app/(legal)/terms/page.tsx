'use client';

import Link from 'next/link';
import { Brand } from '@/components/logo';

export default function Terms() {
  return (
    <div className="min-h-screen bg-[#0A0A0B]">
      <header className="fixed left-0 right-0 top-0 z-50">
        <div className="mx-auto max-w-6xl px-4 py-4">
          <Link href="/" className="inline-block">
            <Brand className="scale-95 transition-opacity hover:opacity-80" />
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 pt-32 pb-24">
        <h1 className="mb-8 text-4xl font-bold text-white">Terms of Service</h1>
        
        <div className="prose prose-invert max-w-none">
          <section className="mb-8">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using our platform, you agree to be bound by these Terms of Service and all applicable laws and regulations.
            </p>
          </section>

          <section className="mb-8">
            <h2>2. Use License</h2>
            <p>
              We grant you a limited, non-exclusive, non-transferable, revocable license to use our platform for personal, non-commercial purposes.
            </p>
          </section>

          {/* Add more sections as needed */}
        </div>
      </main>
    </div>
  );
} 