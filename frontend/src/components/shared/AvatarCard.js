import React from 'react';
import PropTypes from 'prop-types';

const AvatarCard = ({ name, role, image, description, className = '' }) => {
  return (
    <div
      className={`flex flex-col items-center text-center p-8 bg-white dark:bg-navy-800 rounded-3xl border border-gray-100 dark:border-navy-900/50 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ${className}`}
    >
      <div className="relative mb-6">
        <div className="absolute -inset-2 bg-gradient-to-tr from-accent to-blue-600 rounded-full opacity-20 blur-sm"></div>
        <div className="w-32 h-32 rounded-full overflow-hidden relative z-10 border-4 border-white dark:border-navy-900 shadow-md">
          <img src={image || 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=150&h=150'} alt={name} className="w-full h-full object-cover" />
        </div>
      </div>
      <h4 className="text-xl font-black text-navy-900 dark:text-white mb-1">{name}</h4>
      <p className="text-blue-600 dark:text-accent font-bold mb-4 tracking-tight uppercase text-xs">{role}</p>
      {description && <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed max-w-xs">{description}</p>}
    </div>
  );
};

AvatarCard.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  image: PropTypes.string,
  description: PropTypes.string,
  className: PropTypes.string,
};

export default AvatarCard;
