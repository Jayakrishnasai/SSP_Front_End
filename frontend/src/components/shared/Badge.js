import React from 'react';
import PropTypes from 'prop-types';

const Badge = ({ children, className = '' }) => {
  return (
    <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest bg-blue-100 text-blue-600 dark:bg-accent/10 dark:text-accent border border-blue-200 dark:border-accent/20 backdrop-blur-sm ${className}`}>
      {children}
    </span>
  );
};

Badge.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Badge;
