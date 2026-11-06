'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const TESTIMONIALS = [
  {
    author: 'Sumeet Anand',
    category: 'First-Time Home Buyer',
    location: 'Florida Resident',
    quote:
      "As a first-time buyer, we had lot of questions & He was there for clarification, guidance & suggestions. This deal wouldn't have happened without him. I would definitely consider him again for our next purchase.",
  },
  {
    author: 'Jorge Cruzcanales',
    category: 'Home Seller',
    location: 'Florida Homeowner',
    quote:
      "Mr. Freyre provided great customer service with timely answers to my questions, weekly feedback on online showing activity, as well as conveniently coordinating actual house showings. We were able to sell for a little over our bottom-line asking price.",
  },
];

export default function Testimonials() {
  const [activeIdx, setActiveIdx] = useState(0);

  const nextTestimonial = () => {
    setActiveIdx((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setActiveIdx((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[activeIdx];

  return (
    <section className="py-24 bg-ivory-100 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Section Lead */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-[0.25em] text-terracotta-600 font-semibold mb-3 block">
            Verified Experiences
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-charcoal-900 leading-tight">
            Client Voices & Proven Results
          </h2>
        </div>

        {/* Editorial Quote Card */}
        <div className="relative bg-ivory-50 border border-ivory-300 rounded-3xl p-8 sm:p-16 shadow-lg">
          <div className="flex items-center justify-between mb-8">
            <div className="w-12 h-12 rounded-2xl bg-coastal-800 text-ivory-50 flex items-center justify-center">
              <Quote className="w-6 h-6 text-brass-400" />
            </div>
            <div className="flex items-center gap-1 text-brass-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-brass-500" />
              ))}
            </div>
          </div>

          <div className="min-h-[160px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={activeIdx}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="font-serif text-xl sm:text-3xl text-charcoal-900 font-light leading-relaxed italic"
              >
                “{current.quote}”
              </motion.blockquote>
            </AnimatePresence>
          </div>

          <div className="pt-10 mt-8 border-t border-ivory-200 flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="font-serif text-lg font-semibold text-charcoal-900">
                {current.author}
              </div>
              <div className="text-xs text-coastal-700 font-medium">
                {current.category} • {current.location}
              </div>
            </div>

            {/* Slider Controls */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={prevTestimonial}
                aria-label="Previous Testimonial"
                className="p-3 rounded-full border border-ivory-300 bg-ivory-100 hover:bg-coastal-800 hover:text-ivory-50 text-charcoal-700 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-xs font-mono text-charcoal-500 px-2">
                0{activeIdx + 1} / 0{TESTIMONIALS.length}
              </span>
              <button
                type="button"
                onClick={nextTestimonial}
                aria-label="Next Testimonial"
                className="p-3 rounded-full border border-ivory-300 bg-ivory-100 hover:bg-coastal-800 hover:text-ivory-50 text-charcoal-700 transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

