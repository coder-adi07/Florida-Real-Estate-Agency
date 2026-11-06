'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, ArrowRight, CheckCircle } from 'lucide-react';

export default function FinalCTA() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [interest, setInterest] = useState('Buying');

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-coastal-900 text-ivory-50 relative overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-coastal-700/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-terracotta-700/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Authentic Brand Messaging (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] text-brass-400 font-semibold block">
              Begin Your Florida Journey
            </span>

            <h2 className="font-serif text-3xl sm:text-5xl font-normal leading-[1.15] text-ivory-50">
              Questions? Connect directly with the Florida Real Estate Agency.
            </h2>

            <p className="text-ivory-200 text-base sm:text-lg font-light leading-relaxed">
              We serve Florida real estate buyers and sellers, and we do a lot of referral business. However, if you haven’t been recommended to us, we can’t show you our five-star service unless you connect with us today.
            </p>

            {/* Direct Contact Pillars */}
            <div className="space-y-4 pt-4 border-t border-coastal-800">
              <a
                href="tel:18004407197"
                className="flex items-center gap-4 group p-3 rounded-xl hover:bg-coastal-800/60 transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-brass-400 text-charcoal-900 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-ivory-400 uppercase tracking-widest block font-medium">Toll-Free Phone</span>
                  <span className="font-serif text-lg text-ivory-50 group-hover:text-brass-300 transition-colors">
                    1 (800) 440-7197
                  </span>
                </div>
              </a>

              <a
                href="mailto:frea@floridareagency.com"
                className="flex items-center gap-4 group p-3 rounded-xl hover:bg-coastal-800/60 transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-brass-400 text-charcoal-900 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-ivory-400 uppercase tracking-widest block font-medium">Direct Email</span>
                  <span className="font-serif text-base text-ivory-50 group-hover:text-brass-300 transition-colors">
                    frea@floridareagency.com
                  </span>
                </div>
              </a>

              <div className="flex items-start gap-4 p-3">
                <div className="w-10 h-10 rounded-full bg-coastal-800 text-brass-400 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-ivory-400 uppercase tracking-widest block font-medium">Office Headquarters</span>
                  <p className="text-sm text-ivory-200 font-light">
                    3001 N. Rocky Point Dr. E., Suite 200, Tampa, Florida 33607
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Card (6 cols) */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl bg-ivory-50 text-charcoal-900 p-8 sm:p-12 shadow-2xl border border-ivory-300">
              {formSubmitted ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-coastal-800 text-ivory-50 mx-auto flex items-center justify-center shadow-lg">
                    <CheckCircle className="w-8 h-8 text-brass-400" />
                  </div>
                  <h3 className="font-serif text-2xl text-charcoal-900">Thank You for Connecting</h3>
                  <p className="text-sm text-charcoal-600 font-light max-w-md mx-auto leading-relaxed">
                    Your inquiry has been received. A licensed broker from our executive team will review your requirements and reach out within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setFormSubmitted(false)}
                    className="text-xs font-semibold text-coastal-800 hover:underline pt-2"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h3 className="font-serif text-2xl text-charcoal-900 mb-1">Schedule a Consultation</h3>
                    <p className="text-xs text-charcoal-500 font-light">
                      Confidential advice for prospective buyers, sellers, builders, and real estate professionals.
                    </p>
                  </div>

                  {/* Interest Selector */}
                  <div>
                    <label className="text-[11px] uppercase tracking-wider font-semibold text-charcoal-600 block mb-2">
                      I Am Interested In:
                    </label>
                    <div className="grid grid-cols-4 gap-2">
                      {['Buying', 'Selling', 'Agent Plan', 'Builders'].map((item) => (
                        <button
                          key={item}
                          type="button"
                          onClick={() => setInterest(item)}
                          className={`py-2 px-1 text-center rounded-lg text-xs font-medium transition-colors border ${
                            interest === item
                              ? 'bg-coastal-800 text-ivory-50 border-coastal-800'
                              : 'bg-ivory-100 text-charcoal-700 border-ivory-300 hover:bg-ivory-200'
                          }`}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[11px] font-medium text-charcoal-700 block mb-1">First & Last Name</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Robert Smith"
                        className="w-full px-4 py-2.5 rounded-xl border border-ivory-300 bg-ivory-100 text-charcoal-900 text-xs focus:outline-none focus:ring-2 focus:ring-coastal-700"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-medium text-charcoal-700 block mb-1">Phone Number</label>
                      <input
                        type="tel"
                        required
                        placeholder="(813) 000-0000"
                        className="w-full px-4 py-2.5 rounded-xl border border-ivory-300 bg-ivory-100 text-charcoal-900 text-xs focus:outline-none focus:ring-2 focus:ring-coastal-700"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] font-medium text-charcoal-700 block mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="name@domain.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-ivory-300 bg-ivory-100 text-charcoal-900 text-xs focus:outline-none focus:ring-2 focus:ring-coastal-700"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-medium text-charcoal-700 block mb-1">Preferred Market / Notes</label>
                    <textarea
                      rows={3}
                      placeholder="Share your timeline, target Florida community, or questions..."
                      className="w-full px-4 py-2.5 rounded-xl border border-ivory-300 bg-ivory-100 text-charcoal-900 text-xs focus:outline-none focus:ring-2 focus:ring-coastal-700"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-full bg-coastal-800 text-ivory-50 text-xs font-semibold tracking-wide hover:bg-coastal-700 transition-colors shadow-md flex items-center justify-center gap-2 group"
                  >
                    <span>Request Confidential Consultation</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>

                  <p className="text-[10px] text-charcoal-500 text-center font-light">
                    We respect your privacy. No spam. Direct communication with our broker team only.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

