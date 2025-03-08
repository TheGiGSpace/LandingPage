import { useState } from 'react';

const AnimatedLogo = ({ size = 'md', className = '' }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isRotating, setIsRotating] = useState(false);
  
  // Define size classes for the image with responsive sizing
  const sizes = {
    sm: 'w-8 h-8 sm:w-9 sm:h-9',
    md: 'w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 lg:w-12 lg:h-12',
    lg: 'w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16',
    xl: 'w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20'
  };

  // Handle click animation
  const handleClick = () => {
    setIsRotating(true);
    setTimeout(() => setIsRotating(false), 1000);
  };
  
  return (
    <div className="relative inline-block">
      <div className="bg-black/20 rounded-xl p-0.5 sm:p-1 md:p-1.5 lg:p-2">
        <img
          src="/Logo2.png"
          alt="THEGIGSPACE Logo"
          className={`${sizes[size]} ${className} transition-all duration-300 ${isHovered ? 'scale-110 shadow-glow' : ''} ${isRotating ? 'animate-spin-once' : ''}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={handleClick}
        />
      </div>
      {isHovered && (
        <div className="absolute inset-0 bg-[#4ECCA3]/20 rounded-xl animate-pulse-subtle pointer-events-none"></div>
      )}
    </div>
  );
};

export default AnimatedLogo;
