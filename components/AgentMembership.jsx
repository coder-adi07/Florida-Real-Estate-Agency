'use client';

import { Check, Shield, Zap, TrendingUp, Users, ArrowUpRight, DollarSign } from 'lucide-react';

const MEMBERSHIP_BENEFITS = [
  'Flat $299 per transaction fee — keep your maximum earnings',
  '$299 low annual membership fee with zero hidden royalties',
  'Complimentary E&O Insurance included at zero cost to you',
  '24-Hour rapid license activation and seamless board transfer',
  '7 Days a week direct broker support for contracts and deals',
  'In-house dedicated transaction coordinator service available',
  'Corporate IDX website and agent sub-sites for lead generation',
  'Commission paid immediately at the closing table with no hassle',
];

export default function AgentMembership() {
  return (
    <section id="careers" className="py-24 bg-coastal-900 text-ivory-50 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-coastal-700/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brass-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Value Proposition (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] text-brass-400 font-semibold block">
              Agent Partnership & Brokerage
            </span>

            <h2 className="font-serif text-3xl sm:text-5xl font-normal leading-tight text-ivory-50">
              The modern Florida brokerage built around your success.
            </h2>

            <p className="text-ivory-200 text-base sm:text-lg font-light leading-relaxed">
              Join our team and experience Florida’s most attractive commission structure without sacrificing the broker mentorship, cloud technology, and marketing tools your real estate business demands. Our agents are our greatest asset.
            </p>

            {/* Benefit Check Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-4">
              {MEMBERSHIP_BENEFITS.map((benefit, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-brass-400/20 text-brass-300 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs sm:text-sm text-ivory-200 font-light leading-snug">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-6 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-brass-400 text-charcoal-900 font-semibold text-xs tracking-wide hover:bg-brass-300 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <span>Join Florida Real Estate Agency</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href="tel:18004407197"
                className="text-xs font-medium text-ivory-300 hover:text-ivory-50 transition-colors"
              >
                Confidential Broker Consultation: 1 (800) 440-7197
              </a>
            </div>
          </div>

          {/* Right Column: Pricing Plan Editorial Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-coastal-800/90 border border-coastal-600/50 p-8 sm:p-10 shadow-2xl backdrop-blur-md relative overflow-hidden">
              <div className="inline-block px-3 py-1 rounded-full bg-brass-400/20 text-brass-300 text-[10px] uppercase tracking-widest font-semibold mb-4">
                Verified Brokerage Plan
              </div>

              <h3 className="font-serif text-2xl text-ivory-50 mb-2">Transparent Flat-Fee Model</h3>
              <p className="text-xs text-ivory-300 font-light mb-6">
                No percentage splits. Keep 100% of your hard-earned commission.
              </p>

              <div className="space-y-4 py-6 border-y border-coastal-700/60">
                <div className="flex items-baseline justify-between">
                  <span className="text-sm text-ivory-200 font-light">Per Transaction Fee</span>
                  <div className="text-right">
                    <span className="font-serif text-3xl font-semibold text-ivory-50">$299</span>
                    <span className="text-[10px] text-ivory-400 block">per closing</span>
                  </div>
                </div>

                <div className="flex items-baseline justify-between">
                  <span className="text-sm text-ivory-200 font-light">Annual Brokerage Fee</span>
                  <div className="text-right">
                    <span className="font-serif text-3xl font-semibold text-ivory-50">$299</span>
                    <span className="text-[10px] text-ivory-400 block">once per year</span>
                  </div>
                </div>

                <div className="flex items-baseline justify-between">
                  <span className="text-sm text-ivory-200 font-light">E&O Insurance</span>
                  <span className="text-sm font-semibold text-brass-300">Included ($0)</span>
                </div>
              </div>

              <div className="mt-6 pt-2">
                <div className="p-3.5 rounded-xl bg-coastal-900/60 border border-coastal-700/50 flex items-center gap-3">
                  <Zap className="w-5 h-5 text-brass-400 shrink-0" />
                  <p className="text-[11px] text-ivory-200 leading-snug">
                    <strong className="text-ivory-50">Work From Anywhere:</strong> Complete cloud dashboard, remote document signing, and 24/7 contract access.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

