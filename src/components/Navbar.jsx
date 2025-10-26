import React from 'react';
import { Rocket, Menu } from 'lucide-react';

const Navbar = ({ onNavigate, onScrollTo, currentPage }) => {
  const [open, setOpen] = React.useState(false);

  const NavLink = ({ label, page, anchor }) => {
    const isActive = currentPage === page;
    const handleClick = (e) => {
      e.preventDefault();
      if (page) {
        onNavigate(page);
      }
      if (anchor) {
        onScrollTo(anchor);
      }
      setOpen(false);
    };
    return (
      <a
        href="#"
        onClick={handleClick}
        className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
          isActive ? 'text-white bg-[#2596be]' : 'text-gray-700 hover:text-[#2596be]'
        }`}
      >
        {label}
      </a>
    );
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Rocket className="h-6 w-6 text-[#2596be]" />
            <span className="font-semibold text-lg">AlliedPRM</span>
          </div>
          <nav className="hidden md:flex items-center gap-2">
            <NavLink label="Home" page="home" />
            <NavLink label="Blog" page="home" anchor="blog" />
            <NavLink label="Integrations" page="home" anchor="integrations" />
            <NavLink label="Pricing" page="pricing" />
            <a
              href="#"
              onClick={(e)=>{e.preventDefault(); alert('Our sales team will reach out shortly!');}}
              className="ml-2 inline-flex items-center justify-center rounded-md bg-[#2596be] px-4 py-2 text-sm font-medium text-white shadow-sm hover:opacity-90"
            >
              Talk to sales
            </a>
          </nav>
          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100"
            onClick={() => setOpen(v => !v)}
            aria-label="Toggle menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-3 flex flex-col gap-2">
            <NavLink label="Home" page="home" />
            <NavLink label="Blog" page="home" anchor="blog" />
            <NavLink label="Integrations" page="home" anchor="integrations" />
            <NavLink label="Pricing" page="pricing" />
            <a
              href="#"
              onClick={(e)=>{e.preventDefault(); alert('Our sales team will reach out shortly!');}}
              className="inline-flex items-center justify-center rounded-md bg-[#2596be] px-4 py-2 text-sm font-medium text-white shadow-sm hover:opacity-90"
            >
              Talk to sales
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
