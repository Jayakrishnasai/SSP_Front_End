import React from 'react';

const SectionTitle = ({ title, subtitle, centered = false, dark = false }) => {
  return (
    <div className={`mb-20 ${centered ? 'text-center' : ''}`}>
      <div className={`inline-block h-1.5 w-12 bg-blue-600 dark:bg-accent rounded-full mb-6 ${centered ? 'mx-auto' : ''}`}></div>
      <h2 className={`text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tighter ${
        dark ? 'text-white' : 'text-navy-900 dark:text-white'
      }`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-xl md:text-2xl font-medium max-w-3xl leading-relaxed ${
          centered ? 'mx-auto' : ''
        } ${dark ? 'text-gray-400' : 'text-gray-500 dark:text-gray-400'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
