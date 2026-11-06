'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Award, CheckCircle2, MapPin, Users } from 'lucide-react';

const EXECUTIVE_TEAM = [
  {
    name: 'Christopher Freyre',
    role: 'Principal Broker',
    bio: 'Guiding visionary brokerage strategy, high-value client acquisitions, and statewide transactional excellence.',
  },
  {
    name: 'Robert Freyre',
    role: 'Broker',
    bio: 'Decades of deep Florida market fluency, direct broker mentorship, and unparalleled negotiation expertise.',
  },
  {
    name: 'Scott Freyre',
    role: 'Realtor & Business Development',
    bio: 'Championing builder partnerships, strategic community expansion, and agent growth programs.',
  },
];

export default function BrandIntro() {
  return (
    <section id="about" className="py-24 bg-ivory-50 border-y border-ivory-300/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Editorial Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-8">
            <span className="text-xs uppercase tracking-[0.25em] text-terracotta-600 font-semibold mb-3 block">
              The Agency Philosophy
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-charcoal-900 leading-[1.15]">
              A brokerage built on integrity, local mastery, and an uncompromised commitment to your goals.
            </h2>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-charcoal-600 border-b border-charcoal-300 pb-1">
              <MapPin className="w-3.5 h-3.5 text-terracotta-500" />
              <span>Tampa HQ • Statewide Advisory</span>
            </div>
          </div>
        </div>

        {/* Asymmetrical Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Narrative & Values (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-base sm:text-lg text-charcoal-700 font-light leading-relaxed">
              The Florida Real Estate Agency has established a well-earned reputation as one of Florida’s most reliable, high-touch real estate brokerages. From the vibrant coastal waterways of Tampa Bay and Sarasota to the cosmopolitan allure of Miami, Naples, and Orlando, Florida’s market is dynamic, competitive, and distinctly unique.
            </p>
            <p className="text-sm sm:text-base text-charcoal-600 font-light leading-relaxed">
              We believe real estate is fundamentally personal. Whether helping a family discover their forever waterfront sanctuary, assisting an investor in curating a commercial parcel, or representing premier custom home builders, we provide a comprehensive real estate ecosystem that treats every transaction with precision and care.
            </p>

            {/* Core Value Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
              <div className="p-5 rounded-xl bg-ivory-100 border border-ivory-300/80">
                <div className="flex items-center gap-3 mb-2">
                  <Award className="w-4 h-4 text-brass-500" />
                  <h4 className="font-serif text-base font-semibold text-charcoal-900">Direct Broker Access</h4>
                </div>
                <p className="text-xs text-charcoal-600 leading-normal">
                  Clients and agents receive nonstop 7-day-a-week direct broker guidance with no bureaucratic layers.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-ivory-100 border border-ivory-300/80">
                <div className="flex items-center gap-3 mb-2">
                  <CheckCircle2 className="w-4 h-4 text-coastal-700" />
                  <h4 className="font-serif text-base font-semibold text-charcoal-900">MLS & IDX Technology</h4>
                </div>
                <p className="text-xs text-charcoal-600 leading-normal">
                  Real-time property data syncing with Stellar MLS and BeachesMLS ensures accurate, instant listings.
                </p>
              </div>
            </div>

            {/* Executive Leadership Showcase */}
            <div className="pt-8">
              <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-charcoal-500 mb-6 flex items-center gap-2">
                <Users className="w-4 h-4 text-coastal-800" />
                <span>Executive Leadership Team</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {EXECUTIVE_TEAM.map((member) => (
                  <div
                    key={member.name}
                    className="p-4 rounded-xl bg-ivory-100/60 border border-ivory-300/60 hover:border-coastal-700/40 transition-colors"
                  >
                    <div className="font-serif text-sm font-semibold text-charcoal-900">{member.name}</div>
                    <div className="text-[11px] font-medium text-terracotta-600 uppercase tracking-wider mb-2">
                      {member.role}
                    </div>
                    <p className="text-[11px] text-charcoal-600 leading-relaxed font-light">
                      {member.bio}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Visual Composition & Graphic Element (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative h-[380px] rounded-2xl overflow-hidden shadow-lg border border-ivory-300 bg-ivory-200">
              <Image
                src="/assets/banners/banner-2-upload_98b5b7aa8fa38a0f9015745dc277900a.png"
                alt="Florida Real Estate Agency Lifestyle and Architectural Heritage"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/50 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-ivory-50">
                <span className="text-[10px] uppercase tracking-[0.22em] text-brass-300 font-semibold block mb-1">
                  Community Focused
                </span>
                <p className="font-serif text-sm leading-snug">
                  Guiding clients through Florida’s premier waterfronts and thriving inland sanctuaries.
                </p>
              </div>
            </div>

            {/* Headquarters Card */}
            <div className="p-6 rounded-2xl bg-coastal-900 text-ivory-50 relative overflow-hidden">
              <div className="relative z-10">
                <span className="text-[10px] uppercase tracking-[0.25em] text-brass-400 font-semibold block mb-2">
                  Headquarters
                </span>
                <p className="font-serif text-lg font-light mb-1">
                  3001 N. Rocky Point Dr. E., Suite 200
                </p>
                <p className="text-xs text-ivory-300 font-light mb-4">
                  Tampa, Florida 33607
                </p>
                <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-coastal-800 text-xs">
                  <a
                    href="tel:18004407197"
                    className="text-brass-300 hover:text-ivory-50 font-medium transition-colors"
                  >
                    1 (800) 440-7197
                  </a>
                  <span className="text-coastal-700">•</span>
                  <a
                    href="mailto:frea@floridareagency.com"
                    className="text-ivory-300 hover:text-ivory-50 transition-colors"
                  >
                    frea@floridareagency.com
                  </a>
                </div>
              </div>
              {/* Background watermark */}
              <div className="absolute -right-6 -bottom-6 opacity-10 pointer-events-none">
                <div className="w-32 h-32 rounded-full border-8 border-ivory-50" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

