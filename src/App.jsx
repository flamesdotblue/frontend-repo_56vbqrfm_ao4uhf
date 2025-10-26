import React from 'react';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import BookDemo from './components/BookDemo.jsx';
import Pricing from './components/Pricing.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Home />
      <BookDemo />
      <Pricing />
      <Footer />
    </div>
  );
}
