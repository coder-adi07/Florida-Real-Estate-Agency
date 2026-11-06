# Florida Real Estate Agency — Premium Website Redesign

A bespoke, editorial-grade digital experience and website redesign concept crafted for **Florida Real Estate Agency** (headquartered at 3001 N. Rocky Point Dr. E., Suite 200, Tampa, Florida 33607).

Built from the ground up using **Next.js (App Router)**, **JavaScript**, **Tailwind CSS**, and **Framer Motion**, following the **Florida Modernist** design direction.

---

## 🏛️ Creative Concept: Florida Modernist

Inspired by high-end architectural monographs and contemporary American luxury publishing:
* **Color Palette:** Warm Ivory (`#FBF9F5`), Deep Charcoal (`#121417`), Muted Coastal Teal (`#113E3E`), Terracotta (`#C86D51`), and Warm Brass (`#CBB282`).
* **Editorial Typography:** High-contrast serif headlines paired with refined sans-serif body text (`Plus Jakarta Sans` & `Playfair Display`).
* **Asymmetric Architecture:** Intentional whitespace, editorial image overlaps, and structured data layouts that reject generic real estate templates.
* **100% Authentic Business Identity:** Preserving verified leadership (Christopher Freyre, Robert Freyre, Scott Freyre), exact contact details, MLS disclaimers, agent membership plans ($299/deal), and genuine customer testimonials.

---

## 🛠️ Technology Stack

* **Framework:** [Next.js 14](https://nextjs.org/) (App Router, Server Components by default)
* **Language:** JavaScript (`.js`, `.jsx` exclusively — strictly zero TypeScript)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Animations:** [Framer Motion](https://www.framer.com/motion/)
* **Icons:** [Lucide React](https://lucide.dev/)
* **Images:** Next.js Image Component with optimized static loading
* **Typography:** `next/font/google` (`Playfair Display` + `Plus Jakarta Sans`)
* **Deployment:** Fully optimized for [Vercel](https://vercel.com/)

---

## 📐 Homepage Architecture (11 Dedicated Sections)

1. **Section 01: Premium Navigation (`Header.jsx`)**  
   Adaptive transparent-to-sticky header, official high-res logo, mobile drawer navigation, quick telephone actions, and consultation trigger.
2. **Section 02: Signature Hero Experience (`Hero.jsx`)**  
   Asymmetric architectural composition, verified Florida coastal photography, oversized editorial typography, value metric badges, and primary CTAs.
3. **Section 03: Brand Introduction (`BrandIntro.jsx`)**  
   Agency philosophy narrative, core pillars, executive leadership roster (Christopher Freyre, Robert Freyre, Scott Freyre), and Tampa headquarters spotlight.
4. **Section 04: Buyer & Seller Experience (`BuyerSeller.jsx`)**  
   Dual-journey split cards highlighting verified buyer MLS tools, neighborhood guides, comparative market analysis (CMA), and marketing support.
5. **Section 05: Agent Membership Opportunity (`AgentMembership.jsx`)**  
   Distinctive luxury dark card showcasing the verified flat-fee model ($299 per transaction, $299 annual fee, $0 E&O insurance, 24-hr transfer, 7-day broker support).
6. **Section 06: Why Choose The Agency (`WhyChooseUs.jsx`)**  
   Typography-driven editorial presentation of the 4 core pillars: Referrals, Earnings, Support, and Technology.
7. **Section 07: Verified Testimonials (`Testimonials.jsx`)**  
   Interactive quote composition preserving authentic client reviews (Sumeet Anand, Jorge Cruzcanales).
8. **Section 08: Regional Florida Coverage (`ServiceAreas.jsx`)**  
   Interactive geographic selector for the agency's 6 official Florida markets: Tampa Bay, Miami & Palm Beaches, Sarasota, Naples, Orlando, and Jacksonville.
9. **Section 09: Architectural Portfolio Showcase (`FeaturedProperties.jsx`)**  
   Curated visual living gallery without fabricated MLS metadata or fake prices, accompanied by verified Stellar MLS & BeachesMLS disclaimers.
10. **Section 10: High-Conversion Final CTA (`FinalCTA.jsx`)**  
    Interactive consultation scheduler, interest selector (Buying, Selling, Agent Plan, Builders), direct phone and email actions.
11. **Section 11: Editorial Footer (`Footer.jsx`)**  
    Complete contact channels, office address, internal anchor navigation, official social media links, BeachesMLS logo, and mandatory MLS legal disclaimers.

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build & Test
```bash
npm run build
npm start
```

---

## 🌐 Vercel Deployment Instructions

1. Push this repository to GitHub, GitLab, or Bitbucket:
   ```bash
   git init
   git add .
   git commit -m "feat: Florida Real Estate Agency luxury Next.js redesign"
   git branch -M main
   git remote add origin <your-remote-url>
   git push -u origin main
   ```
2. In your [Vercel Dashboard](https://vercel.com/new), select **Import Project** and link your Git repository.
3. Framework Preset: **Next.js** (automatically detected).
4. Build Command: `next build` (default).
5. Click **Deploy**. Your proposal will be live on a production `.vercel.app` URL within 60 seconds.

