import React from 'react';
import Header from './Header';
import Footer from './Footer';

const PageShell = ({ children }) => {
  return (
    <div className="min-h-screen bg-white dark:bg-navy-900 transition-colors duration-500">
      <a
        href="#main-content"
        className="fixed top-4 left-4 -translate-y-[200%] focus:translate-y-0 transition-transform bg-teal-400 text-navy-900 px-4 py-2 rounded-md font-bold z-[100] outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-navy-900 shadow-xl"
      >
        Skip to Content
      </a>
      <Header />
      <main id="main-content" className="overflow-x-hidden outline-none" tabIndex="-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default PageShell;
