import React, { useState, useEffect } from 'react';
import Button from '../shared/Button';

const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
);

const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
);

const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
);

const XIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
);

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check initial system theme or saved preference
    const isDark = document.documentElement.classList.contains('dark');
    setIsDarkMode(isDark);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      setIsDarkMode(false);
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      setIsDarkMode(true);
      localStorage.setItem('theme', 'dark');
    }
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Programs', href: '#programs' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 w-full flex items-center ${
      isScrolled 
        ? 'bg-white/80 dark:bg-navy-900/80 backdrop-blur-lg shadow-2xl py-3 border-b border-gray-100 dark:border-white/5' 
        : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center text-navy-900 dark:text-white">
        <button
          className="flex items-center space-x-3 group cursor-pointer"
          onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
          aria-label="Back to top"
        >
          <div className="w-9 h-9 bg-accent rounded-xl flex items-center justify-center font-black text-navy-900 transform group-hover:rotate-12 transition-transform shadow-xl shadow-accent/20 text-sm">P</div>
          <span className="text-xl font-black tracking-tighter">Perseverance</span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-black text-[11px] uppercase tracking-widest transition-all hover:text-accent opacity-80 hover:opacity-100 hover:-translate-y-0.5"
            >
              {link.name}
            </a>
          ))}
          
          <div className="flex items-center space-x-6 border-l border-gray-100 dark:border-white/10 pl-10">
            <button
              onClick={toggleDarkMode}
              aria-label="Toggle Dark Mode"
              className="p-2.5 rounded-2xl bg-gray-50 dark:bg-white/5 hover:bg-accent/20 dark:hover:bg-accent/20 text-navy-900 dark:text-white transition-all transform hover:scale-110 active:scale-95 shadow-sm"
            >
              {isDarkMode ? <SunIcon /> : <MoonIcon />}
            </button>
            <Button variant="accent" className="!px-7 !py-3 text-[10px] font-black uppercase tracking-[0.2em] rounded-2xl shadow-xl shadow-accent/20 active:scale-95">Enroll Now</Button>
          </div>
        </nav>

        {/* Mobile Nav Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          <button
            onClick={toggleDarkMode}
            aria-label="Toggle Dark Mode"
            className="p-2 rounded-xl bg-gray-50 dark:bg-white/5 text-navy-900 dark:text-white"
          >
            {isDarkMode ? <SunIcon /> : <MoonIcon />}
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            className="p-2 rounded-xl bg-navy-900 dark:bg-accent text-white dark:text-navy-900 shadow-xl transition-transform active:scale-90"
          >
            {isMobileMenuOpen ? <XIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Modern Mobile Menu Overlay */}
      <div className={`md:hidden fixed inset-0 z-40 bg-white dark:bg-navy-900 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] transform ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full p-8 pt-28">
           <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-bl-full blur-3xl pointer-events-none"></div>
           
           <nav className="flex flex-col space-y-8 relative z-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-4xl font-black text-navy-900 dark:text-white hover:text-accent transition-all tracking-tighter"
              >
                {link.name}
              </a>
            ))}
          </nav>
          
          <div className="mt-auto pb-10 relative z-10">
            <div className="h-px bg-gray-100 dark:bg-white/5 mb-10"></div>
            <Button variant="accent" className="w-full !py-5 rounded-2xl text-lg font-black uppercase tracking-widest shadow-2xl shadow-accent/20">Enroll Now</Button>
            <div className="flex justify-center space-x-8 mt-12 text-gray-400 dark:text-gray-500 font-bold uppercase text-[10px] tracking-widest">
                <span>Facebook</span>
                <span>Twitter</span>
                <span>LinkedIn</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
