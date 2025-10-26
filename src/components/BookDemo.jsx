import React from 'react';

export default function BookDemo() {
  return (
    <section id="demo" className="py-24 bg-[#e7f6fb]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center rounded-full bg-white px-3 py-1 text-xs font-medium text-[#0e2a36] ring-1 ring-[#bde7f5]">Live walkthrough</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-semibold text-slate-900">Book a personalized demo</h2>
            <p className="mt-3 text-slate-700 max-w-xl">See how account mapping, co-selling, and partner attribution work together. We’ll tailor the session to your use cases and tech stack.</p>
            <ul className="mt-6 space-y-3 text-sm text-slate-700">
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500"></span> 30–45 min live session with a product expert</li>
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500"></span> Coverage of core workflows and integrations</li>
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500"></span> No pressure — honest guidance for your stage</li>
            </ul>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-xl ring-1 ring-slate-200">
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700">First name</label>
                  <input type="text" required className="mt-1 w-full rounded-md border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2596be]" placeholder="Alex" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">Last name</label>
                  <input type="text" required className="mt-1 w-full rounded-md border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2596be]" placeholder="Kim" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700">Work email</label>
                <input type="email" required className="mt-1 w-full rounded-md border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2596be]" placeholder="you@company.com" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700">Company</label>
                  <input type="text" required className="mt-1 w-full rounded-md border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2596be]" placeholder="Acme Inc." />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">Team size</label>
                  <select className="mt-1 w-full rounded-md border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2596be]">
                    <option>1-10</option>
                    <option>11-50</option>
                    <option>51-200</option>
                    <option>201-1000</option>
                    <option>1000+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700">What would you like to focus on?</label>
                <textarea rows="4" className="mt-1 w-full rounded-md border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2596be]" placeholder="e.g., account mapping with Salesforce, partner portal, influence reporting" />
              </div>

              <button type="submit" className="w-full rounded-md bg-[#2596be] px-4 py-2.5 text-sm font-semibold text-white hover:brightness-105" style={{ boxShadow: '0 12px 28px rgba(37,150,190,0.28)' }}>
                Request demo
              </button>
              <p className="text-xs text-slate-500 text-center">By submitting, you agree to our Terms and Privacy Policy.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
