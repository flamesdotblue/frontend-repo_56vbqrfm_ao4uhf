import React from 'react';

const PRIMARY = '#2596be';
const FOOTER_BG = '#0e2a36';
const FOOTER_BORDER = '#163847';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: FOOTER_BG, color: '#c8d5dc' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="h-10 w-10 rounded-lg grid place-items-center font-bold text-white" style={{ backgroundColor: PRIMARY }}>PRM</div>
            <p className="mt-3 text-sm" style={{ color: '#a8b9c2' }}>AlliedPRM — modern Partner Relationship Management to onboard, enable, and grow your ecosystem.</p>
            <form onSubmit={(e)=>{e.preventDefault(); alert('Thanks for subscribing!');}} className="mt-5 flex gap-2">
              <input type="email" required placeholder="Enter your email" className="w-full rounded-md px-3 py-2 text-sm placeholder-slate-400 focus:outline-none focus:ring-2" style={{ backgroundColor: '#0b2330', color: '#e5eef2', border: `1px solid ${FOOTER_BORDER}`, boxShadow: 'none' }} />
              <button type="submit" className="rounded-md px-4 py-2 text-sm font-medium text-white hover:opacity-90" style={{ backgroundColor: PRIMARY }}>Subscribe</button>
            </form>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white">Product</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li>Onboarding</li>
              <li>Partner Portal</li>
              <li>Communication</li>
              <li>Deal Registration</li>
              <li>Programs</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white">Resources</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li>Blog</li>
              <li>Docs</li>
              <li>Support</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white">Company</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li>About</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 pt-6 flex flex-col sm:flex-row gap-3 sm:items-center justify-between" style={{ borderTop: `1px solid ${FOOTER_BORDER}`, color: '#8ea2ac' }}>
          <p>© {new Date().getFullYear()} AlliedPRM. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Terms</a>
            <a href="#" className="hover:underline">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
