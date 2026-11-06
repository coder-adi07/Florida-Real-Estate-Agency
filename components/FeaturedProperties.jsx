'use client';

import Image from 'next/image';
import { ExternalLink, ShieldCheck, Sparkles } from 'lucide-react';

const SHOWCASE_ITEMS = [
  {
    title: 'Tampa Bay Waterfront Estate',
    region: 'Rocky Point & South Tampa, FL',
    image: '/assets/properties/florida-luxury-mansion-1.jpg',
    tag: 'Coastal Luxury',
    description: 'Expansive private deepwater dockage, infinity pool, and seamless indoor-outdoor entertaining overlooking the bay.',
  },
  {
    title: 'Modern Florida Architectural Residence',
    region: 'Miami & Palm Beaches, FL',
    image: '/assets/properties/florida-luxury-mansion-2.jpg',
    tag: 'Contemporary Estate',
    description: 'Refined architectural glass lines, lush tropical courtyard landscaping, and modern resort-style elegance.',
  },
  {
    title: 'Sarasota Gulf Coast Pool Villa',
    region: 'Siesta Key & Longboat Key, FL',
    image: '/assets/properties/florida-luxury-mansion-3.jpg',
    tag: 'Gulf Island Living',
    description: 'Tranquil coastal living situated near Florida’s most acclaimed white quartz beaches and waterfront promenades.',
  },
];

export default function FeaturedProperties() {
  return (
    <section className="py-24 bg-ivory-100 border-b border-ivory-300">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-terracotta-600 font-semibold mb-3 block">
              Architectural Living Portfolio
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-charcoal-900 leading-tight">
              Florida Real Estate Showcase
            </h2>
          </div>
          <div className="flex flex-col items-start md:items-end">
            <p className="text-xs text-charcoal-600 max-w-sm font-light mb-3">
              Explore authentic Florida property styles and curated lifestyle environments across our service territories.
            </p>
            <a
              href="https://www.floridareagency.com/search/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-coastal-800 hover:text-terracotta-600 transition-colors"
            >
              <span>View Live MLS® Active Listings</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* 3-Column Image Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SHOWCASE_ITEMS.map((item, idx) => (
            <div
              key={idx}
              className="group rounded-2xl overflow-hidden bg-ivory-50 border border-ivory-300/80 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col"
            >
              <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-ivory-200">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/60 via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-ivory-50/90 backdrop-blur-sm text-[10px] font-semibold uppercase tracking-wider text-charcoal-800 shadow-sm">
                    {item.tag}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-ivory-50">
                  <span className="text-[10px] text-brass-300 font-medium uppercase tracking-wider block">
                    {item.region}
                  </span>
                  <h3 className="font-serif text-lg font-medium leading-snug">
                    {item.title}
                  </h3>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <p className="text-xs sm:text-sm text-charcoal-600 font-light leading-relaxed mb-6">
                  {item.description}
                </p>

                <div className="pt-4 border-t border-ivory-200 flex items-center justify-between">
                  <span className="text-[11px] text-charcoal-500 font-medium">Full Broker Representation</span>
                  <a
                    href="#contact"
                    className="text-xs font-semibold text-coastal-800 group-hover:text-terracotta-600 transition-colors"
                  >
                    Inquire →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Authentic MLS Disclaimer Banner */}
        <div className="mt-12 p-4 rounded-xl bg-ivory-50 border border-ivory-300/70 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="relative w-12 h-8 shrink-0">
            <Image
              src="/assets/logo/BMLS_logo-1.png"
              alt="BeachesMLS Logo"
              fill
              className="object-contain"
            />
          </div>
          <p className="text-[11px] text-charcoal-500 leading-normal font-light">
            Property information is provided for consumers’ personal, non-commercial use to identify prospective properties. Listing data comes in part from participating brokers of Stellar MLS and BeachesMLS, Inc. Information deemed reliable, but not guaranteed.
          </p>
        </div>
      </div>
    </section>
  );
}
