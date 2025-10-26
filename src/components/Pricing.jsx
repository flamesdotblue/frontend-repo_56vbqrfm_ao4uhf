import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '$49',
    period: 'mo',
    highlight: false,
    features: [
      'Partner portal (basic)',
      'Up to 50 partners',
      'Deal registration',
      'Email support',
    ],
  },
  {
    name: 'Growth',
    price: '$199',
    period: 'mo',
    highlight: true,
    features: [
      'Advanced onboarding workflows',
      'Unlimited partners',
      'Partner communication & forums',
      'Program tiers & certifications',
      'Priority support',
    ],
  },
  {
    name: 'Scale',
    price: '$499',
    period: 'mo',
    highlight: false,
    features: [
      'SSO & RBAC',
      'MDF & co-marketing tools',
      'Custom deal routing',
      'Audit logs & analytics',
      'Premium support',
    ],
  },
];

const PricingCard = ({ plan }) => (
  <div className={`flex flex-col rounded-2xl border ${plan.highlight ? 'border-indigo-600 shadow-xl' : 'border-gray-200 shadow-sm'} bg-white p-6` }>
    <div className="flex items-baseline justify-between">
      <h3 className="text-xl font-semibold">{plan.name}</h3>
      {plan.highlight && (
        <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">Popular</span>
      )}
    </div>
    <div className="mt-4 flex items-end gap-1">
      <span className="text-4xl font-bold">{plan.price}</span>
      <span className="text-gray-500">/{plan.period}</span>
    </div>
    <ul className="mt-6 space-y-2">
      {plan.features.map((f) => (
        <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
          <Check className="mt-0.5 h-4 w-4 text-emerald-600" />
          <span>{f}</span>
        </li>
      ))}
    </ul>
    <button className={`mt-6 inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium ${plan.highlight ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'bg-gray-900 text-white hover:bg-gray-800'}`}>
      Choose {plan.name}
    </button>
  </div>
);

const CustomCard = () => (
  <div className="flex flex-col rounded-2xl border border-gray-200 bg-gradient-to-br from-indigo-50 via-white to-indigo-50 p-6 shadow-sm">
    <h3 className="text-xl font-semibold">Custom</h3>
    <p className="mt-2 text-gray-700">Need enterprise features, security reviews, or custom terms?</p>
    <ul className="mt-4 space-y-2 text-sm text-gray-700">
      <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-emerald-600"/> Dedicated CSM</li>
      <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-emerald-600"/> On-prem & sandbox options</li>
      <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-emerald-600"/> SLA & security package</li>
    </ul>
    <button onClick={()=>alert('Thanks! Our sales team will contact you.')} className="mt-6 inline-flex items-center justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700">
      Talk to sales
    </button>
  </div>
);

const Pricing = () => {
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold">Simple, transparent pricing</h1>
          <p className="mt-2 text-gray-600">Pick a plan that fits your partner motion today and scale without limits.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((p) => (<PricingCard key={p.name} plan={p} />))}
          <CustomCard />
        </div>
      </div>
    </section>
  );
};

export default Pricing;
