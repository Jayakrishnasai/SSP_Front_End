import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';

const PageShell = ({ children }) => {
  return (
    <div className="min-h-screen bg-white dark:bg-navy-900 transition-colors duration-500">
      <a
        href="#main-content"
        className="fixed top-4 left-4 z-[100] bg-accent text-navy-900 px-6 py-3 rounded-xl font-black uppercase tracking-widest text-xs shadow-2xl transform -translate-y-[200%] focus:translate-y-0 transition-transform duration-300 outline-none ring-4 ring-accent/20"
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

PageShell.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageShell;
