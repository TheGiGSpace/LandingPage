import { useState, useEffect } from 'react';
import AnimatedLogo from './AnimatedLogo';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-300" style={{ 
      backgroundColor: scrollPosition > 20 ? 'rgba(4, 38, 38, 0.8)' : 'transparent',
      backdropFilter: scrollPosition > 20 ? 'blur(12px)' : 'none',
      boxShadow: scrollPosition > 20 ? '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' : 'none'
    }}>
      <div className="container-custom py-6 flex items-center justify-between">
        {/* Logo only */}
        <div className="flex items-center ml-10">
          <a href="/" className="flex items-center group">
            <AnimatedLogo size="md" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            className="h-6 w-6"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
            />
          </svg>
        </button>

        {/* Mobile Menu - only visible when menu toggle is clicked */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-primary-dark/90 backdrop-blur-lg shadow-md py-4 px-6">
            <nav className="flex flex-col space-y-4">
              <a 
                href="#" 
                className="text-white hover:text-primary-light transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a 
                href="#how-it-works" 
                className="text-white hover:text-primary-light transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                How It Works
              </a>
              <a 
                href="#" 
                className="text-white hover:text-primary-light transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#" 
                className="text-white hover:text-primary-light transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <a 
                href="#cta" 
                className="btn-primary inline-block text-center py-2 px-4 rounded-full"
                onClick={() => setIsMenuOpen(false)}
              >
                Download the App
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
