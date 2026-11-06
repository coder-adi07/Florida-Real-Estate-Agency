'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, ArrowRight, ExternalLink } from 'lucide-react';

const REGIONS = [
  {
    id: 'tampa',
    name: 'Tampa Bay',
    tagline: 'Brokerage Headquarters & Coastal Metropolis',
    description:
      'From Rocky Point Dr. to South Tampa, St. Petersburg, and Clearwater Beach, Tampa Bay offers world-class boating, dynamic downtown living, and scenic waterfront retreats.',
    communities: ['Tampa Palms', 'South Tampa', 'Davis Islands', 'Clearwater', 'St. Petersburg'],
    featuredUrl: 'https://www.floridareagency.com/tamba-bay/',
  },
  {
    id: 'miami',
    name: 'Miami & Palm Beaches',
    tagline: 'Cosmopolitan Living & Elite Coastal Enclaves',
    description:
      'Premier architectural residences, oceanfront towers, and timeless Palm Beach estates representing Florida’s most globally renowned luxury corridors.',
    communities: ['Brickell', 'Coral Gables', 'Palm Beach', 'Boca Raton', 'Fort Lauderdale'],
    featuredUrl: 'https://www.floridareagency.com/miami-palm-beaches/',
  },
  {
    id: 'sarasota',
    name: 'Sarasota',
    tagline: 'Cultural Haven & Gulf Barrier Islands',
    description:
      'Celebrated for its arts culture, turquoise waters, and premier barrier island estates stretching across Siesta Key, Longboat Key, and Lakewood Ranch.',
    communities: ['Siesta Key', 'Longboat Key', 'Bird Key', 'Lakewood Ranch', 'Downtown Sarasota'],
    featuredUrl: 'https://www.floridareagency.com/sarasota/',
  },
  {
    id: 'naples',
    name: 'Naples',
    tagline: 'Southwest Florida’s Crown Jewel',
    description:
      'Quiet luxury, pristine white-sand beaches, and elite championship golf communities on the tranquil Gulf of Mexico.',
    communities: ['Port Royal', 'Old Naples', 'Pelican Bay', 'Tiburon', 'Park Shore'],
    featuredUrl: 'https://www.floridareagency.com/naples/',
  },
  {
    id: 'orlando',
    name: 'Orlando',
    tagline: 'Central Florida Lakes & Premier Master-Plans',
    description:
      'Lush lakefront living, Winter Park historic charm, and prestigious golf enclaves offering effortless access to premier dining, commerce, and international travel.',
    communities: ['Winter Park', 'Windermere', 'Lake Nona', 'Dr. Phillips', 'Golden Oak'],
    featuredUrl: 'https://www.floridareagency.com/orlando/',
  },
  {
    id: 'jacksonville',
    name: 'Jacksonville',
    tagline: 'First Coast Heritage & Riverfront Grandeur',
    description:
      'Expansive coastal stretches, historic neighborhoods, and serene St. Johns River estates paired with relaxed Atlantic seaside living.',
    communities: ['Ponte Vedra Beach', 'San Marco', 'Atlantic Beach', 'Riverside', 'Amelia Island'],
    featuredUrl: 'https://www.floridareagency.com/jacksonville/',
  },
];

export default function ServiceAreas() {
  const [selectedRegion, setSelectedRegion] = useState(REGIONS[0]);

  return (
    <section id="communities" className="py-24 bg-ivory-50 border-b border-ivory-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-terracotta-600 font-semibold mb-3 block">
            Statewide Regional Mastery
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-charcoal-900 leading-tight">
            Six distinct Florida regions, unified under one agency.
          </h2>
        </div>

        {/* Regional Selection Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-12">
          {REGIONS.map((region) => (
            <button
              key={region.id}
              onClick={() => setSelectedRegion(region)}
              className={`p-3.5 rounded-xl text-left transition-all duration-300 border ${
                selectedRegion.id === region.id
                  ? 'bg-coastal-800 text-ivory-50 border-coastal-800 shadow-md'
                  : 'bg-ivory-100 text-charcoal-800 border-ivory-300 hover:bg-ivory-200'
              }`}
            >
              <div className="flex items-center gap-1.5 mb-1">
                <MapPin className={`w-3 h-3 ${selectedRegion.id === region.id ? 'text-brass-400' : 'text-terracotta-500'}`} />
                <span className="text-[10px] uppercase tracking-wider font-semibold opacity-80">Region</span>
              </div>
              <div className="font-serif text-sm font-medium leading-snug">{region.name}</div>
            </button>
          ))}
        </div>

        {/* Selected Region Detailed Spotlight */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedRegion.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="rounded-3xl bg-ivory-100 border border-ivory-300 p-8 sm:p-14 shadow-sm"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <span className="text-xs uppercase tracking-[0.2em] font-semibold text-terracotta-600">
                  {selectedRegion.tagline}
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl text-charcoal-900">
                  {selectedRegion.name} Market Overview
                </h3>
                <p className="text-sm sm:text-base text-charcoal-600 font-light leading-relaxed max-w-2xl">
                  {selectedRegion.description}
                </p>

                {/* Notable Communities Chips */}
                <div className="pt-4">
                  <span className="text-[11px] uppercase tracking-wider text-charcoal-500 font-semibold block mb-2">
                    Key Neighborhoods & Sub-Markets:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {selectedRegion.communities.map((c) => (
                      <span
                        key={c}
                        className="px-3 py-1 rounded-full bg-ivory-50 border border-ivory-300 text-xs font-medium text-charcoal-700"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center gap-4 pt-6 lg:pt-0 border-t lg:border-t-0 lg:border-l border-ivory-300/80 lg:pl-8">
                <div className="text-xs text-charcoal-600">
                  Verified Local Broker Network
                </div>
                <a
                  href={selectedRegion.featuredUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-coastal-800 text-ivory-50 text-xs font-medium hover:bg-coastal-700 transition-colors shadow"
                >
                  <span>Explore {selectedRegion.name} Listings</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <a
                  href="#contact"
                  className="text-xs font-semibold text-charcoal-700 hover:text-coastal-800 transition-colors"
                >
                  Connect with Regional Specialist →
                </a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

