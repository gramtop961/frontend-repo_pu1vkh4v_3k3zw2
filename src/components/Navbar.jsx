import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-colors ${
      scrolled ? 'bg-white/70 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-500 via-sky-500 to-cyan-400" />
          <span className="font-semibold tracking-tight text-slate-800">ArabixDev</span>
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm">
          <button onClick={() => scrollTo('home')} className="text-slate-700 hover:text-slate-900 transition-colors">Home</button>
          <button onClick={() => scrollTo('projects')} className="text-slate-700 hover:text-slate-900 transition-colors">Projects</button>
          <button onClick={() => scrollTo('contact')} className="text-slate-700 hover:text-slate-900 transition-colors">Contact</button>
        </div>
        <div className="md:hidden" />
      </nav>
    </header>
  );
}
