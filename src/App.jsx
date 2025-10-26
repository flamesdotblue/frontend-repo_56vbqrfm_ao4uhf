import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

export default function App() {
  const [page, setPage] = React.useState('home');
  const scrollTargetRef = React.useRef(null);

  const handleNavigate = (next) => {
    setPage(next);
    scrollTargetRef.current = null;
  };

  const handleScrollTo = (id) => {
    if (page !== 'home') {
      scrollTargetRef.current = id;
      setPage('home');
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  React.useEffect(() => {
    if (page === 'home' && scrollTargetRef.current) {
      const el = document.getElementById(scrollTargetRef.current);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      scrollTargetRef.current = null;
    }
  }, [page]);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar currentPage={page} onNavigate={handleNavigate} onScrollTo={handleScrollTo} />
      <div className="flex-1">
        {page === 'home' && <Home />}
        {page === 'pricing' && <Pricing />}
      </div>
      <Footer />
    </div>
  );
}
