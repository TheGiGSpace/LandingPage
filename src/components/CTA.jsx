import React, { useEffect, useRef } from 'react';

const CTA = () => {
  const sectionRef = useRef(null);
  
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
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentRef = sectionRef.current;
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
    <section 
      id="cta" 
      ref={sectionRef}
      className="section-padding bg-gradient-to-b from-primary-dark to-primary text-white relative overflow-hidden"
    >
      {/* Trippy background animation */}
      <div className="absolute inset-0 trippy-dots opacity-20"></div>
      
      {/* Orbital particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="orbital-particle-1"></div>
        <div className="orbital-particle-2"></div>
        <div className="orbital-particle-3"></div>
      </div>
      
      {/* Glowing orbs */}
      <div className="absolute top-10 left-1/4 w-20 h-20 rounded-full bg-primary-light/30 blur-2xl pulse-slow"></div>
      <div className="absolute bottom-20 right-1/4 w-24 h-24 rounded-full bg-primary-light/20 blur-2xl pulse-slow-delay"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 glow-text reveal">
            Ready to Experience Local Excellence?
          </h2>
          <p className="text-xl text-gray-200 mb-12 reveal">
            Join TheGIGSpace and connect with local talent instantly.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 reveal">
            {/* App Store Button */}
            <a 
              href="#" 
              className="download-btn flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/20 shadow-glow transition-all duration-300 group w-full sm:w-auto"
            >
              <div className="relative z-10">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
              </div>
              <div className="text-left">
                <div className="text-xs text-gray-300">Download on</div>
                <div className="text-lg font-semibold">iOS App Store</div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-400/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </a>
            
            {/* Google Play Button */}
            <a 
              href="#" 
              className="download-btn flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/20 shadow-glow transition-all duration-300 group w-full sm:w-auto"
            >
              <div className="relative z-10">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 20.5v-17c0-.83.67-1.5 1.5-1.5.31 0 .6.1.84.26L13.8 7.72c.13.1.26.19.37.31.01.01.01.01.01.02 0 0 .01.01.01.02.11.12.24.25.34.39v.01c.09.14.17.29.22.45 0 .01.01.03.01.04.05.16.08.32.08.49s-.03.33-.08.49c0 .01-.01.03-.01.04-.05.16-.12.31-.22.45v.01c-.1.14-.23.27-.34.39 0 .01-.01.01-.01.02 0 .01-.01.01-.01.02-.11.12-.24.21-.37.31l-8.46 5.46c-.24.15-.53.25-.84.25C3.67 22 3 21.33 3 20.5zm2 .04l8.84-5.74-8.84-5.76v11.5z" />
                </svg>
              </div>
              <div className="text-left">
                <div className="text-xs text-gray-300">Get it on</div>
                <div className="text-lg font-semibold">Google Play</div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-400/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </a>
          </div>
          
          <p className="mt-10 text-sm text-gray-300 reveal">
            Available for iOS and Android devices. 
            <span className="block mt-1">Download now and start connecting with local professionals.</span>
          </p>
          
          {/* Floating device mockups */}
          <div className="mt-16 relative h-32 reveal">
            <div className="absolute left-1/2 top-0 transform -translate-x-[120px] phone-float">
              <div className="w-16 h-32 bg-black rounded-xl border-4 border-gray-700 overflow-hidden shadow-glow">
                <div className="w-full h-full bg-gradient-to-br from-primary/80 to-primary-light/80 flex items-center justify-center">
                  <span className="text-2xl">📱</span>
                </div>
              </div>
            </div>
            <div className="absolute left-1/2 top-0 transform -translate-x-0 translate-y-4 phone-float-delay">
              <div className="w-20 h-36 bg-black rounded-xl border-4 border-gray-700 overflow-hidden shadow-glow">
                <div className="w-full h-full bg-gradient-to-br from-primary/80 to-primary-light/80 flex items-center justify-center">
                  <span className="text-2xl">📱</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-primary-light/20 rounded-full blur-3xl"></div>
      <div className="absolute -top-20 -right-20 w-60 h-60 bg-primary-light/20 rounded-full blur-3xl"></div>
    </section>
  );
};

export default CTA;
