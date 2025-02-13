'use client';

import Image from 'next/image';

const partners = [
  // Row 1
  { src: '/arbitrum.svg', alt: 'Arbitrum' },
  { src: '/optimism.svg', alt: 'Optimism' },
  { src: '/layer-zero.svg', alt: 'Layer Zero' },
  { src: '/ethereum.svg', alt: 'Ethereum' },
  { src: '/solana.svg', alt: 'Solana' },
  { src: '/polygon.svg', alt: 'Polygon' },
  // Row 2
  { src: '/woofi.svg', alt: 'WOOFi' },
  { src: '/elixir.svg', alt: 'Elixir' },
  { src: '/quickswap.svg', alt: 'QuickSwap' },
  { src: '/logx.svg', alt: 'LogX' },
  { src: '/base.svg', alt: 'Base' },
  { src: '/sei.svg', alt: 'Sei' },
];

export function PartnersSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-3 gap-12 md:grid-cols-6">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center"
            >
              <Image
                src={partner.src}
                alt={partner.alt}
                width={120}
                height={40}
                className="h-8 w-auto opacity-60 transition-opacity hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 