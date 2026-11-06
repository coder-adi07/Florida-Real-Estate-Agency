'use client';

import Image from 'next/image';
import { ArrowRight, Search, FileText, BarChart3, Home, KeyRound, Sparkles } from 'lucide-react';

export default function BuyerSeller() {
  return (
    <section className="py-24 bg-ivory-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Lead */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-terracotta-600 font-semibold mb-3 block">
            Dedicated Client Journeys
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-charcoal-900 leading-tight">
            Tailored advisory for buyers and sellers across Florida.
          </h2>
        </div>

        {/* Two Distinctive Journeys Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* BUYERS JOURNEY CARD */}
          <div
            id="buyers"
            className="rounded-3xl bg-ivory-50 border border-ivory-300 p-8 sm:p-12 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="w-12 h-12 rounded-2xl bg-coastal-800 text-ivory-50 flex items-center justify-center shadow-md">
                  <KeyRound className="w-5 h-5 text-brass-400" />
                </div>
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-coastal-700 bg-coastal-800/10 px-3 py-1 rounded-full">
                  For Buyers
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl text-charcoal-900 mb-4">
                Discovering your ideal Florida haven with expert guidance.
              </h3>

              <p className="text-charcoal-600 font-light text-sm sm:text-base leading-relaxed mb-6">
                We genuinely care about helping you achieve your dreams. For prospective buyers, we provide deep neighborhood profiles, school district analysis, off-market builder previews, and direct MLS® search capabilities to identify prospective properties with full confidence.
              </p>

              {/* Resource Bullet Points */}
              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <Search className="w-4 h-4 text-coastal-700 shrink-0 mt-1" />
                  <div>
                    <h4 className="text-xs font-semibold text-charcoal-900">Custom MLS® Property Search</h4>
                    <p className="text-[11px] text-charcoal-500 font-light">Real-time alerts directly connected to participating Florida broker networks.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Home className="w-4 h-4 text-coastal-700 shrink-0 mt-1" />
                  <div>
                    <h4 className="text-xs font-semibold text-charcoal-900">Curated Community & Neighborhood Guides</h4>
                    <p className="text-[11px] text-charcoal-500 font-light">Insight into Florida’s most desirable school districts, amenities, and lifestyle pockets.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FileText className="w-4 h-4 text-coastal-700 shrink-0 mt-1" />
                  <div>
                    <h4 className="text-xs font-semibold text-charcoal-900">New Construction & Builder FAQs</h4>
                    <p className="text-[11px] text-charcoal-500 font-light">Direct builder representation ensuring buyer incentives, lot premiums, and warranty protection.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Buyer CTA */}
            <div className="pt-6 border-t border-ivory-200 flex flex-wrap items-center justify-between gap-4">
              <a
                href="https://www.floridareagency.com/search/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-coastal-800 text-ivory-50 text-xs font-medium hover:bg-coastal-700 transition-colors group"
              >
                <span>Launch MLS Search</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="text-xs font-semibold text-charcoal-700 hover:text-coastal-800 transition-colors"
              >
                Request Buyer Consultation →
              </a>
            </div>
          </div>

          {/* SELLERS JOURNEY CARD */}
          <div
            id="sellers"
            className="rounded-3xl bg-ivory-50 border border-ivory-300 p-8 sm:p-12 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="w-12 h-12 rounded-2xl bg-terracotta-600 text-ivory-50 flex items-center justify-center shadow-md">
                  <BarChart3 className="w-5 h-5 text-ivory-50" />
                </div>
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-terracotta-600 bg-terracotta-600/10 px-3 py-1 rounded-full">
                  For Sellers
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl text-charcoal-900 mb-4">
                Precision marketing designed to maximize your home’s value.
              </h3>

              <p className="text-charcoal-600 font-light text-sm sm:text-base leading-relaxed mb-6">
                Your home is a very personal and valuable asset, and selling can be an emotional and complex endeavor in today’s changing marketplace. We provide accurate market data, professional marketing, and strategic pricing so your residence sells quickly at top market value.
              </p>

              {/* Resource Bullet Points */}
              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <BarChart3 className="w-4 h-4 text-terracotta-600 shrink-0 mt-1" />
                  <div>
                    <h4 className="text-xs font-semibold text-charcoal-900">Comparative Market Analysis (CMA)</h4>
                    <p className="text-[11px] text-charcoal-500 font-light">Data-driven valuation reflecting hyper-local active comps and recent closed transactions.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Sparkles className="w-4 h-4 text-terracotta-600 shrink-0 mt-1" />
                  <div>
                    <h4 className="text-xs font-semibold text-charcoal-900">Multi-Channel Property Promotion</h4>
                    <p className="text-[11px] text-charcoal-500 font-light">High-impact digital showcases, syndicated MLS networks, and targeted buyer outreach.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FileText className="w-4 h-4 text-terracotta-600 shrink-0 mt-1" />
                  <div>
                    <h4 className="text-xs font-semibold text-charcoal-900">Weekly Showing Feedback & Negotiation</h4>
                    <p className="text-[11px] text-charcoal-500 font-light">Continuous reporting, coordinated showings, and skilled offer negotiations through closing.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Seller CTA */}
            <div className="pt-6 border-t border-ivory-200 flex flex-wrap items-center justify-between gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-terracotta-600 text-ivory-50 text-xs font-medium hover:bg-terracotta-700 transition-colors group"
              >
                <span>Request Home Valuation</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="tel:18004407197"
                className="text-xs font-semibold text-charcoal-700 hover:text-terracotta-700 transition-colors"
              >
                Speak with a Listing Broker →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

