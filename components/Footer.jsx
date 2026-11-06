'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Phone, Mail, MapPin, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-charcoal-900 text-ivory-100 pt-16 pb-12 border-t border-charcoal-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-charcoal-800">
          {/* Brand & Address Column (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="relative w-40 h-14">
              <Image
                src="/assets/logo/frea-primary-logo.png"
                alt="Florida Real Estate Agency Logo"
                fill
                className="object-contain object-left"
              />
            </div>

            <p className="text-xs text-ivory-300 font-light leading-relaxed max-w-sm">
              Premier Florida real estate brokerage dedicated to comprehensive residential advisory, builder representation, and elite agent empowerment across Florida’s most competitive communities.
            </p>

            <div className="space-y-2 pt-2 text-xs text-ivory-300 font-light">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-brass-400 shrink-0" />
                <span>3001 N. Rocky Point Dr. E., Suite 200, Tampa, FL 33607</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brass-400 shrink-0" />
                <a href="tel:18004407197" className="hover:text-brass-300 transition-colors">
                  1 (800) 440-7197
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brass-400 shrink-0" />
                <a href="mailto:frea@floridareagency.com" className="hover:text-brass-300 transition-colors">
                  frea@floridareagency.com
                </a>
              </div>
            </div>
          </div>

          {/* Navigation Links (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-brass-400">
              Agency Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-ivory-300 font-light">
              <li>
                <a href="#hero" className="hover:text-ivory-50 transition-colors">Home</a>
              </li>
              <li>
                <a href="https://www.floridareagency.com/search/" target="_blank" rel="noopener noreferrer" className="hover:text-ivory-50 transition-colors">MLS® Search</a>
              </li>
              <li>
                <a href="#buyers" className="hover:text-ivory-50 transition-colors">Buyer Resources</a>
              </li>
              <li>
                <a href="#sellers" className="hover:text-ivory-50 transition-colors">Seller Valuation</a>
              </li>
              <li>
                <a href="#communities" className="hover:text-ivory-50 transition-colors">Communities & Regions</a>
              </li>
              <li>
                <a href="#careers" className="hover:text-ivory-50 transition-colors">Agent Membership</a>
              </li>
              <li>
                <a href="#about" className="hover:text-ivory-50 transition-colors">Executive Team</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-ivory-50 transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Service Territories (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-brass-400">
              Markets
            </h4>
            <ul className="space-y-2.5 text-xs text-ivory-300 font-light">
              <li>Tampa Bay</li>
              <li>Miami & Palm Beaches</li>
              <li>Sarasota</li>
              <li>Naples</li>
              <li>Orlando</li>
              <li>Jacksonville</li>
            </ul>
          </div>

          {/* Socials & MLS Attribution (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-brass-400">
              Connect
            </h4>
            <div className="flex flex-col gap-2 text-xs text-ivory-300 font-light">
              <a
                href="https://www.facebook.com/floridareagency"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brass-300 transition-colors"
              >
                Facebook Profile ↗
              </a>
              <a
                href="https://www.instagram.com/floridareagency/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brass-300 transition-colors"
              >
                Instagram Page ↗
              </a>
              <a
                href="https://twitter.com/floridareagency"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brass-300 transition-colors"
              >
                Twitter / X Profile ↗
              </a>
              <a
                href="https://www.youtube.com/channel/UC0GjjYk2sV2lNi-QGLyvVzQ/featured"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brass-300 transition-colors"
              >
                YouTube Channel ↗
              </a>
            </div>

            <div className="pt-4">
              <div className="relative w-16 h-10 opacity-70 hover:opacity-100 transition-opacity">
                <Image
                  src="/assets/logo/BMLS_logo-1.png"
                  alt="BeachesMLS Verified Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Legal & MLS Disclaimers */}
        <div className="py-8 border-b border-charcoal-800 text-[10px] text-charcoal-500 space-y-2 font-light leading-relaxed">
          <p>
            <strong>Information Deemed Reliable, but Not Guaranteed.</strong> The property information being provided is for consumers’ personal, non-commercial use and may not be used for any purpose other than to identify prospective properties consumers may be interested in purchasing.
          </p>
          <p>
            The data relating to real estate for sale on this website comes in part from the participating Brokers. All listings featuring the BMLS logo are provided by BeachesMLS, Inc. This information is not verified for authenticity or accuracy and is not guaranteed. Copyright © BeachesMLS, Inc.
          </p>
          <p>
            Data provided by Stellar MLS GRID. All rights reserved. Equal Housing Opportunity.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-charcoal-500 font-light">
          <p>© {new Date().getFullYear()} Florida Real Estate Agency. All rights reserved.</p>
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-ivory-400 hover:text-ivory-100 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}

