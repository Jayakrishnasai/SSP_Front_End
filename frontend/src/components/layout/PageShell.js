import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';

const PageShell = ({ children }) => {
  return (
    <div className="min-h-screen bg-white dark:bg-navy-900 transition-colors duration-500">
      <Header />
      <main className="overflow-x-hidden">
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
