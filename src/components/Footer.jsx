import React, { useEffect, useRef } from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const footerRef = useRef(null);
  
  // Add scroll reveal effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.reveal');
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('active');
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentRef = footerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);
  
  return (
    <footer ref={footerRef} className="bg-primary-dark text-white py-16 relative overflow-hidden">
      {/* Subtle background animations */}
      <div className="absolute inset-0 bg-grid opacity-5"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-light to-transparent"></div>
      
      {/* Glowing orbs */}
      <div className="absolute bottom-32 left-10 w-32 h-32 rounded-full bg-primary-light/5 blur-3xl pulse-slow"></div>
      <div className="absolute top-20 right-10 w-40 h-40 rounded-full bg-primary-light/5 blur-3xl pulse-slow-delay"></div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand Section */}
          <div className="md:col-span-1 reveal">
            <div className="mb-5">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">TheGIGSpace</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Connecting local talent with clients in real-time for a seamless service experience.
            </p>
            
            <div className="mt-6 inline-block">
              <div className="h-10 w-10 relative">
                <div className="absolute inset-0 bg-primary-light/20 rounded-full blur-sm animate-ping-slow"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xl">🌎</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="reveal">
            <h4 className="text-lg font-semibold mb-5 glow-text-sm">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'How It Works', 'About Us', 'Download App'].map((item) => (
                <li key={item} className="transform transition-transform duration-300 hover:-translate-y-1">
                  <a 
                    href={item === 'How It Works' ? '#how-it-works' : '#'} 
                    className="text-gray-400 hover:text-white transition-colors flex items-center group"
                  >
                    <span className="w-0 h-[1px] bg-primary-light group-hover:w-3 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Legal */}
          <div className="reveal">
            <h4 className="text-lg font-semibold mb-5 glow-text-sm">Legal</h4>
            <ul className="space-y-3">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
                <li key={item} className="transform transition-transform duration-300 hover:-translate-y-1">
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-white transition-colors flex items-center group"
                  >
                    <span className="w-0 h-[1px] bg-primary-light group-hover:w-3 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div className="reveal">
            <h4 className="text-lg font-semibold mb-5 glow-text-sm">Contact</h4>
            <ul className="space-y-3">
              {['Support', 'Careers', 'Press'].map((item) => (
                <li key={item} className="transform transition-transform duration-300 hover:-translate-y-1">
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-white transition-colors flex items-center group"
                  >
                    <span className="w-0 h-[1px] bg-primary-light group-hover:w-3 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex space-x-5">
              {/* Social Media Icons */}
              {[
                { icon: "M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z", name: "Facebook" },
                { icon: "M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z", name: "Twitter" },
                { icon: "M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z", name: "LinkedIn" },
                { icon: "M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z", name: "Instagram" }
              ].map((social) => (
                <a 
                  key={social.name}
                  href="#" 
                  aria-label={social.name}
                  className="social-icon-container relative group"
                >
                  <div className="absolute inset-0 bg-primary-light/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400 group-hover:text-white transition-colors relative z-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center reveal">
          <p className="text-sm text-gray-500">
            &copy; {currentYear} TheGIGSpace. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 text-sm text-gray-500 flex items-center gap-2">
            <span className="inline-block w-4 h-4 bg-primary-light/20 rounded-full pulse-slow"></span>
            Made with ❤️ for local communities
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
