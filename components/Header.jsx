'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, ArrowUpRight, MapPin, Instagram, Facebook } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Home', href: '#hero' },
  { label: 'Search MLS', href: 'https://www.floridareagency.com/search/', external: true },
  { label: 'Buyers', href: '#buyers' },
  { label: 'Sellers', href: '#sellers' },
  { label: 'Communities', href: '#communities' },
  { label: 'Agent Membership', href: '#careers' },
  { label: 'About Agency', href: '#about' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is active
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* AUTHENTIC ORIGINAL WEBSITE MATCHING NAVBAR (DARK SLATE #3A3E45 / #4B4F58) */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#2A2E35]/98 backdrop-blur-md shadow-lg border-b border-charcoal-700/80 py-2'
            : 'bg-[#3A3F47] shadow-md border-b border-charcoal-700/50 py-2.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
          {/* Brand Logo - EXACTLY LIKE MAIN WEBSITE (NO EXTRA TEXT!) */}
          <Link href="#hero" className="flex items-center group shrink-0">
            <div className="relative w-32 sm:w-36 h-12 sm:h-14 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/assets/logo/frea-primary-logo.png"
                alt="Florida Real Estate Agency Official Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-7">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                className="font-heading text-[14px] uppercase tracking-wide font-medium text-white hover:text-[#e27900] transition-colors relative py-1 group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#e27900] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Header Right Actions */}
          <div className="hidden sm:flex items-center gap-6 shrink-0">
            <a
              href="tel:18004407197"
              className="flex items-center gap-2 text-xs font-semibold tracking-wide text-white hover:text-[#e27900] transition-colors py-1.5 px-2 rounded-lg hover:bg-white/10"
            >
              <Phone className="w-3.5 h-3.5 text-[#e27900]" />
              <span className="font-sans">1 (800) 440-7197</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#e27900] text-white text-xs font-semibold tracking-wide uppercase hover:bg-[#c66a00] transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <span>Contact Us</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden p-2 rounded-xl border border-charcoal-600 bg-white/10 text-white hover:bg-[#e27900] transition-colors flex items-center justify-center shadow-sm"
            aria-label="Open Navigation Menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* HALF-SCREEN ORANGE SLIDING DRAWER + BACKDROP OVERLAY */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-[100] flex justify-end">
            {/* Dimmed backdrop covering the other half of the screen */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMobileMenuOpen(false)}
              className="absolute inset-0 bg-charcoal-900/65 backdrop-blur-sm cursor-pointer"
              aria-label="Close menu backdrop"
            />

            {/* Half-screen vibrant Orange/Terracotta Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 260 }}
              className="relative w-[75vw] sm:w-[55vw] md:w-1/2 h-full z-10 flex flex-col justify-between overflow-y-auto bg-gradient-to-b from-[#C85A32] via-[#B84E28] to-[#993B19] text-ivory-50 shadow-2xl p-6 border-l border-ivory-50/25"
            >
              {/* Drawer Header - ONLY CLEAN LOGO, NO EXTRA TEXT */}
              <div className="flex items-center justify-between pb-5 border-b border-ivory-50/20">
                <div className="relative w-28 h-10">
                  <Image
                    src="/assets/logo/frea-primary-logo.png"
                    alt="Florida Real Estate Agency Logo"
                    fill
                    className="object-contain brightness-0 invert"
                  />
                </div>

                {/* Close Button */}
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-9 h-9 rounded-full bg-ivory-50/20 hover:bg-ivory-50/35 text-ivory-50 flex items-center justify-center transition-colors border border-ivory-50/30 focus:outline-none"
                  aria-label="Close Navigation Menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Items */}
              <nav className="my-auto py-5 flex flex-col gap-2">
                {[...NAV_ITEMS, { label: 'Contact Us', href: '#contact' }].map((item, idx) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    target={item.external ? '_blank' : undefined}
                    rel={item.external ? 'noopener noreferrer' : undefined}
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * idx, duration: 0.25 }}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-base sm:text-lg font-heading font-normal uppercase tracking-wide text-white hover:text-brass-300 transition-colors border-b border-ivory-50/10 group"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="w-4 h-4 text-ivory-200/60 group-hover:text-brass-300 transition-transform group-hover:translate-x-0.5" />
                  </motion.a>
                ))}
              </nav>

              {/* Drawer Bottom Actions */}
              <div className="pt-5 border-t border-ivory-50/20 space-y-3">
                <a
                  href="tel:18004407197"
                  className="w-full py-2.5 px-3 rounded-xl bg-ivory-50 text-charcoal-900 font-semibold text-xs flex items-center justify-center gap-2 shadow-md hover:bg-ivory-200 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-terracotta-600" />
                  <span>1 (800) 440-7197</span>
                </a>

                <div className="flex items-center justify-between text-[11px] text-ivory-200 font-light pt-1">
                  <span className="flex items-center gap-1 text-[10px]">
                    <MapPin className="w-3.5 h-3.5 text-ivory-300" />
                    Tampa HQ, Rocky Point
                  </span>
                  <div className="flex items-center gap-2.5">
                    <a
                      href="https://www.facebook.com/floridareagency"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-ivory-50 transition-colors"
                      aria-label="Facebook"
                    >
                      <Facebook className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href="https://www.instagram.com/floridareagency/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-ivory-50 transition-colors"
                      aria-label="Instagram"
                    >
                      <Instagram className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
