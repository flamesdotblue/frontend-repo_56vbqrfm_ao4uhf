import React from 'react';

export default function Footer() {
  return (
    <footer id="footer" className="mt-24 bg-[#0e2a36] text-slate-300 border-t border-[#163847]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-[#2596be]"><span className="text-white font-bold">P</span></span>
            <span className="text-white font-semibold">PRM</span>
          </div>
          <p className="mt-4 text-sm text-slate-400 max-w-sm">
            Partner Relationship Management platform to connect, co-sell, and grow revenue with your ecosystem.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold">Product</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="#features" className="hover:text-white">Features</a></li>
            <li><a href="#integrations" className="hover:text-white">Integrations</a></li>
            <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold">Company</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="#blog" className="hover:text-white">Blog</a></li>
            <li><a href="#" className="hover:text-white">Careers</a></li>
            <li><a href="#" className="hover:text-white">Press</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold">Stay in the loop</h4>
          <p className="mt-3 text-sm text-slate-400">Get product updates and ecosystem growth tips.</p>
          <form className="mt-4 flex gap-2">
            <input type="email" placeholder="you@company.com" className="w-full rounded-md border border-[#163847] bg-[#0c2330] px-3 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#2596be]" />
            <button type="submit" className="rounded-md bg-[#2596be] px-4 py-2 text-sm font-semibold text-white hover:brightness-105" style={{ boxShadow: '0 8px 20px rgba(37,150,190,0.25)' }}>Subscribe</button>
          </form>
        </div>
      </div>
      <div className="border-t border-[#163847]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 text-xs text-slate-500 flex items-center justify-between">
          <p>© {new Date().getFullYear()} PRM, Inc. All rights reserved.</p>
          <div className="space-x-4">
            <a href="#" className="hover:text-slate-300">Privacy</a>
            <a href="#" className="hover:text-slate-300">Terms</a>
            <a href="#" className="hover:text-slate-300">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
