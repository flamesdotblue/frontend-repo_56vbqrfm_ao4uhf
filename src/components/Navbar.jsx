import React from 'react';

const brand = {
  primary: '#2596be',
};

export default function Navbar() {
  const handleNavClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/75 backdrop-blur border-b border-slate-200">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2" onClick={(e) => handleNavClick(e, 'home')}>
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md" style={{ backgroundColor: brand.primary }}>
            <span className="text-white font-bold">P</span>
          </span>
          <span className="font-semibold text-slate-900">PRM</span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm text-slate-700">
          <a href="#features" onClick={(e) => handleNavClick(e, 'features')} className="hover:text-slate-900">Features</a>
          <a href="#integrations" onClick={(e) => handleNavClick(e, 'integrations')} className="hover:text-slate-900">Integrations</a>
          <a href="#blog" onClick={(e) => handleNavClick(e, 'blog')} className="hover:text-slate-900">Blog</a>
          <a href="#pricing" onClick={(e) => handleNavClick(e, 'pricing')} className="hover:text-slate-900">Pricing</a>
          <a href="#demo" onClick={(e) => handleNavClick(e, 'demo')} className="hover:text-slate-900">Book demo</a>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#demo"
            onClick={(e) => handleNavClick(e, 'demo')}
            className="hidden sm:inline-flex items-center rounded-md bg-[#2596be] px-4 py-2 text-sm font-semibold text-white shadow hover:brightness-105 focus:outline-none focus:ring-2 focus:ring-offset-2"
            style={{ boxShadow: '0 8px 20px rgba(37,150,190,0.25)' }}
          >
            Book demo
          </a>
          <a
            href="#pricing"
            onClick={(e) => handleNavClick(e, 'pricing')}
            className="inline-flex items-center rounded-md bg-white px-4 py-2 text-sm font-semibold text-slate-900 ring-1 ring-slate-200 hover:bg-slate-50"
          >
            Get started
          </a>
        </div>
      </nav>
    </header>
  );
}
