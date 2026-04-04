import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ children, className = '', hover = true }) => {
  return (
    <div
      className={`bg-white dark:bg-navy-800 rounded-3xl border border-gray-100 dark:border-navy-900/50 p-8 shadow-sm transition-all duration-300 ${hover ? 'hover:-translate-y-2 hover:shadow-xl' : ''} ${className}`}
    >
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  hover: PropTypes.bool,
};

export default Card;
