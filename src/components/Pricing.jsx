import React from 'react';

const tiers = [
  {
    name: 'Starter',
    price: '$0',
    description: 'For early stage teams getting started with partners.',
    features: [
      'Up to 3 partners',
      'Shared accounts',
      'Basic partner directory',
      'Email support',
    ],
    cta: 'Start free',
    highlighted: false,
    link: '#pricing',
  },
  {
    name: 'Growth',
    price: '$499',
    description: 'For growing partner programs that need collaboration.',
    features: [
      'Unlimited partners',
      'Account mapping & overlaps',
      'Co-selling workflows',
      'Partner portal',
      'API access',
      'Priority support',
    ],
    cta: 'Book demo',
    highlighted: true,
    link: '#demo',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For complex ecosystems and advanced security needs.',
    features: [
      'SSO & SCIM',
      'Advanced permissions',
      'Custom contracts',
      'Dedicated CSM',
    ],
    cta: 'Talk to sales',
    highlighted: false,
    link: '#demo',
  },
];

export default function Pricing() {
  const handleScroll = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="pricing" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900">Pricing that scales with you</h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">Choose a plan that fits your partner strategy today, with room to grow.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-2xl border ${tier.highlighted ? 'border-[#2596be] shadow-xl shadow-[#2596be]/20' : 'border-slate-200'} bg-white p-6 flex flex-col`}
            >
              <div className="flex-1">
                <div className="flex items-baseline justify-between">
                  <h3 className="text-lg font-semibold text-slate-900">{tier.name}</h3>
                  <span className="text-2xl font-bold text-slate-900">{tier.price}<span className="text-sm font-normal text-slate-500 ml-1">{tier.price === '$0' ? '' : '/mo'}</span></span>
                </div>
                <p className="mt-2 text-sm text-slate-600">{tier.description}</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href={tier.link}
                onClick={(e) => handleScroll(e, tier.link.replace('#',''))}
                className={`mt-6 w-full rounded-md px-4 py-2 text-sm font-semibold text-center ${tier.highlighted ? 'bg-[#2596be] text-white hover:brightness-105' : 'bg-slate-100 text-slate-900 hover:bg-slate-200'}`}
                style={tier.highlighted ? { boxShadow: '0 10px 24px rgba(37,150,190,0.25)' } : undefined}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
