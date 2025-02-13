'use client';

import Link from 'next/link';
import { Brand } from '@/components/logo';

export default function PrivacyPolicy() {
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
        <h1 className="mb-8 text-4xl font-bold text-white">Privacy Policy</h1>
        
        <div className="prose prose-invert max-w-none">
          <section className="mb-8">
            <h2>Information We Collect</h2>
            <p>
              We collect information that you provide directly to us, information we obtain automatically when you use our platform, and information from third party sources in accordance with applicable law.
            </p>
          </section>

          <section className="mb-8">
            <h2>How We Use Your Information</h2>
            <p>
              We use the information we collect to provide, maintain, and improve our services, to develop new ones, and to protect our platform and our users.
            </p>
          </section>

          {/* Add more sections as needed */}
        </div>
      </main>
    </div>
  );
} 