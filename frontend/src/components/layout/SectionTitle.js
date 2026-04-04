import React from 'react';

const SectionTitle = ({ title, subtitle, centered = false, dark = false }) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <div className={`inline-block h-1.5 w-12 bg-blue-600 dark:bg-accent rounded-full mb-4 ${centered ? 'mx-auto' : ''}`}></div>
      <h2 className={`text-2xl md:text-4xl font-black mb-4 leading-tight tracking-tighter ${
        dark ? 'text-white' : 'text-navy-900 dark:text-white'
      }`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-base md:text-lg font-medium max-w-3xl leading-relaxed ${
          centered ? 'mx-auto' : ''
        } ${dark ? 'text-gray-400' : 'text-gray-500 dark:text-gray-400'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
