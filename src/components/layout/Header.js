import React, { useState, useEffect } from 'react';
import Button from '../shared/Button';

const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
);

const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
);

const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
);

const XIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
);

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      setIsDarkMode(true);
    }
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Programs', href: '#programs' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full flex items-center min-h-[70px] ${
      isScrolled ? 'bg-white/90 dark:bg-navy-900/90 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <button
          className="flex items-center space-x-3 group cursor-pointer"
          onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
          aria-label="Back to top"
        >
          <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center font-black text-navy-900 transform group-hover:rotate-12 transition-transform shadow-lg shadow-accent/20">P</div>
          <span className={`text-2xl font-black tracking-tighter ${isScrolled ? 'text-navy-900 dark:text-white' : 'text-white'}`}>Perseverance</span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`font-bold text-sm uppercase tracking-widest transition-colors hover:text-accent ${
                isScrolled ? 'text-navy-900 dark:text-white' : 'text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
          <div className="flex items-center space-x-6 border-l border-gray-200 dark:border-navy-800/50 pl-10">
            <button
              onClick={toggleDarkMode}
              aria-label="Toggle Dark Mode"
              className={`p-2.5 rounded-xl transition-all hover:scale-110 active:scale-95 ${
                isScrolled ? 'text-navy-900 dark:text-white hover:bg-gray-100 dark:hover:bg-navy-800' : 'text-white hover:bg-white/10'
              }`}
            >
              {isDarkMode ? <SunIcon /> : <MoonIcon />}
            </button>
            <Button variant="accent" className="!px-8 !py-3 text-xs uppercase tracking-widest rounded-full shadow-accent/30">Enroll Now</Button>
          </div>
        </nav>

        {/* Mobile Nav Toggle */}
        <div className="md:hidden flex items-center space-x-4 relative z-[60]">
          <button
            onClick={toggleDarkMode}
            aria-label="Toggle Dark Mode"
            className={`p-2 rounded-xl ${isScrolled ? 'text-navy-900 dark:text-white' : 'text-white'}`}
          >
            {isDarkMode ? <SunIcon /> : <MoonIcon />}
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            className={`p-2 rounded-xl transition-colors ${isScrolled ? 'text-navy-900 dark:text-white' : 'text-white bg-white/10'}`}
          >
            {isMobileMenuOpen ? <XIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Modern Mobile Menu Overlay */}
      <div className={`md:hidden fixed inset-0 z-50 bg-white dark:bg-navy-900 transition-all duration-500 transform ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full p-8 pt-24">
          <nav className="flex flex-col space-y-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-4xl font-black text-navy-900 dark:text-white hover:text-accent transition-colors tracking-tighter"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="mt-auto pb-12">
            <div className="h-px bg-gray-100 dark:bg-navy-800 mb-12"></div>
            <Button variant="accent" className="w-full !py-6 rounded-2xl text-lg uppercase tracking-widest">Enroll Now</Button>
            <p className="text-center mt-8 text-gray-500 dark:text-gray-400 font-bold uppercase text-[10px] tracking-[0.2em]">
              © {new Date().getFullYear()} Perseverance Institute
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
