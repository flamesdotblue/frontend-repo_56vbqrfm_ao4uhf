import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="h-9 w-9 rounded-lg bg-indigo-600 text-white grid place-items-center font-bold">PRM</div>
            <p className="mt-3 text-sm text-slate-400">PartnerOS — modern Partner Relationship Management to onboard, enable, and grow your ecosystem.</p>
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
        <div className="mt-10 pt-6 border-t border-slate-800 text-xs text-slate-500 flex flex-col sm:flex-row gap-2 sm:items-center justify-between">
          <p>© {new Date().getFullYear()} PartnerOS, Inc. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
  </div>
        </div>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600">
          <p>© {new Date().getFullYear()} AlliedPRM. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:underline">Terms</a>
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
