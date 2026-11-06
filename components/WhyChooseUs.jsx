'use client';

const PILLARS = [
  {
    num: '01',
    title: 'Referrals',
    subtitle: 'Statewide Lead Distribution',
    description: 'With our IDX syndication network, high-ranking agent websites, and strategic community portals, our agents receive consistent qualified buyer and seller referrals across Florida.',
  },
  {
    num: '02',
    title: 'Earnings',
    subtitle: 'Maximized Agent Take-Home',
    description: 'Keep your commission without predatory split models. Our transparent membership ensures your hard work translates directly into higher net income at every closing.',
  },
  {
    num: '03',
    title: 'Support',
    subtitle: 'Direct Broker Mentorship',
    description: 'Never wait days for contract advice. Receive direct, accessible guidance from licensed brokers available 7 days a week to review addenda, mitigate risks, and win negotiations.',
  },
  {
    num: '04',
    title: 'Technology',
    subtitle: 'Cloud-Based Mobility',
    description: 'Conduct your real estate business seamlessly from anywhere. Our complete paperless tech stack offers real-time MLS connectivity, digital signing, and automated compliance.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-ivory-50 border-b border-ivory-300/70">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-ivory-300">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-terracotta-600 font-semibold mb-3 block">
              Core Brokerage Strengths
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-charcoal-900 leading-tight">
              Why Florida Real Estate Agency.
            </h2>
          </div>
          <p className="text-charcoal-600 text-sm max-w-md font-light leading-relaxed">
            The four foundational pillars that define our commitment to agents, home buyers, and property sellers across the Sunshine State.
          </p>
        </div>

        {/* Typography-Driven Editorial Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.num}
              className="flex flex-col justify-between pt-6 border-t-2 border-charcoal-900 group hover:border-coastal-700 transition-colors duration-300"
            >
              <div>
                <span className="font-serif text-3xl sm:text-4xl font-light text-brass-500 block mb-4 group-hover:text-coastal-700 transition-colors">
                  {pillar.num}
                </span>
                <h3 className="font-serif text-2xl font-medium text-charcoal-900 mb-1">
                  {pillar.title}
                </h3>
                <p className="text-[11px] font-semibold uppercase tracking-wider text-terracotta-600 mb-4">
                  {pillar.subtitle}
                </p>
                <p className="text-xs sm:text-sm text-charcoal-600 font-light leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

