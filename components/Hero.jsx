'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import {
  ChevronLeft,
  ChevronRight,
  ArrowDownRight,
  MapPin,
  Sparkles,
  MousePointerClick,
} from 'lucide-react';

const LUXURY_PROPERTIES = [
  {
    id: 1,
    title: 'Tampa Bay Coastal Waterfront Estate',
    location: 'Rocky Point & South Tampa, FL',
    tag: 'Waterfront Sanctuary',
    image: '/assets/properties/florida-luxury-mansion-1.jpg',
    description: 'Bespoke contemporary architecture, private deepwater dockage, and infinity-edge swimming pool overlooking the bay.',
  },
  {
    id: 2,
    title: 'Modern Florida Architectural Residence',
    location: 'Miami & Palm Beaches, FL',
    tag: 'Ultra-Luxury Architecture',
    image: '/assets/properties/florida-luxury-mansion-2.jpg',
    description: 'Floor-to-ceiling glass pavilions, lush tropical palm gardens, and sunlit resort-style entertaining courtyards.',
  },
  {
    id: 3,
    title: 'Sarasota Gulf Coast Villa & Pool Sanctuary',
    location: 'Siesta Key & Longboat Key, FL',
    tag: 'Gulf Coast Retreat',
    image: '/assets/properties/florida-luxury-mansion-3.jpg',
    description: 'Timeless coastal living paired with panoramic sunset terraces and private deeded Gulf beach access.',
  },
  {
    id: 4,
    title: 'Naples Mediterranean Waterfront Sanctuary',
    location: 'Port Royal & Pelican Bay, FL',
    tag: 'Estate Collection',
    image: '/assets/properties/florida-luxury-mansion-4.jpg',
    description: 'Artisan stone craftsmanship, private yacht slip, and world-class championship golf neighborhood access.',
  },
  {
    id: 5,
    title: 'Orlando Lakefront Custom Architectural Estate',
    location: 'Winter Park & Windermere, FL',
    tag: 'Lakefront Living',
    image: '/assets/properties/florida-luxury-mansion-5.jpg',
    description: 'Pristine freshwater views, expansive outdoor living loggias, and private gated sanctuary living.',
  },
  {
    id: 6,
    title: 'Florida Real Estate Agency Official Showcase',
    location: 'Rocky Point Dr., Tampa Bay Headquarters',
    tag: 'Official Agency Heritage',
    image: '/assets/banners/banner-1-agents-vs-paras.jpg',
    description: 'The signature visual identity of Florida Real Estate Agency, representing premier advisory across Florida’s most competitive communities.',
  },
];

export default function Hero() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const heroRef = useRef(null);
  const lastScrollTime = useRef(0);

  // Auto-play slideshow every 6 seconds when not hovered
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % LUXURY_PROPERTIES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isHovered]);

  // Mouse wheel scroll triggers next/previous home photo
  const handleWheel = (e) => {
    const now = Date.now();
    if (now - lastScrollTime.current < 350) return;

    if (Math.abs(e.deltaY) > 20) {
      lastScrollTime.current = now;
      if (e.deltaY > 0) {
        setActiveIdx((prev) => (prev + 1) % LUXURY_PROPERTIES.length);
      } else {
        setActiveIdx((prev) => (prev - 1 + LUXURY_PROPERTIES.length) % LUXURY_PROPERTIES.length);
      }
    }
  };

  const nextProperty = () => {
    setActiveIdx((prev) => (prev + 1) % LUXURY_PROPERTIES.length);
  };

  const prevProperty = () => {
    setActiveIdx((prev) => (prev - 1 + LUXURY_PROPERTIES.length) % LUXURY_PROPERTIES.length);
  };

  const current = LUXURY_PROPERTIES[activeIdx];

  return (
    <section
      id="hero"
      ref={heroRef}
      onWheel={handleWheel}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative min-h-[90vh] lg:min-h-screen flex items-center pt-28 pb-16 overflow-hidden bg-ivory-100"
    >
      {/* 1. BRIGHT LUXURY HOUSE BACKGROUND SLIDER */}
      <div className="absolute inset-0 z-0">
        {LUXURY_PROPERTIES.map((prop, idx) => (
          <div
            key={prop.id}
            className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${
              activeIdx === idx ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            <Image
              src={prop.image}
              alt={prop.title}
              fill
              priority={idx === 0}
              className="object-cover object-center filter brightness-[0.96] contrast-[1.02] saturate-[1.08]"
            />
          </div>
        ))}

        {/* Seamless editorial fade so text is 100% readable without any box */}
        <div className="absolute inset-0 z-20 bg-gradient-to-r from-ivory-100 via-ivory-100/90 to-transparent pointer-events-none md:w-3/5" />
        <div className="absolute inset-0 z-20 bg-gradient-to-t from-charcoal-900/40 via-transparent to-ivory-100/50 pointer-events-none" />
      </div>

      {/* 2. FOREGROUND CONTENT: EXACT ORIGINAL WEBSITE HEADLINE & COPY */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 w-full relative z-30 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Natural, Open, Unboxed Typography */}
          <div className="lg:col-span-7 space-y-5">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ivory-200/90 border border-ivory-300 text-[11px] font-semibold tracking-wider text-coastal-800 uppercase shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-terracotta-500" />
              <span>Real Estate Consultant • Tampa Headquarters</span>
            </div>

            {/* Main Headline - EXACT ORIGINAL WEBSITE BRAND HEADING */}
            <h1 className="font-heading text-4xl sm:text-6xl lg:text-6xl xl:text-7xl font-semibold uppercase tracking-tight text-charcoal-900 leading-[1.04] text-balance">
              Welcome to the{' '}
              <span className="text-coastal-800 block sm:inline">
                Florida Real Estate Agency
              </span>
            </h1>

            {/* Subtitle - EXACT ORIGINAL WEBSITE BUSINESS PARAGRAPH */}
            <p className="font-sans text-sm sm:text-base text-charcoal-700 font-normal leading-relaxed max-w-xl">
              Where we are committed to exceed our client’s expectations through experienced realtors who possess all the attributes deemed critical for the consistent sale and purchase of our customer’s needs. We are your dedicated resource for home buying, home selling, and navigating new home construction across Florida.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="#buyers"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-coastal-800 text-ivory-50 text-xs sm:text-sm font-semibold tracking-wide uppercase hover:bg-coastal-700 transition-all duration-300 shadow-md hover:shadow-lg group"
              >
                <span>Explore Buyer Resources</span>
                <ArrowDownRight className="w-4 h-4 transition-transform group-hover:rotate-[-45deg]" />
              </a>
              <a
                href="#careers"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-ivory-50 border border-ivory-300 text-charcoal-800 text-xs sm:text-sm font-medium tracking-wide uppercase hover:bg-ivory-200 transition-all duration-300 shadow-sm"
              >
                <span>Agent Membership ($299)</span>
              </a>
            </div>

            {/* Credibility Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6 mt-4 border-t border-charcoal-900/10 max-w-lg">
              <div>
                <span className="font-heading text-2xl sm:text-3xl font-bold text-charcoal-900 uppercase">100%</span>
                <span className="text-[10px] text-charcoal-600 uppercase tracking-wider block font-sans">Brokerage Support</span>
              </div>
              <div>
                <span className="font-heading text-2xl sm:text-3xl font-bold text-charcoal-900 uppercase">6</span>
                <span className="text-[10px] text-charcoal-600 uppercase tracking-wider block font-sans">Florida Markets</span>
              </div>
              <div>
                <span className="font-heading text-2xl sm:text-3xl font-bold text-charcoal-900 uppercase">$299</span>
                <span className="text-[10px] text-charcoal-600 uppercase tracking-wider block font-sans">Flat Agent Plan</span>
              </div>
            </div>
          </div>

          {/* Right Column: Live Property Tag & Scroll Switcher Box */}
          <div className="lg:col-span-5 flex flex-col justify-end">
            <div className="bg-charcoal-900/85 backdrop-blur-md p-6 rounded-3xl border border-ivory-50/20 text-ivory-50 shadow-2xl space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-terracotta-500 text-ivory-50 text-[10px] uppercase tracking-widest font-semibold shadow-sm">
                  {current.tag}
                </span>
                <div className="flex items-center gap-1.5 text-xs text-brass-300">
                  <MousePointerClick className="w-3.5 h-3.5 animate-bounce" />
                  <span>Scroll to switch ({activeIdx + 1}/{LUXURY_PROPERTIES.length})</span>
                </div>
              </div>

              <div>
                <h3 className="font-heading text-xl sm:text-2xl font-medium tracking-wide uppercase mb-1">
                  {current.title}
                </h3>
                <p className="flex items-center gap-1.5 text-xs text-brass-300 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-terracotta-400 shrink-0" />
                  <span>{current.location}</span>
                </p>
              </div>

              <p className="font-sans text-xs text-ivory-200 font-light leading-relaxed line-clamp-2">
                {current.description}
              </p>

              {/* Slider Controls */}
              <div className="flex items-center justify-between pt-3 border-t border-ivory-50/15">
                <div className="flex items-center gap-1.5">
                  {LUXURY_PROPERTIES.map((prop, idx) => (
                    <button
                      key={prop.id}
                      onClick={() => setActiveIdx(idx)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        activeIdx === idx ? 'w-7 bg-brass-400' : 'w-2 bg-ivory-50/40 hover:bg-ivory-50'
                      }`}
                      aria-label={`View ${prop.title}`}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={prevProperty}
                    aria-label="Previous Property"
                    className="w-9 h-9 rounded-full bg-ivory-50/15 hover:bg-ivory-50 text-ivory-50 hover:text-charcoal-900 border border-ivory-50/20 flex items-center justify-center transition-all shadow-md"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={nextProperty}
                    aria-label="Next Property"
                    className="w-9 h-9 rounded-full bg-ivory-50/15 hover:bg-ivory-50 text-ivory-50 hover:text-charcoal-900 border border-ivory-50/20 flex items-center justify-center transition-all shadow-md"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
