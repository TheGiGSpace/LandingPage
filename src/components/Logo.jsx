import React from 'react';

const Logo = ({ size = 'md' }) => {
  // Dynamic sizing based on prop
  const sizes = {
    sm: 'text-2xl',
    md: 'text-3xl',
    lg: 'text-4xl',
    xl: 'text-5xl'
  };
  
  const textSize = sizes[size] || sizes.md;
  
  return (
    <div className="flex items-center justify-center logo-container">
      <div className={`bebas-neue-regular ${textSize} flex items-center relative px-1`}>
        <span className="text-[#045757] logo-pulse logo-text-glow">G</span>
        <span className="text-[#E4E4E4] text-[0.4em] absolute -right-1 top-1 mt-1">$</span>
      </div>
    </div>
  );
};

export default Logo;
