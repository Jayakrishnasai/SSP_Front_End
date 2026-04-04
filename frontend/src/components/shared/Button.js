import React from 'react';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyles = 'px-6 py-3 rounded-xl font-bold transition-all duration-300 inline-flex items-center justify-center relative overflow-hidden';

  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 shadow-md active:scale-95',
    secondary: 'bg-gray-800 text-white hover:bg-gray-700 active:scale-95',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white active:scale-95',
    accent: 'bg-accent text-navy-900 hover:brightness-110 shadow-md active:scale-95 shadow-accent/20',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
